"use client";

import { useEffect } from "react";
import { loadGsap } from "@/lib/gsapLoader";

/**
 * The one scroll system. Lenis owns scrolling, GSAP's ticker drives Lenis,
 * ScrollTrigger reads Lenis. Nothing else listens to scroll.
 * Skipped entirely when the visitor prefers reduced motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let dead = false;
    let undo: (() => void) | undefined;

    Promise.all([loadGsap(), import("lenis")]).then(([{ gsap, ScrollTrigger }, { default: Lenis }]) => {
      if (dead) return;
      ScrollTrigger.config({ ignoreMobileResize: true });
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        anchors: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      undo = () => { gsap.ticker.remove(tick); lenis.destroy(); };
    });
    return () => { dead = true; undo?.() };
  }, []);

  return null;
}
