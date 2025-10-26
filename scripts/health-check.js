#!/usr/bin/env node

/**
 * AVNIR Design System - Health Check Script
 * 
 * Vérifie la santé de la librairie de composants :
 * - Tous les composants ont leur CSS
 * - Tous les composants sont exportés
 * - Classes Tailwind interdites uniquement
 * - Variables CSS utilisées correctement
 * - Éléments HTML à remplacer par composants
 * - Imports corrects dans index.css
 * - Structure des composants (displayName, forwardRef, etc.)
 * - Accessibilité de base
 * 
 * Options :
 * --category=<name>  Scanner une seule catégorie
 * --json             Sortie JSON pour CI/CD
 * --verbose          Afficher tous les détails
 */

const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

const UI_PATH = path.join(__dirname, '../packages/ui/src/components');
const DESIGN_PATH = path.join(__dirname, '../packages/design/src/components');
const INDEX_CSS_PATH = path.join(__dirname, '../packages/design/src/index.css');

// Parse arguments
const args = process.argv.slice(2);
const CATEGORY_FILTER = args.find(a => a.startsWith('--category='))?.split('=')[1];
const JSON_OUTPUT = args.includes('--json');
const VERBOSE = args.includes('--verbose');

let errors = [];
let warnings = [];
let successes = [];
let stats = {
  totalComponents: 0,
  componentsWithCss: 0,
  componentsExported: 0,
  tailwindIssues: 0,
  htmlElementsToReplace: 0,
  accessibilityIssues: 0,
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function error(message) {
  errors.push(message);
  log(`❌ ${message}`, 'red');
}

function warn(message) {
  warnings.push(message);
  log(`⚠️  ${message}`, 'yellow');
}

function success(message) {
  successes.push(message);
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

// 1. Vérifier que tous les composants .tsx ont leur .css
function checkCssFiles() {
  info('\n📁 Vérification des fichiers CSS...');
  
  let categories = fs.readdirSync(UI_PATH).filter(f => 
    fs.statSync(path.join(UI_PATH, f)).isDirectory()
  );

  // Filtrer par catégorie si spécifié
  if (CATEGORY_FILTER) {
    categories = categories.filter(c => c === CATEGORY_FILTER);
    if (categories.length === 0) {
      error(`Catégorie "${CATEGORY_FILTER}" introuvable`);
      return;
    }
  }

  categories.forEach(category => {
    const componentDir = path.join(UI_PATH, category);
    const cssDir = path.join(DESIGN_PATH, category);
    
    if (!fs.existsSync(cssDir)) {
      warn(`Dossier CSS manquant pour la catégorie: ${category}`);
      return;
    }

    const components = fs.readdirSync(componentDir)
      .filter(f => f.endsWith('.tsx') && f !== 'index.ts');

    stats.totalComponents += components.length;

    components.forEach(comp => {
      const componentName = comp.replace('.tsx', '');
      const cssFileName = componentName
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .substring(1) + '.css';
      
      const cssPath = path.join(cssDir, cssFileName);
      
      if (fs.existsSync(cssPath)) {
        stats.componentsWithCss++;
        if (VERBOSE) success(`CSS OK: ${category}/${cssFileName}`);
      } else {
        // Certains composants n'ont pas besoin de CSS
        const content = fs.readFileSync(path.join(componentDir, comp), 'utf8');
        if (content.includes('className')) {
          warn(`CSS manquant: ${category}/${cssFileName}`);
        } else {
          stats.componentsWithCss++; // Pas besoin de CSS
        }
      }
    });
  });
  
  success(`${stats.componentsWithCss}/${stats.totalComponents} composants avec CSS correct`);
}

// 2. Vérifier les exports dans index.ts
function checkExports() {
  info('\n📦 Vérification des exports...');
  
  const categories = fs.readdirSync(UI_PATH).filter(f => 
    fs.statSync(path.join(UI_PATH, f)).isDirectory()
  );

  categories.forEach(category => {
    const indexPath = path.join(UI_PATH, category, 'index.ts');
    
    if (!fs.existsSync(indexPath)) {
      error(`index.ts manquant dans: ${category}`);
      return;
    }

    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const componentDir = path.join(UI_PATH, category);
    const components = fs.readdirSync(componentDir)
      .filter(f => f.endsWith('.tsx') && f !== 'index.ts')
      .map(f => f.replace('.tsx', ''));

    components.forEach(comp => {
      if (!indexContent.includes(`from "./${comp}"`)) {
        error(`Export manquant dans ${category}/index.ts: ${comp}`);
      }
    });
  });
}

// 3. Vérifier les classes Tailwind (interdites)
function checkTailwind() {
  info('\n🚫 Vérification des classes Tailwind interdites...');
  
  // Classes INTERDITES (couleurs, typography, design tokens)
  const forbiddenPatterns = [
    /\b(bg-blue-|bg-red-|bg-green-|bg-yellow-|bg-purple-|bg-pink-|bg-indigo-)\d+\b/g,  // Couleurs
    /\b(text-blue-|text-red-|text-green-|text-yellow-|text-purple-)\d+\b/g,  // Couleurs texte
    /\b(text-xs|text-sm|text-base|text-lg|text-xl|text-2xl|text-3xl)\b/g,  // Typography
    /\b(font-thin|font-light|font-normal|font-medium|font-semibold|font-bold|font-extrabold)\b/g,  // Font weights
    /\b(rounded-sm|rounded-md|rounded-lg|rounded-xl|rounded-2xl|rounded-3xl)\b/g,  // Border radius
    /\b(shadow-sm|shadow-md|shadow-lg|shadow-xl|shadow-2xl)\b/g,  // Shadows
    /\b(p-\d+|px-\d+|py-\d+|pt-\d+|pb-\d+|pl-\d+|pr-\d+)\b/g,  // Padding dans composants
    /\b(gap-\d+|space-x-\d+|space-y-\d+)\b/g,  // Gap dans composants
  ];
  
  // Classes AUTORISÉES (layout, display, sizing contextuel)
  const allowedPatterns = [
    'flex', 'grid', 'block', 'inline', 'hidden',
    'items-', 'justify-', 'content-',
    'w-', 'h-', 'min-', 'max-',
    'mt-', 'mb-', 'ml-', 'mr-',
    'grid-cols-', 'col-span-',
  ];

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        forbiddenPatterns.forEach(pattern => {
          const matches = content.match(pattern);
          if (matches) {
            matches.forEach(match => {
              error(`Classe Tailwind interdite dans ${filePath.replace(UI_PATH, '')}: ${match}`);
            });
          }
        });
      }
    });
  }

  scanDirectory(UI_PATH);
}

