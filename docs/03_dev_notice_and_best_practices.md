# Notice de développement & Bonnes pratiques (pour Windsurf & co.)

**Objectif :** garantir un dev propre, cohérent, maintenable et des mises en prod sans surprise.

---

## 0) Principes clés

- **Source of truth** des composants = `@avnir/ui`. Pas de doublons dans les apps.
- **Tokens > composants** : les styles globaux se changent dans `@avnir/design`.
- **Aucune couleur hardcodée** : toujours `rgb(var(--token))`.
- **Semi-light** : header/footer restent dark.
- **Accessibilité** : focus, contrastes, ARIA.

---

## 1) Créer une nouvelle app

1. **Scaffold** `apps/<app>` (Next App Router recommandé).
2. **`tailwind.config.cjs` :**
   ```js
   module.exports = {
     presets: [require("@avnir/design/tailwind-preset.cjs")],
     content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
   };
   ```
3. **Importer** `@avnir/design/themes.css` une fois (layout racine).
4. **Provider** brand/theme (`data-brand="avnir-studio"`, `data-theme="dark"` par défaut).
5. **Assets spécifiques** → `apps/<app>/public`.

### Prompt Windsurf

```
Create apps/<APP> (Next App Router). Wire Tailwind preset from @avnir/design, include ../../packages/ui in content, import themes.css once, and add a brand/theme provider on <html>.
```

---

## 2) Créer une page/section avec @avnir/ui

- Toujours `.container` + `py-12 md:py-16 lg:py-24`.
- Uniquement des imports `@avnir/ui`.

### Prompt Windsurf

```
In apps/<APP>, create src/app/<ROUTE>/page.tsx using components from "@avnir/ui": <liste>.
Respect container and spacing conventions; no local components; tokens only.
```

---

## 3) Créer un nouveau composant UI

1. **Fichier** dans `packages/ui/src/components/<famille>/<Nom>.tsx`.
2. **Expose** `className` (+ `slotClassNames` si nécessaire).
3. **Variants** via `cva` (ex. `size/scheme/variant`).
4. **Ajouter** une story Ladle + 1 test RTL minimal.
5. **Exporter** dans `index.ts` de la famille + `src/index.ts` racine.

### Prompt Windsurf

```
In @avnir/ui, add <Family>/<Name>.tsx with Tailwind + tokens (no hard-coded colors), cva variants, className pass-through.
Add a Ladle story and a RTL test in packages/ui/__tests__.
Export it in family index and root index.
```

---

## 4) Revue complète avant push

1. **`pnpm typecheck && pnpm lint && pnpm test && pnpm -w build`**
2. **Ladle :** rendu dark + semi-light + chaque brand.
3. **Lighthouse** (MUZISYSTEM) ≥ 90 ; zéro CLS (réserve les zones d'images).
4. **A11y :** ordre de tabulation, Escape sur Modal/Drawer, labels des champs.
5. **Doc :** README/MDX/stories à jour si API publique modifiée.

### Prompt Windsurf

```
Run the full quality pipeline (typecheck, lint, test, build). Fix a11y issues (focus/aria), prevent CLS by reserving image sizes, and update docs if public APIs changed.
```

---

## 5) Clean code & conventions

- **Messages** Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
- **Pas d'imports circulaires** ; éviter les `any` non justifiés.
- **Extraire la logique** en hooks/utils ; composants = présentations + petits états locaux.
- **Props explicites** > contexte implicite.
- **Pas de code mort**, ni TODO persistants en prod.

---

## 6) Journal des modifications (Changesets)

- **Chaque feature/fix UI** → 1 changeset.
- **Regrouper** les petites retouches style en un seul changeset si besoin.

**Exemples :**

- `feat(ui): add PricingTable yearly toggle`
- `fix(ui): Modal focus trap on open`
- `chore(design): adjust on-surface contrast`

---

## 7) Audit global périodique

**Mensuel :**

- **MAJ deps** (Renovate/Dependabot).
- **Lighthouse** MUZISYSTEM.
- **Scans a11y** (axe) sur stories clés.
- **Dead code** & bundle size report.
- **Vérif cohérence** brands/tokens (doc mise à jour).

### Prompt Windsurf

```
Run a monthly audit: deps update PRs, Lighthouse on MUZISYSTEM, axe a11y on key stories, remove dead code, and regenerate a bundle size report. Output findings in AUDIT.md.
```

---

## 8) Garde-fous production

- **Vercel** Node 20.
- **Secrets** par env (Preview/Prod).
- **Interdiction** de push direct sur main (PR + CI verte requises).
- **Rollback facile** (tags de release, previews).
- **Logs d'erreurs** (Sentry/console structurée si besoin).

---

## 9) Check-lists rapides

### PR Checklist

- ✅ Typecheck/Lint/Test/Build OK
- ✅ A11y OK (roles, focus, contrast)
- ✅ Zéro CLS (images/sections)
- ✅ Pas de couleurs hardcodées
- ✅ Docs/Stories/Changeset à jour
- ✅ Screenshots/Preview link

### Nouveau composant

- ✅ Fichier + export famille + export racine
- ✅ Story Ladle (Controls)
- ✅ Test RTL
- ✅ Tokens only
- ✅ Variants (cva) + className

### MAJ styles

- ✅ Tokens modifiés (`@avnir/design`)
- ✅ Semi-light intact
- ✅ Contrastes conformes
- ✅ Doc mise à jour
- ✅ Changeset créé
