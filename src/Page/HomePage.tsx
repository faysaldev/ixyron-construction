"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  Paintbrush,
  Wrench,
  Users,
  Shield,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";

const services = [
  {
    icon: Building2,
    title: "Construction Management",
    desc: "End-to-end project oversight ensuring quality, timeline, and budget adherence.",
  },
  {
    icon: HomeIcon,
    title: "Residential Construction",
    desc: "Custom homes built to your vision with premium materials and craftsmanship.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Modern commercial spaces designed for functionality and impact.",
  },
  {
    icon: Paintbrush,
    title: "Interior Design & Fit-outs",
    desc: "Transforming spaces with creative, functional interior solutions.",
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Breathing new life into existing structures with expert remodeling.",
  },
  {
    icon: Users,
    title: "Project Consultation",
    desc: "Expert guidance from concept to completion for any construction project.",
  },
];

const projects = [
  {
    img: "/images/project-interior.jpg",
    title: "Luxury Living Space",
    category: "Interior Design",
  },
  {
    img: "/images/project-commercial.jpg",
    title: "Metro Business Center",
    category: "Commercial",
  },
  {
    img: "/images/project-residential.jpg",
    title: "Oakwood Residence",
    category: "Residential",
  },
  {
    img: "/images/project-renovation.jpg",
    title: "Modern Kitchen Remodel",
    category: "Renovation",
  },
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Team Members" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "Lxyron transformed our outdated house into a modern dream home. Their attention to detail is unmatched.",
  },
  {
    name: "David Chen",
    role: "CEO, TechSpace Inc.",
    text: "Our new office is a statement piece. The team delivered on time and exceeded every expectation.",
  },
  {
    name: "Amanda Torres",
    role: "Property Developer",
    text: "Reliable, professional, and incredibly talented. Lxyron is our go-to partner for every project.",
  },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <video
          src="/heroVideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container-wide px-4 md:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 block">
              Lxyron Constructive Works
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.1] mb-6">
              Build with <span className="text-gradient-gold">Confidence</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              We craft exceptional spaces — from concept to completion. Premium
              construction and interior solutions that stand the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-secondary-foreground/20 text-secondary-foreground bg-secondary-foreground/10"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary">
        <div className="container-wide px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-primary-foreground/70 text-sm mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="Comprehensive construction and design services tailored to bring your vision to life."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionHeading
            label="Portfolio"
            title="Featured Projects"
            description="Explore our latest work — from luxury residences to modern commercial spaces."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs tracking-[0.15em] uppercase font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-secondary-foreground mt-1">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading
            label="Why Lxyron"
            title="Why Choose Us"
            description="We combine expertise, quality, and innovation to deliver projects that exceed expectations."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "Every project meets the highest standards of quality and safety compliance.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "50+ skilled professionals with decades of combined construction experience.",
              },
              {
                icon: Wrench,
                title: "On-Time Delivery",
                desc: "We respect your timelines and budgets — delivering excellence on schedule.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-lg bg-card border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Get in touch today for a free consultation and let&apos;s bring
              your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
