#!/usr/bin/env node

/**
 * Script de conversion automatique Tailwind → CSS Design System
 * 
 * Usage: node scripts/auto-convert-tailwind.js <fichier.tsx>
 * Exemple: node scripts/auto-convert-tailwind.js packages/ui/src/components/saas/MegaMenu.tsx
 */

const fs = require('fs');
const path = require('path');

// Mapping des classes Tailwind vers classes CSS design system
const TAILWIND_TO_CSS = {
  // Layout & Flexbox
  'flex items-center justify-between': 'flex-between',
  'flex items-center justify-center': 'flex-center',
  'flex items-center gap-2': 'flex-row gap-2',
  'flex items-center gap-3': 'flex-row gap-3',
  'flex items-center gap-4': 'flex-row gap-4',
  'flex items-center': 'flex-center',
  'flex items-start': 'flex-start',
  'flex justify-between': 'flex-between',
  'flex gap-2': 'flex-row gap-2',
  'flex gap-3': 'flex-row gap-3',
  'flex-1': 'flex-1',
  'flex-wrap': 'flex-wrap',
  
  // Grid
  'grid grid-cols-1': 'grid-1',
  'grid grid-cols-2': 'grid-2',
  'grid grid-cols-3': 'grid-3',
  
  // Spacing
  'space-y-2': 'stack-2',
  'space-y-3': 'stack-3',
  'space-y-4': 'stack-4',
  'space-y-6': 'stack-6',
  'space-y-8': 'stack-8',
  'gap-1': 'gap-1',
  'gap-2': 'gap-2',
  'gap-3': 'gap-3',
  'gap-4': 'gap-4',
  'gap-6': 'gap-6',
  'gap-8': 'gap-8',
  
  // Typography
  'text-sm font-medium text-white': 'text-sm font-medium text-foreground',
  'text-sm font-semibold text-white': 'text-sm font-semibold text-foreground',
  'text-lg font-semibold text-white': 'text-lg font-semibold text-foreground',
  'text-sm text-white': 'text-sm text-foreground',
  'text-xs text-white': 'text-xs text-foreground',
  'text-white': 'text-foreground',
  'font-medium': 'font-medium',
  'font-semibold': 'font-semibold',
  'font-bold': 'font-bold',
  'truncate': 'truncate',
  
  // Colors
  'text-red-400': 'text-destructive',
  'text-red-300': 'text-destructive-hover',
  'text-green-400': 'text-success',
  'hover:text-red-400': 'hover:text-destructive',
  'hover:text-red-300': 'hover:text-destructive',
  
  // Sizing
  'w-full': 'w-full',
  'w-4 h-4': 'icon-sm',
  'w-5 h-5': 'icon',
  'w-6 h-6': 'icon',
  'w-12 h-12': 'icon-lg',
  'w-16 h-16': 'icon-xl',
  'min-w-0': 'min-w-0',
  
  // Borders & Radius
  'rounded': 'rounded',
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-lg': 'rounded-lg',
  'border': 'border',
};

// Patterns de remplacement avec regex
const REGEX_REPLACEMENTS = [
  // Variables CSS inline
  {
    pattern: /text-\[var\(--text-muted\)\]/g,
    replacement: 'text-muted'
  },
  {
    pattern: /bg-\[var\(--surface\)\]/g,
    replacement: 'bg-surface'
  },
  {
    pattern: /bg-\[var\(--bg\)\]/g,
    replacement: 'bg-muted'
  },
  {
    pattern: /rounded-\[var\(--radius-sm\)\]/g,
    replacement: 'rounded-sm'
  },
  {
    pattern: /rounded-\[var\(--radius-md\)\]/g,
    replacement: 'rounded-md'
  },
  {
    pattern: /rounded-\[var\(--radius-lg\)\]/g,
    replacement: 'rounded-lg'
  },
  // Padding/Margin avec chiffres
  {
    pattern: /\bp-(\d+)\b/g,
    replacement: 'p-$1'
  },
  {
    pattern: /\bm-(\d+)\b/g,
    replacement: 'm-$1'
  },
  {
    pattern: /\bmb-(\d+)\b/g,
    replacement: 'mb-$1'
  },
  {
    pattern: /\bmt-(\d+)\b/g,
    replacement: 'mt-$1'
  },
];

