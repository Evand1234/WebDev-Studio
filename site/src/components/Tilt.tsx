"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { loadGsap } from "@/lib/gsapLoader";

/** Desktop only: tilts its children a few degrees toward the cursor. Transform only, eased by GSAP. */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const zone = el?.closest("section");
    if (!el || !zone) return;
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    let dead = false;
    let undo: (() => void) | undefined;
    loadGsap().then(({ gsap }) => {
    if (dead) return;
    const mm = gsap.matchMedia();
    mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      gsap.set(el, { transformPerspective: 1400, transformOrigin: "50% 50%" });
      const rx = gsap.quickTo(el, "rotationX", { duration: 1, ease: "power3.out" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 1, ease: "power3.out" });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const nx = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)));
        const ny = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)));
        ry(nx * 3);
        rx(-ny * 2);
      };
      const leave = () => { rx(0); ry(0); };
      zone.addEventListener("pointermove", move as EventListener);
      zone.addEventListener("pointerleave", leave);
      return () => {
        zone.removeEventListener("pointermove", move as EventListener);
        zone.removeEventListener("pointerleave", leave);
        gsap.set(el, { clearProps: "transform" });
      };
    });
    undo = () => mm.revert();
    });
    return () => { dead = true; undo?.(); };
  }, []);

  return <div ref={ref} className={className}>{children}</div>;
}
