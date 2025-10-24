# AVNIR-Studio Core — Vue d'ensemble du repository

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


## TL;DR

Monorepo **Turborepo** + **pnpm workspaces**. Bibliothèques partagées :

- `@avnir/design` — Design tokens, thèmes (dark + semi-light), preset Tailwind.
- `@avnir/ui` — Bibliothèque centrale de composants (marketing, e-commerce, SaaS, primitives, layout, etc.).
- `@avnir/brandkit` — Assets/brand partagés exposés via composants (logos, OG, favicons).
- `@avnir/icons` — Icônes SVG en composants React (tree-shaking).

Applications :

- `apps/ladle` — Playground & docs de composants (consomme `@avnir/ui`).
- `apps/muzisystem` — Démo marketing / vitrine du Design System.

Qualité & CI : TypeScript strict, ESLint + Prettier, Vitest + RTL, Husky + lint-staged + commitlint, Changesets, GitHub Actions, déploiements Vercel (Node 20).

---

## Architecture

```
.
├─ apps/
│  ├─ ladle/                # stories + preview brand/theme
│  └─ muzisystem/          # démo marketing ; importe @avnir/ui
├─ packages/
│  ├─ design/              # tokens, themes.css, tailwind-preset.cjs
│  ├─ ui/                  # composants partagés (source of truth)
│  ├─ brandkit/            # BrandLogo, OG & favicons helpers
│  └─ icons/               # <Icon*> React components (SVGR)
├─ .github/workflows/ci.yml # typecheck → lint → test → build
├─ turbo.json              # graphe de pipeline
├─ package.json            # scripts workspaces
├─ eslint.config.mjs       # ESLint flat config
├─ .prettierrc             # règles de formatage
├─ .editorconfig / .gitattributes
└─ README.md
```

### Packages

#### `@avnir/design`

- `themes.css` : variables CSS (`:root`, `[data-theme]`, `[data-brand]`).
- **Semi-light** : `header`/`footer` restent dark ; surfaces & bg clairs.
- **Tailwind preset** : mapping couleurs↔tokens, échelles spacing/typo, utilitaires (`.container`).

#### `@avnir/ui`

- Dossiers : `primitives`, `layout`, `navigation`, `form`, `data-display`, `feedback`, `marketing`, `ecommerce`, `saas`, `system`, `overlay`, `templates`, `avnir`.
- Aucun asset embarqué ; les composants reçoivent `img | {src,alt} | className | variants`.
- Hooks : `useThemeBrand`, `useDisclosure`, `useMediaQuery`. Utils : `cx`, `a11y`.

#### `@avnir/brandkit`

- `<BrandLogo variant="full|icon" contrast="auto|light|dark" />`.
- Exporte éventuellement `ogImages`, `favicons`, helpers par marque.

#### `@avnir/icons`

- Icônes SVG → composants React.
- Tree-shakeable, `"sideEffects": false`.

### Apps

#### `apps/ladle`

- Stories par familles (importe **uniquement** `@avnir/ui`).
- `preview.tsx` : toolbar brand/theme (écrit `data-brand`/`data-theme` sur `<html>`).
- `@avnir/design/themes.css` importé une seule fois.

#### `apps/muzisystem`

- Pages marketing de démonstration.
- Convention `.container` + `py-12 md:py-16 lg:py-24`.

---

## Tooling & Qualité

- **TypeScript** strict (noUncheckedIndexedAccess, exactOptionalPropertyTypes, noImplicitOverride).
- **ESLint Flat** + **Prettier** au root.
- **Tests** : Vitest + React Testing Library (ex. Button/Modal).
- **A11y** : rôles ARIA, focus, contrastes (vérifié via Ladle).
- **CI** : GitHub Actions (Node 20, pnpm 9) → `typecheck`, `lint`, `test`, `build`.
- **Hooks Git** : Husky pre-commit (lint-staged) & commit-msg (commitlint).
- **Versioning** : Changesets (packages privés autorisés).
- **Déploiements** : Vercel, Node 20 forcé, caches activés.

---

## Scripts (root)

```json
{
  "dev:all": "turbo run dev --parallel --filter=apps/ladle --filter=apps/muzisystem",
  "typecheck": "turbo run typecheck",
  "lint": "eslint .",
  "format": "prettier --write .",
  "test": "turbo run test",
  "build": "turbo run build",
  "clean": "turbo run clean && rimraf node_modules .turbo",
  "changeset": "changeset",
  "version-packages": "changeset version",
  "release": "turbo run build --filter=@avnir/ui"
}
```

---

## Environnements & Assets

- `.env.example` par app → copier en `.env.local`.
- Assets lourds spécifiques app → `apps/<app>/public`.
- Logos/OG/favicons communs → `@avnir/brandkit`.
- Icônes SVG → `@avnir/icons`.

---

## Branches & PR

- Branches : `feat/*`, `fix/*`, `chore/*`, `docs/*`.
- PR Template + checklist (tests, a11y, tokens, screenshots).
- Preview Vercel par PR pour les apps.

---

## FAQ rapide

- **Changer une couleur globale ?** → `@avnir/design/themes.css`.
- **Modifier le style d'un composant ?** → `@avnir/ui`.
- **Ajouter un logo ?** → `@avnir/brandkit`.
- **Ajouter une icône ?** → `@avnir/icons`.
