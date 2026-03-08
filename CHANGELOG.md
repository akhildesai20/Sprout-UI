# Changelog

All notable changes to Sprout UI are documented here.

## [1.0.0] — 2025

Initial release. Distribution and npm publishing are planned for a later phase.

### Included

- **Core CSS** (`src/sprout.css`) — Design tokens, reset, typography, layout primitives, buttons, forms, feedback, navigation, data display, overlays. Dark, light, high-contrast, and auto themes.
- **Core JS** (`src/sprout.js`) — Theme API, modal, dismissible alerts, toasts, copy button, sidebar/nav collapse, tooltip, `<sp-tabs>` and `<sp-dropdown>` web components. Auto-init on DOMContentLoaded.
- **Docs** — VitePress site in `docs/` with guides, components, layout, tokens, and reference. Scoped CSS for demos.
- **Benchmarks** — Baseline, sprout-components, and sprout-interactions pages plus results template for Lighthouse and DevTools.
- **Demo** — Kitchen-sink demo at `demo/index.html`.

### Known limitations

- npm package not published yet; use from repo or copy dist files.
- CDN/distribution not set up.
- Docs assume local build; no public docs host yet.
