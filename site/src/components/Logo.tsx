export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      <span className="logo__mark" aria-hidden="true">B</span>
      <span className="logo__word">BrandMasters</span>
    </span>
  );
}
