# 21st.dev references

Collected 18 Oct 2026 for the BrandMasters site. These are starting points, not a shopping list: open each, look at the live preview, and keep only what fits the clean, premium direction in `03-design-direction.md`. Take the principle, restyle to our palette, never ship a component as-is.

**How these were checked:** the links come from 21st.dev's own pages and search. For the ones marked ✓, the component's page description was read and matches the note. None of the live previews could be viewed from the planning session (no browser), so whoever plans a section must open the previews and judge them by eye before choosing.

Install any component into the Next.js site with: `npx shadcn@latest add "<the component's registry URL from its 21st.dev page>"`.

## Showcase (the "plays like a video" scroll piece) — top priority
| Component | Link | Why |
|---|---|---|
| Container Scroll Animation (Aceternity) ✓ | https://21st.dev/@manuarora700/components/container-scroll-animation | A device/screen tilts in 3D and settles flat as you scroll. Classic, smooth, standard. Good opening for the showcase: the weak site arrives on screen. |
| Sticky Scroll Reveal (Aceternity) | https://21st.dev/aceternity/sticky-scroll-reveal | Text steps scroll on one side while a pinned visual changes on the other. This is the skeleton for "the phone stays put and its screen changes step by step". |
| Scroll media expansion hero ✓ | https://21st.dev/@arunachalam/components/scroll-expansion-hero | Media grows to fill the screen as you scroll. Good for the moment the new site "takes over". |
| Animated Video on Scroll | https://21st.dev/@youcefbnm/components/animated-video-on-scroll | Scroll-scrubbed media. Study how it keeps scrubbing smooth; we'd use stills or code, not a visible video. |
| Animated Cards Stack ✓ | https://21st.dev/@youcefbnm/components/animated-cards-stack | Cards stack and swap as you scroll (Motion). Option for showing several client types or the build steps. |
| Story scroll ✓ (GSAP) | https://21st.dev/@boudjadjasamira/components/story-scroll | GSAP-based scroll storytelling. Reference for the GSAP + ScrollTrigger setup. |
| Image Comparison Slider ✓ | https://21st.dev/@wensity/components/before-after-card | Draggable before/after with keyboard support. A simple, satisfying "old site vs our site" moment. |

## Hero
| Component | Link | Why |
|---|---|---|
| Hero Section with Device Mockups | https://21st.dev/@solaceui/components/hero-section-6 | Hero with phone/laptop mockups. Closest to what we want: says "we build websites" in one look. |
| Hero Parallax (Aceternity) | https://21st.dev/@manuarora700/components/hero-parallax | Rows of site screenshots drifting at different speeds. A clean way to show "sites for every kind of business". |
| Smooth Scroll Hero | https://21st.dev/@ishamsu/components/smooth-scroll-hero | Calm scroll-linked hero motion. Check how smooth it is on mobile. |
| Hero scroll animation (ui layout) | https://21st.dev/@uilayout.contact/components/hero-scroll-animation | Hero that hands off into the next section on scroll. Useful for flowing hero into showcase without a "section break". |
| Text Rotate (landing hero) | https://21st.dev/@danielpetho/components/text-rotate/landing-hero | Rotating word in the headline ("for plumbers / salons / guesthouses"). Standard, friendly, shows we build for anyone. |
| Hero Gallery Scroll Animation | https://21st.dev/@youcefbnm/components/hero-gallery-scroll-animation | Gallery of images that moves with scroll. Alternative to Hero Parallax. |

## Devices (phone, laptop, browser)
| Component | Link | Why |
|---|---|---|
| Iphone Mockup (scott clayton) | https://21st.dev/@lovesickfromthe6ix/components/iphone-mockup | Configurable iPhone frame. Check it meets the phone standard (15 Pro proportions, dynamic island, screen fully filled by live content). |
| Iphone (Berat Berkay Gökdemir) | https://21st.dev/@beratberkayg/components/iphone | Second iPhone option to compare. |
| Safari (Magic UI) ✓ | https://21st.dev/@dillionverma/components/safari | Browser frame for showing the desktop site. |
| Macbook Pro (Ali Imam) | https://21st.dev/@designali-in/components/macbook-pro | Laptop frame for the showcase. |

