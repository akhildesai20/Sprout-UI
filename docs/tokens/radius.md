# Radius

Border-radius tokens keep corners consistent across components.

## Scale

| Token | Value | Use |
|-------|--------|-----|
| `--sp-radius-sm` | 3px | Buttons, badges, small controls |
| `--sp-radius-md` | 5px | Inputs, cards, code blocks |
| `--sp-radius-lg` | 8px | Modals, larger surfaces |
| `--sp-radius-full` | 9999px | Pills, avatars, circular elements |

## Usage

```css
.my-card {
  border-radius: var(--sp-radius-md);
}
```

Sprout applies these to buttons, inputs, cards, modals, and avatars. Use the same tokens for custom components so the look stays consistent.

<div class="sp-demo">
  <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;">
    <span style="display:inline-block;width:48px;height:48px;background:var(--sp-surface-2);border-radius:var(--sp-radius-sm);"></span>
    <span style="display:inline-block;width:48px;height:48px;background:var(--sp-surface-2);border-radius:var(--sp-radius-md);"></span>
    <span style="display:inline-block;width:48px;height:48px;background:var(--sp-surface-2);border-radius:var(--sp-radius-full);"></span>
  </div>
</div>
