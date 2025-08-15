"use client";

import { useEffect, useRef } from "react";

export function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext("2d"); if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0;
    const onResize = () => {
      width = Math.floor(window.innerWidth * dpr);
      height = Math.floor(window.innerHeight * dpr);
      cvs.width = width; cvs.height = height;
    };
    onResize();
    window.addEventListener("resize", onResize);

    const density = Math.round((width * height) / (9000 * dpr));
    const count = Math.min(160, Math.max(50, density));
    type P = { x: number; y: number; vx: number; vy: number };
    const pts: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25 * dpr,
      vy: (Math.random() - 0.5) * 0.25 * dpr,
    }));

    const mouse = { x: width / 2, y: height / 2, down: false };
    const onMove = (e: MouseEvent) => {
      const rect = cvs.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (width / rect.width);
      mouse.y = (e.clientY - rect.top) * (height / rect.height);
    };
    const onDown = () => { mouse.down = true; };
    const onUp = () => { mouse.down = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const p of pts) {
        // slight attraction/repulse to mouse
        const dx = p.x - mouse.x; const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        const r = 160 * dpr; // influence radius
        if (dist2 < r * r) {
          const f = mouse.down ? 0.015 : -0.01; // click -> attract, hover -> repulse
          p.vx += (dx / (Math.sqrt(dist2) + 0.001)) * f;
          p.vy += (dy / (Math.sqrt(dist2) + 0.001)) * f;
        }
        p.x += p.vx; p.y += p.vy;
        // friction and wrap
        p.vx *= 0.995; p.vy *= 0.995;
        if (p.x < 0) p.x += width; if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height; if (p.y > height) p.y -= height;
      }

      // Draw connections
      ctx.lineWidth = Math.max(0.6, 0.8 * dpr);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD2 = (220 * dpr) * (220 * dpr);
          if (d2 < maxD2) {
            const alpha = 1 - d2 / maxD2;
            ctx.strokeStyle = `rgba(125,211,252,${alpha * 0.35})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      // Draw points
      ctx.fillStyle = "rgba(125,211,252,0.9)";
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.4 * dpr, 0, Math.PI * 2); ctx.fill(); }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 -z-10" />;
} 