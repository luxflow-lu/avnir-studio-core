# 🚀 Workflow de Développement AVNIR - Guide de Démarrage

<!-- METADATA -->
<!-- Version: 1.0.1 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: 02_architecture_framework.md, 04_development_best_practices.md, 05_testing_standards.md -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

**📍 DOCUMENT LE PLUS IMPORTANT** - Consultez-moi en premier pour tout développement !

**Objectif :** Workflow unifié pour développement quotidien respectant tous les standards.

---

## 🚫 INTERDICTIONS ABSOLUES - RAPPEL

### Code & Architecture
- ❌ **JAMAIS** de classes Tailwind dans les composants
- ❌ **JAMAIS** de couleurs hardcodées (`#5cb9f2` → `var(--primary)`)
- ❌ **JAMAIS** de styles inline (`style={{}}`)
- ❌ **JAMAIS** de composants locaux dans apps
- ❌ **JAMAIS** de logique métier dans apps

### Sécurité & Qualité
- ❌ **JAMAIS** de secrets en dur dans le code
- ❌ **JAMAIS** de déploiement sans tests passés
- ❌ **JAMAIS** de bundle > 300KB
- ❌ **JAMAIS** de contraste < 4.5:1
- ❌ **JAMAIS** de coverage < 80%

### Documentation
- ❌ **JAMAIS** utiliser une doc sans vérifier sa version
- ❌ **JAMAIS** modifier du code sans mettre à jour la doc
- ❌ **JAMAIS** merger une PR sans validation doc
- ❌ **JAMAIS** laisser une doc obsolète > 30 jours

---

## ✅ WORKFLOW QUOTIDIEN

### 1. 🚀 Démarrage de journée
```bash
# Mise à jour du repo
git pull origin main
pnpm install

# Vérification de l'état
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

### 2. 🎯 Nouvelle feature/fix
```bash
# Créer branche
git checkout -b feat/nouvelle-feature

# Développement avec standards
# 1. Si nouveau composant → CSS dans themes.css AVANT
# 2. Si modification style → themes.css uniquement
# 3. Si nouvelle app → suivre architecture framework
```

### 3. 🧪 Validation continue
```bash
# Avant chaque commit
pnpm lint --fix
pnpm typecheck
pnpm test
pnpm build

# Validation documentation (CRITIQUE)
pnpm docs:validate

# Synchronisation Cascade (si modif doc)
pnpm cascade:sync

# Validation sécurité
node scripts/security-audit.js

# Validation architecture (Dependency-Cruiser)
pnpm architecture:check
```

### 4. 📝 Commit & PR
```bash
# Changeset si modification UI
pnpm changeset

# Commit conventionnel
git commit -m "feat(ui): add new Button variant"

# Push et PR
git push origin feat/nouvelle-feature
```

---

## 🏗️ PATTERNS DE DÉVELOPPEMENT

### Nouveau Composant UI
```tsx
// 1. D'ABORD: CSS dans themes.css
.my-component {
  background: var(--surface);
  color: var(--text);
  padding: var(--space-16);
  border-radius: var(--radius-md);
}

.my-component--variant {
  background: var(--primary);
  color: var(--on-primary);
}

// 2. ENSUITE: Composant avec classes
import { cva } from 'class-variance-authority';

const myComponentVariants = cva('my-component', {
  variants: {
    variant: {
      default: '',
      primary: 'my-component--variant'
    }
  }
});

export const MyComponent = ({ variant = 'default', className, ...props }) => {
  return (
    <div 
      className={cn(myComponentVariants({ variant }), className)}
      {...props}
    />
  );
};

// 3. ENFIN: Export et story
```

### Nouvelle Page/App
```tsx
// Structure obligatoire
<section>
  <div className="padding-global">
    <div className="container-large padding-section-large">
      {/* Composants @avnir/ui uniquement */}
      <UI.Hero />
      <UI.FeatureGrid />
    </div>
  </div>
</section>
```

### Modification de Style
```css
/* UNIQUEMENT dans themes.css */
:root {
  --primary: 92 185 242; /* Nouvelle couleur */
}

