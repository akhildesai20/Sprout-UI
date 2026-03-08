# Colors

Color tokens are **theme-driven**: they change with `data-theme` (dark, light, high-contrast) or with system preference when using auto. All tokens use the `--sp-*` prefix.

## Roles

| Token | Role |
|-------|------|
| `--sp-bg` | Page background |
| `--sp-surface`, `--sp-surface-2`, `--sp-surface-3` | Surfaces (cards, inputs, raised areas) |
| `--sp-border`, `--sp-border-2` | Borders and dividers |
| `--sp-text`, `--sp-text-2`, `--sp-text-muted` | Primary, secondary, muted text |
| `--sp-primary`, `--sp-primary-fg`, `--sp-primary-hover` | Brand and buttons |
| `--sp-danger`, `--sp-danger-fg` | Errors, destructive |
| `--sp-warning`, `--sp-warning-fg` | Warnings |
| `--sp-success`, `--sp-success-fg` | Success, confirmation |
| `--sp-info`, `--sp-info-fg` | Informational |

Use semantic roles (e.g. `--sp-danger` for errors) so themes can restyle the whole UI consistently. See [Themes](/tokens/themes) for how themes change these values.

<div class="sp-demo">
  <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;">
    <span style="display:inline-block;width:40px;height:24px;background:var(--sp-primary);border-radius:var(--sp-radius-sm);"></span>
    <span style="display:inline-block;width:40px;height:24px;background:var(--sp-danger);border-radius:var(--sp-radius-sm);"></span>
    <span style="display:inline-block;width:40px;height:24px;background:var(--sp-surface-2);border:1px solid var(--sp-border);border-radius:var(--sp-radius-sm);"></span>
  </div>
</div>
