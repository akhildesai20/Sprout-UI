# Theming

Sprout uses a token-based theme system controlled by the `data-theme` attribute on the document root.

## data-theme usage

Set the theme on `<html>`:

```html
<html data-theme="dark">
<html data-theme="light">
<html data-theme="high-contrast">
<html>
```

No `data-theme` attribute means **auto** mode: the UI follows the system preference (`prefers-color-scheme`).

## Theme values

| Value | Description |
|-------|-------------|
| **dark** | Default. Near-black backgrounds, muted greens, OLED-friendly. |
| **light** | Off-white surfaces, darker text, reduced glare. |
| **high-contrast** | Accessibility-focused: strong contrast, clear borders. |
| **auto** | Omit the attribute; follows OS light/dark setting. |

## JavaScript theme API

When using Sprout’s script, you can switch themes programmatically:

```js
Sprout.setTheme('dark')   // set to dark
Sprout.setTheme('light')  // set to light
Sprout.setTheme('high-contrast')
Sprout.setTheme('auto')   // or setTheme() with no arg — follow system
Sprout.getTheme()         // current theme or 'auto'
Sprout.toggleTheme()      // flip between dark and light (or auto → light/dark)
```

## Live demo

Use the buttons below to change the theme (when Sprout is loaded). The input and buttons reflect the current theme tokens.

<div class="sp-demo">

<div class="stack gap-4">
  <div class="cluster gap-3">
    <button type="button" onclick="window.Sprout && Sprout.setTheme('dark')">Dark</button>
    <button type="button" class="outline" onclick="window.Sprout && Sprout.setTheme('light')">Light</button>
    <button type="button" class="ghost" onclick="window.Sprout && Sprout.setTheme('high-contrast')">High contrast</button>
    <button type="button" class="ghost" onclick="window.Sprout && Sprout.setTheme('auto')">Auto</button>
    <button type="button" class="ghost" onclick="window.Sprout && Sprout.toggleTheme()">Toggle</button>
  </div>
  <div class="field">
    <label for="demo-theme-input">Sample input</label>
    <input id="demo-theme-input" type="text" placeholder="Theme affects tokens">
  </div>
</div>

</div>

## See also

- [Tokens → Themes](/tokens/themes) — how theme values change token sets.

## Notes

- Tokens (e.g. `--sp-primary`, `--sp-surface`) are defined per theme.
- Prefer **auto** so the app respects the user’s system preference.
- Use **high-contrast** when accessibility requirements need maximum contrast.
