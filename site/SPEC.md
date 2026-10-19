# BrandMasters site: build spec (v1, 19 Oct 2026)

> **SUPERSEDED (19 Oct 2026, 09:28).** Evan rejected the aircon hero and story: no real businesses or trades anywhere. The statue with sunglasses leads and the site should feel like a creative online brand. Kept only for the parts that still apply (tokens, global UI, cursor, sections 2–10 structure, SEO, performance, testing). v2 follows once Evan picks a hero.

Written in the planning pass (Opus). The build pass (Sonnet) follows this exactly; anything unclear goes back as a question, not a guess.
Evan approved: search hero, extra Google pages later, full prices, Claude drafts package contents, free preview offer, TappedFlow as real work, 50% deposit then rest at launch (EFT), no photos (everything drawn in code) except one hero-quality "statue" image.

## What this site is
BrandMasters' own marketing site (Johannesburg web studio). It must feel premium, play like a smooth scroll film, and leave a South African owner knowing: what we do, for whom, how much, how long, how to start. It is also the standard for every future site.

Feel: the Elena Voss template (see `../ref-study/NOTES.md` section 4 and `../ref-study/21st-elena-voss/`): true black, one orange-to-red gradient glow, Host Grotesk at weight 400 in huge sizes, mask line reveals, the hero shrinking into a card, a gradient arch sweep, sticky stacked cards, horizontal card row, big rounded end card with glow. Take the feel; do not copy its layout or words.

## Hard rules
- No invented reviews, ratings, stats, client logos or awards. No "trusted by". No personal name. No email address on the page.
- Never mention or show Gecko Ridge. The bad site is our made-up "Arctic Breeze Air Conditioning".
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

### 1. Hero + story: ONE pinned stage (`#story`), the heart of the site
A single pinned stage (`pin:true`, `scrub:0.8`) ~ `+=900%` scroll on desktop and `+=800%` on phones. Everything in it is driven by one master timeline with labels. Use the demo's approach: a phone made of `.bezel/.screen/.island` and a 390×844 inner screen scaled by `--s` to fit (`--ph: min(70svh, 640px)` desktop, `min(60svh, 540px)` phone). Reuse demo code from `../demos/story-sketch/index.html` where it helps (phone, bad page styles, good page styles) but rebuild the timeline to this script.

**Background**: black with the Elena-style blurred ember blobs (two or three big radial gradients, slowly drifting via CSS keyframes on transform only, low opacity) + a very faint grain (tiny inline SVG noise as background-image, opacity .05) + the cursor glow.

**Beat 0: Intro (plays on load, not scrubbed, ~2.2s)**
- Centre: a search bar card (white-ish glass, 640px max, radius 999px, height 64px, ember focus ring glow) with a small magnifier icon. It TYPES "aircon repair joburg" letter by letter (60ms per letter, with a blinking caret).
- Above it, the H1 reveals line by line through a mask (Elena style): line 1 "They see your", line 2 "site first." where "site first." uses the ember gradient text.
- Below the bar: mono label "Scroll" with a thin animated line.
- Under the H1 (small, ink2, max 34ch): "Before they call, they Google you. Then they judge you in seconds. We build the site that wins that moment."
- Do not wait for the intro to finish before scroll works.

**Beat 1: Results (scrub)**
- The H1 and sub line lift and fade up. The search bar moves to the top of a "results" card that grows below it: 4 result rows (title in blue-ish ink `#8ab4f8` at 90%, a green-ish url line `#9ccc9c`, two grey text lines). Results: "Arctic Breeze Air Conditioning | Home" (arcticbreeze-aircon.co.za), "CoolFix Aircon Joburg", "Polar Air Services", "Joburg Aircon Pros". Do NOT use Google's logo or colours for branding; it's a generic search page.
- A tap indicator (a 34px white ring with a ripple) moves onto the first result and taps (ripple). The first row highlights.

