import { afterFirstPaint } from "./afterFirstPaint";

/** GSAP and ScrollTrigger load on demand, after the first paint, as one shared chunk. */
export function loadGsap() {
  return afterFirstPaint()
    .then(() => Promise.all([import("gsap"), import("gsap/ScrollTrigger")]))
    .then(([a, b]) => {
      a.gsap.registerPlugin(b.ScrollTrigger);
      return { gsap: a.gsap, ScrollTrigger: b.ScrollTrigger };
    });
}
