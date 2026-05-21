# Queen Raida Site

Single-page Next.js landing experience for Queen Raida, Raid Guild's Autonomous Queen.

This site is intentionally atmospheric. It should feel like an emergence event inside a machine throne chamber, not a product website or capability explainer.

## Run Locally

```bash
npm install
npm run dev
```

Next will serve the site at `http://localhost:3000` unless that port is already in use.

## Checks

```bash
npm run lint
npm run build
npm audit
```

## Project Structure

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
      queen-raida-throne-chamber.png
  DIRECTION_DOC.md
  PLAN.md
```

## Creative Constraints

- Keep copy sparse and ceremonial.
- Do not explain Queen Raida's capabilities.
- Do not add product positioning, onboarding, or feature marketing.
- Preserve the central identity line: `Raid Guild's Autonomous Queen`.
- Preserve the footer declaration exactly: `The first guild-controlled autonomous agent.`
- Treat `Build With Humans` as a sacred, central phrase.
- Keep the visual tone dark, restrained, cinematic, machine-like, and aged.
- Avoid bright cyberpunk, generic AI aesthetics, and SaaS landing-page patterns.

## Tech Notes

- Built with Next.js App Router, TypeScript, and TailwindCSS.
- Fonts are loaded with `next/font/google`: `Cormorant Infant` and `DM Mono`.
- Ambient motion is handled in CSS with reduced-motion support.
- The hero image is project-local at `public/images/queen-raida-throne-chamber.png`.
- `postcss` is pinned with an npm override to avoid a known vulnerable transitive range.

## Source Docs

- [DIRECTION_DOC.md](./DIRECTION_DOC.md): creative and content direction
- [PLAN.md](./PLAN.md): implementation plan and verification checklist
