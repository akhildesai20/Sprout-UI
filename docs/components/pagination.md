# Pagination

Pagination helps users move through multiple pages of content. Use `<nav aria-label="Pagination">` with a list using the `.pagination` class. Mark the current page with `aria-current="page"`.

## Basic usage

```html
<nav aria-label="Pagination">
  <ul class="pagination">
    <li><a href="?p=1">1</a></li>
    <li><a href="?p=2" aria-current="page">2</a></li>
    <li><a href="?p=3">3</a></li>
    <li><span>…</span></li>
    <li><a href="?p=10">10</a></li>
  </ul>
</nav>
````

<div class="sp-demo">
  <nav aria-label="Pagination">
    <ul class="pagination">
      <li><a href="#">1</a></li>
      <li><a href="#" aria-current="page">2</a></li>
      <li><a href="#">3</a></li>
      <li><span>…</span></li>
      <li><a href="#">10</a></li>
    </ul>
  </nav>
</div>

## Usage notes

* Use `<a>` for clickable page links.
* Use `<span>` for ellipsis or disabled items such as unavailable “Previous” or “Next” controls.
* Mark the current page with `aria-current="page"` for accessibility.
* Keep `aria-label="Pagination"` on the `<nav>` so screen readers identify the control correctly.