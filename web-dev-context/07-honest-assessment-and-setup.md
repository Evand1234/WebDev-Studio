# Honest assessment and the setup we're switching to (18 Oct 2026)

## Were we limiting Claude? Yes, but not by giving it too few references.
We limited it by **over-directing it**, by **pointing it at the wrong target**, and by **taking away its tools**.

1. **Over-directed.** The V2 master brief was 35 KB: a scene-by-scene storyboard, a required transition table, four depth layers, a list of ten banned ideas, two full sites in one go, and "creativity first, surprise us" on top. Those pull in opposite directions. When a brief dictates every scene, Claude spends its effort ticking the boxes, and the result reads like a checklist. TappedFlow, the one build that worked, had the opposite: a short brief with the outcome, a benchmark, hard limits, and "a framework, not a cage".
2. **Wrong target.** Every brief since round 1 asked for something nobody has seen before (crumpling a site into a box, marble worlds, colour-world chapters, a torch cursor). Hard, novel effects are exactly where things get glitchy and look "off". You've now said you want a clean, standard, premium site. That's a different and much easier target, and Claude is good at it by default.
3. **No tools.** The builds were plain HTML/CSS/JS with no framework (an old skill rule). 21st.dev components are React + Tailwind + Motion/GSAP, so none of the references you gave could actually be used, and the scroll motion had to be written from scratch. That hand-made scroll engine is the most likely cause of the glitches you saw.
4. **The context never reached the builder.** Notes lived in this project's files and in old skills; Bob on your PC only got what was pasted in. Now it's all in this repo.
5. **No early look.** You saw the result only at the end, through a written report. Reports say "zero console errors" while the thing feels wrong on a phone.

## Why the outputs weren't landing (short)
Long prescriptive briefs + an experimental target + no component library + one giant build + no phone preview until the end. Claude didn't lack ability; it was given a hard, contradictory job without its normal tools.

## Can Claude already do this well?
Yes. A clean, premium, modern marketing site with smooth scroll motion and a realistic phone is well within what Claude does by default, **if** it has: the facts (`01-business.md`), the taste and must-haves (`03-design-direction.md`), the right stack and smooth-motion rules (`04-...`), real components to start from (`05-...`), good images, and a stage-by-stage review with you looking on your phone. It does **not** need storyboards. What it does need told explicitly: the honesty rules, the phone standard, "standard modern, not experimental", and to check smoothness before showing you.

## The setup
### 1. This repo is the memory (done)
`firstcheck.md` (your rules), `CLAUDE.md` (makes every Claude Code session read them automatically), `web-dev-context/` (everything else), `.claude/settings.json` (Opus 5.5 plans, Sonnet 5.5 builds, automatically). Site code goes in `site/`.

### 2. One hub, focused build sessions (your friend's idea, and it's what this project already is)
- The **WebDev-Studio project is the hub.** You talk to it in one place. It plans on Opus 5.5 and starts a **thread session per task** on this repo (e.g. "build the hero"). Each thread has one clear goal, works on its own branch, and reports back in its thread.
- **Parallel, but not 7 at once for one site.** First the design system must exist (colours, fonts, phone component), or parallel sessions each invent their own look and clash. After that, 2 or 3 sections can be built at the same time. Seven parallel sessions makes sense later, when there are several client sites at once.
- **Retire the copy-paste Bob.** Build sessions run in the cloud against this repo, with a browser for screenshots. Your PC is no longer needed for building.

### 3. A preview link for every change
Connect this repo to **Vercel** (free). Every push then gets its own link you open on your iPhone. You judge by looking; this lets you look after every stage instead of at the end.

### 4. Connectors and settings you need
- **Vercel**: needed (hosting + preview links). Connect the repo in Vercel once; the Vercel connector in Claude is a nice extra so Claude can read deploy status.
- **Network access for build sessions**: the project's cloud environment currently blocks 21st.dev. Add a cloud environment in Project settings with `21st.dev` (and the default package managers) allowed, so sessions can install components.
- **Higgsfield**: already connected; use it for photos instead of amateur free images.
- **GitHub**: already connected. Nothing else needed right now.

### 5. Housekeeping
- This repo is **public**. It holds business notes and the email in the old site code. Make it private (GitHub → Settings → Danger zone → Change visibility). Vercel works fine with private repos.
- The repo's default branch is called `claude/brandmasters-site-1`. Renaming it to `main` (GitHub → Settings → Branches) will make things less confusing.

## The build plan (firstcheck rules 1, 3, 4, 5)
0. **Questions and prompts first.** Ask Evan what you need to know, say what you can't access, and send any image or video prompts.
1. **Components board.** Candidates for each part of the site, from references you've actually looked at, with a pick and why. Evan chooses. *Ready 18 Oct, waiting on his picks: see `09-site-plan.md`.*
2. **One demo.** One good demo of the whole page from the chosen components, which is the draft of the site. Evan approves it on his phone.
3. **The site**, built from the approved demo.

The full site built on 18 Oct is parked in `archive/v3-cloud-site/` (Evan: bland, and it skipped the steps). Its plumbing (device components, single-file preview script, pin technique) can be reused; its look can't.

## The prompt for a build session (keep it this short)
> Read `firstcheck.md`, then `web-dev-context/`. Ask me what you need to know first, and send any image prompts straight away. Then do the current step from `07-honest-assessment-and-setup.md` and stop when it's done. Plan first and show me the plan with the references you picked. Be creative inside the design direction. Check it at 375 px and 1440 px and give me the preview link.
