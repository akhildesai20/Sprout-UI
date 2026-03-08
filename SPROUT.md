# Sprout UI — Complete Build Brief for Cursor
> Read this entire document before writing a single line of code.
> Every decision about naming, structure, style, and behaviour is defined here.
> When in doubt, refer back to this document.

---

## 0. What is Sprout?

Sprout is an **ultra-lightweight, sustainable, zero-dependency UI library** for the web.

Users drop two files into any project — `sprout.css` and `sprout.js` — and immediately have a complete, accessible, good-looking UI system. No build tools. No Node.js ecosystem. No framework. Just HTML, CSS, and minimal JavaScript.

It is designed for:
- Web apps, dashboards, admin tools
- Prototypes and quick experiments
- Vibe coders who want to test ideas fast
- Beginners who want clean defaults without learning a framework
- AI-assisted development — every component maps to obvious, readable HTML

**It is NOT designed for:**
- Marketing sites with heavy animation
- Complex SPAs that need component state management
- Projects that already use React/Vue/Svelte

---

## 1. Priority Order

Every decision must be made in this order:

1. **Sustainability** — does this add unnecessary rendering cost, bytes, or CPU usage?
2. **Developer simplicity** — is this the most obvious way to write this in HTML?
3. **Visual aesthetics** — does this look clean and intentional?
4. **Accessibility** — does this work for keyboard, screen reader, reduced motion users?

---

## 2. File Structure to Create

```
sprout/
├── src/
│   ├── sprout.css          ← full unminified source CSS
│   └── sprout.js           ← full unminified source JS
├── dist/
│   ├── sprout.min.css      ← minified CSS (target: <10KB gzipped)
│   ├── sprout.min.js       ← minified JS (target: <3KB gzipped)
│   └── sprout.bundle.js    ← single self-contained script (injects CSS + JS)
├── demo/
│   └── index.html          ← kitchen sink demo of every component
├── package.json
└── README.md
```

---

## 3. Delivery / Import Patterns

Users must be able to import Sprout in all three ways:

### CDN / direct file (two files)
```html
<link rel="stylesheet" href="sprout.min.css">
<script src="sprout.min.js" defer></script>
```

### Single script drop-in (bundle)
```html
<script src="sprout.bundle.js" defer></script>
```
The bundle injects the CSS as a `<style>` tag at runtime. This is for maximum simplicity.

### npm
```bash
npm install sprout-ui
```
```js
import 'sprout-ui/dist/sprout.min.css';
import Sprout from 'sprout-ui';
```

**package.json must include:**
- `"main"`: `dist/sprout.bundle.js`
- `"module"`: `dist/sprout.min.js`
- `"style"`: `dist/sprout.min.css`
- `"exports"` map for both ESM and CJS

---

## 4. Themes

### Theme System
Themes are controlled by a `data-theme` attribute on the `<html>` element.

```html
<html data-theme="dark">     ← dark (default)
<html data-theme="light">    ← light
<html data-theme="high-contrast">  ← high contrast (accessibility)
<html>                       ← no attribute = auto (follows OS preference)
```

`auto` uses `@media (prefers-color-scheme: dark/light)` and requires no JS.

### Theme API (JS)
```js
Sprout.setTheme('dark')       // sets data-theme on <html>
Sprout.getTheme()             // returns current theme string
Sprout.toggleTheme()          // toggles between dark and light
```

### Four Built-in Themes

#### Dark (default — eco-first, OLED-safe)
Near-black backgrounds save significant power on OLED displays.
```css
[data-theme="dark"], :root {
  --sp-bg:           #0a0b0a;
  --sp-surface:      #111311;
  --sp-surface-2:    #1a1d1a;
  --sp-surface-3:    #222622;
  --sp-border:       #2e332e;
  --sp-border-2:     #3d453d;
  --sp-text:         #eaece8;
  --sp-text-2:       #a8b0a4;
  --sp-text-muted:   #636b60;
  --sp-primary:      #4a7c59;
  --sp-primary-fg:   #eaece8;
  --sp-primary-hover:#56926a;
  --sp-danger:       #8b3a3a;
  --sp-danger-fg:    #f4c4c4;
  --sp-warning:      #7a5c1e;
  --sp-warning-fg:   #f5dfa0;
  --sp-success:      #2e6644;
  --sp-success-fg:   #b8f0cc;
  --sp-info:         #2a4f7a;
  --sp-info-fg:      #b8d8f5;
}
```

