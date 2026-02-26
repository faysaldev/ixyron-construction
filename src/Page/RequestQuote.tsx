"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Upload } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";

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
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary">
        <div className="container-wide">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Personal Info */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Your Information
              </h3>
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
            </div>

            {/* Project Info */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
                    className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
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
            </div>

            {/* File Upload */}
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                Attachments
              </h3>
              <label className="flex items-center justify-center gap-3 p-8 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors bg-card">
                <Upload className="w-6 h-6 text-muted-foreground" />
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
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Submitting..." : "Submit Quote Request"}{" "}
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default RequestQuote;
