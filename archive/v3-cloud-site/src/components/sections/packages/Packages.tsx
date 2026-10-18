import { waLink } from "@/config/contact";
import { Icon } from "../../Icon";
import { Reveal } from "../../Reveal";
import "./packages.css";

const packages = [
  {
    name: "Essential",
    price: "R6,500",
    blurb: "A clean, fast site for a small business.",
    items: ["Up to 5 pages"],
    featured: false,
  },
  {
    name: "Professional",
    price: "R12,500",
    blurb: "The one we recommend for most businesses.",
    items: ["Up to 10 pages", "One signature feature"],
    featured: true,
  },
  {
    name: "Premium",
    price: "R24,500",
    blurb: "The full experience, like this site.",
    items: ["Up to 20 pages", "Video hero", "Booking or quote flow", "3 months of Care Plus"],
    featured: false,
  },
] as const;

const care = [
  { name: "Care", price: "R500", text: "Monthly care for your site." },
  { name: "Care Plus", price: "R1,200", text: "More hands-on monthly care." },
] as const;

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function Packages() {
  return (
    <section id="packages" className="pk" aria-labelledby="pk-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">Packages</p>
          <h2 id="pk-title">Pick what fits.</h2>
        </Reveal>

        <div className="pk__grid">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className={`pk__card${p.featured ? " pk__card--pro" : ""}`}>
              <article className="pk__inner" aria-label={`${p.name} package`}>
                {p.featured && <span className="pk__badge">Recommended</span>}
                <h3>{p.name}</h3>
                <p className="pk__blurb">{p.blurb}</p>
                <p className="pk__price">
                  <span className="pk__amount">{p.price}</span>
                  <span className="pk__once"> once-off</span>
                </p>
                <ul className="pk__list">
                  {p.items.map((it) => (
                    <li key={it}><Tick /> {it}</li>
                  ))}
                </ul>
                <a
                  className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} pk__btn`}
                  href={waLink(`Hi BrandMasters, I'd like to talk about the ${p.name} package.`)}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="whatsapp" /> Ask about {p.name}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="pk__care" aria-label="Care plans">
            <p className="pk__care-title">Care plans, if you want us to look after it</p>
            <ul className="pk__care-list">
              {care.map((c) => (
                <li key={c.name}>
                  <span className="pk__care-name">{c.name}</span>
                  <span className="pk__care-price">{c.price}<small>/month</small></span>
                  <span className="pk__care-text">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="pk__note pk__note--offer">
            Founding offer: 15% off for our first three clients, in exchange for a testimonial.
          </p>
          <p className="pk__note">
            50% deposit to start. The build takes 1 to 2 weeks. 50% before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** schema.org Service with an Offer per package. No personal names or contact details. */
export const packagesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website design",
  serviceType: "Web design",
  provider: { "@type": "Organization", name: "BrandMasters", areaServed: "ZA" },
  areaServed: { "@type": "Country", name: "South Africa" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website packages",
    itemListElement: [
      { "@type": "Offer", name: "Essential", description: "Up to 5 pages.", price: "6500", priceCurrency: "ZAR" },
      { "@type": "Offer", name: "Professional", description: "Up to 10 pages and one signature feature.", price: "12500", priceCurrency: "ZAR" },
      { "@type": "Offer", name: "Premium", description: "Up to 20 pages, video hero, booking or quote flow, 3 months of Care Plus.", price: "24500", priceCurrency: "ZAR" },
    ],
  },
} as const;