#### Light
Muted off-white — never pure white, reduces glare energy.
```css
[data-theme="light"] {
  --sp-bg:           #f4f5f2;
  --sp-surface:      #eaece7;
  --sp-surface-2:    #e0e3dc;
  --sp-surface-3:    #d5d9d0;
  --sp-border:       #c2c9bb;
  --sp-border-2:     #adb5a5;
  --sp-text:         #141614;
  --sp-text-2:       #3d4539;
  --sp-text-muted:   #6b7565;
  --sp-primary:      #3d6b4a;
  --sp-primary-fg:   #f4f5f2;
  --sp-primary-hover:#4a7c59;
  --sp-danger:       #922e2e;
  --sp-danger-fg:    #fff0f0;
  --sp-warning:      #7a5200;
  --sp-warning-fg:   #fff8e6;
  --sp-success:      #1f5c34;
  --sp-success-fg:   #eafff1;
  --sp-info:         #1e4a7a;
  --sp-info-fg:      #eef5ff;
}
```

#### High Contrast (Accessibility — WCAG AAA)
```css
[data-theme="high-contrast"] {
  --sp-bg:           #000000;
  --sp-surface:      #0a0a0a;
  --sp-surface-2:    #141414;
  --sp-surface-3:    #1e1e1e;
  --sp-border:       #ffffff;
  --sp-border-2:     #ffffff;
  --sp-text:         #ffffff;
  --sp-text-2:       #eeeeee;
  --sp-text-muted:   #bbbbbb;
  --sp-primary:      #00ff88;
  --sp-primary-fg:   #000000;
  --sp-primary-hover:#00cc6e;
  --sp-danger:       #ff4444;
  --sp-danger-fg:    #000000;
  --sp-warning:      #ffcc00;
  --sp-warning-fg:   #000000;
  --sp-success:      #00ff88;
  --sp-success-fg:   #000000;
  --sp-info:         #44aaff;
  --sp-info-fg:      #000000;
}
```

#### Auto (no data-theme attribute)
```css
@media (prefers-color-scheme: light) {
  :root:not([data-theme]) { /* apply light theme tokens */ }
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) { /* apply dark theme tokens */ }
}
```

---

## 5. Design Tokens (Full Set)

All tokens are prefixed `--sp-` to avoid collisions.

### Colour Roles (defined per theme above)
```
--sp-bg              Page background
--sp-surface         Component background (cards, inputs)
--sp-surface-2       Slightly elevated surface
--sp-surface-3       Hover states on surfaces
--sp-border          Default border colour
--sp-border-2        Stronger border (focus, active)
--sp-text            Primary text
--sp-text-2          Secondary text
--sp-text-muted      Placeholder, helper text
--sp-primary         Brand/accent colour
--sp-primary-fg      Text on primary background
--sp-primary-hover   Primary hover state
--sp-danger          Error/destructive
--sp-danger-fg       Text on danger background
--sp-warning         Warning
--sp-warning-fg      Text on warning background
--sp-success         Success
--sp-success-fg      Text on success background
--sp-info            Informational
--sp-info-fg         Text on info background
```

### Spacing (4pt grid)
```css
:root {
  --sp-1:  0.25rem;   /*  4px */
  --sp-2:  0.5rem;    /*  8px */
  --sp-3:  0.75rem;   /* 12px */
  --sp-4:  1rem;      /* 16px */
  --sp-5:  1.25rem;   /* 20px */
  --sp-6:  1.5rem;    /* 24px */
  --sp-8:  2rem;      /* 32px */
  --sp-10: 2.5rem;    /* 40px */
  --sp-12: 3rem;      /* 48px */
  --sp-16: 4rem;      /* 64px */
}
```

### Typography (fluid scale using clamp)
```css
:root {
  --sp-text-xs:   clamp(0.6875rem, 0.65rem + 0.2vw, 0.75rem);
  --sp-text-sm:   clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem);
  --sp-text-base: clamp(0.9375rem, 0.9rem + 0.2vw, 1rem);
  --sp-text-md:   clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  --sp-text-lg:   clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --sp-text-xl:   clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem);
  --sp-text-2xl:  clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --sp-text-3xl:  clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --sp-font:      system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --sp-font-mono: ui-monospace, 'Cascadia Code', 'Fira Code', monospace;
  --sp-leading:   1.6;
  --sp-leading-tight: 1.2;
}
```

**CRITICAL: Never load webfonts. System font stack only. This is non-negotiable for sustainability.**

