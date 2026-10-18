> **Older reference (Oct 2026, before the 18 Oct direction change).** Principles only. Where this conflicts with `../03-design-direction.md`, the design-direction file wins.

# Video notes: motion and scroll inspiration for Hearth

Principles only. Nothing here is to be copied; all four clips are screen recordings of other people's work, captured from Instagram, so brands, copy and imagery belong to their makers.

## Filename mapping (inferred, please confirm)

The uploaded files have UUID names, not the 131510 / 131842 / 132154 / 132321 timestamps. I mapped them by the `creation_time` metadata order and by Evan's descriptions. Durations fit (the first is about 31s, matching the "30-60s feel").

| Timestamp | Uploaded file | Length | Frame size |
|---|---|---|---|
| 131510 | 716c75be-c521-43be-8719-a47e0aafa21e.mp4 | 31.0s | 848x658 |
| 131842 | 923eb5c5-d037-4c38-8446-b2f569ea08cb.mp4 | 15.0s | 544x812 |
| 132154 | aab1e434-908a-4076-961c-e92ddb6b3c20.mp4 | 9.6s | 566x830 |
| 132321 | 42b4cba2-4a59-4c8c-8601-a816469995e6.mp4 | 16.9s | 476x806 |

Method: 12 evenly spaced frames per video, viewed as a 4x3 contact sheet. Motion is inferred from differences between frames, so timings are approximate. Small on-screen text was read at low resolution.

---

## Video 1 (131510): coded motion demo that explains a product

**What appears.** A product-explainer animation for a website-builder, played as a sequence of full-frame "scenes" inside an Instagram player. Scenes in order:
1. Dark, techy backdrop with floating UI cards (code snippets, a "404" tile, an error panel, a font dropdown). Centred white sans-serif headline, "Websites were never meant to be", with a typing cursor.
2. Cut to a pale, almost white field with soft blue glows. A rounded input card slides in under a heading that starts to appear ("Tell...").
3. Heading "Tell us about your business." The card fills with two thumbnail images and a typed sentence, and a cursor clicks the send arrow.
4. A tilted website card appears with a "Building" status chip. Placeholder blocks fill in as a headline resolves.
5. A fast, blurred, saturated blue circle with a yellow poster card. Giant outlined background words ("PORTFO...") slide behind it.
6. A sage-green scene. "Any style." sits at left with a small counter and a cycling word. A card on the right swaps through styles.
7. The finished site shown as a desktop browser plus a phone, on the pale background. A chat chip reads "Make ordering the main action."
8. "Preview. Edit. Make it yours." A blurred word-by-word reveal, with the device mockups sliding aside.
9. "All included." A domain / hosting / forms chip row, and a field typing a name with a Publish button.
10. "Customers get in touch." A phone on the left, notification cards stacking on the right, and a hand-drawn underline under "touch".
11. Logo end card, then a loop back to the finished-site mockup.

**Motion and transitions (inferred).**
- Each scene has one idea and a short headline. It lasts roughly 2-3 seconds, which is about 12 scenes in 31s.
- Text arrives by typing, blur-to-sharp resolve, or word-by-word fade.
- Objects spring in with slight tilt and depth. Cards and devices are 3D-perspective.
- Scene changes are shape-to-shape or blur-through. The one exception is the hard cut from the dark intro to the light world.
- The cursor is animated like a real user, so the viewer watches the product being used instead of being told about it.
- The same example business (a bakery) is used throughout, so each scene builds on the last.

**Layout and type.** Centred composition with generous empty space. One geometric sans for headlines at large size, and a serif only inside the "generated" website sample. This contrast separates the tool from its output.

**Colour.** The intro is near-black navy. The main body is pale off-white and powder blue with soft glows. Single saturated interludes (cobalt blue with acid yellow, sage green) act as rhythm breaks. The sample site uses warm blush, cream and brick.

**Pacing.** A hook (dark, chaotic, the problem), then calm and clear (the solution as a simple sequence), then one or two loud palette-break scenes for energy, then a payoff and a logo.

