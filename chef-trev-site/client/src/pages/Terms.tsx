import { useEffect } from "react";
import { setSocialMeta, setNoIndex } from "@/lib/seo";
import { useJsonLd, breadcrumb } from "@/lib/useJsonLd";
import LegalPageLayout, { LegalSections, type LegalSection } from "@/components/LegalPageLayout";

const LAST_UPDATED = "July 11, 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing or using cheftrevpresents.com (the \"Site\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree, please do not use the Site.",
    ],
  },
  {
    heading: "2. Who We Are",
    paragraphs: [
      "The Site is operated by Chef Trev Presents [add legal entity name, e.g. \"Chef Trev Presents LLC\"], based in Los Angeles, California.",
    ],
  },
  {
    heading: "3. Use of the Site",
    paragraphs: ["You may use the Site to learn about our services and submit inquiries. You agree not to:"],
    list: [
      "Use the Site for any unlawful purpose",
      "Attempt to gain unauthorized access to the Site or its systems",
      "Interfere with the Site's operation or security",
      "Scrape, copy, or reproduce Site content without our permission",
    ],
  },
  {
    heading: "4. Inquiries and Bookings",
    paragraphs: [
      "Submitting the contact form is an inquiry, not a booking or a binding contract. Availability, pricing, and event details are confirmed individually and are not guaranteed until we've agreed in writing, including by email. Pricing referenced on the Site is illustrative and subject to change based on your specific event.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "All content on the Site — including text, photography, logos, and design — is owned by Chef Trev Presents or its licensors and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute Site content without our prior written permission.",
    ],
  },
  {
    heading: "6. Artificial Intelligence",
    paragraphs: [
      "We may use artificial intelligence tools in the operation of our business and this Site, including to assist with content creation, communications, and administrative tasks. Use of AI tools does not change your rights or our obligations under these Terms.",
    ],
  },
  {
    heading: "7. Third-Party Links and Services",
    paragraphs: [
      "The Site may link to or use third-party services, such as Instagram or our form, hosting, analytics, and advertising providers. We are not responsible for the content, policies, or practices of third-party sites or services.",
    ],
  },
  {
    heading: "8. Disclaimer of Warranties",
    paragraphs: [
      "The Site is provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Chef Trev Presents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site, even if advised of the possibility of such damages. Our total liability for any claim arising from your use of the Site shall not exceed the amount you paid us, if any, in the twelve months preceding the claim.",
    ],
  },
  {
    heading: "10. Indemnification",
    paragraphs: [
      "You agree to indemnify and hold harmless Chef Trev Presents, its owners, and employees from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.",
    ],
  },
  {
    heading: "11. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the State of California, without regard to its conflict of law principles.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision. Continued use of the Site after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
  {
    heading: "13. Contact Us",
    paragraphs: ["Questions about these Terms can be sent to trevor@cheftrevpresents.com."],
  },
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Chef Trev Presents";
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "The terms governing your use of cheftrevpresents.com, including inquiries, intellectual property, and liability.";
    if (metaDesc) {
      metaDesc.setAttribute('content', descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descContent;
      document.head.appendChild(meta);
    }
    setSocialMeta({
      title: "Terms of Service | Chef Trev Presents",
      description: descContent,
      path: "/terms",
      image: "/manus-storage/hero_people_dinner_moment_1.jpg",
    });
    setNoIndex();
  }, []);

  useJsonLd("breadcrumb", breadcrumb("Terms of Service", "/terms"));

  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSections sections={SECTIONS} />
    </LegalPageLayout>
  );
}