### Radius
```css
:root {
  --sp-radius-sm: 3px;    /* buttons, badges — near-sharp */
  --sp-radius-md: 5px;    /* inputs, cards — slightly soft */
  --sp-radius-lg: 8px;    /* modals, larger surfaces */
  --sp-radius-full: 9999px; /* pills, avatars */
}
```

### Motion
```css
:root {
  --sp-dur-fast: 120ms;
  --sp-dur-base: 200ms;
  --sp-ease:     cubic-bezier(0.2, 0, 0, 1);
}

/* CRITICAL: Always include this block */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Only these CSS properties may animate or transition:**
- `opacity`
- `transform`
- `color`
- `background-color`
- `border-color`
- `box-shadow` (only on focus rings — never decorative)

**Never animate:** `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`, `font-size`

### Z-index Scale
```css
:root {
  --sp-layer-base:     0;
  --sp-layer-raised:   10;
  --sp-layer-dropdown: 100;
  --sp-layer-modal:    200;
  --sp-layer-toast:    300;
  --sp-layer-tooltip:  400;
}
```

### Shadows
```css
:root {
  /* Minimal — elevation via borders preferred */
  --sp-shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
  --sp-shadow-md: 0 4px 12px rgba(0,0,0,0.4);  /* modals only */
}
```

---

## 6. Styling Philosophy

### The Rule Hierarchy

1. **Semantic HTML first** — `<button>`, `<input>`, `<table>`, `<details>`, `<dialog>`, `<progress>`, `<meter>` are styled directly without any class needed.
2. **Classes for variants only** — `class="outline"`, `class="danger"`, `class="sm"`, `class="lg"`. Short, obvious, memorable single words.
3. **Data attributes for state/behaviour** — `data-theme`, `data-open`, `data-dismissible`.
4. **No utility classes** — Sprout is not Tailwind. Don't ship margin/padding helpers.

### What this means in practice

```html
<!-- ✅ This works out of the box — no classes needed -->
<button>Click me</button>
<input type="text" placeholder="Enter value">
<table>...</table>
<details><summary>Toggle</summary><p>Content</p></details>

<!-- ✅ Variant via single class -->
<button class="outline">Secondary</button>
<button class="danger">Delete</button>
<button class="sm">Small</button>

<!-- ✅ Semantic role styling -->
<div role="alert">Warning message</div>

<!-- ❌ Never require this kind of class soup -->
<button class="sp-btn sp-btn-primary sp-btn-md sp-rounded">No</button>
```

### Specificity Rules
- Keep CSS specificity as low as possible
- Prefer `element` selectors over `.class` selectors
- Never use `!important` except in the reduced-motion block
- Never use inline styles in JS — only toggle classes or data attributes

---

## 7. Component Specifications

### 7.1 Reset & Base

```css
/* Box model */
*, *::before, *::after { box-sizing: border-box; }

/* Remove defaults */
* { margin: 0; padding: 0; }

/* Base body */
body {
  font-family: var(--sp-font);
  font-size: var(--sp-text-base);
  line-height: var(--sp-leading);
  background: var(--sp-bg);
  color: var(--sp-text);
  -webkit-text-size-adjust: 100%;
}

/* Smooth scroll (respects reduced motion via the global block) */
html { scroll-behavior: smooth; }

/* Images */
img, video { max-width: 100%; display: block; }

/* Links */
a { color: var(--sp-primary); text-decoration: underline; text-underline-offset: 3px; }
a:hover { color: var(--sp-primary-hover); }
```

---

### 7.2 Typography

Style these elements directly:

```
h1 — --sp-text-3xl, weight 700, tight leading
h2 — --sp-text-2xl, weight 700
h3 — --sp-text-xl,  weight 600
h4 — --sp-text-lg,  weight 600
h5 — --sp-text-md,  weight 600
h6 — --sp-text-base, weight 600
p  — --sp-text-base, --sp-leading, margin-bottom --sp-4
small — --sp-text-sm, --sp-text-muted
strong — weight 600
code — --sp-font-mono, --sp-text-sm, background --sp-surface-2, padding 2px 5px, radius --sp-radius-sm
pre  — --sp-font-mono, --sp-text-sm, background --sp-surface, border, padding --sp-4, overflow-x auto
kbd  — --sp-font-mono, --sp-text-xs, border 1px solid --sp-border-2, radius --sp-radius-sm, padding 2px 6px
blockquote — border-left 3px solid --sp-primary, padding-left --sp-4, color --sp-text-2
hr — border: none; border-top: 1px solid --sp-border; margin: --sp-6 0
```

---

### 7.3 Layout Primitives

#### Container
```html
<div class="container">...</div>
```
```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: var(--sp-4);
}
.container.narrow { max-width: 720px; }
.container.wide   { max-width: 1440px; }
```

#### Grid
```html
<div class="grid">...</div>
<div class="grid cols-2">...</div>
<div class="grid cols-3">...</div>
<div class="grid cols-4">...</div>
```
```css
.grid {
  display: grid;
  gap: var(--sp-4);
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
}
.grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
/* Responsive: collapse to 1 col below 640px */
```

#### Stack
```html
<div class="stack">...</div>
<div class="stack gap-2">...</div>
```
```css
.stack { display: flex; flex-direction: column; gap: var(--sp-4); }
.stack.gap-1 { gap: var(--sp-1); }
.stack.gap-2 { gap: var(--sp-2); }
.stack.gap-6 { gap: var(--sp-6); }
.stack.gap-8 { gap: var(--sp-8); }
```

#### Cluster
```html
<div class="cluster">...</div>
```
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--sp-3);
  align-items: center;
}
.cluster.gap-2 { gap: var(--sp-2); }
```

