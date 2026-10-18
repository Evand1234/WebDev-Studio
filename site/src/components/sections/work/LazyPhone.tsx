"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Iphone } from "../../devices/Iphone";

/** Renders the phone (and its live DOM site) only once it is near the viewport, so off-screen phones cost nothing. */
export function LazyPhone({ children, order = 0 }: { children: ReactNode; order?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Mount each phone while the browser is idle after load (staggered), so none is built in the middle of a scroll.
    // The observer is only a safety net for visitors who scroll here first.
    const idle = (cb: () => void) => { if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(cb, { timeout: 1500 }); else window.setTimeout(cb, 0); };
    const t = window.setTimeout(() => idle(() => setOn(true)), 5000 + order * 700);
    if (typeof IntersectionObserver === "undefined") return () => window.clearTimeout(t);
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setOn(true); io.disconnect(); }
    }, { rootMargin: "100px" });
    io.observe(el);
    return () => { window.clearTimeout(t); io.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="work__phone">
      {on ? <Iphone>{children}</Iphone> : <div className="work__ghost" aria-hidden="true" />}
    </div>
  );
}
