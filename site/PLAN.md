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
