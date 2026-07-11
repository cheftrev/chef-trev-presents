import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { revealUp, viewportOnce } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";
import { setSocialMeta } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function CountUpStat({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-serif text-6xl sm:text-7xl md:text-8xl text-gold leading-none"
      >
        {value.toLocaleString()}
        {suffix}
      </span>
      <p className="mt-3 eyebrow">{label}</p>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 300], [0, 80]);

  useEffect(() => {
    document.title = "Chef Trev Presents | Immersive Private Dining in LA";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Candlelit, family-style dinners in a bamboo garden in Los Angeles. Chef's table experiences, private events & farm-traced menus. 1,000+ guests served.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "immersive dining Los Angeles, private dining experience LA, chef's table Los Angeles, experiential dinner party LA, Chef Trev Presents";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Chef Trev Presents | Immersive Private Dining in LA",
      description: descContent,
      path: "/",
      image: IMAGES.hero.peopleDinnerMoment1,
    });
  }, []);

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden grain">
          <div className="absolute inset-0">
            <motion.img
              style={{ y: heroImageY }}
              src={IMAGES.hero.peopleDinnerMoment1}
              alt="Guests sharing a candlelit dinner moment in the bamboo garden"
              className="w-full h-[120%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/30 to-warm-black" />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 sm:pb-20 text-center px-5">
            <motion.h1
              variants={revealUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl"
            >
              What's the difference between eating a meal and experiencing one?
            </motion.h1>
            <motion.p
              variants={revealUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-6 text-cream/70 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Immersive dinners in a candlelit bamboo garden in Los Angeles. Family style. Live music. Strangers on arrival, community by dessert.
            </motion.p>
            <motion.div
              variants={revealUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Link
                href="/contact"
                className="mt-10 inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
              >
                Request Your Seat
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
          </motion.div>
        </section>

        {/* The Table */}
        <section className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0}
              className="eyebrow mb-6"
            >
              The Table
            </motion.p>
            <motion.h2
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
              className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug mb-8"
            >
              The world is really lonely right now, and we're doing something about it — around a table.
            </motion.h2>
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={2}
              className="text-cream/60 leading-relaxed max-w-2xl mx-auto"
            >
              Chef Trev Presents builds dinners where you actually put the phone down. One long table in the Bamboo Oasis, candles down the middle, live music in the garden, food served family style so you have to pass the plate to the person next to you. That's not an accident. That's the whole design.
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { src: IMAGES.people.guestsLaughing, alt: "Guests laughing together at the table" },
              { src: IMAGES.hero.candlelitTableFilm, alt: "Candlelit long table set for dinner in the bamboo garden" },
              { src: IMAGES.people.laughingChef, alt: "Chef Trev sharing a moment with guests" },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={3 + i * 0.5}
                className="aspect-[4/3] md:aspect-[3/4] overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={4}
            className="max-w-3xl mx-auto px-5 sm:px-8 mt-20 sm:mt-24"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
              <CountUpStat target={45} label="Events" />
              <CountUpStat target={1000} suffix="+" label="Guests" />
            </div>
            <p className="mt-10 text-center text-cream/60 max-w-md mx-auto">
              One belief: everyone at the table should leave feeling seen, heard, and loved.
            </p>
          </motion.div>
        </section>

        {/* The Chef's Table */}
        <section className="py-24 sm:py-32 bg-charcoal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={0}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={IMAGES.atmosphere.tableBamboo}
                  alt="Dining table in the bamboo garden at the Bamboo Oasis"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={0}
                  className="eyebrow mb-4"
                >
                  The Chef's Table
                </motion.p>
                <motion.h2
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={1}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
                >
                  Bamboo Oasis
                </motion.h2>
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={2}
                  className="text-cream/60 leading-relaxed mb-8"
                >
                  Our flagship. A multi-course dinner in the Bamboo Oasis — a bamboo-lined garden lit by candlelight, with music picked for the night and a menu built from whatever Los Angeles farms are pulling out of the ground that week. Trevor runs the fire. Adam runs the room. You just show up hungry.
                </motion.p>
                <motion.div
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={3}
                >
                  <Link
                    href="/experiences"
                    className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
                  >
                    See the Experience
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Events */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={0}
                  className="eyebrow mb-4"
                >
                  Private Events
                </motion.p>
                <motion.h2
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={1}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
                >
                  Your Home.<br />
                  <span className="italic text-gold/80">Your Night.</span>
                </motion.h2>
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={2}
                  className="text-cream/60 leading-relaxed mb-8"
                >
                  Birthdays, anniversaries, the dinner after the wedding, the night your company actually wants people to talk to each other. We bring the full experience — menu, music, table, team — to your home or your milestone. You bring the people worth gathering.
                </motion.p>
                <motion.div
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={3}
                >
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
                  >
                    Plan Your Night
                  </Link>
                </motion.div>
              </div>
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={1}
                className="aspect-[4/5] overflow-hidden order-1 lg:order-2"
              >
                <img
                  src={IMAGES.events.chefSpeakingGuests}
                  alt="Chef Trev speaking to guests at a private event"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Collaborations */}
        <section className="relative py-24 sm:py-32 overflow-hidden grain">
          <div className="absolute inset-0">
            <img
              src={IMAGES.events.tableCandelit}
              alt="A candlelit table set for a private brand dinner, glowing low in the dark"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-warm-black via-warm-black/90 to-warm-black/70" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-2xl">
              <motion.p
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={0}
                className="eyebrow mb-4"
              >
                Brand Collaborations
              </motion.p>
              <motion.h2
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={1}
                className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
              >
                People First.
              </motion.h2>
              <motion.p
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={2}
                className="text-cream/60 leading-relaxed mb-8"
              >
                For brands who want their people around a table instead of behind a booth. We've built dinners for launches, teams, and partnerships — and we say no to the ones that don't align. If your brand believes people come first, let's talk.
              </motion.p>
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={3}
              >
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-300"
                >
                  Start a Conversation
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Guestbook */}
        <section className="py-32 sm:py-40 bg-charcoal">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0}
              className="eyebrow mb-8"
            >
              The Guestbook
            </motion.p>
            <motion.blockquote
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
              className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed italic text-cream/90 mb-8"
            >
              "I came alone, got sat between two strangers, and by the second course we were arguing about the best taco in LA like old friends. Three hours, no phones, brisket you could cut with a spoon. I've been to a lot of dinners in this city. I still think about that one."
            </motion.blockquote>
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={2}
              className="text-cream/70 text-sm tracking-wider uppercase"
            >
              — A guest, the Chef's Table at the Bamboo Oasis
            </motion.p>
          </div>
        </section>

        {/* Your Seat Awaits */}
        <section className="relative py-32 sm:py-40 overflow-hidden grain">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero.peopleDinnerMoment2}
              alt="Guests leaning in together at the candlelit table, deep in conversation"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-warm-black/60" />
          </div>
          <div className="relative z-10 text-center px-5">
            <motion.h2
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0}
              className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight mb-6"
            >
              Your Seat Awaits.
            </motion.h2>
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
              className="text-cream/70 max-w-lg mx-auto mb-10 leading-relaxed"
            >
              Come as you are. Bring your appetite, your people, or just yourself — the table takes care of the rest.
            </motion.p>
            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={2}
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Request Your Seat
              </Link>
              <p className="mt-8 font-serif italic text-cream/60 text-lg">See you at the table.</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
