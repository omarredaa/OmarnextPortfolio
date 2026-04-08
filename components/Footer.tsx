"use client";

import { motion } from "framer-motion";
import { Heart, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  personalInfo,
  footerDescriptions,
  getSpecializationFromPathname,
} from "../lib/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const specialization = getSpecializationFromPathname(pathname);
  const footerDescription =
    footerDescriptions[specialization] || footerDescriptions.frontend;

  return (
    <footer className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col md:flex-row md:justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-wrap w-[80%] md:w-[30%] mb-5 "
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400">{footerDescription}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <User className="w-4 h-4 mr-2" />
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Code className="w-4 h-4 mr-2" />
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Connect With Me
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="flex flex-col items-end space-y-2">
              <p className="text-gray-400 text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
