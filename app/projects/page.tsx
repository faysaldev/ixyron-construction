import type { Metadata } from "next";
import Projects from "@/src/Page/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Lxyron's portfolio of residential, commercial, interior, and renovation projects. See our quality craftsmanship in action.",
  openGraph: {
    title: "Our Projects | Lxyron Constructive Works",
    description:
      "Projects that speak for themselves — from luxury residences to modern commercial spaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Lxyron Constructive Works",
    description:
      "Browse our curated selection of residential, commercial, and interior projects.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function Page() {
  return <Projects />;
}
