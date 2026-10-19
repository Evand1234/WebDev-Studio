# BrandMasters site plan (18 Oct 2026, waiting on Evan's picks)

Step 1 of 3 (components). Evan saw the first board, liked it at a glance, and asked for plain words, a top-to-bottom plan and a small fun demo. Both are ready:
- Components board (plain words, options, my picks, the plan): https://claude.ai/artifact/KT9KQ5ejeHD9Ayr7H9tvJS (source: `plans/components-board/`)
- Small scroll demo: https://claude.ai/artifact/7FGuAZYe2m6xCjxiR2iq2C (source: `demos/story-sketch/index.html`, GSAP + ScrollTrigger + Lenis from CDNs)

Evan's references were meant as a general picture of "modern", not a checklist. What I took from them is in `ref-study/NOTES.md` (captured on his PC).

## My picks (not approved yet)
Black (#050505) + ember orange-red (#ff7a1a to #e5261a). One clean font (Host Grotesk), small mono labels (Geist Mono).

## The page, top to bottom
1. **Top:** black, soft ember glow, "They see your site first.", WhatsApp button. The headline rises in line by line; on scroll, the top shrinks into a phone.
2. **Their site:** inside the phone, an average aircon company ("Arctic Breeze", made up): pop-up first, centred grey text, photos at the bottom. It loads slowly, the pop-up lands, the page scrolls; the visitor's thoughts pop up as glass cards beside the phone; a "time on site" timer counts up to 1:52. The visitor leaves.
3. **The switch:** an ember wave sweeps up and washes it away: "Now picture it like this."
4. **Our side:** the same business rebuilt in the same phone (photo, one line, WhatsApp). Good thoughts pop up; the timer becomes "time to WhatsApp 0:08". Then a sideways row of phones: café, shop, salon, guesthouse (styles we build, never presented as clients).
5. **How it works:** four steps that light up as you scroll.
6. **Prices:** three dark cards, Professional glows ember; a switch shows care plans.
7. **FAQ:** simple list, ember dot on the open question.
8. **End:** glowing card, "Let's build yours.", WhatsApp button, giant cropped BrandMasters wordmark.

## Next
Evan picks (or says "go with your picks"), then ONE demo of the whole page = the draft of the site. Photos come from `/mnt/project-files/brandmasters-md/09-image-and-video-prompts.md` (he makes them in Google Flow).

## Brand kit (19 Oct 2026)
Evan asked for a brand-kit style page: part 1 = what we're building (name, colour, font, page order, motion), part 2 = every element in our style. Live: https://claude.ai/artifact/HKfnBfV4Ea9txxi1Ak4YQn. Source: plans/brand-kit/index.html. Price-card contents and FAQ answers are placeholders until Evan confirms them.

## The real site (19 Oct 2026)
- Evan: no real businesses or trades anywhere (aircon dropped); the statue with sunglasses leads; feel like a creative online brand. Hero A "Glasses on" (dull statue, ember mirror glasses drop on by scroll, glow on, fly into a lens). The before site is the made-up brand "Aurelius" on an ordinary WORKING template (forgettable, not broken), five moments one at a time with a spotlight, then the same brand rebuilt.
- Spec: site/SPEC.md (v2). Build: site/ (plain HTML + GSAP/ScrollTrigger + Lenis, vendored; chosen over Next.js for speed, any-device support and static SEO). Tests: site/CHECKS.md.
- Preview: https://claude.ai/artifact/6kAQ6fCZRtXj5DDfexZm7G (CDN scripts swapped in for the preview only).
- Statue is a drawn stand-in until Evan supplies the photo (front view, no glasses; prompt in the thread). Swap assets/statue.webp, re-align with --gx/--gy/--gw and --lx/--ly.
- DRAFT, Evan to confirm: package contents and timelines, FAQ 1 and 5, TappedFlow wording, privacy page.
