import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/images";
import { revealUp } from "@/lib/motion";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import { setSocialMeta } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CATEGORIES = ["all", "people", "atmosphere", "events", "food"] as const;

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Gallery | Candlelit Dinners in the Bamboo Oasis, LA";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Real nights at the table: candlelit dinners in a bamboo garden, wood-fired courses, live music, and 1,000+ guests gathered in Los Angeles.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "private dining event photos LA, bamboo garden dinner Los Angeles, supper club Los Angeles photos";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Gallery | Candlelit Dinners in the Bamboo Oasis, LA",
      description: descContent,
      path: "/gallery",
      image: GALLERY_IMAGES[0].src,
    });
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Gallery", "/gallery"));

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const filtered = filter === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow mb-4"
          >
            The Gallery
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6"
          >
            Real nights.
          </motion.h1>
          <motion.p
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-cream/70 max-w-xl leading-relaxed"
          >
            No filters, no staging — just real nights at the table: the garden, the fire, the food, and the people who showed up for each other.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none ${
                  filter === cat
                    ? "border-gold bg-gold text-warm-black"
                    : "border-white/10 text-cream/70 hover:border-gold/40 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="mb-4 break-inside-avoid overflow-hidden cursor-pointer group focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
                  onClick={() => setLightbox(i)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightbox(i); } }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Image: ${filtered[lightbox]?.alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-warm-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
            onKeyDown={(e) => { if (e.key === 'Escape') setLightbox(null); }}
          >
            <button
              className="absolute top-6 right-6 text-cream/60 hover:text-cream z-10 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none p-2"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              autoFocus
            >
              <X size={28} />
            </button>
            <motion.img
              key={filtered[lightbox]?.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-sm text-center">
              {filtered[lightbox]?.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      </main>
      <Footer />
    </div>
  );
}
