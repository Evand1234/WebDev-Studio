# Reference study — Evan's taste references (18 Oct 2026)

Captured on Evan's PC in the Claude desktop app's built-in browser, a real Chromium pane. Purpose: see the **style behind** each reference, not copy it (see `web-dev-context/08-evan-taste-references.md`). Nothing here gets built.

## How this was captured (and its limits)
- Git, Node and Python aren't installed on this PC, so I couldn't run Playwright. Every screenshot is a **viewport frame** from the browser pane, taken while scrolling. None of them is a single stitched full-page image.
- **Desktop** frames: the page was laid out at a true **1440×900** viewport, but the pane scaled the saved images down to **800×500**. Layout and proportions match 1440; fine text is soft.
- **Mobile** frames: laid out at **390×844** (mobile user agent), saved at roughly 488×1055 or smaller.
- Hex values marked "~" are read by eye from screenshots. Values without "~" come from computed CSS on the live page.
- Dribbble shots: full-size media came straight from cdn.dribbble.com (3200×2400 PNGs, downscaled here to 1600px JPEG to save space). Frames from the shot videos were taken by seeking the mp4 in the browser.

## Folder map
| Folder | What's in it |
|---|---|
| `dribbble-vinewinner/media` | 5 shot images (`shot-1..5.jpg`) and `video-1.mp4`, the 17 s site walkthrough |
| `dribbble-vinewinner/frames` | 6 frames from `video-1.mp4` |
| `dribbble-meatshop/media` | the one shot image (`shot-1.jpg`) |
| `dribbble-windore/media` | `cover.jpg` (hero) and `video-1.mp4`, the 32 s scroll walkthrough at 800×600 |
| `dribbble-windore/frames` | 6 frames from the video |
| `21st-elena-voss/desktop-1440-scroll`, `mobile-390-scroll` | scroll sequences (18 desktop, 9 mobile) |
| `21st-mosa-ai/desktop-1440-scroll`, `mobile-390-scroll` | 7 + 7 |
| `21st-jahed-cinematic-hero/desktop-1440-scroll`, `mobile-390-scroll` | 8 + 3 |
| `geckoridge-bad-example/desktop-1440-scroll`, `mobile-390-scroll` | 5 + 3 |

Frames are numbered in scroll order. When a few frames in a row change, that shows the motion.

---

