# Tooltip

Sprout provides a **programmatic** tooltip via `Sprout.tooltip(element, text, options)`. There is no declarative HTML-only tooltip; you call the API when you need a tooltip (e.g. on a button or icon).

## Basic usage

Call `Sprout.tooltip(element, text, options)` when the element exists.

```js
Sprout.tooltip(element, 'Help text')
Sprout.tooltip(element, 'Below', { position: 'bottom' })
```

Options: `position` — `'top'` (default), `'bottom'`, `'left'`, `'right'`.

## Live demo

Hover or focus the button or text below to see the tooltip. Tooltips are attached on page load via the script below.

<div class="sp-demo">
  <div style="display:flex;gap:1rem;align-items:center;padding:2rem 0">
    <button id="tooltip-demo-btn">Hover me</button>
    <span id="tooltip-demo-text"
      style="cursor:default;border-bottom:1px dashed var(--sp-primary)">
      Or hover this text
    </span>
  </div>
</div>

<script>
(function bindTooltipDemo() {
  function run() {
    if (!window.Sprout) return false;
    var btn = document.getElementById('tooltip-demo-btn');
    var text = document.getElementById('tooltip-demo-text');
    if (!btn || !text) return false;
    window.Sprout.tooltip(btn, 'Save all changes');
    window.Sprout.tooltip(text, 'This is a tooltip');
    return true;
  }
  var attempts = 0;
  function tryBind() {
    if (run()) return;
    if (++attempts <= 25) setTimeout(tryBind, 50);
  }
  if (document.readyState === 'complete') setTimeout(tryBind, 0);
  else window.addEventListener('load', function() { setTimeout(tryBind, 0); });
})();
</script>

## Usage notes

- **Programmatic only:** You must call `Sprout.tooltip(el, text)` after the element exists. No `data-tooltip` attribute is wired by default.
- Tooltips are shown on `mouseenter` and `focus`, hidden on `mouseleave` and `blur`.
- For simple native tooltips, you can use the HTML `title` attribute; Sprout's tooltip gives you styled, positioned content and control over placement.
- Ensure the target element is in the DOM and Sprout is loaded before calling `tooltip`.
