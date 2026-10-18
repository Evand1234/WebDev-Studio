// Single source of truth for the FAQ: the visible accordion and the FAQPage JSON-LD both read this.
export const faqItems = [
  { q: "How long does it take?", a: "The build takes 1 to 2 weeks. We start once the 50% deposit is in." },
  { q: "What do you need from me?", a: "Just say hello on WhatsApp and tell us about your business and your current website, if you have one. We design around your photos and what your customers already say about you, and we'll tell you exactly what else we need on our first chat." },
  { q: "Do you write the words?", a: "Yes, we can. Writing a page costs R350. We'll talk through what you already have and what you'd like us to write." },
  { q: "Can I update it myself?", a: "We'll go through how changes work with you on the first call, so you know exactly what to expect before you decide." },
  { q: "What does the care plan cover?", a: "The care plan is R500 a month, and Care Plus is R1,200 a month. Premium includes 3 months of Care Plus. We'll go through exactly what each one covers with you on the first call." },
  { q: "How does payment work?", a: "You pay a 50% deposit to get started and the other 50% before launch. After that, a care plan is there if you want us to look after the site." },
  { q: "Do I need to already have a website?", a: "No. We build websites for you from scratch. If you already have one, we learn from it and build it better." },
] as const;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};