**Reusable principles for Hearth.**
- Explain a process as a short chain of single-idea scenes driven by a simulated user action (type, click, result), not by paragraphs.
- Pick one running example and carry it through every step.
- Use one or two intentional palette/tempo breaks to keep a long explainer from feeling flat.
- Contrast a "problem" look with a "solution" look in the first seconds.
- If built in code (CSS/JS), this is a timeline of states with springs and blur-in text. It could also be scroll-driven, with each scene tied to a scroll position.

---

## Video 2 (131842): inspiration and styles ("Websites in 2026")

**What appears.** A hand-held, over-the-shoulder phone recording of a person scrolling or moving a mouse on a desktop monitor, then a laptop, then the monitor again. A caption sits at the top throughout: "Websites in 2026" plus an emoji. The clip is a quick montage of different sites:
1. Architecture / real-estate site. A white, ghostly relief of a building facade sits behind soft text. As the user scrolls, the facade colours in and resolves into a photographic building, with the sky and trees fading up. It looks like a scroll-scrubbed reveal from monochrome model to full-colour render.
2. Bright lime-green site. A small cut-out building image in a tilted frame floats beside small serif text ("The visual identity of..."). The image moves to a new position and crop in the next frame.
3. Dark interior-design / gallery site on a laptop. A first-person walk through a 3D room: shelving, then curtains, then a dark corridor, then warm lit rooms. The camera appears to travel forward on scroll.
4. A near-white loading screen with a tiny centred icon.

**Motion and transitions (inferred).**
- Scroll or drag controls camera depth. A static hero turns into a space you move through.
- Whole-image state changes (grey to colour, empty to populated) scrubbed by scroll position.
- Image cut-outs and masks drift and shift crop between sections.
- A loading screen is part of the experience on heavy pages.

**Layout and type.** The hero is almost entirely imagery. Text is small, thin, and tucked to a corner or margin, with minimal top navigation (small caps, spaced). In the lime site, type is a small serif with an image cut at an angle.

**Colour.** Each site commits to one mood. Pale grey and white that turns terracotta and sky, then a flat saturated lime green, then a dark charcoal and warm amber room. The capture uses a light desk and a dark Instagram frame around them.

**Pacing.** About 15 seconds for 3 to 4 sites, with 3 to 5 seconds each. The video is a montage, so it shows range, not depth.

**Reusable principles for Hearth.**
- Let one visual change over scroll (monochrome to colour, flat to lit) carry the story, with text kept minimal.
- Treat the page as a space the visitor moves through. Even a simple parallax-depth version suggests this.
- Commit each section or site to one strong colour world instead of a neutral default.
- Keep UI text small and out of the way when the imagery is the message.
- Note for performance: these are heavy 3D or large-image pages, so Hearth would need lightweight versions (pre-rendered image sequences, CSS transforms) and a loading state.

---

## Video 3 (132154): showcasing and explanation as people scroll, with supporting text ("Claude Code can't do that")

**What appears.** Another over-the-shoulder recording of scrolling a site on a desktop monitor, with a top caption: "Claude Code can't do that" plus an emoji. The site is for a high-end home builder or architecture firm.
1. Start: a rolled architectural blueprint on a black marble surface with a pen, a small logo mark on the plan, and two buttons below.
2. Scrolling moves the camera down and in. The blueprint tilts away and the view pushes over the marble island into a kitchen. A table, chairs, wooden cabinets and a window appear in order.
3. Further scrolling moves from the kitchen into a living room and a pool and garden through large windows.
4. The page then leaves the immersive hero and enters ordinary content. A white section with a heading ("Exceptional construction, built the right way") and a paragraph. Then a grid of photographed California homes, and a black band with a small image and a statement ("We build where others won't"). The final frame shows the page scrolled back to the hero.

**Motion and transitions (inferred).**
- Image-sequence or video scrubbed by scroll: a continuous camera move through one rendered space, with no visible section cuts.
- Supporting copy and two buttons stay fixed at the lower left of the hero and fade as the scene moves.
- The change from immersive hero to normal sections is a simple scroll-away, like a curtain lifting. Content then arrives in a conventional layout.
- Scrolling back reverses the animation, so the scene is fully scrubbed.

