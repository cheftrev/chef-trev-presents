import { IMAGES } from "@/lib/images";

export type ExperienceFaq = { q: string; a: string };

export type Experience = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroAlt: string;
  paragraphs: string[];
  cta: { label: string; href: string };
  image: string;
  faqs: ExperienceFaq[];
  siblings: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    slug: "chefs-table",
    eyebrow: "The Flagship",
    title: "The Chef's Table — Bamboo Oasis",
    metaTitle: "Chef's Table Experience in Los Angeles | Bamboo Oasis",
    metaDescription: "One candlelit table in a bamboo garden, a seasonal family-style menu, live music. Book a seat for one or the whole table — Chef Trev Presents, LA.",
    metaKeywords: "chef's table Los Angeles, bamboo garden dinner, communal dining experience LA",
    heroAlt: "The bamboo bar at the Bamboo Oasis, ready for the night",
    paragraphs: [
      "Our flagship. One candlelit table in a bamboo-lined garden, a multi-course menu built from that week's Los Angeles farm haul, and live music drifting through the leaves.",
      "Come alone, if you like — a single seat at this table isn't the edge case, it's the whole idea. You arrive as guests. You leave as a table.",
    ],
    cta: { label: "Request Your Seat", href: "/contact" },
    image: IMAGES.atmosphere.bambooBar,
    faqs: [
      {
        q: "What does a night at the Bamboo Oasis actually look like?",
        a: "One candlelit table in a bamboo-lined garden, a multi-course menu served family style, and live music drifting through the leaves. You'll be seated with people you haven't met yet — that's the design, not an accident. You arrive as guests. You leave as a table.",
      },
      {
        q: "Is there a set menu?",
        a: "No — the menu is built from that week's Los Angeles farm haul, so it changes with the season and what's best right now. It's served family style, and the farms are named on the printed menu. Share any dietary restrictions when you request a seat; the menu adapts, not downgrades.",
      },
      {
        q: "How is this different from a restaurant reservation?",
        a: "A restaurant seats your party at its own table and leaves you there. Here there's one shared table, and the whole night is designed — sourcing, menu, music, seating, flow — so you connect with the people around you, not just the food. There's no alcohol program either, and guests consistently tell us these are some of the most present nights they've had.",
      },
      {
        q: "Can I come alone?",
        a: "Yes — and honestly, coming alone might be the purest version of the whole idea. This company exists because the world is lonely, and one seat at a shared table is the answer, not the awkward exception. We'll seat you in the middle of things, and by dessert you won't feel like you came alone. Request one seat the same way you'd request ten.",
      },
    ],
    siblings: ["private-dinners", "events"],
  },
  {
    slug: "private-dinners",
    eyebrow: "Your Place",
    title: "Intimate Home Dinners",
    metaTitle: "Private Chef for Home Dinners in Los Angeles | Chef Trev Presents",
    metaDescription: "A private chef in your kitchen for anniversaries, reunions, and small gatherings. Seasonal, farm-traced menus cooked and served in your own home.",
    metaKeywords: "private chef home dinner Los Angeles, in-home chef experience, small dinner party chef LA",
    heroAlt: "Trevor prepping in the kitchen before guests arrive",
    paragraphs: [
      "Your home, our kitchen. We bring the menu, the fire, and the flow to your space — for the anniversary, the reunion, the eight people you've been meaning to get in one room for two years. You host. We handle everything else.",
    ],
    cta: { label: "Plan Your Night", href: "/contact" },
    image: IMAGES.events.kitchenChefPrep,
    faqs: [
      {
        q: "Do you actually cook in my kitchen?",
        a: "Yes — your home, our kitchen. We bring the menu, the fire, and the flow to your space; you host, and we handle everything else. Every kitchen is different, so tell us about yours in the inquiry form and we'll plan the night around it.",
      },
      {
        q: "How many guests can I host at home?",
        a: "Home dinners live at the intimate end — the anniversary, the reunion, the eight people you've been meaning to get in one room for two years. Share your guest count in the form and we'll design the right table for it.",
      },
      {
        q: "Who plans the menu?",
        a: "We do — with you. The menu is built seasonally from local Los Angeles farms with traceable sourcing, then shaped around your people: the occasion, the favorites, the restrictions. Guests with dietary restrictions get the kitchen's best work here, not an afterthought.",
      },
      {
        q: "Who actually shows up on the night?",
        a: "Head Chef Trevor Brown and Head of Experience Adam Sanchez — the same two people you'll talk to when you book. No rotating roster, no strangers in your house. The people planning your night are the people at your stove.",
      },
    ],
    siblings: ["chefs-table", "events"],
  },
  {
    slug: "events",
    eyebrow: "The Big Ones",
    title: "Milestone Celebrations & Private Events",
    metaTitle: "Milestone & Private Event Catering in Los Angeles | Chef Trev Presents",
    metaDescription: "Birthdays, engagements, send-offs — private event dining built around your milestone, with a family-style menu that makes a crowd feel like a table.",
    metaKeywords: "private event chef Los Angeles, milestone celebration catering, birthday dinner private chef",
    heroAlt: "Guests gathered close around a candlelit table",
    paragraphs: [
      "The birthdays that end in zero. The engagement. The send-off. When a moment deserves more than a restaurant reservation, we build the night around it — menu, music, and a table that makes 30 people feel like family.",
    ],
    cta: { label: "Mark the Moment", href: "/contact" },
    image: IMAGES.people.candlelitTable,
    faqs: [
      {
        q: "How far in advance should I reach out?",
        a: "As soon as you know the date. Every event is designed from scratch — menu, music, seating, flow — so more runway means more options. Submit the inquiry form and the team replies personally within two business days.",
      },
      {
        q: "Do I need my own venue?",
        a: "No. We build nights in private homes, at the Bamboo Oasis, and at venues chosen for the occasion. If you have a place, we'll build the night there; if you don't, tell us what you're picturing and we'll figure out the right room together.",
      },
      {
        q: "My guests run from vegan to carnivore. Can one menu feed them all?",
        a: "Yes — that's what family style is for. The table carries abundance and variety, so everyone eats well from the same spread, together. And guests with restrictions get the kitchen's best work, not a sad substitute plate — just share the details when you book.",
      },
      {
        q: "There's no alcohol. Will my guests miss it?",
        a: "Honest answer: no. The night is built around food, music, and connection — no alcohol program, ever — and guests consistently describe these as some of the most present nights they've had. Your people will actually remember the celebration, which is the point.",
      },
    ],
    siblings: ["private-dinners", "brand-collaborations"],
  },
  {
    slug: "brand-collaborations",
    eyebrow: "For Brands",
    title: "Brand Collaborations & Partnerships",
    metaTitle: "Brand Dinner Experiences & Corporate Events LA | Chef Trev Presents",
    metaDescription: "Product launches, team offsites, partner dinners designed so guests remember the conversation, not the signage. Selective brand collaborations in LA.",
    metaKeywords: "brand dinner experience, corporate event chef Los Angeles, product launch dinner LA",
    heroAlt: "Dishes being served family style at a private event",
    paragraphs: [
      "Dinners for brands that put people first. Product launches, team gatherings, partner events — designed so your guests remember the conversation, not the signage. We're selective. If your values match ours, we'll build something great together.",
    ],
    cta: { label: "Start a Conversation", href: "/contact" },
    image: IMAGES.events.foodServing,
    faqs: [
      {
        q: "How does this work for a team offsite?",
        a: "One shared table, a family-style dinner, and a night designed so your team actually talks to each other. We build it end to end — sourcing, menu, seating, flow — around what the gathering is for: the launch, the milestone, the reset. Share your headcount, dates, and budget range in the form and we'll design the right table for it.",
      },
      {
        q: "Do you work with any brand?",
        a: "No — we're selective, and we'll tell you early. Everything we put our name on has to be true, so if your product or philosophy works against ours, we'll pass with respect. If the values line up, we'll build something great together.",
      },
      {
        q: "Can you build the night around our product launch?",
        a: "Yes — that's what a launch dinner is for. We design the menu and the experience around what you're launching, so the product lives in the conversation instead of on the signage. Your guests should leave talking about the night, and about you.",
      },
      {
        q: "Are you a caterer?",
        a: "No. We're an experience company — every night is designed end to end, from sourcing to seating to flow. If you need trays dropped off, we're the wrong call. If you want your guests to leave as a table, let's talk.",
      },
    ],
    siblings: ["events", "destination"],
  },
  {
    slug: "destination",
    eyebrow: "Beyond LA",
    title: "Destination Experiences",
    metaTitle: "Destination Private Chef Experiences | Chef Trev Presents",
    metaDescription: "The table travels. Chef Trev Presents scouts, sources, and builds full private dining experiences wherever your gathering is — beyond Los Angeles.",
    metaKeywords: "destination private chef, traveling chef experience, private dinner outside Los Angeles",
    heroAlt: "An empty table waiting, wherever the night takes it",
    paragraphs: [
      "The table travels. For gatherings beyond Los Angeles, we scout, source, and build the full experience wherever your people are. Tell us where. We'll bring the fire.",
    ],
    cta: { label: "Tell Us Where", href: "/contact" },
    image: IMAGES.events.tableEmpty,
    faqs: [
      {
        q: "How far will you travel?",
        a: "Tell us where. For gatherings beyond Los Angeles we scout, source, and build the full experience wherever your people are. Put the location in the inquiry form and we'll be straight with you about whether we can do it right.",
      },
      {
        q: "You're built on LA farms. What happens to sourcing when you leave LA?",
        a: "The standard travels with us. Traceable sourcing is non-negotiable, so scouting a destination means finding its farms and markets before we ever light a fire — we want to know whose hands grew the food, wherever the table lands.",
      },
      {
        q: "What does a destination experience cost?",
        a: "Every event is quoted individually — location, guest count, and menu all shape it, and travel is part of that conversation. The inquiry form includes budget ranges to start honestly, and we build the best possible night within your budget rather than upselling past it.",
      },
      {
        q: "Who actually travels?",
        a: "Head Chef Trevor Brown and Head of Experience Adam Sanchez — the same two people behind every Chef Trev Presents dinner. No franchise crew, no subcontracted team wearing our name. The table travels because we do.",
      },
    ],
    siblings: ["brand-collaborations", "chefs-table"],
  },
];

export function getExperience(slug: string): Experience {
  const found = EXPERIENCES.find((e) => e.slug === slug);
  if (!found) throw new Error(`Unknown experience slug: ${slug}`);
  return found;
}
