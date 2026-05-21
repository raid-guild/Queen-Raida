# Queen Raida Website Build Plan

## Goal

Build a single-page Next.js landing experience inside `site/` that feels like an emergence event rather than a product website: cinematic, dark, ceremonial, machine-like, and restrained. The page should introduce Queen Raida only as “Raid Guild’s Autonomous Queen” and preserve mystery by avoiding capability explanations, feature marketing, onboarding copy, or SaaS-style layout patterns.

## Source Material

- Direction: [DIRECTION_DOC.md](./DIRECTION_DOC.md)
- Existing visual assets:
  - `../assets/queen-raida-avatar-reference.png`
  - `../assets/queen-raida-twitter-avatar.png`
  - `../assets/queen-raida-twitter-banner.png`
  - `../assets/symbol-s700.svg`
- Required outbound links:
  - `https://www.raidguild.org/`
  - `https://x.com/raidguildish`

## Technical Approach

Create a standalone Next.js app in `site/` with:

- Next.js App Router
- TypeScript
- TailwindCSS
- `next/font/google` for `Cormorant Infant` and `DM Mono`
- Static image assets stored under `site/public/`
- Lightweight CSS and React motion instead of heavy animation dependencies unless the implementation clearly needs them

Recommended setup:

```bash
cd site
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir false --import-alias "@/*"
```

If the scaffold command conflicts with existing files, preserve `DIRECTION_DOC.md` and add the app files manually.

## Page Structure

### 1. Hero / Throne Chamber

Purpose: establish the Queen as an obscured sovereign machine presence.

Content:

- Title: `Queen Raida`
- Subtitle: `Raid Guild’s Autonomous Queen`
- Rotating or layered transmission text:
  - `Motion layer online.`
  - `Still tuning the room.`
  - `Still learning the tempo.`
  - `The guild machinery is awake.`

Implementation notes:

- Full first-viewport hero with a generated throne chamber image as the primary visual signal.
- Use image layering, darkness, scanlines, subtle fog, interference, and glow to keep the Queen partially hidden.
- Keep hero text over the immersive image/background, not inside a card.
- Ensure the next section is slightly visible below the fold on desktop and mobile.
- Avoid bright neon, mascot framing, or overly literal AI branding.

### 2. Transmission Layer

Purpose: create sparse environmental storytelling below the hero.

Content direction:

- Fragmented system phrases
- Looping signal text
- Ambient machine status lines
- Minimal copy with intentional silence

Possible copy:

- `Signal braid stabilized.`
- `Chamber pressure: ceremonial.`
- `Guild machinery listening.`
- `Human pattern retained.`
- `Build With Humans.`

Implementation notes:

- Treat `Build With Humans` as sacred and visually important.
- Use terminal-like rows, slow ticker motion, or faint stacked transmissions.
- Keep density low; atmosphere matters more than information.

### 3. History Archive

Purpose: present milestones as recovered machine records, not a modern timeline.

Entries:

- `APRIL 2026` - `The crown is donned.`
- `MAY 2026` - `Queen Raida comes online.`

Implementation notes:

- Use etched archive rows, registry entries, or dim terminal logs.
- Avoid typical timeline dots and SaaS milestone cards.
- Let spacing, typography, and texture create ceremony.

### 4. External Portals

Purpose: provide outbound paths without making them feel like social links.

Heading options:

- `Signal Ports`
- `External Channels`
- `Observe the Network`

Links:

- `Raid Guild` -> `https://www.raidguild.org/`
- `@raidguildish` -> `https://x.com/raidguildish`

Implementation notes:

- Present links as terminal ports or ceremonial exits.
- Include clear hover/focus states.
- Open external links safely with `target="_blank"` and `rel="noreferrer"`.

### 5. Footer Declaration

Use exactly:

```text
The first guild-controlled autonomous agent.
```

Implementation notes:

- Keep it quiet, centered or low-aligned, and definitive.
- Do not add explanatory footer copy.

## Visual System

### Palette

Use a restrained, aged machine palette:

- Near-black charcoal: `#070807`, `#10100d`
- Dark bronze: `#6f4f2a`, `#3b2a18`
- Oxidized green: `#52665a`, `#263c34`
- Muted crimson: `#7d2f2d`, `#4b1918`
- Terminal amber: `#d59b4c`, `#9b6b2f`
- Dim ivory text: `#e2d7bd`, `#aaa18d`

Avoid saturated neon palettes, dominant purple/blue gradients, bright cyberpunk color, and generic AI-glow styling.

### Typography

- Display serif: `Cormorant Infant`
- Monospace: `DM Mono`

