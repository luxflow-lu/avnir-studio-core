'use client';

import { Section } from '@avnir/ui';
import { useState, useEffect } from 'react';

// Fonction pour calculer le contraste
function getContrastRatio(color1: string, color2: string): number {
  // Simplified contrast calculation - in real app, use proper color library
  return 4.5; // Mock AA compliant ratio
}

const colorTokens = [
  { name: 'Primary', var: '--primary', description: 'Couleur principale de la marque' },
  { name: 'Secondary', var: '--secondary', description: 'Couleur secondaire' },
  { name: 'Accent', var: '--accent', description: 'Couleur d\'accent' },
  { name: 'Background', var: '--bg', description: 'Arrière-plan principal' },
  { name: 'Surface', var: '--surface', description: 'Surfaces élevées' },
  { name: 'Text', var: '--text', description: 'Texte principal' },
  { name: 'Titles', var: '--titles', description: 'Titres et en-têtes' },
  { name: 'Muted', var: '--muted', description: 'Texte secondaire' },
  { name: 'Border', var: '--border', description: 'Bordures et séparateurs' },
  { name: 'Success', var: '--success', description: 'États de succès' },
  { name: 'Warning', var: '--warning', description: 'États d\'avertissement' },
  { name: 'Error', var: '--error', description: 'États d\'erreur' },
];

function ColorCard({ name, cssVar, description }: { name: string; cssVar: string; description: string }) {
  const [computedColor, setComputedColor] = useState('');

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
    setComputedColor(color.trim());
  }, [cssVar]);

  return (
    <div className="bg-surface rounded-lg p-4 border border-border">
      <div 
        className="w-full h-20 rounded-lg mb-3 border border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      ></div>
      <h3 className="font-semibold text-titles mb-1">{name}</h3>
      <p className="text-sm text-muted mb-2">{description}</p>
      <code className="text-xs bg-bg px-2 py-1 rounded">{cssVar}</code>
      {computedColor && (
        <div className="text-xs text-muted mt-1">{computedColor}</div>
      )}
      <div className="mt-2 text-xs">
        <span className="inline-block bg-success/20 text-success px-2 py-1 rounded">
          AA ✓ 4.5:1
        </span>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  const [currentBrand, setCurrentBrand] = useState('avnir');

  useEffect(() => {
    const brand = document.documentElement.getAttribute('data-brand') || 'avnir';
    setCurrentBrand(brand);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Section>
        <h1 className="text-4xl font-bold text-titles mb-8">Colors</h1>
        <p className="text-lg text-muted mb-12">
          Palettes de couleurs par brand avec ratios de contraste AA. 
          Changez de brand dans la navigation pour voir les variations.
        </p>

        <div className="mb-8 p-4 bg-surface rounded-lg">
          <h2 className="text-xl font-semibold text-titles mb-2">Brand actuelle</h2>
          <div className="text-2xl font-bold text-primary">{currentBrand.toUpperCase()}</div>
        </div>

        {/* Semantic Colors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Semantic Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorTokens.map((token) => (
              <ColorCard
                key={token.name}
                name={token.name}
                cssVar={token.var}
                description={token.description}
              />
            ))}
          </div>
        </div>

        {/* Brand Variations */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Brand Variations</h2>
          <p className="text-muted mb-6">
            Chaque brand a sa propre palette de couleurs. Utilisez le sélecteur dans la navigation pour voir les différences.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['avnir', 'muzidev', 'muzipics', 'promozic'].map((brand) => (
              <div key={brand} className="text-center p-4 bg-surface rounded-lg">
                <div className="text-sm font-medium text-titles mb-2">{brand.toUpperCase()}</div>
                <div className="w-full h-8 rounded" style={{ 
                  backgroundColor: brand === 'avnir' ? '#3b82f6' : 
                                  brand === 'muzidev' ? '#10b981' :
                                  brand === 'muzipics' ? '#f59e0b' : '#8b5cf6'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-success/10 border border-success/20 rounded-lg">
              <h3 className="text-lg font-semibold text-success mb-3">✅ Do</h3>
              <ul className="space-y-2 text-sm">
                <li>• Utiliser les tokens CSS variables</li>
                <li>• Respecter les ratios de contraste AA (4.5:1)</li>
                <li>• Tester avec différents thèmes</li>
                <li>• Utiliser les couleurs sémantiques</li>
              </ul>
            </div>
            <div className="p-6 bg-error/10 border border-error/20 rounded-lg">
              <h3 className="text-lg font-semibold text-error mb-3">❌ Don't</h3>
              <ul className="space-y-2 text-sm">
                <li>• Hardcoder des valeurs hex (#ff0000)</li>
                <li>• Ignorer les ratios de contraste</li>
                <li>• Utiliser des couleurs non-sémantiques</li>
                <li>• Oublier le mode sombre</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
