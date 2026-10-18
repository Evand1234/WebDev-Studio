"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const words = ["barbers", "plumbers", "salons", "restaurants", "guesthouses"];

/** One word that rolls up and is replaced. All words share one grid cell, so the width of the longest is reserved. */
export function RotatingWord() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI((n) => { setPrev(n); return (n + 1) % words.length; }), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) return <><span className="rw-static">businesses</span>.</>;

  return (
    <>
      <span className="sr-only">businesses.</span>
      <span className="rw" aria-hidden="true">
        {words.map((w, n) => (
          <span key={w} className={`rw__word${n === i ? " is-on" : n === prev ? " is-out" : ""}`}>{w}.</span>
        ))}
      </span>
    </>
  );
}
