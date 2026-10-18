import type { ReactNode } from "react";

/* Four concept mobile sites for different trades. Pure DOM, em units (1em = 16 logical px on a 390px screen).
   No photos: colour, type, SVG and CSS texture only. Nothing here is a real business or client. */

const ICONS: Record<string, string> = {
  drop: "M12 3c3.5 4.4 6 7.4 6 10.5a6 6 0 0 1-12 0C6 10.400 8.500 7.400 12 3Z",
  wrench: "M14.500 5a4.500 4.500 0 0 0-4.300 5.800L4 17l3 3 6.200-6.200A4.500 4.500 0 0 0 19 9.500l-2.800 2.800-2.500-.5-.5-2.500L16 6.500A4.500 4.500 0 0 0 14.500 5Z",
  flame: "M12 3c1 3.500 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3.200 2-4 0 1.500.700 2.500 1.700 2.800C10.500 9 11 6 12 3Z",
  tub: "M3 12h18v2.500A4.500 4.500 0 0 1 16.500 19h-9A4.500 4.500 0 0 1 3 14.500V12Zm3 0V6.500A2.500 2.500 0 0 1 8.500 4 2.500 2.500 0 0 1 11 6.500M7 19l-1 2m11-2 1 2",
  cup: "M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9Zm11 1.500h1.500a2.500 2.500 0 0 1 0 5H16M8 3c-1 1.500 1 2.500 0 4m4-4c-1 1.500 1 2.500 0 4",
  bread: "M5 11a4 4 0 0 1 3-6.500h8A4 4 0 0 1 19 11v8H5v-8Z",
  leaf: "M5 19C5 10 10 5 19 5c0 9-5 14-14 14Zm0 0 8-8",
  bed: "M3 18V7m0 7h18v4M21 14v-2.500A2.500 2.500 0 0 0 18.500 9H11v5M7 11.500a1.500 1.500 0 1 0 0-.1",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2M3 12h2m14 0h2M5.600 5.600 7 7m10 10 1.400 1.400m0-12.800L17 7M7 17l-1.400 1.400",
  pool: "M3 16c1.500 0 1.500 1 3 1s1.500-1 3-1 1.500 1 3 1 1.500-1 3-1 1.500 1 3 1 1.500-1 3-1M8 13V6.500A2.500 2.500 0 0 1 10.500 4M15 13V6.500A2.500 2.500 0 0 1 17.500 4M8 9h7",
  scissors: "M6 8a2.500 2.500 0 1 0 0-.1ZM6 16a2.500 2.500 0 1 0 0-.1ZM8 9.500 20 18M8 14.500 20 6",
  sparkle: "M12 3c.8 4.500 2.500 6.200 7 7-4.500.8-6.200 2.500-7 7-.8-4.500-2.500-6.200-7-7 4.500-.8 6.200-2.500 7-7Z",
  hand: "M8 12V6.500a1.500 1.500 0 0 1 3 0V11m0-5.500a1.500 1.500 0 0 1 3 0V11m0-3.500a1.500 1.500 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5A5.500 5.500 0 0 1 6 16.500L4.500 13a1.500 1.500 0 0 1 2.500-1.500L8 13",
};

function I({ n }: { n: string }) {
  return (
    <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[n]} />
    </svg>
  );
}

type Item = { icon: string; title: string; note: string };

function Site({ theme, name, mark, nav, kicker, h1, sub, hero, listTitle, items, cta, foot }: {
  theme: string; name: string; mark: ReactNode; nav: string; kicker: string; h1: ReactNode; sub: string;
  hero: ReactNode; listTitle: string; items: Item[]; cta: string; foot: string;
}) {
  return (
    <div className={`cx cx--${theme}`}>
      <header className="cx__head">
        <span className="cx__brand"><span className="cx__mark">{mark}</span>{name}</span>
        <span className="cx__nav">{nav}</span>
      </header>
      <section className="cx__hero">
        <div className="cx__art" aria-hidden="true">{hero}</div>
        <div className="cx__copy">
          <span className="cx__kicker">{kicker}</span>
          <h3>{h1}</h3>
          <p>{sub}</p>
        </div>
      </section>
      <section className="cx__list">
        <h4>{listTitle}</h4>
        <ul>
          {items.map((it) => (
            <li key={it.title}>
              <span className="cx__ico"><I n={it.icon} /></span>
              <span className="cx__txt"><strong>{it.title}</strong><span>{it.note}</span></span>
              <svg className="cx__chev" viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </li>
          ))}
        </ul>
        <p className="cx__foot">{foot}</p>
      </section>
      <div className="cx__dock"><span className="cx__cta">{cta}</span></div>
    </div>
  );
}

