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
// end frame of the old site (scrolled to the bottom with popups) used for the crumple shards
await p.goto('file://'+path.join(root,'tools/screens/lodge-bad.html'));
await p.evaluate(()=>document.fonts.ready);
await p.addStyleTag({url:'file://'+path.join(root,'css/site.css')});
await p.addStyleTag({content:'.sc{animation:none!important;opacity:1!important;transform:none!important}'});
await p.evaluate(()=>{const w=document.createElement('div');w.className='u360';w.style.cssText='position:fixed;left:0;top:0;transform:none;z-index:9;--p:0';
 w.innerHTML='<div class="pr__cookie sc"><b>We use cookies!</b> Lots of cookies. <span>ACCEPT ALL</span> <u>more info</u></div><div class="pr__chat sc">Hi! Need any help?</div>';document.body.appendChild(w);window.scrollTo(0,document.documentElement.scrollHeight)});
await p.waitForTimeout(300);
await p.screenshot({path:'/tmp/lodge-bad-end.png'});
execSync(`convert /tmp/lodge-bad-end.png -quality 80 ${out}/lodge-bad-end.webp`);
await b.close();
