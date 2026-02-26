"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { serviceDetails } from "@/src/data/services";

const ServiceDetail = ({ slug }: { slug: string }) => {
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <img
          src={service.heroImg}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container-wide px-4 md:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-4">
            {service.title}
          </h1>
          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionHeading label="What's Included" title="Service Features" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="How We Work" title="Our Process" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-lg bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {p.step}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading label="Advantages" title="Key Benefits" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary-foreground/5"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground text-sm font-medium">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation on your{" "}
            {service.title.toLowerCase()} project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/request-quote">
                Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
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
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
