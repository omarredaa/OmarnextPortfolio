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
    <section id="skills" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold  dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className=" dark:bg-gray-800 rounded-lg p-6 shadow-md w-[80%] sm:w-[45%] lg:w-[30%]"
            >
              <h3 className="text-xl font-semibold  dark:text-white mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {skill}
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
