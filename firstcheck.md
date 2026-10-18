# firstcheck.md

**Every session reads this file first, before anything else, and follows every rule in it.**
These are Evan's non-negotiables. They beat any other file, brief or prompt. Only Evan adds, changes or removes rules here.

After this file, read `web-dev-context/README.md`.

---

## Rules

### 1. Plan with Opus 5.5, execute with Sonnet 5.5
We always think and plan with **Opus 5.5** first, then build with **Sonnet 5.5**. No exceptions.

- Planning means: reading the context, deciding what to build, choosing references, and writing the plan. That happens on Opus 5.5.
- Executing means: writing the code, styling, testing, fixing. That happens on Sonnet 5.5.
- In Claude Code this is automatic in this repo: `.claude/settings.json` sets the model to `opusplan` (Opus in plan mode, Sonnet once you leave plan mode), pinned to `claude-opus-5-5` and `claude-sonnet-5-5`. Start every task in **plan mode** (Shift+Tab), get the plan approved, then exit plan mode to build.
- If a session can't switch models itself, say so at the start, plan anyway, and tell Evan which model should run the build.

<!-- Add new rules below as 2., 3., ... Keep each rule short: the rule, then how to apply it. -->
