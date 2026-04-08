"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { getSpecializationFromPathname, projectRoleLabels } from "../lib/data";

export const Experience = () => {
  const pathname = usePathname();
  const specialization = getSpecializationFromPathname(pathname);
  const role = projectRoleLabels[specialization];

  const experiences = [
    {
      id: "1",
      role,
      company: "Medi Mengle App",
      duration: "2024",
      achievements: [
        "Delivered a professional medical management system with appointment booking and payments.",
        "Created secure user workflows for patients, doctors, and administrators.",
        "Implemented scalable data handling and responsive dashboard views.",
      ],
    },
    {
      id: "2",
      role,
      company: "Travel Planning Portal",
      duration: "2025",
      achievements: [
        "Developed an intelligent travel dashboard with real-time forecasts and itinerary tools.",
        "Added interactive mapping and personalized trip planning features.",
        "Focused on performance and seamless cross-device usability.",
      ],
    },
    {
      id: "3",
      role,
      company: "Perfume and SkinCare Shop",
      duration: "2026",
      achievements: [
        "Built an enterprise e-commerce platform with secure checkout and admin order management.",
        "Integrated payment processing, product catalogs, and inventory controls.",
        "Optimized UX for mobile and desktop shopping experiences.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <motion.div
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
