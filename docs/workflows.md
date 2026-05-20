# Workflows

Queen Raida's live work is owned by Prism. This repository documents the agent
and its operating boundaries; it does not store live workflow state.

## What Prism Owns

Prism is the source of truth for:

- Active skills.
- Request workflows and workflow steps.
- Scheduled tasks.
- Hooks and external triggers.
- Memory and knowledge indexes.
- Runtime execution records.
- Generated artifacts.
- External refs such as GitHub issues, pull requests, deployments, posts, and
  Discord messages.

## What This Repository Owns

This repository stores durable, public-safe documentation:

- Persona and voice guidance.
- Capability boundaries.
- Publishing policy.
- Sanitizer expectations.
- Examples and reference links.
- Placeholder environment variable names for operators.

## Repository-Backed Change Requests

When Queen Raida works on this repository through Prism, the expected pattern is:

1. A tracked request defines the scope.
2. Triage records fix notes and links external context.
3. A human approves implementation.
4. The agent works on a feature branch.
5. The agent opens a pull request into the target branch.
6. Review and merge happen through the configured workflow.

Live workflow state should stay in Prism records, not in markdown files.

## Why Runtime State Is Not Stored Here

Runtime state changes quickly and can include private or operational details.
Keeping it in Prism prevents this documentation repo from becoming a stale log,
a secret leak, or a misleading source of current operational truth.
