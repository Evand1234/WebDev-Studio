# BrandMasters Site 1: plan and architecture

Static site, no framework, no build dependency beyond Node for tools. Everything scroll-driven is CSS keyframes scrubbed by one number.

## How scroll motion works
- `js/engine.js` writes `--p` (0..1) on every `[data-scene]` section while it is on screen. One scroll listener, one `requestAnimationFrame` write.
- Elements marked `.sc` run a paused CSS keyframe animation whose delay is `calc(var(--p) * -1s)`. The keyframe percentages are scroll progress. Backward scrolling and reduced-motion handling come for free; only transform and opacity are animated.
- `.win` elements fade in and out between `--a` and `--b` (progress values) with no keyframes.
- Phones show pre-rendered screens: `tools/screens/*.html` are real site designs, `node tools/shoot.mjs` renders them to `assets/screens/*.webp` (and a per-section crop for assembling).
- `js/showcase.js` fits phones to the room available, builds the crumple shards, and drives the timer.
- Adaptive quality: if scrolling frames run long, `html.lite` switches off blooms and blurs.

## Files
- `css/parts/*.css` source, `node tools/build-css.mjs` makes `css/site.css`. `01-tokens.css` is the one place for colour, type and spacing.
- `index.html` sections in order: hero, #problem (frustration), #example (start to finish), #story (4 chapters), #build, #how, #packages, #founding, #faq, #studio, #contact, footer.
- `tools/`: `make-marble.py`, `shoot.mjs`, `icons.mjs` (share card + app icon), `snap.mjs` / `snapel.mjs` (visual checks).

## Reusing for a client
1. Edit `01-tokens.css`. 2. Replace copy and photos. 3. Re-shoot screens. 4. Keep scene sections you need (any `data-scene` block is self-contained).
