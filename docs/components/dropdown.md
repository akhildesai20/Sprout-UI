# Dropdown

Dropdowns are trigger-and-menu patterns built with the `<sp-dropdown>` Web Component.  
The trigger opens a menu of actions; selecting an item or clicking outside closes it.

## Basic usage

Use `<sp-dropdown>` with a trigger element placed in the `slot="trigger"` and an `<sp-menu>` containing `<sp-menu-item>` elements.

```html
<sp-dropdown>
  <button slot="trigger">Options ▾</button>

  <sp-menu>
    <sp-menu-item>Edit</sp-menu-item>
    <sp-menu-item>Duplicate</sp-menu-item>
    <sp-menu-item>Share</sp-menu-item>
    <sp-menu-item class="danger">Delete</sp-menu-item>
  </sp-menu>
</sp-dropdown>
````

<div class="sp-demo">
  <sp-dropdown>
    <button slot="trigger">Options ▾</button>
    <sp-menu>
      <sp-menu-item>Edit</sp-menu-item>
      <sp-menu-item>Duplicate</sp-menu-item>
      <sp-menu-item>Share</sp-menu-item>
      <sp-menu-item class="danger">Delete</sp-menu-item>
    </sp-menu>
  </sp-dropdown>
</div>

## Usage notes

* The trigger element **must include `slot="trigger"`**.
* The dropdown menu uses `<sp-menu>` with `<sp-menu-item>` elements.
* Clicking outside the dropdown closes it automatically.
* Keyboard support:

  * **Arrow keys** move between items
  * **Enter / Space** activates the focused item
  * **Escape** closes the menu
* Use the `.danger` class for destructive actions like **Delete**.
* The component requires Sprout’s JavaScript to be loaded so the custom element can be registered.