---

### 7.4 Button

Styled directly on `<button>` and `[role="button"]`. Classes only for variants.

```html
<!-- Default (primary) -->
<button>Save changes</button>

<!-- Variants -->
<button class="outline">Cancel</button>
<button class="ghost">View</button>
<button class="danger">Delete</button>
<button class="success">Confirm</button>

<!-- Sizes -->
<button class="sm">Small</button>
<button class="lg">Large</button>

<!-- States -->
<button disabled>Disabled</button>
<button class="loading">Loading</button>  <!-- shows spinner, disables pointer -->

<!-- Full width -->
<button class="full">Full width</button>

<!-- Icon button -->
<button class="icon" aria-label="Close">✕</button>
```

**Rules:**
- Default button = filled primary colour
- `outline` = transparent background, primary border + text
- `ghost` = transparent, no border, muted text
- `danger` = uses `--sp-danger` tokens
- `success` = uses `--sp-success` tokens
- No box-shadow on default state
- Box-shadow only on `:focus-visible` (focus ring)
- Transition: `background-color`, `border-color`, `color` only
- `cursor: pointer` always
- Minimum tap target: 36px height

```css
/* Focus ring — applies to all interactive elements */
:focus-visible {
  outline: 2px solid var(--sp-primary);
  outline-offset: 2px;
}
```

---

### 7.5 Forms

#### Input, Textarea, Select
Styled directly. No wrapper class needed for basic usage.

```html
<input type="text" placeholder="Enter value">
<input type="email" placeholder="email@example.com">
<input type="password">
<input type="number">
<input type="search">
<input type="date">
<textarea rows="4" placeholder="Enter description"></textarea>
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

**States:**
```html
<input type="text" class="valid" value="Good value">
<input type="text" class="invalid" value="Bad value">
<input type="text" disabled value="Disabled">
<input type="text" readonly value="Read only">
```

**Hint text:**
```html
<div class="field">
  <label for="email">Email</label>
  <input type="email" id="email">
  <small>We'll never share your email.</small>
</div>
```

The `.field` class stacks label + input + hint with proper gaps.

**Rules:**
- Background: `--sp-surface`
- Border: `1px solid --sp-border`
- Border on focus: `--sp-border-2`
- `.valid` border: `--sp-success`
- `.invalid` border: `--sp-danger`
- Radius: `--sp-radius-md`
- Width: 100% by default inside `.field`
- Select: custom arrow via `background-image` SVG, `appearance: none`

#### Checkbox & Radio
```html
<label>
  <input type="checkbox"> Remember me
</label>

<label>
  <input type="radio" name="plan" value="free"> Free
</label>
<label>
  <input type="radio" name="plan" value="pro"> Pro
</label>
```

Styled with CSS `appearance: none` + custom checkmark via `::after`.

#### Toggle / Switch
```html
<label class="toggle">
  <input type="checkbox">
  <span>Enable notifications</span>
</label>
```

Pure CSS toggle. No JS required.

#### Range
```html
<input type="range" min="0" max="100" value="40">
```

Cross-browser styled track and thumb.

#### Fieldset
```html
<fieldset>
  <legend>Billing address</legend>
  <!-- fields -->
</fieldset>
```

Styled with visible legend, clean border.

---

### 7.6 Alert / Notice

```html
<!-- role="alert" is styled directly -->
<div role="alert">Default alert message</div>
<div role="alert" class="success">Operation completed successfully.</div>
<div role="alert" class="warning">Your session expires in 5 minutes.</div>
<div role="alert" class="danger">Failed to save. Please try again.</div>
<div role="alert" class="info">Update available. Refresh to get the latest version.</div>

