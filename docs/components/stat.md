# Stat

Stats display small metrics such as revenue, users, or performance indicators.  
Use the `.stat` class as the wrapper and include `.stat-label`, `.stat-value`, and optionally `.stat-change`.

` .stat-change ` can use `.positive` or `.negative` to indicate the direction of change.

---

## Basic usage

````html
<div class="stat">
  <span class="stat-label">Revenue</span>
  <span class="stat-value">$12,345</span>
  <span class="stat-change positive">+12%</span>
</div>
`````

---

## Demo

<div class="sp-demo">
  <div class="grid cols-3" style="gap: var(--sp-4);">
    <div class="stat">
      <span class="stat-label">Revenue</span>
      <span class="stat-value">$12,345</span>
      <span class="stat-change positive">+12%</span>
    </div>
    <div class="stat">
      <span class="stat-label">Users</span>
      <span class="stat-value">1,234</span>
      <span class="stat-change negative">−2%</span>
    </div>
    <div class="stat">
      <span class="stat-label">Active</span>
      <span class="stat-value">98%</span>
    </div>
  </div>
</div>

---

## Usage notes

* Use `.stat` as the container.
* Add `.stat-label` for the metric name.
* Use `.stat-value` for the main number.
* Add `.stat-change` for deltas (optional).
* Apply `.positive` or `.negative` on `.stat-change` to indicate direction.
* Stats are commonly placed inside **cards**, **dashboards**, or **grid layouts**.

---

## Accessibility

* Ensure the label clearly describes the metric.
* Avoid relying only on color to communicate change; include `+` or `−` symbols.