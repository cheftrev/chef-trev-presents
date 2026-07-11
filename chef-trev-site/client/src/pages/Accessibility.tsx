import { useEffect } from "react";
import { setSocialMeta } from "@/lib/seo";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import LegalPageLayout, { LegalSections, type LegalSection } from "@/components/LegalPageLayout";

const LAST_UPDATED = "July 11, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "Our Commitment",
    paragraphs: [
      "Chef Trev Presents wants cheftrevpresents.com to be usable by everyone, including people who navigate by keyboard, use a screen reader, or rely on reduced-motion settings. We design and build toward the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, as an ongoing practice rather than a one-time certification.",
    ],
  },
  {
    heading: "Measures We've Taken",
    paragraphs: ["Concrete steps built into the Site today include:"],
    list: [
      "A \"skip to main content\" link for keyboard users",
      "Semantic HTML landmarks and one clear heading per page",
      "Descriptive alternative text on every photograph",
      "Visible focus states on every interactive element",
      "A keyboard-accessible navigation menu with a proper focus trap and focus restoration when closed",
      "A keyboard-accessible photo gallery with the same focus handling",
      "Form fields with associated labels, and errors identified in text next to the field, not just color or a pop-up alone",
      "Support for your device's reduced-motion setting — animations are minimized if you've asked your operating system for that",
    ],
  },
  {
    heading: "Known Limitations",
    paragraphs: [
      "Accessibility is ongoing work, not a finished state. We have not yet completed a full third-party WCAG audit, and some third-party services embedded on the Site (such as Instagram) are outside our direct control. If you hit a barrier, we want to know about it — see Feedback below.",
    ],
  },
  {
    heading: "Compatibility",
    paragraphs: [
      "The Site is built to work with current versions of major browsers (Chrome, Safari, Firefox, Edge) and commonly used assistive technologies, including screen readers such as VoiceOver and NVDA.",
    ],
  },
  {
    heading: "Feedback",
    paragraphs: [
      "If you experience an accessibility barrier on this Site, please tell us. We read every message and will do our best to address it. Contact us at trevor@cheftrevpresents.com.",
    ],
  },
  {
    heading: "Changes to This Statement",
    paragraphs: [
      "We'll update this page as our accessibility work continues. The \"Last updated\" date at the top reflects the most recent revision.",
    ],
  },
];

export default function Accessibility() {
  useEffect(() => {
    document.title = "Accessibility Statement | Chef Trev Presents";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "How Chef Trev Presents approaches web accessibility on cheftrevpresents.com, and how to report a barrier.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Accessibility Statement | Chef Trev Presents",
      description: descContent,
      path: "/accessibility",
      image: "/manus-storage/hero_people_dinner_moment_1.jpg",
    });
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Accessibility Statement", "/accessibility"));

  return (
    <LegalPageLayout title="Accessibility Statement" lastUpdated={LAST_UPDATED}>
      <LegalSections sections={SECTIONS} />
    </LegalPageLayout>
  );
}
