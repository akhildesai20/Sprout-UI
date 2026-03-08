# Buttons

Buttons are semantic-first in Sprout.

A plain `<button>` renders as the default primary action. Add classes only when you need a variant or size.

## Default

```html
<button>Save changes</button>
````

<div class="sp-demo">
  <button>Save changes</button>
</div>

## Variants

Use variant classes to represent different action types.

```html
<button>Default</button>
<button class="outline">Outline</button>
<button class="ghost">Ghost</button>
<button class="danger">Danger</button>
<button class="success">Success</button>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <button>Default</button>
    <button class="outline">Outline</button>
    <button class="ghost">Ghost</button>
    <button class="danger">Danger</button>
    <button class="success">Success</button>
  </div>
</div>

## Sizes

Use `.sm` or `.lg` to adjust the button size.

```html
<button class="sm">Small</button>
<button>Default</button>
<button class="lg">Large</button>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <button class="sm">Small</button>
    <button>Default</button>
    <button class="lg">Large</button>
  </div>
</div>

## Full width

Use `.full` to make a button expand to the container width.

```html
<button class="full">Continue</button>
```

<div class="sp-demo">
  <button class="full">Continue</button>
</div>

## Icon buttons

Use `.icon` for compact icon-only buttons. Always include an accessible label.

```html
<button class="icon" aria-label="Close">✕</button>
<button class="icon ghost" aria-label="More">⋯</button>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <button class="icon" aria-label="Close">✕</button>
    <button class="icon ghost" aria-label="More">⋯</button>
  </div>
</div>

## Disabled and loading

Use the `.loading` class while an action is in progress. For a clearer loading state, put a spinner inside the button with status text. The button is non-interactive (pointer-events: none) until you remove the class.

```html
<button disabled>Disabled</button>
<button class="loading" disabled aria-busy="true">
  <span class="spinner sm" aria-hidden="true"></span>
  Saving…
</button>
```

<div class="sp-demo">
  <div class="cluster gap-3">
    <button disabled>Disabled</button>
    <button class="loading" disabled aria-busy="true">
      <span class="spinner sm" aria-hidden="true"></span>
      Saving…
    </button>
  </div>
</div>

## Using links as buttons

When the action is navigation, use an `<a>` with `role="button"`. It is styled like a standard link (underline, primary color) but keeps the same padding and min-height so it aligns with real buttons inline.

```html
<a href="/billing" role="button">Go to billing</a>
```

<div class="sp-demo">
  <a href="javascript:void(0)" role="button">Go to billing</a>
</div>

## Usage notes

* A **plain `<button>` represents the primary action**.
* Use **outline** for secondary actions.
* Use **ghost** for low-emphasis actions.
* Use **danger** only for destructive actions.
* Use **success** sparingly for confirmation flows.
* Prefer real `<button>` elements unless the action is true navigation.