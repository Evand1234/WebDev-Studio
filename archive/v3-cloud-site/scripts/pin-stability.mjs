// Proves the showcase pin never shifts the page: scroll fast into the middle of the showcase right after load
// (4x CPU), then check that page height, the showcase top and layout-shift score are identical once GSAP is running.
// Usage: node scripts/pin-stability.mjs [url]   (needs a static server on the built `out/` folder; Playwright installed)
import { chromium } from "playwright";
const url = process.argv[2] || "http://localhost:4173/";
const b = await chromium.launch(); let bad = 0;
for (const [w, h, tag] of [[1440, 900, "1440"], [375, 812, "375"]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, isMobile: w < 500, hasTouch: w < 500, deviceScaleFactor: 1 });
  const p = await ctx.newPage(); const errs = [];
  p.on("pageerror", (e) => errs.push(e.message)); p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  const cdp = await ctx.newCDPSession(p); await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await p.addInitScript(() => { window.__cls = 0; new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true }); });
  await p.goto(url, { waitUntil: "commit" });
  await p.waitForSelector("#showcase .sc__track", { state: "attached" });
  const snap = () => p.evaluate(() => { const s = document.getElementById("showcase"), t = s.querySelector(".sc__track"); return { docH: document.documentElement.scrollHeight, secTop: Math.round(s.getBoundingClientRect().top + scrollY), trackH: Math.round(t.getBoundingClientRect().height), cls: window.__cls }; });
  const before = await snap();
  // fast flick to the middle of the showcase, well inside the 300 ms window
  await p.evaluate(() => { const t = document.querySelector("#showcase .sc__track"); const top = t.getBoundingClientRect().top + scrollY; scrollTo(0, top + (t.offsetHeight - innerHeight) * 0.5); });
  const flicked = await snap();
  // GSAP, ScrollTrigger and the timeline load and initialise: wait until the middle beat is showing
  const t0 = Date.now();
  await p.waitForFunction(() => +getComputedStyle(document.querySelectorAll(".sc-beat")[2]).opacity > 0.9, null, { timeout: 30000 }).catch(() => {});
  const initMs = Date.now() - t0;
  const after = await snap();
  const state = await p.evaluate(() => ({ y: Math.round(scrollY), stageTop: Math.round(document.querySelector("#showcase .sc__stage").getBoundingClientRect().top), visibleBeat: [...document.querySelectorAll(".sc-beat")].map((e) => +getComputedStyle(e).opacity > 0.5)}));
  const ok = state.visibleBeat[2] && before.docH === after.docH && before.secTop === after.secTop && after.cls === 0 && state.stageTop === 0;
  if (!ok) bad++;
  console.log(tag, ok ? "PASS" : "FAIL", JSON.stringify({ before, flicked, after, state, initMsAfterFlick: initMs, errs }));
  await ctx.close();
}
await b.close(); process.exit(bad ? 1 : 0);
