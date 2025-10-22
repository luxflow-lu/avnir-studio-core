# AVNIR Studio Core

Monorepo Turborepo pour **AVNIR Studio** et ses applications satellites (MUZIDEV, MUZIPICS, MUZIWEB, etc.).

🚀 **Status**: Production-ready with complete DS showcase, automated releases, and Vercel deployments!

## 🏗️ Structure

```
avnir-studio-core/
├── apps/
│   ├── avnir-studio/    # Hub principal AVNIR
│   ├── muzidev/         # Site MUZIDEV
│   ├── muzipics/        # Site MUZIPICS
│   ├── docs/            # Documentation (Nextra)
│   └── ladle/           # Playground de composants (Ladle)
├── packages/
│   ├── design/          # Design tokens, thèmes CSS, preset Tailwind
│   ├── ui/              # Composants UI réutilisables
│   └── tokens/          # Build des tokens de design
├── features/            # Modules métier partagés
└── brandkit/            # Assets et chartes graphiques
```

## 🚀 Démarrage rapide

### Prérequis
- **Node.js 20.x**
- **pnpm 9.x**

### Installation

```bash
# Activer corepack (si pas déjà fait)
corepack enable

# Installer les dépendances
pnpm install

# Lancer tous les projets en mode dev
pnpm dev

# Ou lancer un projet spécifique
pnpm dev:ladle      # Playground de composants
pnpm dev:docs       # Documentation
```

### Build

```bash
# Build tous les packages et apps
pnpm build

# Build spécifique
pnpm build:ladle
pnpm build:docs
```

### Autres commandes

```bash
pnpm lint           # Lint tous les projets
pnpm typecheck      # Typecheck TypeScript
pnpm format         # Formatter avec Prettier
pnpm clean          # Nettoyer les artifacts et node_modules
```

## 🎨 Système de thèmes

### Design Tokens

Le package `@avnir/design` expose :
- **`themes.css`** : Variables CSS prêtes à l'emploi (exportable vers Webflow)
- **`tokens.json`** : Tokens en JSON
- **`tailwind-preset.cjs`** : Preset Tailwind
- **`brands.ts`** : Configuration des brands

### Thème Dark (par défaut)

```css
--bg: #0B0B0D
--surface: #141317
--text: #C5CCD6
--titles: #F4F4F4
--muted: #9CA3AF
--accent: #06E7C7
--primary: #FFD700  /* Change selon la brand */
```

### Thème Light (opt-in)

Appliquer `data-theme="light"` sur `<html>` :

```css
--bg: #F8F8F8
--surface: #FFFFFF
--text: #1F2937
--titles: #0B0B0D
--muted: #6B7280
```

**Note** : Dans le thème light, `<header>` et `<footer>` restent forcés en dark.

### Brands (via data-brand)

Seule la couleur `--primary` change selon la brand :

| Brand | data-brand | --primary |
|-------|------------|-----------|
| AVNIR Studio | `avnir-studio` | `#EDEDED` |
| MUZIDEV | `muzidev` | `#5CB9F2` |
| MUZIPICS | `muzipics` | `#FF2D55` |
| MUZIWEB | `muziweb` | `#9802EB` |
| MUZIMERCH | `muzimerch` | `#FF9D00` |
| MUZIBASE | `muzibase` | `#2FAD66` |
| MUZIMANAGER | `muzimanager` | `#FFD700` |

### Utilisation dans une app Next.js

```tsx
// app/layout.tsx ou providers.tsx
useEffect(() => {
  document.documentElement.setAttribute('data-brand', 'avnir-studio');
  // Optionnel : activer le thème light
  // document.documentElement.setAttribute('data-theme', 'light');
}, []);
```

### Utilisation sur Webflow

Importer directement `packages/design/themes.css` dans Webflow, puis définir les attributs :

```html
<html data-brand="muzidev" data-theme="light">
```

## 📦 Packages

### `@avnir/design`

Exports :
- `themes.css` - Variables CSS complètes
- `tailwind-preset.cjs` - Preset Tailwind
- `brands.ts` - Configuration des brands

### `@avnir/ui`

Composants React réutilisables (Button, Card, Navbar, Footer, etc.).

### `@avnir/tokens`

Build automatique des design tokens depuis les sources.

## 🛠️ Stack technique

- **Framework** : Next.js 14
- **Monorepo** : Turborepo
- **Package Manager** : pnpm 9
- **Styling** : Tailwind CSS + CSS Variables
- **TypeScript** : 5.6+
- **Playground** : Ladle (remplace Storybook)
- **Docs** : Nextra
- **CI/CD** : GitHub Actions

## 📝 Conventions

### Nommage des branches
- `feat/nom-feature`
- `fix/nom-bug`
- `chore/description`

### Commits
Format conventionnel recommandé :
```
type(scope): description

feat(ui): add new Button variants
fix(design): correct light theme contrast
chore(repo): update dependencies
```

## 🧪 CI/CD

GitHub Actions exécute automatiquement :
- ✅ Lint
- ✅ Typecheck
- ✅ Build

Voir `.github/workflows/ci.yml`

## 📚 Documentation

- **Design System** : `pnpm dev:ladle` → http://localhost:61000
- **Docs techniques** : `pnpm dev:docs` → http://localhost:3010
- **THEME.md** : Référence des tokens et thèmes

## ⚙️ Configuration

- **Node version** : `.nvmrc` (20)
- **Package manager** : `packageManager` dans `package.json`
- **Turborepo** : `turbo.json`
- **TypeScript** : `tsconfig.base.json` (config partagée)
- **ESLint** : `.eslintrc.json`
- **Prettier** : `.prettierrc`
- **EditorConfig** : `.editorconfig`

## 🤝 Contribution

1. Installer les dépendances : `pnpm i`
2. Créer une branche : `git checkout -b feat/ma-feature`
3. Développer et tester
4. Linter et formatter : `pnpm lint && pnpm format`
5. Commit et push
6. Créer une Pull Request

## 📄 Licence

MIT