/* JAMAIS dans les composants */
```

---

## 🔍 CHECKLIST PRE-COMMIT

### ✅ Code Quality
- [ ] ESLint 0 warnings (`pnpm lint --max-warnings 0`)
- [ ] TypeScript strict (`pnpm typecheck`)
- [ ] Tests passent (`pnpm test`)
- [ ] Build réussi (`pnpm build`)

### ✅ Architecture
- [ ] Pas de Tailwind dans composants
- [ ] Pas de couleurs hardcodées
- [ ] Composants dans @avnir/ui uniquement
- [ ] Logique métier hors des apps

### ✅ Performance
- [ ] Bundle size dans budget
- [ ] Images optimisées (WebP)
- [ ] Pas de layout shifts
- [ ] Core Web Vitals respectés

### ✅ Sécurité
- [ ] Pas de secrets en dur
- [ ] Validation côté serveur
- [ ] Headers sécurité configurés
- [ ] Audit sécurité clean

### ✅ Accessibilité
- [ ] Contraste ≥ 4.5:1
- [ ] Navigation clavier OK
- [ ] ARIA attributes corrects
- [ ] Tests axe-core passent

---

## 🛠️ OUTILS DE VALIDATION

### Automatiques (Pre-commit)
```bash
# .husky/pre-commit
pnpm lint --max-warnings 0 || exit 1
pnpm typecheck || exit 1
pnpm test || exit 1
pnpm build || exit 1
node scripts/security-audit.js || exit 1
node scripts/architecture-check.js || exit 1
```

### Manuels (Avant PR)
```bash
# Performance
pnpm test:lighthouse

# Accessibilité  
pnpm test:axe

# Sécurité approfondie
pnpm audit --audit-level moderate

# Visual regression
pnpm test:visual
```

---

## 📋 RÉSOLUTION DE PROBLÈMES

### ❌ ESLint Errors
```bash
# Architecture violations
pnpm lint --fix

# Si persiste → vérifier imports et structure
```

### ❌ TypeScript Errors
```bash
# Types manquants
pnpm typecheck

# Si persiste → vérifier interfaces et exports
```

### ❌ Test Failures
```bash
# Tests unitaires
pnpm test --watch

# Coverage insuffisant
pnpm test:coverage
```

### ❌ Build Failures
```bash
# Dépendances
pnpm install

# Packages
pnpm build --filter=@avnir/ui
```

### ❌ Security Issues
```bash
# Audit automatique
node scripts/security-audit.js

# Dépendances vulnérables
pnpm audit fix
```

---

## 🎯 PATTERNS SPÉCIFIQUES

### Windsurf Development
```
Quand Windsurf développe :
1. TOUJOURS lire le standard correspondant au domaine
2. RESPECTER les interdictions absolues
3. UTILISER les patterns établis
4. VALIDER avec les outils automatiques
5. DOCUMENTER si changement d'API publique
```

### Modification Urgente
```bash
# Hotfix en production
git checkout -b hotfix/critical-fix
# Développement minimal
pnpm test
pnpm build
# Deploy direct après validation
```

### Refactoring
```bash
# Toujours avec RFC si architectural
# Tests de régression obligatoires
# Migration progressive si breaking change
```

---

## 📊 MÉTRIQUES DE QUALITÉ

### Objectifs Quotidiens
- **ESLint violations** : 0
- **TypeScript errors** : 0
- **Test coverage** : ≥80%
- **Build time** : <2min
- **Lighthouse score** : ≥95

### Objectifs Hebdomadaires
- **Security audit** : 0 vulnérabilités
- **Performance budget** : Respecté
- **Accessibility score** : 100%
- **Bundle size** : Stable ou réduit

---

## 🚨 ESCALATION

### Problème Bloquant
1. **Vérifier** tous les standards concernés
2. **Consulter** les outils automatiques
3. **Créer issue** si règle non claire
4. **RFC** si changement architectural nécessaire

### Conflit entre Standards
1. **Priorité** : Sécurité > Accessibilité > Performance > Architecture
2. **RFC** pour résolution officielle
3. **Mise à jour** documentation

---

**RÈGLE ULTIME : Si incertain, privilégier la sécurité et demander validation.**
