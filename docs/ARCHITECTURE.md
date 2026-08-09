# ARCHITECTURE.md

This document describes how A# is structured — the major systems, how
they relate, and the design direction for each. Sections marked
**(planned)** describe intended direction; nothing in code yet beyond
the CLI's `create` command exists to back them.

## High-Level Structure

```
A#
├── Core — application lifecycle, entry point
├── Components — frontend AND backend component model
├── Rendering (planned)
├── Reactivity/State (planned)
├── Routing (frontend) (planned)
├── Backend/API layer (planned)
├── Authentication (planned)
├── Data access layer (planned)
├── Forms (planned)
├── HTTP client (planned)
├── Styling (planned — CSS, Tailwind)
├── CLI — in progress
└── Tooling (build, dev server) (planned)
```

These are framework capabilities, not necessarily separate published
packages — some may combine as the framework matures.

## CLI (Current — In Progress)

The only part of A# that exists in working code today.

- Built as `@asharp/cli`, a TypeScript package compiled to a runnable
  `asharp` binary via npm's `bin` field
- Uses Node's built-in `process.argv` for command routing (no
  third-party CLI library yet, by deliberate choice — kept minimal
  while the command surface is still small)
- `asharp create [name]` scaffolds a new project folder — supports
  both an interactive prompt (beginner-friendly) and a positional
  argument (`asharp create my-app`, for speed)
- `dev`, `build`, `preview` are stubbed — routing exists, behavior
  does not yet

## Frontend Architecture (Planned)

The frontend follows the React-familiarity promise from VISION.md:

- **Component model**: typed components, props, JSX-like syntax —
  structurally close enough to React that existing presentational
  components should require minimal changes to adopt
- **State**: local component state to start; shared/application state
  designed later once the component lifecycle is proven
- **Routing**: officially integrated, not bolted on — no external
  router required for a standard A# app
- **Styling**: CSS and Tailwind CSS only, officially supported

## Backend/API Architecture (Planned)

The backend is where A# diverges most from typical TypeScript
frameworks. It targets three qualities simultaneously, each modeled
on a different category of existing framework:

| Quality                    | Reference point   | What it means for A#                                                        |
| -------------------------- | ----------------- | --------------------------------------------------------------------------- |
| **Speed**                  | Go                | Efficient defaults, minimal unnecessary abstraction layers                  |
| **Prototyping ease**       | Express, Node     | Should feel as fast to spin up a working API as Express does                |
| **Structural seriousness** | Spring Boot, .NET | Dependency injection, clear layering, conventions that scale to large teams |

**Same component model as the frontend.** This is the key
differentiator from typical backend frameworks: backend logic in A#
is authored using the same JSX-like component structure and
conventions as the frontend, not a separate syntax or mental model. A
developer who already understands an A# frontend component should
find backend code structurally familiar, not like switching
frameworks entirely.

**Structure**:

- Dependency injection as a first-class pattern, not an add-on
- Clear separation between routes/controllers, business logic, and
  data access
- Conventions strict enough that a backend written by one A#
  developer is readable by another, without a project-specific style
  guide

**API layer**: REST as the default interaction model (simple, widely
understood), with GraphQL-style query flexibility available where an
application needs to request exactly the data shape it wants rather
than being locked to fixed REST response shapes. The exact mechanism
(a GraphQL layer, or a REST-with-flexible-querying hybrid) is not yet
decided.

**Authentication**: JWT access tokens plus refresh tokens, built into
the framework rather than left entirely to each application to
implement from scratch.

**Security posture**: A# will never claim to be "hack-proof" — no
system is. The goal is to meaningfully raise the cost and difficulty
of a successful attack through secure defaults, rather than relying
on every individual developer to configure security correctly by
hand.

## Data Access Layer (Planned)

- **Target databases**: PostgreSQL and MongoDB as the primary
  supported databases, with Redis for caching/ephemeral data
- **Access pattern**: all data access written in TypeScript directly
  — no Prisma-style ORM layer planned. The exact abstraction (a
  lightweight typed query builder vs. thin typed wrappers over
  existing native drivers) is not yet decided, but it stays close to
  the underlying database rather than hiding behind a heavy
  abstraction layer
- **No separate query language or DSL** beyond what TypeScript itself
  and each database's native capabilities already provide

## Tooling (Planned)

- `asharp dev`, `asharp build`, `asharp preview` will eventually own
  the full build pipeline (TypeScript processing, asset handling,
  environment variables) the way Vite does today — internally, A#'s
  early tooling may use Vite under the hood as an implementation
  detail, not a public dependency developers configure directly

## Platform and Build Order

1. **Web frontend** — current focus
2. **Backend/API layer** — next
3. **Mobile**
4. **Desktop**

This order is deliberate: each stage should be genuinely usable
before the next begins, rather than leaving several platforms
permanently half-finished.
