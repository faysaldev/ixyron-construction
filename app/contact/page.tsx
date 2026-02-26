import type { Metadata } from "next";
import Contact from "@/src/Page/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lxyron Constructive Works for a free consultation. Reach out by phone, email, or visit our office. We'd love to hear about your project.",
  openGraph: {
    title: "Contact Us | Lxyron Constructive Works",
    description:
      "Reach out for a free consultation. We'd love to hear about your vision.",
  },
  twitter: {
    card: "summary",
    title: "Contact Lxyron Constructive Works",
    description:
      "Get a free consultation for your construction or interior design project.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <Contact />;
}
