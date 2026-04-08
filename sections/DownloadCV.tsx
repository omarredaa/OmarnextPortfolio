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
    <section className="py-20 bg-transparent" id="cv">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Download My CV
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and projects.
            Download my professional CV to learn more about my background and
            expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CV Preview/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className=" dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                What You'll Find
              </h3>
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className=" dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional CV
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {description}
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="w-full lg:w-auto cursor-pointer flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  PDF format • Updated regularly
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
