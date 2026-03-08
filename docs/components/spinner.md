# Spinner

Spinners indicate loading. Add the `.spinner` class to a `<div>` (or span). No content needed; the animation is pure CSS.

## Basic usage

```html
<div class="spinner" aria-hidden="true"></div>
```

## Sizes

Add `.sm` or `.lg` for smaller or larger spinners.

```html
<div class="spinner sm"></div>
<div class="spinner"></div>
<div class="spinner lg"></div>
```

<div class="sp-demo">
  <div class="cluster gap-4">
    <div class="spinner sm" aria-hidden="true"></div>
    <div class="spinner" aria-hidden="true"></div>
    <div class="spinner lg" aria-hidden="true"></div>
  </div>
</div>

## Usage notes

- Use `aria-hidden="true"` when the spinner is decorative; pair with live region or status text for screen readers (e.g. “Loading…”).
- Sprout’s spinner uses only `border` and `transform` for animation (no layout thrashing).
- Prefer a single spinner per context (e.g. inside a button with `.loading` or next to “Loading…” text).
