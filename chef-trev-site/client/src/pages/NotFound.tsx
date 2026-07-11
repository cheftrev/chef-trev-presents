import { useEffect } from "react";
import { Link } from "wouter";
import { setNoIndex } from "@/lib/seo";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | Chef Trev Presents";
    setNoIndex();
  }, []);

  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5">
        <p className="eyebrow mb-6">Wrong Turn</p>
        <p className="font-serif text-6xl sm:text-7xl md:text-8xl text-cream/70 mb-4" aria-hidden="true">404</p>
        <h1 className="font-serif text-2xl sm:text-3xl leading-tight mb-6">
          This page isn't on the menu.
        </h1>
        <p className="text-cream/70 max-w-md leading-relaxed mb-10">
          Whatever you were looking for, it's not here — but the table is where it always is.
        </p>
        <Link
          href="/"
          className="px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
        >
          Back to the Table
        </Link>
        <Link
          href="/contact"
          className="mt-6 text-cream/60 text-sm hover:text-gold transition-colors duration-300"
        >
          Or pull up a chair
        </Link>
      </div>
      </main>
      <Footer />
    </div>
  );
}
