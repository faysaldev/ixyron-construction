"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">
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
          className="text-primary text-sm font-medium hover:underline shrink-0"
        >
          Apply Now →
        </a>
      </div>
    </motion.div>
  );

  return (
    <main className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="container-wide">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Growth Opportunities",
                desc: "Clear career paths with mentorship, training, and advancement opportunities.",
              },
              {
                title: "Great Benefits",
                desc: "Competitive salary, health insurance, retirement plans, and paid time off.",
              },
              {
                title: "Meaningful Work",
                desc: "Be part of projects that shape communities and improve lives.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-section-alt">
        <div className="container-wide">
          <SectionHeading label="Open Positions" title="Current Job Openings" />
          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
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
          <div className="space-y-4 max-w-3xl mx-auto">
            {internships.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding bg-section-alt">
        <div className="container-wide max-w-2xl">
          <SectionHeading label="Apply" title="Submit Your Application" />
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Full Name *" required maxLength={100} />
              <Input
                type="email"
                placeholder="Email *"
                required
                maxLength={255}
              />
            </div>
            <Input placeholder="Phone Number" maxLength={20} />
            <Input
              placeholder="Position You're Applying For *"
              required
              maxLength={100}
            />
            <Input placeholder="LinkedIn / Portfolio URL" maxLength={500} />
            <Textarea
              placeholder="Tell us about yourself and why you'd be a great fit..."
              rows={5}
              required
              maxLength={2000}
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Submitting..." : "Submit Application"}{" "}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Careers;
