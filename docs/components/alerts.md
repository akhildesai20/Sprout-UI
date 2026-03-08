# Alerts

Alerts are inline notices and status messages. Use `role="alert"` so screen readers announce them immediately. Add a variant class to communicate severity.

## Variants

| Class | Meaning |
|-------|---------|
| (none) | Neutral notice |
| `.success` | Confirmation or success |
| `.warning` | Caution, review needed |
| `.danger` | Error or destructive outcome |
| `.info` | Informational or tip |
```html
<div role="alert">Default alert message.</div>
<div role="alert" class="success">Your changes have been saved.</div>
<div role="alert" class="warning">Session expires in 5 minutes.</div>
<div role="alert" class="danger">Failed to connect. Check your network.</div>
<div role="alert" class="info">Tip: use the sidebar to navigate sections.</div>
```

<div class="sp-demo">
  <div class="stack gap-2">
    <div role="alert">Default alert message.</div>
    <div role="alert" class="success">Your changes have been saved.</div>
    <div role="alert" class="warning">Session expires in 5 minutes.</div>
    <div role="alert" class="danger">Failed to connect. Check your network.</div>
    <div role="alert" class="info">Tip: use the sidebar to navigate sections.</div>
  </div>
</div>

## Dismissible

Add `data-dismissible` to the alert and `data-dismiss-alert` to the close button. Sprout fades the alert out and sets `data-dismissed="true"` when dismissed.
```html
<div role="alert" class="info" data-dismissible>
  <span>A new version is available.</span>
  <button type="button" data-dismiss-alert aria-label="Dismiss">✕</button>
</div>
```

<div class="sp-demo">
  <div class="stack gap-3">
    <div role="alert" class="info" data-dismissible id="demo-alert-1">
      <span>A new version is available. Refresh to update.</span>
      <button type="button" data-dismiss-alert aria-label="Dismiss">✕</button>
    </div>
    <div role="alert" class="warning" data-dismissible id="demo-alert-2">
      <span>Your trial ends in 3 days.</span>
      <button type="button" data-dismiss-alert aria-label="Dismiss">✕</button>
    </div>
    <button class="outline sm" onclick="
      ['demo-alert-1','demo-alert-2'].forEach(id => {
        const el = document.getElementById(id);
        el.removeAttribute('data-dismissed');
        el.style.opacity = '';
        el.style.transition = '';
      })
    ">Reset demo</button>
  </div>
</div>

## Usage notes

- Always use `role="alert"` — it makes screen readers announce the message immediately.
- One variant class per alert. Combine with `data-dismissible` freely.
- For transient feedback ("Saved", "Copied"), prefer `Sprout.toast()` over an inline alert — toasts auto-dismiss and don't shift layout.
- Dismissible alerts require Sprout's script. The close button must carry `data-dismiss-alert`.
- The dismissed fade uses `opacity` and `transform` only — no layout shift, no reflow.