<!-- Dismissible -->
<div role="alert" class="info" data-dismissible>
  <span>New version available.</span>
  <button class="ghost icon" aria-label="Dismiss">✕</button>
</div>
```

Dismissible alerts are handled by JS — clicking the `✕` button adds `data-dismissed` and fades out.

---

### 7.7 Badge / Tag

```html
<span class="badge">Default</span>
<span class="badge success">Active</span>
<span class="badge danger">Error</span>
<span class="badge warning">Pending</span>
<span class="badge info">Beta</span>
<span class="badge outline">Draft</span>

<!-- Sizes -->
<span class="badge sm">small</span>
<span class="badge lg">large</span>
```

---

### 7.8 Toast / Notification

**JS-powered.** No HTML required — called via API.

```js
// Basic
Sprout.toast('File saved successfully.')

// With type
Sprout.toast('Something went wrong.', { type: 'danger' })
Sprout.toast('Changes saved.', { type: 'success' })
Sprout.toast('Update available.', { type: 'info' })
Sprout.toast('Storage almost full.', { type: 'warning' })

// With options
Sprout.toast('Processing...', {
  type: 'info',
  duration: 5000,       // ms, default 4000. 0 = persistent
  position: 'top-right' // top-right (default), top-left, bottom-right, bottom-left, top-center
})
```

Sprout creates a `<div id="sp-toast-container">` automatically. Toasts stack, animate in/out, and auto-dismiss. Dismissed via `opacity` + `transform` only.

---

### 7.9 Progress Bar

```html
<!-- Determinate -->
<progress value="60" max="100"></progress>

<!-- With label -->
<div class="field">
  <label>Uploading... 60%</label>
  <progress value="60" max="100"></progress>
</div>

<!-- Indeterminate (no value attribute) -->
<progress></progress>

<!-- Semantic variants -->
<progress value="80" max="100" class="success"></progress>
<progress value="90" max="100" class="danger"></progress>
<progress value="70" max="100" class="warning"></progress>
```

---

### 7.10 Meter

```html
<meter value="0.7">70%</meter>
<meter value="6" min="0" max="10" low="3" high="8" optimum="9">6/10</meter>
```

Styled via CSS to match the design system.

---

### 7.11 Spinner

Pure CSS. No JS.

```html
<span class="spinner" aria-label="Loading" role="status"></span>

<!-- Sizes -->
<span class="spinner sm"></span>
<span class="spinner lg"></span>

<!-- Inline with text -->
<button class="loading">
  <span class="spinner sm"></span>
  Saving...
</button>
```

Uses `border` + `border-top-color` + `animation: spin`. Only `transform: rotate()` animates.

---

### 7.12 Skeleton Loader

Pure CSS shimmer. Shimmer animation is **off by default** (eco). Add class `animated` to enable.

```html
<div class="skeleton" style="height: 1rem; width: 60%;"></div>
<div class="skeleton" style="height: 1rem; width: 80%;"></div>
<div class="skeleton" style="height: 1rem; width: 40%;"></div>

<!-- Animated shimmer (opt-in) -->
<div class="skeleton animated" style="height: 200px;"></div>

<!-- Circle (avatar placeholder) -->
<div class="skeleton circle" style="width: 40px; height: 40px;"></div>
```

---

### 7.13 Tabs (Web Component)

```html
<sp-tabs>
  <sp-tab-list>
    <sp-tab panel="overview">Overview</sp-tab>
    <sp-tab panel="settings">Settings</sp-tab>
    <sp-tab panel="logs">Logs</sp-tab>
  </sp-tab-list>

  <sp-panel id="overview">
    <p>Overview content</p>
  </sp-panel>
  <sp-panel id="settings">
    <p>Settings content</p>
  </sp-panel>
  <sp-panel id="logs">
    <p>Log content</p>
  </sp-panel>
</sp-tabs>
```

Implemented as a Web Component (`customElements.define`). Handles keyboard navigation (arrow keys), ARIA attributes, and active state.

---

### 7.14 Accordion

**Zero JS.** Uses native `<details>` / `<summary>`.

```html
<details>
  <summary>What is Sprout?</summary>
  <p>Sprout is a lightweight, sustainable UI library.</p>
</details>

<details open>
  <summary>Open by default</summary>
  <p>This panel starts expanded.</p>
