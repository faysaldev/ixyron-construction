import SectionHeading from "@/src/components/Common/SectionHeading";

const Terms = () => (
  <main>
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary">
      <div className="container-wide">
        <SectionHeading
          label="Legal"
          title="Terms of Service"
          description="Last updated: February 2026"
          light
        />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide max-w-3xl prose-sm">
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using the Lxyron Constructive Works website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
          },
          {
            title: "2. Services Description",
            content:
              "Lxyron Constructive Works provides construction management, residential and commercial construction, interior design, renovation, and project consultation services. All project engagements are subject to separate contractual agreements.",
          },
          {
            title: "3. Use of Website",
            content:
              "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website. Prohibited behavior includes harassment, transmitting obscene material, or disrupting the normal flow of the website.",
          },
          {
            title: "4. Intellectual Property",
            content:
              "All content on this website, including text, images, graphics, logos, and design elements, is the property of Lxyron Constructive Works and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.",
          },
          {
            title: "5. Project Estimates",
            content:
              "Any estimates or quotes provided through our website or request forms are preliminary and subject to change based on detailed project assessment. Final pricing will be confirmed in a formal project agreement.",
          },
          {
            title: "6. Limitation of Liability",
            content:
              "Lxyron Constructive Works shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information provided herein.",
          },
          {
            title: "7. User Submissions",
            content:
              "Any information, materials, or files you submit through our forms become the property of Lxyron Constructive Works for the purpose of evaluating and responding to your inquiry. We will handle submissions in accordance with our Privacy Policy.",
          },
          {
            title: "8. Links to Third Parties",
            content:
              "Our website may contain links to third-party websites for your convenience. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites.",
          },
          {
            title: "9. Modifications",
            content:
              "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the modified terms.",
          },
          {
            title: "10. Governing Law",
            content:
              "These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Lxyron Constructive Works operates, without regard to conflict of law principles.",
          },
          {
            title: "11. Contact",
            content:
              "For questions about these Terms of Service, please contact us at legal@lxyron.com or call +1 (234) 567-890.",
          },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="font-display text-xl font-bold text-foreground mb-3">
              {section.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Terms;
