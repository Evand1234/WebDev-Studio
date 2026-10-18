// Visual check: node tools/snap.mjs <w> <h> <sceneId> <p,p,p> [outPrefix]
import {createRequire} from 'module';const {chromium}=createRequire('/opt/node-tools/')('playwright');
const [w,h,id,ps,pre='/tmp/snap']=process.argv.slice(2);
const b=await chromium.launch();
const ctx=await b.newContext({viewport:{width:+w,height:+h},deviceScaleFactor:+(process.env.DPR||1),hasTouch:+w<700,isMobile:+w<700});
const pg=await ctx.newPage();const errs=[];pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});pg.on('pageerror',e=>errs.push(String(e)));
await pg.goto('http://localhost:8099/index.html',{waitUntil:'load'});await pg.waitForTimeout(600);
for(const p of ps.split(',')){
  await pg.evaluate(([id,p])=>{const el=document.getElementById(id);const top=el.getBoundingClientRect().top+scrollY;const stage=el.querySelector('[data-stage]')||el;window.scrollTo(0,top+p*(el.offsetHeight-stage.offsetHeight))},[id,+p]);
  await pg.waitForTimeout(350);
  await pg.screenshot({path:`${pre}-${id}-${p}.png`});
}
if(errs.length)console.log('ERRORS',errs);
await b.close();
