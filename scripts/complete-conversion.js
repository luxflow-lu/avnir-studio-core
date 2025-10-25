#!/usr/bin/env node

/**
 * Script de conversion COMPLÈTE - Supprime 100% des classes Tailwind
 * Remplace par des classes CSS design system sémantiques
 */

const fs = require('fs');
const path = require('path');

// Mapping COMPLET Tailwind → CSS Design System
const COMPLETE_MAPPINGS = {
  // Suppression complète (gérées par le CSS du composant)
  'w-full': '',
  'h-full': '',
  'flex': '',
  'grid': '',
  'relative': '',
  'absolute': '',
  'transition-all': '',
  'cursor-pointer': '',
  
  // Layout
  'flex justify-center': 'flex-center',
  'flex items-center justify-between': 'flex-between',
  'flex items-center': 'flex-center',
  'flex items-start': 'flex-start',
  'flex-col': 'flex-col',
  'flex-1': 'flex-1',
  
  // Grid
  'grid-1': 'grid-1',
  'grid-2': 'grid-2',
  'grid-3': 'grid-3',
  'md:grid-2': 'md:grid-2',
  'md:grid-3': 'md:grid-3',
  
  // Spacing
  'gap-1': 'gap-1',
  'gap-2': 'gap-2',
  'gap-3': 'gap-3',
  'gap-4': 'gap-4',
  'gap-6': 'gap-6',
  'gap-8': 'gap-8',
  'mb-2': 'mb-2',
  'mb-3': 'mb-3',
  'mb-4': 'mb-4',
  'mb-6': 'mb-6',
  'mb-8': 'mb-8',
  'mt-2': 'mt-2',
  'mt-4': 'mt-4',
  'mt-8': 'mt-8',
  'p-1': 'p-1',
  'p-2': 'p-2',
  'p-4': 'p-4',
  'p-6': 'p-6',
  
  // Typography
  'text-lg': 'text-lg',
  'text-sm': 'text-sm',
  'text-xs': 'text-xs',
  'text-3xl': 'text-3xl',
  'font-medium': 'font-medium',
  'font-semibold': 'font-semibold',
  'font-bold': 'font-bold',
  'text-center': 'text-center',
  'text-left': 'text-left',
  
  // Colors
  'text-foreground': 'text-foreground',
  'text-muted': 'text-muted',
  'text-success': 'text-success',
  'text-destructive': 'text-destructive',
  'bg-surface': 'bg-surface',
  'bg-muted': 'bg-muted',
  
  // Borders & Radius
  'rounded-lg': 'rounded-lg',
  'rounded-md': 'rounded-md',
  'rounded-sm': 'rounded-sm',
  'rounded-full': 'rounded-full',
  'border': 'border',
  'border-b': 'border-b',
  'border-t': 'border-t',
  
  // Sizing
  'w-screen': 'w-screen',
  'w-1/3': 'w-1/3',
  'min-w-0': 'min-w-0',
  'flex-shrink-0': 'flex-shrink-0',
  
  // Shadows
  'shadow-sm': 'shadow-sm',
  'shadow-md': 'shadow-md',
  'shadow-lg': 'shadow-lg',
  
  // Overflow
  'overflow-visible': 'overflow-visible',
  'overflow-hidden': 'overflow-hidden',
};

// Patterns à supprimer complètement
const PATTERNS_TO_REMOVE = [
  /\s+w-full/g,
  /\s+h-full/g,
  /\s+flex(?!\-)/g, // flex mais pas flex-col, flex-1, etc.
  /\s+grid(?!\-)/g,
  /\s+relative/g,
  /\s+absolute/g,
  /\s+transition-all/g,
  /\s+transition-colors/g,
  /\s+cursor-pointer/g,
  /\s+border(?!\-)/g,
  /\s+rounded(?!\-)/g,
];

function completeConversion(content) {
  let converted = content;
  let changes = 0;
  
  // 1. Supprimer les patterns redondants
  for (const pattern of PATTERNS_TO_REMOVE) {
    const before = converted;
    converted = converted.replace(pattern, '');
    if (converted !== before) changes++;
  }
  
  // 2. Appliquer les mappings
  for (const [tailwind, css] of Object.entries(COMPLETE_MAPPINGS)) {
    if (css === '') continue; // Déjà géré par patterns
    
    const regex = new RegExp(`\\b${tailwind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
    const before = converted;
    converted = converted.replace(regex, css);
    if (converted !== before) changes++;
  }
  
  // 3. Nettoyer les doubles espaces
  converted = converted.replace(/className="([^"]*)"/g, (match, classes) => {
    const cleaned = classes
      .split(/\s+/)
      .filter(Boolean)
      .filter(cls => cls !== 'undefined' && cls !== 'null')
      .join(' ');
    return cleaned ? `className="${cleaned}"` : 'className=""';
  });
  
  // 4. Supprimer les className vides
  converted = converted.replace(/\s+className=""\s*/g, ' ');
  
  return { converted, changes };
}

// Liste des composants à convertir complètement
const COMPONENTS = [
  'packages/ui/src/components/ecommerce/MegaMenu.tsx',
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
  'packages/ui/src/components/navigation/Breadcrumbs.tsx',
];

console.log('🚀 Conversion COMPLÈTE vers CSS Design System\n');

let totalChanges = 0;
let filesModified = 0;

for (const file of COMPONENTS) {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Ignoré: ${file}`);
    continue;
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8');
  const { converted, changes } = completeConversion(content);
  
  if (changes > 0) {
    fs.writeFileSync(fullPath, converted);
    console.log(`✅ ${path.basename(file)} - ${changes} conversions`);
    totalChanges += changes;
    filesModified++;
  } else {
    console.log(`✓  ${path.basename(file)} - Déjà conforme`);
  }
}

console.log(`\n🎉 Conversion COMPLÈTE terminée!`);
console.log(`   Fichiers modifiés: ${filesModified}/${COMPONENTS.length}`);
console.log(`   Total conversions: ${totalChanges}\n`);
