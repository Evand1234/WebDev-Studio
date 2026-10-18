# BrandMasters site: stage 1 plan (design system, skeleton, devices)

Planned 18 Oct 2026 on Opus 5.5; built on Sonnet 5.5 (see `../firstcheck.md`).

## Goal of this stage
Give Evan **one screen he can open on his iPhone and judge the look by**: the hero area of the real site, with a realistic iPhone and laptop showing a real-looking client site. Everything else in this stage is foundation the later stages reuse.

## Look
- **Light-first, clean, premium.** Airy off-white page with a faint cool tint, deep slate ink for text, mint-slate blue as the interface colour, rose quartz as the one warm accent used sparingly (a highlight, the recommended package, a small detail). One dark slate band will hold the showcase in stage 3, so the page has contrast without being a dark "techy" site.
- Tokens (starting values, tune by eye):
  - `--paper #F6F8F8`, `--surface #FFFFFF`, `--ink #0F1B22`, `--ink-soft #4A5A63`, `--line #DCE3E5`
  - `--slate #3F6F82` (buttons, links), `--slate-soft #DCE9EE`, `--mint #A7E2D1` (tiny highlights)
  - `--rose #E7A9B5`, `--rose-deep #B8697A` (text-safe rose)
  - `--night #0B151B` (dark band)
- **Type:** display **Bricolage Grotesque** (warm, friendly, modern; welcoming to a plumber or a salon), body **Onest**. Self-hosted through `next/font/google`. Fluid scale with `clamp()`; headings `text-wrap: balance`.
- Radius: soft but not bubbly (10–20 px). Shadows: one soft, large shadow for devices only.

## Hero (the screen Evan judges)
- Small floating nav: logo wordmark "BrandMasters", 3 anchors, a WhatsApp button.
- Headline (3–6 words), one sentence, two buttons: "WhatsApp us" (pre-filled message) and "See how it works" (scrolls down).
  - Start from "They see your site first." with a sub-line close to "We build websites for South African businesses. Already have one? We learn from it and build it better."
- Visual: a laptop with the concept client site on desktop and an iPhone overlapping it in front with the same site on mobile. Gentle entrance on load (fade + slight rise, Motion, no bounce). Optional: the phone's site scrolls itself very slowly so it reads as a live site, not a picture.
- Below the hero, a quiet placeholder band "Showcase arrives in stage 3" is **not** wanted; end the page with a simple footer instead.

## Devices (reusable components, the most important part of this stage)
- `Iphone`: iPhone 15 Pro proportions (≈1:2.03), thin titanium rim, dynamic island, status bar (time, signal, battery), home indicator. The screen is a real DOM container: children render a live mobile site at a 390 px logical width scaled to fit, so text is crisp and nothing is a shrunken screenshot.
- `Laptop` (MacBook-style lid + base) and `BrowserFrame` (Safari-style bar) with the same "real content inside" rule.
- Check 21st.dev references in `../web-dev-context/05-21st-dev-references.md` for principle; build our own if they can't be installed (21st.dev may be blocked from the network).

## Concept client site (shown inside the devices)
"Marlow Street Barbers", Johannesburg, labelled as a concept example. Mobile and desktop versions: header with logo and a call button, hero photo, 4.9 Google rating line, services with prices, booking button. Photos: the CC0 barbershop photos in `../archive/v2-static-site/assets/img/photo/` (placeholders until better images are generated).

## Foundation
- Next.js (App Router, TypeScript, Tailwind v4), static export (`output: 'export'`).
- Lenis smooth scroll + GSAP ScrollTrigger wired together once, in one provider, following `../web-dev-context/04-tech-stack-and-motion-rules.md`.
- `src/config/contact.ts` holds WhatsApp, phone and email.
- `npm run preview:single` builds a single self-contained HTML file (CSS, JS, fonts and images inlined) so it can be published as a preview link until Vercel is connected.

## Done when
- Screenshots at 375 px and 1440 px look premium and clean, nothing overlaps or is cut off, no horizontal scroll.
- The phone meets the phone standard.
- Zero console errors; reduced-motion respected.

---

# Stages 2 and 3: hero polish + the showcase

Planned 18 Oct 2026 on Opus 5.5. Evan said "continue" after the stage 1 preview, so the stage 1 look stands. The hero already exists, so stage 2 is a short polish and the work goes into the showcase (stage 3), the heart of the site.

## Stage 2: hero polish (small)
- Desktop only (fine pointer): the device group tilts very slightly toward the cursor (max ~3°, lerped, transform only). Off on touch and reduced motion.
- The sub-line names who we build for with one rotating word, e.g. "We build websites for barbers / plumbers / guesthouses / restaurants." (Motion, gentle vertical roll, no layout shift: reserve the width of the longest word.)
- Fix the anchor offset: "See how it works" should land with the section heading just under the nav.
- Nav anchors: Showcase, How it works, Contact.

