# Tech stack and motion rules

## Stack (decided 18 Oct 2026)

> **19 Oct 2026:** the BrandMasters site itself is plain HTML + GSAP/ScrollTrigger + Lenis (vendored), not Next.js: lighter, works on every device, static SEO, and the private preview equals the real thing. 21st.dev installs were blocked anyway. Revisit Next.js only if we need React components.
- **Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui.** Static export where possible.
- **Motion** (formerly framer-motion) for component animation. **GSAP + ScrollTrigger** only for the scroll-driven showcase. **Lenis** for smooth scrolling.
- Deploy on **Vercel**: every push gets a preview link Evan can open on his iPhone.

Why: 21st.dev components are React + Tailwind + Motion/GSAP and install with one command (`npx shadcn@latest add "<21st.dev registry URL>"`). V2 was plain HTML/CSS/JS, so none of the references could be used and the scroll engine was hand-rolled, which is a big part of why it felt glitchy. Earlier advice was also Next.js over WordPress.

If 21st.dev or npm is blocked from a session's network, say so immediately; don't hand-roll a replacement silently.

## Smooth motion rules (Evan's main complaint about V2 was glitchiness)
1. Animate **only `transform` and `opacity`**. Never animate width, height, top, left, margin, `filter: blur()` or box-shadow during scroll.
2. One scroll system: Lenis drives scroll, GSAP ScrollTrigger reads it (`lenis.on('scroll', ScrollTrigger.update)` and GSAP's ticker drives Lenis). No second scroll listener doing its own maths.
3. Scrub with smoothing (`scrub: 0.5` to `1`), never `scrub: true` on heavy scenes.
4. Pin with ScrollTrigger, not `position: sticky` mixed with JS transforms on the same element.
5. iOS Safari: use `svh`/`dvh`, set `ScrollTrigger.config({ ignoreMobileResize: true })`, never `background-attachment: fixed`, don't re-measure the page when the address bar shows or hides.
6. Never switch quality modes mid-scroll (V2 added a "lite" class while scrolling, which causes a visible pop). Decide once on load, or don't do it.
7. Images in the showcase are pre-sized WebP/AVIF, preloaded before their step arrives, with fixed dimensions (no layout shift). No decoding a big image mid-animation.
8. Keep the number of moving layers small. Two or three well-tuned movements beat ten.
9. Easing: long ease-out for things arriving (`power2.out`/`power3.out`, or Motion springs with no bounce). Nothing linear, nothing bouncy unless it means something.
10. `prefers-reduced-motion`: replace scroll scenes with simple fades and static steps.
11. Pause anything off-screen. No permanent `will-change`; add it only while animating.

## How to check before Evan sees anything
- Playwright screenshots at **375 px and 1440 px**, at many scroll positions, including several frames *inside* each transition.
- Record a scroll-through video or frame-time trace of the showcase and look for dropped frames. Say what you measured.
- Throttle CPU 4x in Chrome DevTools performance (or Playwright CDP) and scroll the showcase: it must still be smooth.
- Lighthouse mobile: LCP under 2.5 s, CLS about 0, total initial load under about 2 MB. Report the numbers.
- Zero console errors. No horizontal scroll at 360, 375, 390, 768, 1440.
- Say plainly that it hasn't been tested on a real iPhone until Evan has opened the preview link.

## Must-haves on every site
- SEO: semantic HTML, one H1, title and meta description, canonical, Open Graph with a designed share image, JSON-LD (Organization/LocalBusiness, Service, FAQPage) with no personal name or email, `sitemap.xml`, `robots.txt`, alt text.
- Accessibility: contrast (scrim behind text on images), keyboard use, visible focus, skip link, landmarks.
- Self-hosted fonts, a deliberate pairing.
- Contact details in one config file.
- Each section is its own component so it can be reused on client sites.
