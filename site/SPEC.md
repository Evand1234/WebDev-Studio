# BrandMasters site: build spec (v2, 19 Oct 2026)

> v2 replaces v1's aircon search hero and story. Evan (09:28–09:30): no real businesses or trades anywhere; the statue with sunglasses leads; it should feel like a creative online brand that makes owners want an online-first site. Hero = option A "Glasses on". Keep a before site that is ordinary and WORKING, just forgettable (not broken, not 2016).

Written in the planning pass (Opus). The build pass (Sonnet) follows this exactly; anything unclear goes back as a question, not a guess.
Evan approved: hero A "Glasses on", extra Google pages later, full prices, Claude drafts package contents, free preview offer, TappedFlow as real work, 50% deposit then rest at launch (EFT), no photos (everything drawn in code) except one hero-quality "statue" image.

## What this site is
BrandMasters' own marketing site (Johannesburg web studio). It must feel premium, play like a smooth scroll film, and leave a South African owner knowing: what we do, for whom, how much, how long, how to start. It is also the standard for every future site.

Feel: the Elena Voss template (see `../ref-study/NOTES.md` section 4 and `../ref-study/21st-elena-voss/`): true black, one orange-to-red gradient glow, Host Grotesk at weight 400 in huge sizes, mask line reveals, the hero shrinking into a card, a gradient arch sweep, sticky stacked cards, horizontal card row, big rounded end card with glow. Take the feel; do not copy its layout or words.

## Hard rules
- No invented reviews, ratings, stats, client logos or awards. No "trusted by". No personal name. No email address on the page.
- Never mention or show Gecko Ridge. The before/after brand is our made-up creative brand "Aurelius" (no product or trade is ever named).
- No photos of people or trades. Business types are only *words*.
- Animate only `transform` and `opacity` (and CSS variables that feed them). No animating `filter: blur()` during scrub on mobile; on desktop a blur on ONE element at a time is OK if it stays at 60fps.
- One scroll system: Lenis + GSAP ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t=>lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`). `ScrollTrigger.config({ignoreMobileResize:true})`. Use `svh`.
- Lenis: `syncTouch:false` (native touch scroll on phones; smooth wheel on desktop).
- `prefers-reduced-motion: reduce` → no Lenis, no pinning; every scene shows as a static, readable block (the story as a simple numbered list of the 5 moments with their phone states visible).
- No horizontal page scroll at 320, 360, 375, 390, 414, 768, 1024, 1280, 1440, 1920.
- Zero console errors.
- Text is real HTML text (SEO). One `<h1>`.

## Files
```
site/
  index.html          everything for the home page: markup, <style>, inline main <script> at the end
  vendor/gsap.min.js, vendor/ScrollTrigger.min.js, vendor/lenis.min.js   (copied from node_modules: gsap@3.12.5, lenis@1.1.13)
  assets/statue.webp  (stand-in until Evan supplies the real image; see "Statue" below)
  assets/og.png       1200x630 share image (render it from an HTML page with Playwright)
  favicon.svg         ember rounded square with a white "B"
  robots.txt, sitemap.xml
  SPEC.md (this file), CHECKS.md (what you tested, with numbers)
