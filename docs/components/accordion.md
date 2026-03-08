# Accordion

Accordions use the native `<details>` and `<summary>` elements. No JavaScript required — the browser handles expand/collapse natively. Sprout adds a CSS chevron that rotates on open, and consistent spacing between panels.

## Basic usage
```html
<details>
  <summary>What is Sprout?</summary>
  <p>Sprout is a lightweight, zero-dependency UI library.</p>
</details>
<details>
  <summary>Does it need JavaScript?</summary>
  <p>Most components are pure CSS. Only modals, tabs, dropdowns, and toast require JS.</p>
</details>
```

<div class="sp-demo">
  <details>
    <summary>What is Sprout?</summary>
    <p>Sprout is a lightweight, zero-dependency UI library for plain HTML.</p>
  </details>
  <details>
    <summary>Does it need JavaScript?</summary>
    <p>Most components are pure CSS. Only modals, tabs, dropdowns, and toast require JS.</p>
  </details>
  <details>
    <summary>How do I customise themes?</summary>
    <p>Override any <code>--sp-*</code> CSS variable, or set <code>data-theme</code> on <code>&lt;html&gt;</code>.</p>
  </details>
</div>

## Open by default

Add the `open` attribute to expand a panel on load.
```html
<details open>
  <summary>Expanded by default</summary>
  <p>This panel is open on page load.</p>
</details>
```

<div class="sp-demo">
  <details open>
    <summary>Expanded by default</summary>
    <p>This panel is open on page load.</p>
  </details>
  <details>
    <summary>Collapsed by default</summary>
    <p>Click the summary above to expand.</p>
  </details>
</div>

## Usage notes

- Each `<details>` is independent — multiple panels can be open at once.
- The chevron rotates on open via CSS only — no JavaScript involved.
- Fully semantic and accessible; no custom elements or ARIA attributes needed.
- To allow only one panel open at a time, use the `name` attribute (HTML spec): `<details name="faq">` — browsers that support it will close siblings automatically.