import { useState } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.eventType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const body = new URLSearchParams({ "form-name": "inquiry", ...form });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Network error");
      setSubmitted(true);
      toast.success("Inquiry sent successfully");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm-black text-cream">
        <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Thank You</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
              Your Inquiry Has<br />
              <span className="italic text-gold">Been Received</span>
            </h1>
            <p className="text-cream/60 max-w-md mx-auto leading-relaxed mb-10">
              We'll review your request and reach out within 48 hours to begin crafting your experience.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", eventType: "", guestCount: "", location: "", budget: "", date: "", message: "" });
              }}
              className="px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
            >
              Submit Another Inquiry
            </button>
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
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.events.tableEmptySet}
            alt="A beautifully set table awaiting guests"
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
            Inquire
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.1]"
          >
            Begin the <span className="italic text-gold">Conversation</span>
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream/70 leading-relaxed mb-12 max-w-xl">
              Every experience begins with understanding your vision. Share the details below and we'll reach out to start planning something extraordinary.
            </p>

            <form onSubmit={handleSubmit} name="inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-8">
              <input type="hidden" name="form-name" value="inquiry" />
              <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
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
                    placeholder="your@email.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label htmlFor="inquiry-event-type" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Experience Type <span className="text-gold">*</span>
                </label>
                <select
                  id="inquiry-event-type"
                  value={form.eventType}
                  onChange={(e) => handleChange("eventType", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 appearance-none"
                  required
                >
                  <option value="" className="bg-charcoal">Select an experience type</option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-charcoal">{type}</option>
                  ))}
                </select>
              </div>

              {/* Guest Count & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-guest-count" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    Guest Count
                  </label>
                  <input
                    id="inquiry-guest-count"
                    type="text"
                    value={form.guestCount}
                    onChange={(e) => handleChange("guestCount", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="Estimated number of guests"
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-date" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                    Preferred Date
                  </label>
                  <input
                    id="inquiry-date"
                    type="text"
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                    placeholder="Date or date range"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="inquiry-location" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Location
                </label>
                <input
                  id="inquiry-location"
                  type="text"
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50"
                  placeholder="City or venue"
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
                  <option value="" className="bg-charcoal">Select a range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range} className="bg-charcoal">{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="inquiry-message" className="block text-xs tracking-[0.15em] uppercase text-cream/70 mb-2">
                  Tell Us More
                </label>
                <textarea
                  id="inquiry-message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 pb-3 text-cream focus:border-gold/50 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none transition-colors duration-300 placeholder:text-cream/50 resize-none"
                  placeholder="Share your vision, any dietary needs, or special requests..."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-12 py-4 bg-gold text-warm-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold-light transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
