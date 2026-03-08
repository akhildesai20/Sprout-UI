# Z-index

Z-index tokens define stacking order so overlays and chrome appear in a predictable order.

## Scale

| Token | Value | Use |
|-------|--------|-----|
| `--sp-layer-base` | 0 | Default document flow |
| `--sp-layer-raised` | 10 | Sticky nav, raised panels |
| `--sp-layer-dropdown` | 100 | Dropdowns, popovers |
| `--sp-layer-modal` | 200 | Modals, dialogs |
| `--sp-layer-toast` | 300 | Toasts |
| `--sp-layer-tooltip` | 400 | Tooltips |

## Usage

```css
.my-overlay {
  z-index: var(--sp-layer-modal);
}
```

Use the layer that matches the component type so modals stay above dropdowns and toasts above modals when needed.

<div class="sp-demo">
  <p style="margin:0;">Overlays use --sp-layer-* tokens so stacking order is predictable.</p>
</div>
