"use client";

import { motion } from "motion/react";
import { Target, Eye, Award, CheckCircle } from "lucide-react";
import SectionHeading from "@/src/components/Common/SectionHeading";
import AnimatedCounter from "@/src/components/Common/AnimatedCounter";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,
  staggerItemScale,
  staggerItemLeft,
  scaleIn,
  cardHover,
  cardHoverSubtle,
  viewportOnce,
} from "@/src/lib/animations";

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
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container-wide relative z-10">
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
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <img
            src="/images/about-team.jpg"
            alt="Lxyron team reviewing blueprints"
            className="rounded-xl w-full object-cover aspect-video shadow-lg"
            loading="lazy"
          />
          {/* Experience badge */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="absolute -bottom-6 -right-4 md:right-6 bg-primary text-primary-foreground p-5 rounded-xl shadow-gold-lg"
          >
            <div className="font-display text-3xl font-bold">
              <AnimatedCounter value="15+" />
            </div>
            <div className="text-primary-foreground/80 text-xs font-medium">
              Years of
              <br />
              Excellence
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3 inline-flex items-center gap-3">
            <span className="inline-block w-8 h-[2px] bg-primary" />
            Our Story
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 mt-2">
            A Legacy of Quality Construction
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded as a sub-branch of the Lxyron group, Lxyron Constructive
            Works has grown from a small team of passionate builders into a
            full-service construction powerhouse serving residential,
            commercial, and industrial clients.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our approach combines traditional craftsmanship with modern
            technology, ensuring every project meets the highest standards of
            quality, safety, and sustainability.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "250+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-lg bg-card border border-border"
              >
                <div className="font-display text-2xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-section-alt">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8"
      >
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
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItemScale}
            whileHover={cardHover}
            className="p-8 md:p-10 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-gold transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
          description="These core principles guide every project we undertake."
        />
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {values.map((v) => (
            <motion.div
              key={v}
              variants={staggerItemLeft}
              whileHover={cardHoverSubtle}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground text-sm font-medium">{v}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Awards */}
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container-wide text-center relative z-10">
        <SectionHeading
          label="Recognition"
          title="Certifications & Awards"
          description="Our commitment to excellence has been recognized across the industry."
          light
        />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
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
          ].map((a) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-gold transition-all duration-300">
                <a.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-secondary-foreground mb-2">
                {a.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;
