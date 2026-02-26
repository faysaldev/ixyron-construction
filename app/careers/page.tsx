import type { Metadata } from "next";
import Careers from "@/src/Page/Careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Lxyron Constructive Works team. Browse current job openings and internship opportunities in construction, engineering, design, and marketing.",
  openGraph: {
    title: "Careers | Lxyron Constructive Works",
    description:
      "Build your career with Lxyron. We're always looking for talented, passionate people.",
  },
  twitter: {
    card: "summary",
    title: "Careers | Lxyron Constructive Works",
    description:
      "Browse job openings and internship opportunities at Lxyron.",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function Page() {
  return <Careers />;
}
