import { Icon } from "../Icon";
import { Reveal } from "../Reveal";

const steps = [
  { icon: "chat", title: "Say hello", text: "Message us on WhatsApp or give us a call. Tell us about your business and your current website, if you have one." },
  { icon: "pen", title: "We design", text: "We design around your business, your photos and what your customers already say about you." },
  { icon: "code", title: "We build", text: "Build takes 1 to 2 weeks. You pay a 50% deposit to get started." },
  { icon: "rocket", title: "We launch", text: "You pay the other 50% before launch. A care plan from R500 a month is there if you want us to look after it." },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="how" aria-labelledby="how-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">How it works</p>
          <h2 id="how-title">From hello to launch.</h2>
        </Reveal>
        <ol className="how__list">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="how__step">
              <span className="how__num">0{i + 1}</span>
              <span className="how__icon"><Icon name={s.icon} size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
