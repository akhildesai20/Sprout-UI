import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = resolve(__dirname, '../src/sprout.css');
const outPath = resolve(__dirname, '../docs/.vitepress/theme/sprout-scoped.css');

const css = readFileSync(srcPath, 'utf8');

const marker = '/* ==========================================================================\n   7.1 Reset & Base';
const idx = css.indexOf(marker);
if (idx === -1) throw new Error('7.1 Reset marker not found');

const globalPart = css.slice(0, idx);
const scopedPart = css.slice(idx);

function findMatchingBrace(str, openAt) {
  let depth = 1;
  let i = openAt + 1;
  while (i < str.length && depth > 0) {
    const c = str[i];
    if (c === '{') depth++;
    else if (c === '}') depth--;
    i++;
  }
  return i - 1;
}

function splitSelectors(str) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '(' || c === '[') depth++;
    else if (c === ')' || c === ']') depth--;
    else if (c === ',' && depth === 0) {
      parts.push(str.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(str.slice(start).trim());
  return parts.filter(Boolean);
}

function prefixSelectorBlock(sel) {
  const leading = (sel.match(/^(\s*\/\*[\s\S]*?\*\/\s*)*/) || [''])[0];
  const selectorOnly = sel.slice(leading.length).replace(/\/\*[\s\S]*?\*\//g, '').trim();
  if (!selectorOnly) return sel;
  const prefixed = splitSelectors(selectorOnly)
    .map(s => '.sp-demo ' + s)
    .join(', ');
  return leading + prefixed;
}

function scopeRules(str) {
  let out = '';
  let i = 0;
  while (i < str.length) {
    const tail = str.slice(i);
    const ws = tail.match(/^\s*/)[0];
    i += ws.length;
    out += ws;
    if (i >= str.length) break;
    if (str[i] === '}') {
      out += '}';
      i++;
      continue;
    }
    if (str[i] === '@') {
      const afterAt = str.slice(i + 1);
      const atMatch = afterAt.match(/^([a-z-]+)/);
      const atName = (atMatch && atMatch[1]) ? atMatch[1].toLowerCase() : '';
      const open = str.indexOf('{', i);
      const close = findMatchingBrace(str, open);
      const passthroughAtRules = ['keyframes', 'font-face', 'counter-style'];
      if (passthroughAtRules.includes(atName)) {
        out += str.slice(i, close + 1);
        i = close + 1;
      } else {
        out += str.slice(i, open + 1);
        out += scopeRules(str.slice(open + 1, close));
        out += '}';
        i = close + 1;
      }
      continue;
    }
    const open = str.indexOf('{', i);
    if (open === -1) {
      out += str.slice(i);
      break;
    }
    const selector = str.slice(i, open).trim();
    const close = findMatchingBrace(str, open);
    const body = str.slice(open, close + 1);
    out += prefixSelectorBlock(selector) + ' ' + body;
    i = close + 1;
  }
  return out;
}

const scopedResult = scopeRules(scopedPart);
writeFileSync(outPath, globalPart + '\n' + scopedResult, 'utf8');
console.log('Wrote', outPath);
