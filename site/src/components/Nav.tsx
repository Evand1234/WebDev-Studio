import { waLink } from "@/config/contact";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__bar">
        <a href="#top" className="nav__logo" aria-label="BrandMasters, back to top"><Logo /></a>
        <nav className="nav__links" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav__cta btn btn-primary" href={waLink("Hi BrandMasters, I'd like to talk about a website for my business.")} target="_blank" rel="noopener">
          <Icon name="whatsapp" size={18} /> <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
