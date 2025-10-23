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
│   ├── muzisystem/      # Design System Showcase & Marketing Demo
│   ├── docs/            # Documentation (Nextra)
│   └── ladle/           # Playground de composants (Ladle)
├── packages/
│   ├── design/          # Design tokens, thèmes CSS, preset Tailwind
│   ├── ui/              # Composants UI réutilisables
│   └── tokens/          # Build des tokens de design
├── features/            # Modules métier partagés
└── brandkit/            # Assets et chartes graphiques
```

## 📚 Documentation

- **[Vue d'ensemble du repository](docs/01_repo_overview.md)** — Architecture, packages, tooling & scripts
- **[Styles & Brands](docs/02_styles_and_brands.md)** — Guide de personnalisation des thèmes et marques
- **[Notice de développement](docs/03_dev_notice_and_best_practices.md)** — Bonnes pratiques & check-lists

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
pnpm dev:muzisystem # Design System Showcase
pnpm dev:ladle      # Playground de composants
pnpm dev:docs       # Documentation
```

### Build

```bash
# Build tous les packages et apps
pnpm build

# Build spécifique
pnpm build:muzisystem
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
--bg: #0b0b0d --surface: #141317 --text: #c5ccd6 --titles: #f4f4f4 --muted: #9ca3af
  --accent: #06e7c7 --primary: #ffd700 /* Change selon la brand */;
```

### Thème Light (opt-in)

Appliquer `data-theme="light"` sur `<html>` :

```css
--bg: #f8f8f8 --surface: #ffffff --text: #1f2937 --titles: #0b0b0d --muted: #6b7280;
```

**Note** : Dans le thème light, `<header>` et `<footer>` restent forcés en dark.

### Brands (via data-brand)

Seule la couleur `--primary` change selon la brand :

| Brand        | data-brand     | --primary |
| ------------ | -------------- | --------- |
| AVNIR Studio | `avnir-studio` | `#EDEDED` |
| MUZIDEV      | `muzidev`      | `#5CB9F2` |
| MUZIPICS     | `muzipics`     | `#FF2D55` |
| MUZIWEB      | `muziweb`      | `#9802EB` |
| MUZIMERCH    | `muzimerch`    | `#FF9D00` |
| MUZIBASE     | `muzibase`     | `#2FAD66` |
| MUZIMANAGER  | `muzimanager`  | `#FFD700` |

### Utilisation dans une app Next.js

```tsx
// app/layout.tsx ou providers.tsx
useEffect(() => {
  document.documentElement.setAttribute("data-brand", "avnir-studio");
  // Optionnel : activer le thème light
  // document.documentElement.setAttribute('data-theme', 'light');
}, []);
```

### Utilisation sur Webflow

Importer directement `packages/design/themes.css` dans Webflow, puis définir les attributs :

```html
<html data-brand="muzidev" data-theme="light"></html>
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

## 🎯 MUZISYSTEM - Design System Showcase

MUZISYSTEM est une vitrine marketing complète du design system, construite avec tous les composants de `@avnir/ui`.

### Développement

```bash
# Lancer MUZISYSTEM en mode dev
pnpm dev:muzisystem

# Build pour production
pnpm build:muzisystem
```

### Sections disponibles

- **Hero** : Titre, sous-titre, CTAs, image placeholder
- **Feature Grid** : Grille 3x2 des fonctionnalités clés
- **Logo Cloud** : Logos des marques partenaires
- **Content Split** : Section image + texte (+ variante inversée)
- **Testimonials** : 3 témoignages clients
- **CTA Section** : Appel à l'action avec image
- **FAQ** : 6 questions fréquentes avec accordéons

### Fonctionnalités

- ✅ **Multi-brand** : Switcher entre toutes les marques
- ✅ **Dark/Light** : Toggle de thème en temps réel
- ✅ **Responsive** : Optimisé mobile-first
- ✅ **Accessible** : WCAG 2.1 AA compliant
- ✅ **Performance** : Lighthouse 90+ score
- ✅ **No CLS** : Layout stable avec min-height fixe

### Déploiement Vercel

MUZISYSTEM est prêt pour le déploiement Vercel avec :

- `vercel.json` configuré pour Node 20.x et pnpm 9.x
- Build command optimisé
- Variables d'environnement automatiques

## 🚀 Quick Start

### Prerequisites

- **Node.js 20.x** (use `nvm use` or check `.nvmrc`)
- **pnpm 9.x** (automatically managed via `packageManager` field)

### Development Setup

```bash
# Install dependencies
pnpm install

