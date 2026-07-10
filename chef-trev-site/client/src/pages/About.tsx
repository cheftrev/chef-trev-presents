import { useEffect } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { revealUp, viewportOnce } from "@/lib/motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TEAM = [
  {
    name: "Trevor Brown",
    role: "Head Chef & Founder",
    bio: "Self-taught, intuitive, allergic to pretension. Builds the menus, leads the kitchen, and will absolutely come sit at your end of the table.",
  },
  {
    name: "Ren Shaw",
    role: "Sous Chef",
    bio: "The steady hands behind the fire. If something arrives at your seat perfectly cooked — and it will — thank Ren.",
  },
  {
    name: "Adam Sanchez",
    role: "Head of Experience",
    bio: "The first face you see and the reason the night flows. Adam reads a room like Trevor reads a farmers market.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About Chef Trev | Private Chef & Host in Los Angeles";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Meet Chef Trevor Brown and the team behind LA's most personal dining experience — 45 events, 1,000+ guests, and a mission to make the world less lonely.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "private chef Los Angeles, Chef Trevor Brown, LA supper club chef, experiential dining company Los Angeles";
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
        <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden grain">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero.chefPortrait}
              alt="Trevor Brown — Chef Trev — looking straight at the camera"
              className="w-full h-full object-cover object-[center_13%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-transparent to-warm-black" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
            <motion.p
              variants={revealUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="eyebrow mb-4"
            >
              The Story
            </motion.p>
            <motion.h1
              variants={revealUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
            >
              Why a table?
            </motion.h1>
          </div>
        </section>

        {/* Opening — portrait left, story right */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={0}
                className="aspect-[3/4] overflow-hidden order-1"
              >
                <img
                  src={IMAGES.hero.chefPlating}
                  alt="Trevor's hands plating a course mid-service"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="order-2 space-y-6 text-cream/60 leading-relaxed">
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={1}
                  className="font-serif text-2xl sm:text-3xl text-cream leading-snug"
                >
                  Because the age of loneliness is here, and I'm sick of it. Period.
                </motion.p>
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={2}
                >
                  I'm Trevor Brown — Chef Trev. I grew up north of Boston growing, foraging, and cooking our own food. I burned things. I undercooked things. I kept going until it tasted right. No culinary school. No Michelin kitchen. 45 events and 1,000+ guests later, I'll put our table up against anyone's.
                </motion.p>
                <motion.p
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={3}
                >
                  For me, cooking has always been an act of service. Feed people well, honor where the food came from, and give them a table where they can show up fully — that's 99% of it. The rest is just ego.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Not About the Plate */}
        <section className="py-24 sm:py-32 bg-charcoal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={0}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={IMAGES.people.laughingChef}
                  alt="Trevor laughing with guests at the table, mid-dinner"
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
                  The Point
                </motion.p>
                <motion.h2
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={1}
                  className="font-serif text-3xl sm:text-4xl leading-tight mb-8"
                >
                  Not About the Plate
                </motion.h2>
                <div className="space-y-6 text-cream/60 leading-relaxed">
                  <motion.p
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={2}
                  >
                    Most dinners obsess over how the plate looks and forget the person holding the fork. We flip that. Every choice — the candlelight, the family-style platters, the seat you're assigned next to someone you haven't met yet — is built so you leave feeling seen, heard, and loved. The food has to be great. It is. But the food is the invitation, not the point.
                  </motion.p>
                  <motion.p
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    custom={3}
                  >
                    And the food is honest. We source from local Los Angeles farms, by season, and we can tell you who grew what. Food is medicine, and medicine is food. We take that seriously without being precious about it.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission — quiet moment, no decoration */}
        <section className="py-24 sm:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0}
              className="eyebrow mb-8"
            >
              The Mission
            </motion.p>
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
              className="font-serif text-3xl sm:text-4xl md:text-5xl leading-snug"
            >
              To make the world less lonely, around the table. That's it. That's the company.
            </motion.p>
          </div>
        </section>

        {/* Name the Hands — the team */}
        <section className="py-24 sm:py-32 bg-charcoal">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.p
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={0}
              className="eyebrow mb-4 text-center"
            >
              The Team
            </motion.p>
            <motion.h2
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={1}
              className="font-serif text-3xl sm:text-4xl leading-tight mb-12 text-center max-w-2xl mx-auto"
            >
              We tell you where the carrots come from, so it's only fair we tell you who's cooking them.
            </motion.h2>

            <motion.div
              variants={revealUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={2}
              className="aspect-[16/9] overflow-hidden mb-16 max-w-4xl mx-auto"
            >
              <img
                src={IMAGES.people.teamShot}
                alt="The Chef Trev Presents team together after service"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-5xl mx-auto">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  custom={3 + i * 0.5}
                  className="text-center sm:text-left"
                >
                  <h3 className="font-serif text-xl sm:text-2xl mb-1">{member.name}</h3>
                  <p className="eyebrow mb-3">{member.role}</p>
                  <p className="text-cream/60 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="py-24 sm:py-32 text-center">
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
            className="font-serif italic text-2xl sm:text-3xl text-cream/90 max-w-xl mx-auto px-5"
          >
            That's us. Come meet us in person — see you at the table.
          </motion.p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
