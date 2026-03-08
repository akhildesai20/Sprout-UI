# Sidebar

Sidebars are vertical navigation panels. Use the `.sidebar` class on a container (for example `<aside>`). Put a `<nav>` inside for links.

On small screens, the sidebar can be off-canvas and toggled with a button that has `data-sidebar-toggle` and `aria-controls` pointing to the sidebar’s `id`.

---

## Basic usage

````html
<aside class="sidebar" id="main-sidebar">
  <nav>
    <p class="sidebar-label">Menu</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/docs">Docs</a></li>
    </ul>
  </nav>
</aside>
`````

<div class="sp-demo">
  <aside class="sidebar" id="docs-sidebar-demo" style="position: relative; left: 0; height: auto; width: 14rem; z-index: auto;">
    <nav>
      <p class="sidebar-label">Menu</p>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">Docs</a></li>
      </ul>
    </nav>
  </aside>
</div>

---

## Toggle (mobile)

Add a button with `data-sidebar-toggle` and `aria-controls` pointing to the sidebar `id`.
When the sidebar has the attribute `data-open`, it becomes visible (for example sliding in from the side).

On narrow viewports (&lt; 768px), the sidebar is off-canvas. Click **☰** to open or close it.

```html
<button
  type="button"
  data-sidebar-toggle
  aria-controls="main-sidebar"
  aria-expanded="false"
  aria-label="Open menu"
>
  ☰
</button>

<aside class="sidebar" id="main-sidebar">
  <nav>
    <p class="sidebar-label">Menu</p>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
  </nav>
</aside>
```

<div class="sp-demo">
  <button type="button" data-sidebar-toggle aria-controls="docs-sidebar-mobile" aria-expanded="false" aria-label="Open menu">☰ Open menu</button>
  <aside class="sidebar" id="docs-sidebar-mobile">
    <nav>
      <p class="sidebar-label">Menu</p>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Docs</a></li>
      </ul>
    </nav>
  </aside>
</div>

---

## Usage notes

* Use a **unique `id`** on the sidebar and reference it in the toggle’s `aria-controls`.
* Responsive behavior (off-canvas layout and `data-open` handling) is defined in Sprout’s responsive styles.
* On larger viewports the sidebar can behave as a **fixed or sticky navigation panel**.
* Use `.sidebar-label` for section headings inside the sidebar.