# Themes

Themes switch the entire color palette by setting `data-theme` on `<html>`. All color tokens (backgrounds, surfaces, text, primary, danger, etc.) are redefined per theme.

## Theme values

| Value | Description |
|-------|-------------|
| **dark** | Default. Near-black backgrounds, muted greens, OLED-friendly. |
| **light** | Off-white surfaces, darker text. |
| **high-contrast** | Strong contrast and clear borders for accessibility. |
| **auto** | Omit `data-theme`; follows `prefers-color-scheme` (light/dark). |

## How it works

- **Dark / light / high-contrast:** Set `data-theme="dark"` (or `light` / `high-contrast`) on `<html>`. Every `--sp-*` color token is defined under `[data-theme="dark"]`, etc.
- **Auto:** When `data-theme` is not set, `@media (prefers-color-scheme: light)` and `@media (prefers-color-scheme: dark)` apply the same token sets to `:root:not([data-theme])`.

So one set of components works in all themes; only the token values change. See [Theming](/guide/theming) for the JavaScript API (`setTheme`, `getTheme`, `toggleTheme`).

<div class="sp-demo">
  <p style="margin:0;">This block uses current theme tokens. Switch theme in the docs to see colors update.</p>
</div>

## Breakpoints (reference)

Sprout does not use JS breakpoints. For media queries, you can use these values (documented in the CSS; not CSS custom properties):

- 480px — mobile landscape
- 768px — tablet
- 1024px — desktop
- 1440px — large screens
