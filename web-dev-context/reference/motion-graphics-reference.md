> **Reference.** Only relevant if we render a motion piece to MP4. The website itself uses live code (see `../04-tech-stack-and-motion-rules.md`).

# Motion graphics with code: reference

**Source note:** a guide Evan got from Gemini summarising a YouTube video; it describes using Claude to make motion graphics.
**Caveat:** model names, version numbers, and token-cost claims in the original are unverified; the technique below is standard.

## Core idea
- Claude doesn't generate raw video; it writes code (HTML, SVG, CSS, Canvas 2D, WebGL/three.js, GSAP/Anime.js, or Remotion/After Effects scripts).
- A headless browser (Puppeteer/Playwright/Chrome) renders it, and FFmpeg stitches the frames into MP4.
- Benefits over diffusion video: crisp text at 1080p/4K, exact brand colours and SVG paths, fully editable, deterministic timing at 30/60 fps.

## Requirements
- Node.js 18+
- Chrome/Chromium headless
- FFmpeg on PATH
- Claude Code or API access

## Scene contract for deterministic rendering
- A single self-contained `scene.html` at a fixed 1920x1080.
- Expose `window.renderFrame(frameIndex, totalFrames, fps)` that sets all state from time = frameIndex/fps.
- No unseeded `Math.random()`.
- No CSS transitions that run on their own (use explicit keyframe functions or GSAP seek).
- No remote assets (inline SVG/base64).
- No video/audio tags during capture.

## Workflow
1. Prepare assets as clean SVG layers (`<g>`, `<path>`, `<rect>`, `<text>`) so each piece can animate.
2. Prompt with brief, brand palette, typography and scene sequence, asking for one `scene.html`.
3. Capture frames at 60 fps with a headless script, then e.g. `ffmpeg -r 60 -i frames/frame_%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 output.mp4`.
4. Refine by timestamp feedback (e.g. "at 2.4s slow the logo easing and add a glow").

## Master prompt skeleton
- World-class motion designer; 15-second video.
- Deterministic `renderFrame` with fps 60 and 900 frames.
- Inline SVG/CSS/Canvas only; no CDNs.
- Custom cubic-bezier easing such as `cubic-bezier(0.16,1,0.3,1)`.
- Scene breakdown with timestamps: kinetic type opening, UI reveal in 3D, feature callouts with counters and charts, logo reveal with CTA.
- Visual style with palette and bold tight-tracked sans typography.

## Logo animation
- Convert shapes to `<path>`; match point counts to morph.
- Stroke draw effect with `stroke-dasharray` / `stroke-dashoffset` and `cubic-bezier(0.65,0,0.35,1)` over ~2.5s.

## Effort tips
- Medium effort for short logo reveals and kinetic text; high/xhigh for multi-scene storyboards, shaders, UI reconstructions.
- JPEG capture at 95% is much faster than PNG.
- Group related SVG elements in `<g>` for single transforms.

## 20 style prompts (name: key ingredients)
1. Kinetic typography: scale 0.8 to 1.2, staggered words
2. Product launch demo: `perspective(1000px)` tilts, glass cards
3. Dynamic UI workflow: cursor along SVG paths, click ripples
4. 3D WebGL geometry: three.js wireframes
5. Paper cut-out: hard offset shadows, 12 fps stutter
6. Neon grid and glitch
7. Swiss/Bauhaus: strict grid, primary colours, shape morphs
8. Liquid vector morphing: feGaussianBlur + feColorMatrix goo
9. Animated data viz: stroke-dashoffset lines, counters
10. Synthwave
11. Glassmorphism and depth: backdrop-filter blur
12. Whiteboard explainer: hand-drawn strokes
13. Particle constellation: distance-based lines
14. Isometric tech
15. Film grain cinematic: grain overlay, 2.39:1 bars
16. Motion showreel: wipes, fast pacing
17. Lyric/audio typography
18. Blueprint HUD
19. Neon sign logo reveal: flicker, glow, sparks
20. Isometric city mesh: procedural heights, bloom

## Troubleshooting
- Jitter: motion must be a pure function of time inside `renderFrame`, not `requestAnimationFrame`.
- Blurry text: use SVG text or CSS fonts, not images.
- Memory or timeouts: remove off-screen DOM and dispose unused WebGL textures between scenes.

## Note for BrandMasters
This is for exporting video files. On the website itself, live scroll-driven animation in code usually looks sharper and loads faster than an MP4, so use the render pipeline for social clips, previews and client deliverables.
