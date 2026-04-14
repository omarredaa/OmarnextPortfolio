import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children" | "size"
> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "cursor-pointer",
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/30 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border-2 border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/40 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
