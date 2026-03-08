# Motion

Motion tokens define duration and easing. Sprout limits **what** is animated to avoid layout thrashing and to respect reduced motion.

## Tokens

| Token | Value | Use |
|-------|--------|-----|
| `--sp-dur-fast` | 120ms | Quick feedback (e.g. hover) |
| `--sp-dur-base` | 200ms | Default transitions |
| `--sp-ease` | cubic-bezier(0.2, 0, 0, 1) | Easing for transitions |

## Allowed properties

Sprout only animates or transitions:

- `opacity`
- `transform`
- `color`
- `background-color`
- `border-color`
- `box-shadow` (e.g. focus rings only)

Avoid animating layout-affecting properties (width, height, top, left, right, bottom, margin, padding, font-size) so the page stays performant and predictable.

## Reduced motion

When the user has **Reduce motion** enabled (`prefers-reduced-motion: reduce`), Sprout sets animation and transition durations to 0.01ms and disables smooth scroll. This is applied globally. Do not override it for decorative motion. See [Accessibility](/reference/accessibility).

<div class="sp-demo">
  <button type="button">Transition uses var(--sp-dur-base)</button>
</div>
