<div align="center">
  <img src="docs/assets/logo.png" alt="A# logo" width="96" />
</div>

# A# (ASHARP)

**A full-stack TypeScript framework for building web, mobile, desktop, and backend applications — one language, one framework, from UI to API.**

A# gives you React's familiarity and speed on the frontend, combined with
the structure and completeness of frameworks like Angular, Spring Boot, or
.NET on the backend — without the ceremony that usually comes with them.
Learn A#, and you can build the whole application: interface, API, and
everything in between.

## Why A#

Becoming a "full-stack developer" today usually means learning several
unrelated ecosystems: a frontend framework, a separate backend framework
or runtime, and often a backend-as-a-service tool (Firebase, Supabase) to
avoid learning a real backend at all. Each has its own conventions, its
own tooling, its own mental model.

A# standardizes that path into one framework:

- **Frontend**: components, props, state, JSX-like syntax — immediately
  familiar if you know React
- **Backend**: structured APIs, dependency injection, and conventions in
  the spirit of Angular/Spring Boot/.NET — without their typical
  scaffolding slowness or decision friction
- **One language throughout** — TypeScript only, frontend and backend,
  so nothing you learn is wasted switching sides of the stack
- **Official, integrated tooling** — no assembling a router, a backend
  framework, an ORM, and a build tool separately

## Status

A# is early and under active development.

Working today:

- `asharp create [name]` scaffolds a real, runnable TypeScript project
- A#'s own JSX runtime — components written in `.tsx` compile through
  A#'s transform (not React's) into real DOM output
- Components can compose JSX and render actual visible content in a
  browser (proven manually; not yet wired through `asharp dev`)
- An official site (`docs/`) — Home, Docs, Contributing, and Developer
  pages, with the full brand kit applied

Not yet implemented: local state, event handling, routing, styling
integration, a real dev server/bundler, and the entire backend/API
layer. See [docs/ROADMAP.md](./docs/ROADMAP.md) for the full breakdown.

## Getting Started

```bash
npx asharp create my-app
```

_(Full getting-started docs are coming as the framework stabilizes —
see [docs](https://aymanissa-dev.github.io/asharp/docs) for the current CLI workflow.)_

## Learn More

- [Official Site](https://aymanissa-dev.github.io/asharp/) — the full A# site: home, docs, contributing, developer profile
- [docs/VISION.md](./docs/VISION.md) — what A# is, and what it deliberately is not
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — how the framework is structured
- [docs/ROADMAP.md](./docs/ROADMAP.md) — current progress and what's next
- [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) — how to contribute
- [docs/DESIGN.md](./docs/DESIGN.md) — design tokens and system behind the site
- [docs/BRANDING.md](./docs/BRANDING.md) — logo usage and visual identity

## License

MIT © [Ayman Issa](https://aymanissa.dev)
