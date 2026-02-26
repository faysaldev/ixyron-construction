import type { Metadata } from "next";
import ServiceDetail from "@/src/Page/ServiceDetail";
import { serviceDetails } from "@/src/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: `${service.tagline}. ${service.description.slice(0, 140)}...`,
    openGraph: {
      title: `${service.title} | Lxyron Constructive Works`,
      description: service.tagline,
      images: [{ url: service.heroImg, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Lxyron`,
      description: service.tagline,
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetail slug={slug} />;
}
