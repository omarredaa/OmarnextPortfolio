"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const ThemeToggleButton = ({
  size = "md",
  className = "",
}: ThemeToggleButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const iconSize = sizeMap[size];

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-all duration-300 
        bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 
        border border-gray-200/20 dark:border-gray-700/50
        text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
        backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Sun size={iconSize} className="text-yellow-400" />
        ) : (
          <Moon size={iconSize} className="text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};
