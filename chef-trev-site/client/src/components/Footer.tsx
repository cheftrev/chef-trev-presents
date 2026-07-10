import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-warm-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl tracking-wider text-cream mb-4">
              Chef Trev <span className="text-gold italic">Presents</span>
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Immersive dining experiences that blend food, music, atmosphere, and human connection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About Chef Trev" },
                { href: "/experiences", label: "Experiences" },
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Inquire" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/70 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gold mb-6">Connect</h4>
            <div className="flex flex-col gap-3 text-sm text-cream/70">
              <p>📍 Los Angeles, CA | Available Worldwide</p>
              <a
                href="https://www.instagram.com/cheftrevpresents"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-300"
              >
                @cheftrevpresents
              </a>
              <Link href="/contact" className="hover:text-gold transition-colors duration-300">
                Book a Private Experience
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Chef Trev Presents. All rights reserved.
          </p>
          <p className="text-xs text-cream/70">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
