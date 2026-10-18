import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BrandMasters",
    short_name: "BrandMasters",
    description: "A Johannesburg web design studio. They see your site first.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8F8",
    theme_color: "#3F6F82",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
