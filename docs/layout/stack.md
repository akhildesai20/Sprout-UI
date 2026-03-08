# Stack

Stack arranges children vertically with consistent spacing. Use `.stack` on a wrapper. Add a gap modifier (e.g. `.gap-2`, `.gap-4`) to control the space between items.

## Basic usage

```html
<div class="stack">
  <p>First item</p>
  <p>Second item</p>
  <p>Third item</p>
</div>
```

Default gap uses Sprout’s spacing scale. Override with a modifier:

| Class | Spacing |
|-------|---------|
| `.stack.gap-1` | Tight |
| `.stack.gap-2` | Small |
| `.stack.gap-3` | — |
| `.stack.gap-4` | Default |
| `.stack.gap-5` | — |
| `.stack.gap-6` | Large |
| `.stack.gap-8` | Extra large |

```html
<div class="stack gap-4">
  <button>First</button>
  <button class="outline">Second</button>
  <button class="ghost">Third</button>
</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <button>First</button>
    <button class="outline">Second</button>
    <button class="ghost">Third</button>
  </div>
</div>

## Usage notes

- Stack is flexbox with `flex-direction: column`. Use it for forms, card content, or any vertical list of blocks.
- Prefer gap modifiers over custom margins so spacing stays consistent with the design tokens.
- Combine with `.container` or inside a `.card` for page or card structure.
