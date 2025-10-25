#!/usr/bin/env node

/**
 * Nettoyage ULTRA-PRÉCIS - Supprime les dernières classes Tailwind
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

function ultraCleanup(content) {
  let cleaned = content;
  
  // Patterns spécifiques à nettoyer
  const replacements = [
    // Variables CSS inline
    { from: /text-\[var\(--brand\)\]/g, to: 'text-brand' },
    { from: /bg-\[var\(--brand\)\]\/15/g, to: 'bg-brand-muted' },
    { from: /hover:text-\[var\(--brand\)\]/g, to: 'hover:text-brand' },
    { from: /group-hover:text-\[var\(--brand\)\]/g, to: 'group-hover:text-brand' },
    
    // Classes composées mal formées
    { from: /bg-surface-white\/10-lg/g, to: 'bg-surface border border-muted rounded-lg' },
    { from: /mb-4-b-white\/10/g, to: 'mb-4 border-b border-muted' },
    { from: /mt-8 pt-6-t-white\/10/g, to: 'mt-8 pt-6 border-t border-muted' },
    { from: /-start/g, to: ' flex-start' },
    { from: /-sm hover/g, to: '-sm hover' },
    { from: /p-2-sm/g, to: 'p-2 rounded-sm' },
    { from: /mt-0\.5-shrink-0/g, to: 'mt-0.5 flex-shrink-0' },
    { from: /icon text-\[var\(--brand\)\]/g, to: 'icon text-brand' },
    
    // Nettoyer les classes redondantes
    { from: /\s+group(?!\-)/g, to: '' },
    { from: /className="relative"/g, to: '' },
    { from: /className="flex-1"/g, to: '' },
    { from: /className="flex-shrink-0"/g, to: '' },
    
    // Spacing mal formé
    { from: /px-1\.5 py-0\.5/g, to: 'px-2 py-1' },
    { from: /line-clamp-2/g, to: '' },
  ];
  
  for (const { from, to } of replacements) {
    cleaned = cleaned.replace(from, to);
  }
  
  // Nettoyer les doubles espaces et espaces en début/fin
  cleaned = cleaned.replace(/className="([^"]*)"/g, (match, classes) => {
    const cleaned = classes
      .split(/\s+/)
      .filter(Boolean)
      .filter(cls => cls.trim())
      .join(' ')
      .trim();
    return cleaned ? `className="${cleaned}"` : '';
  });
  
  // Supprimer les className vides
  cleaned = cleaned.replace(/\s*className=""\s*/g, ' ');
  cleaned = cleaned.replace(/\s+{\.\.\.props}/g, ' {...props}');
  
  return cleaned;
}

// Trouver tous les fichiers .tsx dans packages/ui
const componentsDir = path.join(process.cwd(), 'packages/ui/src/components');
const files = getAllTsxFiles(componentsDir);

console.log(`🧹 Nettoyage ultra-précis de ${files.length} composants\n`);

let modified = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const cleaned = ultraCleanup(content);
  
  if (cleaned !== content) {
    fs.writeFileSync(file, cleaned);
    console.log(`✅ ${path.basename(file)}`);
    modified++;
  }
}

console.log(`\n✨ ${modified} fichiers nettoyés!\n`);
