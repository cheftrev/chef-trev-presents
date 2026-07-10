import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Experiences() {
  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero.candlelitTableFilm}
            alt="Candlelit table setting"
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
            Our Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
          >
            Dining as <span className="italic text-gold">Art</span>
          </motion.h1>
        </div>
      </section>

      {/* Chef's Table - Bamboo Oasis */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">The Chef's Table</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Bamboo Oasis
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
              A hidden garden in Los Angeles. A communal table under the stars. An evening designed to awaken every sense.
            </p>
          </motion.div>

          {/* The Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: "01",
                title: "Garden Welcome",
                desc: "Arrive to the glow of candlelight and the sound of curated music. Conversation flows as strangers become acquaintances in the bamboo-lined entrance.",
                img: "/manus-storage/experiences_garden_welcome.jpg",
              },
              {
                step: "02",
                title: "Communal Dining",
                desc: "Take your seat at the long table. Each course arrives with intention — seasonal, locally sourced, and designed to spark conversation.",
                img: "/manus-storage/experiences_communal_dining.jpg",
              },
              {
                step: "03",
                title: "Chef-Led Experience",
                desc: "Chef Trev guides the evening — sharing the story behind each dish, the inspiration, the ingredients. This is dinner as narrative.",
                img: "/manus-storage/experiences_chef_led_experiences.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-gold text-xs tracking-[0.2em] mb-2">{item.step}</p>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
            >
              Reserve a Seat
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider Image */}
      <section className="h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={IMAGES.people.guestsEating}
          alt="Guests savoring the meal"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Private Events */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Private Events</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
                White-Glove<br />
                <span className="italic text-gold/80">Experiences</span>
              </h2>
              <div className="space-y-5 text-cream/60 leading-relaxed mb-8">
                <p>
                  Every private event is built from scratch. We don't do templates. We listen to your vision, understand your guests, and design an experience that feels like it could only happen once — because it will.
                </p>
                <p>
                  From intimate home dinners to corporate retreats, brand launches to milestone celebrations, we bring the full Chef Trev Presents experience to your space.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {["Intimate Home Dinners", "Corporate Retreats", "Brand Activations", "Milestone Celebrations", "Rooftop Gatherings", "Destination Events"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    <span className="text-cream/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
              >
                Host a Private Dinner
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={IMAGES.events.kitchenChefPrep}
                alt="Chef preparing in the kitchen"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Collaborations */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden order-2 lg:order-1"
            >
              <img
                src={IMAGES.events.tableFood}
                alt="Beautifully arranged table"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Brand Collaborations</p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-6">
                Experiential<br />
                <span className="italic text-gold/80">Partnerships</span>
              </h2>
              <div className="space-y-5 text-cream/60 leading-relaxed mb-8">
                <p>
                  We work with brands that share our values — authenticity, craft, and human connection. Together, we create activations that go beyond traditional marketing and into the realm of genuine experience.
                </p>
                <p>
                  From immersive pop-up dinners to content-driven campaigns, every collaboration is designed to leave a lasting impression on both the brand and its audience.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.people.candlelitTable}
            alt="Candlelit table"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-warm-black/60" />
        </div>
        <div className="relative z-10 text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Let's Create Something<br />
              <span className="italic text-gold">Unforgettable</span>
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
