# Spacing

Spacing tokens follow a 4pt grid. Use them for padding, margins, and gaps so layout stays consistent.

## Scale

| Token | Value | Typical use |
|-------|--------|-------------|
| `--sp-1` | 0.25rem (4px) | Tight padding |
| `--sp-2` | 0.5rem (8px) | Small gaps |
| `--sp-3` | 0.75rem (12px) | Medium padding |
| `--sp-4` | 1rem (16px) | Default gap, padding |
| `--sp-5` | 1.25rem (20px) | |
| `--sp-6` | 1.5rem (24px) | Section spacing |
| `--sp-8` | 2rem (32px) | Large spacing |
| `--sp-10` | 2.5rem (40px) | |
| `--sp-12` | 3rem (48px) | |
| `--sp-16` | 4rem (64px) | |

## Usage

```css
.my-block {
  padding: var(--sp-4);
  gap: var(--sp-3);
  margin-bottom: var(--sp-6);
}
```

Stack and cluster gap modifiers (e.g. `.gap-2`, `.gap-4`) use these tokens. Prefer tokens over raw rem/px so the system stays consistent.

<div class="sp-demo">
  <div class="cluster gap-3">
    <button>gap-3</button>
    <button class="outline">cluster</button>
  </div>
</div>