const Drop = () => <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d={ICONS.drop} /></svg>;

export function PlumberSite() {
  return (
    <Site theme="plumb" name="Clearflow Plumbing" mark={<Drop />} nav="MENU"
      kicker="Concept · Emergency call-outs"
      h1={<>LEAK?<br />WE&rsquo;RE<br />ON IT.</>}
      sub="Burst pipes, geysers and blocked drains, fixed properly."
      hero={
        <svg viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs><pattern id="pl-g" width="26" height="26" patternUnits="userSpaceOnUse"><path d="M26 0H0V26" fill="none" stroke="#ffffff" strokeOpacity=".07" /></pattern></defs>
          <rect width="390" height="300" fill="#0d2b4a" /><rect width="390" height="300" fill="url(#pl-g)" />
          <path d="M-10 90H210a26 26 0 0 1 26 26V300" fill="none" stroke="#ffc933" strokeWidth="22" />
          <path d="M-10 90H210a26 26 0 0 1 26 26V300" fill="none" stroke="#0d2b4a" strokeOpacity=".28" strokeWidth="6" />
          <rect x="196" y="76" width="14" height="28" fill="#ffc933" /><rect x="190" y="72" width="26" height="8" rx="2" fill="#e8ae0c" />
          <path d="M290 130c18 22 30 36 30 52a30 30 0 0 1-60 0c0-16 12-30 30-52Z" fill="#4fb4e8" />
          <path d="M280 176c0 8 4 14 10 16" stroke="#fff" strokeOpacity=".6" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      }
      listTitle="What we fix"
      items={[
        { icon: "drop", title: "Leaks and burst pipes", note: "Fast response, day or night" },
        { icon: "flame", title: "Geysers", note: "Repairs and replacements" },
        { icon: "wrench", title: "Blocked drains", note: "Cleared and checked" },
        { icon: "tub", title: "Bathrooms", note: "Fitted neatly" },
      ]}
      cta="Call now" foot="Johannesburg and surrounds" />
  );
}

export function CafeSite() {
  return (
    <Site theme="cafe" name="Morning Table" mark={<span>M</span>} nav="MENU"
      kicker="Concept · Coffee and bakes"
      h1={<>Slow<br />mornings,<br />good coffee.</>}
      sub="Fresh bakes, honest breakfasts and a seat by the window."
      hero={
        <svg viewBox="0 0 390 300" preserveAspectRatio="xMaxYMin meet" width="100%" height="100%">
          <rect width="390" height="300" fill="#e9d3b4" />
          <circle cx="262" cy="150" r="118" fill="#d9ba93" /><circle cx="262" cy="150" r="92" fill="#c8553d" />
          <circle cx="262" cy="150" r="70" fill="#f6ecdc" />
          <circle cx="262" cy="150" r="50" fill="#5a3522" /><circle cx="262" cy="150" r="50" fill="none" stroke="#7b4b31" strokeWidth="4" />
          <path d="M262 124c-14 10-14 24 0 30 14 6 14 20 0 28m0-58c14 10 14 24 0 30" fill="none" stroke="#f6ecdc" strokeWidth="7" strokeLinecap="round" />
          <path d="M338 128h22a22 22 0 0 1 0 44h-22" fill="none" stroke="#c8553d" strokeWidth="12" strokeLinecap="round" />
          <g fill="none" stroke="#3b2418" strokeOpacity=".35" strokeWidth="5" strokeLinecap="round"><path d="M240 50c-10 12 10 20 0 34M268 40c-10 12 10 20 0 34" /></g>
        </svg>
      }
      listTitle="On the counter today"
      items={[
        { icon: "cup", title: "Flat white", note: "Roasted down the road" },
        { icon: "bread", title: "Cinnamon roll", note: "Baked every morning" },
        { icon: "leaf", title: "Garden breakfast", note: "Eggs, greens, sourdough" },
        { icon: "sun", title: "Sunday brunch", note: "Book a table" },
      ]}
      cta="Find a table" foot="Open daily from 7:00" />
  );
}

