# Releasing Sprout UI

Short checklist for publishing to npm. Do not run `npm publish` until you intend to release.

## Pre-publish

1. **Logged in:** `npm whoami` — must show your npm user.
2. **Scoped package:** Name is `@akhildesai20/sprout-ui`. Check with `npm view @akhildesai20/sprout-ui` (404 before first publish).
3. **Fresh build:** `npm run build` — ensures dist is up to date.
4. **Pack check:** `npm pack` — creates `akhildesai20-sprout-ui-<version>.tgz`. Should contain only `dist/`, README.md, LICENSE, CHANGELOG.md, package.json.
5. **Optional smoke test:** From repo root, `cd sprout-smoke-test`, `npm install ../akhildesai20-sprout-ui-<version>.tgz`, `npm start` — open plain.html and esm.html and verify components work.

## Publish

```bash
npm publish --access public
```

(Use `--access public` if publishing an unscoped package for the first time.)

## Post-publish

1. **npm package page:** Open https://www.npmjs.com/package/@akhildesai20/sprout-ui — confirm version and readme render correctly.
2. **CDN:** After a short delay, verify the published version is available:
   - https://cdn.jsdelivr.net/npm/@akhildesai20/sprout-ui@VERSION/dist/sprout.min.css (replace VERSION, e.g. 0.1.1)
   - https://cdn.jsdelivr.net/npm/@akhildesai20/sprout-ui@VERSION/dist/sprout.bundle.js
   - https://unpkg.com/@akhildesai20/sprout-ui@VERSION/dist/sprout.min.css
   - https://unpkg.com/@akhildesai20/sprout-ui@VERSION/dist/sprout.bundle.js
3. **README:** Ensure README on the npm page and in the repo reflects that the package is published (no “after publish” placeholders).
4. **Git tag:** `git tag vVERSION && git push origin vVERSION` — optional but recommended for release tracking.
5. **2FA:** If your npm account uses 2FA, use `npm publish --access public --otp=CODE` with the one-time password from your authenticator.

## Post-publish verification checklist

Run once after publishing to confirm install and usage:

- **npm install:** In a new folder, run `npm install @akhildesai20/sprout-ui`. Confirm `node_modules/@akhildesai20/sprout-ui/dist/` contains `sprout.min.css`, `sprout.min.js`, `sprout.bundle.js`.
- **Plain HTML:** Serve a page that links the CSS and loads the bundle from `node_modules/@akhildesai20/sprout-ui/dist/`. Check that styles apply and `window.Sprout` works (e.g. toast, dropdown, tabs).
- **ESM:** Serve a page with `import Sprout from "@akhildesai20/sprout-ui"` (or from the dist path) and `Sprout.init()`. Check that components work.
- **CDN:** Load the jsDelivr or unpkg URLs for the published version in a test page; confirm assets load and the bundle runs.
- **npm page:** Open the package page and confirm README, version, and “Install” instructions look correct.

## Verify in a clean project

To confirm install and usage after publish:

```bash
mkdir verify-sprout && cd verify-sprout
npm init -y
npm install @akhildesai20/sprout-ui
```

- **Plain HTML:** Create a page that links `node_modules/@akhildesai20/sprout-ui/dist/sprout.min.css` and loads `node_modules/@akhildesai20/sprout-ui/dist/sprout.bundle.js`. Serve with a static server; check that styles apply and `window.Sprout` exists (e.g. toast, dropdown, tabs work).
- **ESM:** Create a page with `import Sprout from "./node_modules/@akhildesai20/sprout-ui/dist/sprout.min.js"` and `Sprout.init()`. Serve over HTTP; check that components work.
- **CDN:** Create a page that loads the jsDelivr or unpkg URLs for the version you published; confirm assets load and the bundle runs.
