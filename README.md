# Sprout UI

Ultra-lightweight, sustainable, zero-dependency UI library for the web. Use the built CSS and JS in any project for a complete, accessible UI system. Semantic HTML first; minimal JavaScript.

## Goals

- **Lightweight** — Small footprint. No framework dependency.
- **Sustainable** — System fonts, minimal effects, dark default, reduced-motion respected.
- **Semantic-first** — Real HTML elements and ARIA; variants via single classes.
- **Minimal JS** — Theme, modal, toasts, tabs, dropdown; most behaviour is CSS or native.

## Status

- **GitHub:** [akhildesai20/Sprout-UI](https://github.com/akhildesai20/Sprout-UI) — repo is public.
- **npm:** Published as [@akhildesai20/sprout-ui](https://www.npmjs.com/package/@akhildesai20/sprout-ui). Current version: **0.1.1**. Install from npm, use CDN, or clone the repo and use the built files in `dist/`.

## Installation

```bash
npm install @akhildesai20/sprout-ui
```

## Usage

### Plain HTML (script tag)

Link the CSS and load the bundle. The bundle injects styles and runs the JS; `window.Sprout` is set and components auto-initialize.

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My app</title>
  <link rel="stylesheet" href="node_modules/@akhildesai20/sprout-ui/dist/sprout.min.css">
</head>
<body>
  <button>Click me</button>
  <script src="node_modules/@akhildesai20/sprout-ui/dist/sprout.bundle.js"></script>
</body>
</html>
```

Or use the bundle only (it includes the CSS):

```html
<script src="node_modules/@akhildesai20/sprout-ui/dist/sprout.bundle.js"></script>
```

In a built app, point the paths to your bundled or copied assets (e.g. `dist/sprout.min.css`, `dist/sprout.bundle.js`). If you clone the repo instead of using npm, use the files in the repo’s `dist/` folder the same way.

### Plain HTML via CDN

The package is available on jsDelivr and unpkg. Use the version you need (e.g. `0.1.1`) or `latest` (not recommended for production).

**jsDelivr:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@akhildesai20/sprout-ui@0.1.1/dist/sprout.min.css">
<script src="https://cdn.jsdelivr.net/npm/@akhildesai20/sprout-ui@0.1.1/dist/sprout.bundle.js"></script>
```

**unpkg:**

```html
<link rel="stylesheet" href="https://unpkg.com/@akhildesai20/sprout-ui@0.1.1/dist/sprout.min.css">
<script src="https://unpkg.com/@akhildesai20/sprout-ui@0.1.1/dist/sprout.bundle.js"></script>
```

### ESM / bundler (Vite, Rollup, etc.)

After installing the package:

```js
import "@akhildesai20/sprout-ui/css";
import Sprout from "@akhildesai20/sprout-ui";

Sprout.init();
```

Or with explicit paths:

```js
import "@akhildesai20/sprout-ui/dist/sprout.min.css";
import Sprout from "@akhildesai20/sprout-ui";

Sprout.init();
```

After `Sprout.init()`, modals, toasts, tabs, dropdowns, and other components work. You can also use `window.Sprout` (e.g. `Sprout.toast('Hello')`) when the script runs in the browser.

## Documentation

Full documentation is published at **https://akhildesai20.github.io/Sprout-UI/** (GitHub Pages). To run the docs locally: `npm run docs:dev` and open the URL shown.

## Links

- **GitHub:** [akhildesai20/Sprout-UI](https://github.com/akhildesai20/Sprout-UI)
- **npm:** [@akhildesai20/sprout-ui](https://www.npmjs.com/package/@akhildesai20/sprout-ui)

**What’s included:** One CSS file and one JS file (or a single bundle). Design tokens, typography, layout primitives, forms, feedback, navigation, data display, overlays. Docs and benchmarks live in the repo.

## Project structure

| Path | Purpose |
|------|--------|
| `src/` | Source: `sprout.css`, `sprout.js`. Single source of truth. |
| `dist/` | Built assets (min CSS, min JS, single bundle). Tracked so clone-and-run works. |
| `docs/` | VitePress documentation site (guides, components, tokens, reference). |
| `benchmarks/` | Benchmark pages and results template (Lighthouse, DevTools). |
| `scripts/` | Build and scoping scripts (`bundle.js`, `scope-sprout-css.js`). |
| `demo/` | Kitchen-sink demo (`demo/index.html`). |
| `package.json` | Scripts and metadata. |
| `SPROUT.md` | Design and behaviour spec (for contributors and AI). |
| `tests/install/` | Smoke tests: `plain-html.html` (bundle), `esm.html` (ESM). Serve repo root and open these to verify install. |

## Local development

```bash
npm install
npm run build
```

- **Demo:** `npm run dev` — serves repo root; open the URL and go to `/demo/`.
- **Docs:** `npm run docs:dev` — runs VitePress; open the URL shown.
- **Benchmarks:** After `npm run build`, serve the repo root (e.g. `npx serve .`) and open `/benchmarks/baseline.html`, `sprout-components.html`, `sprout-interactions.html`. See `benchmarks/README.md` for how to run and record results.

Generated files: `dist/*` from `npm run build`; `docs/.vitepress/theme/sprout-scoped.css` from `node scripts/scope-sprout-css.js` (run after changing `src/sprout.css`). See `CONTRIBUTING.md` for details.

Set `data-theme="dark" | "light" | "high-contrast"` on `<html>` to pick a theme, or omit for OS preference.

## Components (overview)

| Area | Examples |
|------|----------|
| Buttons | `<button>`, classes: `outline`, `ghost`, `danger`, `success`, `sm`, `lg` |
| Forms | Input, textarea, select, checkbox, radio, toggle, range, fieldset |
| Feedback | Alerts (`role="alert"`), badges, progress, meter, spinner, skeleton |
| Data | Cards, stats, avatars, table, code block, divider |
| Navigation | Navbar, breadcrumb, pagination, sidebar |
| Overlays | Modal (`data-modal`), `<sp-dropdown>`, `<sp-tabs>`, toasts, tooltip |

Full reference is in the docs (run `npm run docs:dev`).

## Customizing

Override design tokens in your CSS after Sprout:

```css
:root {
  --sp-primary: #your-color;
  --sp-radius-md: 8px;
}
```

## For AI assistants

If you use Cursor, Copilot, Claude, etc., with this repo:

- **Spec:** `SPROUT.md` defines design, naming, and behaviour.
- **Source:** `src/sprout.css`, `src/sprout.js`. Do not edit generated files (`dist/*`, `docs/.vitepress/theme/sprout-scoped.css`) by hand; change source and rebuild/regenerate.
- **Conventions:** Semantic HTML first; single-class variants; tokens prefixed `--sp-`; `<sp-tabs>`, `<sp-dropdown>` for tabs and dropdowns; toasts via `Sprout.toast()`; modal via `data-modal="id"`.

## License

MIT. See [LICENSE](LICENSE).
