/* Cursor that belongs to the marble world: a torch of light moves over the hero stone, a ring follows elsewhere. Fine pointers only. */
const fine=matchMedia('(hover:hover) and (pointer:fine)');
if(fine.matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  const hero=document.querySelector('.hero'),torch=hero&&hero.querySelector('.hero__torch');
  const ring=document.createElement('div');ring.className='cursor-ring';ring.setAttribute('aria-hidden','true');document.body.appendChild(ring);
  let tx=0,ty=0,x=0,y=0,rx=0,ry=0,run=false;
  const loop=()=>{x+=(tx-x)*.16;y+=(ty-y)*.16;rx+=(tx-rx)*.34;ry+=(ty-ry)*.34;
    ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;
    if(torch&&hero){const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',x+'px');hero.style.setProperty('--my',(y-Math.max(r.top,0)*0)+'px')}
    run=Math.abs(tx-x)+Math.abs(ty-y)>.5||Math.abs(tx-rx)+Math.abs(ty-ry)>.5;if(run)requestAnimationFrame(loop)};
  addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;tx=e.clientX;ty=e.clientY;ring.classList.add('on');if(hero)hero.classList.add('has-mouse');if(!run){run=true;requestAnimationFrame(loop)}},{passive:true});
  document.addEventListener('pointerover',e=>{ring.classList.toggle('big',!!e.target.closest('a,button,summary'))});
  document.addEventListener('pointerleave',()=>ring.classList.remove('on'));
}
