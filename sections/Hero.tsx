"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Button } from "../components/Button";
import {
  personalInfo,
  specializationDetails,
  specializationTitles,
} from "../lib/data";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Hero = () => {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1]?.toLowerCase() || "frontend";
  const specialization =
    segment === "full-stack" || segment === "fullstack"
      ? "fullstack"
      : segment === "backend" || segment === "back-end"
        ? "backend"
        : "frontend";
  const title =
    specialization === "backend"
      ? specializationTitles.backend
      : specialization === "fullstack"
        ? specializationTitles.fullstack
        : specializationTitles.frontend;
  const detail =
    specialization === "backend"
      ? specializationDetails.backend
      : specialization === "fullstack"
        ? specializationDetails.fullstack
        : specializationDetails.frontend;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black"
    >
      <ScrollToTop />

      {/* Glow Background Elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {title}
            </motion.h2>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {detail}
              </p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button onClick={() => scrollToSection("#projects")} size="lg">
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-transparent blur-3xl"></div>

              {/* Main container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-500 shadow-2xl shadow-blue-500/50">
                {/* Inner circle */}
                <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center overflow-hidden border border-white/10">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-contain scale-110 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
};
