#!/usr/bin/env node

/**
 * AVNIR Design System - Health Check Script v2
 * 
 * Usage:
 *   pnpm health                    # Scan complet
 *   pnpm health --category=form    # Scanner une catégorie
 *   pnpm health --json             # Sortie JSON
 *   pnpm health --verbose          # Mode détaillé
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
  componentsWithDisplayName: 0,
  componentsWithForwardRef: 0,
  tailwindIssues: 0,
  htmlElementsToReplace: 0,
  accessibilityIssues: 0,
  cssImportsMissing: 0,
  hardcodedColors: 0,
  componentsUsedInApps: 0,
};

function log(message, color = 'reset') {
  if (!JSON_OUTPUT) {
    console.log(`${COLORS[color]}${message}${COLORS.reset}`);
  }
}

function error(message) {
  errors.push(message);
  if (!JSON_OUTPUT) log(`❌ ${message}`, 'red');
}

function warn(message) {
  warnings.push(message);
  if (!JSON_OUTPUT) log(`⚠️  ${message}`, 'yellow');
}

function success(message) {
  successes.push(message);
  if (!JSON_OUTPUT && VERBOSE) log(`✅ ${message}`, 'green');
}

function info(message) {
  if (!JSON_OUTPUT) log(`ℹ️  ${message}`, 'cyan');
}

// 1. Vérifier CSS + Structure des composants
function checkComponentsStructure() {
  info('\n📁 Vérification de la structure des composants...');
  
  let categories = fs.readdirSync(UI_PATH).filter(f => 
    fs.statSync(path.join(UI_PATH, f)).isDirectory()
  );

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
    
    const components = fs.readdirSync(componentDir)
      .filter(f => f.endsWith('.tsx') && f !== 'index.ts');

    stats.totalComponents += components.length;

    components.forEach(comp => {
      const componentName = comp.replace('.tsx', '');
      const componentPath = path.join(componentDir, comp);
      const content = fs.readFileSync(componentPath, 'utf8');
      
      // Check CSS
      // Conversion intelligente pour gérer les acronymes et cas spéciaux
      let cssFileName = componentName;
      
      // Cas spéciaux connus (nom exact du fichier CSS)
      const specialCases = {
        'ScrollSpy': 'scrollspy',
        'DashboardKPI': 'dashboard-kpi',
      };
      
      if (specialCases[componentName]) {
        cssFileName = specialCases[componentName] + '.css';
      } else {
        cssFileName = componentName
          // Gérer les acronymes connus (avant la conversion kebab-case)
          .replace(/OTP/g, 'otp')
          .replace(/KPI/g, '-kpi')
          .replace(/API/g, '-api')
          .replace(/URL/g, '-url')
          .replace(/HTML/g, '-html')
          .replace(/CSS/g, '-css')
          .replace(/UI/g, '-ui')
          // Convertir le reste en kebab-case
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, '') // Supprimer le tiret initial
          .replace(/--+/g, '-') + '.css'; // Supprimer les doubles tirets
      }
      
      const cssPath = path.join(cssDir, cssFileName);
      
      if (fs.existsSync(cssPath) || !content.includes('className')) {
        stats.componentsWithCss++;
      } else {
        warn(`CSS manquant: ${category}/${cssFileName}`);
      }

      // Check displayName
      if (content.includes(`${componentName}.displayName`)) {
        stats.componentsWithDisplayName++;
      } else if (!content.includes('export const') || content.includes('forwardRef')) {
        warn(`displayName manquant: ${category}/${componentName}`);
      }

      // Check forwardRef (pour composants DOM)
      const isDomComponent = content.includes('HTMLAttributes') || 
                            content.includes('HTMLElement') ||
                            content.includes('<div') ||
                            content.includes('<button') ||
                            content.includes('<input');
      
      if (isDomComponent && content.includes('forwardRef')) {
        stats.componentsWithForwardRef++;
      } else if (isDomComponent && !content.includes('forwardRef')) {
        warn(`forwardRef manquant pour composant DOM: ${category}/${componentName}`);
      }
    });
  });
  
  success(`Structure: ${stats.componentsWithCss}/${stats.totalComponents} composants OK`);
}

// 2. Vérifier les exports
function checkExports() {
  info('\n📦 Vérification des exports...');
  
  let categories = fs.readdirSync(UI_PATH).filter(f => 
    fs.statSync(path.join(UI_PATH, f)).isDirectory()
  );

  if (CATEGORY_FILTER) {
    categories = categories.filter(c => c === CATEGORY_FILTER);
  }

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
      if (indexContent.includes(`from "./${comp}"`)) {
        stats.componentsExported++;
      } else {
        error(`Export manquant dans ${category}/index.ts: ${comp}`);
      }
    });
  });
  
  success(`Exports: ${stats.componentsExported}/${stats.totalComponents} composants exportés`);
}

// 3. Vérifier Tailwind (SMART)
function checkTailwind() {
  info('\n🚫 Vérification des classes Tailwind interdites...');
  
  // Classes INTERDITES (couleurs hardcodées avec numéros uniquement)
  // Les classes utilitaires (text-sm, font-medium, etc.) sont maintenant autorisées
  // car elles utilisent nos variables CSS définies dans themes.css
  const forbiddenPatterns = [
    { pattern: /\b(bg-blue-|bg-red-|bg-green-|bg-yellow-|bg-purple-|bg-pink-|bg-indigo-)\d+\b/g, desc: 'Couleurs hardcodées' },
    { pattern: /\b(text-blue-|text-red-|text-green-|text-yellow-|text-purple-)\d+\b/g, desc: 'Couleurs texte hardcodées' },
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
        
        forbiddenPatterns.forEach(({ pattern, desc }) => {
          const matches = content.match(pattern);
          if (matches) {
            stats.tailwindIssues += matches.length;
            matches.forEach(match => {
              error(`Tailwind ${desc} interdit: ${filePath.replace(UI_PATH, '')} → ${match}`);
            });
          }
        });
      }
    });
  }

  scanDirectory(UI_PATH);
  
  if (stats.tailwindIssues === 0) {
    success('Aucune classe Tailwind interdite détectée');
  }
}

// 4. Vérifier éléments HTML
function checkHtmlElements() {
  info('\n🔘 Vérification des éléments HTML...');
  
  const htmlPatterns = [
    { pattern: /<button[^>]*>/g, message: '<Button>', exceptions: ['import', 'HTMLButtonElement', 'ButtonHTMLAttributes', 'className="btn', 'className="render-action'] },
    { pattern: /<input[^>]*type="text"[^>]*>/g, message: '<Form.Input>', exceptions: ['import', 'HTMLInputElement', 'InputHTMLAttributes'] },
    { pattern: /<input[^>]*type="email"[^>]*>/g, message: '<Form.Input type="email">', exceptions: ['import', 'HTMLInputElement'] },
    { pattern: /<input[^>]*type="password"[^>]*>/g, message: '<Form.Input type="password">', exceptions: ['import', 'HTMLInputElement'] },
    { pattern: /<input[^>]*type="checkbox"[^>]*>/g, message: '<Form.Checkbox>', exceptions: ['import', 'HTMLInputElement'] },
    { pattern: /<select[^>]*>/g, message: '<Form.Select>', exceptions: ['import', 'HTMLSelectElement', 'SelectHTMLAttributes'] },
    { pattern: /<textarea[^>]*>/g, message: '<Form.Textarea>', exceptions: ['import', 'HTMLTextAreaElement', 'TextareaHTMLAttributes'] },
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
            if (exceptions.some(exc => line.includes(exc))) return;
            
            const matches = line.match(pattern);
            if (matches) {
              stats.htmlElementsToReplace++;
              warn(`HTML → ${message} dans ${filePath.replace(UI_PATH, '')}:${index + 1}`);
            }
          });
        });
      }
    });
  }

  scanDirectory(UI_PATH);
  
  if (stats.htmlElementsToReplace === 0) {
    success('Tous les éléments utilisent des composants');
  }
}

// 5. Vérifier accessibilité
function checkAccessibility() {
  info('\n♿ Vérification de l\'accessibilité...');
  
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
        
        lines.forEach((line, index) => {
          // Images sans alt (vérifier que alt n'est pas dans la même balise ou ligne suivante)
          if (line.includes('<img') && !line.includes('alt=') && !line.includes('alt={')) {
            // Vérifier la ligne suivante aussi
            const nextLine = lines[index + 1] || '';
            if (!nextLine.includes('alt=') && !nextLine.includes('alt={')) {
              stats.accessibilityIssues++;
              warn(`Image sans alt dans ${filePath.replace(UI_PATH, '')}:${index + 1}`);
            }
          }
          
          // Boutons sans aria-label (si pas de texte visible)
          if (line.match(/<button[^>]*>[\s]*<svg/) && !line.includes('aria-label') && !line.includes('title')) {
            // Bouton avec seulement une icône, devrait avoir aria-label
            // Note: on vérifie juste la ligne, pas le contexte complet
          }
        });
      }
    });
  }

  scanDirectory(UI_PATH);
  
  if (stats.accessibilityIssues === 0) {
    success('Aucun problème d\'accessibilité détecté');
  }
}

// 6. Vérifier imports CSS
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
          stats.cssImportsMissing++;
          warn(`Import CSS manquant: ${importPath}`);
        }
      }
    });
  }

  scanCssDirectory(DESIGN_PATH);
  
  if (stats.cssImportsMissing === 0) {
    success('Tous les CSS sont importés');
  }
}

// 7. Vérifier variables CSS
function checkCssVariables() {
  info('\n🎨 Vérification des variables CSS...');
  
  function scanCssDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanCssDirectory(filePath);
      } else if (file.endsWith('.css')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Ignorer commentaires et lignes vides
          if (line.trim().startsWith('/*') || line.trim().startsWith('*') || !line.trim()) return;
          
          // Couleurs hardcodées (sauf #0b0b0d)
          const hexMatches = line.match(/#[0-9a-fA-F]{3,6}\b/g);
          if (hexMatches) {
            hexMatches.forEach(match => {
              if (match !== '#0b0b0d' && !line.includes('--')) {
                stats.hardcodedColors++;
                warn(`Couleur hardcodée dans ${filePath.replace(DESIGN_PATH, '')}:${index + 1} → ${match}`);
              }
            });
          }
        });
      }
    });
  }

  scanCssDirectory(DESIGN_PATH);
  
  if (stats.hardcodedColors === 0) {
    success('Toutes les couleurs utilisent des variables');
  }
}

// 8. Compter les composants utilisés dans les apps
function checkComponentUsage() {
  info('\n📊 Analyse de l\'utilisation des composants...');
  
  const APPS_PATH = path.join(__dirname, '../apps');
  const usedComponents = new Set();
  
  // Récupérer tous les noms de composants disponibles
  const availableComponents = new Set();
  
  function getComponentNames(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        getComponentNames(filePath);
      } else if (file.endsWith('.tsx') && file !== 'index.ts') {
        const componentName = file.replace('.tsx', '');
        availableComponents.add(componentName);
      }
    });
  }
  
  getComponentNames(UI_PATH);
  
  // Scanner les apps pour trouver les composants utilisés
  function scanApps(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      // Ignorer node_modules et .next
      if (file === 'node_modules' || file === '.next' || file === 'dist') return;
      
      if (stat.isDirectory()) {
        scanApps(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Chercher les imports de @avnir/ui
        const importMatches = content.match(/from ['"]@avnir\/ui['"]/g);
        if (importMatches) {
          // Chercher les composants utilisés dans le fichier
          availableComponents.forEach(comp => {
            // Chercher <ComponentName ou {ComponentName}
            const regex = new RegExp(`[<{]${comp}[>\\s,}]`, 'g');
            if (regex.test(content)) {
              usedComponents.add(comp);
            }
          });
        }
      }
    });
  }
  
  scanApps(APPS_PATH);
  
  stats.componentsUsedInApps = usedComponents.size;
  
  success(`${usedComponents.size}/${availableComponents.size} composants utilisés dans les apps`);
  
  if (VERBOSE) {
    info(`\nComposants utilisés: ${Array.from(usedComponents).sort().join(', ')}`);
  }
}

// Exécuter tous les checks
function runHealthCheck() {
  if (!JSON_OUTPUT) {
    log('\n🏥 AVNIR Design System - Health Check v2\n', 'blue');
    if (CATEGORY_FILTER) {
      log(`📂 Catégorie: ${CATEGORY_FILTER}\n`, 'magenta');
    }
  }
  
  checkComponentsStructure();
  checkExports();
  checkTailwind();
  checkHtmlElements();
  checkAccessibility();
  checkCssImports();
  checkCssVariables();
  checkComponentUsage();
  
  // Résumé
  if (JSON_OUTPUT) {
    console.log(JSON.stringify({
      stats,
      errors,
      warnings,
      successes,
      passed: errors.length === 0,
    }, null, 2));
  } else {
    log('\n📊 RÉSUMÉ', 'blue');
    log('─'.repeat(50));
    log(`\n📈 Statistiques:`, 'cyan');
    log(`   Composants totaux: ${stats.totalComponents}`);
    log(`   Avec CSS: ${stats.componentsWithCss}/${stats.totalComponents}`);
    log(`   Exportés: ${stats.componentsExported}/${stats.totalComponents}`);
    log(`   Avec displayName: ${stats.componentsWithDisplayName}`);
    log(`   Avec forwardRef: ${stats.componentsWithForwardRef}`);
    log(`   Utilisés dans apps: ${stats.componentsUsedInApps}/${stats.totalComponents}`);
    
    log(`\n🔍 Problèmes détectés:`, 'yellow');
    log(`   Classes Tailwind interdites: ${stats.tailwindIssues}`);
    log(`   Éléments HTML à remplacer: ${stats.htmlElementsToReplace}`);
    log(`   Problèmes accessibilité: ${stats.accessibilityIssues}`);
    log(`   Imports CSS manquants: ${stats.cssImportsMissing}`);
    log(`   Couleurs hardcodées: ${stats.hardcodedColors}`);
    
    log(`\n📋 Résultat:`, 'cyan');
    log(`   ✅ Succès: ${successes.length}`);
    log(`   ⚠️  Avertissements: ${warnings.length}`);
    log(`   ❌ Erreurs: ${errors.length}`);
    
    if (errors.length > 0) {
      log('\n❌ Health check ÉCHOUÉ', 'red');
      process.exit(1);
    } else if (warnings.length > 0) {
      log('\n⚠️  Health check RÉUSSI avec avertissements', 'yellow');
      process.exit(0);
    } else {
      log('\n✅ Health check RÉUSSI - Tout est parfait !', 'green');
      process.exit(0);
    }
  }
}

runHealthCheck();