## 1. VineWinner (Dribbble, Phenomenon Studio): "premium, can take inspiration from or use"
**Look:** a dark, moody editorial wine brand. Most surfaces are a near-black olive (~#16180F to #1C1E16, with a faint film-grain texture), set against warm cream panels (~#F4F1EA) and full-bleed golden-hour vineyard photography.
- **Type:** a big **high-contrast italic serif** for headlines and product names ("Wine. Intelligence. Intuition.", "Radice Nobile", "Our Wine Collection"), paired with a small, clean **neo-grotesk sans** for body, nav and labels. The logo is a calligraphic script wordmark. A huge, very faint italic word sits behind sections as a watermark ("exclusive", "about us").
- **Hero:** a full-bleed sunset vineyard seen through a stone-arch frame. The headline sits as three short stacked lines lower-centre, with one quiet outlined pill CTA ("Start Your Tasting Journey"). A small dark "this week's pick" card is pinned bottom-left, and a round floating AI-assistant button bottom-right.
- **Layout rhythm:** lots of negative space; small body text against huge headlines; content in hairline-bordered panels; pill tags ("Awarded", "Collector's Choice"); 5-dot rating rows; thin 1px dividers. Product cards are dark tiles with a studio-lit bottle, and one tile in the grid is double size to break the rhythm.
- **Imagery:** warm, cinematic, golden-hour landscapes, plus very clean 3D-render bottles on dark backgrounds. A black-and-white archive photo marks heritage ("From 1988").
- **Motion (from the video):** the headline reveals word by word with a blur/fade and slight rise (`frames/frame-6`). The wine carousel is horizontal, with a custom "Drag" cursor; the active bottle is bigger and the others shrink and dim. Moving into a product page, a dark panel **wipes in from the left** and the content cross-fades. Hover states are subtle.
- **Why it feels premium:** restraint (two typefaces, two surface colours), editorial serif italics, real atmospheric photos, generous space, slow considered transitions, small details (grain, hairlines, watermarks).

## 2. Meat Shop (Dribbble, Nixtio): "a cool hero idea"
**Only one static image exists.** The shot's video is the studio's own promo animation, not the design, so I deleted it.
- **Look:** a single saturated **red radial-gradient** stage (~#C62828 core to ~#7F1010 edges). A massive **distressed/grunge white display word, "MARKET"**, runs edge to edge, with "FRESH MEAT" above in translucent pink-white.
- **The hero idea:** layered depth. A real cleaver **cuts through the headline**, sitting in front of some letters and behind others, and is stuck into a marbled steak on a wooden board at the bottom. Type and object sit on separate depth layers.
- **Details:** floating frosted-glass pill badges ("Own Production", "Verified Quality") sit on the meat; stats in the corners (4.9 ★ rating left, 5K+ with avatar stack right); a centred pill nav with a round search button; a white pill CTA "Shop Meat Market" bottom-right; round red contact buttons bottom-left.
- **Fonts:** grunge-textured heavy sans for the display word, rounded geometric sans (Poppins/Gilroy-like) for UI.
- **Takeaway for us:** one huge word, plus one hero object that physically breaks the type, plus a few glass chips. It's loud and commercial. The depth trick is what Evan liked, not the palette.

## 3. Windore Solar (Dribbble, Muhammad Shofiuddoula): "a nice clean site"
**Look:** a calm, earthy, minimal corporate site. Palette: warm off-white/cream (~#EDE8DF) cards, dark olive-charcoal (~#3A3A33) cards and bands, a sand/gold gradient (~#E8D3B0 to transparent) for display type, all over desaturated landscape photography (wind turbines, dusk).
- **Hero:** a full-bleed photo; a small pill badge ("Utility prices have steadily increased"); a centred two-line headline in a sand-gold gradient; a short subline; a small cream pill CTA. A **giant brand wordmark "Windore"** fills the bottom edge, cropped and fading into the photo.
- **Layout rhythm (from the video, see `frames/`):** a 4-up service-card row where cream cards alternate with one dark card (the hovered one turns dark); a split stats band (390MW+ / 1,050+) in a huge thin sans with tiny labels; a muted logo strip; a "Simple Process" horizontal card scroller with small chip tags; a 4-up testimonial row that alternates cream and dark cards; round prev/next arrows.
- **Fonts:** a clean geometric/grotesk sans throughout (Poppins-ish for UI, tight grotesk for the large numbers). No serif.
- **Motion:** smooth vertical scroll; cards ease and lift on hover; the dark/light swap on hover; horizontal slider sections.
- **Why it feels clean:** a strict two-tone card system, big numbers, short copy, consistent radius and padding, and one hero photo mood carried all the way through.

## 4. Elena Voss portfolio template (21st.dev, Hyperiux): "the template I really wanted to build from"
Live preview: https://elena-voss-portfolio-template-v3.21st.app (worked). It runs Lenis smooth scroll; the page is ~15,500px tall at 1440 and ~14,000px at 390.
- **Palette (computed):** page bg **#050505**, cards **#111111 / #161616**, text **#FFFFFF** (secondary text is white at 80% / 30%), accent orange **#E8620F / #FF6B00**, the signature gradient `linear-gradient(to right, #F16B0D, #E61416)` (orange to red), cream **#F4EFE9** inside project mockups. The hero bg is soft blurred radial blobs of orange/red (#F0640D) fading to near-black.
- **Font (computed):** **Host Grotesk**, weight 400 everywhere: H1 108px, H2 79px, H3 22–36px, no letter-spacing tricks. One typeface, one weight, carried entirely by size and space.
- **Hero / intro sequence** (`mobile-390-scroll/01-06`, `desktop/01-04`): it starts as a pure blurred orange-red gradient. The portrait **rises in** from below; the headline "Visualise Your Mind in Motion" **reveals line by line through a mask** (letters slide up from a clip line); the small side labels fade in; the nav and the white pill "● Get in Touch" button arrive last.
- **Scroll motion** (desktop frames 04–08):
  1. The hero **shrinks into a rounded card** as you scroll, while a **collage/grid of project screenshots** flies in around it, so the hero becomes one tile in a portfolio wall (`desktop/05`, `mobile/07`).
  2. An **orange-red gradient arch** (huge curved top edge) sweeps up over the collage: "Award Winning Work" (`desktop/06`).
  3. A **sticky stacked-cards** section: a project list with a vertical progress line on the left (Auré Studio / Veloce / Grain Studio / Aether); on the right, project mockups **stack on top of each other** as you scroll (`desktop/07-08`).
  4. The gradient fades into black; "Why Work With Me?" reveals with the same mask effect (`desktop/09`).
  5. Three columns of benefits with hairline dividers, then "Design That Speaks…" left-aligned (`10`).
  6. A **horizontal-scroll service cards** row driven by vertical scroll; one card is the orange gradient, the rest dark #161616 with a circle-arrow button (`11-12`).
  7. An awards list: rows with hairlines and grey year labels (`13`).
  8. "Trusted by…": a big centred statement with **brand logos drifting/blurring behind the text** (`14-15`).
  9. A testimonial card with an avatar row, the active avatar ringed in orange (`16`); an accordion FAQ with an orange-gradient active toggle (`17`).
  10. The footer is a big rounded card with a glowing orange blob behind it, a large CTA "Ready to Bring Your Vision to Life?" and a white pill button (`18`).
- **Why it feels premium:** one font, one accent, true black, huge headlines, every section having *one* motion idea (mask reveal, shrink-to-card, gradient arch, sticky stack, horizontal scroll), smooth Lenis scroll, generous whitespace, pill buttons, big radii (~16–24px).

## 5. Mosa AI template (21st.dev, nextjsshop): "love this a lot too"
Live preview: https://mosa-ai-v1.21st.app (found inside the 21st.dev preview iframe; it worked). The page is ~8,800px tall at 1440.
- **Palette (computed):** pure **#000000** bg, **#FFFFFF** text. Headings are two-tone: the first half white, the second half mid-grey (~#7A7A7A), e.g. "Experience the power **of an intelligent assistant.**" Cards are ~#0A0A0A with ~#1F1F1F hairline borders. No colour accent at all; only the hero video and partner logos bring colour.
- **Fonts (computed):** **Geist** (sans) for headlines and body, **Geist Mono** for nav, buttons, labels, eyebrows ("● Introducing Message", "● Pricing") and card titles. H1 64px / H2 44px, weight 400, tight tracking (-0.02em).
- **Hero:** a full-bleed **looping background video** (`/hero-bg.mp4`): a misty mountain lake, a glowing door/portal of light, black birds flying past. A big left-aligned headline sits low; a short subline; two flat rectangular buttons, one white ("START CHATTING >", mono caps) and one translucent dark ("LEARN MORE >"); "Backed by" names in a row bottom-right. A segmented nav (bordered button group), plus a white "Signup" and a text "LOGIN".
- **Sections:** a 3-up feature cards row, each holding a **live mini UI** (workflow nodes, a chat draft, suggestion chips); tabs (Content Creation / Coding Help / …) switching a split panel with a moody photo plus a chat UI overlay; "How it works" with a prompt-box mockup and 3 numbered steps whose vertical line highlights the active step; a 6-card benefits grid with outline icons; a testimonial carousel with "1/6" and round arrows; a bordered logo grid; pricing with a monthly/yearly toggle and a "20% OFF" chip; FAQ; a closing CTA that reuses the hero video inside a rounded card; a big multi-column footer with a newsletter input.
- **Motion:** headings fade/blur-in on scroll; the workflow nodes and chat text animate (typing/streaming); tabs cross-fade; the steps highlight sequentially; the hero video loops.
- **Why it feels premium:** total monochrome discipline, the Geist + Geist Mono pairing (techy, precise), two-tone grey headings, real product UI inside the marketing, and one cinematic video as the only "image" moment.

## 6. Cinematic landing hero (21st.dev, jahed / easemize, GSAP): "another modern idea"
The 21st.dev page loads the component from `https://cdn.21st.dev/easemize/cinematic-landing-hero/default/bundle.1774169408294.html`, which I opened directly. The author's 21st handle is @jahed; the bundle and X account are "easemize", the same author. It's a **single pinned scroll story** about 7,900px tall; there's no site around it.
- **Sequence** (`desktop-1440-scroll/01-08`):
  1. A near-black (~#0A0A0A) stage with a faint **grid of lines**; the headline "Track the journey" **blurs into focus** (heavy blur to sharp) (`01-02`).
  2. On scroll, a **rounded deep-navy card** (~#13265E to #0B1430 radial gradient, ~24px radius) rises from below and covers the headline (`03-04`), then **expands to full screen** (`05`).
  3. A **phone mockup** fades in centre (dark UI, "Journey"). Then the content builds: a progress ring **counts up** (0, 44, 361, 365 days), list rows fill, **glass notification cards** pop out from the phone ("1 Year Streak", "Sponsor Update"), a left text block slides in ("Accountability, redefined."), and a huge **chrome/silver 3D wordmark "SOBERS"** appears on the right (`06-07`).
  4. On exit, the card shrinks back into a rounded panel (`08`).
- **Font:** system UI sans (`ui-sans-serif, system-ui`), heavy weights for headlines; the wordmark has a metallic gradient with a drop shadow.
- **Why it's interesting:** it's a scroll-scrubbed product reveal (GSAP ScrollTrigger style: pin, scale, counters, staggered pop-ins). That pattern works for any "show the product" moment. The mobile version (390) runs the same sequence, scaled down.

---

## 7. geckoridge.co.za: the "average / what 99% have" example (study only; never reuse its name, text or photos)
It redirects to geckoridgevenue.co.za. It's WordPress (AIOSEO plugin) with a Bitrix24 popup form.
- **First impression (1440):** a white header with a script/ornamental logo and 7 plain text nav links. The "hero" is a **dense photo mosaic of ~40 small wedding photos**, with no focal point, no headline and no CTA. Your eye has nowhere to land.
- **Popup:** within a few seconds a **"Receive Specials and Vouchers?" modal** (name/phone/email) greys out the whole page on every scroll position. You have to dismiss it before reading anything. It's the first thing the site asks for, before it's given you anything.
- **Text:** below the mosaic, one **centred wall of small grey body text** (~340 words on the home page) under a maroon script-ish heading. Everything is centred and the same size, so nothing stands out. Text and images live in separate blocks instead of telling a story together.
- **Image placement:** the photos are the venue's best asset but are shrunk to thumbnails (mosaic, gallery strip). Next comes a row of small square category tiles (Specials / Weddings / Functions / Conferences / Accommodation) with cursive labels, over a washed-out flower photo background. The footer CTA "REQUEST PRICING AND SPECIAL OFFERS" is a letter-spaced text banner over a faded photo, not a button.
- **Fonts:** five families on one page (Montserrat, system UI, Voltaire, Roboto, Shadows Into Light) plus the script logo: no system.
- **Load feel:** 81 requests, ~3.6 MB transferred, load event ~2 s on this PC's connection. The page shifts while the mosaic fills in, then the popup lands on top.
- **Mobile (390): broken.** The page renders **~2,060px wide** inside a 390px viewport, so it doesn't fit the screen. The welcome paragraph wraps **one letter per line** in a narrow column, making the page ~25,000px tall, and the grey popup overlay covers it with the dialog off-screen (see `mobile-390-scroll/`). It's possible the pane's mobile emulation made this worse than on a real phone, but the overflow and the one-letter column are in the page's own layout. At 1440 the body is also 3,344px wide, so it overflows horizontally on desktop too.
- **Why it feels average/frustrating:** no hero idea; no hierarchy; the popup before any value; tiny photos; walls of centred text; too many fonts; dated ornament (script logo, cursive labels); weak CTAs; broken on mobile; nothing moves except the popup.

---

## Shared style across Evan's references (what "modern / premium" means to him)
1. **One big idea in the hero:** a full-bleed atmospheric photo or video, or one huge word, with a short 2–3 line headline and one or two pill/flat CTAs. Never a collage.
2. **Restrained palette:** a near-black (#000–#16180F) or warm cream base, plus *one* accent (orange-red gradient, gold/sand, deep navy) or none at all.
3. **Big type, little text:** headlines at 64–110px with light/regular weights, body copy short and small. There's a strong size contrast and lots of empty space.
4. **Few fonts, used well:** one grotesk (Host Grotesk, Geist), or an editorial italic serif plus a clean sans, or sans plus mono for labels.
5. **Cinematic, real-feeling imagery:** golden-hour landscapes, moody mist, studio-lit products, used large, never as thumbnails.
6. **Card system:** rounded panels (16–24px radius), hairline borders, alternating dark/light cards, pill tags and chips, small round icon buttons.
7. **Motion with purpose, one idea per section:** mask/blur text reveals, the hero shrinking into a card, sticky stacked cards, horizontal scroll rows, pinned scroll-scrubbed product reveals, counters, smooth (Lenis) scrolling.
8. **Depth and layering:** objects breaking through type (Meat Shop), giant cropped wordmarks behind content (Windore, VineWinner watermark), glass badges floating over images.
9. **Product/UI shown inside the design** (Mosa mini-UIs, cinematic phone, VineWinner chat), so the site *demonstrates* rather than describes.
10. **The opposite of geckoridge:** no popups first, no mosaics, no centred walls of text, no font soup, and it must be truly responsive.
