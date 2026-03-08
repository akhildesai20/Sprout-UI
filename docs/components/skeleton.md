# Skeleton

Skeleton placeholders show loading state for content blocks. Use the `.skeleton` class on a `<div>`. Add `.animated` only when you want a shimmer effect (off by default for sustainability).

## Basic usage

```html
<div class="skeleton" style="width: 100%; height: 1rem;"></div>
<div class="skeleton" style="width: 80%; height: 1rem;"></div>
<div class="skeleton" style="width: 60%; height: 1rem;"></div>
```

## Circle (avatars)

Use `.skeleton.circle` with equal width and height for avatar placeholders.

```html
<div class="skeleton circle" style="width: 40px; height: 40px;"></div>
```

## Animated (shimmer)

Add `.animated` for a subtle shimmer. Use sparingly; it increases motion.

```html
<div class="skeleton animated" style="width: 100%; height: 1rem;"></div>
```

<div class="sp-demo">
  <div class="stack gap-3">
    <div class="skeleton" style="width: 100%; height: 1rem;"></div>
    <div class="skeleton" style="width: 80%; height: 1rem;"></div>
    <div class="skeleton" style="width: 60%; height: 1rem;"></div>
    <div class="cluster gap-2">
      <div class="skeleton circle" style="width: 40px; height: 40px;"></div>
      <div class="skeleton animated" style="width: 120px; height: 1rem;"></div>
    </div>
  </div>
</div>

## Usage notes

- Shimmer is **off by default** (eco-friendly). Add `.animated` only when needed.
- Set width/height via inline style or your own CSS so the skeleton matches the final content shape.
- Use `.circle` for avatar or icon placeholders.