```
Script tags at the end of `<body>`: `vendor/gsap.min.js`, `vendor/ScrollTrigger.min.js`, `vendor/lenis.min.js`, then the inline script. (For the private preview, Claude swaps these to cdnjs/unpkg URLs; keep them as three plain tags so that swap is a find/replace.)
Fonts: Google Fonts link for Host Grotesk 300/400/500 and Geist Mono 400, `display=swap`, with preconnects. Fallback stack `system-ui,-apple-system,"Segoe UI",Roboto,sans-serif`.
Contact data lives in ONE JS object at the top of the inline script and in the JSON-LD: WhatsApp `27810898573`, display `081 089 8573`.

## Tokens (CSS custom properties on :root; single dark theme, `color-scheme: dark`)
```
--bg:#050505; --bg2:#0c0b0a; --card:#121110; --card2:#181614;
--ink:#f5f3f0; --ink2:rgba(245,243,240,.72); --ink3:rgba(245,243,240,.42); --line:rgba(255,240,230,.09);
--ember-a:#ff7a1a; --ember-b:#e5261a; --ember:#ff5b1f; --grad:linear-gradient(100deg,var(--ember-a),var(--ember-b));
--wa:#25d366;
--display:"Host Grotesk",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
--mono:"Geist Mono",ui-monospace,Menlo,Consolas,monospace;
--ease-out: cubic-bezier(.16,1,.3,1);
```
Type scale: hero H1 clamp(44px, 9vw, 128px) / line-height .92 / letter-spacing -.045em. Section H2 clamp(36px, 6.2vw, 88px) / .98 / -.035em. H3 clamp(22px, 2.4vw, 30px). Body 16–17px / 1.55, `--ink2`. Labels: mono 11px, uppercase, letter-spacing .1em. Weight 400 everywhere except small UI (500).
Spacing: sections padded `clamp(96px, 14vw, 180px)` top/bottom. Side gutter `max(16px, env(safe-area-inset-left))` at phone, 32px ≥720px, container max 1240px. Radii: cards 24px, small 14px, pills 999px.
Reuse the visual pieces from `../plans/brand-kit/index.html` (buttons, pills, phone frame, price card, FAQ, end card); that kit is approved.

## Global UI
- **Nav**: fixed floating pill top-centre (as in the demo): wordmark "BrandMasters" with an ember dot + links (desktop only: How it works, Prices, Questions) + white pill button "WhatsApp us" (opens wa.me). Hidden while the hero search intro plays its first 1.2s, then fades in. On scroll down past the story it stays; slight background darken after 40px.
- **Scroll progress**: a 2px ember line at the very top, scaleX by page progress.
- **Cursor (desktop, `(hover:hover) and (pointer:fine)` only)**: native cursor kept visible (accessibility), PLUS a 8px ember dot that follows exactly and a 36px ring (1px, ink at 35%) that follows with lerp 0.15. Over links/buttons the ring scales to 1.8 and fills ember at 15%; over the before/after slider it shows the label "Drag" inside the ring; over phone mockups "Scroll". Hide both when the mouse leaves the window. Use transform only, one rAF loop, paused when idle.
- **Cursor glow**: in the hero and end card, a large soft ember radial (600px) follows the cursor with lerp 0.08 at 35% opacity. Touch devices: glow drifts slowly on its own instead.
- **Magnetic buttons** (desktop): primary buttons pull up to 6px toward the cursor.
- **Floating WhatsApp button** (phones only, < 720px): bottom-right round 56px green button, appears after the hero, hides when the end card is on screen. Respect `env(safe-area-inset-bottom)`.
- **Skip link**, visible focus rings (2px ember outline), `<main>`, `<nav>`, `<footer>` landmarks.

## The page, top to bottom (each block = one `<section>` with an id)

### 1. Hero "Glasses on" + the story: ONE pinned stage (`#story`), the heart of the site
One pinned stage (`pin:true`, `scrub:0.8`), about `+=1000%` on desktop and `+=900%` on phones, driven by one master timeline with labels (`hero`, `glasses`, `lens`, `before`, `m1`…`m5`, `switch`, `after`). Mobile-first: everything must compose at 390×844 first.

