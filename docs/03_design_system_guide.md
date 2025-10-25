# Styles & Brands — Guide de personnalisation

<!-- METADATA -->
<!-- Version: 2.0.0 -->
<!-- Last Updated: 2025-10-25 -->
<!-- Last Validated: 2025-10-25 -->
<!-- Next Review: 2025-11-24 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Objectif :** Guide complet du Design System CSS modulaire AVNIR.

---

## 🎯 Architecture CSS Modulaire

**Conversion complète Tailwind → CSS terminée le 2025-10-25**

### Politique Tailwind

**Composants `@avnir/ui`** : 100% CSS pur via design tokens. Aucune classe Tailwind dans les composants.

**Applications** : Tailwind autorisé via utilitaires mappés aux tokens CSS fournis par `@avnir/design/tailwind-preset.cjs`. Toute couleur/espacement/typo doit provenir des tokens (ex: `var(--primary)`, `var(--space-16)`, etc.).

### Structure
```
packages/design/
├── themes.css (variables + base)
├── src/
│   ├── index.css (point d'entrée)
│   └── components/
│       ├── avnir/ (8 fichiers)
│       ├── data-display/ (8 fichiers)
│       ├── ecommerce/ (7 fichiers)
│       ├── form/ (10 fichiers)
│       ├── layout/ (7 fichiers)
│       ├── marketing/ (12 fichiers)
│       ├── navigation/ (4 fichiers)
│       ├── overlay/ (5 fichiers)
│       ├── saas/ (9 fichiers)
│       └── system/ (7 fichiers)
└── dist/
    └── index.min.css
```

**85 fichiers CSS modulaires** pour une architecture scalable.

---

## 1) Moteur de thèmes

Couleurs via variables CSS dans `@avnir/design/themes.css`.

**Sélecteurs :**

- `:root` — valeurs par défaut.
- `html[data-theme="dark" | "light"]` — variations par thème.
- `html[data-brand="<brand>"]` — variations par marque (primary, accents).

### Variables clés (exemples)

```css
:root {
  --bg: 14 17 22;
  --surface: 20 23 28;
  --on-surface: 237 237 237;
  --primary: 92 185 242; /* par défaut */
  --on-primary: 14 17 22;
  --success: 16 185 129;
  --warning: 245 158 11;
  --danger: 239 68 68;
}

html[data-theme="light"] {
  --bg: 248 248 248;
  --surface: 255 255 255;
  --on-surface: 20 19 23;
  /* header/footer restent dark via layer components */
}

html[data-brand="muzidev"] {
  --primary: 92 185 242;
}
html[data-brand="muzipics"] {
  --primary: 255 45 85;
}
html[data-brand="muziweb"] {
  --primary: 152 2 235;
}
html[data-brand="muzimerch"] {
  --primary: 255 157 0;
}
html[data-brand="muzibase"] {
  --primary: 47 173 102;
}
html[data-brand="muzimanager"] {
  --primary: 6 231 199;
}
html[data-brand="promozic"] {
  --primary: 255 215 0;
}
```

**Stockage `r g b`** pour compatibilité avec `rgb()` et `color-mix()`.

### Utilisation dans CSS

```css
.ma-classe {
  background-color: rgb(var(--surface));
  color: rgb(var(--on-surface));
}

.btn-primary {
  background-color: var(--primary);
  color: var(--brand-on);
}
```

---

## 2) Variables d'Espacement

### Tokens disponibles
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

### Classes utilitaires
- **Sections :** `.section`, `.section--sm`, `.section--md`, `.section--lg`
- **Container :** `.container` (max-width + padding responsive)
- **Grids :** `.grid-1`, `.grid-2`, `.grid-3`
- **Flex :** `.flex-row`, `.flex-col`, `.flex-center`, `.flex-between`
- **Spacing :** `.gap-2`, `.gap-4`, `.p-4`, `.mb-4`

---

## 3) Typographie

