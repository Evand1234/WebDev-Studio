import {onScene,clamp} from './engine.js';

/* Fit phones to the room their stage leaves: sets --pw (unitless px) on each [data-fit]. */
const fits=[...document.querySelectorAll('[data-fit]')];
function fit(){fits.forEach(a=>{const w=a.clientWidth,h=a.clientHeight;const pw=Math.floor(clamp(Math.min(w*.78,(h-6)/2.03),140,400));a.style.setProperty('--pw',pw)})}
if(fits.length){new ResizeObserver(fit).observe(document.documentElement);fit()}

/* Crumple shards for the old-site sheet: 5 x 7 pieces, deterministic jitter. */
const sheet=document.querySelector('[data-shards]');
if(sheet){
  const C=4,R=6;let seed=11;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
  const f=document.createDocumentFragment();
  for(let r=0;r<R;r++)for(let c=0;c<C;c++){
    const d=document.createElement('i');d.className='pr__shard sc';
    d.style.left=(c*25.2-0.2)+'%';d.style.top=(r*16.7-0.2)+'%';
    d.style.backgroundPosition=(c/(C-1)*100)+'% '+(r/(R-1)*100)+'%';
    d.style.setProperty('--dx',((1.5-c)*86+(rnd()-.5)*44)+'%');
    d.style.setProperty('--dy',((2.5-r)*86+(rnd()-.5)*44)+'%');
    d.style.setProperty('--r',((rnd()-.5)*220)+'deg');
    f.appendChild(d)}
  sheet.appendChild(f);
}

/* Timer: counts while the visitor hunts for the number, then the same task on the new site. */
const pr=document.getElementById('problem'),tm=pr&&pr.querySelector('[data-timer]');
if(tm){
  const box=tm.closest('.pr__time');const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
  let last='';
  onScene(pr,p=>{
    let s=0,cls='';
    if(p<.04)s=0;else if(p<.5){s=(p-.04)/.46*168;cls='is-bad'}else if(p<.8){s=168;cls='is-bad'}
    else if(p<.86){s=0}else if(p<.93){s=(p-.86)/.07*3;cls='is-good'}else{s=3;cls='is-good'}
    const t=fmt(s);if(t!==last){tm.textContent=t;last=t}
    box.classList.toggle('is-bad',cls==='is-bad');box.classList.toggle('is-good',cls==='is-good');
  });
}
