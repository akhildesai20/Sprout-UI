# Toast

Toasts are short-lived notifications shown in a corner (or center) of the screen. Sprout provides a JavaScript API: `Sprout.toast(message, options)`. No HTML markup is required; the script creates and removes toast elements.

## Basic usage

Call `Sprout.toast(message, options)` — no HTML markup required.

```js
Sprout.toast('Message')
Sprout.toast('Saved.', { type: 'success' })
Sprout.toast('Error.', { type: 'danger' })
Sprout.toast('Note.', { type: 'info' })
Sprout.toast('Warning.', { type: 'warning' })
Sprout.toast('Stays longer.', { duration: 6000 })
Sprout.toast('Top left.', { position: 'top-left' })
Sprout.toast('Persistent.', { duration: 0 })
```

| Option | Description |
|--------|-------------|
| `type` | `'success'`, `'danger'`, `'warning'`, `'info'` — applies styling. |
| `duration` | Milliseconds before auto-dismiss. Default 4000. Use `0` for persistent. |
| `position` | `'top-right'`, `'top-left'`, `'bottom-right'`, `'bottom-left'`, `'top-center'`. |

## Live demo

Click the buttons below to trigger toasts (requires Sprout script).

<div class="sp-demo">
  <div class="cluster gap-3">
    <button type="button" onclick="window.Sprout && Sprout.toast('Default toast')">Default</button>
    <button type="button" class="outline" onclick="window.Sprout && Sprout.toast('Saved.', { type: 'success' })">Success</button>
    <button type="button" class="outline" onclick="window.Sprout && Sprout.toast('Something went wrong.', { type: 'danger' })">Danger</button>
    <button type="button" class="ghost" onclick="window.Sprout && Sprout.toast('Update available.', { type: 'info' })">Info</button>
    <button type="button" class="ghost" onclick="window.Sprout && Sprout.toast('Storage almost full.', { type: 'warning' })">Warning</button>
  </div>
</div>

## Usage notes

- Toasts are appended to a container (e.g. `#sp-toast-container`) that Sprout creates if missing. They are removed after the duration or when the user navigates away.
- Use `duration: 0` for a toast that does not auto-dismiss; the user must refresh or navigate to clear it (or you can extend the API to support manual dismiss).
- Position is set per toast; the container is positioned according to the last toast’s `position` (or default `top-right`).
- Requires Sprout’s script; `Sprout.toast` is available after the script loads (e.g. `window.Sprout` in the docs).
