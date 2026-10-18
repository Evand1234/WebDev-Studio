import { Iphone } from "./devices/Iphone";
import { Laptop } from "./devices/Laptop";
import { BrowserFrame } from "./devices/BrowserFrame";
import { ConceptMobile } from "./concept/Mobile";
import { ConceptDesktop } from "./concept/Desktop";
import { concept } from "./concept/data";
import { Parallax } from "./Parallax";
import { Tilt } from "./Tilt";

/** Laptop with the concept site on desktop, iPhone in front with the same site on mobile. */
export function HeroDevices() {
  return (
    <figure className="hd" aria-label={`Concept example: ${concept.name} website on a laptop and a phone`}>
      <Tilt className="hd__stage">
        <div className="hd__laptop rise rise--lg" style={{ "--d": "0.15s" } as React.CSSProperties}>
          <Parallax y={-18}>
            <Laptop>
              <BrowserFrame url={concept.url}>
                <ConceptDesktop />
              </BrowserFrame>
            </Laptop>
          </Parallax>
        </div>
        <div className="hd__phone rise rise--xl" style={{ "--d": "0.4s" } as React.CSSProperties}>
          <Parallax y={-56}>
            <Iphone>
              <ConceptMobile />
            </Iphone>
          </Parallax>
        </div>
      </Tilt>
      <figcaption className="hd__caption fade" style={{ "--d": "1s" } as React.CSSProperties}>
        <span className="hd__tag">Concept example</span>
        {concept.name} is an invented business we made to show what we build.
      </figcaption>
    </figure>
  );
}
