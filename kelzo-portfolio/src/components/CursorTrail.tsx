"use client";

import { useEffect, useRef } from "react";

export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d"); if (!ctx) return;
    const onResize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 2); cvs.width = Math.floor(window.innerWidth * dpr); cvs.height = Math.floor(window.innerHeight * dpr); };
    onResize(); window.addEventListener("resize", onResize);
    const points: Array<{x:number;y:number;alpha:number}> = [];
    const onMove = (e: MouseEvent) => { const r = cvs.getBoundingClientRect(); points.push({ x: (e.clientX - r.left) * (cvs.width / r.width), y: (e.clientY - r.top) * (cvs.height / r.height), alpha: 1 }); };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0,0,cvs.width,cvs.height);
      for (const p of points) { p.alpha *= 0.94; }
      while (points.length && points[0].alpha < 0.03) points.shift();
      for (let i=0;i<points.length;i++) {
        const p = points[i]; const size = 8 + i*0.1;
        ctx.beginPath(); ctx.fillStyle = `rgba(56,189,248,${Math.max(0,p.alpha)})`; ctx.shadowBlur = 12; ctx.shadowColor = "rgba(56,189,248,0.6)";
        ctx.arc(p.x, p.y, size, 0, Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" />;
} 