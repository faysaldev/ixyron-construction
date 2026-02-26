"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { serviceDetails } from "@/src/data/services";

const Services = () => (
  <main>
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary">
      <div className="container-wide">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Construction Solutions"
          description="From ground-breaking to grand opening, we provide end-to-end construction and design services."
          light
        />
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-wide space-y-8">
        {serviceDetails.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 p-8 md:p-10 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex lg:flex-col items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.tagline}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.slice(0, 4).map((f) => (
                  <span
                    key={f.title}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {f.title}
                  </span>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Every project is unique. Let&apos;s discuss how we can tailor our services
          to your specific needs.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/request-quote">
            Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  </main>
);

export default Services;
