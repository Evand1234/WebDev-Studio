# CHECKS (build pass, 19 Oct 2026)

Tested with Playwright + Chromium against a local static server (gzip on, like a real host). Google Fonts were served from a local copy of the real Host Grotesk / Geist Mono files so type metrics are real. Scripts and screenshots: `/tmp/claude-0/-home-claude/a050df64-c923-5367-88f9-d539c0739886/scratchpad/` (`site-shots/`).

## Numbers
- Console errors / page errors / failed requests: **0** at 390x844 (mobile UA, touch), 768x1024, 1440x900, 320x568 and with `reducedMotion: reduce` (390 and 1440).
- Horizontal overflow (`scrollWidth - innerWidth`, sampled at 25 scroll positions each): **0** at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920.
- Initial transfer (gzip, fonts included): HTML 29.7 KB, gsap 28.1, ScrollTrigger 17.7, lenis 3.8, statue.webp 39.1, Google Fonts CSS 4.8, 2 latin woff2 30.2 = **~153 KB** (budget 350 KB). Raw (uncompressed) it is ~330 KB. The harness total of 270 KB double counts the statue, which is requested several times from cache.
- statue.webp: 1000x1250, 39 KB. og.png: 1200x630, 117 KB.
- Caption check: scrubbed the master timeline in 2,000 steps at 390, 768 and 1440: **never more than one caption visible** (max 1, opacity sum never above 1).
- Reduced motion: no Lenis, 0 ScrollTriggers, no pins; hero shows lit with glasses, story is a numbered list of 5 moments each with its own phone state, then the after phone.
- Story pin length: 1100% of viewport on desktop/tablet, 1000% below 820px (timeline of 100 units, labels hero, glasses, lens, before, m1..m5, switch, after).

## Looked at (screenshots)
Roughly 45 positions through the pinned story at 1440 and 390, 6 at 768, 5 at 320; every section at 1440 and 390; compare slider at 0/50/100; reduced motion at both sizes; typed end card; og image.

## Fixed along the way
Hero H1 line 2 hidden by the neck on phones (word-spacing now computed from the statue size so the neck sits in the gap); before/after mock text leaking through the slider (isolation); gradient words invisible after word-splitting; sets in the timeline firing at creation; sub line colliding with H1 on 320x568 (visually hidden below 700px height).

## Could not do / unsure
- **Lighthouse**: not installed, not run.
- **Real devices / real Safari / Firefox**: not tested, only Chromium. `mask-image` (rim light) and `container-type` (compare mocks, cqw units) are modern features; fine in current Safari/Chrome/Firefox but unverified here. The rim light needs the page to be served over http(s); opened from file:// it will not show.
- **Frame rate**: not measurable in this sandbox. Only transform/opacity are animated while scrubbing; the lens push scales the statue group ~20x then covers it with a flat ember layer, which I could not profile on a real phone.
- **Statue stand-in** is drawn in SVG (marble veins via SVG noise, carved curls, soft features), exported with `gen.py` from the scratchpad (`statue/`). It reads as marble but is still an illustration; replace `assets/statue.webp` with the real image and re-align the glasses with `--gx --gy --gw` and `--lx --ly` (zoom origin) in `:root`.
- Low-power fallback path (Android with <=4 cores / saveData) coded but not exercised.
- Floating WhatsApp button, cursor ring/labels, magnetic buttons and hero 3D tilt exist and ran without errors, but pointer feel was only checked in screenshots.
- Contact number appears in the JS `CONTACT` object, in the JSON-LD, and (separately, static) on privacy.html.
- DRAFT markers for Evan: package contents/timelines, FAQ 1 and 5, TappedFlow card, privacy page.
