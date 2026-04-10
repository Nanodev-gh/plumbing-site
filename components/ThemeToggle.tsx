"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
