"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
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

const ProjectDetail = ({ slug }: { slug: string }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero Image */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-wide">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-secondary-foreground/70 hover:text-primary text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
            <span className="block text-primary text-xs tracking-[0.15em] uppercase font-medium mb-2">
              {project.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Meta */}
      <section className="bg-card border-b border-border">
        <div className="container-wide px-4 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: User, label: "Client", value: project.client },
            { icon: MapPin, label: "Location", value: project.location },
            { icon: Clock, label: "Duration", value: project.duration },
            { icon: Calendar, label: "Year", value: project.year },
          ].map((m) => (
            <div key={m.label} className="flex items-start gap-3">
              <m.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  {m.label}
                </span>
                <p className="text-sm font-medium text-foreground">{m.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.desc}
            </p>
          </motion.div>

          {/* Scope */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Scope of Work
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.scope.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-primary/5 border border-primary/20"
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
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
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-lg overflow-hidden bg-card border border-border"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-primary text-xs tracking-wide uppercase font-medium">
                    {p.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground mt-1">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Inspired by This Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Let&apos;s create something extraordinary together.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/request-quote">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
