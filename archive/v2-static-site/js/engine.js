/* Scroll engine: every [data-scene] gets --p (0..1 across its pinned run) written once per frame.
   All motion is CSS reading --p (transform/opacity only), so it also runs backward for free. */
const clamp=(v,a=0,b=1)=>v<a?a:v>b?b:v;
const reduce=matchMedia('(prefers-reduced-motion:reduce)');
const scenes=[...document.querySelectorAll('[data-scene]')].map(el=>({cbs:[],el,stage:el.querySelector('[data-stage]')||el,top:0,h:0,sh:0,last:-1,live:false}));
let W=innerWidth,H=innerHeight,raf=0;

function measure(){
  scenes.forEach(s=>{const r=s.el.getBoundingClientRect();s.top=r.top+scrollY;s.h=s.el.offsetHeight;s.sh=s.stage.offsetHeight});
  tick();
}
function tick(){
  raf=0;const y=scrollY;
  for(const s of scenes){
    const inView=y>s.top-H*1.2&&y<s.top+s.h+H*.2;
    if(!inView){if(s.live){s.live=false;s.el.classList.remove('is-live')}continue}
    if(!s.live){s.live=true;s.el.classList.add('is-live')}
    const range=Math.max(1,s.h-s.sh);
    const p=clamp((y-s.top)/range);
    if(Math.abs(p-s.last)>.0004||p===0||p===1){s.last=p;s.el.style.setProperty('--p',p.toFixed(4));for(const f of s.cbs)f(p)}
  }
}
function req(){if(!raf)raf=requestAnimationFrame(tick)}
addEventListener('scroll',req,{passive:true});
addEventListener('resize',()=>{if(innerWidth!==W||Math.abs(innerHeight-H)>140){W=innerWidth;H=innerHeight;measure()}},{passive:true});
addEventListener('load',measure);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
measure();

/* adaptive quality: if scrolling frames run long on this device, switch to the lighter look */
(()=>{let last=0,slow=0,n=0,on=false;
  const watch=t=>{if(!on)return;if(last){const d=t-last;if(d<120){n++;if(d>34)slow++;if(n===50){if(slow>26)document.documentElement.classList.add('lite');n=slow=0}}}last=t;requestAnimationFrame(watch)};
  let t0;addEventListener('scroll',()=>{if(!on){on=true;last=0;requestAnimationFrame(watch)}clearTimeout(t0);t0=setTimeout(()=>{on=false;last=0;n=slow=0},400)},{passive:true})})();

/* simple reveal for utility sections */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('[data-reveal]').forEach(n=>io.observe(n));

/* nav state */
const nav=document.querySelector('.nav');
if(nav){const f=()=>nav.classList.toggle('is-solid',scrollY>40);addEventListener('scroll',f,{passive:true});f()}

/* anchor links: smooth unless reduced motion */
document.addEventListener('click',e=>{
  const a=e.target.closest('a[href^="#"]');if(!a)return;
  const id=a.getAttribute('href').slice(1);const t=id&&document.getElementById(id);if(!t)return;
  e.preventDefault();
  t.scrollIntoView({behavior:reduce.matches?'auto':'smooth',block:'start'});
  history.replaceState(null,'','#'+id);
  const m=document.querySelector('.nav__menu[open]');if(m)m.open=false;
});
/** Run fn(p) whenever a scene's progress changes (for counters etc.). */
function onScene(el,fn){const s=scenes.find(x=>x.el===el);if(s){s.cbs.push(fn);fn(Math.max(0,s.last))}}
export{clamp,reduce,onScene};
