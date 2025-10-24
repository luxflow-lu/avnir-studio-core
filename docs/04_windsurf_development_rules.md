# Règles de développement Windsurf - Design System AVNIR

**Objectif :** Garantir que Windsurf respecte systématiquement l'architecture du design system.

---

## 🚫 INTERDICTIONS ABSOLUES

### 1. Classes Tailwind dans les composants
```tsx
// ❌ INTERDIT
<button className="bg-blue-500 text-white px-4 py-2 rounded">

// ✅ OBLIGATOIRE  
<button className="btn btn-primary btn--md">
```

### 2. Couleurs hardcodées
```css
/* ❌ INTERDIT */
.my-component { color: #5cb9f2; }

/* ✅ OBLIGATOIRE */
.my-component { color: var(--primary); }
```

### 3. Styles inline ou locaux
```tsx
// ❌ INTERDIT
<div style={{backgroundColor: '#000'}}>
<div className="bg-black">

// ✅ OBLIGATOIRE
<div className="surface">
```

---

## ✅ WORKFLOW OBLIGATOIRE

### Nouveau composant
1. **D'abord** : Créer les classes CSS dans `themes.css`
2. **Ensuite** : Créer le composant avec ces classes
3. **Enfin** : Build et test

### Modification visuelle
1. **Modifier** `themes.css` uniquement
2. **Jamais** toucher aux composants pour du style
3. **Build** après chaque modification

### Structure des sections
```tsx
// ✅ TOUJOURS cette structure
<section className="section">
  <div className="container">
    {/* Contenu */}
  </div>
</section>
```

---

## 📋 PROMPTS WINDSURF RECOMMANDÉS

### Créer un nouveau composant
```
Create a new component in @avnir/ui following the design system rules:
1. First add CSS classes in themes.css with variables (--primary, --space-*, etc.)
2. Then create the component using ONLY these CSS classes
3. NO Tailwind classes, NO hardcoded colors
4. Export in family index and root index
5. Add Ladle story
```

### Modifier des styles
```
Update styles in @avnir/design/themes.css only:
1. Modify CSS variables and classes in themes.css
2. DO NOT touch component files for styling
3. Use CSS variables: var(--primary), var(--space-*), var(--radius-*)
4. Build packages after changes
5. Verify changes apply automatically to all components
```

### Créer une nouvelle page
```
Create page in apps/<APP> using design system:
1. Use ONLY components from @avnir/ui
2. Use ONLY CSS classes from design system (.section, .container, .btn, etc.)
3. NO Tailwind classes, NO local components
4. Structure: section.section > div.container > content
5. All buttons use .btn .btn-primary/.btn-secondary .btn--sm/.btn--md/.btn--lg
```

---

## 🔧 CHECKLIST AVANT COMMIT

- [ ] Aucune classe Tailwind dans les composants
- [ ] Aucune couleur hardcodée (#hex, rgb(), etc.)
- [ ] Toutes les classes CSS existent dans themes.css
- [ ] Variables CSS utilisées (var(--token))
- [ ] Structure .section > .container respectée
- [ ] Build réussi : `pnpm build`
- [ ] Composants utilisent uniquement @avnir/ui

---

## 🎯 AVANTAGES DE CETTE APPROCHE

1. **Cohérence garantie** : Un style = un endroit
2. **Maintenance facile** : Modification centralisée
3. **Thématisation** : Variables par brand automatiques
4. **Performance** : CSS optimisé et centralisé
5. **Évolutivité** : Ajout de composants sans casser l'existant

---

## ⚠️ SIGNAUX D'ALARME

Si vous voyez ça dans le code, c'est un problème :
- `className="bg-blue-500"` → Tailwind dans composant
- `color: #5cb9f2` → Couleur hardcodée
- `style={{}}` → Style inline
- Composant local dans apps/ → Doit être dans @avnir/ui

---

## 🚀 RÉSULTAT ATTENDU

Modification dans `themes.css` → Impact automatique sur tous les composants de toutes les apps.

**C'est ça, l'architecture solide et maintenable !**
