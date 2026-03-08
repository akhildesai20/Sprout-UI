# Badges

Badges are small labels used for counts, status indicators, or tags. Use the `.badge` class on a `<span>` (or another inline element). Add a variant class for color and optionally a size class.

## Basic usage

```html
<span class="badge">Default</span>
<span class="badge">12</span>
````

<div class="sp-demo">
  <span class="badge">Default</span>
  <span class="badge">12</span>
</div>

## Variants

Use variant classes to communicate meaning through color.

| Class      | Use                         |
| ---------- | --------------------------- |
| (default)  | Neutral label               |
| `.success` | Completed or positive state |
| `.danger`  | Error or alert              |
| `.warning` | Caution or pending state    |
| `.info`    | Informational label         |
| `.outline` | Bordered, low emphasis      |

```html
<span class="badge success">Done</span>
<span class="badge danger">3</span>
<span class="badge warning">Pending</span>
<span class="badge info">New</span>
<span class="badge outline">Tag</span>
```

<div class="sp-demo">
  <div class="cluster gap-2">
    <span class="badge success">Done</span>
    <span class="badge danger">3</span>
    <span class="badge warning">Pending</span>
    <span class="badge info">New</span>
    <span class="badge outline">Tag</span>
  </div>
</div>

## Sizes

Add `.sm` or `.lg` for smaller or larger badges.

```html
<span class="badge sm">Small</span>
<span class="badge">Default</span>
<span class="badge lg">Large</span>
```

<div class="sp-demo">
  <div class="cluster gap-2">
    <span class="badge sm">Small</span>
    <span class="badge">Default</span>
    <span class="badge lg">Large</span>
  </div>
</div>

## Usage notes

* Prefer `<span>` for badges so they stay inline with surrounding text.
* Use semantic colors: success for positive states, danger for errors, warning for caution, and info for informational labels.
* Combine variant and size when needed: e.g. `class="badge success sm"`.
* Keep badge text short so the label remains compact and readable.
