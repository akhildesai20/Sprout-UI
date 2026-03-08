# Navbar

The navbar is a horizontal bar for **branding, primary navigation, and quick actions**.

In Sprout, navbar styles apply only when a `<nav>` is a **direct child** of `<header>` or an element with `[role="banner"]`.

This keeps other navigation elements, such as sidebars, unaffected.

## Basic usage

Use `.brand` for the logo or product name, a `<ul>` for navigation links, and optional actions on the right.

```html
<header>
  <nav>
    <a class="brand" href="/">MyApp</a>
    <ul>
      <li><a href="#" class="active">Dashboard</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
    <div class="cluster gap-2">
      <button class="ghost sm">Log in</button>
      <button class="sm">Sign up</button>
    </div>
  </nav>
</header>
```

<div class="sp-demo">
  <header>
    <nav>
      <a class="brand" href="#">MyApp</a>
      <ul>
        <li><a href="#" class="active">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
      <div class="cluster gap-2">
        <button class="ghost sm">Log in</button>
        <button class="sm">Sign up</button>
      </div>
    </nav>
  </header>
</div>

## Mobile toggle

On small screens, navigation links can collapse into a menu.

Add a toggle button with `data-nav-toggle`. Sprout’s script will toggle `data-nav-open` on the `<nav>` and close the menu when clicking outside.

```html
<header>
  <nav>
    <a class="brand" href="/">MyApp</a>
    <button
      type="button"
      class="icon ghost"
      data-nav-toggle
      aria-expanded="false"
      aria-label="Toggle menu"
    >
      ☰
    </button>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </nav>
</header>
```

<div class="sp-demo">
  <header>
    <nav>
      <a class="brand" href="#">MyApp</a>
      <button
        type="button"
        class="icon ghost"
        data-nav-toggle
        aria-expanded="false"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Team</a></li>
      </ul>
    </nav>
  </header>
</div>

## Usage notes

* **Scope:** Only `header > nav` or `[role="banner"] > nav` receive navbar styles.
* Use `.brand` for the product name or logo.
* Apply `.active` to the current page link.
* Use a `<ul>` list for navigation links to keep the markup semantic.
* Combine with layout utilities like `.cluster` for action buttons.

If you need to constrain the navbar width, wrap the contents in a `.container`.

```html
<header>
  <nav>
    <div class="container wide">
      <!-- nav content -->
    </div>
  </nav>
</header>
```