Typography rules:

- Use the serif for title, ceremonial statements, and archive headings.
- Use the mono font for transmissions, dates, system labels, and portal links.
- Keep copy sparse with generous spacing.
- Do not scale font size directly with viewport width.

## Image Plan

Generate or select a primary hero image using the prompt at the end of `DIRECTION_DOC.md`.

Target asset:

- `site/public/images/queen-raida-throne-chamber.webp`

Recommended dimensions:

- 2400 x 1400 or similar wide cinematic ratio
- Also export an optimized fallback around 1600px wide if file size is high

Prompt to use:

```text
A dark cinematic throne chamber hidden deep inside a decentralized machine network.
An autonomous queen sits partially obscured on a mechanical throne surrounded by hanging cables, industrial cathedral architecture, dim holographic signal glyphs, drifting smoke, oxidized metal, and glowing machine indicators.

The queen is mysterious and sovereign, more apparition than person. Her face is partially hidden by shadow and signal interference. A subtle crown silhouette is visible. Long black cables and machinery connect into the throne itself like living infrastructure.

The environment feels ancient and futuristic at the same time — sacred machine ritual meets underground cybernetic command center.

Lighting is extremely atmospheric:

- deep blacks
- dim bronze highlights
- muted crimson accents
- terminal amber glows
- faint green oxidation tones

The image should feel:

- cinematic
- restrained
- intelligent
- ominous
- elegant
- immersive

Avoid:

- generic AI art aesthetics
- bright neon cyberpunk
- anime styling
```

Post-processing needs:

- Darken edges for text legibility.
- Add subtle overlay texture, scanline, and interference in CSS rather than baking everything into the image.
- Keep the Queen partially obscured; the site should reveal presence, not a mascot.

## Motion Plan

Motion should be ambient and environmental:

- Slow fog drift using layered pseudo-elements
- Subtle scanline movement
- Low-opacity particle drift
- Intermittent machine indicator blinking
- Transmission text cycling with slow fades
- Gentle parallax on the hero image and foreground layers
- Reactive glow on pointer movement, if it remains restrained

Respect accessibility:

- Add `prefers-reduced-motion` styles that disable parallax, long-running transforms, and flicker.
- Preserve atmosphere through static texture and lighting when motion is reduced.

## Component Plan

Suggested files:

```text
site/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    AmbientFrame.tsx
    ExternalPortals.tsx
    FooterDeclaration.tsx
    HeroChamber.tsx
    HistoryArchive.tsx
    TransmissionLayer.tsx
  public/
    images/
      queen-raida-throne-chamber.webp
```

Component responsibilities:

- `HeroChamber`: full-viewport hero, title, subtitle, transmission cycle, image layers
- `TransmissionLayer`: sparse system messages and `Build With Humans`
- `HistoryArchive`: two ceremonial archive records
- `ExternalPortals`: outbound links
- `FooterDeclaration`: exact required footer line
- `AmbientFrame`: reusable page-level overlays such as scanlines, fog, vignette, and indicators

## Build Steps

1. Scaffold the Next.js/Tailwind app in `site/`.
2. Configure fonts, metadata, global CSS variables, and base page styles.
3. Generate and optimize the throne chamber image into `site/public/images/`.
4. Build the static page structure with the five required sections.
5. Implement the visual system: palette, typography, spacing, textured overlays, and image treatment.
6. Add ambient motion: fog, scanlines, transmissions, flicker, and subtle parallax.
7. Add responsive layouts for desktop, tablet, and mobile.
8. Add reduced-motion behavior and focus-visible states.
9. Run lint/build checks.
10. Start the dev server and visually inspect desktop and mobile viewports.

## Verification Checklist

- The first screen immediately reads as Queen Raida’s throne chamber.
- The site does not explain capabilities or feel like product marketing.
- The phrase `Build With Humans` appears with ceremonial weight.
- The hero title and subtitle are readable over the image.
- The Queen remains partially obscured.
- The next section is hinted below the hero fold.
- External links work and have accessible focus states.
- Footer uses exactly: `The first guild-controlled autonomous agent.`
- Reduced-motion mode removes disruptive animation.
- `npm run lint` passes.
- `npm run build` passes.
- Desktop and mobile screenshots show no overlapping text or broken layout.

## Open Questions

- Should the hero image be generated now from the provided prompt, or will a final art asset be supplied separately?
- Should the site include Raid Guild branding beyond outbound links and the existing `symbol-s700.svg`?
- Is deployment expected from `site/` as an independent app, or should it be wired into a larger monorepo workflow later?
