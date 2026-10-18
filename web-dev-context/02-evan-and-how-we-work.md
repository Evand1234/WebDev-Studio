# Evan, and how we work

## Evan
- Runs BrandMasters. **Can't read code.** Judges everything by looking and scrolling, on an **iPhone 13 mini (375 px wide)** and a PC. Nothing is done until it has been seen working at 375 px.
- Keeps briefs short and loose on purpose. Fill the gaps with good judgement; don't come back with a list of questions you could have answered yourself.
- Wants it straight. If something is wrong, or we're heading somewhere unproductive, say so plainly. Don't reassure, don't pretend things are fine.
- Writes in plain, casual English. Answer the same way: short, no jargon, no code in messages to him.

## How to report to Evan
- After each stage: what you built, how he can look at it (a link he can open on his phone), and anything you struggled with, skipped or changed. A short honest list of weaknesses beats "everything's perfect".
- Never say something works unless you checked it. Say what you tested and how (e.g. "screenshots at 375 px and 1440 px"), and what you couldn't test (e.g. "not tried on a real iPhone").
- Ask only for decisions that are really his (taste, money, anything that can't be undone). Offer a recommendation with the question.

## Where things live
- **This repo** is the memory. Context in `web-dev-context/`, rules in `firstcheck.md`, code in its own folder per site.
- The Claude **project "WebDev-Studio"** is where Evan plans and reviews. It can start build sessions on this repo directly.
- Older setup (being replaced, see `07-honest-assessment-and-setup.md`): a Claude Code session on Evan's PC called "Bob the Builder" built in `C:\dev\brandmasters-site`, and Evan copy-pasted prompts and reports between it and the project.
- Images: Google Flow (Evan's account) and Higgsfield (connected to the project) can generate photos. Prefer generated or properly licensed photos over amateur free photos.

## Process (short version)
1. **Plan on Opus 5.5** (see `firstcheck.md`): read context, pick references, write a short plan, show Evan what it'll look like (e.g. the 21st.dev links you're basing it on).
2. **Build on Sonnet 5.5**, one stage at a time.
3. Check it yourself in a browser at 375 px and 1440 px before Evan sees it.
4. Push, give Evan a preview link, get his reaction, then move on.
