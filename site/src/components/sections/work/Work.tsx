import { BrowserFrame } from "../../devices/BrowserFrame";
import { ScaledScreen } from "../../devices/ScaledScreen";
import { Reveal } from "../../Reveal";
import { LazyPhone } from "./LazyPhone";
import { PlumberSite, CafeSite, GuesthouseSite, SalonSite } from "./ConceptSites";
import "./work.css";

const concepts = [
  { id: "plumber", label: "Plumber", line: "Call-first, built for emergencies.", Site: PlumberSite },
  { id: "cafe", label: "Cafe", line: "Warm, with the menu up front.", Site: CafeSite },
  { id: "guesthouse", label: "Guesthouse", line: "Calm, with rooms and availability.", Site: GuesthouseSite },
  { id: "salon", label: "Salon", line: "Soft and simple, made for booking.", Site: SalonSite },
] as const;

export function Work() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">What we build</p>
          <h2 id="work-title">A site for any business.</h2>
          <p className="work__lead">Four ideas for four trades. Each one looks like it belongs to its business.</p>
        </Reveal>
      </div>

      <ul className="work__rail" aria-label="Concept websites for different trades">
        {concepts.map(({ id, label, line, Site }, n) => (
          <li key={id} className="work__item"><figure>
            <LazyPhone order={n}><Site /></LazyPhone>
            <figcaption>
              <span className="work__tag">Concept</span>
              <strong>{label}</strong>
              <span>{line}</span>
            </figcaption>
          </figure></li>
        ))}
      </ul>

      <div className="wrap">
        <Reveal>
          <p className="work__note">Concepts only. These businesses are made up, not clients.</p>
        </Reveal>

        <Reveal className="work__real">
          <a className="rcard" href="https://tappedflow.com" target="_blank" rel="noopener noreferrer" aria-label="TappedFlow, real work by BrandMasters (opens tappedflow.com)">
            <div className="rcard__shot" aria-hidden="true">
              {/* PLACEHOLDER: replace this typographic mock with a real screenshot of tappedflow.com
                  (e.g. next/image inside the BrowserFrame body) once we have one. */}
              <ScaledScreen logicalWidth={1280}>
                <BrowserFrame url="tappedflow.com">
                  <div className="tf">
                    <div className="tf__bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="tf__word">TappedFlow</div>
                    <div className="tf__sub">Press a key. Talk. Done.</div>
                  </div>
                </BrowserFrame>
              </ScaledScreen>
            </div>
            <div className="rcard__body">
              <span className="work__tag work__tag--real">Real work</span>
              <h3>TappedFlow</h3>
              <p>A voice-typing app for Windows. We built its website.</p>
              <span className="rcard__link">Visit tappedflow.com
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
