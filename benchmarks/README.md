# Sprout benchmarks

Benchmark setup for measuring Sprout’s weight, runtime cost, rendering efficiency, and interaction overhead. **No refactors to Sprout core** — this folder is for measurement scaffolding only.

## Benchmark pages

| Page | Purpose |
|------|--------|
| **baseline.html** | Plain semantic HTML, minimal styling, no Sprout. Use to measure browser cost of a similar structure without the library. |
| **sprout-components.html** | Loads `dist/sprout.min.css` and `dist/sprout.min.js`. Dense static components (buttons, forms, feedback, data, nav) plus a **stress** section (many buttons, cards, badges, form rows, table rows, stats, avatars). Use to measure layout/paint/style recalc cost. |
| **sprout-interactions.html** | Same assets. Interactive demos: dropdowns, tabs, modal, toasts, dismissible alerts, navbar/sidebar toggles, tooltips. Buttons to trigger repeated actions (e.g. “Show 10 toasts”, “Open/close modal 5×”). Use to measure JS execution and interaction overhead. |

## How to run locally

1. **Build Sprout** (required for component and interaction pages):
   ```bash
   npm run build
   ```
2. **Serve the project** so `../dist/` and same-origin module loading work. For example:
   ```bash
   npx serve .
   ```
   Or use any static server with the repo root as document root. Open:
   - `http://localhost:3000/benchmarks/baseline.html`
   - `http://localhost:3000/benchmarks/sprout-components.html`
   - `http://localhost:3000/benchmarks/sprout-interactions.html`
3. **Do not** open the HTML files via `file://` — module scripts and paths may fail.

## How to record results

1. **Build weight**  
   After `npm run build`, note sizes of `dist/sprout.min.css`, `dist/sprout.min.js`, `dist/sprout.bundle.js`. The bundle script may report gzip sizes; otherwise use `gzip -c <file> | wc -c` (or another gzip tool).

2. **Lighthouse**  
   In Chrome: DevTools → Lighthouse. Run for each of the three benchmark pages (same device/conditions). Record Performance score, Total Blocking Time, and any “unused CSS/JS” or similar notes.

3. **Chrome DevTools Performance**  
   For each page: start recording, load the page (or trigger the interaction), wait a few seconds, stop. Inspect: Scripting, Style recalculation, Layout, Paint, long tasks. Optionally note heap usage.

4. **Interaction tests**  
   On `sprout-interactions.html`, perform one interaction at a time (open dropdown, switch tab, show toast, open modal, toggle sidebar, dismiss alert) with Performance recording on. Note main-thread cost and long tasks.

5. **Write results**  
   Fill in `results.md` with the numbers and short notes. Re-run after major changes.

## Comparing baseline vs Sprout

- **baseline.html** = cost of raw HTML + minimal CSS, no framework.
- **sprout-components.html** = same kind of content structure but with Sprout CSS + JS; compare scripting, style, layout, and paint to baseline.
- **sprout-interactions.html** = adds interaction and repeat triggers; compare scripting and long tasks when toggling UI.

Use the same browser, device, and (where possible) throttling so comparisons are meaningful. Do not use this framework to make environmental or carbon claims; it measures transfer size, JS cost, layout/paint, and interaction overhead only.
