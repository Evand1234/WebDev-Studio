# firstcheck.md

**Every session reads this file first, before anything else, and follows every rule in it.**
These are Evan's non-negotiables. They beat any other file, brief or prompt. Only Evan adds, changes or removes rules here.

After this file, read `web-dev-context/README.md`.

---

## Rules

### 1. Ask Evan questions first. Never start on assumptions
Before starting any task, ask Evan the questions needed to understand exactly what he wants. Never start building on assumptions. Be honest about what you can and can't access.

- This applies to every prompt, every time. If anything is unclear, ask before doing any work.
- Say plainly what you can't reach (blocked sites, missing tools, no credits) and what that limits, before you start, not after.
- Never make it sound like things are going well when they aren't.

### 2. Plan with Opus 5.5, execute with Sonnet 5.5
We always think and plan with **Opus 5.5** first, then build with **Sonnet 5.5**. No exceptions.

- Planning means: reading the context, deciding what to build, choosing references, and writing the plan. That happens on Opus 5.5.
- Executing means: writing the code, styling, testing, fixing. That happens on Sonnet 5.5.
- In Claude Code this is automatic in this repo: `.claude/settings.json` sets the model to `opusplan` (Opus in plan mode, Sonnet once you leave plan mode), pinned to `claude-opus-5-5` and `claude-sonnet-5-5`. Start every task in **plan mode** (Shift+Tab), get the plan approved, then exit plan mode to build.
- If a session can't switch models itself, say so at the start, plan anyway, and tell Evan which model should run the build.

### 3. Show the components first. Never build a full site without Evan's go-ahead
Before building, show Evan the components you want to use (real references you have actually looked at, a sketch, your pick and why). He picks. Only then build.

- "Continue" or "go faster" means faster inside the step he approved, never permission to skip ahead.
- If you're unsure whether he approved the next step, ask. Don't build to find out.

### 4. Order: components, then one demo, then the site
1. **Components:** a board of candidate components for each part of the site, with references and a pick for each. Evan chooses.
2. **One demo:** one good demo built from the chosen components. It is the draft of the site, not a pile of separate demos. Evan approves it.
3. **The site:** built from the approved demo.

Stop for Evan's go-ahead after each step.

### 5. Send image and video prompts first
If the work needs any images or videos, the very first thing you send Evan is the exact prompts (one per file, with aspect ratio, ready to paste into Google Flow or Higgsfield). He makes them while you work and drops them in. Never fall back on random stock photos without telling him.

<!-- Only Evan adds rules. Keep each rule short: the rule, then how to apply it. These set the process; they never limit creativity. -->
