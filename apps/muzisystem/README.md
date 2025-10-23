# MUZISYSTEM - Design System Hub

MUZISYSTEM est le hub central du Design System AVNIR Studio, offrant une documentation complète des tokens, composants, et guidelines pour maintenir la cohérence visuelle à travers tout l'écosystème.

## 🚀 Lancement rapide

```bash
# Installation des dépendances
pnpm install

# Lancement en développement
pnpm dev:muzisystem

# Build de production
pnpm build:muzisystem
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173)

## 🎨 Fonctionnalités

### Theming & Brands

- **Multi-marques** : Support de 7 marques (AVNIR, MUZIDEV, MUZIPICS, etc.)
- **Thèmes adaptatifs** : Dark, Light, et System avec mode semi-light
- **Persistance** : Préférences sauvegardées dans localStorage
- **Switcher temps réel** : Changement instantané avec preview live

### Pages du Design System

#### 🏗️ Foundations (`#foundations`)

- **Typography Scale** : H1-H4, Body, Small avec familles de polices
- **Spacing Scale** : Tokens d'espacement de 2px à 64px
- **Border Radius** : Échelle d'arrondis de xs à full
- **Shadows** : 5 niveaux d'ombres
- **Z-Index** : Tokens pour drawer, modal, popover, toast
- **Motion** : Durées et easing functions avec tests interactifs
- **Focus Ring** : Démonstration de l'accessibilité globale

#### 🎨 Colors (`#colors`)

- **Palette par thème** : Couleurs adaptatives dark/light
- **Couleurs par marque** : Primaires spécifiques à chaque brand
- **On-colors** : Couleurs de texte sur surfaces
- **Contraste AA/AAA** : Vérification automatique des contrastes
- **Comparaison thèmes** : Vue côte à côte dark vs light
- **Guidelines accessibilité** : Standards WCAG

#### 🧩 Components (`#components`)

- **Galerie auto** : Tous les composants de `packages/ui`
- **Canvas hérité** : Prévisualisation avec brand/theme actuel
- **Pills de switch** : Changement live des variants/états
- **Catégories** : Primitives, Form, Data, Marketing, etc.

#### 📋 Guidelines (`#guidelines`)

- **Usage data-brand** : Configuration des marques
- **Patterns theming** : Semi-light et variables CSS
- **Accessibilité** : Focus visible, ARIA, contrastes
- **Conventions** : Props, naming, classes CSS

## 🏗️ Architecture

### Structure des fichiers

```
apps/muzisystem/
├── src/
│   ├── components/
│   │   ├── ThemeBrandProvider.tsx    # Context global theme/brand
│   │   ├── ThemeBrandSwitcher.tsx    # UI switcher avec preview
│   │   └── ...
│   ├── pages/
│   │   ├── Foundations.tsx           # Tokens de base
│   │   ├── Colors.tsx               # Palette et contrastes
│   │   ├── Components.tsx           # Galerie composants
│   │   ├── Guidelines.tsx           # Règles et bonnes pratiques
│   │   └── ...
│   ├── App.tsx                      # Router hash-based
│   ├── Provider.tsx                 # Wrapper ThemeBrandProvider
│   └── main.tsx                     # Entry point
├── tailwind.config.js               # Config Tailwind + preset
├── postcss.config.js               # PostCSS + Autoprefixer
└── package.json                    # Dépendances
```

### Configuration Tailwind

```js
// tailwind.config.js
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../../packages/ui/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@avnir/design/tailwind-preset.cjs")],
  // ... extensions pour on-colors, animations
};
```

## 🎯 Theming

### Configuration HTML

```html
<html data-brand="muzidev" data-theme="dark"></html>
```

### Marques disponibles

- `avnir` - AVNIR Studio (#EDEDED)
- `muzidev` - Formation (#5CB9F2)
- `muzipics` - Galerie (#FF2D55)
- `muziweb` - Sites web (#9802EB)
- `muzimerch` - E-commerce (#FF9D00)
- `muzibase` - Base de données (#2FAD66)
- `muzimanager` - Gestion (#FFD700)

### Mode Semi-light

En thème light, les headers/footers restent dark :

```jsx
<header data-force-dark>...</header>
<footer data-force-dark>...</footer>
```

### Variables CSS dynamiques

```css
/* Couleurs de base */
var(--bg)       /* Arrière-plan */
var(--surface)  /* Surfaces (cartes) */
var(--text)     /* Texte principal */
var(--titles)   /* Titres */
var(--muted)    /* Texte secondaire */

/* Couleurs d'action */
var(--primary)     /* Couleur de marque */
var(--accent)      /* Liens, focus */
var(--on-primary)  /* Texte sur primary */
var(--on-surface)  /* Texte sur surface */
var(--on-accent)   /* Texte sur accent */
```

## 🔧 Développement

### Ajout d'une nouvelle page

1. Créer le composant dans `src/pages/`
2. Ajouter l'import dans `App.tsx`
3. Ajouter le case dans `renderPage()`
4. Utiliser les classes CSS du design system

### Ajout d'un nouveau token

1. Modifier `packages/design/themes.css`
2. Mettre à jour `packages/design/tailwind-preset.cjs`
3. Documenter dans la page Foundations

### Structure des pages

```jsx
export const MaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header avec data-force-dark pour semi-light */}
      <header data-force-dark className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
        {/* ... */}
      </header>

      <main className="container mx-auto px-6 py-8 space-y-16">
        {/* Contenu */}
      </main>

      {/* Footer avec data-force-dark */}
      <footer data-force-dark className="border-t border-border bg-surface">
        {/* ... */}
      </footer>
    </div>
  );
};
```

## 🎨 Accessibilité

### Focus Ring global

```css
*:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Contrastes requis

- **AAA** : ≥ 7:1 (idéal)
- **AA** : ≥ 4.5:1 (minimum WCAG)
- **FAIL** : < 4.5:1 (non conforme)

### Rôles ARIA

```jsx
<nav role="navigation" aria-label="Navigation principale">
<button aria-expanded="false" aria-controls="menu">
<div role="alert" aria-live="polite">
```

## 🚀 Déploiement

### Build Local

```bash
# Build optimisé
pnpm -w --filter ./apps/muzisystem run build

# Preview du build (si disponible)
pnpm -w --filter ./apps/muzisystem run start
```

### Déploiement Vercel

#### Configuration

Le projet est configuré avec `vercel.json` :

```json
{
  "buildCommand": "pnpm -w --filter ./apps/muzisystem run build",
  "installCommand": "pnpm -w install --frozen-lockfile",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

#### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

#### Déploiement

1. Connecter le repo à Vercel
2. Sélectionner le dossier `apps/muzisystem` comme root directory
3. Vercel détectera automatiquement la configuration
4. Déployer automatiquement sur chaque push vers `main`

## 🤝 Contribution

1. **Tokens** : Modifier `packages/design/themes.css`
2. **Composants** : Ajouter dans `packages/ui/src/components/`
3. **Documentation** : Mettre à jour les pages correspondantes
4. **Tests** : Vérifier le theming et l'accessibilité

## 📚 Ressources

- [Figma Kit](https://figma.com/avnir-design-system)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**MUZISYSTEM** - Le hub central du Design System AVNIR Studio 🎨✨
