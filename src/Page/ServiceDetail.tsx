"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { serviceDetails } from "@/src/data/services";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerContainerFast,
  staggerItem,
  staggerItemScale,
  staggerItemLeft,
  scaleIn,
  heroTextReveal,
  heroSubtextReveal,
  heroLabelReveal,
  cardHover,
  cardHoverSubtle,
  viewportOnce,
} from "@/src/lib/animations";

const ServiceDetail = ({ slug }: { slug: string }) => {
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <img
          src={service.heroImg}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container-wide px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </motion.div>
          <motion.div
            variants={heroLabelReveal}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
          </motion.div>
          <motion.h1
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            variants={heroSubtextReveal}
            initial="hidden"
            animate="visible"
            className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl"
          >
            {service.tagline}
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="h-[3px] w-16 bg-primary rounded-full mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionHeading label="What's Included" title="Service Features" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {service.features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItemScale}
                whileHover={cardHover}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-gold transition-all duration-300 group"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="How We Work" title="Our Process" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                variants={staggerItem}
                whileHover={cardHoverSubtle}
                className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-4 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {p.step}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-primary/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <SectionHeading label="Advantages" title="Key Benefits" light />
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {service.benefits.map((b) => (
              <motion.div
                key={b}
                variants={staggerItemLeft}
                whileHover={cardHoverSubtle}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-secondary-foreground text-sm font-medium">
                  {b}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide text-center relative z-10">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation on your{" "}
              {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/request-quote">
                  Request a Quote{" "}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
