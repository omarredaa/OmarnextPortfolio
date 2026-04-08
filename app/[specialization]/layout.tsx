import type { Metadata } from "next";

interface SpecializationLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    specialization: string;
  }>;
}

export async function generateMetadata({
  params,
}: Pick<SpecializationLayoutProps, "params">): Promise<Metadata> {
  const { specialization } = await params;
  const spec = specialization.toLowerCase();

  const titleMap: { [key: string]: string } = {
    frontend: "OmarReda - Front-End Developer",
    backend: "OmarReda - Backend Developer",
    fullstack: "OmarReda - Full Stack Developer",
    "full-stack": "OmarReda - Full Stack Developer",
    "back-end": "OmarReda - Backend Developer",
  };

  const descriptionMap: { [key: string]: string } = {
    frontend:
      "Professional portfolio of Omar Reda, specializing in Front-End development with Next.js and React.",
    backend:
      "Professional portfolio of Omar Reda, specializing in Backend development with Node.js and MongoDB.",
    fullstack:
      "Professional portfolio of Omar Reda, specializing in Full Stack development with Next.js, React, and Node.js.",
    "full-stack":
      "Professional portfolio of Omar Reda, specializing in Full Stack development with Next.js, React, and Node.js.",
    "back-end":
      "Professional portfolio of Omar Reda, specializing in Backend development with Node.js and MongoDB.",
  };

  const title = titleMap[spec] || "OmarReda - Full Stack Developer";
  const description =
    descriptionMap[spec] ||
    "Professional portfolio showcasing web development projects and skills";

  return {
    title,
    description,
    keywords:
      spec === "frontend"
        ? "Front-End Developer, React, Next.js, TypeScript, Portfolio"
        : spec === "backend"
          ? "Backend Developer, Node.js, MongoDB, TypeScript, Portfolio"
          : "Full Stack Developer, React, Next.js, Node.js, MongoDB, TypeScript, Portfolio",
    authors: [{ name: "Omar Reda" }],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/profile.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default function SpecializationLayout({
  children,
}: SpecializationLayoutProps) {
  return <>{children}</>;
}
