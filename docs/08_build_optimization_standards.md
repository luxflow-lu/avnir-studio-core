# Standards d'Optimisation et Build

**Version :** 1.0  
**Dernière mise à jour :** 24 octobre 2024  
**Statut :** ✅ Actif

## 🎯 Objectifs

Garantir des performances optimales et une maintenabilité maximale du design system AVNIR à travers des règles strictes de factorisation, minification et optimisation.

## 🚫 RÈGLES ZERO TOLERANCE

### PERFORMANCE
❌ **JAMAIS de CSS non minifié en production** → Minification automatique obligatoire  
❌ **JAMAIS de bundle CSS >50KB** → Budget strict avec monitoring  
❌ **JAMAIS de CSS inutilisé** → PurgeCSS obligatoire  
❌ **JAMAIS de duplication** → Factorisation systématique

### FACTORISATION
❌ **JAMAIS de styles dupliqués** → Extraire en mixins/variables  
❌ **JAMAIS d'animations répétées** → Centraliser dans animations.css  
❌ **JAMAIS de valeurs hardcodées** → Variables CSS obligatoires  
❌ **JAMAIS de patterns répétés** → Utility classes

## ✅ STANDARDS OBLIGATOIRES

### 1. ARCHITECTURE MODULAIRE

```
packages/design/src/
├── index.css (point d'entrée)
├── base/
│   ├── variables.css
│   ├── animations.css
│   ├── utilities.css
│   └── mixins.css
└── components/
    ├── avnir/
    ├── form/
    ├── marketing/
    └── layout/
```

### 2. FACTORISATION OBLIGATOIRE

**Variables CSS centralisées :**
```css
/* ✅ BON */
:root {
  --animation-duration: 0.2s;
  --animation-easing: ease;
  --border-radius-card: var(--radius-lg);
}

/* ❌ INTERDIT */
.component { transition: all 0.2s ease; }
.other { transition: opacity 0.2s ease; }
```

**Animations centralisées :**
```css
/* base/animations.css */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Mixins pour patterns répétés :**
```css
/* base/mixins.css */
.card-base {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### 3. BUILD PROCESS OBLIGATOIRE

**PostCSS Configuration :**
```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [
      require('cssnano')({
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifySelectors: true,
        }]
      }),
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        safelist: ['html', 'body', '[data-theme]', '[data-brand]']
      })
    ] : [])
  ]
}
```

**Bundle Size Budget :**
```json
{
  "budgets": [
    {
      "type": "bundle",
      "name": "design-system",
      "maximumWarning": "40kb",
      "maximumError": "50kb"
    }
  ]
}
```

### 4. MONITORING OBLIGATOIRE

**Bundle Analyzer :**
```bash
# Analyse de la taille du bundle CSS
pnpm analyze:css

# Rapport de performance
pnpm perf:report
```

**Métriques à surveiller :**
- **Taille CSS minifié** : ≤ 50KB
- **Taille CSS gzippé** : ≤ 15KB
- **Nombre de sélecteurs** : ≤ 5000
- **Duplication** : 0% toléré

### 5. VALIDATION PRE-COMMIT

**Hooks obligatoires :**
```bash
#!/bin/sh
# .husky/pre-commit

# Vérification taille bundle
pnpm build:css
SIZE=$(wc -c < packages/design/dist/index.min.css)
if [ $SIZE -gt 51200 ]; then
  echo "❌ CSS bundle trop volumineux: ${SIZE} bytes (max: 50KB)"
  exit 1
fi

# Vérification duplication
pnpm lint:css:duplication
if [ $? -ne 0 ]; then
  echo "❌ Duplication CSS détectée"
  exit 1
fi

# Validation factorisation
pnpm lint:css:factorization
```

## 🔧 OUTILS REQUIS

### Dependencies
```json
{
  "devDependencies": {
    "postcss": "^8.4.0",
    "postcss-import": "^15.1.0",
    "postcss-nested": "^6.0.0",
    "cssnano": "^6.0.0",
    "@fullhuman/postcss-purgecss": "^5.0.0",
    "bundle-analyzer": "^1.0.0",
    "css-tree": "^2.3.0"
  }
}
```

### Scripts
```json
{
  "scripts": {
    "build:css": "postcss src/index.css -o dist/index.css",
    "build:css:prod": "NODE_ENV=production postcss src/index.css -o dist/index.min.css",
    "analyze:css": "css-analyzer dist/index.min.css",
    "lint:css:duplication": "css-duplication-checker src/**/*.css",
    "lint:css:factorization": "css-factorization-linter src/**/*.css",
    "perf:report": "css-performance-report dist/index.min.css"
  }
}
```

## 📊 MÉTRIQUES DE SUCCÈS

### Performance
- **First Paint** : Amélioration de 20%
- **Bundle Size** : Réduction de 60% vs CSS non optimisé
- **Cache Hit Rate** : >95% grâce à la factorisation

### Maintenabilité
- **Duplication** : 0% toléré
- **Temps de build** : <30s
- **Conflits Git** : -90% grâce à la modularité

### Qualité
- **Lighthouse Performance** : ≥95
- **Core Web Vitals** : Tous verts
- **Bundle Analysis** : Aucun warning

## 🚨 PROCESSUS D'ESCALATION

### Violation détectée
1. **Build fail** automatique
2. **Notification** équipe
3. **Blocage** merge jusqu'à correction

### Performance dégradée
1. **Alerte** automatique si bundle >45KB
2. **Audit** obligatoire si >50KB
3. **Refactorisation** immédiate

## 🎯 ROADMAP

### Phase 1 (Immédiate)
- ✅ Factorisation des composants /avnir
- ✅ Configuration PostCSS
- ✅ Monitoring bundle size

### Phase 2 (1 semaine)
- ⏳ Migration tous les composants
- ⏳ PurgeCSS en production
- ⏳ Bundle analyzer intégré

### Phase 3 (2 semaines)
- ⏳ Optimisation avancée
- ⏳ Tree-shaking par composant
- ⏳ Performance monitoring

---

**RÈGLE ULTIME :** "Performance first, optimisation continue, zéro compromis sur la qualité."
