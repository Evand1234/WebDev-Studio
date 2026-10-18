// Renders tools/screens/*.html into assets/screens/*.webp (2x) plus per-band crops. Run: node tools/shoot.mjs
import {createRequire} from 'module';const {chromium}=createRequire('/opt/node-tools/')('playwright');
import {mkdirSync} from 'fs';import {execSync} from 'child_process';
import path from 'path';import {fileURLToPath} from 'url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'assets/screens');mkdirSync(out,{recursive:true});
const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:360,height:760},deviceScaleFactor:2});
const p=await ctx.newPage();
for(const n of ['lodge-bad','lodge-good','barber-old','barber-new']){
  await p.goto('file://'+path.join(root,'tools/screens',n+'.html'));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
  const png=path.join('/tmp',n+'.png');await p.screenshot({path:png,fullPage:true});
  execSync(`convert ${png} -quality 80 ${out}/${n}.webp`);
  const h=await p.evaluate(()=>document.documentElement.scrollHeight);console.log(n,h);
  const bands=await p.$$('[data-band]');
  for(const el of bands){const id=await el.getAttribute('data-band');await el.screenshot({path:`/tmp/${n}-${id}.png`});execSync(`convert /tmp/${n}-${id}.png -quality 80 ${out}/${n}-${id}.webp`);const bb=await el.boundingBox();console.log(' ',id,Math.round(bb.height))}
}
await b.close();
