import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="outline-none">
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Lost in the Garden</p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl text-cream/70 mb-4">404</h1>
        <h2 className="font-serif text-2xl sm:text-3xl leading-tight mb-6">
          This Page Doesn't <span className="italic text-gold">Exist</span>
        </h2>
        <p className="text-cream/70 max-w-md leading-relaxed mb-10">
          The page you're looking for may have been moved or no longer exists. Let us guide you back to the table.
        </p>
        <Link
          href="/"
          className="px-8 py-3.5 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-warm-black transition-all duration-500"
        >
          Return Home
        </Link>
      </div>
      </main>
      <Footer />
    </div>
  );
}
