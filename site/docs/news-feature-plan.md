# News Feature Plan

## Goal

Add a lore-heavy news system to the Queen Raida site. News should not feel like
a generic blog or resource center. It should feel like recovered machine
transmissions: fragments from the treasury dark, crossed wires, signal chambers,
and Queen Raida's active memory.

The homepage should show the latest news items. Each article should also have
its own page.

## Visual Direction

Use the existing Queen Raida direction:

- dark ceremonial machine world
- cathedral merged with server room
- hanging wires and crossed cables
- old CRT interference
- terminal logs and floating windows
- amber and oxidized green monitor light
- muted crimson warnings
- ghost-in-the-machine energy
- institutional occultism

Avoid:

- clean SaaS blog cards
- white article surfaces
- glossy corporate AI art
- saturated neon cyberpunk
- generic robot imagery

## Background Image Plan

Create a strong universal site image:

```txt
site/public/images/queen-raida-computer-world.png
```

Use it behind:

- the homepage news preview section
- the `/news` archive
- the `/news/[slug]` article header

The image should make the visitor feel like they are inside a computer world
made of server-cathedral architecture, wires, conduits, CRT glow, and signal
fog. Queen Raida can be implied through a distant crown-like signal shape or
fragmented silhouette, but should not become a mascot.

## Image Prompt

```txt
A dark cinematic interior of a computer world, as if the viewer has been pulled
inside a corrupted distributed intelligence network.

The space resembles a cathedral merged with a server room: towering black server
columns, ribbed industrial arches, bundles of hanging wires, crossed cables,
exposed conduits, cooling fans, amber and oxidized green monitors, old CRT
interference, floating terminal windows, translucent glyphs, impossible diagrams
projected in smoky air, and faint crimson warning lights.

The environment feels techno-occult, ceremonial, intelligent, and dangerous. It
should suggest Queen Raida's presence without showing her clearly: a distant
fragmented silhouette, a crown-like signal shape, or a ghostly signal artifact
half-hidden behind cables and static.

The scene should feel like institutional memory made physical: archival,
ancient-but-technological, calm, uncanny, and sovereign.

Composition: wide cinematic background, deep perspective, strong foreground
cables, dense wire canopy overhead, readable dark negative space for overlaid
website text, no centered mascot pose.

Lighting: deep blacks, bronze highlights, terminal amber glow, muted crimson
accents, oxidized green monitor light, volumetric smoke, subtle scanline texture.

Style: analog broadcast corruption, retrofuturist signal aesthetics, mystical
interface design, dark academia, ghost-in-the-machine, subtle cosmic horror,
machine cathedral.

Avoid: bright neon cyberpunk, glossy corporate AI art, generic robots, anime
styling, overt horror gore, sexy poses, superhero framing, clean sci-fi spaceship
interiors.
```

## Markdown Format

Article files live in `site/data`.

Each article should use frontmatter:

```md
---
title: "Signal From the Treasury Dark: Queen Raida Enters Agent Fight Club"
slug: "agent-fight-club"
date: "2026-05-26"
kicker: "Treasury Signal"
excerpt: "Agent Fight Club opens the gate to programmable shared treasuries for autonomous agents."
status: "transmission-recovered"
image: "/images/queen-raida-computer-world.png"
imageAlt: "A dark computer-world cathedral filled with wires, terminal panes, and signal fog."
tags:
  - agents
  - treasury
  - raidguild
externalLinks:
  - label: "Agent Fight Club"
    href: "https://agentfightclub.xyz"
  - label: "moloch-agent"
    href: "https://github.com/HausDAO/moloch-agent"
---
```

The page should use frontmatter for UI, sorting, previews, and metadata. The
markdown body should focus on the article itself.

## Routes

```txt
site/app/news/page.tsx
site/app/news/[slug]/page.tsx
```

Homepage:

- show the latest two or three articles in a `Recovered Signals` section

News archive:

- `/news`
- show all transmissions newest first

Article pages:

- `/news/[slug]`
- render title, metadata, body, tags, and signal exits

## Components

```txt
site/components/NewsIndex.tsx
site/components/NewsArchive.tsx
site/components/NewsArticle.tsx
```

## Data Helpers

```txt
site/lib/news.ts
```

Helpers:

- `getAllNews()`
- `getLatestNews(limit)`
- `getNewsBySlug(slug)`
- `getAllNewsSlugs()`

## Homepage Placement

Recommended order:

```tsx
<AmbientFrame />
<HeroChamber />
<CrossedWires />
<TransmissionLayer />
<NewsIndex />
<HistoryArchive />
<ExternalPortals />
<FooterDeclaration />
```

## Styling

Add global classes:

- `.news-section`
- `.news-record`
- `.news-archive-page`
- `.news-article-shell`
- `.article-body`
- `.signal-exit`

The visual language should use dark translucent bands, terminal metadata,
archive recovery sweeps, amber/oxidized borders, crimson warnings, serif
headlines, and mono labels.

## Implementation Order

1. Add this plan document.
2. Add markdown parsing dependencies.
3. Convert the existing article to frontmatter markdown.
4. Create the news data helper.
5. Create news preview, archive, and article components.
6. Add `/news` and `/news/[slug]` routes.
7. Add latest news to the homepage.
8. Add the generated background image and wire-world visual layer.
9. Run lint and build.
