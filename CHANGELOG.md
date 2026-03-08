# Changelog

All notable changes to Sprout UI are documented here.

## [0.1.1] — 2025

### Changed

- **Stat component** — Refined internal spacing and rhythm. `.stat` now uses an explicit `gap` for consistent spacing between label, value, and change; improves balance when used in cards and dashboard layouts.

## [0.1.0] — 2025

First npm release. Package name: `@akhildesai20/sprout-ui`.

### Included

- **Core CSS** (`dist/sprout.min.css`) — Design tokens, reset, typography, layout primitives, buttons, forms, feedback, navigation, data display, overlays. Dark, light, high-contrast, and auto themes.
- **Core JS** (`dist/sprout.min.js` ESM, `dist/sprout.bundle.js` script) — Theme API, modal, dismissible alerts, toasts, copy button, sidebar/nav collapse, tooltip, `<sp-tabs>` and `<sp-dropdown>` web components. Auto-init on DOMContentLoaded. Bundle exposes `window.Sprout`.
- **Consumption:** `import Sprout from "@akhildesai20/sprout-ui"` and `import "@akhildesai20/sprout-ui/css"`, or script tag + link for plain HTML.

### Known limitations

- Docs and benchmarks live in the GitHub repo only; not shipped in the npm package. Documentation is deployed to GitHub Pages.
