"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Iphone } from "../../devices/Iphone";

/**
 * Renders the phone (and its live DOM site) only when it is worth it, and never in the middle of a scroll:
 * once it is within about three screens, it is built in a quiet moment (scrolling paused, browser idle), one phone
 * at a time. If the visitor does reach it first, it is built at once.
 */
export function LazyPhone({ children, order = 0, tone = "light" }: { children: ReactNode; order?: number; tone?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    let timer = 0;
    let quiet = 0;
    const cleanups: Array<() => void> = [];
    const mount = () => { setOn(true); cleanups.forEach((c) => c()); cleanups.length = 0; };

    // Near: wait for a quiet moment (no scroll for 250 ms), staggered by order, then build in an idle slot.
    const near = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      near.disconnect();
      const arm = () => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(mount, { timeout: 800 });
          else mount();
        }, 250 + order * 350);
      };
      arm();
      window.addEventListener("scroll", arm, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", arm));
    }, { rootMargin: "3000px 0px" });
    near.observe(el);

    // Visible (or about to be): build now.
    const visible = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) mount(); }, { rootMargin: "150px 0px" });
    visible.observe(el);

    cleanups.push(() => { near.disconnect(); visible.disconnect(); window.clearTimeout(timer); window.clearTimeout(quiet); });
    return () => { cleanups.forEach((c) => c()); };
  }, [order]);

  return (
    <div ref={ref} className="work__phone">
      {on ? <Iphone tone={tone}>{children}</Iphone> : <div className="work__ghost" aria-hidden="true" />}
    </div>
  );
}
