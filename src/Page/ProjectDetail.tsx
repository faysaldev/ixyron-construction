"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  User,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { projects } from "@/src/data/projects";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  staggerItemScale,
  scaleIn,
  drawLine,
  viewportOnce,
} from "@/src/lib/animations";

const ProjectDetail = ({ slug }: { slug: string }) => {
  const project = projects.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  if (!project) return notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero Image */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12"
        >
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary text-sm mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Projects
              </Link>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="block text-primary text-xs tracking-[0.15em] uppercase font-medium mb-2"
            >
              {project.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground"
            >
              {project.title}
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Meta */}
      <section className="bg-card border-b border-border">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="container-wide px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: User, label: "Client", value: project.client },
            { icon: MapPin, label: "Location", value: project.location },
            { icon: Clock, label: "Duration", value: project.duration },
            { icon: Calendar, label: "Year", value: project.year },
          ].map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                <m.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {m.label}
                </span>
                <p className="text-sm font-medium text-foreground">{m.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl space-y-14">
          {/* Overview */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                variants={drawLine}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="h-[3px] w-12 bg-primary rounded-full"
              />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Project Overview
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.desc}
            </p>
          </motion.div>

          {/* Scope */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-12 bg-primary rounded-full" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Scope of Work
              </h2>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-wrap gap-2"
            >
              {project.scope.map((s) => (
                <motion.span
                  key={s}
                  variants={staggerItemScale}
                  className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Challenge */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-12 bg-primary rounded-full" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                The Challenge
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-12 bg-primary rounded-full" />
              <h2 className="font-display text-2xl font-bold text-foreground">
                Our Solution
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          {/* Result */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="p-8 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  The Result
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-display text-3xl font-bold text-foreground mb-8 text-center"
          >
            Other Projects
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {otherProjects.map((p) => (
              <motion.div key={p.slug} variants={staggerItemScale}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-gold transition-all duration-300 block"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-primary text-xs tracking-wide uppercase font-medium">
                      {p.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                  </div>
                </Link>
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
              Inspired by This Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let&apos;s create something extraordinary together.
            </p>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/request-quote">
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

export default ProjectDetail;
