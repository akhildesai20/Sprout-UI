# Table

Tables display structured data using semantic HTML. Sprout styles `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` directly.

Use optional classes like `.striped`, `.bordered`, or `.compact` to adjust appearance.

## Basic usage

````html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th>Role</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Alex</td>
      <td>Active</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>Sam</td>
      <td>Away</td>
      <td>Editor</td>
    </tr>
  </tbody>
</table>
`````

## Demo
<div class="sp-demo">
  <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Status</th>
        <th>Owner</th>
        <th>Updated</th>
      </tr>
    </thead>
<tbody>
  <tr>
    <td><strong>Sprout UI</strong></td>
    <td><span class="badge success">Active</span></td>
    <td>
      <div class="cluster gap-2">
        <span class="avatar sm">JD</span>
        <span>Jane Doe</span>
      </div>
    </td>
    <td>2 hours ago</td>
  </tr>

  <tr>
    <td><strong>Alpha Dashboard</strong></td>
    <td><span class="badge warning">Pending</span></td>
    <td>
      <div class="cluster gap-2">
        <span class="avatar sm">MK</span>
        <span>Mike K.</span>
      </div>
    </td>
    <td>Yesterday</td>
  </tr>

  <tr>
    <td><strong>Legacy API</strong></td>
    <td><span class="badge danger">Deprecated</span></td>
    <td>
      <div class="cluster gap-2">
        <span class="avatar sm">SR</span>
        <span>Sara R.</span>
      </div>
    </td>
    <td>3 weeks ago</td>
  </tr>
</tbody>
  </table>
</div>

## Variants

Add a class directly to the `<table>` element.

| Class       | Description                        |
| ----------- | ---------------------------------- |
| `.striped`  | Alternating row backgrounds        |
| `.bordered` | Borders around cells               |
| `.compact`  | Reduced padding for denser layouts |

```html
<table class="striped compact">
  <!-- ... -->
</table>
```

## Usage notes

* Use `<th>` for column headers and keep the table structure semantic.
* Tables work well for dashboards, admin panels, and structured lists.
* For wide tables on smaller screens, wrap the table in `.table-wrap` so it scrolls horizontally.
* You can combine variants when needed, for example: `class="striped compact"`.
* Tables can include other Sprout components like **badges**, **avatars**, or **buttons** inside cells.