"use client";

import { useEffect, useRef } from "react";

export default function EngineeringScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0.7, y: 0.35 };
    let width = 0, height = 0, frame = 0, previous = 0, elapsed = 0;
    let visible = true;

    function draw(time: number) {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const glow = context.createRadialGradient(width * pointer.x, height * pointer.y, 0, width * pointer.x, height * pointer.y, width * 0.6);
      glow.addColorStop(0, "rgba(39,144,255,0.13)");
      glow.addColorStop(1, "rgba(39,144,255,0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
      const spacing = width < 600 ? 70 : 92;
      for (let row = 0; row < Math.ceil(height / spacing); row++) {
        for (let col = 0; col < Math.ceil(width / spacing); col++) {
          const x = col * spacing + 30, y = row * spacing + 26;
          const phase = time * 0.25 + row * 0.8 + col * 1.1;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(x + spacing * 0.35, y);
          context.lineTo(x + spacing * 0.65, y + spacing * 0.3);
          context.lineTo(x + spacing, y + spacing * 0.3);
          context.strokeStyle = "rgba(91,174,255,0.075)";
          context.lineWidth = 0.7;
          context.stroke();
          context.beginPath();
          context.arc(x, y, 1.6, 0, Math.PI * 2);
          context.fillStyle = `rgba(89,180,255,${0.12 + Math.max(0, Math.sin(phase)) * 0.2})`;
          context.fill();
          if ((row + col) % 3 === 0) {
            const progress = ((time * 0.09 + row * 0.23 + col * 0.17) % 1);
            const px = x + spacing * progress;
            const py = y + spacing * 0.3 * Math.min(1, Math.max(0, (progress - 0.35) / 0.3));
            context.beginPath();
            context.arc(px, py, 2, 0, Math.PI * 2);
            context.fillStyle = "rgba(105,201,255,0.5)";
            context.shadowBlur = 9;
            context.shadowColor = "#2790ff";
            context.fill();
            context.shadowBlur = 0;
          }
        }
      }
    }

    function resize() {
      if (!canvas || !context) return;
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width; height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(elapsed);
    }
    function tick(now: number) {
      if (now - previous > 1000 / 24) {
        elapsed += Math.min((now - previous) / 1000, 0.1);
        previous = now;
        draw(elapsed);
      }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      previous = performance.now();
      if (!reduced.matches && visible && !document.hidden) frame = requestAnimationFrame(tick);
      else draw(0);
    }
    function move(event: PointerEvent) {
      if (!canvas || event.pointerType !== "mouse" || reduced.matches) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / width;
      pointer.y = (event.clientY - bounds.top) / height;
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    intersection.observe(canvas);
    canvas.parentElement?.addEventListener("pointermove", move);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    resize(); sync();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
      canvas.parentElement?.removeEventListener("pointermove", move);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="engineering-scene" />;
}
