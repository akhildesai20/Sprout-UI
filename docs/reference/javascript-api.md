# JavaScript API

Sprout exposes a single object, `Sprout`, with a small set of methods. Use it when you load `sprout.min.js` (or the bundle). No build step is required.

## init

```js
Sprout.init()
```

Registers custom elements (tabs, dropdown) and attaches event listeners for modals, dismissible alerts, copy button, nav collapse, and sidebar collapse. Called automatically when the script loads if the DOM is ready; you can call it again (e.g. after dynamic content) — it is guarded so it runs only once.

## Theme

```js
Sprout.setTheme('dark' | 'light' | 'high-contrast' | 'auto')
Sprout.getTheme()   // current theme or 'auto'
Sprout.toggleTheme() // flip dark ↔ light (or from auto)
```

Sets or reads `data-theme` on `<html>`. Use `'auto'` or omit the attribute to follow system preference.

## Toast

```js
Sprout.toast('Message')
Sprout.toast('Saved.', { type: 'success', duration: 4000, position: 'top-right' })
```

Shows a transient notification. Options: `type` (`'success'`, `'danger'`, `'warning'`, `'info'`), `duration` (ms; `0` = persistent), `position` (e.g. `'top-right'`, `'bottom-left'`).

## Tooltip

```js
Sprout.tooltip(element, 'Help text')
Sprout.tooltip(element, 'Below', { position: 'bottom' })
```

Attaches a tooltip to an element. Shown on mouseenter/focus, hidden on mouseleave/blur. Options: `position` — `'top'`, `'bottom'`, `'left'`, `'right'`.

---

All other behavior (modals, alerts, copy, nav/sidebar toggles, tabs, dropdowns) is driven by markup and event delegation; you do not need to call any API for those beyond ensuring the script is loaded and `init` has run.

<div class="sp-demo">
  <button type="button" onclick="window.Sprout && Sprout.toast('API works')">Sprout.toast('API works')</button>
</div>
