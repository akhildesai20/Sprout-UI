# Grid

Grid lays out children in a responsive grid. Use `.grid` on a wrapper; add `.cols-2`, `.cols-3`, or `.cols-4` to set the number of columns. Without a cols class, the grid uses auto-fit and a minimum column width.

## Basic usage

```html
<div class="grid cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

| Class | Description |
|-------|-------------|
| `.grid` | Base grid; columns auto-fit to a minimum width. |
| `.grid.cols-2` | Two columns. |
| `.grid.cols-3` | Three columns. |
| `.grid.cols-4` | Four columns. |

On viewports below Sprout’s breakpoint (e.g. 640px), `.cols-2`, `.cols-3`, and `.cols-4` collapse to a single column.

<div class="sp-demo">
  <div class="grid cols-3" style="gap: var(--sp-4);">
    <div style="background: var(--sp-surface-2); padding: var(--sp-4); border-radius: var(--sp-radius-md);">Block 1</div>
    <div style="background: var(--sp-surface-2); padding: var(--sp-4); border-radius: var(--sp-radius-md);">Block 2</div>
    <div style="background: var(--sp-surface-2); padding: var(--sp-4); border-radius: var(--sp-radius-md);">Block 3</div>
  </div>
</div>

## Usage notes

- Use `.grid` for card layouts, form columns, or any repeated block layout. Add `.cols-*` when you need a fixed column count.
- Grid gap is set via the default spacing token; you can override with custom styles if needed.
- For full-width tables that scroll on small screens, put the table inside `.table-wrap`, not only `.grid`.
