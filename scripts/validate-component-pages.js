#!/usr/bin/env node

/**
 * Script de validation des pages de composants
 * Vérifie que toutes les pages suivent la structure standard de /components/primitives/page.tsx
 * 
 * Usage: node scripts/validate-component-pages.js
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../apps/muzisystem/app/components');
const REFERENCE_PAGE = path.join(COMPONENTS_DIR, 'primitives/page.tsx');

// Règles de validation
const VALIDATION_RULES = {
  // Structure obligatoire
  hasClientDirective: {
    pattern: /^["']use client["'];/m,
    message: 'Doit avoir "use client" en première ligne',
    required: true
  },
  
  // Imports obligatoires
  hasReactImport: {
    pattern: /import React from ["']react["'];/,
    message: 'Doit importer React',
    required: true
  },
  
  hasUIImports: {
    pattern: /import \{[^}]*\} from ["']@avnir\/ui["'];/,
    message: 'Doit importer depuis @avnir/ui',
    required: true
  },
  
  // Interface ComponentSection
  hasComponentSectionInterface: {
    pattern: /interface ComponentSectionProps \{[\s\S]*?name: string;[\s\S]*?category: string;[\s\S]*?description: string;[\s\S]*?variants\?: string\[\];[\s\S]*?preview: React\.ReactNode;[\s\S]*?\}/,
    message: 'Doit avoir interface ComponentSectionProps avec name, category, description, variants?, preview',
    required: true
  },
  
  // Fonction ComponentSection
  hasComponentSectionFunction: {
    pattern: /function ComponentSection\(\{ name, category, description, variants, preview \}: ComponentSectionProps\)/,
    message: 'Doit avoir fonction ComponentSection avec destructuring correct',
    required: true
  },
  
  // Structure de la section
  hasSectionStructure: {
    pattern: /<section className=["']section["']>/,
    message: 'ComponentSection doit wrapper dans <section className="section">',
    required: true
  },
  
  hasContainerStructure: {
    pattern: /<div className=["']container["']>/,
    message: 'ComponentSection doit avoir <div className="container">',
    required: true
  },
  
  hasGrid2Structure: {
    pattern: /<div className=["']grid-2["']/,
    message: 'ComponentSection doit avoir grid-2 pour layout info/preview',
    required: true
  },
  
  // Badge category avec variant primary
  hasCategoryBadge: {
    pattern: /<Badge variant=["']primary["']/,
    message: 'Category badge doit utiliser variant="primary"',
    required: true
  },
  
  // Badge variants avec variant default
  hasVariantsBadges: {
    pattern: /<Badge[^>]*variant=["']default["']/,
    message: 'Variants badges doivent utiliser variant="default"',
    required: false // Optionnel car pas tous les composants ont des variants
  },
  
  // Preview dans Primitives.Box
  hasPreviewBox: {
    pattern: /<Primitives\.Box[^>]*>[\s\S]*?<h3[^>]*>.*?[Pp]review.*?<\/h3>[\s\S]*?\{preview\}[\s\S]*?<\/Primitives\.Box>/,
    message: 'Preview doit être dans Primitives.Box avec titre "Preview"',
    required: true
  },
  
  // Bouton "View Full Documentation"
  hasDocButton: {
    pattern: /<Button variant=["']outline["'] size=["']lg["']>[\s\S]*?View Full Documentation/,
    message: 'Doit avoir bouton "View Full Documentation" avec variant="outline" size="lg"',
    required: true
  },
  
  // Export default
  hasDefaultExport: {
    pattern: /export default function \w+Page\(\)/,
    message: 'Doit avoir export default function avec nom en PascalCase + "Page"',
    required: true
  },
  
  // Interdictions
  noInlineStyles: {
    pattern: /style=\{\{[^}]*(?:#[0-9a-fA-F]{3,6}|:\s*['"]?\d+(?:px|rem|em)(?!.*var\())[^}]*\}\}/,
    message: 'ATTENTION: Styles inline avec valeurs hardcodées détectés - utiliser variables CSS',
    required: false,
    isWarning: true
  },
  
  noHardcodedColors: {
    pattern: /#[0-9a-fA-F]{3,6}(?!.*var\()/,
    message: 'ATTENTION: Couleurs hardcodées détectées - utiliser var(--token)',
    required: false,
    isWarning: true
  },
  
  noTailwindClasses: {
    pattern: /className=["'][^"']*\b(?:flex-(?!col|row)|justify-(?!center|between|start|end)|items-(?!center|start|end)|p-(?!0)\d+|m-(?!0)\d+|px-\d+|py-\d+|mt-\d+|mb-\d+|ml-\d+|mr-\d+|w-\d+|h-\d+|max-w-(?!full|screen)|min-h-(?!full|screen)|space-[xy]-\d+|gap-\d+|bg-(?!error|success|warning|info)|text-(?!xs|sm|base|lg|xl|2xl|3xl|6xl|error|success|warning|info)|border-(?!0))\b/,
    message: 'ATTENTION: Classes Tailwind détectées - utiliser classes design system',
    required: false,
    isWarning: true
  }
};

// Couleurs pour le terminal
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.relative(COMPONENTS_DIR, filePath);
  
  const results = {
    file: fileName,
    passed: true,
    errors: [],
    warnings: []
  };
  
  // Vérifier chaque règle
  for (const [ruleName, rule] of Object.entries(VALIDATION_RULES)) {
    const matches = rule.pattern.test(content);
    
    if (rule.required && !matches) {
      results.passed = false;
      results.errors.push(`❌ ${rule.message}`);
    } else if (rule.isWarning && matches) {
      results.warnings.push(`⚠️  ${rule.message}`);
    }
  }
  
  return results;
}

function findComponentPages(dir) {
  const pages = [];
  
  function scan(currentDir, depth = 0) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath, depth + 1);
      } else if (item === 'page.tsx' && depth > 0) {
        // Exclure /components/page.tsx (depth === 0)
        // Inclure uniquement les pages dans les sous-dossiers (depth > 0)
        pages.push(fullPath);
      }
    }
  }
  
  scan(dir);
  return pages;
}

function main() {
  log('\n🔍 Validation des pages de composants MUZISYSTEM\n', 'bold');
  log('📋 Référence: /components/primitives/page.tsx\n', 'cyan');
  
  // Trouver toutes les pages
  const pages = findComponentPages(COMPONENTS_DIR);
  
  if (pages.length === 0) {
    log('❌ Aucune page trouvée dans /components', 'red');
    process.exit(1);
  }
  
  log(`📄 ${pages.length} page(s) trouvée(s)\n`, 'blue');
  
  let totalPassed = 0;
  let totalFailed = 0;
  const allResults = [];
  
  // Valider chaque page
  for (const page of pages) {
    const results = validateFile(page);
    allResults.push(results);
    
    if (results.passed) {
      totalPassed++;
      log(`✅ ${results.file}`, 'green');
    } else {
      totalFailed++;
      log(`❌ ${results.file}`, 'red');
      results.errors.forEach(error => log(`   ${error}`, 'red'));
    }
    
    if (results.warnings.length > 0) {
      results.warnings.forEach(warning => log(`   ${warning}`, 'yellow'));
    }
    
    console.log('');
  }
  
  // Résumé
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log(`\n📊 Résumé:\n`, 'bold');
  log(`   ✅ Passé:  ${totalPassed}/${pages.length}`, totalPassed === pages.length ? 'green' : 'yellow');
  log(`   ❌ Échoué: ${totalFailed}/${pages.length}`, totalFailed > 0 ? 'red' : 'green');
  
  const totalWarnings = allResults.reduce((sum, r) => sum + r.warnings.length, 0);
  if (totalWarnings > 0) {
    log(`   ⚠️  Warnings: ${totalWarnings}`, 'yellow');
  }
  
  console.log('');
  
  // Exit code
  if (totalFailed > 0) {
    log('❌ Validation échouée - Corriger les erreurs ci-dessus\n', 'red');
    process.exit(1);
  } else {
    log('✅ Toutes les pages respectent la structure standard !\n', 'green');
    process.exit(0);
  }
}

// Run
main();
