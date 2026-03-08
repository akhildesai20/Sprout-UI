# Typography

Sprout styles semantic text elements directly: headings, paragraphs, small text, strong, code, pre, kbd, blockquote, and horizontal rules. No extra classes are required for basic typography.

## Headings

Use `<h1>` through `<h6>` for document structure. Sizes follow a fluid scale.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Paragraph and inline

```html
<p>A paragraph with <strong>strong</strong> and <small>small</small> text.</p>
```

## Code and pre

Inline `<code>` and `<kbd>` for snippets and keys. Use `<pre><code>` for blocks.

```html
<p>Press <kbd>Enter</kbd> or run <code>npm install</code>.</p>
<pre><code>const x = 1;</code></pre>
```

## Blockquote and hr

```html
<blockquote>A quoted block of text.</blockquote>
<hr>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <p>A paragraph with <strong>strong</strong> and <small>small</small> text.</p>
    <p>Press <kbd>Enter</kbd> or run <code>npm install</code>.</p>
    <pre><code>const x = 1;</code></pre>
    <blockquote>A quoted block of text.</blockquote>
    <hr>
  </div>
</div>

## Usage notes

- Use headings in order (h1 → h2 → h3) for accessibility and outline.
- `<small>` is styled as muted secondary text.
- Code blocks use `<pre><code>`; Sprout gives them a dark background. See [Code Block](/components/code-block) for copy behavior.
- See also [Design tokens → Typography](/tokens/typography) for font and size variables.
