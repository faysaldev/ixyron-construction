"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, Send, Users, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";
import {
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,
  staggerItemScale,
  cardHover,
  cardHoverSubtle,
  viewportOnce,
} from "@/src/lib/animations";

const jobs = [
  {
    title: "Senior Project Manager",
    location: "Metro City",
    type: "Full-time",
    department: "Construction",
  },
  {
    title: "Civil Engineer",
    location: "Metro City",
    type: "Full-time",
    department: "Engineering",
  },
  {
    title: "Interior Designer",
    location: "Metro City / Remote",
    type: "Full-time",
    department: "Design",
  },
  {
    title: "Site Supervisor",
    location: "Metro City",
    type: "Full-time",
    department: "Construction",
  },
  {
    title: "Architectural Drafter",
    location: "Remote",
    type: "Full-time",
    department: "Design",
  },
  {
    title: "Marketing Coordinator",
    location: "Metro City",
    type: "Full-time",
    department: "Marketing",
  },
];

const internships = [
  {
    title: "Construction Management Intern",
    location: "Metro City",
    type: "Internship",
    department: "Construction",
  },
  {
    title: "Design Intern",
    location: "Metro City",
    type: "Internship",
    department: "Design",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Growth Opportunities",
    desc: "Clear career paths with mentorship, training, and advancement opportunities.",
  },
  {
    icon: Heart,
    title: "Great Benefits",
    desc: "Competitive salary, health insurance, retirement plans, and paid time off.",
  },
  {
    icon: GraduationCap,
    title: "Meaningful Work",
    desc: "Be part of projects that shape communities and improve lives.",
  },
];

const Careers = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application submitted!", {
        description: "We'll review your application and get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const JobCard = ({ job }: { job: (typeof jobs)[0] }) => (
    <motion.div
      variants={staggerItem}
      whileHover={cardHoverSubtle}
      className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-gold transition-all duration-300 group"
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5" /> {job.department}
            </span>
          </div>
        </div>
        <a
          href="#apply"
          className="text-primary text-sm font-medium hover:underline shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
        >
          Apply Now →
        </a>
      </div>
    </motion.div>
  );

  return (
    <main>
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <SectionHeading
            label="Careers"
            title="Join Our Team"
            description="Build your career with Lxyron Constructive Works. We're always looking for talented, passionate people."
            light
          />
        </div>
      </section>

      {/* Why Work Here */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading label="Why Lxyron" title="Why Work With Us" />
          <motion.div
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItemScale}
                whileHover={cardHover}
                className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:shadow-gold transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionHeading label="Open Positions" title="Current Job Openings" />
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internships */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            label="Internships"
            title="Internship Opportunities"
            description="Kickstart your career in construction and design with our internship program."
          />
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {internships.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-section-alt">
        <div className="container-wide max-w-2xl">
          <SectionHeading label="Apply" title="Submit Your Application" />
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Input placeholder="Full Name *" required maxLength={100} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <Input
                  type="email"
                  placeholder="Email *"
                  required
                  maxLength={255}
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Input placeholder="Phone Number" maxLength={20} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <Input
                placeholder="Position You're Applying For *"
                required
                maxLength={100}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Input placeholder="LinkedIn / Portfolio URL" maxLength={500} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <Textarea
                placeholder="Tell us about yourself and why you'd be a great fit..."
                rows={5}
                required
                maxLength={2000}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full shadow-gold group"
              >
                {loading ? "Submitting..." : "Submit Application"}{" "}
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
