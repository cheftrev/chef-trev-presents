import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PAST_MENUS } from "@/lib/pastMenus";
import { revealUp, viewportOnce } from "@/lib/motion";

export default function PastMenusArchive() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (slug: string) => {
    setExpanded((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  return (
    <section className="py-24 sm:py-32 border-t border-warm-black/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
            className="eyebrow-dark mb-4"
          >
            The Archive
          </motion.p>
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={1}
            className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6"
          >
            Past Nights
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={2}
            className="text-warm-black/70 leading-relaxed"
          >
            Every night gets its own menu, printed once and never repeated. Here's some of what we've served.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAST_MENUS.map((menu, i) => {
            const isOpen = expanded.includes(menu.slug);
            return (
              <motion.div
                key={menu.slug}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={(i % 6) * 0.15}
                className="border border-warm-black/10 bg-warm-black/[0.02]"
              >
                <button
                  onClick={() => toggle(menu.slug)}
                  className="w-full text-left p-6 sm:p-8 focus-visible:ring-2 focus-visible:ring-warm-black/30 focus-visible:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`past-menu-${menu.slug}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow-dark mb-3">
                        {menu.eyebrow}
                        {menu.date ? ` · ${menu.date}` : ""}
                      </p>
                      <h3 className="font-serif text-2xl leading-tight mb-2">{menu.title}</h3>
                      {menu.occasion && (
                        <p className="text-warm-black/60 text-sm leading-relaxed">{menu.occasion}</p>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`past-menu-${menu.slug}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-warm-black/10">
                        <ul className="space-y-4 mb-6">
                          {menu.dishes.map((dish) => (
                            <li key={dish.name}>
                              <p className="font-serif text-lg leading-tight">{dish.name}</p>
                              {dish.description && (
                                <p className="text-warm-black/60 text-sm leading-relaxed mt-1">{dish.description}</p>
                              )}
                            </li>
                          ))}
                        </ul>
                        <div className="text-xs text-warm-black/50 leading-relaxed space-y-1">
                          {menu.team.map((t) => (
                            <p key={t}>{t}</p>
                          ))}
                          {menu.credit && <p className="pt-2 italic">{menu.credit}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
