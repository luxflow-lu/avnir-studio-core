# Documentation Index - AVNIR Studio Core

**Dernière mise à jour :** 24 octobre 2024

## 📋 Structure de la Documentation

### 🚀 Démarrage & Workflow
- **[00_development_workflow.md](./00_development_workflow.md)** - Workflow de développement et processus
- **[01_repository_overview.md](./01_repository_overview.md)** - Vue d'ensemble du repository
- **[02_architecture_framework.md](./02_architecture_framework.md)** - Framework architectural

### 🎨 Design System & UI
- **[03_design_system_guide.md](./03_design_system_guide.md)** - Guide du design system
- **[04_development_best_practices.md](./04_development_best_practices.md)** - Bonnes pratiques de développement

### 🧪 Qualité & Tests
- **[05_testing_standards.md](./05_testing_standards.md)** - Standards de tests et qualité

### 🔒 Sécurité & Conformité
- **[06_security_standards.md](./06_security_standards.md)** - Standards de sécurité
- **[11_data_privacy_standards.md](./11_data_privacy_standards.md)** - Protection des données et RGPD

### ⚡ Performance & Optimisation
- **[07_performance_standards.md](./07_performance_standards.md)** - Standards de performance
- **[08_build_optimization_standards.md](./08_build_optimization_standards.md)** - Optimisation et factorisation CSS

### ♿ Accessibilité
- **[09_accessibility_standards.md](./09_accessibility_standards.md)** - Standards d'accessibilité WCAG 2.1 AA

### 🚀 Déploiement
- **[10_deployment_standards.md](./10_deployment_standards.md)** - Standards de déploiement

### 🔧 Outils & Configuration
- **[CASCADE_RULES.md](./CASCADE_RULES.md)** - Règles Cascade
- **[CASCADE_WORKFLOW.md](./CASCADE_WORKFLOW.md)** - Workflow Cascade
- **[CASCADE_MEMORIES.md](./CASCADE_MEMORIES.md)** - Mémoires Cascade

### 📚 Processus & Gouvernance
- **[DOCUMENTATION_LIFECYCLE.md](./DOCUMENTATION_LIFECYCLE.md)** - Cycle de vie de la documentation
- **[CONFLICT_RESOLUTION.md](./CONFLICT_RESOLUTION.md)** - Résolution de conflits
- **[REVIEW_FINAL.md](./REVIEW_FINAL.md)** - Revue finale

### 📋 RFCs
- **[rfcs/](./rfcs/)** - Requests for Comments et décisions architecturales

## 🎯 Ordre de Lecture Recommandé

### Pour les nouveaux développeurs :
1. `00_development_workflow.md` - Comprendre le workflow
2. `01_repository_overview.md` - Vue d'ensemble
3. `02_architecture_framework.md` - Architecture
4. `03_design_system_guide.md` - Design system
5. `04_development_best_practices.md` - Bonnes pratiques

### Pour la mise en production :
1. `05_testing_standards.md` - Tests obligatoires
2. `06_security_standards.md` - Sécurité
3. `07_performance_standards.md` - Performance
4. `08_accessibility_standards.md` - Accessibilité
5. `09_deployment_standards.md` - Déploiement

### Pour l'optimisation :
1. `11_build_optimization_standards.md` - Build et CSS
2. `10_data_privacy_standards.md` - Données et RGPD

## 📊 Statistiques

- **Total documents :** 15 standards + 4 outils + 1 RFC
- **Couverture :** Architecture, Sécurité, Performance, Accessibilité, Déploiement
- **Statut :** ✅ Tous actifs et à jour

## 🔄 Maintenance

La documentation est maintenue automatiquement via :
- **Pre-commit hooks** pour validation
- **Scripts de validation** (`pnpm docs:validate`)
- **Système d'alerte** pour documents obsolètes >30 jours

---

**Note :** Cette documentation suit les standards AVNIR avec priorité : **Sécurité > Accessibilité > Performance > Architecture**
