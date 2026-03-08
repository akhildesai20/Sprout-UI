# Avatar

Avatars display user initials or images in a circular container. Use `.avatar` with `.sm` or `.lg` for size variants, and `.avatar-group` to overlap multiple avatars into a stack.

## Sizes
```html
<span class="avatar sm">AB</span>
<span class="avatar">JD</span>
<span class="avatar lg">XY</span>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <span class="avatar sm">AB</span>
    <span class="avatar">JD</span>
    <span class="avatar lg">XY</span>
  </div>
</div>

## With image

Place an `<img>` inside `.avatar` instead of initials. The image fills the circle automatically.
```html
<span class="avatar lg">
  <img src="photo.jpg" alt="Jane Doe">
</span>
```

## Status indicator

Add `data-status="online"` to show a small presence dot.
```html
<span class="avatar" data-status="online">JD</span>
<span class="avatar" data-status="offline">NK</span>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <span class="avatar" data-status="online">JD</span>
    <span class="avatar" data-status="offline">NK</span>
  </div>
</div>

## Avatar group

Wrap avatars in `.avatar-group` to overlap them into a stack. Add a count avatar at the end for overflow.
```html
<div class="avatar-group">
  <span class="avatar">A</span>
  <span class="avatar">B</span>
  <span class="avatar">C</span>
  <span class="avatar" style="background:var(--sp-surface-3);color:var(--sp-text-muted)">+4</span>
</div>
```

<div class="sp-demo">
  <div class="avatar-group">
    <span class="avatar">JD</span>
    <span class="avatar">MK</span>
    <span class="avatar">SR</span>
    <span class="avatar" style="background:var(--sp-surface-3);color:var(--sp-text-muted)">+4</span>
  </div>
</div>

## Usage notes

- Use `<span>` for inline contexts, `<div>` if used as a block element.
- `.sm`, default, and `.lg` sizes are defined in Sprout CSS — no manual `width`/`height` needed.
- Initials should be 1–2 characters. For longer names, truncate before passing to the element.
- The overflow count avatar (e.g. `+4`) has no special class — style it manually using surface tokens as shown above.
- `data-status` currently supports `"online"` (green dot) and `"offline"` (no dot shown — the attribute is present but no indicator renders for offline by default).