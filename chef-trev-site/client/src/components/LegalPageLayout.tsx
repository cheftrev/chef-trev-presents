import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="font-serif text-xl sm:text-2xl text-cream mb-4">{section.heading}</h2>
          <div className="space-y-4">
            {section.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.list && (
              <ul className="list-disc pl-5 space-y-2">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-warm-black text-cream">
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-4">{title}</h1>
            <p className="text-cream/50 text-sm">Last updated {lastUpdated}</p>
          </div>
        </section>

        <section className="pb-24 sm:pb-32 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-16 space-y-14 text-cream/70 leading-relaxed">
            {children}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