**Assets (statue)**
- `assets/statue.webp`: a classical white marble bust, FRONT view facing the camera, NO glasses, on pure black, transparent-looking edges (black bg is fine since the page is black). Evan will supply the real one; until then build a stand-in (see "Stand-in" below). Keep it in a fixed-size box (aspect 4:5) so swapping the file needs no code change.
- Two stacked copies of the same image: `.statue-dull` (CSS `filter: grayscale(1) brightness(.55) contrast(.9)` set statically, never animated) and `.statue-lit` (normal), crossfaded with opacity. Plus `.rim` layers: two radial ember gradients positioned at the statue's right edge and behind the head (opacity animated).
- **The glasses are SVG drawn in code** (a separate layer, so they can drop on): a sleek wraparound shape, matte black frame, two lenses filled with a mirrored ember gradient (#ffb347 → #ff5b1f → #e5261a) plus a white specular streak. Position/size them with CSS variables (`--gx`, `--gy`, `--gw` as % of the statue box) so they can be re-aligned in one place when the real photo arrives.
- Stand-in: since no photo exists yet, draw the bust in SVG (or canvas → PNG): soft marble-white head, neck and shoulders with subtle shading gradients and a faint vein texture, classical short curls suggested by a few overlapping circles at the top, closed calm features hinted by soft shadows (eyes/brow line, nose ridge, lips). It must read as "a marble statue" at phone size and look tasteful, not cartoonish. Export to `assets/statue.webp` (or .png if no webp encoder) at 1000×1250, under 120 KB.

**Layout of the hero frame (rest state after intro)**
- Statue centred, bottom-aligned, height ≈ 78svh (phone ≈ 62svh), slightly overlapping the bottom edge.
- The H1 is HUGE and sits BEHIND the statue (z-index below) so the head breaks through the letters (Meat Shop depth trick), but stays readable: line 1 "They see your" above/behind the head, line 2 "site first." lower, crossing the chest/shoulders. On phones: line 1 at top (above the head, not overlapped), line 2 just below the chin crossing the shoulders. Size clamp(52px, 13vw, 190px), letter-spacing -.05em, weight 400.
- Corner labels (mono 11px, ink3): top-left under the nav "Web design studio", top-right "Johannesburg, ZA", bottom-left "Scroll to put them on", bottom-right "(01) Hero".
- After the glasses land: a sub line (ink2, 34ch max) bottom-left on desktop / under line 2 on phone: "Most websites work. Few get remembered. We build the ones people show off." and two buttons: ember "WhatsApp us" + ghost "See how" (scrolls to `#story` label `before`).

**Beat 0: intro on load (not scrubbed, ~1.6s)**
Black → the dull statue fades and rises 30px into place → H1 reveals line by line through a mask, in DIM grey (ink at 28%) → corner labels fade in → nav fades in. Scroll works immediately.

**Beat 1: glasses on (scrub, 0 → ~18%)**
- Glasses start above the frame (y -120vh, rotate -10°, scale 1.1) and drop onto the face, easing out (`power3.out`), with a tiny settle at the end (y -6px → 0) but no bounce.
- At the moment they land (last 15% of the beat): `.statue-lit` fades in over `.statue-dull`, the rim lights and the big background ember glow switch on, the H1 crossfades from the dim copy to the lit copy (white, with "site first." in the ember gradient), corner label "(01) Hero" swaps to "Glasses on.", the sub line and buttons rise in.
- Desktop cursor: the statue group (statue + glasses + rim) gets a subtle 3D turn toward the cursor (rotateY ±7°, rotateX ±4°, perspective 1200px, lerp .08) and a white/ember glint moves across the lenses following the cursor (a radial gradient inside the lens clip, positioned by CSS vars). Touch: idle sway ±2° and the glint sweeps every 4s. These run on a separate wrapper from the scrubbed transforms so they never fight.

**Beat 2: into the lens (~18% → ~30%)**
- H1, sub line, buttons and labels fade out fast. The statue group scales up hugely (to ~14×) with `transform-origin` at the centre of the LEFT lens, so the camera flies into the lens. The lens's ember mirror fills the screen, then darkens to near-black with an ember glow (the story stage).
- Halfway through, a centred mask-reveal line appears and holds: "Here's what most visitors see." (H2 size). It fades out as the phone arrives.

**Beat 3: the before site (~30% → ~36%)**
- A realistic iPhone frame rises from below (reuse the demo's `.phone/.bezel/.screen/.island` with a 390×844 inner screen scaled by `--s`; `--ph: min(70svh,640px)` desktop, `min(58svh,520px)` phone). Desktop: phone on the right half, caption column on the left. Phone (<820px): caption block on top (max 3 short lines), phone below it, both inside the stage.
- The screen shows the **Aurelius "before" site**: a typical, modern-ish, WORKING template site, nothing broken, just generic. White background, system sans (Arial/Helvetica), a top bar with "AURELIUS" in a plain bold font + hamburger, a full-width hero block: the statue image (no glasses) small and awkwardly cropped in a light-grey banner with a dark overlay, centred heading "Welcome to Aurelius" and the line "Quality you can trust. Excellence in everything we do." and a generic rounded blue button "Learn more"; then "About Us" centred heading + a centred ~70-word paragraph of generic text ("At Aurelius we are passionate about delivering the highest quality… our dedicated team… customer satisfaction is our top priority…"); then three identical boxes with simple line icons "Quality / Service / Experience", each with two lines of filler; then a footer with © and tiny links; a thin cookie bar pinned at the bottom of the screen ("We use cookies to improve your experience. Accept"). Clean but forgettable.
- Caption column contents: mono counter "01 / 05", a one-line headline (H3 size), one line of body (ink2), 5 progress dots (active = ember).

**Beats 4–8: five moments, ONE at a time, never stacked**
Inside the phone, a spotlight layer: an element with a huge `box-shadow: 0 0 0 999px rgba(0,0,0,.6)`, radius 14px, that moves/resizes (transform + scale only; or one pre-sized element per moment cross-faded) to frame the part being discussed in 390×844 coordinates. Per moment: spotlight moves → old caption out (up 12px, fade) → new caption in (from 12px below) → long hold → next. Only one caption is ever visible.
1. **"It works."** Spotlight: the whole first screen. Body: "Nothing's broken. It loads, the buttons work. It's just… fine."
2. **"It looks like everyone else's."** Spotlight: the "Welcome to Aurelius / Quality you can trust" block. Body: "Same layout, same words. They've seen this five times today."
3. **"Nothing says 'start here'."** The inner page scrolls down; spotlight on the three identical boxes. Body: "Every block is the same size, so nothing pulls them in."
4. **"Asked too soon."** A popup slides up inside the phone ("Join our newsletter! Be the first to hear our news." email field, "Subscribe" button, small ×). Spotlight on it. Body: "It wants their email before it's earned their attention."
5. **"Forgotten in seconds."** A tap ring taps ×; then the whole screen shrinks to a card and flicks off to the left like closing a tab (app-switcher feel), leaving the black screen with a faint home indicator. Body: "They didn't hate it. They just won't remember it." All five dots filled.

**Beat 9: the switch**
Caption out. A huge ember gradient arch (big curved top edge, full width, Elena "Award Winning" style) sweeps up from below over the whole stage. On it, centred, mask-reveal: "Now picture it like this." Hold. The arch continues up and off the top, revealing the stage: black, phone centred.

**Beat 10: the after site (same brand, rebuilt by us)**
Inside the phone, the **Aurelius rebuilt** site (390×844, dark, premium, it is a mini version of our own hero, a deliberate callback):
- Top: "AURELIUS" wordmark (mono, letter-spaced, small) left, a small white pill "Enter" right.
- The statue WITH the ember glasses filling the upper ~62%, ember rim light, black background; over its lower part a huge white headline "Made to be looked at." (56px, tight), a line "Aurelius. Est. 2026." (mono, ink3) and one clear ember button "Explore".
- The inner page then scrolls slightly to show a horizontal row of 3 dark cards with ember edges peeking ("01 Collection", "02 Story", "03 Visit"), then settles back.
- Caption (left on desktop, above on phone): headline "Same brand. Built by BrandMasters." and three ticks appearing one by one: "Remembered at first glance", "One clear next step", "Opens fast on any phone".
- End of pin: the phone scales down slightly and the stage unpins into the next section.

**Reduced motion**: no pin; show the hero lit with glasses on, then the five moments as a static list each with its own small phone screenshot-state (built from the same DOM, statically positioned), then the after phone.

### 2. Before / After (`#compare`): interactive
- H2: "Same brand. Spot the difference." Small ink2 line: "Drag the line."
- A large rounded frame (16:10 desktop, 4:5 phone) with two desktop-browser mocks stacked: under = the Aurelius BEFORE site (desktop version: white, plain top bar with 6 links + "Contact Us" button, grey banner with small statue, centred "Welcome to Aurelius", three equal boxes); over = the Aurelius AFTER site (desktop version: black, statue with ember glasses on the right, huge "Made to be looked at." left, ember "Explore" button, ember glow). A vertical handle (2px white line + 44px round knob with ‹ ›) splits them; pointer drag (mouse + touch) and keyboard arrows when focused set `clip-path: inset(0 0 0 X%)` on the top layer. On first view it auto-sweeps 50% → 72% → 28% → 50% once.
- Mono labels under each side: "Before: it works" and "After: it's remembered".

### 3. Who it's for (`#who`): kinetic type, no photos
- H2 reveals: "For every business people look up."
- A huge single line below: "Your [word] deserves better." where [word] cycles (vertical slot-machine roll, transform only, every 1.6s, pauses when offscreen): café, salon, guesthouse, practice, workshop, shop, studio, restaurant, gym, clinic. The word is in ember gradient.
- Two marquee rows of business types in outline pills, scrolling in opposite directions slowly (CSS animation on transform; speed nudged by scroll velocity on desktop): "Cafés · Salons · Guesthouses · Dentists · Restaurants · Boutiques · Gyms · Vets · Photographers · Lawyers · Florists · Bakeries".
- Line under (ink2, max 52ch): "If your customers find you on their phone, your site is your shopfront. We make it one people remember, and want to show off."

### 4. What we do (`#what`): horizontal card row (Elena style)
- H2: "What we do." 
- On desktop the section pins and vertical scroll moves a horizontal row of 4 cards (420×520): 
  1. **New site** (ember gradient card): "Starting from nothing? We design and build it, write the words, and get it live." 
  2. **Rebuild** (dark): "Already have a site? Send us the link. We learn from it and build it better."
  3. **Found on Google** (dark): "Set up so Google understands what you do and where. Plus your Google Business Profile."
  4. **Care** (dark): "We host it, keep it fast and safe, and make your changes every month."
  Each card: mono number top-left, round arrow icon top-right that rotates 45° on hover, title (H3) bottom, body ink2. Hover (desktop): card lifts 6px, border ember 50%, a soft spotlight follows the cursor inside the card (radial gradient positioned by CSS vars --mx/--my).
- Phones: no pin; native horizontal swipe row with scroll-snap and peeking next card (cards 82vw), with small dots under it.

### 5. How it works (`#how`): sticky stacked cards (Elena style)
- H2: "How it works." Line: "Four steps. You only do the first one."
- 4 cards that stack on top of each other as you scroll (each card pins at top: 12vh + i*20px; earlier cards scale down to .94 and dim to .6 as the next arrives). Cards are wide (max 1000px), 60svh tall on desktop, auto on phones (min 340px).
  1. **"WhatsApp us."** "Tell us about your business and send your current site if you have one. Ten minutes, no forms." Visual right: a mini WhatsApp chat.
  2. **"See it first."** "We send you a free preview of your new homepage before you pay anything." Visual: a mini browser frame with a shimmer.
  3. **"We build it."** "50% deposit, then we build the full site. You check it on your phone and ask for changes." Visual: a progress bar that fills when the card is active, with 3 checklist items ticking.
  4. **"You go live."** "Pay the balance, we launch, and connect your domain and Google profile." Visual: a URL bar "yourbusiness.co.za" with a green lock and a pulse.
  Each card: big mono step number "01", title H3 → larger (clamp(28px,3.4vw,44px)), body ink2, visual on the right half (below on phones). Visuals are pure HTML/CSS.

### 6. Prices (`#prices`)
- H2: "Clear prices. Once-off." Line: "No surprise quotes. Pick a package, add care if you want us to look after it."
- 3 cards (brand-kit price cards). Professional is the gradient-glow card with a "Most chosen" → NO, that's a claim. Use the tag "Recommended". Cards tilt up into place on enter (rotateX 12° → 0, y 40 → 0, opacity), stagger .1.
  - **Essential, R6,500**: "A sharp one-page site that gets you found and contacted." Includes: One scrolling page · Mobile-first design · WhatsApp and call buttons · Google Maps and hours · Basic Google setup · Live in about 1 week.
  - **Professional, R12,500** (Recommended): "A full site with motion that makes people stop scrolling." Includes: Up to 5 sections or pages · Scroll story and animations · Your reviews pulled in from Google · Google Business Profile setup · Speed and SEO setup · Live in about 2 weeks.
  - **Premium, R24,500**: "A one-of-a-kind site built around your brand, like this one." Includes: Everything in Professional · Custom motion pieces · Up to 10 pages · Copywriting for every page · Priority changes for 30 days · Live in about 3–4 weeks.
  - Button on each: "Start with Essential/Professional/Premium" → WhatsApp with prefilled text "Hi BrandMasters, I'm interested in the {name} package."
- Below: a slim row "Care R500/month: hosting, security, speed, small changes." and "Care Plus R1,200/month: everything in Care, plus monthly updates and a Google report." with a toggle look (two pills).
- Mono small print: "50% deposit to start, balance at launch. EFT. Your domain and logins are always yours."
- Mark ALL package contents and timelines with an HTML comment `<!-- DRAFT: Evan to confirm -->`.

### 7. Real work (`#work`)
- H2: "Our own work." 
- One big card: left text "TappedFlow" (H3), "A voice-typing app for Windows. We designed the brand and built the website." mono tags: Brand · Website · App. Link "Visit tappedflow.com ↗" (rel noopener). Right: a coded mock of a dark app window with an animated waveform (bars scaling Y in a loop, paused offscreen) and a line of text typing out "Talk. It types." Mark with `<!-- DRAFT: confirm wording with Evan -->`.
- Under it, a quiet line: "Your site could be next. We're taking on new Johannesburg businesses now." (no numbers)

### 8. Questions (`#faq`)
- H2: "Questions." Accordion (brand-kit FAQ style; only one open at a time; height animated via grid-template-rows 0fr→1fr trick, which is fine outside scroll scenes). Answers short:
  1. **How long does it take?** "About 1 week for Essential, 2 for Professional and 3 to 4 for Premium, from the day we have your content."
  2. **What do you need from me?** "Your logo if you have one, a few photos of your work or space, and 10 minutes on WhatsApp. We write the words."
  3. **I already have a site. Can you work with it?** "Yes. Send us the link. We keep what works, fix what doesn't, and move it across."
  4. **Who owns the site?** "You do. Your domain, your site and every login are yours. If you ever leave, we hand it all over."
  5. **How do I pay?** "50% deposit to start, the rest when it goes live. EFT."
  6. **Do I need the monthly care plan?** "No, it's optional. It covers hosting, security, speed and small changes so you never have to think about it."
  7. **Will it work on all phones?** "Yes. We test on iPhone and Android, big and small, and keep it light so it opens fast on mobile data."
  Mark answers 1, 5 with `<!-- DRAFT: Evan to confirm -->`.

### 9. End (`#start`): the payoff, interactive
- Big rounded end card (brand-kit end card) with the ember glow that follows the cursor.
- H2: "Let's build yours." with "yours." in gradient.
- Line: "Type your business name and see your site first."
- An input (label visible: "Business name", placeholder "e.g. Thandi's Kitchen") with maxlength 40. As they type, a small phone mock beside it (desktop: right; phone: below) live-updates: a dark mini site showing their name as the headline in our style, mono line "Johannesburg", a green WhatsApp pill, and an ember glow. Empty input shows "Your Business".
- Button "Send this to us on WhatsApp" → `https://wa.me/27810898573?text=` + encodeURIComponent("Hi BrandMasters, I'd like a site for {name}.") (or without name if empty). Also show the number as plain selectable text under it: "or WhatsApp 081 089 8573".
- Below the card: giant faint wordmark "BrandMasters" that rises slightly with scroll (parallax y), letter-spacing -.06em, gradient from ink 14% to transparent, cropped by the page bottom.

### 10. Privacy page
`site/privacy.html` in the same style (simple, readable, nav back home). POPIA content: who we are (BrandMasters, Johannesburg web design studio, contact via WhatsApp 081 089 8573); what we collect (only what people send us on WhatsApp, e.g. name, business name, number; the site has no forms that store data and no ad trackers); why (to reply and quote); we don't sell or share it; how long we keep it (as long as the project needs, or until they ask us to delete it); their POPIA rights (ask what we hold, correct or delete it) via WhatsApp; complaints: the Information Regulator of South Africa (inforegulator.org.za). Mark `<!-- DRAFT: Evan to confirm -->`. Linked from the footer and listed in sitemap.xml.

### 11. Footer
- Small row: "BrandMasters · Web design studio · Johannesburg, South Africa" · "They see your site first." · "© 2026". Links: How it works, Prices, Questions, WhatsApp, Privacy.

## SEO and sharing (in index.html head)
- `<title>Web Design Johannesburg | BrandMasters: They see your site first</title>`
- meta description (≤155 chars): "Premium websites for South African businesses. Clear once-off prices from R6,500, WhatsApp-first, built fast for every phone. Based in Johannesburg."
- canonical `https://brandmasters.co.za/`, `lang="en-ZA"`, theme-color #050505, OG + Twitter tags with `assets/og.png` (1200×630: black, ember glow, "They see your site first." + "BrandMasters · Web design, Johannesburg"), favicon.svg.
- JSON-LD: `ProfessionalService` (name BrandMasters, url, telephone +27810898573, areaServed: Johannesburg, Gauteng, South Africa; address locality Johannesburg, region Gauteng, country ZA; priceRange "R6,500–R24,500"; slogan; `makesOffer` with the 3 packages as Offer with price + priceCurrency ZAR) and `FAQPage` with the 7 Q&As. No person, no email.
- All story text in the DOM as text (captions included), so Google reads "website", "Johannesburg", "web design", "South Africa" naturally.
- `robots.txt` (allow all, sitemap line), `sitemap.xml` with the home URL.
- Images: width/height set, `alt` text, `loading="lazy"` for everything below the first screen.

## Performance budget
- Initial transfer (HTML+CSS+JS+fonts+first image) under 350 KB. JS: only gsap+ScrollTrigger+lenis (+ inline script).
- No layout shift: every mock has fixed dimensions.
- Pause loops (marquee, waveform, word roll, blob drift) when offscreen via IntersectionObserver.
- Low-power fallback decided ONCE at load: if `navigator.hardwareConcurrency <= 4 && /Android/.test(navigator.userAgent)` OR `navigator.connection?.saveData`, drop grain, blob drift and the cursor glow; keep the story.

## Testing (write results to CHECKS.md)
- Playwright (`/opt/node22/lib/node_modules/playwright/index.mjs`, Chromium at /opt/pw-browsers) at 390×844 (mobile UA, hasTouch, isMobile), 768×1024 and 1440×900: no console errors, `scrollWidth === innerWidth`, screenshots at ~30 scroll positions through the story (save to `/tmp/claude-0/-home-claude/a050df64-c923-5367-88f9-d539c0739886/scratchpad/site-shots/`), plus each section.
- Use Lenis-free scrolling in tests (`window.scrollTo` then wait 400ms) and also test with reduced motion emulated.
- Look at the screenshots yourself. Check: no overlapping text, captions never stacked, the spotlight frames the right thing each moment, the switch arch fully covers, rebuilt site readable, cards not clipped, nothing cut off at 390.
- Measure: total bytes transferred on load (from the Playwright network log), and Lighthouse if available (`npx lighthouse` may not be installed; if not, say so).
