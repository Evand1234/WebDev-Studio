import { contact, mailLink, waLink } from "@/config/contact";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { Reveal } from "../Reveal";

export function Footer() {
  return (
    <footer id="contact" className="foot">
      <div className="wrap">
        <Reveal className="foot__cta">
          <h2>Let&rsquo;s talk about your site.</h2>
          <p>Message us, call us or send an email. One tap, no forms.</p>
          <div className="foot__actions">
            <a className="btn btn-light" href={waLink("Hi BrandMasters, I'd like to talk about a website for my business.")} target="_blank" rel="noopener">
              <Icon name="whatsapp" /> WhatsApp us
            </a>
            <a className="btn btn-outline-dark" href={contact.phoneHref}>
              <Icon name="phone" /> Call {contact.phoneDisplay}
            </a>
            <a className="btn btn-outline-dark" href={mailLink()}>
              <Icon name="mail" /> Email us
            </a>
          </div>
        </Reveal>
        <div className="foot__bar">
          <div>
            <Logo light />
            <p className="foot__slogan">They see your site first.</p>
          </div>
          <div className="foot__meta">
            <p>Johannesburg, South Africa</p>
            <p>&copy; 2026 BrandMasters</p>
            <p className="foot__credit">Concept photos: Wikimedia Commons, CC0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
