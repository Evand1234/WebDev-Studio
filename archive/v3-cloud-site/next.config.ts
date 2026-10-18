import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  reactStrictMode: true,
  // The CSS is inlined into the HTML for speed. The single-file preview inlines it itself, so it builds without this.
  experimental: { inlineCss: !process.env.BM_SINGLE },
};

export default config;
