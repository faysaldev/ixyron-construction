"use client";

import { motion } from "motion/react";
import SectionHeading from "@/src/components/Common/SectionHeading";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/src/lib/animations";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, including your name, email address, phone number, project details, and any files you upload through our forms. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, and browsing behavior.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide project estimates, communicate about our services, improve our website, and comply with legal obligations. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Information Sharing",
    content:
      "We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose information when required by law.",
  },
  {
    title: "4. Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
  },
  {
    title: "5. Cookies",
    content:
      "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time by contacting us or using the unsubscribe link in our emails.",
  },
  {
    title: "7. Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies.",
  },
  {
    title: "8. Children's Privacy",
    content:
      "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have questions about this Privacy Policy, please contact us at privacy@lxyron.com or call +1 (234) 567-890.",
  },
];

const Privacy = () => (
  <main>
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container-wide relative z-10">
        <SectionHeading
          label="Legal"
          title="Privacy Policy"
          description="Last updated: February 2026"
          light
        />
      </div>
    </section>

    <section className="section-padding bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-wide max-w-3xl prose-sm"
      >
        {sections.map((section) => (
          <motion.div key={section.title} variants={staggerItem} className="mb-8">
            <h2 className="font-display text-xl font-bold text-foreground mb-3">
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  </main>
);

export default Privacy;
