"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { waLink } from "@/config/contact";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const links = [
  { href: "#showcase", label: "Showcase" },
  { href: "#work", label: "Our work" },
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuId = useId();
  const btnRef = useRef<HTMLButtonElement>(null);

  // Dark-glass variant while the bar sits over a dark band (the showcase, the footer).
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const active = new Set<string>();
    const sync = () => setDark(active.size > 0);
    const triggers = [
      { id: "showcase", start: "top+=110 52", end: "bottom-=110 52" },
      { id: "contact", start: "top+=40 52", end: "bottom bottom" },
    ].flatMap(({ id, start, end }) => {
      const el = document.getElementById(id);
      if (!el) return [];
      return [ScrollTrigger.create({
        trigger: el, start, end, refreshPriority: -10,
        onToggle: (self) => { if (self.isActive) active.add(id); else active.delete(id); sync(); },
      })];
    });
    triggers.forEach((t, i) => { const id = i === 0 ? "showcase" : "contact"; if (t.isActive) active.add(id); });
    sync();
    return () => triggers.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  const wa = waLink("Hi BrandMasters, I'd like to talk about a website for my business.");

  return (
    <header className={`nav${dark ? " nav--dark" : ""}${open ? " nav--open" : ""}`}>
      <div className="nav__bar">
        <a href="#top" className="nav__logo" aria-label="BrandMasters, back to top"><Logo /></a>
        <nav className="nav__links" aria-label="Main">
          {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav__right">
          <a className="nav__cta btn btn-primary" href={wa} target="_blank" rel="noopener" aria-label="WhatsApp us">
            <Icon name="whatsapp" size={18} /> <span>WhatsApp</span>
          </a>
          <button
            ref={btnRef}
            type="button"
            className="nav__menu"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__burger" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
      <div id={menuId} className="nav__sheet" inert={!open}>
        <nav aria-label="Menu">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
