# CHECKS (build pass round 2, v3 changes, 19 Oct 2026)

Tested with Playwright + Chromium against a local static server. Google Fonts served from a local copy of the real Host Grotesk / Geist Mono files. Scripts and screenshots: `/tmp/claude-0/-home-claude/a050df64-c923-5367-88f9-d539c0739886/scratchpad/site-shots-2/`.

## Numbers
- Console errors / page errors / failed requests: **0** at 390x844 (mobile UA, touch), 768x1024, 1440x900, and with `reducedMotion: reduce` (390 and 1440).
- Horizontal overflow (`scrollWidth - innerWidth`, 25 scroll positions each): **0** at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920.
- Captions: master timeline scrubbed in 2,000 steps at 390, 768 and 1440: **never more than one caption visible** (opacity sum max 1.0).
- **Story pin length** (the pinned hero + story): phone 390x844 = **14,348 px (17.0 viewport heights)**; desktop 1440x900 = **10,800 px (12.0 vh)**; 768x1024 tablet is below 820 wide so it takes the phone value (17,408 px). Round 1 was 10 vh on phones, 11 vh on desktop. Each caption holds about 3x longer than it moves (move 1.2 + 0.9 units, hold about 6 units of a 8.5-unit moment).
- How-it-works on phones: JS sets each card's bottom margin so the next card cannot stack until at least `innerHeight` of scroll has passed.
- Reduced motion: no Lenis, 0 ScrollTriggers, no pins; hero lit, story is a numbered list of 5 moments each with its own phone state, then the after phone.

## Assets
- `assets/statue-4x5.webp` 1000x1250 (~83 KB) and `assets/statue-16x9.webp` 1600x900 (~46 KB), both with alpha. `<picture>` so each device downloads one. Old `statue.webp` and the SVG glasses layer are deleted.
- Stand-in statue is a procedural 3D render (numpy z-buffer of ellipsoids: curls, beard, visor shell, key light, soft shadows, AO, marble veins), generated in the scratchpad (`statue3/render.py`), not in the repo. Visor centre/size vars are `--vx --vy --vw --vh` on `.rig` (per crop) and `--visor-clip`, `--vbx/--vby/--vbw/--vbh` on `.end-statue`. When the real photo arrives: replace the two webp files and update those vars.
- og.png and favicon.svg re-made (og uses the 16:9 crop; favicon is a black square with the lime visor).

## What changed (v3 A-F)
A. One still photo with the visor baked in; glasses SVG, drop animation, dull/lit crossfade and lens glint removed.
B. Hero: studio light vignette (opacity 1 to .15, light sweeps in from upper left), then the ember glow, H1 mask reveal, labels, CTA. Desktop cursor: 10px parallax on statue + glow, 4px the other way on the H1. Scroll: text drifts up and fades, the camera pushes into the visor (origin = `--vx --vy`), a lime layer takes over, darkens to the story black, "Here's what most visitors see." reveals on the dark. Only power2 eases, no overshoot.
C. Lime tokens and use as listed (progress bar, cursor dot, focus rings, dots, ticks, after label, compare knob and label, active step number + bar, Recommended tag, What-we-do hover border, WhatsApp buttons incl. FAB). One green on the page (`--wa` now points to lime).
D. Statue in hero, after-site phone, compare AFTER side, end card (name reflected in the visor, clipped to `--visor-clip`). Visor mark in nav, eyebrows (compare, how it works) and favicon. The BEFORE sites no longer use the statue (generic grey-blue banner).
E. Slower phones (above), nudge + "Swipe" hint on What-we-do, reveals start at `top 75%` and run 1.05-1.1 s.
F. Tap ring replaced by a soft 28px white dot (35%) with a press scale; spotlight has no neon outline; the pop-up slides up inside the phone; moment 5 now dims the screen to black instead of flicking the page off-screen; no flying elements except the phone rising once (and the arch, the switch transition).

## Could not do / unsure
- Lighthouse not installed. No real device, Safari or Firefox test. Frame rate on a phone not measurable here; the push scales a 1000px image about 9x then hides it behind the flat lime layer.
- The light-up vignette uses a CSS `mask-image` of the statue file: needs http(s), and the rig stays hidden until the mask image has decoded.
- The end-card reflection is skewed and softly blurred but NOT mirrored left-right, so the owner can read their own name.
- Compare slider on phones uses the 4:5 crop for the AFTER side (the 16:9 one is used from 720px up).
- The hero bust is a stand-in render: believable marble and lighting, but the face is mostly hidden by visor and beard; replace with Evan's real photo.
- DRAFT markers for Evan: package contents/timelines, FAQ 1 and 5, TappedFlow card, privacy page.
