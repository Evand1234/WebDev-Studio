import { BrandMark } from "./brand/BrandMark";

/** Wordmark colour follows `color`. Both mark tones are stacked so the nav can crossfade between light and dark backgrounds. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <BrandMark size={32} tone={light ? "dark" : "light"} className="logo__mark-a" />
        <BrandMark size={32} tone={light ? "light" : "dark"} className="logo__mark-b" />
      </span>
      <span className="logo__word">BrandMasters</span>
    </span>
  );
}
