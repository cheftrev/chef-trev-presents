import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SEASONAL_COURSES = [
  {
    course: "First Course",
    title: "Garden Awakening",
    description: "Seasonal greens, edible flowers, and a citrus vinaigrette that sets the tone for the evening. Light, bright, and designed to open the palate.",
    note: "Ingredients sourced from local Los Angeles farms",
  },
  {
    course: "Second Course",
    title: "The Ocean's Whisper",
    description: "Delicate crudo with yuzu, microgreens, and a touch of heat. A conversation between land and sea that unfolds with each bite.",
    note: "Sustainably sourced seafood",
  },
  {
    course: "Third Course",
    title: "Roots & Smoke",
    description: "Slow-roasted heritage vegetables with charred aromatics and a rich, earthy broth. This is comfort elevated — grounding and deeply satisfying.",
    note: "Wood-fired preparation",
  },
  {
    course: "Fourth Course",
    title: "The Main Narrative",
    description: "The centerpiece of the evening. A protein prepared with precision and presented with intention. Each element on the plate tells part of the story.",
    note: "Rotating seasonal selection",
  },
  {
    course: "Final Course",
    title: "Sweet Departure",
    description: "A dessert that lingers — both on the palate and in memory. Seasonal fruits, artisan chocolate, and a finish that feels like a gentle farewell.",
    note: "Paired with a digestif",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.tableCloseUp}
            alt="Table details up close"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-black/50 via-warm-black/20 to-warm-black" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            The Menu
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
          >
            A Story in <span className="italic text-gold">Courses</span>
          </motion.h1>
        </div>
      </section>

      {/* Menu Philosophy */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Our Approach</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed italic text-cream/90 mb-8">
              Every menu is written for the moment. Seasonal ingredients, local sourcing, and a narrative arc that takes you from the first bite to the last.
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Our menus change with the seasons and are never repeated exactly. What you experience at the table is a reflection of what the land is offering right now — and the story Chef Trev wants to tell that evening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-12 text-center"
          >
            Sample Tasting Menu
          </motion.p>

          <div className="space-y-0">
            {SEASONAL_COURSES.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-white/5 py-10 first:pt-0 last:border-b-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                  <span className="text-gold/40 text-xs tracking-[0.2em] uppercase shrink-0 sm:w-28 sm:pt-1">
                    {course.course}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl mb-3">{course.title}</h3>
                    <p className="text-cream/70 leading-relaxed mb-2">{course.description}</p>
                    <p className="text-gold/40 text-xs italic">{course.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Images */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={IMAGES.food.platedTable}
                alt="Artfully plated dish"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={IMAGES.food.platingChef}
                alt="Chef plating a dish"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Menus are crafted seasonally and may vary. Dietary accommodations are always welcome — please note any restrictions when booking.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
            >
              Reserve Your Experience
            </Link>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