</details>
```

`<details>` and `<summary>` are styled directly. The disclosure triangle is replaced with a custom CSS chevron.

---

### 7.15 Modal / Dialog

Uses native `<dialog>` element. JS handles `showModal()` / `close()` and focus trap.

```html
<!-- Trigger -->
<button data-modal="my-modal">Open Modal</button>

<!-- Modal -->
<dialog id="my-modal">
  <header>
    <h3>Confirm action</h3>
    <button class="ghost icon" data-modal-close aria-label="Close">✕</button>
  </header>
  <div class="dialog-body">
    <p>Are you sure you want to delete this item?</p>
  </div>
  <footer>
    <button class="outline" data-modal-close>Cancel</button>
    <button class="danger">Delete</button>
  </footer>
</dialog>
```

**JS behaviour:**
- `[data-modal="id"]` opens dialog with `showModal()`
- `[data-modal-close]` closes it
- Clicking backdrop (`::backdrop`) closes it
- Focus trap within dialog while open
- `Escape` key closes (native `<dialog>` behaviour)

**Sizes:**
```html
<dialog class="sm">...</dialog>   <!-- 400px max-width -->
<dialog>...</dialog>               <!-- 560px (default) -->
<dialog class="lg">...</dialog>   <!-- 800px max-width -->
<dialog class="full">...</dialog> <!-- near-fullscreen -->
```

---

### 7.16 Dropdown Menu (Web Component)

```html
<sp-dropdown>
  <button slot="trigger">Options ▾</button>
  <sp-menu>
    <sp-menu-item>Edit</sp-menu-item>
    <sp-menu-item>Duplicate</sp-menu-item>
    <sp-menu-item class="danger">Delete</sp-menu-item>
  </sp-menu>
</sp-dropdown>
```

Handles: open/close on trigger click, keyboard navigation (arrow keys + Enter + Escape), close on outside click.

---

### 7.17 Tooltip

**Simple tooltips: CSS only.**

```html
<span data-tooltip="This is a tooltip">Hover me</span>
<button data-tooltip="Save changes">Save</button>
```

CSS uses `[data-tooltip]::after` and `[data-tooltip]::before` for the bubble and arrow. Shown on `:hover` and `:focus-visible`.

**Dynamic tooltips (JS — for overflow/positioning):**
```js
Sprout.tooltip(element, 'Tooltip text', { position: 'top' })
```

---

### 7.18 Navbar

```html
<nav>
  <a class="brand" href="/">MyApp</a>

  <ul>
    <li><a href="/dashboard" class="active">Dashboard</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/settings">Settings</a></li>
  </ul>

  <div class="cluster">
    <button class="sm outline">Login</button>
    <button class="sm">Sign up</button>
  </div>
</nav>
```

`<nav>` is styled directly: flex layout, sticky at top, border-bottom, background `--sp-surface`.

---

### 7.19 Breadcrumb

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li aria-current="page">My Project</li>
  </ol>
</nav>
```

Separators via CSS `::before` content on `li + li`.

---

### 7.20 Pagination

```html
<nav aria-label="Pagination">
  <ol class="pagination">
    <li><a href="?p=1" aria-label="Previous">←</a></li>
    <li><a href="?p=1">1</a></li>
    <li><a href="?p=2" aria-current="page">2</a></li>
    <li><a href="?p=3">3</a></li>
    <li><span>…</span></li>
    <li><a href="?p=9">9</a></li>
    <li><a href="?p=3" aria-label="Next">→</a></li>
  </ol>
</nav>
```

---

### 7.21 Sidebar

```html
<aside class="sidebar">
  <nav>
    <p class="sidebar-label">Main</p>
    <ul>
      <li><a href="/dashboard" class="active">Dashboard</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/team">Team</a></li>
    </ul>

    <p class="sidebar-label">Account</p>
    <ul>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/logout">Log out</a></li>
    </ul>
  </nav>
</aside>
```

`.sidebar` is a fixed or sticky vertical nav. Collapsible via `data-collapsed` + JS.

---

### 7.22 Table

`<table>` is styled directly.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Date</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project Alpha</td>
      <td><span class="badge success">Active</span></td>
      <td>2025-01-15</td>
      <td>$2,400</td>
    </tr>
  </tbody>
</table>

<!-- Sortable-ready: add data-sort to th -->
<th data-sort="asc">Name ↑</th>
<th data-sort="desc">Date ↓</th>
<th data-sort>Amount</th>

<!-- Variants -->
<table class="striped">...</table>
<table class="bordered">...</table>
<table class="compact">...</table>
```

---

### 7.23 Card

```html
<article class="card">
  <p>Simple card with just content.</p>
