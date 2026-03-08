# Card

Cards are containers for a block of related content. Use the `.card` class on a wrapper element such as `<div>` or `<article>`. Cards can optionally include a header and footer.

## Basic usage

```html
<div class="card">
  <p>Card body content.</p>
</div>
````

<div class="sp-demo">
  <div class="card">
    <p>Card body content.</p>
  </div>
</div>

## Card with header, text, and actions

```html
<div class="card">
  <header>
    <h3>Card title</h3>
  </header>
  <p>Supporting text or description goes here. Keep it concise.</p>
  <footer>
    <button class="outline sm">Cancel</button>
    <button class="sm">Save</button>
  </footer>
</div>
```

<div class="sp-demo">
  <div class="card">
    <header>
      <h3>Card title</h3>
    </header>
    <p>Supporting text or description goes here. Keep it concise.</p>
    <footer>
      <button class="outline sm">Cancel</button>
      <button class="sm">Save</button>
    </footer>
  </div>
</div>

## Usage notes

* Use semantic elements when possible: `<header>` for the title and `<footer>` for actions.
* The main content can be paragraphs, lists, media, or other components.
* Variants such as `.card.outline`, `.card.flat`, or `.card.interactive` can be used to adjust appearance and behavior.
* Cards are commonly used inside layouts like `.grid` for dashboards, feature lists, or grouped content.