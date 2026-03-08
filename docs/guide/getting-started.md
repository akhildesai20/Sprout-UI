# Getting Started

Sprout UI is a lightweight, sustainable, zero-dependency UI library for plain HTML, CSS, and minimal JavaScript.

It is built for dashboards, tools, prototypes, admin panels, and quick experiments. The default approach is simple:

- semantic HTML first
- classes only for variants
- minimal JavaScript
- dark theme by default
- system fonts only

## Install

```bash
npm install @akhildesai20/sprout-ui
```

### ESM / bundler (Vite, Rollup, etc.)

```js
import "@akhildesai20/sprout-ui/css";
import Sprout from "@akhildesai20/sprout-ui";

Sprout.init();
```

Or with explicit paths: `import "@akhildesai20/sprout-ui/dist/sprout.min.css"` and `import Sprout from "@akhildesai20/sprout-ui"`. Call `Sprout.init()` after import so custom elements and event handlers are registered.

### Plain HTML (local dist or clone)

When using files from a cloned repo or from `node_modules`, link the CSS and load the **bundle** (the bundle includes CSS and JS and sets `window.Sprout`):

```html
<link rel="stylesheet" href="node_modules/@akhildesai20/sprout-ui/dist/sprout.min.css">
<script src="node_modules/@akhildesai20/sprout-ui/dist/sprout.bundle.js"></script>
```

If you cloned the repo, use paths to the repo’s `dist/` folder (e.g. `dist/sprout.min.css`, `dist/sprout.bundle.js`) instead of `node_modules/...`.

### CDN

The package is published on npm and available via jsDelivr and unpkg. Pin a version (e.g. `0.1.1`) in production.

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

## The core idea

In Sprout, native HTML elements already do most of the work.

```html
<button>Save</button>
<input type="text" placeholder="Search">
<table>
  <tr>
    <th>Name</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Sprout</td>
    <td>Active</td>
  </tr>
</table>
```

You only add classes when you need a variant.

```html
<button class="outline">Cancel</button>
<button class="danger">Delete</button>
<button class="sm">Small</button>
```

## Live preview

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="cluster gap-3">
      <button>Save changes</button>
      <button class="outline">Cancel</button>
      <button class="danger">Delete</button>
    </div>
    <div class="field">
      <label for="demo-email">Email</label>
      <input id="demo-email" type="email" placeholder="name@example.com">
      <small>Semantic HTML first. Variants only when needed.</small>
    </div>
  </div>
</div>

## Themes

Themes are controlled with `data-theme` on the root element.

```html
<html data-theme="dark">
<html data-theme="light">
<html data-theme="high-contrast">
<html>
```

No attribute means **auto** mode, which follows the system preference.

## JavaScript API

Sprout keeps JavaScript minimal. The public API includes theme helpers and JS-enhanced components.

```js
Sprout.setTheme('dark')
Sprout.getTheme()
Sprout.toggleTheme()
Sprout.toast('Saved', { type: 'success' })
```

## Why Sprout?

Sprout is designed around a few non-negotiable rules:

- **no webfonts**
- **dark theme first**
- **no decorative box shadows** on regular components
- **no layout-thrashing animation**
- **CSS over JS** wherever possible

That keeps the library small, fast, and aligned with its sustainability goal.

## Next steps

- Read [Theming](/guide/theming)
- Read [Sustainability](/guide/sustainability) and [JavaScript API](/guide/javascript-api)
- Explore [Buttons](/components/buttons)
- Review [Design Tokens](/tokens)
