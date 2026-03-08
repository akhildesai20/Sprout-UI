# Layout overview

Sprout provides four layout primitives: **container**, **grid**, **stack**, and **cluster**. Use them together to build pages without custom layout CSS.

| Primitive | Purpose |
|-----------|---------|
| **Container** | Constrain width and center content; optional `.narrow` / `.wide`. |
| **Grid** | Multi-column layout; use `.cols-2`, `.cols-3`, or `.cols-4`. |
| **Stack** | Vertical stacking with consistent gap; use `.gap-*` modifiers. |
| **Cluster** | Horizontal grouping that wraps; use for buttons, tags, toolbars. |

## Quick example

```html
<div class="container">
  <div class="stack gap-4">
    <h2>Section</h2>
    <div class="grid cols-3">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </div>
    <div class="cluster gap-3">
      <button>Save</button>
      <button class="outline">Cancel</button>
    </div>
  </div>
</div>
```

<div class="sp-demo">
  <div class="container" style="max-width: 100%;">
    <div class="stack gap-4">
      <h2 style="font-size: 1.25rem;">Section</h2>
      <div class="grid cols-3" style="gap: var(--sp-4);">
        <div class="card"><p style="margin:0;">Card 1</p></div>
        <div class="card"><p style="margin:0;">Card 2</p></div>
        <div class="card"><p style="margin:0;">Card 3</p></div>
      </div>
      <div class="cluster gap-3">
        <button>Save</button>
        <button class="outline">Cancel</button>
      </div>
    </div>
  </div>
</div>

## See also

- [Container](/layout/container) — width and padding
- [Grid](/layout/grid) — columns and responsive collapse
- [Stack](/layout/stack) — vertical gap
- [Cluster](/layout/cluster) — horizontal wrap
