#!/usr/bin/env node

/**
 * Script de nettoyage final - Supprime toutes les classes Tailwind restantes
 * et les remplace par des classes CSS design system ou les supprime si redondantes
 */

const fs = require('fs');
const path = require('path');

// Classes à supprimer complètement (redondantes avec le CSS)
const CLASSES_TO_REMOVE = [
  'flex', 'grid', 'border', 'rounded', 'shadow-lg', 'shadow-sm',
  'text-left', 'text-center', 'text-right',
  'w-full', 'h-full', 'min-w-0', 'flex-1', 'flex-shrink-0',
  'transition-colors', 'cursor-pointer',
];

// Remplacements complexes
const COMPLEX_REPLACEMENTS = {
  // Grid layouts
  'grid-cols-1': 'grid-1',
  'grid-cols-2': 'grid-2', 
  'grid-cols-3': 'grid-3',
  'md:grid-cols-2': 'md:grid-2',
  'md:grid-cols-3': 'md:grid-3',
  'lg:grid-cols-2': 'lg:grid-2',
  'lg:grid-cols-3': 'lg:grid-3',
  
  // Borders
  'border-b': 'border-b',
  'border-t': 'border-t',
  'border-white/10': 'border-muted',
  'border-white/20': 'border-muted',
  'border-white/5': 'border-muted',
  'border-border': 'border',
  
  // Backgrounds
  'bg-white/5': 'bg-muted',
  'bg-white/10': 'bg-muted',
  'bg-green-500/15': 'bg-success-muted',
  
  // Sizing
  'w-screen': 'w-screen',
  'w-1/3': 'w-1/3',
  'w-3': 'w-3',
  'h-3': 'h-3',
  
  // Flex
  'flex-col': 'flex-col',
  'flex-start': 'flex-start',
  'flex-between': 'flex-between',
  'flex-center': 'flex-center',
  
  // Text
  'text-[11px]': 'text-xs',
  'text-foreground/80': 'text-muted',
  'text-[var(--brand)]': 'text-brand',
  'text-[var(--brand-on)]': 'text-brand-on',
  'group-hover:text-[var(--brand)]': 'group-hover:text-brand',
  
  // Spacing
  'p-1': 'p-1',
  'p-2': 'p-2',
  'p-4': 'p-4',
  'p-6': 'p-6',
  'mb-2': 'mb-2',
  'mb-3': 'mb-3',
  'mb-4': 'mb-4',
  'mt-2': 'mt-2',
  'mt-4': 'mt-4',
  'mt-8': 'mt-8',
  
  // Radius
  'rounded-full': 'rounded-full',
  
  // Colors
  'bg-surface': 'bg-surface',
  'bg-muted': 'bg-muted',
  'text-foreground': 'text-foreground',
  'text-muted': 'text-muted',
  'text-success': 'text-success',
  'text-destructive': 'text-destructive',
};

function cleanupFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changes = 0;
  
  // Supprimer les classes redondantes
  for (const classToRemove of CLASSES_TO_REMOVE) {
    const regex = new RegExp(`\\s+${classToRemove}\\b`, 'g');
    const before = content;
    content = content.replace(regex, '');
    if (content !== before) changes++;
  }
  
  // Appliquer les remplacements complexes
  for (const [from, to] of Object.entries(COMPLEX_REPLACEMENTS)) {
    const regex = new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const before = content;
    content = content.replace(regex, to);
    if (content !== before) changes++;
  }
  
  // Nettoyer les doubles espaces dans className
  content = content.replace(/className="([^"]*)"/g, (match, classes) => {
    const cleaned = classes.split(/\s+/).filter(Boolean).join(' ');
    return `className="${cleaned}"`;
  });
  
  return { content, changes };
}

// Liste des fichiers à nettoyer
const FILES_TO_CLEANUP = [
  'packages/ui/src/components/ecommerce/MegaMenu.tsx',
  'packages/ui/src/components/saas/PlanPicker.tsx',
  'packages/ui/src/components/saas/RolesMatrix.tsx',
  'packages/ui/src/components/navigation/CommandK.tsx',
  'packages/ui/src/components/saas/DashboardKPI.tsx',
  'packages/ui/src/components/system/ServerError500.tsx',
  'packages/ui/src/components/data-display/Table.tsx',
  'packages/ui/src/components/system/ErrorBoundary.tsx',
  'packages/ui/src/components/ecommerce/MediaGallery.tsx',
  'packages/ui/src/components/ecommerce/VariantsSwatches.tsx',
  'packages/ui/src/components/form/Switch.tsx',
  'packages/ui/src/components/system/NotFound404.tsx',
  'packages/ui/src/components/layout/Sidebar.tsx',
  'packages/ui/src/components/overlay/Drawer.tsx',
  'packages/ui/src/components/saas/InviteMembers.tsx',
  'packages/ui/src/components/overlay/Toast.tsx',
  'packages/ui/src/components/data-display/Progress.tsx',
  'packages/ui/src/components/form/IconButton.tsx',
  'packages/ui/src/components/form/Field.tsx',
  'packages/ui/src/components/marketing/PricingStrip.tsx',
];

console.log('🧹 Nettoyage final des composants\n');

let totalChanges = 0;
let filesModified = 0;

for (const file of FILES_TO_CLEANUP) {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Ignoré: ${file} (introuvable)`);
    continue;
  }
  
  const { content, changes } = cleanupFile(fullPath);
  
  if (changes > 0) {
    fs.writeFileSync(fullPath, content);
    console.log(`✅ ${path.basename(file)} - ${changes} nettoyages`);
    totalChanges += changes;
    filesModified++;
  } else {
    console.log(`✓  ${path.basename(file)} - Déjà propre`);
  }
}

console.log(`\n🎉 Nettoyage terminé!`);
console.log(`   Fichiers modifiés: ${filesModified}`);
console.log(`   Total changements: ${totalChanges}\n`);
