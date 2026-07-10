import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export default function Home() {
  useEffect(() => {
    document.title = "Chef Trev Presents — Immersive Dining Experiences in LA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Chef Trev Presents creates multi-course chef\'s table experiences blending food, music, atmosphere, and human connection in Los Angeles and beyond.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Chef Trev Presents creates multi-course chef\'s table experiences blending food, music, atmosphere, and human connection in Los Angeles and beyond.';
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Chef Trev Presents, immersive dining, chef table Los Angeles, private dining experience, supper club LA, experiential dining, Bamboo Oasis');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Chef Trev Presents, immersive dining, chef table Los Angeles, private dining experience, supper club LA, experiential dining, Bamboo Oasis';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.peopleDinnerMoment1}
            alt="Guests sharing an intimate dinner moment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-black/60 via-warm-black/30 to-warm-black" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6"
          >
            An Invitation to the Table
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-5xl"
          >
            Where Every Meal Becomes a Memory
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-cream/70 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            Multi-course chef's table experiences that blend food, music, atmosphere, and human connection.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Link
              href="/contact"
              className="mt-10 inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
            >
              Book an Experience
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

      {/* Visual Storytelling Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Experience</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
              More Than a Meal. <span className="italic text-gold/80">A Shared Moment.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { src: IMAGES.people.guestsLaughing, alt: "Guests laughing together" },
              { src: IMAGES.hero.candlelitTableFilm, alt: "Candlelit table setting" },
              { src: IMAGES.people.laughingChef, alt: "Chef Trev sharing a moment" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="aspect-[3/4] overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Table Intro */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src={IMAGES.atmosphere.tableBamboo}
                alt="Dining table in the bamboo garden"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Chef's Table</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Bamboo Oasis
              </h2>
              <p className="text-cream/60 leading-relaxed mb-4">
                Hidden in the heart of Los Angeles, our bamboo garden transforms into an intimate dining room under the stars. Each evening unfolds as a multi-course journey — guided by Chef Trev, shaped by the season, and shared among strangers who leave as friends.
              </p>
              <p className="text-cream/60 leading-relaxed mb-8">
                This is not a restaurant. It's an invitation to slow down, connect, and experience food the way it was meant to be shared.
              </p>
              <Link
                href="/experiences"
                className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
              >
                Reserve a Seat
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Events Intro */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Private Events</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Your Vision.<br />
                <span className="italic text-gold/80">Our Craft.</span>
              </h2>
              <p className="text-cream/60 leading-relaxed mb-4">
                From intimate home dinners to large-scale brand activations, every private event is designed from the ground up. We bring the full experience — custom menus, curated atmosphere, and the storytelling that makes each gathering unforgettable.
              </p>
              <p className="text-cream/60 leading-relaxed mb-8">
                Homes, retreats, rooftops, galleries. Wherever you gather, we transform the space.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
              >
                Host a Private Dinner
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/5] overflow-hidden order-1 lg:order-2"
            >
              <img
                src={IMAGES.events.chefSpeakingGuests}
                alt="Chef Trev speaking to guests at a private event"
                className="w-full h-full object-cover" style={{objectFit: 'scale-down'}}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Collaborations */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.events.tableCandelit}
            alt="Candlelit event table"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-black via-warm-black/90 to-warm-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Brand Collaborations</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                Partnerships That<br />
                <span className="italic text-gold/80">Tell a Story</span>
              </h2>
              <p className="text-cream/60 leading-relaxed mb-8">
                We partner with food, lifestyle, and hospitality brands to create experiential activations that go beyond traditional marketing. From immersive pop-ups to content-driven campaigns, every collaboration is rooted in authenticity and shared values.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-8">What Guests Say</p>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed italic text-cream/90 mb-8">
              "It wasn't just dinner. It was the most present I've felt in months. The food, the people, the garden — everything was intentional."
            </blockquote>
            <p className="text-cream/70 text-sm tracking-wider uppercase">— Past Guest, Bamboo Oasis</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.peopleDinnerMoment2}
            alt="Dinner moment"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-warm-black/60" />
        </div>
        <div className="relative z-10 text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight mb-6">
              The Table Is Set.<br />
              <span className="italic text-gold">Your Seat Awaits.</span>
            </h2>
            <Link
              href="/contact"
              className="mt-4 inline-block px-10 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-500"
            >
              Book an Experience
            </Link>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
