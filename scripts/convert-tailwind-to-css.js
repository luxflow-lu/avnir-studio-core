#!/usr/bin/env node

/**
 * Script d'automatisation de conversion Tailwind → Design System CSS
 * 
 * Ce script aide à identifier et remplacer les classes Tailwind courantes
 * par leurs équivalents du design system.
 */

const fs = require('fs');
const path = require('path');

// Mapping des classes Tailwind vers classes CSS design system
const TAILWIND_TO_CSS_MAP = {
  // Layout & Flexbox
  'flex': 'flex-row',
  'flex items-center': 'flex-center',
  'flex items-center justify-between': 'flex-between',
  'flex items-center justify-center': 'flex-center',
  'flex items-center gap-2': 'flex-row gap-2',
  'flex items-center gap-3': 'flex-row gap-3',
  'flex items-center gap-4': 'flex-row gap-4',
  'flex-1': 'flex-1',
  'flex-wrap': 'flex-wrap',
  
  // Spacing
  'space-y-2': 'stack-2',
  'space-y-3': 'stack-3',
  'space-y-4': 'stack-4',
  'space-y-6': 'stack-6',
  'gap-1': 'gap-1',
  'gap-2': 'gap-2',
  'gap-3': 'gap-3',
  'gap-4': 'gap-4',
  
  // Typography
  'text-sm': 'text-sm',
  'text-xs': 'text-xs',
  'text-lg': 'text-lg',
  'font-medium': 'font-medium',
  'font-semibold': 'font-semibold',
  'font-bold': 'font-bold',
  'truncate': 'truncate',
  
  // Colors (à remplacer par variables)
  'text-white': 'text-foreground',
  'text-red-400': 'text-destructive',
  'text-red-300': 'text-destructive-hover',
  
  // Borders & Radius
  'border': 'border',
  'rounded': 'rounded',
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-lg': 'rounded-lg',
  
  // Sizing
  'w-full': 'w-full',
  'min-w-0': 'min-w-0',
  
  // Icons
  'w-4 h-4': 'icon-sm',
  'w-5 h-5': 'icon',
  'w-6 h-6': 'icon',
  'w-12 h-12': 'icon-lg',
  'w-16 h-16': 'icon-xl',
};

// Patterns à détecter et remplacer
const PATTERNS_TO_REPLACE = [
  {
    pattern: /className="([^"]*text-\[var\(--text-muted\)\][^"]*)"/g,
    replacement: (match, classes) => {
      return `className="${classes.replace('text-[var(--text-muted)]', 'text-muted')}"`;
    }
  },
  {
    pattern: /className="([^"]*bg-\[var\(--surface\)\][^"]*)"/g,
    replacement: (match, classes) => {
      return `className="${classes.replace('bg-[var(--surface)]', 'bg-surface')}"`;
    }
  },
  {
    pattern: /className="([^"]*rounded-\[var\(--radius-\w+\)\][^"]*)"/g,
    replacement: (match, classes) => {
      return classes.replace(/rounded-\[var\(--radius-(\w+)\)\]/g, 'rounded-$1');
    }
  },
];

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const tailwindClasses = new Set();
  
  // Extraire toutes les classes dans className
  const classNameRegex = /className="([^"]+)"/g;
  let match;
  
  while ((match = classNameRegex.exec(content)) !== null) {
    const classes = match[1].split(/\s+/);
    classes.forEach(cls => {
      // Détecter les classes Tailwind courantes
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

function generateReport(uiPath) {
  const componentsPath = path.join(uiPath, 'src/components');
  const report = {
    totalFiles: 0,
    filesWithTailwind: 0,
    tailwindOccurrences: {},
    suggestions: []
  };
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.name.endsWith('.tsx')) {
        report.totalFiles++;
        const tailwindClasses = analyzeFile(fullPath);
        
        if (tailwindClasses.length > 0) {
          report.filesWithTailwind++;
          const relativePath = path.relative(uiPath, fullPath);
          report.tailwindOccurrences[relativePath] = tailwindClasses;
          
          // Générer des suggestions
          tailwindClasses.forEach(cls => {
            if (TAILWIND_TO_CSS_MAP[cls]) {
              report.suggestions.push({
                file: relativePath,
                from: cls,
                to: TAILWIND_TO_CSS_MAP[cls]
              });
            }
          });
        }
      }
    }
  }
  
  scanDirectory(componentsPath);
  return report;
}

function printReport(report) {
  console.log('\n📊 RAPPORT DE CONVERSION TAILWIND → CSS\n');
  console.log(`Total fichiers scannés: ${report.totalFiles}`);
  console.log(`Fichiers avec Tailwind: ${report.filesWithTailwind}`);
  console.log(`Taux de conformité: ${((1 - report.filesWithTailwind / report.totalFiles) * 100).toFixed(1)}%\n`);
  
  if (report.filesWithTailwind > 0) {
    console.log('📝 FICHIERS À CONVERTIR:\n');
    Object.entries(report.tailwindOccurrences)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 20)
      .forEach(([file, classes]) => {
        console.log(`  ${file} (${classes.length} classes)`);
      });
  }
  
  if (report.suggestions.length > 0) {
    console.log('\n💡 SUGGESTIONS DE REMPLACEMENT:\n');
    const uniqueSuggestions = Array.from(
      new Map(report.suggestions.map(s => [`${s.from}→${s.to}`, s])).values()
    );
    
    uniqueSuggestions.slice(0, 15).forEach(({ from, to }) => {
      console.log(`  "${from}" → "${to}"`);
    });
  }
  
  console.log('\n✅ Scan terminé!\n');
}

// Exécution
const uiPath = path.join(__dirname, '../packages/ui');
const report = generateReport(uiPath);
printReport(report);

// Sauvegarder le rapport détaillé
const reportPath = path.join(__dirname, '../TAILWIND_SCAN_DETAILED.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`📄 Rapport détaillé sauvegardé: ${reportPath}\n`);
