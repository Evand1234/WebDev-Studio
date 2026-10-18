// node tools/snapel.mjs <w> <h> <id,id> [prefix]  -> full screenshots of sections
import {createRequire} from 'module';const {chromium}=createRequire('/opt/node-tools/')('playwright');
const [w,h,ids,pre='/tmp/el']=process.argv.slice(2);
const b=await chromium.launch();const ctx=await b.newContext({viewport:{width:+w,height:+h},hasTouch:+w<700,isMobile:+w<700});
const pg=await ctx.newPage();const errs=[];pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});pg.on('pageerror',e=>errs.push(String(e)));
await pg.goto('http://localhost:8099/index.html',{waitUntil:'load'});await pg.waitForTimeout(500);
await pg.addStyleTag({content:'[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}.times__row b{transform:none!important}'});
for(const id of ids.split(',')){const el=await pg.$('#'+id);await el.scrollIntoViewIfNeeded();await pg.waitForTimeout(300);await el.screenshot({path:`${pre}-${id}.png`})}
if(errs.length)console.log('ERRORS',errs);await b.close();
