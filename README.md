# Sprout UI

Ultra-lightweight, sustainable, zero-dependency UI library for the web. Use the built CSS and JS in any project for a complete, accessible UI system. Semantic HTML first; minimal JavaScript.

## Goals

- **Lightweight** — Small footprint. No framework dependency.
- **Sustainable** — System fonts, minimal effects, dark default, reduced-motion respected.
- **Semantic-first** — Real HTML elements and ARIA; variants via single classes.
- **Minimal JS** — Theme, modal, toasts, tabs, dropdown; most behaviour is CSS or native.

## Status

Sprout is in active development. Core CSS and JS, docs, benchmarks, and a kitchen-sink demo are in place. **Distribution (npm, CDN) is the next phase** — not complete yet. You can use the library by cloning this repo and using the files in `dist/`, or by copying them into your project.

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

## Local development

```bash
npm install
npm run build
```

- **Demo:** `npm run dev` — serves repo root; open the URL and go to `/demo/`.
- **Docs:** `npm run docs:dev` — runs VitePress; open the URL shown.
- **Benchmarks:** After `npm run build`, serve the repo root (e.g. `npx serve .`) and open `/benchmarks/baseline.html`, `sprout-components.html`, `sprout-interactions.html`. See `benchmarks/README.md` for how to run and record results.

Generated files: `dist/*` from `npm run build`; `docs/.vitepress/theme/sprout-scoped.css` from `node scripts/scope-sprout-css.js` (run after changing `src/sprout.css`). See `CONTRIBUTING.md` for details.

## Using Sprout today

Without npm or CDN, use the built files from this repo:

1. Copy `dist/sprout.min.css` and `dist/sprout.min.js` into your project, or
2. Use the single-file bundle: `dist/sprout.bundle.js` (injects CSS and runs JS).

Example (relative to your HTML):

```html
<link rel="stylesheet" href="path/to/sprout.min.css">
<script type="module">
  import Sprout from './path/to/sprout.min.js';
  window.Sprout = Sprout;
  if (Sprout.init) Sprout.init();
</script>
```

Or with the bundle (no module):

```html
<script src="path/to/sprout.bundle.js"></script>
```

Set `data-theme="dark" | "light" | "high-contrast"` on `<html>`, or omit for OS preference.

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
