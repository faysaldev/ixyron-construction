"use client";

import { forwardRef } from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ label, title, description, align = "center", light = false }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}
    >
      {label && (
        <span className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-secondary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-secondary-foreground/60" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  ),
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
