import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.chefPortrait}
            alt="Chef Trev portrait"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-transparent to-warm-black" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            The Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
          >
            About <span className="italic text-gold">Chef Trev</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-8">
                Food Was Never<br />
                <span className="italic text-gold/80">Just About the Plate</span>
              </h2>
              <div className="space-y-6 text-cream/60 leading-relaxed">
                <p>
                  Trevor Brown is the chef and founder of Chef Trev Presents, an experiential dining series rooted in connection, storytelling, and the belief that food is a form of care. Raised north of Boston, his earliest memories were shaped in the kitchen beside his mother and around a family table that brought everyone together. Summers spent tending a backyard garden instilled a lasting respect for seasonal ingredients and the idea that food can be both nourishing and healing.
                </p>
                <p>
                  Before stepping fully into the culinary world, Trevor was a venture-backed founder building a company at the intersection of human behavior and technology, with work that was recognized in publications like Forbes. While he was helping brands connect with people digitally, he felt a pull to create those connections in real life. That transition led him to food—self-taught through travel and lived experience—as a medium for storytelling, culture, and shared experience.
                </p>
                <p>
                  Today, Trevor brings this philosophy to life through immersive dinners at the Bamboo Oasis in Los Angeles and beyond. What began as intimate gatherings has grown into a community where strangers connect through shared meals and stories. At its core, Chef Trev Presents creates spaces where people can slow down, feel present, and experience a deeper sense of belonging.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={IMAGES.hero.chefPlating}
                alt="Chef Trev plating a dish"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Philosophy</p>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed italic text-cream/90 mb-8">
              "For me, cooking has always been a language of care. Food has the power to heal, to bridge, to remind us that we belong."
            </blockquote>
            <p className="text-gold/60 text-sm tracking-wider">— Chef Trev</p>
          </motion.div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden"
            >
              <img
                src={IMAGES.people.laughingChef}
                alt="Chef Trev sharing a laugh with guests"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-8">
                Building Something<br />
                <span className="italic text-gold/80">Worth Gathering For</span>
              </h2>
              <div className="space-y-6 text-cream/60 leading-relaxed">
                <p>
                  Chef Trev Presents was born from a simple belief: the best meals happen when people are truly present. No phones on the table. No rush to the next course. Just the warmth of candlelight, the aroma of something extraordinary, and the company of people who came to experience something real.
                </p>
                <p>
                  Today, that vision lives in the Bamboo Oasis — a hidden garden in Los Angeles where strangers become friends over multi-course dinners — and in private experiences around the world where every detail is intentional and every guest is considered.
                </p>
                <p>
                  This is experiential dining at its most human.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 sm:py-32 bg-charcoal text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto px-5"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Come to the <span className="italic text-gold">Table</span>
          </h2>
          <p className="text-cream/60 mb-10 leading-relaxed">
            Whether it's an intimate dinner for twelve or a private event for two hundred, every experience begins with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-500"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
