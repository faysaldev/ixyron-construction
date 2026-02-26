import type { Metadata } from "next";
import RequestQuote from "@/src/Page/RequestQuote";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free project estimate from Lxyron Constructive Works. Tell us about your construction or design project and we'll respond within 48 hours.",
  openGraph: {
    title: "Request a Quote | Lxyron Constructive Works",
    description:
      "Fill out our form and our team will provide a detailed estimate within 48 hours.",
  },
  twitter: {
    card: "summary",
    title: "Request a Quote | Lxyron",
    description:
      "Get a free construction project estimate within 48 hours.",
  },
  alternates: {
    canonical: "/request-quote",
  },
};

export default function Page() {
  return <RequestQuote />;
}
