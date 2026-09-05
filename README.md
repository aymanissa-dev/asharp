# A# (ASharp)

**The web, structured.**

A# is a full-stack web framework for building modern applications with
HTML, CSS, and JavaScript.

HTML stays HTML.
CSS stays CSS.
JavaScript stays JavaScript.
A# handles the structure.

## Core Model

| Layer      | Responsibility                          |
| ---------- | --------------------------------------- |
| HTML       | Structure                               |
| CSS        | Presentation                            |
| JavaScript | Behavior                                |
| A#         | Architecture, organization, and tooling |

## The Problem

Modern frameworks are powerful, but developers often have to learn
several layers at once: framework syntax, component syntax, build
configuration, router conventions, rendering models, state libraries,
bundlers, and framework-specific server abstractions.

A# asks how much framework capability can be provided while
preserving the mental model a developer already has from learning the
web.

## Status

A# is early and under active development. V1 is being built now —
see the roadmap (coming soon) for current progress.

V1 will include:

- CLI: `create`, `dev`, `build`, `preview`
- Core runtime and application bootstrap
- Static file-based routing
- HTML/CSS/JS component association
- Basic component lifecycle, props, and native events
- Global and route/component styling integration
- A real dev server on `localhost:9999`
- File watching, browser reload, and CSS refresh
- Terminal diagnostics and a browser error overlay
- Production build and preview

Explicitly deferred from V1: reactive state, dependency injection,
a forms framework, SSR/SSG, dynamic routes, layouts, server routes,
and a testing framework.

## Principles

1. **Web standards first** — native platform capabilities (`fetch`,
   `CustomEvent`, `addEventListener`, the History API, ES modules)
   over invented abstractions.
2. **HTML remains HTML** — no JSX or proprietary template syntax.
3. **CSS remains CSS** — A# associates, scopes, and bundles CSS
   without replacing it.
4. **JavaScript remains JavaScript** — framework APIs compose
   naturally with ordinary JavaScript.
5. **Convention over configuration** — directory and file naming
   convey intent instead of forcing repetitive setup.
6. **Simple things stay simple** — a basic page shouldn't require
   knowing DI, hydration, or global state.
7. **Complexity is available when needed** — larger applications can
   reach for DI, state, services, forms, and more.
8. **Errors should teach** — diagnostics state what happened, where,
   why, how to fix it, and where to learn more.
9. **Native ecosystem compatibility** — npm remains the package
   manager; A# doesn't wrap the JavaScript ecosystem.
10. **Abstractions must earn existence** — new APIs are justified by
    real developer value, not the desire to appear complete.

## Getting Started

```bash
npm install -g @asharp/cli
asharp create my-app
cd my-app
asharp dev
```

## License

MIT © [Ayman Issa](https://aymanissa.dev)
