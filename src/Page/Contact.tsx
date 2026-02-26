"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import SectionHeading from "@/src/components/Common/SectionHeading";
import { toast } from "sonner";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHoverSubtle,
  viewportOnce,
} from "@/src/lib/animations";

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
    <main>
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
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
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Input placeholder="Your Name" required maxLength={100} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
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
                <Input placeholder="Subject" required maxLength={200} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  maxLength={2000}
                />
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
                  className="w-full md:w-auto shadow-gold group"
                >
                  {loading ? "Sending..." : "Send Message"}{" "}
                  <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-6"
            >
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
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={cardHoverSubtle}
                  className="flex gap-4 p-4 rounded-xl hover:bg-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:shadow-gold transition-all duration-300">
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
                </motion.div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center mt-8"
            >
              <span className="text-muted-foreground text-sm">
                Google Map Integration
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
