import { concept } from "./data";
import { ConceptLogo } from "./Logo";
import "./concept.css";

/** The concept client site, designed for a 1280 x 756 browser viewport. Written in em (16px = 1em). */
export function ConceptDesktop() {
  return (
    <div className="csd">
      <header className="csd__nav">
        <ConceptLogo />
        <nav>
          <span>Services</span><span>Barbers</span><span>Gallery</span><span>Visit</span>
        </nav>
        <div className="csd__nav-actions">
          <span className="csd__ghost">Call us</span>
          <span className="csd__book">Book a chair</span>
        </div>
      </header>

      <section className="csd__hero">
        <div className="csd__copy">
          <span className="cs-rating"><b>★</b> {concept.rating} <i>·</i> {concept.reviews} Google reviews</span>
          <h3>Sharp cuts,<br />proper service.</h3>
          <p>Walk-ins welcome. Booking gets you a chair without the wait.</p>
          <div className="csd__cta">
            <span className="csd__book">Book a chair</span>
            <span className="csd__ghost">See prices</span>
          </div>
          <span className="cs-open"><i /> Open today, 8:00 to 18:00</span>
        </div>
        <div className="csd__photo">
          <img src="/img/barber-floor.webp" width={1280} height={853} alt="" />
          <div className="csd__chip">
            <small>Next free chair</small>
            <strong>Today, 14:30</strong>
          </div>
        </div>
      </section>

      <section className="csd__services">
        {concept.services.slice(0, 4).map((s) => (
          <div key={s.name}>
            <span>{s.name}</span>
            <em>{s.price}</em>
          </div>
        ))}
      </section>
    </div>
  );
}
