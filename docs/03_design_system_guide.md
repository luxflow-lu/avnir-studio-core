# Styles & Brands — Guide de personnalisation

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Objectif :** modifier les styles sans casser la cohérence. Sert aussi de base à Windsurf pour appliquer les changements.

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

**Stockage `r g b`** pour pouvoir utiliser `rgb(var(--primary))` dans Tailwind.

### Dans Tailwind (classes arbitraires)

- **Surface :** `bg-[rgb(var(--surface))]`
- **Texte :** `text-[rgb(var(--on-surface))]`
- **Bouton primary :** `bg-[rgb(var(--primary))] text-[rgb(var(--on-primary))]`

---

## 2) Spacing & Layout

- **Sections :** `py-12 md:py-16 lg:py-24`
- **Grids/Stacks :** `gap-6 md:gap-8`
- **Utilitaire global :**
  ```css
  .container {
    @apply mx-auto max-w-7xl px-4 md:px-6 lg:px-8;
  }
  ```

---

## 3) Typographie

Définir la scale dans `@avnir/design` (ou preset Tailwind).

**Exemples classes :**

- **Display/Hero :** `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
- **H2 :** `text-2xl md:text-3xl font-semibold`
- **Lead :** `text-lg text-[rgb(var(--on-surface)/0.8)]`

---

## 4) États & Feedback

**Tokens :** `--success`, `--warning`, `--danger`, `--info`.

- **Bouton success :** `bg-[rgb(var(--success))] text-[rgb(var(--on-primary))]`
- **Alerte (ex.) :**
  ```html
  <div
    class="bg-[rgb(var(--danger)/0.1)] text-[rgb(var(--danger))] border border-[rgb(var(--danger)/0.2)]"
  >
    Erreur…
  </div>
  ```

---

## 5) Semi-light (header/footer dark)

Le thème light n'éclaircit pas la navbar ni le footer.

**Implémentation** dans un `@layer components` (pas global) :

```css
.header,
.footer {
  background: rgb(20 23 28);
  color: rgb(237 237 237);
}
```

---

## 6) Ajouter / modifier une marque

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

## 7) Où placer les assets

- **Commun** (logos/OG/favicons) → `@avnir/brandkit`.
- **Icônes** → `@avnir/icons` (SVG→React).
- **Images lourdes** spécifiques app → `apps/<app>/public`.
- **`@avnir/ui`** ne référence pas de fichiers statiques.

---

## 8) Check-list "je modifie les styles"

1. **Modifier les tokens** dans `@avnir/design/themes.css`.
2. **`pnpm -w build`** si preset/tokens changent.
3. **Vérifier Ladle** (dark + semi-light + toutes les brands).
4. **Mettre à jour ce guide** si ajout notable.
5. **Créer un changeset** (`chore(design): update tokens …`).

---

## 9) Prompt Windsurf — appliquer des modifs de style

```
Update @avnir/design/themes.css to change the following tokens:
- <décris précisément les variables et nouvelles valeurs r g b>

Keep semi-light behavior: header/footer remain dark via components layer.
Do not hardcode colors in components; use CSS variables only.
Run pnpm -w build and update Ladle stories if needed.
```
