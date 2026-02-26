import type { Metadata } from "next";
import Terms from "@/src/Page/Terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Lxyron Constructive Works terms of service. Understand your rights and obligations when using our website and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function Page() {
  return <Terms />;
}
