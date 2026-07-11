import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { IMAGES } from "@/lib/images";
import { revealUp, viewportOnce } from "@/lib/motion";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import { setSocialMeta } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const EVENT_TYPES = [
  "Chef's Table (Bamboo Oasis)",
  "Private Dinner",
  "Corporate Event",
  "Brand Collaboration",
  "Destination Experience",
  "Other",
];

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
  "Prefer to discuss",
];

const FAQS = [
  {
    q: "What is Chef Trev Presents?",
    a: "Chef Trev Presents is a Los Angeles experiential private dining company founded by Chef Trevor Brown. It creates candlelit, family-style, multi-course dinners — most famously at the Bamboo Oasis, a bamboo-lined garden — designed to make guests feel seen, heard, and loved. The team has hosted 45 events for more than 1,000 guests.",
  },
  {
    q: "What makes it different from a private chef or caterer?",
    a: "It's an experience company, not a catering company. Every night is designed end to end — sourcing, menu, music, seating, and flow — so guests connect with each other, not just the food. Dinners are served family style at one shared table, and every ingredient is traceable to a local farm.",
  },
  {
    q: "Where do the dinners happen?",
    a: "Flagship Chef's Table dinners happen at the Bamboo Oasis in Los Angeles. The team also cooks in private homes across LA, hosts milestone and corporate events at chosen venues, and travels for destination experiences beyond Los Angeles.",
  },
  {
    q: "How many guests can you host?",
    a: "Everything from intimate home dinners for a handful of guests to milestone celebrations and brand events for larger groups. Share your guest count in the inquiry form and the team will design the right table for it.",
  },
  {
    q: "Can I come alone?",
    a: "Yes — and honestly, coming alone might be the purest version of the whole idea. This company exists because the world is lonely, and one seat at a shared table is the answer, not the awkward exception. We'll seat you in the middle of things, and by dessert you won't feel like you came alone. Request one seat the same way you'd request ten.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing depends on the experience type, guest count, menu, and location, so every event is quoted individually. The inquiry form includes budget ranges to start the conversation honestly — the team builds the best possible night within a stated budget rather than upselling past it.",
  },
  {
    q: "Can you accommodate dietary restrictions?",
    a: "Yes — and it's a point of pride. Guests with dietary restrictions often feel like an afterthought at events; here they get the kitchen's best work. Share restrictions when booking and the menu is adapted, not downgraded.",
  },
  {
    q: "Where does the food come from?",
    a: "From local Los Angeles farms, seasonally, with traceable sourcing — the team knows who grew and picked the ingredients, and farms are named on printed menus. Seafood is sustainably sourced, and much of the cooking is done over a wood fire.",
  },
  {
    q: "Do the dinners include alcohol?",
    a: "No. The experiences are built around food, music, and connection — no alcohol program. Guests consistently describe the nights as some of the most present they've had.",
  },
  {
    q: "Who is behind the dinners?",
    a: "Head Chef Trevor Brown (founder) and Head of Experience Adam Sanchez.",
  },
  {
    q: "How do I book?",
    a: "Submit the inquiry form at cheftrevpresents.com/contact with your experience type, date, guest count, and budget range. The team replies personally within two business days.",
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    guestCount: "",
    location: "",
    budget: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState<{ name?: string; email?: string; eventType?: string }>({});

  useEffect(() => {
    document.title = "Book a Private Dinner in Los Angeles | Chef Trev Presents";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Request a seat at the Chef's Table, plan a private dinner or milestone event, or start a brand collaboration. Personal replies within two business days.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "book private chef Los Angeles, hire private dining experience LA, chef's table booking, private event chef Los Angeles";
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywordsContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Book a Private Dinner in Los Angeles | Chef Trev Presents",
      description: descContent,
      path: "/contact",
      image: IMAGES.events.tableEmptySet,
    });
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Contact", "/contact"));

  useJsonLd("faq", {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.name) nextErrors.name = "Your name is required.";
    if (!form.email) nextErrors.email = "Your email is required.";
    else if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = "That email doesn't look right — check it so we can actually reply.";
    if (!form.eventType) nextErrors.eventType = "Pick what we're building.";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("We need your name, email, and what we're building — the rest can wait.");
      const firstInvalidField = ["name", "email", "eventType"].find((f) => f in nextErrors);
      if (firstInvalidField) {
        document.getElementById(`inquiry-${firstInvalidField === "eventType" ? "event-type" : firstInvalidField}`)?.focus();
      }
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const body = new URLSearchParams({ "form-name": "inquiry", ...form });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("That didn't go through. Try once more — or just email us at trevor@cheftrevpresents.com.");
      setSubmitted(true);
    } catch (err: any) {
      toast.error(err.message || "That didn't go through. Try once more — or just email us at trevor@cheftrevpresents.com.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field as keyof typeof next];
      return next;
    });
  };

  if (submitted) {
    const firstName = form.name.trim().split(/\s+/)[0];
    return (
      <div className="min-h-screen bg-cream text-warm-black">
        <Navigation forceSolid />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
          <motion.div
            variants={revealUp}
            initial="hidden"
            animate="visible"
          >
            <p className="eyebrow-dark mb-6">Your Seat Is Set</p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight mb-8">
              {firstName}
            </h1>
            <div className="w-16 h-px bg-warm-black/20 mx-auto mb-8" />
            <p className="text-warm-black/70 max-w-md mx-auto leading-relaxed mb-10">
              Got it. We'll be in touch within two business days. Start thinking about who you're seating next to whom.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", eventType: "", guestCount: "", location: "", budget: "", date: "", message: "" });
              }}
              className="px-8 py-3.5 border border-warm-black/30 text-warm-black text-xs tracking-[0.2em] uppercase hover:bg-warm-black hover:text-cream transition-all duration-300"
            >
              Send Another
            </button>
            <div>
              <Link href="/" className="inline-block mt-6 text-warm-black/60 text-sm hover:text-warm-black transition-colors duration-300">
                Back to the table
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden grain">
        <div className="absolute inset-0">
          <img
            src={IMAGES.events.tableEmptySet}
            alt="A set table waiting for guests — your seat is the empty one"
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
            Get in Touch
          </motion.p>
          <motion.h1
            variants={revealUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
          >
            Pull up a chair.
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-cream/70 leading-relaxed mb-4 max-w-xl">
              Tell us what you're dreaming up — a seat at the next Chef's Table, a dinner in your home, a milestone worth marking, a collaboration, or something we haven't built yet. Give us the honest details: how many people, what the night is for, what you want everyone to feel walking out.
            </p>
            <p className="text-cream/70 leading-relaxed mb-12 max-w-xl">
              We read every message ourselves and reply within two business days. No call centers, no scripts. Just us.
            </p>

            <form onSubmit={handleSubmit} noValidate name="inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-8">
              <input type="hidden" name="form-name" value="inquiry" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    Your Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="First and last is plenty"
                    required
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="inquiry-name-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="So we can write you back"
                    required
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="inquiry-email-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="inquiry-event-type" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  What Are We Building? <span className="text-gold">*</span>
                </label>
                <select
                  id="inquiry-event-type"
                  value={form.eventType}
                  onChange={(e) => handleChange("eventType", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 appearance-none"
                  required
                  aria-invalid={!!errors.eventType}
                  aria-describedby={errors.eventType ? "inquiry-event-type-error" : undefined}
                >
                  <option value="" className="bg-charcoal">Pick one</option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-charcoal">{type}</option>
                  ))}
                </select>
                {errors.eventType && (
                  <p id="inquiry-event-type-error" role="alert" className="mt-2 text-xs text-red-400">
                    {errors.eventType}
                  </p>
                )}
              </div>

              {/* Date & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-date" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    When, Roughly?
                  </label>
                  <input
                    id="inquiry-date"
                    type="text"
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="A date, a month, a season — rough is fine"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-guest-count" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    How Many Guests?
                  </label>
                  <input
                    id="inquiry-guest-count"
                    type="text"
                    value={form.guestCount}
                    onChange={(e) => handleChange("guestCount", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="Best guess"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="inquiry-location" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Where?
                </label>
                <input
                  id="inquiry-location"
                  type="text"
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                  placeholder="City, venue, or 'your garden'"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="inquiry-budget" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Budget Range
                </label>
                <select
                  id="inquiry-budget"
                  value={form.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 appearance-none"
                >
                  <option value="" className="bg-charcoal">Pick a range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range} className="bg-charcoal">{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Tell Us About Your Night
                </label>
                <textarea
                  id="inquiry-message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50 resize-none"
                  placeholder="Who's coming, what it's for, what you want everyone to feel walking out. Dietary needs go here too."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-12 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Send It"}
                </button>
              </div>
            </form>
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
            className="font-serif text-3xl sm:text-4xl leading-tight mb-4 text-center"
          >
            Straight answers.
          </motion.h2>
          <motion.p
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={2}
            className="text-cream/60 text-center mb-16 max-w-xl mx-auto"
          >
            The things people ask before they book. If yours isn't here, put it in the form.
          </motion.p>

          <div className="space-y-0">
            {FAQS.map((item, i) => (
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
