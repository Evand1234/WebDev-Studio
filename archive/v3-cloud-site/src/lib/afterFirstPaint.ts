/**
 * Resolves when the visitor first shows intent (scroll, touch, key, pointer press), or 8 s after the page
 * has loaded and is idle, whichever comes first (straight away if they already scrolled or opened a #hash). Heavy animation libraries wait for this so they never compete with
 * the first paint and hydration. The page layout never depends on this: the showcase reserves its full scroll length in CSS.
 */
let p: Promise<void> | null = null;
export function afterFirstPaint(): Promise<void> {
  return (p ??= new Promise<void>((resolve) => {
    const events = ["scroll", "wheel", "touchstart", "pointerdown", "keydown"] as const;
    let done = false;
    let timer = 0;
    const finish = () => {
      if (done) return;
      done = true;
      events.forEach((e) => window.removeEventListener(e, finish));
      window.clearTimeout(timer);
      resolve();
    };
    events.forEach((e) => window.addEventListener(e, finish, { once: true, passive: true }));
    const afterLoad = () => {
      const delay = location.hash || window.scrollY > 0 ? 0 : 8000;
      const idle = () => { if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(finish, { timeout: 2500 }); else finish(); };
      timer = window.setTimeout(idle, delay);
    };
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
  }));
}