</article>

<!-- Full structure -->
<article class="card">
  <header>
    <h3>Card title</h3>
    <span class="badge info">New</span>
  </header>
  <p>Card body content goes here.</p>
  <footer>
    <button class="outline sm">Cancel</button>
    <button class="sm">Confirm</button>
  </footer>
</article>

<!-- Variants -->
<article class="card outline">...</article>   <!-- border only, no bg -->
<article class="card flat">...</article>      <!-- no border, subtle bg -->
<article class="card interactive">...</article> <!-- hover state, cursor pointer -->
```

---

### 7.24 Avatar & Avatar Group

```html
<!-- Image avatar -->
<span class="avatar">
  <img src="photo.jpg" alt="Jane Doe">
</span>

<!-- Initials fallback -->
<span class="avatar">JD</span>

<!-- Sizes -->
<span class="avatar sm">JD</span>
<span class="avatar lg">JD</span>

<!-- Status indicator -->
<span class="avatar" data-status="online">
  <img src="photo.jpg" alt="Jane">
</span>

<!-- Avatar group (overlapping) -->
<div class="avatar-group">
  <span class="avatar"><img src="a.jpg" alt="A"></span>
  <span class="avatar"><img src="b.jpg" alt="B"></span>
  <span class="avatar"><img src="c.jpg" alt="C"></span>
  <span class="avatar">+4</span>
</div>
```

---

### 7.25 Stat / Metric Block

```html
<div class="stat">
  <p class="stat-label">Total Revenue</p>
  <p class="stat-value">$48,295</p>
  <p class="stat-change positive">↑ 12.5% from last month</p>
</div>

<div class="stat">
  <p class="stat-label">Churn Rate</p>
  <p class="stat-value">3.2%</p>
  <p class="stat-change negative">↑ 0.4% from last month</p>
</div>
```

---

### 7.26 Code Block

```html
<pre><code class="language-js">
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Sprout'));
</code></pre>
```

Styled with monospace font, dark surface background regardless of theme. Optional copy button added by JS if `[data-copy]` is present:

```html
<pre data-copy><code>npm install sprout-ui</code></pre>
```

---

### 7.27 Divider

```html
<!-- Horizontal -->
<hr>

<!-- With label -->
<hr class="label" data-label="or">

<!-- Vertical (use in flex containers) -->
<div class="divider vertical"></div>
```

`<hr>` is styled directly. `.label` variant uses `::before` / `::after` pseudo elements.

---

## 8. JavaScript Architecture

### Structure

```js
const Sprout = (() => {
  // Private state

  const init = () => {
    // Called once on DOMContentLoaded
    // Registers all JS-enhanced components
  }

  // Public API
  return {
    init,
    setTheme,
    getTheme,
    toggleTheme,
    toast,
    tooltip,
    // Modal open/close handled declaratively via data attributes
  }
})()

// Auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Sprout.init)
} else {
  Sprout.init()
}