function convertTailwindToCSS(content) {
  let converted = content;
  let changes = [];
  
  // 1. Remplacements exacts (ordre important: du plus long au plus court)
  const sortedMappings = Object.entries(TAILWIND_TO_CSS)
    .sort((a, b) => b[0].length - a[0].length);
  
  for (const [tailwind, css] of sortedMappings) {
    const regex = new RegExp(`className="([^"]*\\b)${escapeRegex(tailwind)}(\\b[^"]*)"`, 'g');
    const matches = content.match(regex);
    
    if (matches) {
      converted = converted.replace(regex, (match, before, after) => {
        changes.push({ from: tailwind, to: css });
        return `className="${before}${css}${after}"`;
      });
    }
  }
  
  // 2. Remplacements regex
  for (const { pattern, replacement } of REGEX_REPLACEMENTS) {
    const matches = converted.match(pattern);
    if (matches) {
      changes.push({ from: pattern.source, to: replacement, count: matches.length });
      converted = converted.replace(pattern, replacement);
    }
  }
  
  return { converted, changes };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const tailwindClasses = new Set();
  
  // Extraire toutes les classes dans className
  const classNameRegex = /className="([^"]+)"/g;
  let match;
  
  while ((match = classNameRegex.exec(content)) !== null) {
    const classes = match[1].split(/\s+/);
    classes.forEach(cls => {
      // Détecter les classes Tailwind
      if (
        /^(flex|grid|p-|m-|text-|bg-|border-|rounded-|shadow-|space-|gap-|w-|h-)/.test(cls) ||
        cls.includes('[var(--')
      ) {
        tailwindClasses.add(cls);
      }
    });
  }
  
  return Array.from(tailwindClasses);
}

function convertFile(filePath, dryRun = false) {
  console.log(`\n🔍 Analyse: ${filePath}\n`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Fichier introuvable: ${filePath}`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const tailwindClasses = analyzeFile(filePath);
  
  if (tailwindClasses.length === 0) {
    console.log('✅ Aucune classe Tailwind détectée - Fichier déjà conforme!');
    return;
  }
  
  console.log(`📊 Classes Tailwind détectées: ${tailwindClasses.length}\n`);
  tailwindClasses.slice(0, 10).forEach(cls => console.log(`  - ${cls}`));
  if (tailwindClasses.length > 10) {
    console.log(`  ... et ${tailwindClasses.length - 10} autres`);
  }
  
  console.log(`\n🔄 Conversion en cours...\n`);
  
  const { converted, changes } = convertTailwindToCSS(content);
  
  if (changes.length === 0) {
    console.log('⚠️  Aucune conversion automatique possible');
    console.log('💡 Classes nécessitant une conversion manuelle:');
    tailwindClasses.forEach(cls => console.log(`  - ${cls}`));
    return;
  }
  
  console.log(`✅ ${changes.length} conversions effectuées:\n`);
  
  // Grouper les changements identiques
  const grouped = changes.reduce((acc, change) => {
    const key = `${change.from} → ${change.to}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  
  Object.entries(grouped).forEach(([change, count]) => {
    console.log(`  ${count}x: ${change}`);
  });
  
  if (dryRun) {
    console.log('\n🔍 Mode DRY-RUN - Aucun fichier modifié');
    console.log('\n📝 Aperçu des changements:');
    
    // Montrer quelques lignes modifiées
    const originalLines = content.split('\n');
    const convertedLines = converted.split('\n');
    let shown = 0;
    
    for (let i = 0; i < originalLines.length && shown < 5; i++) {
      if (originalLines[i] !== convertedLines[i]) {
        console.log(`\nLigne ${i + 1}:`);
        console.log(`  - ${originalLines[i].trim()}`);
        console.log(`  + ${convertedLines[i].trim()}`);
        shown++;
      }
    }
    
    return;
  }
  
  // Backup du fichier original
  const backupPath = filePath + '.backup';
  fs.writeFileSync(backupPath, content);
  console.log(`\n💾 Backup créé: ${backupPath}`);
  
  // Écrire le fichier converti
  fs.writeFileSync(filePath, converted);
  console.log(`✅ Fichier converti: ${filePath}`);
  
  // Analyser le résultat
  const remainingTailwind = analyzeFile(filePath);
  
  if (remainingTailwind.length > 0) {
    console.log(`\n⚠️  ${remainingTailwind.length} classes Tailwind restantes (conversion manuelle requise):`);
    remainingTailwind.forEach(cls => console.log(`  - ${cls}`));
  } else {
    console.log('\n🎉 Conversion complète - Aucune classe Tailwind restante!');
  }
  
  console.log('\n📋 Prochaines étapes:');
  console.log('  1. Vérifier visuellement les changements');
  console.log('  2. Tester le composant');
  console.log('  3. Supprimer le backup si OK: rm ' + backupPath);
}

// CLI
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
📘 Usage: node scripts/auto-convert-tailwind.js [options] <fichier.tsx>

Options:
  --dry-run    Afficher les changements sans modifier le fichier
  --help       Afficher cette aide

Exemples:
  node scripts/auto-convert-tailwind.js packages/ui/src/components/saas/MegaMenu.tsx
  node scripts/auto-convert-tailwind.js --dry-run packages/ui/src/components/saas/PlanPicker.tsx
  `);
  process.exit(0);
}

const dryRun = args.includes('--dry-run');
const filePath = args.find(arg => !arg.startsWith('--'));

if (!filePath) {
  console.error('❌ Aucun fichier spécifié');
  process.exit(1);
}

const absolutePath = path.isAbsolute(filePath) 
  ? filePath 
  : path.join(process.cwd(), filePath);

convertFile(absolutePath, dryRun);