## How it works / process
| Component | Link | Why |
|---|---|---|
| Process Timeline | https://21st.dev/community/components/youcefbnm/process-timeline | Steps from first call to launch, with the payment steps as a calm timeline. |
| Text Reveal (Magic UI) | https://21st.dev/@dillionverma/components/text-reveal | Words light up as you scroll. Good for one short line ("They see your site first."), not paragraphs. |

## Packages
| Component | Link | Why |
|---|---|---|
| Pricing Section (brijr) | https://21st.dev/@brijr/components/pricing-section | Clean three-tier layout. |
| Pricing Section (ui layout) | https://21st.dev/@uilayout.contact/components/pricing-section-3 | Alternative tier layout with a highlighted middle plan (Professional). |
| Pricing (Codehagen) | https://21st.dev/community/components/Codehagen/pricing/default | Another clean option to compare. |

## FAQ
| Component | Link | Why |
|---|---|---|
| FAQ Accordion (scrollxui) | https://21st.dev/@scrollxui/components/frequently-asked-questions-with-accordion | Standard, clean accordion. Probably the right level of "normal". |
| Faq 5 (Shadcnblocks) | https://21st.dev/@shadcnblockscom/components/faq-5 | Simple shadcn FAQ block; easy to style. |
| FAQ Accordion Section ✓ | https://21st.dev/@kedhareswer/components/slit-type-faq | Search plus rows that fill with ink when opened. More distinctive; only if it stays calm. |

## Contact and final call to action
| Component | Link | Why |
|---|---|---|
| Call to Action (brijr) | https://21st.dev/@brijr/components/call-to-action-1/call-to-action-four | Big, clear closing CTA. Swap the form for WhatsApp / call / email buttons. |
| Cta 4 (Shadcnblocks) | https://21st.dev/@shadcnblockscom/components/cta-4 | Simple CTA block alternative. |
| Contact (Ravi Katiyar) | https://21st.dev/@ravikatiyar/components/contact | Contact section layout to borrow from (we use tap-to-WhatsApp, not a form). |

## Navigation and footer
| Component | Link | Why |
|---|---|---|
| Floating Nav (ruixenui) | https://21st.dev/community/components/ruixenui/floating-nav/default | Small floating menu with a few anchors that scroll the one page. |
| Footer (prebuiltui, modern minimal) | https://21st.dev/community/components/prebuiltui/footer-1/modern-minimal-footer | Minimal footer: logo, contact actions, slogan. |
| Motion Footer | https://21st.dev/@jahed/components/motion-footer | Footer with a little motion, if the minimal one feels flat. |

## Whole-page templates (for overall feel, spacing and rhythm)
| Template | Link | Why |
|---|---|---|
| Elena Voss Portfolio Template (Hyperiux) | https://21st.dev/@hyperiux/templates/elena-voss-portfolio-template | Evan likes it: every section different, one cohesive feel. Live preview: https://elena-voss-portfolio-template-v3.21st.app |
| Agency Landing (Hirael) ✓ | https://21st.dev/@mohammadshehadeh/templates/hirael-agency-landing | Bright agency page: full-screen hero, editorial about section, featured-work grid, dark closing CTA. Close to the "standard premium studio" structure we want. |
| Agency templates (browse) | https://21st.dev/community/templates/s/agency | More agency sites to compare. |
| Landing page templates (browse) | https://21st.dev/community/templates/s/landing-page | Same, wider. |

## Saved for later (not for the BrandMasters site)
- Liquid sculpture hero (21st.dev): Evan likes it, doesn't fit BrandMasters. Maybe for a client.

## Browse pages (when you need more options)
- Heroes: https://21st.dev/community/components/s/hero
- Scroll animation: https://21st.dev/community/components/s/scroll-animation
- Mockups: https://21st.dev/community/components/s/mockup
- Pricing: https://21st.dev/community/components/s/pricing-section
- FAQ: https://21st.dev/community/components/s/faq
- CTA: https://21st.dev/community/components/s/cta
- Before/after: https://21st.dev/community/components/s/before-after
- Footer: https://21st.dev/community/components/s/footer