**Beat 2: Into their site**
- The results card scales and morphs into the phone: simplest robust approach: results card fades/scales down to 0.9 while the phone rises from below (y 40% → 0, scale .92 → 1) and the phone screen shows a white loading state (spinner + grey skeleton bars) for a short scrub segment, then the Arctic Breeze bad page.
- From here the layout is: desktop = phone on the right half, a caption column on the left; phone (<820px) = caption block above the phone, phone below, both inside the stage (caption max 3 short lines).
- Caption column contents: mono counter "01 / 05", a one-line headline (H3 size, ink), one line of body (ink2), and 5 progress dots (active = ember).

**Beats 3–7: The five moments (one at a time, never stacked)**
Inside the phone, a "spotlight" layer: a dark overlay (rgba(0,0,0,.62)) with a rounded transparent hole that moves to frame the part being talked about (implement as a positioned box with a huge `box-shadow: 0 0 0 999px rgba(0,0,0,.62)` and border-radius 14px; animate its transform/scale only, set its size per moment with fixed pixel values in the 390×844 space; or one element per moment cross-faded). Each moment: spotlight moves → caption crossfades (old out up 12px, new in from 12px below) → hold for a good stretch of scroll → next. Only ONE caption visible at any time.

1. **"A wall of words."** Spotlight on the centred grey paragraph. Body: "They came to see if you can fix it today. Nobody reads this to find out." The page inside the phone is the bad page at the top (header with script logo, centred blue serif title "Welcome to Arctic Breeze Air Conditioning", then ~120 words of grey centred text).
2. **"Where's the number?"** The bad page scrolls down inside the phone (translateY) hunting; a timer chip appears on the phone's top-left outside the screen edge (or in the caption on phones): "Looking for a number 0:00" counting with scrub to 1:52 (tabular-nums, ember). Spotlight follows a tiny grey "Contact us" link buried at the bottom of the text. Body: "It's there. Somewhere. Most people won't keep looking."
3. **"Sign up first?"** A popup slides in over the bad page ("Subscribe to our newsletter for specials!", name/email fields, grey button). Spotlight on the popup. Body: "It asks for their email before it's helped them at all."
4. **"Tiny photos, right at the end."** Popup dismissed (tap ring taps the ×), page scrolls to a grid of 6 small washed-out photo tiles (drawn with CSS gradients, no real photos) under a heading "Gallery". Spotlight on the grid. Body: "Your best work, shrunk and hidden where nobody scrolls."
5. **"Back. Next result."** The tap ring hits a browser back chevron; the phone screen slides right to the search results again; the 2nd result "CoolFix Aircon Joburg" gets tapped. The caption headline: "They just called someone else." Body: "Not because you're worse. Because your site made it hard." The progress dots all fill.

**Beat 8: The switch (the big moment)**
- Caption out. A huge ember gradient arch (Elena "Award Winning" style: a shape with a big curved top edge, full width, from below the viewport) sweeps up over the whole stage, covering phone and captions. On it, centred, the line reveals with the mask effect: "Now picture it like this." (H2 size, white). Hold.
- The arch continues up and off the top (or shrinks into the phone screen) revealing the stage again: black background, the phone now centre, showing OUR rebuilt Arctic Breeze site.

**Beat 9: Rebuilt (the statue site)**
Our rebuilt Arctic Breeze site inside the phone (390×844 coded page, dark, premium):
- Top bar: small "ARCTIC BREEZE" wordmark (mono, letter-spaced) left, round green WhatsApp icon button right.
- Hero: the statue image (marble bust wearing lime-green sport sunglasses) filling the upper ~60% of the screen, black background with a cool blue-white rim light. Over the bottom of the image, a huge headline "Stay cool." (white, 64px, tight) and a line "Same-day aircon repairs across Joburg." and two buttons: green "WhatsApp us" (with icon) and outlined "See prices".
- Below (revealed by the inner page scrolling a little): three compact cards "Repairs from R650", "Installs", "Services", each a single line; then 4 large photo-like tiles (CSS gradient placeholders, cool blues) in a 2×2 grid.
- Desktop: as the rebuilt site lands, the left caption column returns with headline "Same business. Built by BrandMasters." and three ticks that appear one by one: "WhatsApp in one tap", "Prices up front", "Opens fast on any phone". On phones these become the caption above the phone.
- Timer chip changes to green: "Time to WhatsApp 0:08".
- A tap ring taps the WhatsApp button inside the phone and a tiny WhatsApp chat sheet slides up inside the phone: "Hi! Can you come today?" (sent bubble) → "Yes, 2pm works. 👍" (received). (This is the only emoji, inside the mock chat. Keep it.)
- End of pin. The phone scales down slightly and the stage unpins into the next section.

