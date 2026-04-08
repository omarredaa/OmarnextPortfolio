"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { StarsBackground } from "./StarsBackground";
// import { SunBackground } from "./SunBackground";

interface UnifiedBackgroundProps {
  className?: string;
}

export const UnifiedBackground = ({
  className = "",
}: UnifiedBackgroundProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by only rendering after client-side mount
  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <StarsBackground />
    </div>
  );
};
