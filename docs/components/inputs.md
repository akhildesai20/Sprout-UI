# Inputs & Fields

Sprout styles semantic form elements directly. Use the `.field` class to group a label, control, and optional hint text.

## Text input and textarea

```html
<div class="field">
  <label for="name">Name</label>
  <input id="name" type="text" placeholder="Your name">
</div>

<div class="field">
  <label for="bio">Bio</label>
  <textarea id="bio" placeholder="A short bio..."></textarea>
  <small>Optional hint text.</small>
</div>
````

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label for="demo-name">Name</label>
      <input id="demo-name" type="text" placeholder="Your name">
    </div>
    <div class="field">
      <label for="demo-bio">Bio</label>
      <textarea id="demo-bio" placeholder="A short bio..."></textarea>
      <small>Optional hint text.</small>
    </div>
  </div>
</div>

## Select

```html
<div class="field">
  <label for="country">Country</label>
  <select id="country">
    <option>Select...</option>
    <option>United States</option>
    <option>Canada</option>
    <option>UK</option>
  </select>
</div>
```

<div class="sp-demo">
  <div class="field">
    <label for="demo-country">Country</label>
    <select id="demo-country">
      <option>Select...</option>
      <option>United States</option>
      <option>Canada</option>
      <option>UK</option>
    </select>
  </div>
</div>

## Valid and invalid states

Add `.valid` or `.invalid` to the control for feedback styling.

```html
<div class="field">
  <label for="email-ok">Email (valid)</label>
  <input id="email-ok" type="email" class="valid" value="user@example.com">
</div>

<div class="field">
  <label for="email-bad">Email (invalid)</label>
  <input id="email-bad" type="email" class="invalid" placeholder="Invalid">
</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label for="demo-email-ok">Email (valid)</label>
      <input id="demo-email-ok" type="email" class="valid" value="user@example.com">
    </div>
    <div class="field">
      <label for="demo-email-bad">Email (invalid)</label>
      <input id="demo-email-bad" type="email" class="invalid" placeholder="Invalid">
    </div>
  </div>
</div>

## Disabled and readonly

Use the native `disabled` and `readonly` attributes.

```html
<div class="field">
  <label for="disabled">Disabled</label>
  <input id="disabled" type="text" value="Can't edit" disabled>
</div>

<div class="field">
  <label for="readonly">Read-only</label>
  <input id="readonly" type="text" value="Display only" readonly>
</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label for="demo-disabled">Disabled</label>
      <input id="demo-disabled" type="text" value="Can't edit" disabled>
    </div>
    <div class="field">
      <label for="demo-readonly">Read-only</label>
      <input id="demo-readonly" type="text" value="Display only" readonly>
    </div>
  </div>
</div>

## Dropdown state

Use the `.dropdown` class on a text input to show it opens a list (e.g. combobox, autocomplete). Adds a chevron and right padding.

```html
<div class="field">
  <label for="city">City</label>
  <input id="city" type="text" class="dropdown" placeholder="Select or type..." autocomplete="off">
</div>
```

<div class="sp-demo">
  <div class="field">
    <label for="demo-dropdown">City</label>
    <input id="demo-dropdown" type="text" class="dropdown" placeholder="Select or type..." autocomplete="off">
  </div>
</div>

## Icon state

Use `.icon-start` or `.icon-end` to reserve space for an icon (e.g. location, search). Put the icon in a wrapper next to the input or use a background image.

```html
<div class="field">
  <label for="location">Location</label>
  <input id="location" type="text" class="icon-start" placeholder="Address or place">
</div>
```

<div class="sp-demo">
  <div class="field">
    <label for="demo-location">Location</label>
    <input id="demo-location" type="text" class="icon-start" placeholder="Address or place">
  </div>
</div>

## Calendar (date and time)

Use native `type="date"`, `type="time"`, `type="datetime-local"`, `type="month"`, or `type="week"` for calendar-style inputs. Sprout styles them with consistent padding and height.

```html
<div class="field">
  <label for="dob">Date of birth</label>
  <input id="dob" type="date">
</div>
<div class="field">
  <label for="appt">Appointment time</label>
  <input id="appt" type="time">
</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label for="demo-date">Date of birth</label>
      <input id="demo-date" type="date">
    </div>
    <div class="field">
      <label for="demo-time">Appointment time</label>
      <input id="demo-time" type="time">
    </div>
  </div>
</div>

## Checkbox and radio

```html
<div class="field">
  <label><input type="checkbox" checked> I agree</label>
</div>

<div class="field">
  <fieldset>
    <legend>Choose one</legend>
    <label><input type="radio" name="opt" value="a" checked> Option A</label>
    <label><input type="radio" name="opt" value="b"> Option B</label>
  </fieldset>
</div>
```

<div class="sp-demo">
  <div class="stack gap-4">
    <div class="field">
      <label><input type="checkbox" checked> I agree</label>
    </div>
    <div class="field">
      <fieldset>
        <legend>Choose one</legend>
        <label><input type="radio" name="demo-opt" value="a" checked> Option A</label>
        <label><input type="radio" name="demo-opt" value="b"> Option B</label>
      </fieldset>
    </div>
  </div>
</div>

## Fieldset

Group related controls with `<fieldset>` and `<legend>`.

```html
<fieldset>
  <legend>Shipping address</legend>

  <div class="field">
    <label for="street">Street</label>
    <input id="street" type="text">
  </div>

  <div class="field">
    <label for="city">City</label>
    <input id="city" type="text">
  </div>
</fieldset>
```

<div class="sp-demo">
  <fieldset>
    <legend>Shipping address</legend>
    <div class="stack gap-3">
      <div class="field">
        <label for="demo-street">Street</label>
        <input id="demo-street" type="text">
      </div>
      <div class="field">
        <label for="demo-city">City</label>
        <input id="demo-city" type="text">
      </div>
    </div>
  </fieldset>
</div>

## See also

* [Toggle & Range](/components/toggle) — switch and range slider components.
* [Accessibility](/reference/accessibility) — labels, focus, and form structure.

## Usage notes

* Use `.field` to group a label, control, and optional hint text with consistent spacing.
* Add `.valid` or `.invalid` to controls for success or error feedback after validation.
* Use `.dropdown` on text inputs that open a list; `.icon-start` or `.icon-end` when the input has an icon (e.g. location, search).
* Date and time inputs use native `type="date"`, `type="time"`, etc.; Sprout gives them consistent styling.
* Prefer semantic `<label>`, `<fieldset>`, and `<legend>` for accessible form structure.