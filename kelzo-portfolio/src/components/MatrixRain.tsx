"use client";

import { useEffect, useRef } from "react";

export function MatrixRain({ enabled }: { enabled: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!enabled) return;
    
    const cvs = ref.current;
    if (!cvs) return;
    
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0, height = 0, columns = 0;
    
    const onResize = () => {
      width = Math.floor(window.innerWidth * dpr);
      height = Math.floor(window.innerHeight * dpr);
      columns = Math.floor(width / (14 * dpr));
      cvs.width = width;
      cvs.height = height;
      cvs.style.width = `${window.innerWidth}px`;
      cvs.style.height = `${window.innerHeight}px`;
    };
    
    onResize();
    window.addEventListener("resize", onResize);
    
    const drops = new Array(columns).fill(0);
    const speeds = new Array(columns).fill(0).map(() => 0.5 + Math.random() * 1.5);
    const opacities = new Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);
    
    let raf = 0;
    let frameCount = 0;
    
    const loop = () => {
      frameCount++;
      
      // Create fade effect for trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      
      // Matrix characters
      const chars = "｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789";
      
      for (let i = 0; i < drops.length; i++) {
        const x = i * 14 * dpr;
        const y = drops[i] * 16 * dpr;
        
        // Varying opacity for depth effect
        const opacity = opacities[i];
        ctx.fillStyle = `rgba(0, 255, 127, ${opacity})`;
        ctx.font = `${12 * dpr}px 'Courier New', monospace`;
        
        // Random character selection
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, x, y);
        
        // Speed variation
        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        } else {
          drops[i] += speeds[i];
        }
      }
      
      // Add occasional bright characters for sparkle effect
      if (frameCount % 30 === 0) {
        for (let i = 0; i < 3; i++) {
          const x = Math.floor(Math.random() * columns) * 14 * dpr;
          const y = Math.floor(Math.random() * height);
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.font = `${12 * dpr}px 'Courier New', monospace`;
          ctx.fillText("█", x, y);
        }
      }
      
      raf = requestAnimationFrame(loop);
    };
    
    raf = requestAnimationFrame(loop);
    
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);
  
  return (
    <canvas 
      ref={ref} 
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500" 
      style={{ opacity: enabled ? 1 : 0 }} 
    />
  );
} 