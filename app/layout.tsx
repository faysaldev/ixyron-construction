import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/src/components/Common/Navbar";
import Footer from "@/src/components/Common/Footer";
import { Toaster } from "@/src/components/ui/sonner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lxyron Constructive Works | Premium Construction & Interior Solutions",
    template: "%s | Lxyron Constructive Works",
  },
  description:
    "Lxyron Constructive Works delivers exceptional construction management, residential & commercial building, interior design, and renovation services. Build with confidence.",
  keywords: [
    "construction company",
    "construction management",
    "residential construction",
    "commercial construction",
    "interior design",
    "renovation",
    "remodeling",
    "Lxyron",
  ],
  authors: [{ name: "Lxyron Constructive Works" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lxyron Constructive Works",
    title: "Lxyron Constructive Works | Premium Construction & Interior Solutions",
    description:
      "We craft exceptional spaces — from concept to completion. Premium construction and interior solutions that stand the test of time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lxyron Constructive Works",
    description:
      "Premium construction and interior solutions. Build with confidence.",
  },
  metadataBase: new URL("https://lxyron.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
