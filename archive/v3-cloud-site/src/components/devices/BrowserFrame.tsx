import type { ReactNode } from "react";
import "./devices.css";

/** Safari style window. Fills its parent (a 1280px logical screen). */
export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="bframe">
      <div className="bframe__bar">
        <span className="bframe__dots"><i /><i /><i /></span>
        <span className="bframe__url">
          <svg viewBox="0 0 12 14" width="0.7em" height="0.8em" fill="currentColor"><path d="M6 0a3.5 3.5 0 0 0-3.5 3.5V5H1.8A1.3 1.3 0 0 0 .5 6.3v6.4A1.3 1.3 0 0 0 1.8 14h8.4a1.3 1.3 0 0 0 1.3-1.3V6.3A1.3 1.3 0 0 0 10.2 5h-.7V3.5A3.5 3.5 0 0 0 6 0Zm2.2 5H3.8V3.5a2.2 2.2 0 0 1 4.4 0V5Z" /></svg>
          {url}
        </span>
        <span className="bframe__spacer" />
      </div>
      <div className="bframe__body">{children}</div>
    </div>
  );
}
