"use client";

import { Moon } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeToggleButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ThemeToggleButton = ({
  size = "md",
  className = "",
}: ThemeToggleButtonProps) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = sizeMap[size];

  return (
    <motion.button
      disabled
      className={`relative p-2 rounded-lg transition-all duration-300 
        bg-gray-800/50 hover:bg-gray-700/50 
        border border-gray-700/50
        text-gray-300 hover:text-white
        backdrop-blur-sm cursor-default ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Dark theme is always active"
    >
      <motion.div
        initial={false}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Moon size={iconSize} className="text-blue-400" />
      </motion.div>
    </motion.button>
  );
};
