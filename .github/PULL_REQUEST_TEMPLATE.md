# Pull Request

## 📝 Description

Décrivez brièvement les changements apportés dans cette PR.

## 🎯 Type de changement

- [ ] 🐛 Bug fix (changement non-breaking qui corrige un problème)
- [ ] ✨ Nouvelle fonctionnalité (changement non-breaking qui ajoute une fonctionnalité)
- [ ] 💥 Breaking change (fix ou fonctionnalité qui casserait la fonctionnalité existante)
- [ ] 📚 Documentation (changements de documentation uniquement)
- [ ] 🎨 Style (formatage, points-virgules manquants, etc. ; pas de changement de code)
- [ ] ♻️ Refactoring (changement de code qui ne corrige pas de bug ni n'ajoute de fonctionnalité)
- [ ] ⚡ Performance (changement de code qui améliore les performances)
- [ ] ✅ Test (ajout de tests manquants ou correction de tests existants)
- [ ] 🔧 Chore (changements au processus de build ou outils auxiliaires)

## 🎨 Design System Checklist

### Tokens & Couleurs
- [ ] **Tokens utilisés** : Pas de couleurs hex hardcodées (`#ff0000`, etc.)
- [ ] **Variables CSS** : Utilisation des variables CSS (`var(--primary)`, `var(--bg)`, etc.)
- [ ] **Thèmes testés** : Testé en mode light et dark
- [ ] **Brands testées** : Testé avec différentes brands si applicable

### Accessibilité (A11y)
- [ ] **Focus visible** : Tous les éléments interactifs ont un focus visible
- [ ] **ARIA labels** : Attributs ARIA appropriés ajoutés si nécessaire
- [ ] **Navigation clavier** : Support complet du clavier (Tab, Enter, Espace, Échap)
- [ ] **Contraste** : Ratio de contraste minimum AA (4.5:1) respecté
- [ ] **Screen readers** : Testé avec un lecteur d'écran si applicable

### Responsive Design
- [ ] **Mobile (sm)** : Testé sur mobile (≥ 640px)
- [ ] **Tablet (md)** : Testé sur tablet (≥ 768px)
- [ ] **Desktop (lg)** : Testé sur desktop (≥ 1024px)
- [ ] **Breakpoints** : Utilisation des breakpoints Tailwind appropriés

### Code Quality
- [ ] **No relative imports** : Pas d'imports relatifs vers `../../packages/`
- [ ] **Package imports** : Utilisation des imports de packages (`@avnir/ui`, `@avnir/design`, etc.)
- [ ] **TypeScript** : Types corrects et pas de `any`
- [ ] **ESLint** : Pas d'erreurs ESLint
- [ ] **Naming** : Conventions de nommage respectées

### Components & UI
- [ ] **Stories Ladle** : Stories mises à jour si composants UI touchés
- [ ] **Variants** : Tous les variants du composant testés
- [ ] **États** : États disabled, loading, error testés si applicable
- [ ] **Props** : Props TypeScript documentées

## 🧪 Tests

- [ ] Les tests existants passent
- [ ] De nouveaux tests ont été ajoutés si nécessaire
- [ ] Tests manuels effectués

## 📱 Screenshots/Vidéos

<!-- Ajoutez des screenshots ou vidéos pour les changements visuels -->

### Avant
<!-- Screenshot avant les changements -->

### Après
<!-- Screenshot après les changements -->

## 🔗 Issues liées

<!-- Référencez les issues liées avec "Fixes #123" ou "Closes #123" -->

## 📋 Checklist finale

- [ ] Mon code suit les conventions de style du projet
- [ ] J'ai effectué une auto-review de mon code
- [ ] J'ai commenté mon code, particulièrement dans les zones difficiles à comprendre
- [ ] J'ai fait les changements correspondants à la documentation
- [ ] Mes changements ne génèrent pas de nouveaux warnings
- [ ] J'ai ajouté des tests qui prouvent que mon fix est efficace ou que ma fonctionnalité fonctionne
- [ ] Les tests unitaires nouveaux et existants passent localement avec mes changements
- [ ] Tous les changements dépendants ont été mergés et publiés

## 🎯 Reviewers

<!-- @mention des personnes spécifiques si nécessaire -->

## 📝 Notes additionnelles

<!-- Toute information supplémentaire pour les reviewers -->
