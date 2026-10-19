# CHECKS (draft 4: light and warm, shopfront hero)

Tested 2026-10-19 with headless Chromium (Playwright) against `python3 -m http.server`. No real iPhone, no Safari, no Lighthouse.

## Automated results
- Console errors: 0 at 320, 390, 768, 1440, 1920 (also 375x629, 1920x1080, reduced motion at 390 and 1440).
- Horizontal overflow: 0px at 320, 390, 768, 1440, 1920 (sampled at 25 scroll positions each) and in reduced motion at 390 and 1440.
- Story stepped in 400 steps (390x844, 320x640, 1440x900, 1920x1080): never more than one caption/callout/line visible (max = 1, 0 violations).
- Pin length: phone 14.78 vh, desktop 11.15 vh (unchanged).
- Hero at 390x844 shows headline, both buttons and the whole shop; also checked 375x629, 320x640, 768x1024, 1440x900, 1920x1080.

## What changed in draft 4
- Whole site light and warm (--bg #f3ecd9); dark only inside the after-site phone screen, the phone bezels, the compare slider's after side and the end-card phone mock screen.
- Hero is the client's shopfront image (see SPEC section 5). The cursor lens and the tile wall are gone.
- Gradient TEXT uses a deeper ember (#e9560a to #c8191a) so large text passes 3:1 on cream; the bright ember stays for fills and glows. Green text is #2b7210 (slightly darker than the #2f7a12 in the spec, so it passes 4.5:1 on #f3ecd9). Small ember text is #b13a08.
- Buttons: lime fill with dark text; ghost = ink outline. The Professional card button is lime (white text on ember failed contrast). The "What we do" first card is peach with dark text for the same reason.
- Removed: grain overlay, lime rim light on the phone, black end of the zoom (now fades to cream).

## Lens / statue values (in :root, with comment)
- 4:5 image: --lx 33.4%, --ly 44.5%, lens box 23.1% x 15.8%. 16:9: --lx-wide 42.6%, --ly-wide 44.5%.

## Screenshots
/tmp/claude-0/-home-claude/a050df64-c923-5367-88f9-d539c0739886/scratchpad/site-shots-4/ (m-* = 390x844, d-* = 1440x900, sheetm.jpg / sheetd.jpg = story contact sheets, sheet-sec-*.jpg = section sheets).

## Not verified / known weak spots
- Contrast was checked by calculation on the tokens, not with an automated scanner over every element. Text on the photo-free parts only.
- No real device: frame rate, Safari mask/blend behaviour (the hero picture uses mask-composite and a screen-blend glow) not measured.
- Hero image edge: the picture's cream is a hair lighter than --bg; hidden by the feathered mask, may show faintly on some screens.
- Statue is a rendered stand-in; replace with a real photo.
- WhatsApp float button is hidden during the pinned story.
- Compare slider on phones uses the 4:5 crop for the AFTER side.