**Statue image**: Evan will supply it from this prompt: "Classical white marble bust of a Greek statue, three-quarter view, wearing modern lime-green wraparound sport sunglasses, dramatic studio lighting, deep black background, warm orange rim light from the right, ultra sharp, editorial, 4:5". Until then, `assets/statue.webp` is a stand-in: render one with code (canvas or SVG → PNG via Playwright → cwebp or sharp if available, else PNG): a pale grey-white classical bust silhouette (head, neck, shoulders as soft gradient shapes) with a lime-green (#c6f432) wraparound sunglasses band and an orange rim light. It just needs to read as "statue with sunglasses" at phone size. Fixed width/height attributes, `decoding="async"`, under 60 KB.

### 2. Before / After (`#compare`): interactive
- H2: "Same company. Spot the difference." Small ink2 line: "Drag the line."
- A large rounded frame (16:10 desktop, 4:5 phone) showing two desktop-browser-sized mocks stacked: left = the bad Arctic Breeze page (desktop version: white, centred serif title, grey wall of text, nav of 8 plain links), right = our rebuilt Arctic Breeze page (desktop version: black, statue on the right, "Stay cool." headline left, WhatsApp + prices buttons, three service chips). A vertical handle (2px white line + 44px round knob with ‹ › arrows) splits them; drag (pointer events, works with touch and mouse, keyboard arrows when focused) sets `clip-path: inset(0 0 0 X%)` on the top layer. On first view it auto-sweeps 50% → 70% → 30% → 50% once to show it's draggable.
- Under it, two mono labels at each side: "Before" and "After".

### 3. Who it's for (`#who`): kinetic type, no photos
- H2 reveals: "For every business people look up."
- A huge single line below: "Your [word] deserves better." where [word] cycles (vertical slot-machine roll, transform only, every 1.6s, pauses when offscreen): café, salon, guesthouse, practice, workshop, shop, studio, restaurant, gym, clinic. The word is in ember gradient.
- Two marquee rows of business types in outline pills, scrolling in opposite directions slowly (CSS animation on transform; speed nudged by scroll velocity on desktop): "Cafés · Salons · Guesthouses · Dentists · Plumbers · Electricians · Restaurants · Boutiques · Gyms · Vets · Mechanics · Photographers · Lawyers · Florists · Aircon · Bakeries".
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
- Mono small print: "50% deposit to start, balance at launch. EFT."
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
  4. **Who owns the site?** "You do. Your domain, your content. If you ever leave, we hand it all over."
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

### 10. Footer
- Small row: "BrandMasters · Web design studio · Johannesburg, South Africa" · "They see your site first." · "© 2026". Links: How it works, Prices, Questions, WhatsApp.

## SEO and sharing (in index.html head)
- `<title>Web Design Johannesburg | BrandMasters: They see your site first</title>`
- meta description (≤155 chars): "Premium websites for South African businesses. Clear once-off prices from R6,500, WhatsApp-first, built fast for every phone. Based in Johannesburg."
- canonical `https://brandmasters.co.za/`, `lang="en-ZA"`, theme-color #050505, OG + Twitter tags with `assets/og.png` (1200×630: black, ember glow, "They see your site first." + "BrandMasters · Web design, Johannesburg"), favicon.svg.
- JSON-LD: `ProfessionalService` (name BrandMasters, url, telephone +27810898573, areaServed: Johannesburg, Gauteng, South Africa; address locality Johannesburg, region Gauteng, country ZA; priceRange "R6,500–R24,500"; slogan; `makesOffer` with the 3 packages as Offer with price + priceCurrency ZAR) and `FAQPage` with the 7 Q&As. No person, no email.
- All story text in the DOM as text (captions included), so Google reads: "aircon", "Johannesburg", "web design" naturally appear.
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
