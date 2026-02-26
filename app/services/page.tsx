import type { Metadata } from "next";
import Services from "@/src/Page/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive construction solutions from Lxyron — construction management, residential & commercial building, interior design, renovation, and project consultation.",
  openGraph: {
    title: "Our Services | Lxyron Constructive Works",
    description:
      "From ground-breaking to grand opening, we provide end-to-end construction and design services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Lxyron Constructive Works",
    description:
      "Construction management, residential & commercial building, interior design, and renovation services.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <Services />;
}
