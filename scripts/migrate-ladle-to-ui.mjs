#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const ladleComponentsDir = path.join(repoRoot, 'apps', 'ladle', 'src', 'components');
const uiComponentsDir = path.join(repoRoot, 'packages', 'ui', 'src', 'components');
const uiIndexFile = path.join(repoRoot, 'packages', 'ui', 'src', 'index.ts');

/** Recursively walk a directory and return file paths */
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }

function shouldCopy(file) {
  const rel = file.replace(ladleComponentsDir + path.sep, '');
  if (/\.stories\.|preview\//.test(rel)) return false;
  if (!/\.(tsx|ts|jsx|js)$/.test(file)) return false;
  return true;
}

function rewriteImports(code) {
  // Replace Ladle aliases to relative or package imports
  return code
    // remove CSS imports local to ladle
    .replace(/^import\s+['\"][^'\"]+\.css['\"];?\s*$/gm, '')
    // map @/ or @ladle/ to relative (ui won't have these aliases)
    .replace(/from\s+['\"]@ladle\/[^'\"]+['\"]/g, (m) => m.replace('@ladle/', './'))
    .replace(/from\s+['\"]@\/[^"]+['\"]/g, (m) => m.replace('@/', './'))
    // prefer tokens package if we see themes or preset
    .replace(/@avnir\/tokens\/dist\//g, '@avnir/tokens/');
}

function pascalCase(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

function addExportToIndex(componentName) {
  let content = fs.readFileSync(uiIndexFile, 'utf8');
  const exportLine = `export * from './components/${componentName}';`;
  if (!content.includes(exportLine)) {
    content = content.replace('// PLOP_EXPORT_ANCHOR', `${exportLine}\n// PLOP_EXPORT_ANCHOR`);
    fs.writeFileSync(uiIndexFile, content, 'utf8');
  }
}

function main() {
  ensureDir(uiComponentsDir);
  const files = walk(ladleComponentsDir).filter(shouldCopy);
  const report = [];
  for (const src of files) {
    const rel = src.replace(ladleComponentsDir + path.sep, '');
    const dst = path.join(uiComponentsDir, rel);
    ensureDir(path.dirname(dst));
    let code = fs.readFileSync(src, 'utf8');
    code = rewriteImports(code);
    fs.writeFileSync(dst, code, 'utf8');
    // attempt to infer component name for export from filename
    const base = path.basename(rel).replace(/\.(tsx|ts|jsx|js)$/,'');
    const compName = pascalCase(base);
    addExportToIndex(compName);
    report.push({ src: path.relative(repoRoot, src), dst: path.relative(repoRoot, dst) });
  }
  const out = path.join(repoRoot, 'migration-report-ui.json');
  fs.writeFileSync(out, JSON.stringify({ moved: report }, null, 2));
  console.log(`Migrated ${report.length} files. Report: ${path.relative(repoRoot, out)}`);
}

main();
