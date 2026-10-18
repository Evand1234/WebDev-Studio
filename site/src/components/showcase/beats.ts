import { waLink } from "@/config/contact";

export const beats = [
  { kicker: "The old site", title: "Found on Google. Then this loads.", sub: "Customers often check your website before they call." },
  { kicker: "The problem", title: "Where’s the number?", sub: "Pop-ups, tiny links, and the phone number buried at the very bottom." },
  { kicker: "What we learn", title: "We keep what works.", sub: "Your reviews and your photos stay. We fix what costs you calls." },
  { kicker: "The rebuild", title: "And rebuild the rest.", sub: "Same business, rebuilt around one job: getting people to call or book." },
  { kicker: "The result", title: "One tap. Booked.", sub: "That’s what we build." },
] as const;

export const showcaseCta = {
  label: "Get a site like this",
  href: waLink("Hi BrandMasters, I saw the Marlow Street example and I'd like a website like that."),
};

export const showcaseNote = "Concept example: Marlow Street Barbers is an invented business, and the timings are illustrative.";
