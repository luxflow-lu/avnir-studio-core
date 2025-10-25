#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing remaining ESLint issues...\n');

// 1. Remove unused imports automatically
console.log('1️⃣ Running ESLint auto-fix for unused imports...');
try {
  execSync('pnpm lint --fix', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
} catch (e) {
  // Expected to fail, continue
}

// 2. Fix specific known issues
const fixes = [
  {
    file: 'apps/ladle/.ladle/decorators.tsx',
    find: /import "\.\.\/main\.css"/g,
    replace: 'import "../src/main.css"',
    description: 'Fix relative import in Ladle decorators'
  }
];

let fixedCount = 0;

fixes.forEach(fix => {
  const fullPath = path.join(__dirname, '..', fix.file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${fix.file}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  content = content.replace(fix.find, fix.replace);
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ ${fix.description}`);
    fixedCount++;
  }
});

console.log(`\n✨ ${fixedCount} specific fixes applied`);
console.log('\n📊 Running final lint check...\n');

try {
  execSync('pnpm lint 2>&1 | tail -5', { 
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
} catch (e) {
  // Show results even if lint fails
}
