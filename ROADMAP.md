# ROADMAP.md

This roadmap reflects actual progress, not aspirational status. If a
box isn't checked, it isn't built yet.

## Phase 0 — Framework Specification

- [x] Define framework purpose and boundaries (VISION.md)
- [x] Define technical architecture and direction (ARCHITECTURE.md)
- [x] Write README.md
- [x] Write ROADMAP.md
- [x] Write CONTRIBUTING.md

## Phase 1 — CLI Foundation

- [x] Set up monorepo with npm workspaces
- [x] Create `@asharp/cli` package with TypeScript build pipeline
- [x] `asharp create [name]` — scaffolds a project folder, with both
      interactive prompt and positional-argument support
- [x] `asharp` shows help text; rejects unknown commands clearly
- [ ] `asharp create` generates actual starter files (currently
      creates an empty folder only)
- [ ] `asharp dev` — starts a development server
- [ ] `asharp build` — produces a production build
- [ ] `asharp preview` — serves a production build locally

## Phase 2 — Frontend Component Model

- [ ] Define `createApplication()` entry point and app lifecycle
- [ ] Component model: typed components, props, JSX-like authoring
- [ ] Local component state
- [ ] Routing (officially integrated, no external router required)
- [ ] Styling support: CSS and Tailwind CSS
- [ ] Error boundaries and dev error overlay

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