### Variables
```css
--font-sans: system-ui, -apple-system, sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Classes disponibles
- **Tailles :** `.text-xs`, `.text-sm`, `.text-lg`, `.text-xl`, `.text-3xl`
- **Poids :** `.font-medium`, `.font-semibold`, `.font-bold`
- **Couleurs :** `.text-foreground`, `.text-muted`, `.text-brand`
- **Alignement :** `.text-center`, `.text-left`, `.text-right`

---

## 4) États & Feedback

### Variables de couleurs
```css
--success: 16 185 129;
--warning: 245 158 11;
--destructive: 239 68 68;
--info: 59 130 246;
```

### Classes disponibles
- **Texte :** `.text-success`, `.text-warning`, `.text-destructive`
- **Background :** `.bg-success`, `.bg-warning`, `.bg-destructive`
- **Bordures :** `.border-success`, `.border-warning`, `.border-destructive`

### Composants
- `<Alert variant="success|warning|error|info" />`
- `<Toast variant="success|error" />`
- `<Badge variant="success|warning|error" />`

---

## 5) Composants Layout

### Navbar & Footer
- **Transparents par défaut** : héritent de `--bg`
- **Responsive** : menu hamburger sur mobile
- **Classes :** `.navbar`, `.navbar-link`, `.footer`, `.footer-section`

### Container & Section
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-16);
}

.section {
  padding: var(--space-32) 0;
}
```

---

## 6) Créer un Nouveau Composant

### Workflow
1. **Créer le CSS** dans `packages/design/src/components/<famille>/<nom>.css`
   ```css
   /* mon-composant.css */
   .mon-composant {
     background-color: var(--surface);
     padding: var(--space-16);
     border-radius: var(--radius-lg);
   }
   
   .mon-composant__title {
     font-size: 1.5rem;
     font-weight: 600;
     color: var(--foreground);
   }
   ```

2. **Importer dans index.css**
   ```css
   @import "./components/<famille>/<nom>.css";
   ```

3. **Créer le composant TSX**
   ```tsx
   export const MonComposant = ({ className, ...props }) => (
     <div className={cx("mon-composant", className)} {...props}>
       <h2 className="mon-composant__title">Titre</h2>
     </div>
   );
   ```

4. **Build**
   ```bash
   pnpm build --filter=@avnir/design
   pnpm build --filter=@avnir/ui
   ```

### Standards
- ✅ **Utiliser variables CSS** : `var(--primary)`, `var(--space-*)`, `var(--radius-*)`
- ✅ **Classes sémantiques** : `.mon-composant`, `.mon-composant__element`
- ✅ **Pas de Tailwind** dans les composants
- ✅ **Pas de couleurs hardcodées**
- ✅ **Pas de styles inline**

---

## 7) Ajouter / modifier une marque

1. **Ajouter un bloc** dans `@avnir/design/themes.css` :

   ```css
   html[data-brand="nouvelle-marque"] {
     --primary: r g b;
   }
   ```

2. **Si logo dédié :** l'ajouter dans `@avnir/brandkit` et l'exposer via `<BrandLogo />`.

3. **Ajouter la marque** dans la toolbar Ladle (liste `BRANDS`).

4. **Vérifier contrastes** (WCAG AA) via Ladle.

---

## 8) Où placer les assets

- **Commun** (logos/OG/favicons) → `@avnir/brandkit`.
- **Icônes** → `@avnir/icons` (SVG→React).
- **Images lourdes** spécifiques app → `apps/<app>/public`.
- **`@avnir/ui`** ne référence pas de fichiers statiques.

---

## 9) Check-list "je modifie les styles"

1. **Modifier les tokens** dans `@avnir/design/themes.css`.
2. **`pnpm -w build`** si preset/tokens changent.
3. **Vérifier Ladle** (dark + semi-light + toutes les brands).
4. **Mettre à jour ce guide** si ajout notable.
5. **Créer un changeset** (`chore(design): update tokens …`).

---

## 10) Scripts d'Automatisation

### Vérifier conformité
```bash
node scripts/convert-tailwind-to-css.js
```

### Convertir un composant
```bash
node scripts/auto-convert-tailwind.js <fichier.tsx>
```

### Nettoyage
```bash
node scripts/ultra-cleanup.js
```

---

## 11) Documentation Complète

- **CONVERSION_100_COMPLETE.md** - Rapport détaillé de la conversion
- **CHANGELOG_TAILWIND_CONVERSION.md** - Changelog complet
- **CONVERSION_SUMMARY.md** - Résumé exécutif

---

## 12) Prompt Cascade — appliquer des modifs de style

```
Update @avnir/design/src/components/<famille>/<nom>.css:
- Modifier les classes CSS selon les besoins
- Utiliser UNIQUEMENT les variables CSS (var(--primary), var(--space-*))
- Pas de couleurs hardcodées
- Pas de Tailwind

Run pnpm build --filter=@avnir/design && pnpm build --filter=@avnir/ui
Update Ladle stories if needed.
```
