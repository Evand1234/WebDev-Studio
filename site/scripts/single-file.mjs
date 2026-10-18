// Turns out/index.html into ONE self-contained file: preview/index.html
// CSS, JS, fonts and images are all inlined. The <!DOCTYPE>, <html>, <head> and <body>
// wrapper tags are stripped (head content comes first, then body content).
//
// Why the script shim: Next's Turbopack runtime identifies each chunk by the `src`
// of document.currentScript. Inline scripts have none, so before every inlined chunk we
// point document.currentScript at a detached <script src="/_next/..."> element. The
// runtime then sees every chunk as already loaded and never tries to fetch anything.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const outDir = path.resolve("preview");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const mime = { ".woff2": "font/woff2", ".woff": "font/woff", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".avif": "image/avif", ".gif": "image/gif", ".ico": "image/x-icon" };
const cache = new Map();
function dataUri(urlPath) {
  const clean = urlPath.split("?")[0].split("#")[0];
  if (cache.has(clean)) return cache.get(clean);
  const file = path.join(root, clean);
  if (!fs.existsSync(file)) throw new Error("Missing asset: " + clean);
  const uri = `data:${mime[path.extname(file).toLowerCase()] ?? "application/octet-stream"};base64,${fs.readFileSync(file).toString("base64")}`;
  cache.set(clean, uri);
  return uri;
}
const isLocal = (u) => u.startsWith("/") && !u.startsWith("//");
const safeJs = (s) => s.replace(/<\/script/gi, "<\\/script").replace(/<!--/g, "<\\!--");

function inlineCss(css, cssPath) {
  const dir = path.posix.dirname(cssPath);
  return css.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g, (m, q, u) => {
    if (u.startsWith("data:")) return m;
    const abs = isLocal(u) ? u : path.posix.normalize(path.posix.join(dir, u));
    return `url("${dataUri(abs)}")`;
  });
}

const htmlTag = html.match(/<html([^>]*)>/i)?.[1] ?? "";
const htmlClass = htmlTag.match(/class="([^"]*)"/)?.[1] ?? "";
const htmlLang = htmlTag.match(/lang="([^"]*)"/)?.[1] ?? "";
const headInner = html.match(/<head>([\s\S]*?)<\/head>/i)[1];
const bodyTag = html.match(/<body([^>]*)>/i)?.[1] ?? "";
const bodyInner = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
let content = headInner + bodyInner;

// 1. drop preloads and prefetch hints (everything is inline)
content = content.replace(/<link[^>]+rel="(?:preload|prefetch|modulepreload)"[^>]*\/?>/gi, "");
// 2. stylesheets
content = content.replace(/<link[^>]+rel="stylesheet"[^>]*>/gi, (tag) => {
  const href = tag.match(/href="([^"]+)"/)[1];
  if (!isLocal(href)) return tag;
  return `<style>${inlineCss(fs.readFileSync(path.join(root, href), "utf8"), href).replace(/<\/style/gi, "<\\/style")}</style>`;
});
// 3. scripts with src (nomodule polyfills are dropped: every browser that can run this page does not need them)
content = content.replace(/<script\b([^>]*?)\ssrc="([^"]+)"([^>]*)><\/script>/gi, (tag, a, src, b) => {
  if (!isLocal(src)) return tag;
  if (/nomodule/i.test(a + b)) return "";
  const attrs = (a + b).replace(/\s+/g, " ").trim();
  let code = fs.readFileSync(path.join(root, src), "utf8");
  // Turbopack runtime: a chunk that already registered itself must not be fetched again.
  if (/loadingStarted/.test(code) && /registerChunk/.test(code)) {
    const re = /(function \w+\((\w),(\w)\)\{let (\w)=\w+\(\3\);if\(\4\.loadingStarted)(\)return \4\.promise)/;
    if (!re.test(code)) console.warn("warning: could not patch the Turbopack chunk loader (pattern changed); the page should still work");
    else code = code.replace(re, (m, a, x, y, v, tail) => `${a}||${v}.resolved${tail}`);
  }
  code = safeJs(code);
  return `<script>__bmcs(${JSON.stringify(src)})</script><script${attrs ? " " + attrs : ""}>${code}</script>`;
});
// 4. images
content = content.replace(/(<img\b[^>]*?\ssrc=")([^"]+)(")/gi, (m, a, u, c) => (isLocal(u) ? a + dataUri(u) + c : m));
content = content.replace(/\ssrcset="([^"]+)"/gi, (m, set) => {
  const parts = set.split(",").map((p) => {
    const [u, ...rest] = p.trim().split(/\s+/);
    return [isLocal(u) ? dataUri(u) : u, ...rest].join(" ");
  });
  return ` srcset="${parts.join(", ")}"`;
});
content = content.replace(/style="([^"]*)"/gi, (m, s) => (s.includes("url(") ? `style="${inlineCss(s, "/")}"` : m));

// 4b. Next's flight data (inline scripts) asks React to preload files and to add <link>/<script>
// tags for files that are already inlined. Remove the preload hints and point the rest at empty data: URIs
// so React finds nothing to fetch.
content = content.replace(/:HL\[.*?\]\\n/g, "");
content = content.replace(/\\"href\\":\\"\/_next\/static\/[^"\\]+\.css\\"/g, '\\"href\\":\\"data:text/css,\\"');
content = content.replace(/\\"src\\":\\"\/_next\/static\/[^"\\]+\.js\\"/g, '\\"src\\":\\"data:text/javascript,\\"');

// 5. shim goes first, then the head content, then body content
const shim = `<script>(function(){var d=document,h=d.documentElement;${htmlClass ? `h.className=((h.className?h.className+" ":"")+${JSON.stringify(htmlClass)});` : ""}${htmlLang ? `h.lang=${JSON.stringify(htmlLang)};` : ""}var cur=null;Object.defineProperty(d,"currentScript",{configurable:true,get:function(){return cur}});window.__bmcs=function(src){var s=d.createElement("script");s.setAttribute("src",src);cur=s;};})();</script>`;
const first = content.match(/^\s*<meta[^>]*charSet[^>]*>/i);
let out = content;
if (first) out = first[0] + shim + content.slice(first[0].length);
else out = '<meta charset="utf-8">' + shim + content;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "index.html"), out);
console.log(`preview/index.html written: ${(Buffer.byteLength(out) / 1048576).toFixed(2)} MB`);
if (/\/_next\/static/.test(out.replace(/__bmcs\("[^"]+"\)/g, ""))) {
  const n = (out.replace(/__bmcs\("[^"]+"\)/g, "").match(/\/_next\/static[^"'\s)]*/g) || []).slice(0, 5);
  console.log("note: remaining /_next/static references (inside JS/RSC data):", n);
}
