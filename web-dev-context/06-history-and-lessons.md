# History and lessons

## Before 17 Oct 2026
Evan had saved skills (web-ultra, web-dev-studio, evan-webdev, brand-kit-builder) and demos A to H. He found them sluggish and "slop, good at only one element", and started fresh on 17 Oct. Don't bring back their rules. One exception he asked to keep: the realistic phone standard (in `03-design-direction.md`).

## TappedFlow (the one build that worked)
TappedFlow (tappedflow.com) is Evan's only real portfolio piece and the quality bar. Evan's account: there were no demos, Claude was told to be creative, he offered up to 20 21st.dev examples and it used about 3.
The TappedFlow repo (`Evand1234/TappedFlow`) holds the TappedFlow *desktop app*, not the website; the website's own notes are on Evan's PC (`MD FILES\tappedflow-context.md` and the TappedFlow folder). The app brief shows the same pattern: it opened with "Everything below is a framework, not a cage. Where you know a better tool... use it and tell me why", named a benchmark product to match, set hard limits (cost, speed), and said "do the riskiest thing first and prove it before building on it."

## Round 1 demos (Bob, on Evan's PC)
- Receipt: favourite, well built, but too plain.
- Factory with people arriving: dropped.
- Marble run: nice continuous thread, but nothing to do with websites.

## Round 2
- **Loved:** a short motion piece taking one business from start to finish. This is the seed of the showcase.
- The rest stuck to the receipt format again.

## V1 site
Underwhelming. Hero cool but distracting and unrelated to what we do. Phones bad (small picture inside the frame, overlapping text). Builder lacked direction and resources.

## V2 site (18 Oct 2026, now in `archive/v2-static-site/`)
Brief: a 35 KB "master brief" asking for two complete sites in one go, with a scene-by-scene storyboard (Google result, slow load, pop-ups, 20-minute timer, patience meter, the site crumpled into a box, our site arriving), black marble, a transition map for every scene, and a list of ten banned ideas.
What came back: one site, not two. Plain HTML/CSS/JS with a hand-made scroll engine. Commits span about 20 minutes. Evan's verdict: **"slop"**, and **glitchy**.
Likely causes of the glitchiness (from reading the code, not tested on a phone): no scroll smoothing; a progress value written onto whole sections every frame, which makes the browser restyle everything inside them; a "lite mode" that switches on mid-scroll and visibly pops; re-measuring the page when the iPhone address bar moves. Photos were amateur free images from Wikimedia Commons.

## V3 site (18 Oct 2026, built in the cloud, PR #3, parked)
Built a full Next.js site in `site/` (now `archive/v3-cloud-site/`) in one go after Evan said "continue" and "go faster". Evan's verdict: built without permission (he wanted planning and elements first), and **"very basic, very boring, very bland"**, not premium. It also used a barber shop as the example and a cartoon "bad site", ignoring his repeated instruction about the realistic text-heavy bad site. Now firstcheck rules 1, 3 and 4. Same day Evan added: ask questions before every task, and send image/video prompts first (rules 1 and 5).

## Lessons (apply these)
1. **Outcome, taste and limits beat storyboards.** The build that worked had a short brief and freedom. The ones that missed had long, prescriptive briefs that also said "be creative": Claude can't do both, so it ticks boxes.
2. **One stage at a time, reviewed.** Asking for everything at once gets a thin pass over everything.
3. **Use proven components.** Hand-rolled motion is where the glitches come from. Use React + Motion/GSAP + Lenis and 21st.dev components.
4. **Evan must see it on his phone early**, via a preview link, not via a written report at the end.
5. **Good images matter as much as code.** Generate them (Higgsfield, Google Flow) rather than settling for amateur free photos.
6. **Standard and polished beats novel and rough** (Evan, 18 Oct).
7. **"Go faster" never means skip a step.** Ask first, show components, get a pick, then one demo, then the site.
8. **Clean is not the same as premium.** A safe, tidy layout reads as bland. Premium needs a strong type moment, real depth (light, shadow, layering), confident motion and great imagery.
9. **Never plan from links you haven't seen.** Cloud sessions are blocked from Dribbble and 21st.dev previews; get a real look first and say plainly what you could and couldn't see.
