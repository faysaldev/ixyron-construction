"use client";

import { motion } from "motion/react";
import { Target, Eye, Award, CheckCircle } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading";

const values = [
  "Uncompromising quality in every detail",
  "Transparent communication throughout",
  "Safety-first culture on every job site",
  "Sustainable building practices",
  "Client satisfaction above all else",
  "Innovation in construction technology",
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary">
      <div className="container-wide">
        <SectionHeading
          label="About Us"
          title="Building Excellence Since 2010"
          description="Lxyron Constructive Works is a premier construction and interior solutions company dedicated to turning ambitious visions into lasting realities."
          light
        />
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about-team.jpg"
            alt="Lxyron team reviewing blueprints"
            className="rounded-lg w-full object-cover aspect-video"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3 block">
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Legacy of Quality Construction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded as a sub-branch of the Lxyron group, Lxyron Constructive
            Works has grown from a small team of passionate builders into a
            full-service construction powerhouse serving residential,
            commercial, and industrial clients.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach combines traditional craftsmanship with modern
            technology, ensuring every project meets the highest standards of
            quality, safety, and sustainability.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-section-alt">
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: Target,
            title: "Our Mission",
            text: "To deliver exceptional construction and interior solutions that exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to excellence.",
          },
          {
            icon: Eye,
            title: "Our Vision",
            text: "To be the most trusted and respected construction partner, known for transforming spaces and building communities that inspire generations.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-8 md:p-10 rounded-lg bg-card border border-border"
          >
            <item.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
          description="These core principles guide every project we undertake."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-foreground text-sm font-medium">{v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Awards */}
    <section className="section-padding bg-secondary">
      <div className="container-wide text-center">
        <SectionHeading
          label="Recognition"
          title="Certifications & Awards"
          description="Our commitment to excellence has been recognized across the industry."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "ISO 9001 Certified",
              desc: "Quality management systems certified to international standards.",
            },
            {
              icon: Award,
              title: "Best Builder 2024",
              desc: "Recognized as the region's best construction company by BuildAwards.",
            },
            {
              icon: Award,
              title: "Green Building Award",
              desc: "Awarded for sustainable construction practices and eco-friendly designs.",
            },
          ].map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <a.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">
                {a.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
