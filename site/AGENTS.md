# Queen Raida Site Agents Guide

This guide is for agents creating or editing Queen Raida news articles in the
site. The news feature is a static Next.js markdown system, not a CMS.

## Article Location

News articles live in:

```txt
site/data/
```

Use one markdown file per article. Prefer this file name shape:

```txt
YYYYMMDD-short-topic-slug.md
```

Example:

```txt
20260526-moloch-agent.md
```

The date in the filename is for humans and file sorting. The rendered article
date comes from frontmatter.

## Required Source Material

Before writing public copy, gather enough source material to support the
article. Useful sources include:

- Direct human request context.
- Approved Prism memory, digests, artifacts, or project state.
- Public GitHub repositories, issues, pull requests, releases, or commits.
- Approved DAO, proposal, cohort, meeting, Discord, CMS, or project materials.
- Existing Queen Raida docs in `docs/`.

If the source is thin, stale, private, or uncertain, keep the article as a
draft outside the publish path or clearly state what confirmation is needed.
Do not turn guesses into lore.

## What Agents May Generate

Agents may generate:

- A proposed title, slug, kicker, excerpt, tags, and external links.
- The article body from approved source material.
- Queen Raida-flavored framing that stays grounded in the facts.
- Link labels and contextual descriptions.
- Suggested social teaser copy for human review.

Agents should not generate unsupported claims about:

- Governance decisions, treasury actions, funding approvals, or production
  changes.
- Client work, private member context, or internal operations.
- Queen Raida having authority to publish, merge, spend, vote, approve, or
  execute when humans still control those gates.

## Frontmatter Format

Every article should start with YAML frontmatter:

```md
---
title: "The Moloch Agent: Rails for the Treasury Dark"
slug: "moloch-agent"
date: "2026-05-26"
kicker: "Treasury Rails"
excerpt: "Moloch Agent gives autonomous agents operational and financial rails for shared treasuries, proposals, and onchain coordination."
status: "rails-online"
image: "/images/queen-raida-computer-world.png"
imageAlt: "A dark computer-world cathedral filled with wires, terminal panes, and signal fog."
tags:
  - agents
  - treasury
  - moloch
externalLinks:
  - label: "moloch-agent"
    href: "https://github.com/HausDAO/moloch-agent"
---
```

Field guidance:

- `title`: Public article title. Specific, grounded, and Queen Raida-flavored.
- `slug`: URL slug used at `/news/[slug]`. Keep it lowercase and stable.
- `date`: ISO date in `YYYY-MM-DD` format. Use UTC-safe calendar dates.
- `kicker`: Short section label shown in cards and article headers.
- `excerpt`: One concise sentence for cards and metadata.
- `status`: Short machine-status label, such as `transmission-recovered`,
  `rails-online`, or `signal-confirmed`.
- `image`: Site-public image path. The current default news image is
  `/images/queen-raida-computer-world.png`.
- `imageAlt`: Descriptive alt text for the image asset, even when the current
  component treats the hero image as decorative.
- `tags`: Lowercase topic tags. Prefer three to five.
- `externalLinks`: Public receipts and onward paths. Use stable URLs.

If `slug` is omitted, `site/lib/news.ts` derives it from the filename after
removing a leading `YYYYMMDD-` prefix. Prefer setting `slug` explicitly.

## Body Format

After frontmatter, write the article as markdown:

```md
# Article Title

Opening signal.

## Section Heading

Short paragraphs. Concrete facts. Receipts where useful.
```

Body rules:

- Include one `#` heading that matches or closely tracks `title`.
- Use `##` headings for major sections.
- Keep paragraphs compact.
- Use lists when they improve scanning.
- Link source artifacts directly when public and approved.
- Avoid raw HTML unless the component already supports the need.
- Do not include local filesystem paths, secrets, private URLs, or debug output.

## Voice And Content Shape

Use Queen Raida's established voice from `docs/persona.md`:

- Clear before clever.
- Specific before dramatic.
- Public-safe by default.
- Strange only after the useful point lands.

For news articles, a good structure is:

1. Open with the concrete signal: what happened or what exists.
2. Explain why it matters to RaidGuild, Queen Raida, agents, treasuries, or the
   relevant ecosystem.
3. Name the receipts: repos, sites, proposals, releases, artifacts, or public
   links.
4. Add Queen Raida framing without obscuring the facts.
5. Close with the next action, open question, or invitation.

Use the lore system as atmosphere, not evidence. Phrases like "signal",
"ledger", "gate", "rails", and "treasury dark" can carry the voice, but they
should never replace a factual claim.

## Publishing Safety

Before placing an article in `site/data`, check it against:

- `../docs/publishing-policy.md`
- `../docs/safety-and-sanitizer.md`
- `../docs/media-inspiration.md`

The article should be ready for human review before it lands in the publish
path. If approval is missing, say so in the PR or request notes.

Always remove:

- Secrets, credentials, private keys, tokens, and private account identifiers.
- Private Discord, meeting, client, member, financial, or governance details
  unless explicitly approved for public use.
- Claims that Queen Raida completed an action when only a draft, plan, or
  proposed action exists.
- Over-specific claims that the available receipts do not support.

## Implementation Notes

The news implementation currently uses:

- `site/lib/news.ts` for markdown parsing, sorting, slug lookup, and date
  formatting.
- `site/components/NewsIndex.tsx` for the homepage latest-news section.
- `site/components/NewsArchive.tsx` for `/news`.
- `site/components/NewsArticle.tsx` for `/news/[slug]`.
- `site/app/news/page.tsx` and `site/app/news/[slug]/page.tsx` for routes and
  metadata.

Articles are sorted newest first by the frontmatter `date`. The homepage shows
the latest three articles.

## Validation

After adding or editing an article, run from `site/`:

```bash
npm run lint
npm run build
```

Then inspect:

- `/` for the `Recovered Signals` section.
- `/news` for archive ordering and card text.
- `/news/[slug]` for article rendering, links, tags, and metadata.

If a page fails to build, check frontmatter indentation first. YAML lists and
`externalLinks` are the most common place for quiet mistakes.
