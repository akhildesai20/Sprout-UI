# Sustainability

Sprout is built with low environmental impact in mind: less bytes, less CPU, and fewer unnecessary requests.

## Principles

- **System fonts only** — No webfont downloads. Text uses the OS font stack, which saves bandwidth and avoids layout shift.
- **Dark by default** — Near-black backgrounds reduce power use on OLED screens and are easier on the eyes in low light.
- **Minimal JavaScript** — Behavior is kept small and focused. No framework; CSS handles layout and theming where possible.
- **Reduced motion** — Sprout respects `prefers-reduced-motion: reduce` and shortens or disables animations. Critical for accessibility and for users who prefer less motion.
- **No decorative heaviness** — Avoids heavy shadows, gradients on interactive elements, and layout-thrashing animations. Elevation is suggested with borders where possible.

## Practical impact

- Smaller CSS and JS mean faster loads and less energy per page view.
- Fewer HTTP requests (no font files, optional single bundle) help on slow or metered connections.
- Dark theme and reduced motion improve both sustainability and accessibility.

<div class="sp-demo">
  <p style="margin:0;">Sprout uses system fonts, dark default, and minimal motion. This text is in a demo block.</p>
</div>

## See also

- [Accessibility](/reference/accessibility) — reduced motion and high-contrast theme
- [Theming](/guide/theming) — theme tokens and dark/light/auto
- [Tokens → Motion](/tokens/motion) — allowed transitions and reduced motion
- [Tokens → Themes](/tokens/themes) — how theme variables change
