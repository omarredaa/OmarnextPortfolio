"use client";

import { ThemeProvider } from "./ThemeProvider";
import { AppLoader } from "./AppLoader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AppLoader>{children}</AppLoader>
    </ThemeProvider>
  );
}
