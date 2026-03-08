# Code block

Code blocks use `<pre><code>`. Sprout styles them with a dark background and a monospace font. Inline code uses `<code>`, and keyboard keys use `<kbd>`.

## Block code

```html
<pre><code>const x = 1;
console.log(x);</code></pre>
````

<div class="sp-demo">
  <pre><code>const x = 1;
console.log(x);</code></pre>
</div>

## Inline code and kbd

Use `<code>` for inline snippets and `<kbd>` for keyboard keys.

```html
<p>Run <code>npm install</code> and press <kbd>Enter</kbd>.</p>
```

<div class="sp-demo">
  <p>Run <code>npm install</code> and press <kbd>Enter</kbd>.</p>
</div>

## Copy button

Add `data-copy` to a `<pre>` element (or a wrapper). When Sprout’s script is loaded, clicking the block copies the code and shows a toast.

```html
<pre data-copy><code>npm install sprout-ui</code></pre>
```

<div class="sp-demo">
  <pre data-copy><code>npm install sprout-ui</code></pre>
</div>

## Usage notes

* Use `<pre><code>` for multi-line code blocks.
* Inline `<code>` is best for short commands or variable names.
* Use `<kbd>` for keyboard shortcuts and key presses.
* Block code remains dark across themes for readability.
* See [Typography](/foundation/typography) for heading and paragraph context.