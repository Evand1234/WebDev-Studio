type Props = {
  size?: number;
  /** "light" = for light backgrounds (slate tile); "dark" = for dark backgrounds (mint tile). */
  tone?: "light" | "dark";
  className?: string;
  title?: string;
};

const TONES = {
  light: { tile: "#3f6f82", top: "#ffffff", bot: "#a7e2d1" },
  dark: { tile: "#a7e2d1", top: "#0b151b", bot: "#345d6e" },
} as const;

/** The BrandMasters mark: a "B" made of two stacked building blocks on a rounded tile. */
export function BrandMark({ size = 32, tone = "light", className, title }: Props) {
  const t = TONES[tone];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect width="64" height="64" rx="15" fill={t.tile} />
      <path fillRule="evenodd" fill={t.top} d="M19 13H36a9 9 0 0 1 0 18H19Z M28 19.5H34.5a2.5 2.5 0 0 1 0 5H28Z" />
      <path fillRule="evenodd" fill={t.bot} d="M19 33H40a9.5 9.5 0 0 1 0 19H19Z M28 39.5H38a2.5 2.5 0 0 1 0 5H28Z" />
    </svg>
  );
}
