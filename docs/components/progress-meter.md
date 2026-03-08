# Progress & Meter

Sprout styles the semantic `<progress>` and `<meter>` elements. Use them for task completion and scalar values (e.g. storage, ratings).

## Progress

Use `<progress>` with a `value` and optional `max` (default 1). Omit `value` for an indeterminate (loading) state.

```html
<progress value="70" max="100"></progress>
<progress value="0.6"></progress>
<progress></progress>
```

Variants: add `.success`, `.danger`, or `.warning` for color.

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label for="prog1">Default (70%)</label>
      <progress id="prog1" value="70" max="100"></progress>
    </div>
    <div class="field">
      <label>Indeterminate</label>
      <progress></progress>
    </div>
    <progress class="success" value="90" max="100"></progress>
    <progress class="danger" value="20" max="100"></progress>
  </div>
</div>

## Meter

Use `<meter>` for scalar values with optional `low`, `high`, `optimum` to influence color (good / okay / bad).

```html
<meter value="0.7" min="0" max="1">70%</meter>
<meter value="0.3" low="0.25" high="0.75" optimum="0.5">30%</meter>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label>Storage (70%)</label>
      <meter value="0.7" min="0" max="1">70%</meter>
    </div>
    <meter value="0.3" low="0.25" high="0.75" optimum="0.5">30%</meter>
  </div>
</div>

## Usage notes

- **Progress:** Use for task completion (uploads, steps). Indeterminate when `value` is omitted.
- **Meter:** Use for gauges (disk, ratings). Provide `min` and `max`; `low`/`high`/`optimum` affect semantics and styling.
- Always pair with a `<label>` or visible text for accessibility.
