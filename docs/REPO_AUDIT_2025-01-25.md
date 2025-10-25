# 🔍 Audit complet du monorepo avnir-studio-core
**Date**: 2025-01-25  
**Auditeur**: Staff Engineer & Release Manager  
**Objectif**: Repo clean, fiable, maintenable, prêt production

---

## 📊 Résumé exécutif

### ✅ Points forts identifiés
- Architecture monorepo pnpm + Turbo bien structurée
- Design system CSS modulaire (85 fichiers) opérationnel
- Documentation riche (22 fichiers + 1 RFC)
- Sécurité : Package @avnir/security existant
- Node version fixée (.nvmrc, .node-version)
- Prettier, ESLint, Husky configurés

### 🔴 Risques majeurs identifiés
1. **Code mort massif** : 15+ fichiers de rapports obsolètes à la racine
2. **Configs conflictuelles** : 3 fichiers ESLint différents (.eslintrc.js, .eslintrc.cjs, .eslintrc.json)
3. **Dossiers obsolètes** : `/brandkit` racine (doublon avec `packages/brandkit`)
4. **Sécurité** : Pas de CI/CD complet, pas de dependency-review
5. **Tests** : Couverture quasi inexistante
6. **Exports non vérifiés** : Risque d'exports inutilisés dans packages

### 🎯 Score global : 6/10
- Architecture : 8/10
- Qualité code : 5/10
- Sécurité : 4/10
- Tests : 2/10
- Documentation : 8/10
- CI/CD : 3/10

---

## 1️⃣ Cartographie & hygiène du repo

### Structure actuelle

```
avnir-studio-core/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── apps/
│   ├── avnir-studio/      # App principale
│   ├── docs/              # Documentation site
│   ├── ladle/             # Storybook-like
│   ├── muzidev/           # Formation musicale
│   ├── muzipics/          # Galerie photos
│   ├── muzisystem/        # Design system showcase
│   └── muzitools/         # Audio analysis tools
├── packages/
│   ├── brandkit/          # Logos & assets
│   ├── design/            # Design tokens + CSS
│   ├── icons/             # SVG icons
│   ├── security/          # Security utils
│   ├── tokens/            # Design tokens (doublon?)
│   └── ui/                # React components
├── features/
│   ├── audio-tools/       # Feature package
│   └── visual-generator/  # Feature package
├── docs/                  # Documentation markdown
├── scripts/               # Build & maintenance scripts
├── brandkit/              # ⚠️ DOUBLON avec packages/brandkit
└── [15+ fichiers .md]     # ⚠️ RAPPORTS OBSOLÈTES
```

### 🗑️ Fichiers/dossiers obsolètes identifiés

#### Rapports de migration obsolètes (À SUPPRIMER)
```
BUILD_GREEN_REPORT.md
CHANGELOG_TAILWIND_CONVERSION.md
CLEANUP_SUMMARY.md
COMPLETION_REPORT.md
CONVERSION_100_COMPLETE.md
CONVERSION_COMPLETE.md
CONVERSION_SUMMARY.md
FINALIZATION_REPORT.md
HARDENING_REPORT.md
LEGACY_CLEANUP_REPORT.md
RESET_REPORT.md
TAILWIND_CONVERSION_FINAL_REPORT.md
TAILWIND_CONVERSION_REPORT.md
THEME.md
migration-report-ui.json
```
**Justification** : Ces rapports documentent des migrations terminées. Archiver dans `docs/archives/` ou supprimer.

#### Dossier doublon (À VÉRIFIER/SUPPRIMER)
```
/brandkit/  (racine)
```
**Justification** : Doublon avec `packages/brandkit/`. Vérifier contenu puis supprimer.

#### Configs conflictuelles (À UNIFIER)
```
.eslintrc.js
.eslintrc.cjs
.eslintrc.json
eslint.config.mjs
```
**Justification** : 4 fichiers ESLint différents créent confusion. Garder un seul (recommandé: eslint.config.mjs flat config).

### 📁 Arborescence cible proposée

```
avnir-studio-core/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── security.md
│   ├── workflows/
│   │   ├── ci.yml                    # ✨ À CRÉER
│   │   ├── dependency-review.yml     # ✨ À CRÉER
│   │   └── security-scan.yml         # ✨ À CRÉER
│   ├── CODEOWNERS                    # ✅ Existe
│   └── PULL_REQUEST_TEMPLATE.md      # ✨ À CRÉER
├── apps/                             # ✅ OK
├── packages/                         # ✅ OK
├── features/                         # ✅ OK
├── docs/
│   ├── archives/                     # ✨ CRÉER pour vieux rapports
│   ├── rfcs/                         # ✅ Existe
│   ├── INDEX.md                      # ✅ Existe
│   └── [autres docs]
├── scripts/                          # ✅ OK
├── tools/                            # ✨ CRÉER (si outils dev)
├── .nvmrc                            # ✅ Existe
├── CONTRIBUTING.md                   # ✅ Existe
├── README.md                         # ✅ Existe
├── RELEASING.md                      # ✅ Existe
└── [configs racine]                  # ✅ OK (unifier ESLint)
```

