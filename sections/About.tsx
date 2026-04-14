"use client";

import { motion } from "framer-motion";
import {
  Code,
  Users,
  Lightbulb,
  Home,
  Briefcase,
  FolderOpen,
  Mail,
  Star,
} from "lucide-react";

export const About = () => {
  const projectSections = [
    {
      icon: Home,
      title: "Hero Section",
      description:
        "Dynamic introduction with animated backgrounds and smooth navigation.",
      features: [
        "Theme-aware backgrounds",
        "Responsive typography",
        "Social media links",
      ],
    },
    {
      icon: Code,
      title: "Skills Section",
      description: "Interactive skills showcase with filtering and animations.",
      features: [
        "Category-based organization",
        "Specialization routing",
        "Hover animations",
      ],
    },
    {
      icon: FolderOpen,
      title: "Projects Section",
      description: "Portfolio showcase with images, tech stack, and demos.",
      features: [
        "Image optimization",
        "Live demo links",
        "Technology filtering",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience Section",
      description: "Timeline with animated entries and achievements.",
      features: ["Timeline layout", "Company details", "Achievements"],
    },
    {
      icon: Mail,
      title: "Contact Section",
      description: "Interactive contact form with validation.",
      features: ["Form validation", "Email integration", "Social links"],
    },
  ];

  const designFeatures = [
    {
      icon: Star,
      title: "Theme System",
      description: "Light/Dark mode with animated backgrounds.",
    },
    {
      icon: Users,
      title: "Responsive Design",
      description: "Optimized for all devices with smooth layouts.",
    },
    {
      icon: Lightbulb,
      title: "Modern Stack",
      description: "Next.js, React, Tailwind & Framer Motion.",
    },
  ];

  return (
    <section
      id={"about"}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4">
            About This Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A modern, responsive portfolio showcasing full-stack development and
            UI/UX excellence.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Sections */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-white mb-12 text-center">
            Portfolio Sections
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30"
              >
                <div className="h-full w-full rounded-2xl bg-[#0b1120] p-6 transition group-hover:bg-[#111827]">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white group-hover:scale-110 transition">
                      <section.icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {section.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    {section.features.map((f, idx) => (
                      <p
                        key={idx}
                        className="text-xs text-gray-500 flex items-center"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                        {f}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
