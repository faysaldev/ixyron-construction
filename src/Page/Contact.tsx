"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", {
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <main className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <SectionHeading
            label="Contact Us"
            title="Let's Talk About Your Project"
            description="Reach out for a free consultation. We'd love to hear about your vision."
            light
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" required maxLength={100} />
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  maxLength={255}
                />
              </div>
              <Input placeholder="Phone Number" maxLength={20} />
              <Input placeholder="Subject" required maxLength={200} />
              <Textarea
                placeholder="Tell us about your project..."
                rows={5}
                required
                maxLength={2000}
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full md:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            {[
              {
                icon: MapPin,
                title: "Visit Our Office",
                lines: [
                  "123 Construction Ave, Suite 100",
                  "Metro City, MC 10001",
                ],
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["+1 (234) 567-890", "+1 (234) 567-891"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["info@lxyron.com", "projects@lxyron.com"],
              },
              {
                icon: Clock,
                title: "Office Hours",
                lines: [
                  "Mon – Fri: 8:00 AM – 6:00 PM",
                  "Sat: 9:00 AM – 2:00 PM",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-muted-foreground text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">
                Google Map Integration
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
