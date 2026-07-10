import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { notifyOwner } from "./_core/notification";
import { createInquiry } from "./db";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiry: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          eventType: z.string().min(1, "Event type is required"),
          guestCount: z.string().optional().default(""),
          location: z.string().optional().default(""),
          budget: z.string().optional().default(""),
          date: z.string().optional().default(""),
          message: z.string().optional().default(""),
        })
      )
      .mutation(async ({ input }) => {
        // Save inquiry to database
        await createInquiry({
          name: input.name,
          email: input.email,
          eventType: input.eventType,
          guestCount: input.guestCount || null,
          location: input.location || null,
          budget: input.budget || null,
          date: input.date || null,
          message: input.message || null,
        });

        // Send notification to Chef Trev
        const notificationContent = [
          `**Name:** ${input.name}`,
          `**Email:** ${input.email}`,
          `**Experience Type:** ${input.eventType}`,
          input.guestCount ? `**Guest Count:** ${input.guestCount}` : null,
          input.location ? `**Location:** ${input.location}` : null,
          input.budget ? `**Budget:** ${input.budget}` : null,
          input.date ? `**Preferred Date:** ${input.date}` : null,
          input.message ? `**Message:** ${input.message}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        // Attempt notification with retry for reliability
        let notified = false;
        for (let attempt = 0; attempt < 3 && !notified; attempt++) {
          try {
            notified = await notifyOwner({
              title: `New Inquiry: ${input.eventType} from ${input.name}`,
              content: notificationContent,
            });
          } catch {
            // Retry on next iteration
          }
          if (!notified && attempt < 2) {
            await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
          }
        }
        if (!notified) {
          console.error(`[Inquiry] Failed to notify owner for inquiry from ${input.email} after 3 attempts`);
        }

        return { success: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
