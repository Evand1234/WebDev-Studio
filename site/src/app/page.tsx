import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Showcase } from "@/components/showcase/Showcase";
import { Work } from "@/components/sections/work/Work";
import { Packages, packagesJsonLd } from "@/components/sections/packages/Packages";
import { Faq, faqJsonLd } from "@/components/sections/faq";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <span id="top" />
        <Hero />
        <Showcase />
        <Work />
        <HowItWorks />
        <Packages />
        <Faq />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
