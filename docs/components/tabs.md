# Tabs

Tabs switch between panels of related content.  
Sprout implements tabs using the `<sp-tabs>` Web Component.

- `<sp-tab-list>` contains the tab buttons.
- Each `<sp-tab>` references a panel using the `panel` attribute.
- `<sp-panel>` holds the content and must have a matching `id`.

## Basic usage

````html
<sp-tabs>
  <sp-tab-list>
    <sp-tab panel="overview">Overview</sp-tab>
    <sp-tab panel="settings">Settings</sp-tab>
    <sp-tab panel="logs">Logs</sp-tab>
  </sp-tab-list>

  <sp-panel id="overview">
    <p>Overview content here.</p>
  </sp-panel>

  <sp-panel id="settings">
    <p>Settings content here.</p>
  </sp-panel>

  <sp-panel id="logs">
    <p>Logs content here.</p>
  </sp-panel>
</sp-tabs>
`````

## Demo

<div class="sp-demo">
  <sp-tabs>
    <sp-tab-list>
      <sp-tab panel="tab-overview">Overview</sp-tab>
      <sp-tab panel="tab-settings">Settings</sp-tab>
      <sp-tab panel="tab-logs">Logs</sp-tab>
    </sp-tab-list>
<sp-panel id="tab-overview">
  <p>Overview content here.</p>
</sp-panel>

<sp-panel id="tab-settings">
  <p>Settings content here.</p>
</sp-panel>

<sp-panel id="tab-logs">
  <pre style="margin:0;">
[2025-01-15 10:23] INFO  Server started on :8080
[2025-01-15 10:24] DEBUG Request GET /api/users
[2025-01-15 10:24] INFO  Response 200 OK (12ms) </pre> </sp-panel> </sp-tabs>

</div>

## Usage notes

* **Structure:**
  `<sp-tabs>` must contain one `<sp-tab-list>` and one or more `<sp-panel>` elements.

* **Panel binding:**
  Each `<sp-tab>` uses `panel="id"` to connect to `<sp-panel id="id">`.

* **Keyboard navigation:**

  * ← / → : switch between tabs
  * Home : first tab
  * End : last tab

* **Accessibility:**
  The component automatically manages `aria-selected` and panel visibility.

* **Responsive behavior:**
  Tab lists can scroll horizontally on smaller screens.

* **Script requirement:**
  Tabs require Sprout’s JavaScript to register the custom elements.

## Tips

* Tabs work well for **settings panels, dashboards, logs, and data views**.
* Avoid placing heavy layouts inside tab buttons—keep them short labels.