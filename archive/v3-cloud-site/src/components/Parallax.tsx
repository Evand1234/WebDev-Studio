"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { loadGsap } from "@/lib/gsapLoader";

/** Moves its children a little as the page scrolls past. Transform only, scrubbed with smoothing. */
export function Parallax({ y, children, className = "" }: { y: number; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    let dead = false;
    let undo: (() => void) | undefined;
    loadGsap().then(({ gsap }) => {
      if (dead) return;
      const tween = gsap.to(el, {
        y,
        ease: "none",
        force3D: true,
        scrollTrigger: { trigger: el.closest("section") ?? el.parentElement, start: "top top", end: "bottom top", scrub: 0.8 },
      });
      undo = () => { tween.scrollTrigger?.kill(); tween.kill(); };
    });
    return () => { dead = true; undo?.(); };
  }, [y]);

  return <div ref={ref} className={className}>{children}</div>;
}
