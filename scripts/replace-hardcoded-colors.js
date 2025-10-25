#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mapping des couleurs hardcodées vers les tokens
const COLOR_MAPPINGS = {
  // Background & surfaces
  '#0b0b0d': 'var(--bg)',
  '#141317': 'var(--surface)',
  
  // Text colors
  '#ffffff': 'var(--titles)',
  '#c5ccd6': 'var(--text)',
  '#9ca3af': 'var(--muted)',
  
  // Primary
  '#ededed': 'var(--primary)',
  
  // Status colors
  '#10b981': 'var(--success)',
  '#4ade80': 'var(--success)',
  '#f59e0b': 'var(--warning)',
  '#fbbf24': 'var(--warning)',
  '#ef4444': 'var(--destructive)',
  '#f87171': 'var(--destructive)',
  '#3b82f6': 'var(--info)',
  '#60a5fa': 'var(--info)',
  
  // Border
  '#1f1f23': 'var(--border)',
  '#e5e7eb': 'var(--border)',
  
  // Accent
  '#06e7c7': 'var(--accent)',
};

const componentsDir = path.join(__dirname, '../packages/design/src/components');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const [hex, token] of Object.entries(COLOR_MAPPINGS)) {
    // Case insensitive replacement
    const regex = new RegExp(hex, 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, token);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.basename(filePath)}`);
    return 1;
  }
  
  return 0;
}

function processDirectory(dir) {
  let count = 0;
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      count += processDirectory(fullPath);
    } else if (file.name.endsWith('.css')) {
      count += replaceInFile(fullPath);
    }
  }
  
  return count;
}

console.log('🔍 Recherche des couleurs hardcodées dans les composants CSS...\n');

const modifiedCount = processDirectory(componentsDir);

console.log(`\n✨ ${modifiedCount} fichiers modifiés`);
console.log('\n🎯 Prochaine étape : pnpm build --filter=@avnir/design');