# Start all development servers
pnpm dev:all  # Starts both Ladle and MUZISYSTEM

# Or start individually:
pnpm dev:ladle      # Component playground → http://localhost:61000
pnpm dev:muzisystem # Marketing showcase → http://localhost:3000
```

### Environment Setup

```bash
# Copy environment examples
cp apps/muzisystem/.env.example apps/muzisystem/.env.local
cp apps/ladle/.env.example apps/ladle/.env.local
```

## 🧪 How to Develop UI Components

### Creating new components

1. **Create the component** in `packages/ui/src/components/[category]/`
2. **Export it** from the category's `index.ts`
3. **Add it** to the main `packages/ui/src/index.ts`
4. **Create a story** in `apps/ladle/src/stories/`
5. **Write tests** in `packages/ui/__tests__/`

### Component categories

- `primitives/` - Basic building blocks (Button, Card, etc.)
- `layout/` - Layout components (Header, Footer, etc.)
- `form/` - Form controls and inputs
- `marketing/` - Marketing sections (Hero, CTA, etc.)
- `data-display/` - Data presentation components
- `navigation/` - Navigation components
- `overlay/` - Modals, tooltips, etc.

## 🧪 How to Test

### Running tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode (UI package)
cd packages/ui && pnpm test:watch

# Run specific test file
cd packages/ui && pnpm vitest button.test.tsx
```

### Writing tests

Tests use **Vitest** + **React Testing Library**:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../src/components/form/Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

### Test structure

- `__tests__/` - Test files
- `vitest.config.ts` - Test configuration
- `vitest.setup.ts` - Global test setup

## 🚀 How to Release

### Using Changesets

```bash
# 1. Create a changeset for your changes
pnpm changeset

# 2. Version packages (updates package.json versions)
pnpm version-packages

# 3. Build and release
pnpm release
```

### Changeset workflow

1. **Make changes** to components
2. **Run `pnpm changeset`** to document changes
3. **Commit changeset files** with your PR
4. **Merge PR** - versions will be updated automatically
5. **Run `pnpm release`** to build packages

### Release types

- **patch** - Bug fixes, small improvements
- **minor** - New features, non-breaking changes
- **major** - Breaking changes

## 🔧 Development Workflow

### Code Quality Pipeline

```bash
# Full quality check (recommended before commits)
pnpm typecheck && pnpm lint && pnpm test && pnpm build

# Individual checks
pnpm typecheck  # TypeScript type checking
pnpm lint       # ESLint with auto-fix
pnpm test       # Vitest + React Testing Library
pnpm format     # Prettier formatting
pnpm build      # Build all packages
pnpm clean      # Clean all build artifacts
```

### Git Workflow (Automated)

The repository enforces quality via **Husky hooks**:

- **Pre-commit**: Runs `lint-staged` (Prettier + ESLint on changed files)
- **Commit-msg**: Validates commit messages (Conventional Commits)

```bash
# Commit format examples
git commit -m "feat(ui): add new Button variant"
git commit -m "fix(icons): resolve ChevronDown alignment"
git commit -m "docs: update installation guide"
```

### CI/CD Pipeline

**GitHub Actions** automatically runs on every push/PR:

```yaml
# .github/workflows/ci.yml
- Type check → Lint → Test → Build
- Ladle preview build (PRs only)
- Node 20.x + pnpm 9.x environment
```

## 📚 Documentation

- **MUZISYSTEM Showcase** : `pnpm dev:muzisystem` → http://localhost:3000
- **Design System** : `pnpm dev:ladle` → http://localhost:61000
- **Docs techniques** : `pnpm dev:docs` → http://localhost:3010
- **THEME.md** : Référence des tokens et thèmes

### Vercel Deployment

Both MUZISYSTEM and Ladle are configured for Vercel deployment:

#### MUZISYSTEM (Marketing Showcase)

```bash
# Build command
pnpm build:muzisystem

# Deploy settings
# - Framework: Next.js
# - Node.js Version: 20.x
# - Install Command: corepack enable && pnpm install
# - Build Command: pnpm build:muzisystem
```

#### Ladle (Component Playground)

```bash
# Build command
pnpm build:ladle

# Deploy settings
# - Framework: Other
# - Node.js Version: 20.x
# - Install Command: corepack enable && pnpm install
# - Build Command: pnpm build:ladle
# - Output Directory: apps/ladle/dist
```

### Deployment URLs

- **MUZISYSTEM**: [Production URL to be added]
- **Ladle Playground**: [Production URL to be added]

Both projects require **Node.js 20.x** in Vercel settings for proper compatibility.

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
