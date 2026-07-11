import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { revealUp, viewportOnce } from "@/lib/motion";
import { useJsonLd, breadcrumb3 } from "@/lib/useJsonLd";
import { setSocialMeta } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getExperience } from "./data";

export default function ExperienceDetail({ slug }: { slug: string }) {
  const experience = getExperience(slug);
  const siblings = experience.siblings.map(getExperience);

  useEffect(() => {
    document.title = experience.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', experience.metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = experience.metaDescription;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', experience.metaKeywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = experience.metaKeywords;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: experience.metaTitle,
      description: experience.metaDescription,
      path: `/experiences/${experience.slug}`,
      image: experience.image,
    });
  }, [experience]);

  useJsonLd(
    "breadcrumb",
    breadcrumb3("Experiences", "/experiences", experience.title, `/experiences/${experience.slug}`)
  );

  useJsonLd("faq", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: experience.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src={experience.image}
            alt={experience.heroAlt}
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
            {experience.eyebrow}
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            {experience.title}
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 sm:py-32">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
            className="space-y-5 text-cream/60 leading-relaxed mb-10"
          >
            {experience.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={1}
          >
            <Link
              href={experience.cta.href}
              className="inline-block px-8 py-3.5 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-300"
            >
              {experience.cta.label}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-charcoal">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
            className="eyebrow mb-4 text-center"
          >
            Questions
          </motion.p>
          <motion.h2
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={1}
            className="font-serif text-3xl sm:text-4xl leading-tight mb-16 text-center"
          >
            Straight answers.
          </motion.h2>

          <div className="space-y-0">
            {experience.faqs.map((item, i) => (
              <motion.div
                key={item.q}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i * 0.3}
                className="border-b border-white/5 py-8 first:pt-0 last:border-b-0"
              >
                <h3 className="font-serif text-xl mb-3">{item.q}</h3>
                <p className="text-cream/60 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related experiences */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
            className="eyebrow mb-12 text-center"
          >
            Other Ways to Gather
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siblings.map((sib, i) => (
              <motion.div
                key={sib.slug}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={1 + i * 0.5}
              >
                <Link
                  href={`/experiences/${sib.slug}`}
                  className="group block aspect-[4/5] overflow-hidden relative"
                >
                  <img
                    src={sib.image}
                    alt={sib.heroAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-black/80 via-warm-black/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="eyebrow mb-2">{sib.eyebrow}</p>
                    <p className="font-serif text-xl sm:text-2xl leading-tight">{sib.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={2}
            className="text-center mt-12"
          >
            <Link
              href="/experiences"
              className="text-cream/60 text-sm hover:text-gold transition-colors duration-300"
            >
              See all five ways to gather
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 sm:py-32 text-center">
        <motion.p
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="font-serif italic text-2xl sm:text-3xl text-cream/90 max-w-xl mx-auto px-5"
        >
          See you at the table.
        </motion.p>
      </section>

      </main>
      <Footer />
    </div>
  );
}
