import { waLink } from "@/config/contact";
import { Icon } from "./Icon";
import { HeroDevices } from "./HeroDevices";
import { RotatingWord } from "./RotatingWord";

const d = (delay: number) => ({ style: { "--d": `${delay}s` } as React.CSSProperties });

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow rise" {...d(0.05)}>
            <span /> Web design studio · Johannesburg
          </p>
          <h1 id="hero-title" className="rise" {...d(0.15)}>
            They see <span className="mark">your site</span> first.
          </h1>
          <p className="hero__sub rise" {...d(0.28)}>
            <span className="hero__line">We build websites for South African <RotatingWord /></span>{" "}<span className="hero__line">Already have one? We learn from it and build it better.</span>
          </p>
          <div className="hero__actions rise" {...d(0.4)}>
            <a
              className="btn btn-primary"
              href={waLink("Hi BrandMasters, I'd like to talk about a website for my business.")}
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" /> WhatsApp us
            </a>
            <a className="btn btn-ghost" href="#how">
              See how it works <Icon name="arrow-down" />
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <HeroDevices />
        </div>
      </div>
    </section>
  );
}
