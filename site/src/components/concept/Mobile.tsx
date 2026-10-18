import { concept } from "./data";
import { ConceptLogo } from "./Logo";
import "./concept.css";

/** The concept client site, designed for a 390px phone screen. Written in em (16px = 1em at 390 wide). */
export function ConceptMobile() {
  return (
    <div className="csm">
      <header className="csm__header">
        <ConceptLogo />
        <span className="csm__call" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="1.25em" height="1.25em" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.250.2 2.450.57 3.6a1 1 0 0 1-.25 1L6.6 10.8Z" /></svg>
        </span>
      </header>

      <div className="csm__scroll">
        <section className="csm__hero">
          <img src="/img/barber-cut.webp" width={1280} height={853} alt="" className="csm__hero-img" />
          <div className="csm__hero-scrim" />
          <div className="csm__hero-copy">
            <span className="cs-rating"><b>★</b> {concept.rating} <i>·</i> {concept.reviews} Google reviews</span>
            <h3>Sharp cuts,<br />proper service.</h3>
            <p>Walk-ins welcome. Booking gets you a chair without the wait.</p>
            <span className="cs-open"><i /> Open today, 8:00 to 18:00</span>
          </div>
        </section>

        <section className="csm__services">
          <h4>Services and prices</h4>
          <ul>
            {concept.services.map((s) => (
              <li key={s.name}>
                <div><strong>{s.name}</strong><span>{s.note}</span></div>
                <em>{s.price}</em>
              </li>
            ))}
          </ul>
        </section>

        <section className="csm__photo">
          <img src="/img/barber-shop-wide.webp" width={1280} height={853} alt="" />
        </section>

        <section className="csm__visit">
          <h4>Visit us</h4>
          <p>Marlow Street, Johannesburg</p>
          <p>Monday to Saturday, 8:00 to 18:00</p>
        </section>
      </div>

      <div className="csm__dock">
        <span className="csm__book">Book a chair</span>
      </div>
    </div>
  );
}
