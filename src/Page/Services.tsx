"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { serviceDetails } from "@/src/data/services";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  scaleIn,
  cardHoverSubtle,
  viewportOnce,
} from "@/src/lib/animations";

const Services = () => (
  <main>
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container-wide relative z-10">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Construction Solutions"
          description="From ground-breaking to grand opening, we provide end-to-end construction and design services."
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
        className="container-wide space-y-8"
      >
        {serviceDetails.map((service, i) => (
          <motion.div
            key={service.title}
            variants={staggerItem}
            whileHover={cardHoverSubtle}
            className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 p-8 md:p-10 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-gold transition-all duration-300 group"
          >
            <div className="flex lg:flex-col items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-gold transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.tagline}
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-2 mb-4"
              >
                {service.features.slice(0, 4).map((f, fi) => (
                  <motion.span
                    key={f.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + fi * 0.05 }}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {f.title}
                  </motion.span>
                ))}
              </motion.div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline group/link"
              >
                Learn More{" "}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div className="container-wide text-center relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Every project is unique. Let&apos;s discuss how we can tailor our
            services to your specific needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="group">
            <Link href="/request-quote">
              Request a Quote{" "}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Services;
