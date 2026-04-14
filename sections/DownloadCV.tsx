"use client";

import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../components/Button";

interface DownloadCVProps {
  specialization?: string;
}

export const DownloadCV = ({ specialization }: DownloadCVProps) => {
  const pathname = usePathname();
  const segment =
    specialization || pathname?.split("/")[1]?.toLowerCase() || "frontend";
  const cvType =
    segment === "full-stack" || segment === "fullstack"
      ? "fullstack"
      : segment === "backend" || segment === "back-end"
        ? "backend"
        : "frontend";

  const handleDownload = () => {
    // Create a link to download the CV based on current URL
    const link = document.createElement("a");
    link.href = `/${cvType} cv.pdf`;
    link.download = `Omar_Reda_${cvType}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getHighlights = () => {
    switch (cvType) {
      case "frontend":
        return [
          {
            icon: Briefcase,
            title: "UI/UX Design Experience",
            description: "Creating intuitive and responsive user interfaces",
          },
          {
            icon: Award,
            title: "Modern Frameworks",
            description: "React, Next.js, Vue.js, Tailwind CSS",
          },
          {
            icon: FileText,
            title: "Responsive Web Development",
            description: "Mobile-first design and cross-browser compatibility",
          },
        ];
      case "backend":
        return [
          {
            icon: Briefcase,
            title: "API Development",
            description: "RESTful APIs and GraphQL implementations",
          },
          {
            icon: Award,
            title: "Database Management",
            description: "SQL & NoSQL databases, data modeling",
          },
          {
            icon: FileText,
            title: "Server Technologies",
            description: "Node.js, Express, Python, cloud services",
          },
        ];
      case "fullstack":
        return [
          {
            icon: Briefcase,
            title: "End-to-End Development",
            description: "Full-stack web application development",
          },
          {
            icon: Award,
            title: "Complete Tech Stack",
            description: "Frontend, Backend, Database, DevOps",
          },
          {
            icon: FileText,
            title: "Scalable Solutions",
            description: "Production-ready applications and systems",
          },
        ];
      default:
        return [
          {
            icon: Briefcase,
            title: "2+ Years Experience",
            description: "Full-Stack Development",
          },
          {
            icon: Award,
            title: "Modern Technologies",
            description: "Next.js, React, Node.js",
          },
          {
            icon: FileText,
            title: "Professional CV",
            description: "Detailed Portfolio & Skills",
          },
        ];
    }
  };

  const getDescription = () => {
    switch (cvType) {
      case "frontend":
        return "A comprehensive document highlighting my frontend development skills, UI/UX expertise, and experience with modern web technologies. Perfect for frontend positions and creative collaborations.";
      case "backend":
        return "A detailed overview of my backend development expertise, API design, database management, and server-side technologies. Ideal for backend engineering roles and technical partnerships.";
      case "fullstack":
        return "A complete showcase of my full-stack development capabilities, from frontend interfaces to backend systems and database architecture. Suitable for comprehensive development positions.";
      default:
        return "A detailed document showcasing my technical skills, project experience, and professional background. Perfect for potential employers and collaborators.";
    }
  };

  const highlights = getHighlights();
  const description = getDescription();

  return (
    <section
      id="cv"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black"
    >
      {/* Glow Background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Download My CV
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Get a comprehensive overview of my skills, experience, and projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Professional CV
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="w-full space-y-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
                <p className="text-sm text-gray-500">
                  PDF format • Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
