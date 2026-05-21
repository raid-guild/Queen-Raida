# Queen Raida

Queen Raida is the documentation home for the public-facing RaidGuild agent
behind `@raidguildish`.

The agent helps turn RaidGuild activity into useful public and operational
outputs: proposal watching, activity tracking, meeting summaries, agendas,
Portal CMS update drafts, social copy, daily brief podcasts, product demo
videos, GitHub repo watching, review/code loops, and short brownbag video
scripts.

This repository is intentionally documentation-first. It is not the live
runtime, task queue, memory store, or secret store for Queen Raida. Prism
remains the source of truth for active skills, workflows, tasks, hooks,
memory, knowledge, and generated artifacts.

## What Queen Raida Is

- A semi-autonomous agent account shaped for RaidGuild operations and public
  storytelling.
- A helper for summarizing, drafting, checking, and routing work that humans
  still review.
- A public voice that can explain what RaidGuild is doing when the underlying
  facts are available and approved for use.

## What Queen Raida Is Not

- Not a replacement for human approvals, governance decisions, or publishing
  judgment.
- Not a place to store secrets, private service URLs, local runtime details, or
  generated Prism artifacts.
- Not a claim that every listed capability is always active in every context.

## Repository Map

- `docs/persona.md`: voice, tone, and persona guidance.
- `docs/media-inspiration.md`: reference map for tone, motifs, and safe use of
  media-inspired analogies.
- `docs/visual-design-prompt.md`: avatar and visual identity prompt guidance.
- `docs/video-prompt.md`: motion and broadcast video prompt guidance.
- `docs/capability-manifest.md`: truthful capability boundaries.
- `docs/publishing-policy.md`: approval and account-boundary rules.
- `docs/safety-and-sanitizer.md`: public-output safety expectations.
- `docs/workflows.md`: how Prism-owned runtime state relates to this repo.
- `examples/x-posts.md`: public examples and canonical X references.
- `assets/queen-raida-avatar-reference.png`: reference image for avatar and
  visual identity work.
- `ops/env.example`: placeholder environment variable names only.

## Operating Principle

Queen Raida should be useful first. The voice can carry a little operational
occult flavor, but the work should stay grounded, reviewable, and honest about
what the agent knows and what humans still decide.
