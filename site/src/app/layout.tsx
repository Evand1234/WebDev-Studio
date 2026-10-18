import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Onest } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["opsz"],
});
const onest = Onest({ subsets: ["latin"], variable: "--font-onest", display: "swap" });

const title = "BrandMasters | Websites for South African businesses";
const description =
  "A Johannesburg web design studio. We build websites for South African businesses. Already have one? We learn from it and build it better.";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandmasters.co.za"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: "BrandMasters", locale: "en_ZA", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F8F8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BrandMasters",
  slogan: "They see your site first.",
  description,
  url: "https://brandmasters.co.za",
  areaServed: "ZA",
  address: { "@type": "PostalAddress", addressLocality: "Johannesburg", addressCountry: "ZA" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" className={`${bricolage.variable} ${onest.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SmoothScroll />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