## Stage 3: the showcase ("plays like a video, never feels like one")
One business's story, told on a realistic phone as you scroll. A dark band (`--night`) so it reads as its own moment, joining the light page with a soft gradient (no hard edge). Pinned with GSAP ScrollTrigger, scrubbed with smoothing (`scrub: ~0.8`), fully reversible, transform/opacity only. Five beats, each readable in a second or two:

1. **"Found on Google. Then this loads."** The phone shows Marlow Street's *old* site: realistic and ordinary, the kind small businesses actually have (centred text in a dated font, a cluttered banner, small grey links, a stock-photo slider, a "Subscribe!" pop-up). Build it as real DOM like the new site, not a picture.
2. **"Where's the number?"** A soft touch-dot (thumb) wanders and scrolls the old site; a cookie bar slides up; a small chip in the corner counts up (0:03 → 1:47, illustrative). The phone number is buried in the footer in tiny text.
3. **"We keep what works."** The old site dims; three neat annotation tags draw on: "Keep: 4.9 on Google", "Keep: your photos", "Fix: number hidden". This is the "we learn from your site" message.
4. **"And rebuild the rest."** The new Marlow Street site sweeps up over the old one (transform-based wipe: an overflow-hidden wrapper translating up with its content counter-translated, no clip-path animation).
5. **"One tap. Booked."** The touch-dot taps "Book a chair"; a calm confirmation sheet rises ("Saturday 10:30 · Classic cut · Confirmed"); the chip now reads "0:02". End line: "That's what we build."

Layout: desktop, phone pinned on the right half, beat text on the left changing per beat (crossfade + 12 px rise, image first, text ~150 ms after). Phone ~ 70vh tall. Mobile (375 px): phone pinned centred at ~62svh, beat text in a short caption above it on a scrim; never overlapping the phone screen. Progress: a thin 5-segment indicator.

Rules: one GSAP timeline per breakpoint (`gsap.matchMedia`), pin spacing true, `anticipatePin: 1`, images preloaded, nothing animates width/height/top/left/filter. Reduced motion: the five beats as static stacked cards, each with its phone state.

## Done when
- Screenshots at 375 and 1440 at every beat and 3 frames inside each transition; nothing overlaps or is cut off.
- 4x CPU-throttled scroll through the showcase: report median/p95 frame time; no frame over 50 ms.
- Zero console errors, no horizontal scroll, single-file preview still renders offline.

---

# Status after stage 4 (18 Oct 2026)

Done: stage 1 skeleton and hero; stage 2 hero polish (rotating word, tilt, anchors); stage 3 pinned showcase; stage 4 integration (Work, How it works, Packages, FAQ, footer contact, brand mark, icons, OG image, manifest, JSON-LD, dark-glass nav, mobile menu sheet). Page order: Nav, Hero, Showcase, Work, HowItWorks, Packages, Faq, Footer.

QA at 360/375/390/768/1440: no horizontal scroll, zero console errors, reduced motion renders static cards, tsc and build clean, single-file preview works offline (about 1.5 MB). Lighthouse mobile (served with brotli, like real hosting): accessibility, best practices, SEO 100; CLS 0; performance 88-93 (FCP 1.4 s, LCP 2.2 s, TBT 280-410 ms). Before the speed pass it was 61-74.

## Left to do
- Performance: TBT is now the only weak number (first render about 500 ms and hydration about 200 ms on the 4x throttle). Next ideas: fewer client components (server-render the showcase markup), cheaper first layout of the hero devices.
- Real TappedFlow screenshot (the Work phone for it is a placeholder concept).
- Branded email address, domain and hosting (Vercel), replace the preview link.
- Test on a real iPhone and a mid-range Android.
- Real client work and testimonials once they exist (nothing is invented today).
- Keep the first Work phone mounts (idle, about 5 s after load) in mind when measuring frame timing.

## Speed pass notes (18 Oct 2026)
- CSS is inlined into the HTML (`experimental.inlineCss`); the single-file preview builds with `BM_SINGLE=1` (no inlining) because Next's flight data would otherwise carry CSS urls that cannot be rewritten.
- The showcase pin is pure CSS (`.sc__track` reserves the full scroll length, `.sc__stage` is `position: sticky`), so the page height never changes when GSAP arrives. GSAP, ScrollTrigger, Lenis and the timeline load in their own chunks on first intent (scroll, touch, key, press), straight away if the page was already scrolled or opened with a #hash, or 8 s after load. `node scripts/pin-stability.mjs` proves it (fast flick into the showcase at 4x CPU: document height, showcase top and CLS unchanged).
- Reveal and the rotating word are CSS transitions, so the `motion` library is no longer in the bundle.
- Work phones are built in a quiet moment (scroll paused, idle) once within three screens, or at once when visible.
