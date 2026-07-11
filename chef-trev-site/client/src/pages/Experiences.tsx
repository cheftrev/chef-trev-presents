import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { revealUp, viewportOnce } from "@/lib/motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BANDS = [
  {
    eyebrow: "The Flagship",
    title: "The Chef's Table — Bamboo Oasis",
    paragraphs: [
      "Our flagship. One candlelit table in a bamboo-lined garden, a multi-course menu built from that week's Los Angeles farm haul, and live music drifting through the leaves.",
      "Come alone, if you like — a single seat at this table isn't the edge case, it's the whole idea. You arrive as guests. You leave as a table.",
    ],
    cta: { label: "Request Your Seat", href: "/contact" },
    image: IMAGES.atmosphere.bambooBar,
    alt: "The bamboo bar at the Bamboo Oasis, ready for the night",
  },
  {
    eyebrow: "Your Place",
    title: "Intimate Home Dinners",
    paragraphs: [
      "Your home, our kitchen. We bring the menu, the fire, and the flow to your space — for the anniversary, the reunion, the eight people you've been meaning to get in one room for two years. You host. We handle everything else.",
    ],
    cta: { label: "Plan Your Night", href: "/contact" },
    image: IMAGES.events.kitchenChefPrep,
    alt: "Trevor prepping in the kitchen before guests arrive",
  },
  {
    eyebrow: "The Big Ones",
    title: "Milestone Celebrations & Private Events",
    paragraphs: [
      "The birthdays that end in zero. The engagement. The send-off. When a moment deserves more than a restaurant reservation, we build the night around it — menu, music, and a table that makes 30 people feel like family.",
    ],
    cta: { label: "Mark the Moment", href: "/contact" },
    image: IMAGES.people.candlelitTable,
    alt: "Guests gathered close around a candlelit table",
  },
  {
    eyebrow: "For Brands",
    title: "Brand Collaborations & Partnerships",
    paragraphs: [
      "Dinners for brands that put people first. Product launches, team gatherings, partner events — designed so your guests remember the conversation, not the signage. We're selective. If your values match ours, we'll build something great together.",
    ],
    cta: { label: "Start a Conversation", href: "/contact" },
    image: IMAGES.events.foodServing,
    alt: "Dishes being served family style at a private event",
  },
  {
    eyebrow: "Beyond LA",
    title: "Destination Experiences",
    paragraphs: [
      "The table travels. For gatherings beyond Los Angeles, we scout, source, and build the full experience wherever your people are. Tell us where. We'll bring the fire.",
    ],
    cta: { label: "Tell Us Where", href: "/contact" },
    image: IMAGES.events.tableEmpty,
    alt: "An empty table waiting, wherever the night takes it",
  },
];

export default function Experiences() {
  useEffect(() => {
    document.title = "Chef's Table & Private Dinners in Los Angeles | Chef Trev";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Five ways to gather: the Bamboo Oasis chef's table, intimate home dinners, milestone events, brand collaborations & destination dining. Built in LA.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "chef's table experience LA, private dinner party chef Los Angeles, corporate dinner event LA, brand dinner experience, destination private chef";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.tableCloseUp}
            alt="Table details up close — the table waiting to be picked"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-black/50 via-warm-black/20 to-warm-black" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow mb-4"
          >
            Five Ways to Gather
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6"
          >
            Pick your table.
          </motion.h1>
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-cream/70 max-w-xl leading-relaxed"
          >
            Five ways to gather. Same team, same sourcing, same promise: you leave more connected than you arrived.
          </motion.p>
        </div>
      </section>

      {/* Five bands */}
      {BANDS.map((band, i) => {
        const imageOnRight = i % 2 === 1;
        return (
          <section key={band.title} className={`py-24 sm:py-32 ${i % 2 === 1 ? "bg-charcoal" : ""}`}>
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={0}
                  className={`aspect-[4/5] overflow-hidden ${imageOnRight ? "order-1 lg:order-2" : "order-1"}`}
                >
                  <img
                    src={band.image}
                    alt={band.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className={imageOnRight ? "order-2 lg:order-1" : "order-2"}>
                  <motion.p
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={0}
                    className="eyebrow mb-4"
                  >
                    {band.eyebrow}
                  </motion.p>
                  <motion.h2
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={1}
                    className="font-serif text-3xl sm:text-4xl leading-tight mb-6"
                  >
                    {band.title}
                  </motion.h2>
                  <motion.div
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={2}
                    className="space-y-4 text-cream/60 leading-relaxed mb-8"
                  >
                    {band.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </motion.div>
                  <motion.div
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={3}
                  >
                    <Link
                      href={band.cta.href}
                      className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
                    >
                      {band.cta.label}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing */}
      <section className="py-32 sm:py-40 text-center">
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-cream/70 max-w-lg mx-auto px-5 leading-relaxed mb-6"
        >
          Not sure which fits? Tell us about your night — we'll figure it out together.
        </motion.p>
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={1}
          className="font-serif italic text-2xl sm:text-3xl text-cream/90"
        >
          See you at the table.
        </motion.p>
      </section>

      </main>
      <Footer />
    </div>
  );
}
