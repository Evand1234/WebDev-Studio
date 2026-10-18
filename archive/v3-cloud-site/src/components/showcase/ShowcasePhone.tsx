import { Iphone } from "../devices/Iphone";
import { ConceptMobile } from "../concept/Mobile";
import { OldSite } from "./OldSite";
import { concept } from "../concept/data";
import "./showcase.css";

export type PhoneState = 1 | 2 | 3 | 4 | 5;

/**
 * Everything that happens on the phone, as layers. In the animated showcase GSAP drives each layer.
 * With `state` set (reduced motion) CSS shows one still frame instead.
 */
export function ShowcasePhone({ state, className = "" }: { state?: PhoneState; className?: string }) {
  const chipOld = state && state >= 2 && state <= 3 ? "1:47" : "0:03";
  return (
    <Iphone className={className}>
      <div className="sc-screen" data-state={state}>
        <div className="sc-page">
          <OldSite />
          <i className="sc-statusbg" />

          <div className="sc-popwrap">
            <div className="sc-pop">
              <div className="sc-pop__bar"><b>Subscribe!</b><span className="sc-pop__x">&#10005;</span></div>
              <div className="sc-pop__body">
                <p>Join our mailing list and get <u>5% off</u> your next visit!!</p>
                <span className="sc-pop__input">Enter your email address</span>
                <span className="sc-pop__btn">SUBSCRIBE</span>
              </div>
            </div>
          </div>

          <div className="sc-cookie">
            <p>This website uses cookies to ensure you get the best experience on our website. <u>Learn more</u></p>
            <span>Got it!</span>
          </div>

          <div className="sc-scrim" />
          <i className="sc-ring sc-ring--rating" />
          <i className="sc-ring sc-ring--photo" />
          <i className="sc-ring sc-ring--number" />
          <span className="sc-tag sc-tag--keep sc-tag--rating"><b>Keep:</b> 4.9 on Google</span>
          <span className="sc-tag sc-tag--keep sc-tag--photo"><b>Keep:</b> your photos</span>
          <span className="sc-tag sc-tag--fix sc-tag--number"><b>Fix:</b> number hidden</span>

          <div className="sc-new">
            <div className="sc-new__inner"><ConceptMobile still /></div>
            <i className="sc-new__edge" />
          </div>

          <div className="sc-sheetwrap">
            <i className="sc-sheetscrim" />
            <div className="sc-sheet">
              <span className="sc-sheet__grab" />
              <span className="sc-sheet__tick">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
              </span>
              <h4>You&rsquo;re booked</h4>
              <dl>
                <div><dt>When</dt><dd>Saturday 10:30</dd></div>
                <div><dt>Service</dt><dd>Classic cut</dd></div>
                <div><dt>Where</dt><dd>Marlow Street, Johannesburg</dd></div>
              </dl>
              <span className="sc-sheet__pill">Confirmed</span>
            </div>
          </div>

          <span className="sc-chip sc-chip--old"><i />Time on site <b className="sc-chip__t">{chipOld}</b></span>
          <span className="sc-chip sc-chip--new"><i />Time to book <b>0:02</b></span>
        </div>

        <div className="sc-safari">
          <span className="sc-safari__aa">aA</span>
          <span className="sc-safari__url">
            <svg viewBox="0 0 12 14" width="11" height="13" fill="currentColor"><path d="M6 0a3.5 3.5 0 0 0-3.5 3.5V5H1.8A1.3 1.3 0 0 0 .5 6.3v6.4A1.3 1.3 0 0 0 1.8 14h8.4a1.3 1.3 0 0 0 1.3-1.3V6.3A1.3 1.3 0 0 0 10.2 5h-.7V3.5A3.5 3.5 0 0 0 6 0Zm2.2 5H3.8V3.5a2.2 2.2 0 0 1 4.4 0V5Z" /></svg>
            {concept.url}
          </span>
          <svg className="sc-safari__reload" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12a8 8 0 1 1-2.5-5.8M20 4v5h-5" /></svg>
        </div>

        <div className="sc-thumb"><i className="sc-thumb__ring" /></div>
      </div>
    </Iphone>
  );
}