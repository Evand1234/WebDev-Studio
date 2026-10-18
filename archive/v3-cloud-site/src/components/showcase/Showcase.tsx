"use client";

import { useEffect, useRef } from "react";
import { afterFirstPaint } from "@/lib/afterFirstPaint";
import { Icon } from "../Icon";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ShowcasePhone, type PhoneState } from "./ShowcasePhone";
import { beats, showcaseCta, showcaseNote } from "./beats";


function BeatText({ i, cta = false }: { i: number; cta?: boolean }) {
  const b = beats[i];
  return (
    <div className="sc-beat" data-beat={i}>
      <p className="kicker">{b.kicker}</p>
      <h2>{b.title}</h2>
      <p className="sc-beat__sub">{b.sub}</p>
      {cta && i === beats.length - 1 && (
        <a className="btn btn-light" href={showcaseCta.href} target="_blank" rel="noopener">
          <Icon name="whatsapp" /> {showcaseCta.label}
        </a>
      )}
    </div>
  );
}


export function Showcase() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    // Warm up the photos so none is decoded in the middle of a scroll.
    section.querySelectorAll<HTMLElement>(".ph").forEach((el) => {
      const m = getComputedStyle(el).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
      if (m) { const img = new Image(); img.src = m[1]; img.decode?.().catch(() => {}); }
    });

    // GSAP and the timeline load after the first paint, in their own chunk.
    let dead = false;
    let undo: (() => void) | undefined;
    afterFirstPaint().then(() => import("./timeline")).then((m) => { if (dead) return; undo = m.setupShowcase(section, stage); });
    return () => { dead = true; undo?.(); };
  }, [reduced]);

  if (reduced) return <ShowcaseStatic />;

  return (
    <section id="showcase" ref={sectionRef} className="sc" aria-label="How we turn an ordinary site into a great one">
      <div className="sc__track">
      <div ref={stageRef} className="sc__stage">
        <div className="sc__beats">
          {beats.map((_, i) => <BeatText key={i} i={i} cta />)}
        </div>
        <div className="sc__phonewrap">
          <div className="sc__phone" aria-hidden="true"><ShowcasePhone /></div>
        </div>
        <div className="sc__bottom">
          <div className="sc__progress" aria-hidden="true">
            {beats.map((_, i) => <span className="sc__seg" key={i}><i /></span>)}
          </div>
          <p className="sc__note">{showcaseNote}</p>
        </div>
      </div>
      </div>
    </section>
  );
}

function ShowcaseStatic() {
  return (
    <section id="showcase" className="sc-static" aria-label="How we turn an ordinary site into a great one">
      <div className="wrap">
        <ol className="sc-static__list">
          {beats.map((_, i) => (
            <li className="sc-static__card" key={i}>
              <BeatText i={i} cta />
              <div className="sc-static__phone" aria-hidden="true"><ShowcasePhone state={(i + 1) as PhoneState} /></div>
            </li>
          ))}
        </ol>
        <p className="sc__note" style={{ position: "relative", marginTop: 24, textAlign: "center" }}>{showcaseNote}</p>
      </div>
    </section>
  );
}
