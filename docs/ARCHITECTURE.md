<div align="center">
  <img src="assets/logo.png" alt="A# logo" width="96" />
</div>

# ARCHITECTURE.md

This document describes how A# is structured — the major systems, how
they relate, and the design direction for each. Sections marked
**(planned)** describe intended direction; nothing in code yet beyond
the CLI's `create` command and `@asharp/core`'s app lifecycle,
component model, JSX runtime, and DOM renderer exists to back them.

## High-Level Structure

| System                                    | Status      |
| ----------------------------------------- | ----------- |
| Core (application lifecycle, entry point) | Built       |
| Components (frontend)                     | Built       |
| JSX Runtime                               | Built       |
| DOM Rendering                             | Built       |
| Components (backend)                      | Planned     |
| Reactivity / State                        | Planned     |
| Routing (frontend)                        | Planned     |
| Backend / API layer                       | Planned     |
| Authentication                            | Planned     |
| Data access layer                         | Planned     |
| Forms                                     | Planned     |
| HTTP client                               | Planned     |
| Styling (CSS, Tailwind)                   | Planned     |
| CLI                                       | In progress |
| Tooling (build, dev server)               | Planned     |

These are framework capabilities, not necessarily separate published
packages — some may combine as the framework matures.

## CLI — In Progress

Built as `@asharp/cli`, a TypeScript package compiled to a runnable
`asharp` binary via npm's `bin` field.

- Uses Node's built-in `process.argv` for command routing (no
  third-party CLI library yet, by deliberate choice — kept minimal
  while the command surface is still small)
- `asharp create [name]` scaffolds a new project folder — supports
  both an interactive prompt (beginner-friendly) and a positional
  argument (`asharp create my-app`, for speed), with real starter
  files (`package.json`, `tsconfig.json`, `src/index.ts`)
- `dev`, `build`, `preview` are wired to `@asharp/core`'s
  `createApplication()` lifecycle with purpose-appropriate messaging
  — not yet a real dev server, bundler, or preview server

## Frontend Architecture — Built (Core Pieces)

- **Application lifecycle**: `createApplication()` in `@asharp/core`
  — A#'s single, explicit entry point
- **Component model**: `Component<TProps>`, a typed function from
  props to `ComponentOutput<TProps>` — typed, composable, structurally
  close to React
- **JSX runtime**: A#'s own `jsx`/`jsxs` factory functions, exposed at
  `@asharp/core/jsx-runtime`, configured via `jsxImportSource` — real
  `.tsx` syntax compiles through A#'s transform, not React's
- **DOM rendering**: `render()` mounts a `ComponentOutput` as real DOM
  nodes, including text content from JSX children — proven working in
  an actual browser end-to-end

Still planned: local component state, event handling, routing
(officially integrated, no external router required), and CSS/Tailwind
styling support.

## Backend/API Architecture (Planned)

The backend targets three qualities simultaneously, each modeled on a
different category of existing framework:

| Quality                | Reference point   | What it means for A#                                                        |
| ---------------------- | ----------------- | --------------------------------------------------------------------------- |
| Speed                  | Go                | Efficient defaults, minimal unnecessary abstraction layers                  |
| Prototyping ease       | Express, Node     | Should feel as fast to spin up a working API as Express does                |
| Structural seriousness | Spring Boot, .NET | Dependency injection, clear layering, conventions that scale to large teams |

**Same component model as the frontend.** Backend logic in A# is
authored using the same JSX-like component structure and conventions
as the frontend, not a separate syntax or mental model.

**Structure:**

- Dependency injection as a first-class pattern
- Clear separation between routes/controllers, business logic, and
  data access
- Conventions strict enough that a backend written by one A#
  developer is readable by another

**API layer:** REST as the default interaction model, with
GraphQL-style query flexibility available where an application needs
to request exactly the data shape it wants. The exact mechanism is
not yet decided.

**Authentication:** JWT access tokens plus refresh tokens, built into
the framework.

**Security posture:** A# will never claim to be "hack-proof." The
goal is to meaningfully raise the cost and difficulty of a successful
attack through secure defaults.

## Data Access Layer (Planned)

- **Target databases:** PostgreSQL and MongoDB as the primary
  supported databases, with Redis for caching/ephemeral data
- **Access pattern:** all data access written in TypeScript directly —
  no Prisma-style ORM layer planned. Stays close to native drivers
  rather than hiding behind a heavy abstraction layer

## Tooling (Planned)

`asharp dev`, `asharp build`, `asharp preview` will eventually own the
full build pipeline (TypeScript processing, asset handling,
environment variables) the way Vite does today — internally, A#'s
early tooling may use Vite under the hood as an implementation detail,
not a public dependency developers configure directly.

## Official Site — Built

A static, dependency-light site (`docs/`) — plain HTML/CSS/JS, no
build step, no framework. Visual system documented in
[DESIGN.md](./DESIGN.md) and [BRANDING.md](./BRANDING.md).

## Platform and Build Order

1. **Web frontend** — current focus
2. **Backend/API layer** — next
3. **Mobile**
4. **Desktop**

This order is deliberate: each stage should be genuinely usable
before the next begins, rather than leaving several platforms
permanently half-finished.

---

← [Back to README](../README.md) · [Official Site](https://aymanissa-dev.github.io/asharp/)
