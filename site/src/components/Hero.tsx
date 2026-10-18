"use client";

import { motion } from "motion/react";
import { waLink } from "@/config/contact";
import { Icon } from "./Icon";
import { HeroDevices } from "./HeroDevices";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <motion.p className="eyebrow" {...rise(0.05)}>
            <span /> Web design studio · Johannesburg
          </motion.p>
          <motion.h1 id="hero-title" {...rise(0.15)}>
            They see <span className="mark">your site</span> first.
          </motion.h1>
          <motion.p className="hero__sub" {...rise(0.28)}>
            We build websites for South African businesses. Already have one? We learn from it and build it better.
          </motion.p>
          <motion.div className="hero__actions" {...rise(0.4)}>
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
          </motion.div>
        </div>
        <div className="hero__visual">
          <HeroDevices />
        </div>
      </div>
    </section>
  );
}
