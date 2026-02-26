"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Upload } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";
import {
  fadeInUp,
  viewportOnce,
} from "@/src/lib/animations";

const serviceOptions = [
  "Construction Management",
  "Residential Construction",
  "Commercial Construction",
  "Interior Design & Fit-outs",
  "Renovation & Remodeling",
  "Project Consultation",
  "Other",
];

const budgetRanges = [
  "Under $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000 – $1,000,000",
  "Over $1,000,000",
  "Not sure yet",
];

const RequestQuote = () => {
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Quote request submitted!", {
        description:
          "Our team will review your project and get back to you within 48 hours.",
      });
      (e.target as HTMLFormElement).reset();
      setFileName(null);
    }, 1200);
  };

  return (
    <main>
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <SectionHeading
            label="Request a Quote"
            title="Tell Us About Your Project"
            description="Fill out the form below and our team will provide a detailed estimate within 48 hours."
            light
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-8 bg-primary rounded-full" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Your Information
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full Name *" required maxLength={100} />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  required
                  maxLength={255}
                />
                <Input placeholder="Phone Number" maxLength={20} />
                <Input placeholder="Company (optional)" maxLength={100} />
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-8 bg-primary rounded-full" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Project Details
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estimated Budget *
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <Input placeholder="Project Location" maxLength={200} />
                <Textarea
                  placeholder="Describe your project — scope, goals, timeline, any special requirements..."
                  rows={6}
                  required
                  maxLength={3000}
                />
              </div>
            </motion.div>

            {/* File Upload */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-8 bg-primary rounded-full" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Attachments
                </h3>
              </div>
              <label className="flex items-center justify-center gap-3 p-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-card transition-all duration-300 group">
                <Upload className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">
                    {fileName || "Upload project files"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Blueprints, floor plans, reference images (PDF, JPG, PNG up
                    to 20MB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                  onChange={handleFileChange}
                />
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full shadow-gold group"
              >
                {loading ? "Submitting..." : "Submit Quote Request"}{" "}
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default RequestQuote;
