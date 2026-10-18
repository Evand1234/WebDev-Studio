"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Moves its children a little as the page scrolls past. Transform only, scrubbed with smoothing. */
export function Parallax({ y, children, className = "" }: { y: number; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    const tween = gsap.to(el, {
      y,
      ease: "none",
      force3D: true,
      scrollTrigger: { trigger: el.closest("section") ?? el.parentElement, start: "top top", end: "bottom top", scrub: 0.8 },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y]);

  return <div ref={ref} className={className}>{children}</div>;
}
