# Components board: build brief (planned 19 Oct 2026)

This is firstcheck step 1 (components). It is **not** the site. It's one scrollable page where Evan sees each part of the BrandMasters site working live on his iPhone and on desktop, then picks or comments. Keep it honest and polished; this is how he judges direction.

Read `../firstcheck.md`, `../web-dev-context/01-business.md`, `03-design-direction.md`, `04-tech-stack-and-motion-rules.md` and `../ref-study/NOTES.md` (especially section 4, Elena Voss) first.

## Decisions Evan made (19 Oct 2026). These override the older repo notes.
- **Hero A, "the wall".** Elena Voss feel: black with an orange-to-red glow, a headline that reveals line by line through a mask, and a phone showing a gorgeous site. On scroll the hero shrinks into a card while a wall of other concept sites flies in around it.
- **No real businesses, trades or people anywhere.** No aircon, no barbers, no photos of people working. Business types are only *mentioned* in words. Every site shown is a creative, art-directed "online" site, like the marble statue with neon glasses. This replaces the aircon storyline in `03-design-direction.md`.
- **The "average site" must be realistic.** Not broken, not 2016. It's the kind of site most people have now: it works, it's just forgettable. Think a stock WordPress/Wix theme from 2023 or 2024.
- **The statue site** (stand-in image `assets/statue-standin.webp`, from the Elena template; Evan OK'd it as a stand-in, and a generated version of our own will replace it) is "our site": the after state, and the site that builds itself in "how we build".
- **Cursor effect on desktop.** A cool detail, never distracting.
- **Interactivity in every section.** The hero carries the page, and every later section keeps the momentum.

## Tech for the board
- One self-contained `board/index.html` (inline CSS and JS) plus `board/assets/`. GSAP 3 + ScrollTrigger from cdnjs (exact version, e.g. 3.12.5), Lenis from jsdelivr with an exact version (e.g. lenis@1.1.13). The font is **Host Grotesk** from Google Fonts (400 and 500 only). No other libraries.
- It must work as a static page opened from a URL (it'll be published as a claude.ai artifact), so no build step and no module imports from local files.
- Follow every smooth-motion rule in `04-tech-stack-and-motion-rules.md`: transform and opacity only; one Lenis-to-ScrollTrigger loop; scrub 0.6 to 1; pin with ScrollTrigger; `svh`; `ignoreMobileResize`; and reduced-motion fallbacks.
- Weight: keep the whole board under ~1.5 MB. Images are WebP, sized to their display size.

## Look
- Background `#050505`; cards `#111111` / `#161616`; text white, with secondary text at 70% and 45% white. Accent gradient `linear-gradient(90deg,#F16B0D,#E61416)`; the single accent is `#F2610F`. The glow is soft radial blobs of `#F0640D` and `#E61416` on black, plus subtle grain (a tiny inline SVG noise at about 4% opacity).
- Type: Host Grotesk 400. Headlines are huge (`clamp(48px, 9vw, 132px)`, line-height 0.95, tracking -0.02em). Body is 16 to 18px. Sentence case. Very little text.
- Radii 20 to 28px, hairline borders `rgba(255,255,255,.08)`, pill buttons. The main button is the **interactive hover button**: white pill, small orange dot on the left. On hover the dot grows to fill the pill, the label slides out and a new label with an arrow slides in (black on orange). On touch, the same thing happens as a press state.
- Each board section starts with a small, quiet label for Evan, e.g. "01 · Hero (A, the wall)", plus one line on what to look at. Keep these labels visually separate from the design (a thin top bar inside the section), so he can still see the section as it'd really look.

## Sections to build, in order

### 01 · Hero, "the wall" (the most important part; spend the most care here)
- Nav: a "BrandMasters" wordmark (text for now; the logo isn't final), links (Work, How it works, Packages, Questions) on desktop only, and the hover button "Chat on WhatsApp" linking to `https://wa.me/27810898573?text=Hi%20BrandMasters%2C%20I%27d%20like%20a%20website.` On mobile, a compact WhatsApp pill plus a menu icon.
- Intro (time-based, about 1.6 s total, on load): the glow fades up first; the phone rises in from below (translateY plus opacity); the headline lines reveal through a mask (each line slides up from behind a clip, staggered 0.08 s); then the sub line and buttons fade in, and the nav comes last.
- Headline: "They see / your site / first." Sub line: "We design and build websites for South African businesses. Already have one? We'll make it the one people remember." Buttons: the hover button "Chat on WhatsApp", and a ghost button "See the difference" that scrolls to section 03.
- Phone: a realistic iPhone 15 Pro frame built in CSS (ratio about 1 to 2.03, thin titanium rim, dynamic island, status bar, home indicator). The screen is filled by the statue site (stand-in image, `object-fit: cover`, positioned so the statue and the glasses are visible). Desktop: phone on the right, tilted -6 degrees. Mobile: phone under the text, smaller.
- Scroll (pinned, about 150% of the viewport height): the hero (text, phone and glow together) scales down to about 0.36 and gets rounded corners, becoming the centre tile. Eight concept-site tiles fly in from off-screen to form a 3×3 wall around it. The movement is a staggered translate and scale, power3.out feel, scrubbed. At the end, one line fades in over the wall: "Every kind of business. One standard." with a small row of words underneath: "salons · clinics · studios · guesthouses · shops · restaurants · gyms · offices".
- Concept tiles: no photos yet (generated images come later). Make each one a **real-looking website hero built in CSS**, each with its own art direction:
  1. a chrome/liquid-metal style made from CSS gradients;
  2. a cream editorial with a big serif italic word;
  3. lime on black;
  4. deep blue glass;
  5. a pink and orange neon gradient;
  6. a brutalist grid with big numbers;
  7. a soft sand minimal;
  8. a red with a huge cropped word.

  Each tile gets a fake nav, a headline of 2 or 3 words, and a button shape. Give each a tiny made-up brand name and a tiny caption "concept". It's fine for one tile to reuse the statue image. They must look like **websites**, not posters.
- Mobile (375): a 2-column wall, or a smaller scale. It must look intentional at 375. The pin must not jump when the iOS address bar moves.

### 02 · Cursor (desktop only, active on the whole board)
- An orange 6px dot follows the mouse exactly. A 34px ring (1px, white at 35%) follows with a lerp (0.15).
- Over links and buttons the ring grows to 56px and fills with orange at 15%. Over elements marked `data-cursor="Drag"` / `"View"` / `"Play"`, the ring grows to 72px and shows that word in 12px.
- Magnetic: hover buttons move up to 6px towards the cursor and spring back.
- Hidden on `(pointer: coarse)` and with reduced motion (fall back to the normal cursor). Never hide text, never lag the page: one requestAnimationFrame loop, transforms only.
- Add a short label in the section list saying the cursor is live everywhere on desktop.

### 03 · "The average site": the story (pinned, one beat at a time)
- The stage is pinned. A phone sits in the centre (desktop: the phone is centre-right and the beat text is on the left; mobile: the beat text sits above the phone in a fixed small area, so it never overlaps the phone).
- Inside the phone is a **realistic average site** for the same made-up statue brand. Call it something neutral like "Statua Studio". It's a stock 2023 theme look:
  - a thin grey top bar with a tiny phone number, an email and three social icons;
  - a white header with the logo in a generic font and a hamburger menu;
  - a hero slider with the statue image darkened under a big centred "WELCOME TO OUR WEBSITE" and a "READ MORE" button, plus slider dots;
  - three icon boxes, "Quality", "Passion", "Experience", each with a lorem-like line;
  - a centred paragraph wall;
  - a cookie bar at the bottom and a chat bubble widget bottom-right.

  It works. It isn't ugly or broken. It's just like everyone else's.
- Beats (scrubbed). Exactly one is visible at a time, with a counter "1 / 5". A soft highlight ring circles the exact spot in the phone, and the rest of the screen dims to about 60%. Each beat has a short headline plus one short line:
  1. **"Still loading."** The screen is white with a spinner, and a timer counts up 0.0 s to 4.8 s. Then the content appears and visibly shifts down once (a layout jump).
  2. **"Welcome to… what?"** The highlight sits on "WELCOME TO OUR WEBSITE". Line: "It never says what they do."
  3. **"A pop-up before hello."** A "Subscribe for 10% off" pop-up slides over everything. Line: "They haven't even seen anything yet."
  4. **"Same boxes as everyone."** The highlight sits on Quality / Passion / Experience. Line: "Every site says this. Nobody remembers it."
  5. **"Where do I tap?"** The highlight sits on the tiny number in the top bar. Line: "The number's tiny. The form has eight boxes." Then the phone screen slides away to the left as if the visitor pressed back, and the caption "And they're gone. To someone else." appears.
- Never stack two pop-ups or captions at once. Beats cross-fade.

### 04 · The turn: same brand, rebuilt
- Continue the pin, or make it a new pin right after 03. An orange-to-red gradient arch (a huge curved top edge) sweeps up over the average site, like the Elena "Award Winning Work" arch. When it passes, the phone shows the **statue site** full screen: the stand-in image fills the screen, our own headline masks in over it ("Made to be remembered."), and one orange button appears.
- Then three fixes appear **one at a time** on the same spots as the problems, each as a small glass chip with a tick: "Loads in under a second", "Says what you do, first", "WhatsApp in one tap". The counter reads "Fixed 1 / 3" and so on.
- Closing line: "Same business. Same photo. That's what design does."

### 05 · How we build (the statue site builds itself)
- Desktop: a browser frame (macOS-style dots, a URL bar reading `yourbusiness.co.za`) pinned in the centre. Mobile: the phone frame.
- Four steps scrubbed by scroll, with a progress line and step labels (01 Call, 02 Design, 03 Build, 04 Launch) and one short line each:
  1. **Call.** Grey wireframe blocks only. "We chat on WhatsApp and learn your business."
  2. **Design.** Colour and type drop in, and the statue appears in greyscale. "You see the design before we build."
  3. **Build.** Motion switches on: the headline masks in, the glow breathes, and the statue goes full colour. "We build it in 1 to 2 weeks."
  4. **Launch.** The URL bar gets a padlock, and a small "Live" dot pulses green. "50% to start, 50% before launch."
- Mark the frame `data-cursor="View"`.

### 06 · Packages
- Three cards: Essential R6,500, **Professional R12,500** (recommended, gradient border plus a soft glow, slightly raised), and Premium R24,500. Use exactly the inclusions in `01-business.md`.
- Under the cards, one line: "Care plan R500 a month. Care Plus R1,200 a month." Plus a small "Founding offer: 15% off for our first three clients."
- Interaction: on desktop each card tilts up to 4 degrees towards the cursor, with a light sheen following the cursor. On mobile, the cards are a horizontal swipe row with scroll snap and Professional first in view, marked `data-cursor="Drag"` on desktop if it's a row.
- Each card has a hover button opening WhatsApp with a pre-filled message naming that package.

### 07 · Trust line (small, but it matters to SA owners)
- A big statement with the Elena mask reveal: "Your domain. Your site. Every login." Under it, three small items: "No lock-in", "You own everything", "Real people on WhatsApp".

### 08 · Short answers (FAQ)
- An accordion. The open item's toggle is an orange-gradient circle with a minus; closed items have a ring with a plus. Smooth height animation (using the grid-rows 0fr to 1fr trick is fine).
- Questions, answered only from `01-business.md`:
  - How long does it take?
  - How does payment work?
  - Do you write the words?
  - Can I update it myself? (Answer honestly: small changes are covered by the care plan. Don't promise a CMS.)
  - What does the care plan cover? (Keep it general and honest; if the facts don't cover it, say "Updates and help when you need it. Ask us for the details.")

### 09 · Final CTA and footer
- A big rounded card with an orange glow behind it (Elena footer feel): "Ready when you are." The hover button "Chat on WhatsApp", a call button `tel:+27810898573`, and an email button using a placeholder `mailto:` (leave a TODO comment; the address is set later).
- Footer: wordmark, "They see your site first.", "Johannesburg, South Africa", and the copyright.

## Copy rules
Natural, confident English with contractions. Headlines are 2 to 6 words. No buzzwords (seamless, leverage, unlock, elevate, cutting-edge). No "it's not X, it's Y". No fake stats, logos or testimonials. Never put Evan's name on anything.

## QA before you report (required)
- Install Playwright in a scratch folder **outside the repo** and use its Chromium. Screenshot every section at **375×812** and **1440×900**, including at least three frames inside each pinned scene (hero 0%, 50% and 100% of the pin; beats 1 to 5; fixes 1 to 3; build steps 1 to 4). Save the screenshots to `board/qa/` as JPEG (keep the total under about 8 MB).
- Check: no horizontal scroll at 360, 375, 390, 768 and 1440; zero console errors; the page loads from a plain static server (`npx serve board` or similar).
- Throttle the CPU 4x (CDP `Emulation.setCPUThrottlingRate`), scroll through the hero and section 03, and report the frame times you see.
- Look at your own screenshots critically: does the hero feel as premium as Elena Voss? Would Evan call it bland? Fix anything that looks cheap before reporting.

## Deliver
- Commit `board/` (including `qa/`) on branch `claude/components-board` and push with `git push -u origin claude/components-board`. No PR, no merge.
- Report back: what you built, what you checked and how, the frame-time numbers, and an honest list of weak spots.
