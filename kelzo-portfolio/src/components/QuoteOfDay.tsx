"use client";

import { useEffect, useState } from "react";
import { motivationalQuotes } from "@/lib/portfolioData";

function randomQuote() {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
}

export function QuoteOfDay() {
  const [idx, setIdx] = useState<number>(0);
  useEffect(() => { setIdx(Math.floor(Math.random() * motivationalQuotes.length)); }, []);
  const q = motivationalQuotes[idx];
  return (
    <div className="mt-8 text-sm text-foreground/80 italic quote-text">
      "{q.text}" — {q.author}
      <button className="btn-icon ml-2" onClick={() => setIdx(Math.floor(Math.random() * motivationalQuotes.length))}>Generate New Quote</button>
    </div>
  );
} 