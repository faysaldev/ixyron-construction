import type { Metadata } from "next";
import Privacy from "@/src/Page/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Lxyron Constructive Works privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return <Privacy />;
}
