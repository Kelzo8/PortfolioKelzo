"use client";

import { useEffect, useState } from "react";
import { useClickSound } from "@/hooks/useClickSound";

export function MatrixToggle({ onChange }: { onChange: (enabled: boolean) => void }) {
  const [enabled, setEnabled] = useState<boolean>(false);
  const { play } = useClickSound();
  
  useEffect(() => {
    const saved = localStorage.getItem("matrix-enabled");
    if (saved) {
      const val = saved === "true";
      setEnabled(val);
      onChange(val);
    }
  }, [onChange]);
  
  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem("matrix-enabled", String(next));
    onChange(next);
    play(600, 60, "sine");
  };
  
  return (
    <button 
      onClick={toggle} 
      className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 hover:scale-105"
      aria-label={enabled ? "Disable Matrix Mode" : "Enable Matrix Mode"}
    >
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${enabled ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-gray-400'}`} />
      <span className="hidden sm:inline text-xs font-medium">
        {enabled ? "Matrix" : "Matrix"}
      </span>
    </button>
  );
} 