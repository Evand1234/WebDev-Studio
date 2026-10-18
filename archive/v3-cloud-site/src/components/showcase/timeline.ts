import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* The pinned showcase timeline. Loaded on demand (after first paint) so GSAP is not in the first-load bundle. */

const SW = 390; // logical screen width
const SH = 824; // logical screen height (measured: 390 * screen aspect)
const OLD_H = 1180; // old site height
const PAGE_H = SH - 82; // page area above the browser bar
const P = (x: number, y: number) => ({ xPercent: (x / SW) * 100, yPercent: (y / SH) * 100 });
const scrollPct = (px: number) => -(px / OLD_H) * 100;
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

function buildTimeline(root: HTMLElement, stage: HTMLElement, opts: { end: string; scrub: number }) {
  const q = gsap.utils.selector(root);
  const one = (s: string) => q(s)[0] as HTMLElement;

  const old = one(".sc-old");
  const thumb = one(".sc-thumb");
  const ring = one(".sc-thumb__ring");
  const chipTxt = one(".sc-chip__t");

  // ---- initial states (everything the timeline touches is set here, so it can run in either direction)
  gsap.set(old, { transformOrigin: "50% 0%", yPercent: 0, scale: 1 });
  gsap.set(q(".sc-popwrap"), { autoAlpha: 0 });
  gsap.set(q(".sc-pop"), { scale: 0.92 });
  gsap.set(q(".sc-cookie"), { autoAlpha: 1, yPercent: 100 });
  gsap.set(q(".sc-scrim"), { autoAlpha: 0 });
  gsap.set(q(".sc-ring"), { autoAlpha: 0, scale: 0.9 });
  gsap.set(q(".sc-tag"), { autoAlpha: 0, scale: 0.85, y: 8 });
  gsap.set(one(".sc-new"), { autoAlpha: 1, yPercent: 100 });
  gsap.set(one(".sc-new__inner"), { yPercent: -100 });
  gsap.set(one(".sc-sheetwrap"), { autoAlpha: 0 });
  gsap.set(one(".sc-sheetscrim"), { opacity: 0 });
  gsap.set(one(".sc-sheet"), { yPercent: 100 });
  gsap.set(q(".sc-chip"), { autoAlpha: 0, y: -6 });
  gsap.set(thumb, { autoAlpha: 0, scale: 1, ...P(340, 650) });
  gsap.set(ring, { opacity: 0, scale: 0.6 });
  gsap.set(q(".sc__seg i"), { scaleX: 0 });
  gsap.set(q(".sc-beat"), { autoAlpha: 0, y: 12 });
  gsap.set(q(".sc-beat")[0], { autoAlpha: 1, y: 0 });
  chipTxt.textContent = fmt(3);

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    scrollTrigger: {
      // The pin is CSS (position: sticky inside a track whose height is reserved from the first paint),
      // so GSAP only scrubs. Nothing can shift when it arrives.
      trigger: stage.parentElement ?? stage,
      start: "top top",
      end: "bottom bottom",
      scrub: opts.scrub,
      invalidateOnRefresh: true,
    },
  });

  // ---- beat text (one beat = 2 time units; the new text arrives just after the picture starts to change)
  const texts = q(".sc-beat");
  texts.forEach((el, i) => {
    if (i > 0) tl.fromTo(el, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, 2 * i - 0.05);
    if (i < texts.length - 1) tl.to(el, { autoAlpha: 0, y: -12, duration: 0.25, ease: "power2.in" }, 2 * i + 1.8);
  });
  q(".sc__seg i").forEach((el, i) => tl.to(el, { scaleX: 1, duration: 2, ease: "none" }, 2 * i));

  // ---- beat 1: the old site, then the pop-up
  tl.to(q(".sc-popwrap"), { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 1.25);
  tl.to(q(".sc-pop"), { scale: 1, duration: 0.5, ease: "power3.out" }, 1.25);

  // ---- beat 2: the thumb closes the pop-up, scrolls, a cookie bar arrives, the clock runs
  tl.to(q(".sc-chip--old"), { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 2.0);
  const clock = { v: 3 };
  tl.to(clock, { v: 107, duration: 1.9, ease: "none", onUpdate: () => { chipTxt.textContent = fmt(Math.round(clock.v)); } }, 2.15);
  tl.to(thumb, { autoAlpha: 1, duration: 0.2 }, 2.05);
  tl.to(thumb, { ...P(352, 228), duration: 0.5, ease: "power3.inOut" }, 2.05);
  tl.to(thumb, { scale: 0.8, duration: 0.1, ease: "power2.out" }, 2.6);
  tl.fromTo(ring, { opacity: 0.85, scale: 0.6 }, { opacity: 0, scale: 1.7, duration: 0.3, ease: "power2.out", immediateRender: false }, 2.6);
  tl.to(thumb, { scale: 1, duration: 0.12 }, 2.72);
  tl.to(q(".sc-popwrap"), { autoAlpha: 0, duration: 0.25, ease: "power2.out" }, 2.75);
  tl.to(q(".sc-pop"), { scale: 0.96, duration: 0.25 }, 2.75);
  // first swipe up
  tl.to(thumb, { ...P(250, 590), duration: 0.28, ease: "power2.inOut" }, 2.95);
  tl.to(thumb, { ...P(250, 340), duration: 0.5, ease: "power2.out" }, 3.23);
  tl.to(old, { yPercent: scrollPct(250), duration: 0.5, ease: "power2.out" }, 3.23);
  // second swipe, to the very bottom
  tl.to(thumb, { ...P(250, 600), autoAlpha: 0.0, duration: 0.2 }, 3.75);
  tl.to(thumb, { autoAlpha: 1, duration: 0.08 }, 3.93);
  tl.to(thumb, { ...P(250, 420), duration: 0.38, ease: "power2.out" }, 3.95);
  tl.to(old, { yPercent: scrollPct(OLD_H - PAGE_H), duration: 0.38, ease: "power2.out" }, 3.95);
  // cookie bar slides up while the visitor is still hunting
  tl.to(q(".sc-cookie"), { yPercent: 0, duration: 0.4, ease: "power3.out" }, 4.05);

  // ---- beat 3: overview of the old site, dimmed, with annotations
  tl.to(thumb, { autoAlpha: 0, duration: 0.2 }, 4.42);
  tl.to(q(".sc-cookie"), { yPercent: 100, duration: 0.4, ease: "power2.in" }, 4.5);
  tl.to(old, { scale: 0.58, yPercent: (50 / OLD_H) * 100, duration: 0.8 }, 4.55);
  tl.to(q(".sc-scrim"), { autoAlpha: 1, duration: 0.5, ease: "power1.out" }, 5.0);
  const marks: Array<[string, string]> = [[".sc-ring--rating", ".sc-tag--rating"], [".sc-ring--photo", ".sc-tag--photo"], [".sc-ring--number", ".sc-tag--number"]];
  marks.forEach(([r, t], n) => {
    const at = 5.1 + n * 0.3;
    tl.to(q(r), { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power3.out" }, at);
    tl.to(q(t), { autoAlpha: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }, at + 0.12);
  });

  // ---- beat 4: the new site sweeps up over the old one
  tl.to([...q(".sc-tag"), ...q(".sc-ring"), ...q(".sc-statusbg")], { autoAlpha: 0, duration: 0.3, ease: "power1.in" }, 6.5);
  tl.to(q(".sc-chip--old"), { autoAlpha: 0, y: 6, duration: 0.3 }, 7.4);
  tl.to(one(".sc-new"), { yPercent: 0, duration: 1.05, ease: "power2.inOut" }, 6.7);
  tl.to(one(".sc-new__inner"), { yPercent: 0, duration: 1.05, ease: "power2.inOut" }, 6.7);
  tl.to(q(".sc-chip--new"), { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" }, 7.55);

  // ---- beat 5: one tap, booked
  gsap.set(q(".sc-new__edge"), { autoAlpha: 1 });
  tl.to(q(".sc-new__edge"), { autoAlpha: 0, duration: 0.2 }, 7.7);
  tl.set(thumb, { ...P(300, 560) }, 8.0);
  tl.to(thumb, { autoAlpha: 1, duration: 0.25 }, 8.0);
  tl.to(thumb, { ...P(196, 679), duration: 0.6, ease: "power3.inOut" }, 8.05);
  tl.to(thumb, { scale: 0.8, duration: 0.1, ease: "power2.out" }, 8.7);
  tl.fromTo(ring, { opacity: 0.85, scale: 0.6 }, { opacity: 0, scale: 1.7, duration: 0.3, ease: "power2.out", immediateRender: false }, 8.7);
  tl.to(thumb, { scale: 1, duration: 0.12 }, 8.82);
  tl.to(thumb, { autoAlpha: 0, duration: 0.3 }, 9.1);
  tl.to(one(".sc-sheetwrap"), { autoAlpha: 1, duration: 0.01 }, 8.85);
  tl.to(one(".sc-sheetscrim"), { opacity: 1, duration: 0.45, ease: "power1.out" }, 8.85);
  tl.to(one(".sc-sheet"), { yPercent: 0, duration: 0.55, ease: "power3.out" }, 8.85);
  tl.to({}, { duration: 0.3 }, 9.7); // hold to a full 10 units

  return tl;
}

export function setupShowcase(section: HTMLElement, stage: HTMLElement): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", () => { buildTimeline(section, stage, { end: "+=560%", scrub: 0.5 }); });
  mm.add("(max-width: 899px)", () => { buildTimeline(section, stage, { end: "+=520%", scrub: 0.5 }); });
  ScrollTrigger.refresh(); // build the pin spacer now, so callers can rely on final page height
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  return () => mm.revert();
}
