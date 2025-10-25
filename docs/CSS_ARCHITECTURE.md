# Architecture CSS Modulaire AVNIR

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-25 -->
<!-- Last Validated: 2025-10-25 -->
<!-- Next Review: 2025-11-24 -->
<!-- Dependencies: 03_design_system_guide.md -->
<!-- Breaking Changes: Migration complète Tailwind → CSS -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

**Conversion complète Tailwind → CSS terminée le 2025-10-25**

---

## 🎯 Vue d'Ensemble

### Architecture
- **85 fichiers CSS modulaires** organisés par familles
- **0% Tailwind** dans les composants
- **100% CSS** avec variables design system
- **Build optimisé** : CSS minifié + source maps

### Performance
- **CSS minifié:** 74.4 KB
- **CSS gzippé:** 12.5 KB
- **Ratio compression:** 83.1%

---

## 📁 Structure

```
packages/design/
├── themes.css (variables + base)
├── src/
│   ├── index.css (point d'entrée)
│   └── components/
│       ├── avnir/ (8 fichiers)
│       │   ├── asset-tile.css
│       │   ├── credit-balance.css
│       │   ├── model-selector.css
│       │   ├── permission-badge.css
│       │   ├── project-card.css
│       │   ├── project-header.css
│       │   ├── prompt-editor.css
│       │   └── render-status.css
│       │
│       ├── data-display/ (8 fichiers)
│       │   ├── avatar.css
│       │   ├── badge.css
│       │   ├── empty-state.css
│       │   ├── progress.css
│       │   ├── skeleton.css
│       │   ├── spinner.css
│       │   ├── table.css
│       │   └── typed-badge.css
│       │
│       ├── ecommerce/ (7 fichiers)
│       │   ├── checkout-steps.css
│       │   ├── faceted-search.css
│       │   ├── media-gallery.css
│       │   ├── mega-menu.css
│       │   ├── mini-cart.css
│       │   ├── price.css
│       │   └── variants-swatches.css
│       │
│       ├── form/ (10 fichiers)
│       │   ├── button.css
│       │   ├── checkbox.css
│       │   ├── field.css
│       │   ├── file-upload.css
│       │   ├── icon-button.css
│       │   ├── input.css
│       │   ├── radio.css
│       │   ├── select.css
│       │   ├── switch.css
│       │   └── textarea.css
│       │
│       ├── layout/ (7 fichiers)
│       │   ├── banner.css
│       │   ├── footer.css
│       │   ├── navbar.css
│       │   ├── page-header.css
│       │   ├── section-header.css
│       │   ├── sidebar.css
│       │   └── tabs.css
│       │
│       ├── marketing/ (12 fichiers)
│       │   ├── contact-block.css
│       │   ├── cta-section.css
│       │   ├── faq.css
│       │   ├── features.css
│       │   ├── footer.css
│       │   ├── hero.css
│       │   ├── logo-cloud.css
│       │   ├── newsletter.css
│       │   ├── pricing-strip.css
│       │   ├── stats.css
│       │   ├── steps.css
│       │   └── testimonials.css
│       │
│       ├── navigation/ (4 fichiers)
│       │   ├── breadcrumb.css
│       │   ├── command-k.css
│       │   └── pagination.css
│       │
│       ├── overlay/ (5 fichiers)
│       │   ├── drawer.css
│       │   ├── dropdown.css
│       │   ├── modal.css
│       │   ├── popover.css
│       │   └── tooltip.css
│       │
│       ├── primitives/ (6 fichiers)
│       │   ├── card.css
│       │   ├── container.css
│       │   ├── divider.css
│       │   ├── section.css
│       │   ├── spacer.css
│       │   └── stack.css
│       │
│       ├── saas/ (9 fichiers)
│       │   ├── api-keys.css
│       │   ├── dashboard-kpi.css
│       │   ├── import-export.css
│       │   ├── invite-members.css
│       │   ├── plan-picker.css
│       │   ├── pricing-table.css
│       │   ├── roles-matrix.css
│       │   └── saved-views.css
│       │
│       └── system/ (7 fichiers)
│           ├── brand-theme-selector.css
│           ├── error-boundary.css
│           ├── error-pages.css
│           ├── loading-boundary.css
│           ├── not-found404.css
│           ├── server-error500.css
│           └── theme-toggle.css
│
└── dist/
    └── index.min.css (généré par build)
```

---

## 🎨 Variables CSS

### Couleurs
```css
/* Base */
--bg: 14 17 22;
--surface: 20 23 28;
--foreground: 237 237 237;
--muted-foreground: 156 163 175;

/* Brand (dynamique par data-brand) */
--brand: 92 185 242;
--brand-on: 14 17 22;

/* États */
--success: 16 185 129;
--warning: 245 158 11;
--destructive: 239 68 68;
--info: 59 130 246;
```

