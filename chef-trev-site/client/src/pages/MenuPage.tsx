import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { revealUp } from "@/lib/motion";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import { setSocialMeta } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PastMenusArchive from "@/components/PastMenusArchive";

// Real, hand-set date -- updated only when Trevor actually changes the menu.
// Never compute this from the current date (Design Manifesto §9, amended SM2).
const MENU_SET_DOWN = "SET DOWN JULY 2026";

const COURSES = [
  {
    label: "From the Water",
    dish: "Citrus-Cured Local Catch",
    description: "Sustainably caught white fish cured in citrus, finished with crisp fennel and cold-pressed olive oil.",
    source: "Sourced from [fishery/dock, e.g., a Santa Barbara day boat].",
  },
  {
    label: "The Greens",
    dish: "Crisp Kale Caesar",
    description: "Crisp kale tossed in our house lemon-caesar dressing with crispy chickpeas.",
    source: "Greens from [Farm Name], [City].",
  },
  {
    label: "From the Garden",
    dish: "Silky Squash Purée",
    description: "Slow-roasted seasonal squash blended silky with garlic and sage.",
    source: "Squash from [Farm Name], [City].",
  },
  {
    label: "From the Fire (Vegetables)",
    dish: "Wood-Fired Heritage Carrots",
    description: "Heritage carrots charred over open flame, glazed with brown butter and thyme.",
    source: "Grown at [Farm Name], [City].",
  },
  {
    label: "The Table",
    dish: "14-Hour Slow-Cooked Brisket",
    description: "Grass-fed brisket cooked low for 14 hours, finished tender in its own jus, carved at the table.",
    source: "Beef from [Ranch Name].",
  },
  {
    label: "Sweet Finish",
    dish: "Charred Stone Fruit & Cream",
    description: "Seasonal stone fruit caramelized over the fire's last coals, served warm with whipped cream and toasted honey oats.",
    source: "Fruit from [Farm Name], [City].",
  },
];

// Courses fade both in and out with scroll position (not once) so the
// previous course dims and recedes as the next arrives -- Signature
// Moment #4. Still built entirely from revealUp's own primitives.
const courseViewport = { margin: "-15% 0px -15% 0px", once: false } as const;

export default function MenuPage() {
  useEffect(() => {
    document.title = "Seasonal Farm-Traced Menus | Chef Trev Presents, LA";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Seasonal, family-style menus sourced from local Los Angeles farms — wood-fired vegetables, 14-hour brisket, sustainable seafood. Every source named.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "farm to table private chef LA, seasonal tasting menu Los Angeles, family style dinner menu, wood-fired private dining";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Seasonal Farm-Traced Menus | Chef Trev Presents, LA",
      description: descContent,
      path: "/menu",
      image: IMAGES.food.platingChef,
    });
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Menu", "/menu"));

  return (
    <div className="min-h-screen bg-cream text-warm-black">
      <Navigation forceSolid />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Opening -- no photo hero. Printed menus don't have one. */}
      <section className="pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow-dark mb-6"
          >
            The Menu
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10"
          >
            The Approach
          </motion.h1>
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="space-y-5 text-warm-black/70 leading-relaxed text-left sm:text-center max-w-xl mx-auto"
          >
            <p>
              We don't have a signature dish. We have a signature question: what's the best thing growing near Los Angeles <em className="italic">right now</em>?
            </p>
            <p>
              Every menu starts at the farmers market and with the farmers themselves. Seasonal, traceable, cooked over fire where fire makes it better. We can name who grew the squash and who caught the fish — not "organic" as a sticker, but a person we can call. Served family style, because abundance you pass to your neighbor beats a precious plate you eat alone.
            </p>
            <p>
              Below is a sample of how a night at the table moves. The real menu changes with the season — that's the point.
            </p>
          </motion.div>
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="eyebrow-dark mt-12"
          >
            {MENU_SET_DOWN}
          </motion.p>
        </div>
      </section>

      {/* Courses -- one at a time, each clearing as the next arrives */}
      <section className="py-16 sm:py-24 border-t border-warm-black/10">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.dish}
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={courseViewport}
              custom={0}
              className="py-16 sm:py-20 text-center border-b border-warm-black/10 last:border-b-0"
            >
              <p className="eyebrow-dark mb-4">{course.label}</p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4">{course.dish}</h2>
              <p className="text-warm-black/70 leading-relaxed max-w-md mx-auto mb-4">{course.description}</p>
              <p className="eyebrow-dark opacity-60">{course.source}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* A single line of fire-glow imagery -- at most */}
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-md mx-auto px-5 sm:px-8 my-8 aspect-[4/5] overflow-hidden"
      >
        <img
          src={IMAGES.food.platingChef}
          alt="Trevor's hands finishing a plate before it goes out to the table"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <PastMenusArchive />

      {/* Footer note + closing CTA */}
      <section className="py-32 sm:py-40 border-t border-warm-black/10">
        <div className="max-w-xl mx-auto px-5 sm:px-8 text-center">
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-warm-black/70 leading-relaxed mb-10"
          >
            Proudly serving produce from local Los Angeles farms — named on every printed menu, every night. Dietary needs? Tell us when you book. Guests with restrictions get our best work, not an afterthought.
          </motion.p>
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 border border-warm-black/30 text-warm-black text-xs tracking-[0.2em] uppercase hover:bg-warm-black hover:text-cream transition-all duration-300"
            >
              Request Your Seat
            </Link>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
