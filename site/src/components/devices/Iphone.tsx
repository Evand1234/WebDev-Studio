import type { ReactNode } from "react";
import { ScaledScreen } from "./ScaledScreen";
import "./devices.css";

/** iPhone 15 Pro style frame. Children render a live 390px-wide mobile site inside the screen. */
export function Iphone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`iphone ${className}`} aria-hidden="true">
      <span className="iphone__btn iphone__btn--action" />
      <span className="iphone__btn iphone__btn--vol-up" />
      <span className="iphone__btn iphone__btn--vol-down" />
      <span className="iphone__btn iphone__btn--power" />
      <div className="iphone__rim">
        <div className="iphone__bezel">
          <div className="iphone__screen">
            <ScaledScreen logicalWidth={390}>{children}</ScaledScreen>
            <StatusBar />
            <span className="iphone__island"><i /></span>
            <span className="iphone__home" />
            <span className="iphone__glare" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="iphone__status">
      <span className="iphone__time">9:41</span>
      <span className="iphone__icons">
        <svg viewBox="0 0 18 12" width="1.15em" height="0.77em" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.8" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
          <rect x="10" y="3" width="3" height="9" rx="0.8" />
          <rect x="15" y="0" width="3" height="12" rx="0.8" />
        </svg>
        <svg viewBox="0 0 16 12" width="1.05em" height="0.8em" fill="currentColor">
          <path d="M8 2.2c2.3 0 4.4.9 6 2.4l1-1.1A10.4 10.4 0 0 0 8 .7C5.2.7 2.7 1.8 1 3.5l1 1.1a8.6 8.6 0 0 1 6-2.4Zm0 3.5c1.4 0 2.7.5 3.7 1.4l1-1.1A7.2 7.2 0 0 0 8 4.2c-1.9 0-3.6.7-4.7 2l1 1.1A5.6 5.6 0 0 1 8 5.7Zm0 3.4c.6 0 1.1.2 1.5.6L8 11.3 6.5 9.7c.4-.4.9-.6 1.5-.6Z" />
        </svg>
        <svg viewBox="0 0 27 13" width="1.7em" height="0.82em" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.6" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="19" height="9" rx="2.2" fill="currentColor" />
          <path d="M24.2 4.3v4.4c.9-.3 1.6-1.2 1.6-2.2s-.7-1.9-1.6-2.2Z" fill="currentColor" opacity="0.5" />
        </svg>
      </span>
    </div>
  );
}
