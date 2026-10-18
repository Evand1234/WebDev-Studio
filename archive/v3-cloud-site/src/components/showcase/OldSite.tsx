import { concept } from "../concept/data";

/**
 * Marlow Street's old website: the ordinary, slightly dated kind small businesses have.
 * Real DOM, 390 logical px wide and 1180 tall. In this file 1em = 1 logical px.
 */
export function OldSite() {
  return (
    <div className="sc-old">
      <div className="old-topband" />
      <header className="old-head">
        <h2>Marlow Street Barbers</h2>
        <p>Gents hairdresser &middot; Johannesburg</p>
      </header>
      <nav className="old-nav">
        <span>Home</span><i>|</i><span>About Us</span><i>|</i><span>Services</span><i>|</i><span>Gallery</span><i>|</i><span>Links</span><i>|</i><span>Contact</span>
      </nav>
      <div className="old-slider">
        <div className="old-slide ph ph--wide" />
        <div className="old-caption">Marlow Street Barbers - for all your hair cutting needs!</div>
        <span className="old-arrow old-arrow--l">&#8249;</span>
        <span className="old-arrow old-arrow--r">&#8250;</span>
        <span className="old-dots"><b /><b /><b /><b /></span>
      </div>
      <div className="old-meta">
        <span className="old-google" data-target="rating"><b>Google</b> &#9733; {concept.rating} <small>({concept.reviews} reviews)</small></span>
        <span className="old-counter">Visitors: 004213</span>
      </div>
      <section className="old-welcome">
        <h3>Welcome to Marlow Street Barbers</h3>
        <p>Marlow Street Barbers has been serving the gents of Johannesburg for over 10 years. We offer a wide range of services at affordable prices and our friendly barbers will make sure you leave looking your best.</p>
        <p>Walk ins are welcome but during busy times (Fridays and Saturdays) you may have to wait. Please scroll down for our price list and contact details.</p>
      </section>
      <section className="old-prices">
        <h3>Price List</h3>
        <table>
          <thead><tr><th>Service</th><th>Price</th></tr></thead>
          <tbody>
            {concept.services.map((s) => (
              <tr key={s.name}><td>{s.name}</td><td>{s.price}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <div className="old-news"><b>NEWS:</b> We will be closed from 25 December to 2 January. Happy New Year to all our customers!!</div>
      <section className="old-gallery">
        <h3>Gallery</h3>
        <div>
          <span className="ph ph--cut" /><span className="ph ph--floor" /><span className="ph ph--wide" />
        </div>
      </section>
      <footer className="old-foot">
        <p>Home | About | Services | Gallery | Links | Contact | Sitemap | Privacy Policy</p>
        <p>Copyright &copy; 2014 Marlow Street Barbers. All rights reserved. Website by Gold Web Design.</p>
        <p data-target="number">Tel: 011 000 0000 &nbsp; Email us</p>
      </footer>
    </div>
  );
}
