# CONTRIBUTING.md

Thanks for your interest in contributing to A#. This project is early
and evolving quickly — these guidelines will grow as the framework
does.

## Before You Start

A# has a defined direction — see [VISION.md](./VISION.md) and
[ARCHITECTURE.md](./ARCHITECTURE.md) before proposing a feature.
Every change should be checkable against those documents: does it
serve React familiarity, backend completeness, and one language
throughout? If not, it likely doesn't belong in A# — see VISION.md's
"What A# Is Not" section.

For anything beyond a small fix, open an issue to discuss the
approach before writing code. This avoids spending time on a change
that doesn't fit the project's direction.

## Local Setup

```bash
git clone https://github.com/aymanissa-dev/asharp.git
cd asharp
npm install
```

This is an npm workspaces monorepo. Each package lives under
`packages/`, sharing a single root `node_modules` install.

## Working on a Package

```bash
cd packages/cli
npx tsc          # compile
npx tsc --noEmit # type-check only, no output files
node dist/index.js <command>   # run the compiled CLI directly
```

## Conventions

- **TypeScript only.** No `.js` source files — see VISION.md.
- **Strict mode is on** (`"strict": true` in every `tsconfig.json`).
  Code should type-check cleanly with no `any` used to bypass errors.
- **Errors should be clear, not cryptic.** If a user-facing command
  can fail, it should fail with a specific, actionable message —
  not a raw stack trace. See the CLI's existing error handling in
  `packages/cli/src/index.ts` for the expected style.
- **Compiled output (`dist/`) is never committed.** It's generated
  from `src/` and is already covered by `.gitignore`.

## Commit Messages

Short, specific, imperative mood: `"Add X"`, `"Fix Y"`, not `"added
stuff"` or `"updates"`. Look at recent commit history for examples.

## Submitting Changes

1. Create a new branch for your change — do not commit directly to
   `main`
2. Make your change, following the conventions above
3. Confirm the affected package still compiles cleanly
   (`npx tsc --noEmit`)
4. Open a pull request with a clear description of what changed and
   why

Only the project maintainer merges pull requests into `main`, after
review. This keeps `main` stable and avoids conflicting or misaligned
changes landing without oversight — especially important while A#'s
direction is still actively taking shape.

## Questions

Open an issue — there's no other contributor channel set up yet.
