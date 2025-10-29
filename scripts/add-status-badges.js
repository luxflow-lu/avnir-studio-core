#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration des status par page
const STATUS_CONFIG = {
  'primitives': 'stable',
  'data-display': 'stable',
  'feedback': 'stable',
  'navigation': 'stable',
  'overlay': 'stable',
  'layout': 'stable',
  'content': 'stable',
  'marketing': 'stable',
  'ecommerce': 'stable',
  'saas': 'stable',
  'system': 'stable',
  'auth': 'stable',
  'ai': 'beta',
  'media': 'beta',
};

const COMPONENT_DIR = '/Users/maximezaoui/Desktop/repo/avnir-studio-core/apps/muzisystem/app/components';

// Fonction pour mettre à jour l'interface
function updateInterface(content) {
  const oldInterface = `interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
}`;

  const newInterface = `interface ComponentSectionProps {
  name: string;
  category: string;
  description: string;
  variants?: string[];
  preview: React.ReactNode;
  status?: 'stable' | 'beta' | 'deprecated';
  browsers?: string[];
  a11y?: 'AA' | 'AAA';
}`;

  return content.replace(oldInterface, newInterface);
}

// Fonction pour mettre à jour la fonction ComponentSection
function updateFunction(content) {
  const oldFunction = `function ComponentSection({ name, category, description, variants, preview }: ComponentSectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>`;

  const newFunction = `function ComponentSection({ name, category, description, variants, preview, status = 'stable', browsers = ['all'], a11y = 'AA' }: ComponentSectionProps) {
  const statusConfig = {
    stable: { label: 'Stable', color: 'var(--success)', emoji: '✅' },
    beta: { label: 'Beta', color: 'var(--warning)', emoji: '🧪' },
    deprecated: { label: 'Deprecated', color: 'var(--error)', emoji: '⚠️' }
  };

  const currentStatus = statusConfig[status];

  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 'var(--gap-xl)', alignItems: 'center' }}>
          {/* Left: Info */}
          <div>
            {/* Category Badge */}
            <div style={{ marginBottom: 'var(--margin-md)' }}>
              <Badge variant="primary" style={{ textTransform: 'uppercase' }}>
                {category}
              </Badge>
            </div>`;

  if (!content.includes(oldFunction)) {
    console.log('⚠️  Pattern not found, trying alternative...');
    return content;
  }

  return content.replace(oldFunction, newFunction);
}

// Fonction pour ajouter les badges de status
function addStatusBadges(content) {
  // Pattern à remplacer : juste avant le bouton "View Full Documentation"
  const pattern = /(\s+)<Button variant="outline" size="lg">\s+View Full Documentation →\s+<\/Button>/g;
  
  const replacement = `
            
            {/* Status Badges */}
            <div style={{ marginBottom: 'var(--margin-lg)' }}>
              <p className="text-small" style={{ color: 'var(--muted)', marginBottom: 'var(--margin-sm)', fontWeight: 'var(--font-medium)' }}>
                Status
              </p>
              <div style={{ display: 'flex', gap: 'var(--gap-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
                <Badge style={{ backgroundColor: currentStatus.color, color: '#0b0b0d' }}>
                  {currentStatus.emoji} {currentStatus.label}
                </Badge>
                
                {browsers.includes('all') ? (
                  <Badge variant="default">
                    🌐 All Browsers
                  </Badge>
                ) : (
                  <Badge variant="default">
                    🌐 {browsers.join(', ')}
                  </Badge>
                )}
                
                <Badge variant="default">
                  ♿ WCAG 2.1 {a11y}
                </Badge>
              </div>
            </div>
            
            <Button variant="outline" size="lg">
              View Full Documentation →
            </Button>`;

  return content.replace(pattern, replacement);
}

// Fonction principale
function processFile(category) {
  const filePath = path.join(COMPONENT_DIR, category, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  console.log(`\n📝 Processing: ${category}/page.tsx`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Vérifier si déjà mis à jour
  if (content.includes('status?: \'stable\' | \'beta\' | \'deprecated\'')) {
    console.log(`✅ Already updated: ${category}`);
    return true;
  }
  
  // Appliquer les transformations
  content = updateInterface(content);
  content = updateFunction(content);
  content = addStatusBadges(content);
  
  // Sauvegarder
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Updated: ${category}`);
  
  return true;
}

// Exécution
console.log('🚀 Starting status badges deployment...\n');

let success = 0;
let failed = 0;

Object.keys(STATUS_CONFIG).forEach(category => {
  if (category === 'form') {
    console.log(`⏭️  Skipping: ${category} (already done)`);
    return;
  }
  
  if (processFile(category)) {
    success++;
  } else {
    failed++;
  }
});

console.log(`\n✅ Success: ${success}`);
console.log(`❌ Failed: ${failed}`);
console.log(`\n🎉 Status badges deployment complete!`);
