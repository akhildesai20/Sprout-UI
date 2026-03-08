# Accessibility

Sprout encourages accessible patterns through semantic HTML, focus handling, reduced motion, and a high-contrast theme.

## Focus visible

Interactive elements use a visible focus ring when focused via keyboard. Sprout uses `:focus-visible` so the ring does not show on mouse click, only when navigating with Tab or similar. The ring color follows the primary token.

## Reduced motion

When the user has **Reduce motion** enabled (`prefers-reduced-motion: reduce`), Sprout shortens animation and transition durations to near zero and turns off scroll-based animation. This is applied globally in the token section. Do not override it for decorative effects.

## Semantic HTML

Use the right elements: `<button>` for actions, `<a>` for navigation, `<label>` with form controls, `<nav>`, `<main>`, `<header>`, `<footer>`, and landmarks. Sprout styles these elements so you get consistent look and behavior without extra ARIA for basic cases. Add ARIA when you need to describe custom widgets (e.g. `aria-expanded` on nav toggles).

## High-contrast theme

Set `data-theme="high-contrast"` on `<html>` (or use `Sprout.setTheme('high-contrast')`) for stronger contrast and clearer borders. Use it when your audience or compliance requires it.

## Keyboard interaction

- **Modals** — Focus is trapped inside the dialog; Tab and Shift+Tab cycle through focusable elements. Escape should close the dialog (handled by the browser or your script).
- **Dropdowns** — Arrow keys move between items; Enter/Space activate; Escape closes.
- **Tabs** — Arrow keys move between tabs; Home/End go to first/last.
- **Nav/sidebar toggles** — Buttons are focusable and activatable with Enter/Space.

Ensure custom controls are focusable and have clear keyboard behavior; Sprout does not add keyboard logic to arbitrary elements.

<div class="sp-demo">
  <button type="button">Focus me (Tab here)</button>
</div>

## See also

- [Inputs & Fields](/components/inputs) — labels, fieldsets, and form structure
- [Tokens → Themes](/tokens/themes) — high-contrast and theme switching
