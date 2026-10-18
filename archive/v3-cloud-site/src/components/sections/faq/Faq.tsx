"use client";

import { useId, useState } from "react";
import { waLink } from "@/config/contact";
import { Icon } from "../../Icon";
import { Reveal } from "../../Reveal";
import { faqItems } from "./faqData";
import "./faq.css";

export { faqItems, faqJsonLd } from "./faqData";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const uid = useId();

  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="wrap faq__grid">
        <Reveal className="faq__intro">
          <p className="kicker">Questions</p>
          <h2 id="faq-title">Good to know.</h2>
          <div className="faq__help">
            <p>Still wondering?</p>
            <a
              className="btn btn-primary"
              href={waLink("Hi BrandMasters, I have a question about a website.")}
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" /> WhatsApp us
            </a>
          </div>
        </Reveal>

        <Reveal className="faq__list" delay={0.08}>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const bid = `${uid}-b${i}`;
            const pid = `${uid}-p${i}`;
            return (
              <div className="faq__item" data-open={isOpen} key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={bid}
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={pid}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={pid} role="region" aria-labelledby={bid} className="faq__panel" inert={!isOpen}>
                  <div className="faq__clip">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
