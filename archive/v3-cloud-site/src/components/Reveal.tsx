"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Fade and rise once when scrolled into view. CSS transition on transform and opacity; no animation library. */
export function Reveal({
  children, delay = 0, className = "", as = "div",
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("is-in"); return; }
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { el.classList.add("is-in"); io.disconnect(); }
    }, { rootMargin: "0px 0px -12% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={`reveal${className ? ` ${className}` : ""}`} style={{ "--rv-d": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
