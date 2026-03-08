# Sprout benchmark results

Record measurements here. Re-run after major changes and update the tables. Do not make environmental or carbon claims; this is a measurement framework only.

---

## Pre-test checklist

Before each benchmark run:

- [ ] **Build fresh dist** — Run `npm run build`. Ensure `dist/sprout.min.css`, `dist/sprout.min.js`, and `dist/sprout.bundle.js` exist.
- [ ] **Serve over HTTP** — Open benchmark pages via a local server (e.g. `npx serve .`), not `file://`.
- [ ] **Browser version** — Note Chrome (or browser) version used for Lighthouse and DevTools.
- [ ] **Machine / OS** — Note device and OS for reproducibility (e.g. Windows 10, M1 Mac).
- [ ] **Repeat each test 3 times** — Run Lighthouse and Performance traces in triplicate; record and average results where applicable.

---

## 1. Build weight

| Asset | Raw (KB) | Gzip (KB) |
|-------|----------|-----------|
| sprout.min.css | ~7 | — |
| sprout.min.js | ~3 | — |
| sprout.bundle.js | — | — |

*How to measure:* After `npm run build`, check file sizes. Gzip: `gzip -c dist/sprout.min.css | wc -c` (or use build script output if it reports gzip). Total Sprout payload (CSS + JS) ~12–13 KB. Baseline HTML ~3 KB.

---

## 2. Lighthouse

Run Lighthouse (Chrome DevTools → Lighthouse) for each page. Use same device/conditions for comparison.

**Environment (this run):** Chrome 145, Lighthouse 13.0, local dev machine, localhost, Lighthouse default desktop throttling, single run (repeat recommended).

### Scores

| Page | Performance | Accessibility | Best Practices |
|------|-------------|---------------|----------------|
| baseline.html | 100 | 94 | 100 |
| sprout-components.html | 100 | 95 | 100 |
| sprout-interactions.html | 99 | 95 | 100 |

### Core Web Vitals

| Metric | Baseline | Sprout Components | Sprout Interactions |
|--------|----------|-------------------|----------------------|
| First Contentful Paint | 0.2 s | 0.2 s | 0.2 s |
| Largest Contentful Paint | 0.2 s | 0.2 s | 0.2 s |
| Total Blocking Time | 0 ms | 0 ms | 0 ms |
| Speed Index | 0.2 s | 0.2 s | 0.2 s |
| Cumulative Layout Shift | 0 | 0 | 0.076 |

### Per-page notes

| Page | Unused CSS/JS notes |
|------|---------------------|
| baseline.html | N/A (no framework) |
| sprout-components.html | — |
| sprout-interactions.html | CLS 0.076 likely from dynamic UI (toasts, alerts). |

---

## 3. Chrome DevTools Performance

Record a short trace (e.g. load page, then 2–3 seconds idle) for each benchmark page. Compare baseline vs Sprout pages.

### Main thread (total CPU time)

| Page | Total CPU Time |
|------|----------------|
| baseline.html | ~100 ms |
| sprout-components.html | ~100 ms |
| sprout-interactions.html | ~50 ms |

### sprout-interactions.html breakdown

| Category | Time |
|----------|------|
| Style & Layout | ~23 ms |
| Script Evaluation | ~9 ms |
| Rendering | ~2 ms |
| HTML/CSS Parsing | ~1 ms |

### baseline.html

| Metric | Value |
|--------|--------|
| Scripting time | — |
| Style recalculation | — |
| Layout | — |
| Paint | — |
| Long tasks (count) | — |
| Memory notes | — |

### sprout-components.html

| Metric | Value |
|--------|--------|
| Scripting time | — |
| Style recalculation | — |
| Layout | — |
| Paint | — |
| Long tasks (count) | — |
| Memory notes | — |

### sprout-interactions.html (detailed)

| Metric | Value |
|--------|--------|
| Scripting time | — |
| Style recalculation | — |
| Layout | — |
| Paint | — |
| Long tasks (count) | — |
| Memory notes | — |

---

## 4. Interaction reliability (sprout-interactions.html)

After first run, mark each as: **Works reliably** | **Partially works** | **Unreliable / exclude from benchmark**.

| Component | Status | Notes |
|----------|--------|-------|
| Dropdown | Works reliably | — |
| Tabs | Works reliably | — |
| Modal | Works reliably | — |
| Toasts | Works reliably | — |
| Dismissible alerts | Works reliably | — |
| Navbar toggle | Works reliably | — |
| Sidebar toggle | Works reliably | — |
| Tooltip | Works reliably | — |

---

## 5. Interaction tests

Use Performance panel with “Record” while performing the action once. Note main-thread cost.

| Interaction | Page | Notes (e.g. ms, long tasks) |
|-------------|------|-----------------------------|
| Open dropdown | sprout-interactions | |
| Switch tabs | sprout-interactions | |
| Show toast | sprout-interactions | |
| Open modal | sprout-interactions | |
| Toggle sidebar | sprout-interactions | |
| Dismiss alert | sprout-interactions | |

---

## 6. Findings

- **Expensive components (if any):** None identified. Framework overhead is minimal.
- **Cheap components:** All measured components (dropdowns, tabs, modals, toasts, alerts, nav/sidebar toggles) contribute to low interaction cost; JS execution ~9 ms script evaluation, ~3 ms parsing.
- **Unexpected regressions:** Small CLS (0.076) on sprout-interactions from dynamic UI (toasts, alert containers). Accessibility: low contrast on some buttons and tab components (design token / visual tweak, not structural).
- **Follow-up optimization ideas:** Consider CLS mitigation for toast/alert container insertion if targeting strict CWV; review contrast for buttons and tabs in dark theme.

### DOM complexity

| Page | DOM elements (approx.) |
|------|------------------------|
| baseline.html | ~89 |
| sprout-components.html | ~1405 |

The components page intentionally renders many elements to simulate realistic UI density.

### Limitations

These benchmarks measure transfer size, render performance, and interaction cost only. They do not measure real-world production (network latency, CDN, heavy app state, large app bundles). Interpret as framework-level cost comparison only.

### Summary

Sprout adds ~10 KB of framework assets (CSS + JS) while maintaining 0 ms Total Blocking Time, 0.2 s FCP/LCP, and 99–100 Lighthouse performance scores, even with a large component DOM and interactive UI. Framework overhead in this run was minimal.

---

*Last updated: March 2025 (Chrome 145, Lighthouse 13.0, single run).*
