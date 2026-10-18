// Generates logo SVGs, favicon set and OG image. Run: node scripts/make-brand.mjs (needs wordmark.json from brand/wordmark.py)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public/brand");
fs.mkdirSync(out, { recursive: true });
const wm = JSON.parse(fs.readFileSync(path.join(root, "brand/wordmark.json"), "utf8"));

const C = { ink: "#0f1b22", slate: "#3f6f82", slateDeep: "#345d6e", mint: "#a7e2d1", rose: "#e7a9b5", night: "#0b151b", paper: "#f6f8f8" };
// Mark on a 64 grid: rounded tile + a "B" made of two stacked building blocks (one white, one mint).
const TOP = "M19 13H36a9 9 0 0 1 0 18H19Z M28 19.5H34.5a2.5 2.5 0 0 1 0 5H28Z";
const BOT = "M19 33H40a9.5 9.5 0 0 1 0 19H19Z M28 39.5H38a2.5 2.5 0 0 1 0 5H28Z";
const tones = {
  light: { tile: C.slate, top: "#ffffff", bot: C.mint },   // for light backgrounds
  dark: { tile: C.mint, top: C.night, bot: C.slateDeep },  // for dark backgrounds
};
const markInner = (t, tile = true) =>
  (tile ? `<rect width="64" height="64" rx="15" fill="${t.tile}"/>` : "") +
  `<path fill-rule="evenodd" fill="${t.top}" d="${TOP}"/><path fill-rule="evenodd" fill="${t.bot}" d="${BOT}"/>`;
const markSvg = (tone, size = 64) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}" role="img" aria-label="BrandMasters">${markInner(tones[tone])}</svg>`;

