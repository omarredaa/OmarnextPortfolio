"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  getSpecializationFromPathname,
  skillCategoriesBySpecialization,
} from "../lib/data";

export const Skills = () => {
  const pathname = usePathname();
  const specialization = getSpecializationFromPathname(pathname);
  const skillCategories =
    skillCategoriesBySpecialization[specialization] ||
    skillCategoriesBySpecialization.frontend;

  return (
    <section
      id="skills"
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
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Master-level expertise across modern tech stack
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">◆</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-300 flex items-center group/skill cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0 group-hover/skill:scale-150 transition-transform"></span>
                    <span className="group-hover/skill:text-blue-300 transition-colors">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
