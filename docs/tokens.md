# Design Tokens

Sprout uses CSS custom properties (variables) prefixed with `--sp-` for colors, spacing, typography, radius, motion, z-index, and themes. Override them in your own CSS after Sprout to customize the look without editing the library.

## Token categories

| Category | Description |
|----------|-------------|
| [Colors](/tokens/colors) | Backgrounds, surfaces, text, primary, danger, success, warning, info |
| [Spacing](/tokens/spacing) | 4pt grid scale (`--sp-1` through `--sp-16`) for padding, margin, gap |
| [Typography](/tokens/typography) | Font families, fluid size scale, line height |
| [Radius](/tokens/radius) | Border radius for buttons, inputs, cards, modals |
| [Motion](/tokens/motion) | Duration, easing, and reduced-motion behavior |
| [Z-index](/tokens/z-index) | Stacking order for overlays (dropdown, modal, toast, tooltip) |
| [Themes](/tokens/themes) | How `data-theme` switches color token sets (dark, light, high-contrast, auto) |

## Quick override example

```css
/* After loading Sprout CSS */
:root {
  --sp-primary: #2d5a3d;
  --sp-radius-md: 8px;
}
```

See each category page for the full token list and usage.
