# Divider

Dividers visually separate content. Use `<hr>` for a horizontal rule. For a labeled divider, add the `.label` class with a `data-label` attribute. For vertical separators in horizontal layouts, use `.divider.vertical`.

## Horizontal rule

```html
<p>Content above.</p>
<hr>
<p>Content below.</p>
````

<div class="sp-demo">
  <p>Content above.</p>
  <hr>
  <p>Content below.</p>
</div>

## Labeled divider

```html
<hr class="label" data-label="Or">
```

<div class="sp-demo">
  <hr class="label" data-label="Or">
</div>

## Vertical divider

Use inside a flex layout such as `.cluster`.

```html
<div class="cluster gap-2">
  <a href="#">Link</a>
  <span class="divider vertical"></span>
  <a href="#">Link</a>
</div>
```

<div class="sp-demo">
  <div class="cluster gap-2">
    <a href="#">Link</a>
    <span class="divider vertical"></span>
    <a href="#">Link</a>
  </div>
</div>

## Usage notes

* `<hr>` represents a semantic thematic break between sections.
* Use `.label` with `data-label` when a divider needs a visible label such as “Or”.
* `.divider.vertical` creates a thin vertical separator between inline or flex items.
* Vertical dividers work best inside horizontal layouts like `.cluster`.