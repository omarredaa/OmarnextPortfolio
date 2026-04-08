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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ScrollToTop />
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-36">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-4 max-w-2xl mx-auto lg:mx-0">
              {detail}
            </p>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

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

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 mb-12"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div> */}
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <div className="relative"> */}
            {/* <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl flex justify-center items-center bg-[#09090b]">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  //   className="w-full h-full object-cover rounded-full"
                  className="w-full h-full object-contain rounded-full"
                />
              </div> */}
            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👋</span>
              </div> */}
            {/* </div> */}

            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent blur-2xl"></div>

              {/* Main container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[5px] bg-gradient-to-tr from-gray-800 via-gray-900 to-black shadow-2xl">
                {/* Inner circle */}
                <div className="w-full h-full rounded-full bg-[#09090b] flex items-center justify-center overflow-hidden">
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

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />rrr
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};
