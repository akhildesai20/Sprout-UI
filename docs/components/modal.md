# Modal

Modals are dialog windows opened by a trigger and closed by a close button or by clicking the backdrop. Sprout uses the native `<dialog>` element and delegates open/close to elements with `data-modal` and `data-modal-close`.

## Basic usage

Add a trigger (e.g. a button) with `data-modal="id"` where `id` is the `id` of your `<dialog>`. Inside the dialog, use `data-modal-close` on buttons that should close it.

```html
<button data-modal="docs-demo-modal">Open modal</button>

<dialog id="docs-demo-modal">
  <header>
    <h3>Confirm action</h3>
    <button type="button" class="ghost icon" data-modal-close aria-label="Close">✕</button>
  </header>
  <div class="dialog-body">
    <p>Are you sure you want to continue?</p>
  </div>
  <footer>
    <button class="outline" data-modal-close>Cancel</button>
    <button>Confirm</button>
  </footer>
</dialog>
```

<div class="sp-demo">
  <button data-modal="docs-demo-modal">Open modal</button>

  <dialog id="docs-demo-modal">
    <header>
      <h3>Confirm action</h3>
      <button type="button" class="ghost icon" data-modal-close aria-label="Close">✕</button>
    </header>
    <div class="dialog-body">
      <p>Are you sure you want to continue?</p>
    </div>
    <footer>
      <button class="outline" data-modal-close>Cancel</button>
      <button>Confirm</button>
    </footer>
  </dialog>
</div>

## Usage notes

- **Trigger:** Any element with `data-modal="id"` opens the dialog whose `id` matches. Use a `<button>` or `[role="button"]` for accessibility.
- **Close:** Elements with `data-modal-close` close the dialog (e.g. Cancel, Close). Clicking the backdrop also closes it.
- **Focus trap:** While the dialog is open, Tab and Shift+Tab cycle focus only within the dialog. Focus is recalculated on each key press so dynamic content (e.g. form steps) is supported.
- **Structure:** Use `<header>`, a body section (e.g. `.dialog-body`), and `<footer>` for consistent layout. Add classes `.sm`, `.lg`, or `.full` to the `<dialog>` for size variants.
- Requires Sprout’s script for open/close and focus trap.