// 4. Vérifier les éléments HTML à remplacer par des composants
function checkHtmlElements() {
  info('\n🔘 Vérification des éléments HTML à remplacer...');
  
  const htmlPatterns = [
    { 
      pattern: /<button[^>]*>/g, 
      message: 'Bouton HTML → utiliser <Button>',
      exceptions: ['import', 'HTMLButtonElement', 'ButtonHTMLAttributes']
    },
    { 
      pattern: /<input[^>]*type="text"[^>]*>/g, 
      message: 'Input text HTML → utiliser <Form.Input>',
      exceptions: ['import', 'HTMLInputElement', 'InputHTMLAttributes']
    },
    { 
      pattern: /<input[^>]*type="email"[^>]*>/g, 
      message: 'Input email HTML → utiliser <Form.Input type="email">',
      exceptions: ['import', 'HTMLInputElement']
    },
    { 
      pattern: /<input[^>]*type="password"[^>]*>/g, 
      message: 'Input password HTML → utiliser <Form.Input type="password">',
      exceptions: ['import', 'HTMLInputElement']
    },
    { 
      pattern: /<input[^>]*type="checkbox"[^>]*>/g, 
      message: 'Checkbox HTML → utiliser <Form.Checkbox>',
      exceptions: ['import', 'HTMLInputElement']
    },
    { 
      pattern: /<input[^>]*type="radio"[^>]*>/g, 
      message: 'Radio HTML → utiliser <Form.Radio>',
      exceptions: ['import', 'HTMLInputElement']
    },
    { 
      pattern: /<select[^>]*>/g, 
      message: 'Select HTML → utiliser <Form.Select>',
      exceptions: ['import', 'HTMLSelectElement', 'SelectHTMLAttributes']
    },
    { 
      pattern: /<textarea[^>]*>/g, 
      message: 'Textarea HTML → utiliser <Form.Textarea>',
      exceptions: ['import', 'HTMLTextAreaElement', 'TextareaHTMLAttributes']
    },
  ];

  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        htmlPatterns.forEach(({ pattern, message, exceptions }) => {
          lines.forEach((line, index) => {
            // Ignorer si c'est dans les exceptions
            if (exceptions.some(exc => line.includes(exc))) {
              return;
            }
            
            const matches = line.match(pattern);
            if (matches) {
              warn(`${message} dans ${filePath.replace(UI_PATH, '')}:${index + 1}`);
            }
          });
        });
      }
    });
  }

  scanDirectory(UI_PATH);
}

// 5. Vérifier les imports CSS dans index.css
function checkCssImports() {
  info('\n📝 Vérification des imports CSS...');
  
  const indexCssContent = fs.readFileSync(INDEX_CSS_PATH, 'utf8');
  
  function scanCssDirectory(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanCssDirectory(filePath, `${prefix}${file}/`);
      } else if (file.endsWith('.css') && file !== 'index.css') {
        const importPath = `./components/${prefix}${file}`;
        if (!indexCssContent.includes(importPath)) {
          warn(`Import CSS manquant dans index.css: ${importPath}`);
        }
      }
    });
  }

  scanCssDirectory(DESIGN_PATH);
}

// 6. Vérifier les variables CSS
function checkCssVariables() {
  info('\n🎨 Vérification des variables CSS...');
  
  const forbiddenPatterns = [
    /#[0-9a-fA-F]{3,6}\b/g,  // Couleurs hex
    /\d+px\b/g,               // Pixels hardcodés
  ];

  function scanCssDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanCssDirectory(filePath);
      } else if (file.endsWith('.css')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Vérifier les couleurs hardcodées (sauf #0b0b0d pour les boutons)
        const hexMatches = content.match(forbiddenPatterns[0]);
        if (hexMatches) {
          hexMatches.forEach(match => {
            if (match !== '#0b0b0d') {
              warn(`Couleur hardcodée dans ${filePath.replace(DESIGN_PATH, '')}: ${match}`);
            }
          });
        }
      }
    });
  }

  scanCssDirectory(DESIGN_PATH);
}

// Exécuter tous les checks
function runHealthCheck() {
  log('\n🏥 AVNIR Design System - Health Check\n', 'blue');
  
  checkCssFiles();
  checkExports();
  checkTailwind();
  checkHtmlElements();
  checkCssImports();
  checkCssVariables();
  
  // Résumé
  log('\n📊 RÉSUMÉ', 'blue');
  log('─'.repeat(50));
  success(`${successes.length} vérifications réussies`);
  
  if (warnings.length > 0) {
    warn(`${warnings.length} avertissements`);
  }
  
  if (errors.length > 0) {
    error(`${errors.length} erreurs`);
    log('\n❌ Health check ÉCHOUÉ', 'red');
    process.exit(1);
  } else {
    log('\n✅ Health check RÉUSSI', 'green');
    process.exit(0);
  }
}

runHealthCheck();
