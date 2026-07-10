import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  createInquiry: vi.fn().mockResolvedValue([{ insertId: 1 }]),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("inquiry.submit", () => {
  it("accepts a valid inquiry and returns success", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.inquiry.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      eventType: "Private Dinner",
      guestCount: "12",
      location: "Los Angeles",
      budget: "$5,000 – $10,000",
      date: "June 2026",
      message: "We'd love a garden dinner for our anniversary.",
    });

    expect(result).toEqual({ success: true });
  });

  it("accepts minimal required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.inquiry.submit({
      name: "John",
      email: "john@example.com",
      eventType: "Chef's Table (Bamboo Oasis)",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects missing name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.inquiry.submit({
        name: "",
        email: "test@example.com",
        eventType: "Private Dinner",
      })
    ).rejects.toThrow();
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.inquiry.submit({
        name: "Test",
        email: "not-an-email",
        eventType: "Private Dinner",
      })
    ).rejects.toThrow();
  });

  it("calls notifyOwner with correct title format", async () => {
    const { notifyOwner } = await import("./_core/notification");
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.inquiry.submit({
      name: "Alice",
      email: "alice@example.com",
      eventType: "Brand Collaboration",
    });

    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Inquiry: Brand Collaboration from Alice",
      })
    );
  });

  it("still returns success even if notification fails (retry exhausted)", async () => {
    const { notifyOwner } = await import("./_core/notification");
    const mockNotify = notifyOwner as ReturnType<typeof vi.fn>;
    mockNotify.mockClear();
    mockNotify.mockResolvedValue(false);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.inquiry.submit({
      name: "Bob",
      email: "bob@example.com",
      eventType: "Private Dinner",
    });

    // Should still succeed (inquiry saved) even if notification fails
    expect(result).toEqual({ success: true });
    // notifyOwner should have been called 3 times (retry logic)
    expect(mockNotify).toHaveBeenCalledTimes(3);

    // Reset mock to default behavior
    mockNotify.mockResolvedValue(true);
  });
});
