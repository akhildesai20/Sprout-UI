# Cluster

Cluster arranges children horizontally and wraps when there isn’t enough space. Use `.cluster` for button groups, tags, or inline controls. Add a gap modifier (e.g. `.gap-2`, `.gap-3`, `.gap-4`) to control spacing.

## Basic usage

```html
<div class="cluster">
  <button>Save</button>
  <button class="outline">Cancel</button>
</div>
```

Default gap is from the spacing scale. Modifiers:

| Class | Use |
|-------|-----|
| `.cluster.gap-2` | Tighter |
| `.cluster.gap-3` | Default |
| `.cluster.gap-4` | Looser |

```html
<div class="cluster gap-3">
  <span class="badge">Tag 1</span>
  <span class="badge success">Tag 2</span>
  <span class="badge outline">Tag 3</span>
  <button class="sm">Add</button>
</div>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <span class="badge">Tag 1</span>
    <span class="badge success">Tag 2</span>
    <span class="badge outline">Tag 3</span>
    <button class="sm">Add</button>
  </div>
</div>

## Usage notes

- Cluster is flexbox with `flex-wrap: wrap` and `align-items: center`. Use it for toolbars, filter chips, or any group of inline elements.
- On very small screens you can combine with `.stack-mobile` (in Sprout’s responsive rules) so the cluster stacks vertically and buttons go full width.
- Use gap modifiers to keep spacing consistent; avoid ad-hoc margins between items.
