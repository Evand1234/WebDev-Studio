import type { ReactNode } from "react";

/**
 * Renders real DOM at a fixed "logical" width and scales it to whatever
 * space the device gives it, using only CSS (container query units).
 * Inside, 1em equals 1 logical px / 16, so content is written in em and
 * stays crisp at any size. No screenshots, no JS measuring.
 */
export function ScaledScreen({ logicalWidth, children }: { logicalWidth: number; children: ReactNode }) {
  return (
    <div className="scaled-screen">
      <div className="scaled-screen__inner" style={{ fontSize: `calc(100cqw * ${16 / logicalWidth})` }}>
        {children}
      </div>
    </div>
  );
}
