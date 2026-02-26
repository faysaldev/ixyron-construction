import type { Metadata } from "next";
import ProjectDetail from "@/src/Page/ProjectDetail";
import { projects } from "@/src/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: `${project.desc} — ${project.category} project by Lxyron Constructive Works in ${project.location}.`,
    openGraph: {
      title: `${project.title} | Lxyron Constructive Works`,
      description: project.desc,
      images: [{ url: project.img, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Lxyron`,
      description: project.desc,
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
