"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  Building2,
  Home as HomeIcon,
  Paintbrush,
  Wrench,
  Users,
  Shield,
  Quote,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import SectionHeading from "@/src/components/Common/SectionHeading";
import AnimatedCounter from "@/src/components/Common/AnimatedCounter";
import {
  staggerContainer,
  staggerContainerSlow,
  staggerItem,
  staggerItemScale,
  heroTextReveal,
  heroSubtextReveal,
  heroCTAReveal,
  heroLabelReveal,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  cardHover,
  viewportOnce,
} from "@/src/lib/animations";

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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <video
            src="/heroVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-hero-overlay" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container-wide px-4 md:px-8 pt-20"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={heroLabelReveal}
              initial="hidden"
              animate="visible"
              className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4 inline-flex items-center gap-3"
            >
              <motion.span
                className="inline-block w-8 h-[2px] bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ originX: 0 }}
              />
              Lxyron Constructive Works
            </motion.span>
            <motion.h1
              variants={heroTextReveal}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.1] mb-6 mt-4"
            >
              Build with{" "}
              <span className="text-gradient-gold">Confidence</span>
            </motion.h1>
            <motion.p
              variants={heroSubtextReveal}
              initial="hidden"
              animate="visible"
              className="text-secondary-foreground/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            >
              We craft exceptional spaces — from concept to completion. Premium
              construction and interior solutions that stand the test of time.
            </motion.p>
            <motion.div
              variants={heroCTAReveal}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild className="shadow-gold group">
                <Link href="/contact">
                  Get a Free Quote{" "}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-secondary-foreground/20 text-secondary-foreground bg-secondary-foreground/10 hover:bg-secondary-foreground/20"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-secondary-foreground/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-secondary-foreground/30 flex justify-center pt-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="container-wide px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-primary-foreground/70 text-sm mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="Comprehensive construction and design services tailored to bring your vision to life."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItemScale}
                whileHover={cardHover}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-gold transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-4 h-[2px] bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mt-12"
          >
            <Button variant="outline" asChild className="group">
              <Link href="/services">
                View All Services{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-[0.15em] uppercase font-medium">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-secondary-foreground mt-1">
                    {project.title}
                  </h3>
                  <div className="h-[2px] w-0 group-hover:w-16 bg-primary transition-all duration-500 mt-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mt-12"
          >
            <Button variant="outline" asChild className="group">
              <Link href="/projects">
                View All Projects{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container-wide">
          <SectionHeading
            label="Why Lxyron"
            title="Why Choose Us"
            description="We combine expertise, quality, and innovation to deliver projects that exceed expectations."
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
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:shadow-gold transition-all duration-300">
                  <item.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItemScale}
                whileHover={cardHover}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-gold transition-all duration-300 relative"
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <motion.span
                      key={j}
                      className="text-primary text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + j * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Dream?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Get in touch today for a free consultation and let&apos;s bring
              your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                Start Your Project{" "}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
