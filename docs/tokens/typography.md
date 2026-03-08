# Typography tokens

Typography tokens control font families, sizes, and line height. Sprout uses a **fluid scale** (clamp) for sizes and **system fonts only** (no webfonts).

## Size scale

| Token | Use |
|-------|-----|
| `--sp-text-xs` | Small labels, captions |
| `--sp-text-sm` | Secondary text, code |
| `--sp-text-base` | Body text |
| `--sp-text-md` | Slightly larger body |
| `--sp-text-lg` | Subheadings |
| `--sp-text-xl` | h4 |
| `--sp-text-2xl` | h3, h2 |
| `--sp-text-3xl` | h1 |

Sizes use `clamp()` so they scale between a minimum and maximum with viewport. This keeps type readable on small and large screens.

## Font and line height

| Token | Value |
|-------|--------|
| `--sp-font` | system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |
| `--sp-font-mono` | ui-monospace, 'Cascadia Code', 'Fira Code', monospace |
| `--sp-leading` | 1.6 (body) |
| `--sp-leading-tight` | 1.2 (headings) |

Use `--sp-font` for body and UI; use `--sp-font-mono` for code. No webfonts are loaded.

<div class="sp-demo">
  <p style="margin:0;font-family:var(--sp-font);font-size:var(--sp-text-base);">Body: var(--sp-font), var(--sp-text-base)</p>
  <p style="margin:0;font-family:var(--sp-font-mono);font-size:var(--sp-text-sm);">Code: var(--sp-font-mono)</p>
</div>
