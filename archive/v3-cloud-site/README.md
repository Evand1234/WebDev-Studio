# BrandMasters site

To see it on your computer: open a terminal in this folder, run `npm install`, then `npm run dev`, and open http://localhost:3000 in your browser.

(`npm run preview:single` builds one self-contained file at `preview/index.html`.)

## Status (18 Oct 2026)
All sections are integrated (Hero, Showcase, Work, How it works, Packages, FAQ, Contact). See the end of PLAN.md for QA numbers and what is left. Rebuild the single-file preview with `npm run preview:single`.

`npm run preview:single` runs a separate build (BM_SINGLE=1), so run `npm run build` again afterwards if you want `out/` to be the production build with inlined CSS.
