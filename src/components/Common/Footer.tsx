import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/request-quote", label: "Get a Quote" },
];

const serviceLinks = [
  { href: "/services/construction-management", label: "Construction Management" },
  { href: "/services/residential-construction", label: "Residential Construction" },
  { href: "/services/commercial-construction", label: "Commercial Construction" },
  { href: "/services/interior-design", label: "Interior Design" },
  { href: "/services/renovation", label: "Renovation & Remodeling" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-primary">
                Lxyron
              </span>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed mb-4">
              Premium construction and interior solutions. Building excellence
              since 2010.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                123 Construction Ave, Metro City
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +1 (234) 567-890
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@lxyron.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary-foreground mb-4">
              Office Hours
            </h4>
            <div className="space-y-2 text-sm text-secondary-foreground/60">
              <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container-wide px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/40">
            &copy; {new Date().getFullYear()} Lxyron Constructive Works. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-secondary-foreground/40 hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
