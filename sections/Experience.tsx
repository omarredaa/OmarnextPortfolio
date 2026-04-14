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
    <section
      id="experience"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0b1120] to-black"
    >
      {/* Glow Background */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

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
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Delivering high-impact solutions across diverse projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0b1120] shadow-lg shadow-blue-500/50"></div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <motion.div
                    className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-medium text-sm">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-3 group/item"
                        >
                          <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                          <span className="group-hover/item:text-blue-300 transition-colors">
                            {achievement}
                          </span>
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