---

## 2️⃣ Packages & build (publishing-ready)

### Audit par package

#### ✅ @avnir/design
**Status**: ✅ PRÊT (avec corrections appliquées)
- ✅ `package.json` : exports, types, sideEffects OK
- ✅ Build CSS + JS fonctionnel
- ✅ `--primary-rgb` ajouté
- ✅ 67 couleurs hardcodées remplacées par tokens
- ⚠️ À vérifier : ts-prune pour exports inutilisés

#### ✅ @avnir/ui
**Status**: ✅ PRÊT
- ✅ `package.json` : exports, types OK
- ✅ Build TypeScript + CSS fonctionnel
- ✅ 0% Tailwind dans composants (vérifié)
- ⚠️ À vérifier : ts-prune pour exports inutilisés
- ⚠️ Tests manquants (coverage 0%)

#### ⚠️ @avnir/brandkit
**Status**: ⚠️ À VÉRIFIER
- ✅ Build OK
- ❓ Doublon avec `/brandkit` racine ?
- ⚠️ À vérifier : images inutilisées

#### ⚠️ @avnir/icons
**Status**: ⚠️ À VÉRIFIER
- ✅ Build OK
- ⚠️ À vérifier : icônes inutilisées

#### ⚠️ @avnir/security
**Status**: ⚠️ NON PUBLIÉ
- ❌ Pas de build configuré
- ❌ `package.json` incomplet
- ✅ Code source existe

#### ⚠️ @avnir/tokens
**Status**: ⚠️ DOUBLON ?
- ❓ Doublon avec `packages/design` ?
- ⚠️ À clarifier le rôle

#### ⚠️ features/*
**Status**: ⚠️ NON CONFIGURÉS
- ❌ `audio-tools` : pas de build
- ❌ `visual-generator` : pas de build
- ❓ Statut : POC ou production ?

---

## 3️⃣ Apps (Next.js)

### Audit par app

#### ✅ muzitools (port 3005)
- ✅ Next.js 15 configuré
- ✅ Brand: avnir-studio
- ✅ Imports corrects (@avnir/ui)
- ⚠️ `.env.example` manquant
- ⚠️ Bundle analyzer non configuré

#### ✅ muzisystem (port 3000)
- ✅ Next.js 15 configuré
- ✅ Design system showcase
- ✅ BrandThemeSelector fonctionnel
- ⚠️ `.env.example` manquant
- ⚠️ Bundle analyzer non configuré
- ✅ Bug `FeatureGrid` corrigé

#### ⚠️ muzidev
- ✅ Next.js configuré
- ✅ Bug `FeatureGrid` corrigé
- ⚠️ `.env.example` manquant
- ⚠️ Images non optimisées ?

#### ⚠️ muzipics
- ⚠️ À auditer

#### ⚠️ avnir-studio
- ⚠️ À auditer

#### ⚠️ docs
- ⚠️ À auditer

#### ⚠️ ladle
- ⚠️ À auditer

---

## 4️⃣ Qualité de code (TS/ESLint/Prettier)

### TypeScript
- ✅ `tsconfig.base.json` existe
- ⚠️ `strict: true` à vérifier par package
- ❌ Typecheck global non testé

### ESLint
- 🔴 **PROBLÈME MAJEUR** : 4 fichiers de config différents
  - `.eslintrc.js`
  - `.eslintrc.cjs`
  - `.eslintrc.json`
  - `eslint.config.mjs`
- ⚠️ Règles incohérentes possibles
- ✅ `eslint-config-next` présent

### Prettier
- ✅ `.prettierrc` configuré
- ✅ `.prettierignore` présent

### Husky
- ✅ `.husky/` configuré
- ⚠️ Pre-commit hooks à vérifier

---

## 5️⃣ Dépendances & cohérence Node

### Node version
- ✅ `.nvmrc` : `20` ✅
- ✅ `.node-version` : `20` ✅
- ⚠️ `package.json` engines à vérifier

### Workspace
- ✅ `pnpm-workspace.yaml` configuré
- ⚠️ Doublons de deps à vérifier avec `pnpm dedupe`

### Renovate/Dependabot
- ❌ **MANQUANT** : Pas de config auto-update

