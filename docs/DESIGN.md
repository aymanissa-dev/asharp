# DESIGN.md — A# Design System

Design tokens and system-level decisions for A#'s official site and
brand surfaces. This is the source of truth — the site's CSS custom
properties in `index.html` should match these values exactly.

## Principles

- **Developer First** — built by developers, for developers.
- **Modular by Design** — everything is a block; compose with clarity.
- **Performance** — fast, efficient, and reliable by default.

## Color

### Primary

| Token       | Value                      |
| ----------- | -------------------------- |
| `--primary` | `#00FF7A` (Electric Green) |

### Neutrals

| Token          | Value     |
| -------------- | --------- |
| `--true-black` | `#0A0A0A` |
| `--charcoal`   | `#131313` |
| `--slate`      | `#1E1E1E` |
| `--gray`       | `#A1A1AA` |
| `--light`      | `#F5F5F7` |
| `--white`      | `#FFFFFF` |

### Semantic

| Token       | Value     | Use                |
| ----------- | --------- | ------------------ |
| `--success` | `#22C55E` | Success states     |
| `--warning` | `#F59E0B` | Warnings           |
| `--error`   | `#EF4444` | Errors             |
| `--info`    | `#3B82F6` | Informational      |
| `--purple`  | `#8B5CF6` | Accent (secondary) |
| `--cyan`    | `#06B6D4` | Accent (secondary) |

## Typography

| Role               | Font           | Weights                      |
| ------------------ | -------------- | ---------------------------- |
| Display / Headings | Satoshi        | Bold, Medium, Regular, Light |
| Body / UI          | SF Pro Display | Semibold, Regular, Light     |
| Code / Monospace   | JetBrains Mono | Regular, Medium, Bold        |

## Spacing Scale (8px base)

`8px · 16px · 24px · 32px · 40px · 48px · 56px · 64px · 72px · 80px · 96px`

## Border Radius

`4px · 8px · 12px · 16px · 24px · Full (999px)`

## UI Elements

- **Primary button** — Electric Green fill, True Black text
- **Secondary button** — outline, `--gray` border
- **Tertiary button** — text-only, no border
- Inputs, selects, checkboxes, radios, tags, sliders, and toggles all
  use the same border radius and spacing scale as buttons — no
  one-off values.

## Code & Terminal

- Code blocks: JetBrains Mono, dark surface (`--charcoal`), syntax
  colors drawn from the semantic palette (keywords/purple, functions/
  info-blue, strings/success-green, comments/gray)
- Terminal output: same font, Electric Green for prompts and success
  checkmarks

## Logo

`docs/assets/logo.png` — a hexagonal mark fusing the hashtag (`#`)
and the letter `A`. Represents structure, modularity, clarity, and
forward movement. Rendered in Electric Green on True Black.

## Application Surfaces

The mark is used consistently across: app icon, CLI icon, npm package
badge (`@asharp/core`), OG/social image, and GitHub avatar — same
mark, same green, no per-surface recoloring.
