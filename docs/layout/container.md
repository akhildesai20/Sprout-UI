# Container

Containers constrain content width and add horizontal padding so text and blocks don’t stretch across very wide screens. Use the `.container` class on a wrapper (e.g. `<main>` or `<div>`).

## Basic usage

```html
<div class="container">
  <p>Content is constrained to a max-width and centered with padding.</p>
</div>
```

Add `.narrow` or `.wide` to change the max-width:

| Class | Use |
|-------|-----|
| `.container` | Default max-width (e.g. 1200px). |
| `.container.narrow` | Narrower (e.g. 720px) for reading. |
| `.container.wide` | Wider (e.g. 1440px) for dashboards. |

```html
<div class="container narrow">Narrow container</div>
<div class="container">Default container</div>
<div class="container wide">Wide container</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="container narrow" style="background: var(--sp-surface-2); padding: var(--sp-3); border-radius: var(--sp-radius-md);">
      <small><strong>.container.narrow</strong> — max-width 720px</small>
    </div>
    <div class="container" style="background: var(--sp-surface-2); padding: var(--sp-3); border-radius: var(--sp-radius-md);">
      <small><strong>.container</strong> — default max-width 1200px</small>
    </div>
    <div class="container wide" style="background: var(--sp-surface-2); padding: var(--sp-3); border-radius: var(--sp-radius-md);">
      <small><strong>.container.wide</strong> — max-width 1440px</small>
    </div>
  </div>
</div>

## Usage notes

- Containers are centered with `margin-inline: auto` and use padding (e.g. `padding-inline: var(--sp-4)`). Responsive padding may increase on larger breakpoints.
- Use one container per page section or wrap the main content in a single container. Don’t nest containers.
