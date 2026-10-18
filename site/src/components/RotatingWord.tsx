"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const words = ["barbers", "plumbers", "salons", "restaurants", "guesthouses"];
const ease = [0.22, 1, 0.36, 1] as const;

/** One word that rolls up and is replaced. All words share one grid cell, so the width of the longest is reserved. */
export function RotatingWord() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) return <><span className="rw-static">businesses</span>.</>;

  return (
    <>
      <span className="sr-only">businesses.</span>
      <span className="rw" aria-hidden="true">
        {words.map((w, n) => (
          <motion.span
            key={w}
            className="rw__word"
            initial={false}
            animate={
              n === i
                ? { y: "0%", opacity: 1, transition: { duration: 0.7, ease } }
                : { y: "-70%", opacity: 0, transition: { duration: 0.5, ease }, transitionEnd: { y: "70%" } }
            }
          >
            {w}.
          </motion.span>
        ))}
      </span>
    </>
  );
}
