"use client";

import { motion } from "motion/react";
import { Iphone } from "./devices/Iphone";
import { Laptop } from "./devices/Laptop";
import { BrowserFrame } from "./devices/BrowserFrame";
import { ConceptMobile } from "./concept/Mobile";
import { ConceptDesktop } from "./concept/Desktop";
import { concept } from "./concept/data";
import { Parallax } from "./Parallax";

const ease = [0.22, 1, 0.36, 1] as const;

/** Laptop with the concept site on desktop, iPhone in front with the same site on mobile. */
export function HeroDevices() {
  return (
    <figure className="hd" aria-label={`Concept example: ${concept.name} website on a laptop and a phone`}>
      <div className="hd__stage">
        <motion.div
          className="hd__laptop"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.15 }}
        >
          <Parallax y={-18}>
            <Laptop>
              <BrowserFrame url={concept.url}>
                <ConceptDesktop />
              </BrowserFrame>
            </Laptop>
          </Parallax>
        </motion.div>
        <motion.div
          className="hd__phone"
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
        >
          <Parallax y={-56}>
            <Iphone>
              <ConceptMobile />
            </Iphone>
          </Parallax>
        </motion.div>
      </div>
      <motion.figcaption
        className="hd__caption"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 1 }}
      >
        <span className="hd__tag">Concept example</span>
        {concept.name} is an invented business we made to show what we build.
      </motion.figcaption>
    </figure>
  );
}
