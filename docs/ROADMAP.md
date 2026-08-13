<div align="center">
  <img src="assets/logo.png" alt="A# logo" width="96" />
</div>

# ROADMAP.md

This roadmap reflects actual progress, not aspirational status. If a
box isn't checked, it isn't built yet.

## Phase 0 — Framework Specification

- [x] Define framework purpose and boundaries (VISION.md)
- [x] Define technical architecture and direction (ARCHITECTURE.md)
- [x] Write README.md
- [x] Write ROADMAP.md
- [x] Write CONTRIBUTING.md
- [x] Build official site (docs/index.html, docs.html, contributing.html, developer.html)
- [x] Define and document brand kit (DESIGN.md, BRANDING.md)

## Phase 1 — CLI Foundation

- [x] Set up monorepo with npm workspaces
- [x] Create `@asharp/cli` package with TypeScript build pipeline
- [x] `asharp create [name]` — scaffolds a project folder, with both
      interactive prompt and positional-argument support, plus a
      real runnable starter template (package.json, tsconfig.json,
      src/index.ts)
- [x] `asharp` shows help text; rejects unknown commands clearly
- [x] `asharp dev` / `build` / `preview` — wired to `@asharp/core`
      with purpose-appropriate messaging (not yet real dev
      server/build output/preview serving)
- [ ] `asharp dev` — actually starts a live development server
- [ ] `asharp build` — actually produces a production bundle
- [ ] `asharp preview` — actually serves a production build locally

## Phase 2 — Frontend Component Model

- [x] Define `createApplication()` entry point and app lifecycle
- [x] Component model: typed `Component<TProps>` / `ComponentOutput`
- [x] JSX support: A#'s own `jsx`/`jsxs` runtime, `jsxImportSource`
      pointed at `@asharp/core`, `.tsx` compiles through A#, not React
- [x] DOM rendering: `render()` mounts real DOM nodes, proven working
      in an actual browser, including visible text content
- [x] Components can compose JSX with intrinsic tags (e.g.
      `<h1>Welcome, {props.name}</h1>`)
- [x] Local component state (`state()`) — full rewipe-and-rebuild on
      change, no DOM diffing yet. Loses transient DOM state (input
      focus, scroll position) on every update. Real diffing is a
      substantial separate effort — worth revisiting once components
      have interactive inputs where focus-loss becomes a real
      usability problem. See ARCHITECTURE.md.
- [ ] Event handling (clicks, input, etc.)
- [ ] Routing (officially integrated, no external router required)
- [ ] Styling support: CSS and Tailwind CSS
- [ ] Error boundaries and dev error overlay
- [ ] Real bundler/dev-server integration (currently proven only via
      manual `serve` + browser import maps, not `asharp dev` itself)

## Phase 3 — Backend/API Layer

- [ ] Define backend component/module structure (same JSX-like model
      as frontend)
- [ ] Dependency injection system
- [ ] Routing/controller layer
- [ ] REST API support
- [ ] GraphQL-style flexible querying (mechanism not yet decided)
- [ ] Authentication: JWT access + refresh tokens
- [ ] Data access layer: PostgreSQL, MongoDB, Redis support
- [ ] Security hardening defaults

## Phase 4 — Mobile

- [ ] Not started. Begins after the frontend and backend layers are
      stable and genuinely usable.

## Phase 5 — Desktop

- [ ] Not started. Begins after mobile is stable.

## Out of Scope (For Now)

These are explicitly not being worked on until the phases above are
solid — see VISION.md for why:

- A#-branded hosting, authentication-as-a-service, or database
  products (A# integrates with these; it does not become one)
- DevTools browser extension
- File-based routing vs. config-based routing decision
- Prisma-style ORM (explicitly not planned — see ARCHITECTURE.md)

---

← [Back to README](../README.md) · [Official Site](https://aymanissa-dev.github.io/asharp/)