export default Sprout
```

### What JS handles
| Feature | Mechanism |
|---|---|
| Theme switching | `Sprout.setTheme()` sets `data-theme` on `<html>` |
| Modal open/close | Event delegation on `[data-modal]` and `[data-modal-close]` |
| Modal focus trap | Tab/Shift+Tab cycles within dialog |
| Dismissible alerts | Event delegation on `[data-dismissible]` close buttons |
| Toast queue | `Sprout.toast()` API, dynamic DOM injection |
| Copy button | Event delegation on `[data-copy]` elements |
| Tabs | `<sp-tabs>` Web Component |
| Dropdown | `<sp-dropdown>` Web Component |
| Sidebar collapse | Toggle `data-collapsed` on `.sidebar` |

### What JS does NOT handle (CSS only)
- Toggle/switch
- Accordion (details/summary)
- Checkbox/radio styling
- Tooltip (simple)
- Spinner
- Skeleton
- Progress/meter
- All hover/focus states
- Badge, badge variants
- All form validation visual states

---

## 9. Bundle Script

`sprout.bundle.js` injects CSS at runtime:

```js
(function() {
  const style = document.createElement('style');
  style.textContent = `/* MINIFIED CSS HERE */`;
  document.head.appendChild(style);
  // rest of Sprout JS
})()
```

The build process (Makefile or npm script) should:
1. Minify `sprout.css` → `sprout.min.css`
2. Minify `sprout.js` → `sprout.min.js`
3. Inline minified CSS into bundle template → `sprout.bundle.js`

---

## 10. package.json

```json
{
  "name": "sprout-ui",
  "version": "1.0.0",
  "description": "Ultra-lightweight, sustainable, zero-dependency UI library",
  "keywords": ["ui", "css", "library", "sustainable", "lightweight", "zero-dependency"],
  "license": "MIT",
  "main": "dist/sprout.bundle.js",
  "module": "dist/sprout.min.js",
  "style": "dist/sprout.min.css",
  "exports": {
    ".": {
      "import": "./dist/sprout.min.js",
      "require": "./dist/sprout.bundle.js"
    },
    "./css": "./dist/sprout.min.css",
    "./dist/sprout.min.css": "./dist/sprout.min.css"
  },
  "files": ["dist/", "src/"],
  "scripts": {
    "build:css": "cleancss -o dist/sprout.min.css src/sprout.css",
    "build:js":  "terser src/sprout.js -o dist/sprout.min.js --compress --mangle",
    "build:bundle": "node scripts/bundle.js",
    "build": "npm run build:css && npm run build:js && npm run build:bundle",
    "dev": "browser-sync start --server --files 'src/*.css, src/*.js, demo/*.html'"
  },
  "devDependencies": {
    "clean-css-cli": "^5.6.3",
    "terser": "^5.30.0",
    "browser-sync": "^3.0.2"
  }
}
```

---

## 11. README Structure

The README must include:

1. **What is Sprout** — one paragraph
2. **Why Sprout** — sustainability angle, 3 bullet points
3. **Quick start** — 3 code blocks (CDN CSS+JS, bundle, npm)
4. **Themes** — how to set data-theme
5. **Components** — table linking to each component
6. **Customizing** — how to override tokens
7. **AI prompt block** — a ready-to-paste system prompt for vibe coders:

```
## For AI assistants (Cursor, Copilot, Claude, etc.)

Paste this into your system prompt for best results:

---
I am using Sprout UI (sprout-ui npm package). Sprout is a semantic,
zero-dependency HTML/CSS/JS library. Rules:
- <button> renders as primary button by default
- Variants use single classes: outline, ghost, danger, success, sm, lg
- <details>/<summary> = accordion (no JS needed)
- <dialog> = modal (use data-modal="id" on trigger)
- Toasts: Sprout.toast('message', { type: 'success' })
- Tabs: <sp-tabs> web component
- Dropdowns: <sp-dropdown> web component
- Themes: set data-theme="dark|light|high-contrast" on <html>
- All tokens prefixed --sp- (e.g. --sp-primary, --sp-text, --sp-border)
- Never use class soup. Semantic HTML first.
---
```

---

## 12. Demo Page (demo/index.html)

The demo must show **every component** in a single scrollable page with:

- All 4 themes switchable via buttons at the top
- Every component shown with its actual rendered output
- The exact HTML snippet to copy below each component
- Beginner annotations explaining what semantic element is being used
- A `<pre data-copy>` block for the quick-start import snippet

---

## 13. Sustainability Rules (Non-Negotiable)

These rules must never be violated:

| Rule | Reason |
|---|---|
| No webfonts | Each font file = network request + parsing energy |
| No box-shadow on non-modal elements | GPU compositing layer = battery drain |
| No `will-change` on large elements | Forces GPU layer promotion unnecessarily |
| No animations on layout properties | Triggers layout recalc + repaint |
| Shimmer animation opt-in only | Continuous animations drain CPU/GPU |
| Dark theme default | OLED black pixels consume near-zero power |
| System font stack | Zero network, zero parse, zero render overhead |
| Reduce motion respected | Always include the prefers-reduced-motion block |
| No gradients on interactive elements | Gradient rendering is expensive at scale |
| CSS over JS wherever possible | JS has parse + execution cost; CSS is declarative |

---

## 14. Cursor Instructions

When building Sprout in Cursor, follow this order:

1. Create `src/sprout.css` — tokens first, then reset, then components in order
2. Create `src/sprout.js` — IIFE structure, init function, then each JS feature
3. Create `demo/index.html` — import from `../src/`, show every component
4. Create `package.json` and `README.md`
5. Create `scripts/bundle.js` — reads minified CSS + JS, outputs bundle
6. Run `npm install` and `npm run build` to produce `dist/`

When writing a component, always ask:
- Can this be CSS-only?
- Does this require a class, or does the semantic HTML element cover it?
- Am I animating only safe properties?
- Does this work at `--sp-radius-sm` without looking broken?
- Does this make sense in all 4 themes?

---

*Sprout UI — Lightweight by principle. Sustainable by design.*
