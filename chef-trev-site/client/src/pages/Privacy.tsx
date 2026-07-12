import { useEffect } from "react";
import { setSocialMeta, setNoIndex } from "@/lib/seo";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import LegalPageLayout, { LegalSections, type LegalSection } from "@/components/LegalPageLayout";

const LAST_UPDATED = "July 11, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "Chef Trev Presents (\"we,\" \"us,\" or \"our\") respects your privacy. This Privacy Policy explains what information we collect when you visit cheftrevpresents.com (the \"Site\"), how we use it, and the choices you have. By using the Site, you agree to the practices described in this policy.",
    ],
  },
  {
    heading: "2. Information We Collect",
    paragraphs: [
      "Information you provide directly: when you submit an inquiry through our contact form, we collect the information you choose to share, which may include your name, email address, event type, date, guest count, location, budget range, and any message you send us. If you opt in to text updates, we also collect your name and phone number (see Section 3).",
      "Information collected automatically: like most websites, we and our service providers may automatically collect certain information when you visit the Site, including:",
    ],
    list: [
      "Device and browser information (browser type, operating system, device type)",
      "Usage data (pages visited, time spent on the Site, referring URLs)",
      "Approximate location derived from IP address",
      "Cookies and similar tracking technologies (see Section 4)",
    ],
  },
  {
    heading: "3. SMS / Text Messaging",
    paragraphs: [
      "If you opt in to receive text messages from us — including through our sign-up page hosted by MarkitAI — we and MarkitAI collect your name and phone number to send you updates about upcoming events and to communicate with you directly. Message and data rates may apply. You can opt out of text messages at any time by following the instructions in our messages or by contacting us directly using the information in Section 13. MarkitAI's own privacy practices govern how they store and process this information.",
    ],
  },
  {
    heading: "4. Cookies and Tracking Technologies",
    paragraphs: [
      "We use, or may use in the future, cookies and similar technologies to operate and improve the Site, including:",
    ],
    list: [
      "Analytics cookies (such as Google Analytics) to understand how visitors use the Site",
      "Advertising and retargeting pixels (such as Meta Pixel or Google Ads) to measure ad performance and show relevant ads on other platforms",
      "Functional cookies to remember your preferences",
    ],
  },
  {
    heading: "5. How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    list: [
      "Respond to your inquiries and plan events",
      "Send text updates about upcoming events, if you've opted in",
      "Operate, maintain, and improve the Site",
      "Understand how visitors use the Site through analytics",
      "Deliver and measure advertising, where applicable",
      "Communicate with you about your inquiry or event",
      "Comply with legal obligations",
    ],
  },
  {
    heading: "6. Artificial Intelligence",
    paragraphs: [
      "We may use artificial intelligence tools to assist with website content, internal operations, and communications with prospective and current clients. Any personal information processed through such tools is handled consistent with this Privacy Policy. We do not use AI to make automated decisions that produce legal or similarly significant effects concerning you.",
    ],
  },
  {
    heading: "7. How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We may share information with:",
    ],
    list: [
      "Service providers who help us operate the Site and our business (such as our website host, form processor, SMS provider, analytics providers, and advertising platforms)",
      "Professional advisors (such as accountants or attorneys) where necessary",
      "Authorities, if required by law",
    ],
  },
  {
    heading: "8. Third-Party Services",
    paragraphs: [
      "The Site is hosted on Netlify and uses Netlify Forms to process contact form submissions. Our text-message list is operated through MarkitAI. We may also use third-party analytics and advertising services described in Section 4. These third parties have their own privacy policies governing their use of your information.",
    ],
  },
  {
    heading: "9. Data Retention",
    paragraphs: [
      "We retain the information you submit for as long as necessary to respond to your inquiry, fulfill any resulting booking, communicate with you as a text subscriber, and comply with our legal and business record-keeping obligations.",
    ],
  },
  {
    heading: "10. Your Rights and Choices",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict the use of your personal information, and to opt out of certain data sharing, including for advertising purposes and text messages. You can also control cookies through your browser settings; disabling cookies may affect how the Site functions. To exercise any of these rights, contact us using the information in Section 13.",
    ],
  },
  {
    heading: "11. Children's Privacy",
    paragraphs: [
      "The Site is not directed to children under 13, and we do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    heading: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated policy.",
    ],
  },
  {
    heading: "13. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us at trevor@cheftrevpresents.com.",
    ],
  },
];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Chef Trev Presents";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "How Chef Trev Presents collects, uses, and protects information from visitors and inquiry submissions on cheftrevpresents.com.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Privacy Policy | Chef Trev Presents",
      description: descContent,
      path: "/privacy",
      image: "/manus-storage/hero_people_dinner_moment_1.jpg",
    });
    setNoIndex();
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Privacy Policy", "/privacy"));

  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSections sections={SECTIONS} />
    </LegalPageLayout>
  );
}
