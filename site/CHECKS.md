# CHECKS (draft 3: "The lens" hero + studio after scene)

Tested 2026-10-19 with headless Chromium (Playwright) against `python3 -m http.server`. No real iPhone, no Safari, no Lighthouse.

## Automated results
- Console errors: 0 at 320, 390, 768, 1440, 1920.
- Horizontal overflow: 0px at 320, 390, 768, 1440, 1920.
- Story stepped in 400 steps (390x844, 320x640, 1440x900, 1920x1080): never more than one caption/callout visible (max = 1).
- Pin length: phone 14.78 vh, desktop 11.15 vh.
- Reduced motion: no pins, static lens, story shown as a list, after item built from the callout texts.
- Touch: manual CDP touch drag scrolls the page over the hero (touch-action: pan-y, no preventDefault); lens follows the finger.

## Lens / statue values (in :root, with comment)
- 4:5 image: --lx 38.6%, --ly 28.4%, lens box 14.6% x 7.4%.
- 16:9 image: --lx-wide 69.8%, --ly-wide 30.2%.
- Statue images: statue-4x5.webp 99.7 KB, statue-16x9.webp 55.6 KB.

## Screenshots
/tmp/claude-0/-home-claude/a050df64-c923-5367-88f9-d539c0739886/scratchpad/site-shots-3/ (m-* = 390x844, d-* = 1440x900, m320-*, mmini-* = 375x629, sheet-* = contact sheets).

## Not verified / known weak spots
- Frame rate: headless software rendering only. Desktop hero idle median frame was 83 ms there (masked layers on a CPU rasteriser); phone was a steady 16.7 ms. Real GPU not measured. Check on a real PC.
- Statue is a rendered stand-in (nose/cheeks slightly cartoonish; 16:9 has a hard torso edge on the left). Replace with a real photo.
- "Tile becomes phone" is a push into a tile then a dark overlay and the phone rising, not a literal morph.
- Grey layer blur is dropped under 720px for speed.
- WhatsApp button is hidden during the pinned story.
- Hero sub line hidden only when viewport height <= 540px.
- Compare slider on phones uses the 4:5 crop for the AFTER side.
