"use client";

import { motion } from "framer-motion";
import { Code, Users, Lightbulb } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  getSpecializationFromPathname,
  personalInfo,
  specializationAbout,
} from "../lib/data";

export const About = () => {
  const pathname = usePathname();
  const specialization = getSpecializationFromPathname(pathname);
  const aboutText = specializationAbout[specialization] || personalInfo.about;
  const features = [
    {
      icon: Code,
      title: "Problem Solver",
      description:
        "I love tackling complex challenges and finding elegant solutions through code.",
    },
    {
      icon: Users,
      title: "Team Player",
      description:
        "Collaborative development and clear communication are key to successful projects.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description:
        "Always exploring new technologies and approaches to improve development processes.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Journey as a Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {aboutText}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest technologies. My goal is to create
              applications that not only work flawlessly but also provide
              exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
