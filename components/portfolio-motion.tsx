"use client";

import { useEffect, useRef } from "react";

export default function PortfolioMotion() {
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (reduced.matches) continue;
        const animation = entry.target.animate(
          [{ opacity: 0.2, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll(".section-title, .section-copy, #skills article, #experience ol > li, #about article, #work article").forEach(element => observer.observe(element));
    const hero = document.querySelector("#home h1");
    if (hero && !reduced.matches) {
      const animation = hero.animate([{ opacity: 0, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 850, easing: "cubic-bezier(.2,.7,.2,1)" });
      animations.add(animation);
    }
    let scrollFrame = 0;
    const update = () => {
      scrollFrame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
    };
    const scroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(update); };
    const stop = () => { if (reduced.matches) animations.forEach(animation => animation.cancel()); };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    reduced.addEventListener("change", stop);
    update();
    return () => {
      observer.disconnect(); animations.forEach(animation => animation.cancel());
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", scroll); window.removeEventListener("resize", scroll);
      reduced.removeEventListener("change", stop);
    };
  }, []);
  return <div ref={progressRef} className="reading-progress" aria-hidden="true" />;
}
