#!/usr/bin/env node

/**
 * Correction des classes mal formées après nettoyage
 */

const fs = require('fs');
const path = require('path');

function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function fixMalformedClasses(content) {
  let fixed = content;
  
  // Corrections spécifiques
  const fixes = [
    // Classes composées mal formées
    { from: /icon-sm-2-\[var\(--brand\)\]-t-transparent-full/g, to: 'spinner' },
    { from: /text-foreground-full-center/g, to: 'text-foreground rounded-full flex-center' },
    { from: /bg-muted-center/g, to: 'bg-muted flex-center' },
    { from: /bg-black\/50/g, to: 'bg-overlay' },
    { from: /bg-black\/80/g, to: 'bg-overlay-dark' },
    { from: /w-10 h-10/g, to: 'icon-lg' },
    
    // Variables CSS restantes
    { from: /bg-\[var\(--brand\)\]/g, to: 'bg-brand' },
    { from: /text-\[var\(--brand\)\]/g, to: 'text-brand' },
    { from: /border-\[var\(--brand\)\]/g, to: 'border-brand' },
    
    // Classes redondantes
    { from: /\s+h-full/g, to: '' },
    { from: /\s+w-full(?!\s*\{)/g, to: '' }, // Garder w-full dans les objets
  ];
  
  for (const { from, to } of fixes) {
    fixed = fixed.replace(from, to);
  }
  
  // Nettoyer les espaces multiples
  fixed = fixed.replace(/className="([^"]*)"/g, (match, classes) => {
    const cleaned = classes
      .split(/\s+/)
      .filter(Boolean)
      .join(' ')
      .trim();
    return cleaned ? `className="${cleaned}"` : '';
  });
  
  // Supprimer className vides
  fixed = fixed.replace(/\s*className=""\s*/g, ' ');
  
  return fixed;
}

const componentsDir = path.join(process.cwd(), 'packages/ui/src/components');
const files = getAllTsxFiles(componentsDir);

console.log(`🔧 Correction des classes mal formées\n`);

let modified = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const fixed = fixMalformedClasses(content);
  
  if (fixed !== content) {
    fs.writeFileSync(file, fixed);
    console.log(`✅ ${path.basename(file)}`);
    modified++;
  }
}

console.log(`\n✨ ${modified} fichiers corrigés!\n`);