export function GuesthouseSite() {
  return (
    <Site theme="stay" name="Hillcrest House" mark={<span>H</span>} nav="MENU"
      kicker="Concept · Guesthouse"
      h1={<>A quiet place<br />to <em>stay</em>.</>}
      sub="Six rooms, a garden pool and breakfast on the stoep."
      hero={
        <svg viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <defs><linearGradient id="gh-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f0d9b0" /><stop offset="1" stopColor="#f6ecd9" /></linearGradient></defs>
          <rect width="390" height="300" fill="#25382e" />
          <path d="M115 300V120a80 80 0 0 1 160 0V300Z" fill="url(#gh-s)" />
          <circle cx="195" cy="132" r="30" fill="#e8b45c" />
          <path d="M115 215c40-34 70-12 100-30s40-30 60-24V300H115Z" fill="#7d9a73" />
          <path d="M115 245c50-26 90-6 160-30V300H115Z" fill="#4c6b52" />
          <path d="M115 300V120a80 80 0 0 1 160 0V300" fill="none" stroke="#b89b5e" strokeWidth="3" />
          <g stroke="#b89b5e" strokeWidth="1.500" opacity=".55"><path d="M40 80h40M310 80h40M60 220h30M300 220h30" /></g>
        </svg>
      }
      listTitle="Rooms"
      items={[
        { icon: "bed", title: "Garden Room", note: "Queen bed, private entrance" },
        { icon: "sun", title: "Sunrise Suite", note: "Balcony and soft light" },
        { icon: "pool", title: "Pool and gardens", note: "For all guests" },
        { icon: "cup", title: "Breakfast", note: "Included each morning" },
      ]}
      cta="Check availability" foot="Gauteng, South Africa" />
  );
}

export function SalonSite() {
  return (
    <Site theme="salon" name="Maison Rose" mark={<span>R</span>} nav="MENU"
      kicker="Concept · Hair and beauty"
      h1={<>Your hair,<br />beautifully<br />done.</>}
      sub="Cut, colour and care from a calm little studio."
      hero={
        <svg viewBox="0 0 390 300" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
          <rect width="390" height="300" fill="#f1d8d4" />
          <circle cx="290" cy="120" r="150" fill="#e7bdb6" /><circle cx="110" cy="260" r="110" fill="#f7e8e4" />
          <path d="M200 40c60 30 90 80 76 160-8 44-40 78-76 100" fill="none" stroke="#3a1f2d" strokeWidth="3" />
          <path d="M226 40c56 34 80 86 62 168-6 30-20 56-40 80" fill="none" stroke="#b9807a" strokeWidth="3" />
          <path d="M174 40c64 28 102 84 90 164-6 40-30 70-52 96" fill="none" stroke="#3a1f2d" strokeOpacity=".4" strokeWidth="3" />
          <circle cx="86" cy="86" r="34" fill="none" stroke="#3a1f2d" strokeWidth="2" /><circle cx="86" cy="86" r="22" fill="#3a1f2d" opacity=".9" />
        </svg>
      }
      listTitle="Treatments"
      items={[
        { icon: "scissors", title: "Cut and style", note: "Tailored to you" },
        { icon: "sparkle", title: "Colour and gloss", note: "Soft, lasting shades" },
        { icon: "hand", title: "Nails", note: "Manicure and pedicure" },
        { icon: "leaf", title: "Hair care", note: "Treatments that repair" },
      ]}
      cta="Book a visit" foot="By appointment" />
  );
}
