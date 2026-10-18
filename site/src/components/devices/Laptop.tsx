import type { ReactNode } from "react";
import { ScaledScreen } from "./ScaledScreen";
import "./devices.css";

/** MacBook style laptop. Children render a live 1280px-wide screen (usually a BrowserFrame). */
export function Laptop({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`laptop ${className}`} aria-hidden="true">
      <div className="laptop__lid">
        <div className="laptop__bezel">
          <span className="laptop__camera" />
          <div className="laptop__screen">
            <ScaledScreen logicalWidth={1280}>{children}</ScaledScreen>
            <span className="laptop__glare" />
          </div>
        </div>
      </div>
      <div className="laptop__base">
        <span className="laptop__lip" />
      </div>
    </div>
  );
}
