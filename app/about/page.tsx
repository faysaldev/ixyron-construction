import type { Metadata } from "next";
import About from "@/src/Page/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lxyron Constructive Works — a premier construction and interior solutions company building excellence since 2010. Our mission, values, and awards.",
  openGraph: {
    title: "About Us | Lxyron Constructive Works",
    description:
      "A premier construction and interior solutions company dedicated to turning ambitious visions into lasting realities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lxyron Constructive Works",
    description:
      "Building excellence since 2010. Learn about our mission, values, and commitment to quality.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <About />;
}
