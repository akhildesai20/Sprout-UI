# Toggle & Range

Toggle is a CSS-only switch using `label.toggle` wrapping a checkbox. Range inputs are styled semantic `<input type="range">`. No JavaScript required for the toggle; range value display can be enhanced with JS if needed.

## Toggle

Wrap a checkbox in `<label class="toggle">` with a `<span>` for the label text.

```html
<!-- Toggle (CSS-only) -->
<label class="toggle">
  <input type="checkbox">
  <span>Enable feature</span>
</label>

<!-- Checkbox -->
<label>
  <input type="checkbox"> Option
</label>

<!-- Range -->
<input type="range" min="0"
  max="100" value="50">
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="stack gap-2">
      <label class="toggle"><input type="checkbox" checked><span>Dark mode enabled</span></label>
      <label class="toggle"><input type="checkbox"><span>Email notifications</span></label>
      <label class="toggle"><input type="checkbox" checked><span>Auto-save</span></label>
    </div>
    <div class="stack gap-2">
      <label><input type="checkbox" checked style="margin-right:var(--sp-2)"> Remember me</label>
      <label><input type="radio" name="plan" checked style="margin-right:var(--sp-2)"> Free</label>
      <label><input type="radio" name="plan" style="margin-right:var(--sp-2)"> Pro</label>
    </div>
    <div class="field">
      <label>Volume — <span id="range-val">50</span>%</label>
      <input type="range" min="0" max="100" value="50" id="d-range">
    </div>
  </div>
</div>

## Usage notes

- **Toggle:** `label.toggle` with a checkbox and `<span>` — the switch appearance is pure CSS.
- **Checkbox / Radio:** Style with `appearance: none`; use semantic `<label>` wrapping.
- **Range:** Semantic `<input type="range">`; use a `.field` with a label and optional value span (update via JS if desired).