### Espacement
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Radius
```css
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-full: 9999px;
```

---

## 🛠️ Workflow Création Composant

### 1. Créer le CSS
```bash
# Créer le fichier CSS
touch packages/design/src/components/<famille>/<nom>.css
```

```css
/* mon-composant.css */
.mon-composant {
  background-color: var(--surface);
  padding: var(--space-16);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.mon-composant__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-12);
}

.mon-composant__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
}

.mon-composant__content {
  color: var(--muted-foreground);
  line-height: 1.6;
}
```

### 2. Importer dans index.css
```css
/* packages/design/src/index.css */
@import "./components/<famille>/<nom>.css";
```

### 3. Créer le Composant TSX
```tsx
// packages/ui/src/components/<famille>/MonComposant.tsx
import * as React from "react";
import { cx } from "../../utils/cx";

export interface MonComposantProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export const MonComposant = React.forwardRef<HTMLDivElement, MonComposantProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx("mon-composant", className)} {...props}>
        <div className="mon-composant__header">
          <h2 className="mon-composant__title">{title}</h2>
        </div>
        <div className="mon-composant__content">{children}</div>
      </div>
    );
  }
);
MonComposant.displayName = "MonComposant";
```

### 4. Exporter
```tsx
// packages/ui/src/components/<famille>/index.ts
export * from "./MonComposant";

// packages/ui/src/index.ts
export * from "./components/<famille>";
```

### 5. Build
```bash
pnpm build --filter=@avnir/design
pnpm build --filter=@avnir/ui
```

---

## ✅ Standards à Respecter

### ✅ FAIRE
- Utiliser **variables CSS** : `var(--primary)`, `var(--space-*)`, `var(--radius-*)`
- Classes **sémantiques** : `.mon-composant`, `.mon-composant__element`
- **BEM naming** : `.block__element--modifier`
- **Mobile-first** : media queries `@media (min-width: ...)`
- **Accessibilité** : focus states, ARIA attributes

### ❌ NE PAS FAIRE
- Classes **Tailwind** dans composants
- Couleurs **hardcodées** (#5cb9f2, rgb(255, 0, 0))
- Styles **inline** (style={{}})
- Valeurs **magiques** (padding: 23px)
- **!important** (sauf cas exceptionnel)

---

## 🔧 Scripts Disponibles

### Vérifier Conformité
```bash
node scripts/convert-tailwind-to-css.js
```
Scan tous les composants et détecte les classes Tailwind restantes.

### Convertir un Composant
```bash
node scripts/auto-convert-tailwind.js <fichier.tsx>
```
Conversion semi-automatique avec backup.

### Nettoyage
```bash
node scripts/ultra-cleanup.js
```
Nettoyage ultra-précis de tous les composants.

---

## 📚 Documentation

### Rapports de Conversion
- **CONVERSION_100_COMPLETE.md** - Rapport détaillé complet
- **CHANGELOG_TAILWIND_CONVERSION.md** - Changelog détaillé
- **CONVERSION_SUMMARY.md** - Résumé exécutif

### Guides
- **03_design_system_guide.md** - Guide complet design system
- **04_development_best_practices.md** - Bonnes pratiques

---

## 🎯 Exemples

### Composant Simple
```css
.card {
  background-color: var(--surface);
  border-radius: var(--radius-lg);
  padding: var(--space-16);
  border: 1px solid var(--border);
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: var(--space-8);
}
```

### Composant avec Variants
```css
.button {
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
}

.button--primary {
  background-color: var(--brand);
  color: var(--brand-on);
}

.button--outline {
  background-color: transparent;
  border: 1px solid var(--border);
  color: var(--foreground);
}

.button--sm {
  padding: var(--space-4) var(--space-12);
  font-size: 0.875rem;
}

.button--lg {
  padding: var(--space-12) var(--space-24);
  font-size: 1.125rem;
}
```

### Composant Responsive
```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-16);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-24);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-32);
  }
}
```

---

## 🚀 Prochaines Étapes

### Court Terme
- ✅ Conversion complète terminée
- ✅ Documentation mise à jour
- ✅ Scripts d'automatisation créés
- ⏳ Tests visuels sur Ladle
- ⏳ Validation accessibilité

### Moyen Terme
- Pre-commit hooks pour bloquer Tailwind
- ESLint rules pour classes CSS
- Storybook avec tous les composants
- Tests automatisés CSS

### Long Terme
- Design tokens JSON
- Thème builder UI
- CSS-in-JS migration (si nécessaire)
- Performance monitoring

---

**Version:** 1.0.0  
**Date:** 2025-10-25  
**Statut:** ✅ Production Ready