**Layout and type.** The hero is full-bleed and edge-to-edge, with a tiny logo, a small nav row, and a short block of copy at lower left. Below it, a clean grid with small bold headings, black and white sections, and a card grid of photos.

**Colour.** Black marble, warm wood, soft white blueprint paper, with green outside the windows. Below the hero the palette is plain black and white, which makes the hero feel like the exception.

**Pacing.** About 9.6s. A continuous slow push-in for the first two-thirds, then a faster scroll through the regular sections.

**Reusable principles for Hearth.**
- A single "camera move" that follows scroll can explain a space or journey. The visitor effectively walks through the story, while short supporting text stays pinned in one place.
- Anchor the metaphor in the subject (a blueprint turning into a home, which for Hearth could be a room, a warm fire, a table).
- Keep calls to action visible in the immersive section so the effect never hides the way forward.
- Hand off from the showpiece to calm, readable, standard sections. That gives both impact and clarity.

---

## Video 4 (132321): creative all the way down the page, not only the hero

**What appears.** A close recording of a dark luxury perfume / fragrance site on a laptop, with a woman's hand on the trackpad. One clip frame shows a "POV: The client said surprise me" caption over a cut to a woman at a desk with a glowing keyboard. This cut-in is the video-maker's framing, not the site. Sections seen on the site, in order:
1. "Top, Heart and Base": a copper alembic or still bottle on black, headline at left, small meta text and a section label (for example "Olfactory Pyramid") at right, with tiny index numbers.
2. A dark scene with a single rose that rises or glows out of the dark and then sharpens.
3. "Where Perfume Begins": a fully formed rose on black, text left, tiny label right.
4. A glass bowl of liquid on a dark surface, then "Capturing the Scent": rose petals fall into the bowl, with a small glass info panel overlaid.
5. A return to the copper still, with a frosted-glass detail panel (tabs and notes) on top of the image.
6. "Rest, Filter, Bottle": a perfume bottle in front of a mass of pink and peach peonies. Further frames show petals drifting and the bottle turning amber as the section progresses.
7. A loop back to the first scene.

**Motion and transitions (inferred).**
- Each section has its own full-screen scene and one large headline, so every scroll stop is a new composition and not a repeat of the hero.
- Objects transform through the process they describe: petals fall into the bowl, the liquid changes colour, flowers part and then close.
- Layers move at different speeds (foreground petals, mid bottle, background flowers), giving depth.
- Frosted-glass panels slide in on top of images to carry supporting detail without covering the image.
- The scene fades through dark between sections, so the black background acts as a cut.

**Layout and type.** Dark canvas, headline in a refined serif at left, small caps and numerals at right and bottom corners, thin hairline UI, and a small hint text at lower right. A tidy two-column rhythm repeated section to section, with only the image and headline changing.

**Colour.** Near-black with a single accent family per section (copper, rose pink, peach-amber, petal white). The product image supplies the colour.

**Pacing.** About 17s for roughly 5 sections, which is about 3 seconds per scroll stop, with a hard pause at each headline.

**Reusable principles for Hearth.**
- Keep a fixed text template (headline left, metadata right, small labels) and let imagery and motion vary. This keeps the page coherent while staying inventive.
- Make every section earn a distinct visual idea tied to its subject, so interest holds past the hero.
- Use the transitions to tell the process (ingredients becoming product) instead of decoration.
- Use frosted panels for secondary details, so heavy imagery and readable text coexist.
- A dark neutral base lets each section's accent colour carry the mood, which would suit a warm "hearth" palette.

---

## Cross-video patterns worth testing

- One idea per screen or scene, with a short headline and one visual doing the work.
- Scroll or a simulated cursor drives the motion, so the viewer feels they are causing it.
- A fixed text system (position, size, type pair) stays constant while imagery changes.
- Strong per-section colour commitment, with calm, readable sections after the showpiece.
- Plan for performance, loading states, reduced-motion fallbacks and mobile, since none of these clips show them.
