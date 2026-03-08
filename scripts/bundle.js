import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../dist');

// Read minified source files
const css = readFileSync(resolve(dist, 'sprout.min.css'), 'utf8');
let js = readFileSync(resolve(dist, 'sprout.min.js'), 'utf8');

// Strip export default (bundle runs as IIFE, not module)
js = js.replace(/\s*export\s+default\s+\w+\s*;?\s*$/, '');

// Escape CSS for safe embedding in a template literal
const escapedCss = css
  .replace(/\\/g, '\\\\')
  .replace(/`/g,  '\\`')
  .replace(/\$\{/g, '\\${');

// Build the bundle
const bundle = `(function(){
var d=document,s=d.createElement('style');
s.textContent=\`${escapedCss}\`;
(d.head||d.documentElement).appendChild(s);
${js}
})();`;

writeFileSync(resolve(dist, 'sprout.bundle.js'), bundle, 'utf8');

// Report gzipped sizes
const files = ['sprout.min.css', 'sprout.min.js', 'sprout.bundle.js'];
console.log('\nSprout UI — dist file sizes\n');
files.forEach(file => {
  const raw  = readFileSync(resolve(dist, file));
  const gz   = gzipSync(raw, { level: 9 });
  const kb   = (raw.length  / 1024).toFixed(2);
  const gzkb = (gz.length   / 1024).toFixed(2);
  console.log(`  ${file.padEnd(24)} ${kb.padStart(7)} KB raw   ${gzkb.padStart(6)} KB gzip`);
});
console.log('\nTarget: sprout.bundle.js < 13 KB gzip\n');