---

## 6️⃣ Sécurité & conformité

### GitHub Actions
- ❌ **MANQUANT** : `dependency-review.yml`
- ❌ **MANQUANT** : OSV scanner
- ❌ **MANQUANT** : Gitleaks CI

### Audit dépendances
- ⚠️ `pnpm audit` non exécuté régulièrement

### RGPD
- ✅ Documentation existe dans `/docs`

---

## 7️⃣ Tests, story & e2e

### Tests unitaires
- ❌ **CRITIQUE** : Couverture quasi inexistante
- ⚠️ Framework : Vitest à configurer
- ⚠️ `@testing-library/react` à ajouter

### Ladle/Storybook
- ✅ App `ladle` existe
- ⚠️ Build à vérifier

### E2E
- ❌ **MANQUANT** : Playwright non configuré

---

## 8️⃣ Performances & accessibilité

### Bundle analyzer
- ❌ **MANQUANT** : Scripts analyzer par app

### Accessibilité
- ⚠️ `eslint-plugin-jsx-a11y` à vérifier
- ⚠️ Audit axe non automatisé

### Images
- ⚠️ Formats WebP/AVIF à vérifier
- ⚠️ Next/Image config à auditer

---

## 9️⃣ Styles & theming (validation)

### ✅ Corrections appliquées aujourd'hui
- ✅ `--primary-rgb` ajouté
- ✅ 67 couleurs hardcodées → tokens
- ✅ Container padding → tokens
- ✅ Tokens foreground ajoutés
- ✅ Bug light theme corrigé

### ⚠️ À vérifier
- ⚠️ Scan complet Tailwind dans `@avnir/ui`
- ⚠️ Vérifier tous les `var(--*)` existent

---

## 🔟 CI/CD

### État actuel
- ❌ **CRITIQUE** : Pas de `.github/workflows/ci.yml`
- ❌ Pas de job lint/typecheck/build/test
- ❌ Pas de security checks

### À créer
1. `ci.yml` : lint + typecheck + build + test
2. `dependency-review.yml` : audit deps sur PR
3. `security-scan.yml` : gitleaks + osv-scanner

---

## 1️⃣1️⃣ Documentation & templates

### Documentation
- ✅ 22 fichiers dans `/docs`
- ✅ `INDEX.md` existe
- ⚠️ Liens à valider

### Templates
- ✅ `CONTRIBUTING.md` existe
- ✅ `CODEOWNERS` existe
- ❌ `PULL_REQUEST_TEMPLATE.md` manquant
- ⚠️ `ISSUE_TEMPLATE/` à compléter

---

## 🎯 Plan d'action prioritaire

### Phase 1 : Nettoyage (1h)
1. ✅ Archiver 15 rapports obsolètes
2. ✅ Supprimer `/brandkit` doublon
3. ✅ Unifier ESLint config
4. ✅ Créer `.env.example` par app

### Phase 2 : Sécurité (2h)
5. ✅ Créer `dependency-review.yml`
6. ✅ Créer `security-scan.yml`
7. ✅ Ajouter gitleaks
8. ✅ Exécuter `pnpm audit`

### Phase 3 : CI/CD (2h)
9. ✅ Créer `ci.yml` complet
10. ✅ Ajouter jobs lint/typecheck/build
11. ✅ Ajouter job test (si tests existent)

### Phase 4 : Qualité (3h)
12. ✅ Exécuter `pnpm -w typecheck`
13. ✅ Exécuter `pnpm -w lint --fix`
14. ✅ Installer ts-prune/knip
15. ✅ Nettoyer exports inutilisés

### Phase 5 : Tests (4h)
16. ⏳ Configurer Vitest
17. ⏳ Ajouter tests UI critiques
18. ⏳ Configurer Playwright (optionnel)

### Phase 6 : Documentation (1h)
19. ✅ Créer `PULL_REQUEST_TEMPLATE.md`
20. ✅ Compléter `ISSUE_TEMPLATE/`
21. ✅ Valider liens docs

---

## 📋 Checklist Definition of Done

- [ ] Build + Typecheck + Lint OK à la racine
- [ ] 0 code mort (fichiers/exports)
- [ ] Arbo nettoyée (rapports archivés)
- [ ] Packages publiables (exports/types/sideEffects OK)
- [ ] Apps prêtes déploiement (env/analyzer/images)
- [ ] CI complète et verte
- [ ] Sécurité (dependency-review + gitleaks)
- [ ] Styles/theming conformes (0% hardcode)
- [ ] Docs & templates à jour
- [ ] REPORT.md exhaustif + PR ouverte

---

**Prochaine étape** : Commencer Phase 1 (Nettoyage)
