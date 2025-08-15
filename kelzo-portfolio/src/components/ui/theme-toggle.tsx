"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useClickSound } from "@/hooks/useClickSound";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { play } = useClickSound();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => { play(700, 80, "square"); setTheme(isDark ? "light" : "dark"); }}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
    </button>
  );
} 