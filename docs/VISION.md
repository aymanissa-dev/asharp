# VISION.md

## What A# Is

A# (ASHARP) is a full-stack, TypeScript-only application framework.

It lets a developer build the frontend, the backend API, and the
connection between them, using one language and one coherent set of
conventions — rather than assembling a separate frontend framework,
backend framework, and glue code from unrelated ecosystems.

A# occupies a category most existing tools split in two:

- Frontend frameworks (React, Angular, Vue) that assume you'll bring
  your own backend
- Backend frameworks (Spring Boot, .NET, NestJS) that assume you'll
  bring your own frontend
- Backend-as-a-service tools (Firebase, Supabase) that let you skip
  learning a real backend entirely

A# is none of these in isolation. It is the framework for someone who
wants to build the whole application without switching ecosystems to
do it.

## The Core Problem A# Solves

Today, calling yourself a "full-stack developer" usually means one of
two paths:

1. Learn a frontend framework, then separately learn a backend
   framework, then learn how to wire them together — each with its
   own tooling, conventions, and mental model.
2. Learn a frontend framework, then lean on a backend-as-a-service
   tool to avoid learning a real backend — which caps how much you
   actually understand about how your own application works.

Both paths require juggling multiple, unrelated toolchains just to
ship one application. A# standardizes that path into a single
framework, so the skills you build on the frontend directly transfer
to the backend.

## The Core Promise

**React's familiarity and speed. Angular's structure and completeness.
Spring Boot and .NET's backend seriousness. One language throughout.**

Concretely:

- A React developer should recognize A#'s component model immediately
  — components, props, state, events, composition, JSX-like syntax.
- A#'s backend should provide what enterprise backend frameworks
  provide — structured APIs, dependency injection, clear conventions
  — without the slow scaffolding and heavy ceremony frameworks like
  Angular are often criticized for.
- Everything — frontend, backend, tooling, configuration — is
  TypeScript. No context-switching languages to build one application.

## What A# Is Not

A# does not attempt to be:

- A programming language
- A replacement for TypeScript itself
- An authentication service
- A database
- A storage service
- An API marketplace
- A hosting provider
- A backend-as-a-service (Firebase/Supabase-style) product
- A thin wrapper around React with no independent identity
- A component marketplace

A# **builds** applications — frontend and backend. Services like
authentication providers, databases, and hosting are things an A#
application can integrate with, not things A# reimplements.

## Relationship to React

React is A#'s migration bridge and initial frontend foundation, not
its final ceiling.

The transition from an existing React project to A# should be:

- Familiar — A# components should look structurally like React
  components
- Incremental — existing presentational components should keep
  working with minimal changes
- Documented and tooled — A# should eventually be able to analyze a
  React project and report what's compatible before anything is
  rewritten
- Low-risk — migration should never silently rewrite a production
  application without visibility into what changed

React familiarity is the entry point. The backend, tooling, and
full-stack conventions are where A# becomes something React alone
was never trying to be.

## Platform and Stack Order

A# develops in this order, deliberately, so that no single target
stays permanently unfinished:

1. **Web frontend** — where the current ecosystem (TypeScript, Vite,
   React foundations) is strongest
2. **Backend/API layer** — structured, TypeScript-native APIs that
   an A# frontend (or any frontend) can consume
3. **Mobile**
4. **Desktop**

Attempting all of these simultaneously would likely leave all of them
unfinished. Each stage should be genuinely usable before the next
begins.

## How This Document Should Be Used

Every proposed feature should be checked against this document, not
just against what feels technically interesting to build. If a
feature doesn't serve the core promise — React familiarity, backend
completeness, one language throughout — it likely doesn't belong in
A#, regardless of how interesting it is to build.
