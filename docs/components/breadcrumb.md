# Breadcrumb

Breadcrumbs show the path to the current page within a site hierarchy. Use `<nav aria-label="Breadcrumb">` with an ordered list using the `.breadcrumb` class. Mark the current page with `aria-current="page"`.

## Basic usage

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/sprout">Sprout UI</a></li>
    <li aria-current="page">Demo</li>
  </ol>
</nav>
````

<div class="sp-demo">
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Sprout UI</a></li>
      <li aria-current="page">Demo</li>
    </ol>
  </nav>
</div>

## Usage notes

* Use `<ol>` to represent the hierarchical path correctly.
* Separators (for example “/” or “›”) are typically added via CSS using `li + li::before`.
* Mark the current page with `aria-current="page"` for accessibility.
* The current page item can be either a link or plain text depending on navigation needs.
* Keep `aria-label="Breadcrumb"` on the `<nav>` so screen readers identify the navigation correctly.