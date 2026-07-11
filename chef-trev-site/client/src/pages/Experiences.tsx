import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { revealUp, viewportOnce } from "@/lib/motion";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { EXPERIENCES } from "@/pages/experiences/data";

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

  useJsonLd("breadcrumb", breadcrumb("Experiences", "/experiences"));

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

      {/* Five experiences, condensed, linking to their dedicated pages */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.slug}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i * 0.3}
              >
                <Link href={`/experiences/${exp.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden mb-5">
                    <img
                      src={exp.image}
                      alt={exp.heroAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="eyebrow mb-3">{exp.eyebrow}</p>
                  <h2 className="font-serif text-2xl leading-tight mb-3">{exp.title}</h2>
                  <p className="text-cream/60 leading-relaxed text-sm mb-4">
                    {exp.paragraphs[0]}
                  </p>
                  <span className="text-gold text-xs tracking-[0.2em] uppercase group-hover:underline">
                    See the Experience
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={1}
          className="mb-10"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
          >
            Request Your Seat
          </Link>
        </motion.div>
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          custom={2}
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
