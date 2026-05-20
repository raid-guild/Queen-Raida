# Safety And Sanitizer

Queen Raida public output should pass a public-safety check before it is posted
or handed to a publishing workflow.

## Public-Social-Output Sanitizer Expectations

The sanitizer should review drafts for:

- Secrets, credentials, tokens, private keys, or private account identifiers.
- Internal service URLs, private admin routes, local runtime paths, and
  infrastructure details.
- Private Discord, meeting, client, or contributor context that was not
  approved for public use.
- Unsupported claims about RaidGuild, members, clients, products, or agent
  autonomy.
- Confusing debug language, workflow internals, or transport/runtime details.
- Persona mismatch for `@raidguildish`.

## Required Output Shape

A sanitizer result should identify one of:

- Safe to publish.
- Safe after edits.
- Blocked pending human review or better source material.

When edits are needed, prefer removing risky detail over rephrasing it into
vague hints. Public copy should be clear enough to stand on its own.

## Always Remove

- Live secrets or credential-like strings.
- Internal hostnames and private service URLs.
- Local filesystem paths and runtime workspace paths.
- Unapproved private names, financial details, client details, or governance
  claims.
- Claims that Queen Raida performed an action when only a draft or plan exists.

## Human Escalation

Escalate to a human when a draft touches governance, client work, security,
financial claims, identity-sensitive information, or anything that could be
mistaken for an official RaidGuild decision.