const sc = 0.5, textW = wm.width * sc, capH = wm.cap * sc, gap = 16;
const lockup = (tone) => {
  const ink = tone === "light" ? C.ink : "#ffffff";
  const W = 64 + gap + textW;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W.toFixed(1)} 64" width="${W.toFixed(0)}" height="64" role="img" aria-label="BrandMasters">${markInner(tones[tone])}<path fill="${ink}" transform="translate(${64 + gap} ${(32 + capH / 2).toFixed(2)}) scale(${sc})" d="${wm.d}"/></svg>`;
};
const w = (f, s) => fs.writeFileSync(path.join(out, f), s);
w("mark-light.svg", markSvg("light")); w("mark-dark.svg", markSvg("dark"));
w("logo-horizontal-light.svg", lockup("light")); w("logo-horizontal-dark.svg", lockup("dark"));
// Favicon: same mark, slightly larger blocks read better at 16px (viewBox crop tightens margins)
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="${C.slate}"/><g transform="translate(32 32) scale(1.12) translate(-31.5 -32.5)"><path fill-rule="evenodd" fill="#fff" d="${TOP}"/><path fill-rule="evenodd" fill="${C.mint}" d="${BOT}"/></g></svg>`;
fs.writeFileSync(path.join(root, "public/favicon.svg"), fav);

// ---- PNGs via Playwright (global) ----
const req = createRequire("/opt/node22/lib/node_modules/");
const { chromium } = req("playwright");
const browser = await chromium.launch();
async function shot(html, file, width, height, opts = {}) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const tmp = path.join(root, "brand", "_tmp.html");
  fs.writeFileSync(tmp, html);
  await page.goto("file://" + tmp);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: file, omitBackground: !!opts.transparent });
  await page.close(); fs.unlinkSync(tmp);
}
const svgPage = (svg, size, bg = "transparent") => `<body style="margin:0;background:${bg}"><div style="width:${size}px;height:${size}px">${svg.replace(/^<svg /, `<svg width="${size}" height="${size}" `)}</div></body>`;
// maskable-safe icons: full-bleed tile (no transparent corners) for apple/512 so OS applies its own mask
const fullBleed = (size) => fav.replace('rx="15"', 'rx="0"');
for (const [f, s, round] of [["icon-192.png", 192, true], ["icon-512.png", 512, true], ["apple-touch-icon.png", 180, false]]) {
  await shot(svgPage(round ? fav : fullBleed(s), s), path.join(root, "public", f), s, s, { transparent: round });
}

// ---- OG image ----
const font = (n) => "file://" + path.join(root, "brand", n);
const og = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:B;font-weight:800;src:url(${font("bricolage-800.ttf")})}
@font-face{font-family:B;font-weight:700;src:url(${font("bricolage-700.ttf")})}
@font-face{font-family:O;font-weight:600;src:url(${font("onest-600.ttf")})}
*{box-sizing:border-box}
body{margin:0;width:1200px;height:630px;position:relative;overflow:hidden;background:${C.paper};font-family:O,sans-serif;color:${C.ink}}
.glow1{position:absolute;right:-120px;top:-160px;width:640px;height:640px;border-radius:50%;background:radial-gradient(circle,rgba(167,226,209,.75),rgba(167,226,209,0) 68%)}
.glow2{position:absolute;right:140px;bottom:-260px;width:620px;height:620px;border-radius:50%;background:radial-gradient(circle,rgba(231,169,181,.45),rgba(231,169,181,0) 68%)}
.logo{position:absolute;left:72px;top:64px}
.h{position:absolute;left:72px;top:176px;width:640px;font:800 100px/1.02 B;letter-spacing:-.025em}
.h span{position:relative;display:inline-block;z-index:0}
.h span:after{content:"";position:absolute;z-index:-1;left:-6px;right:-6px;bottom:8px;height:30px;background:${C.rose};opacity:.65;border-radius:8px;transform:rotate(-.8deg)}
.url{position:absolute;left:72px;bottom:62px;display:flex;align-items:center;gap:12px;font:600 26px O;color:${C.slateDeep}}
.url i{width:12px;height:12px;border-radius:50%;background:${C.mint};box-shadow:0 0 0 6px rgba(167,226,209,.45)}
.phone{position:absolute;left:820px;top:60px;width:268px;height:560px;border-radius:44px;background:${C.night};padding:11px;transform:rotate(6deg);box-shadow:0 40px 70px -20px rgba(15,27,34,.45),0 0 0 2px #1d2c35 inset}
.scr{width:100%;height:100%;border-radius:34px;background:#fff;overflow:hidden;position:relative}
.notch{position:absolute;left:50%;top:10px;width:78px;height:22px;margin-left:-39px;border-radius:12px;background:${C.night};z-index:3}
.bar{height:46px;margin-top:40px;padding:0 16px;display:flex;align-items:center;justify-content:space-between}
.bar b{width:22px;height:22px;border-radius:7px;background:${C.slate}}.bar u{width:38px;height:8px;border-radius:4px;background:#dce3e5}
.hero{margin:6px 14px 0;height:200px;border-radius:20px;background:linear-gradient(150deg,${C.slate},${C.slateDeep});position:relative;padding:20px}
.hero i{display:block;height:14px;border-radius:7px;background:#fff;width:80%;margin-bottom:10px}.hero i+i{width:55%;background:${C.mint}}
.hero em{position:absolute;left:20px;bottom:20px;width:96px;height:32px;border-radius:16px;background:${C.rose}}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 14px}
.cards div{height:84px;border-radius:16px;background:#f1f5f6;border:1px solid #dce3e5}.cards div:first-child{background:${C.mint}}
.cards div:nth-child(4){background:#f7e2e7}
.chip{position:absolute;left:660px;top:380px;background:#fff;border:1px solid #dce3e5;border-radius:18px;padding:16px 22px;font:700 24px B;box-shadow:0 18px 40px -16px rgba(15,27,34,.3);display:flex;gap:12px;align-items:center;transform:rotate(-3deg)}
.chip i{width:14px;height:14px;border-radius:50%;background:${C.mint};box-shadow:0 0 0 5px rgba(167,226,209,.5)}
</style><body><div class="glow1"></div><div class="glow2"></div>
<div class="logo">${lockup("light").replace('height="64"', 'height="60"').replace(/width="\d+"/, 'width="' + Math.round((64 + gap + textW) * 60 / 64) + '"')}</div>
<div class="h">They see your site <span>first.</span></div>
<div class="url"><i></i>brandmasters.co.za</div>
<div class="phone"><div class="scr"><div class="notch"></div><div class="bar"><b></b><u></u></div><div class="hero"><i></i><i></i><em></em></div><div class="cards"><div></div><div></div><div></div><div></div></div></div></div>
</body>`;
await shot(og, path.join(root, "public/og.png"), 1200, 630);
await browser.close();
console.log("done");
