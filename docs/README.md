# Documentation AVNIR - Index des Standards

<!-- METADATA -->
<!-- Version: 2.0.1 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: ALL -->
<!-- Breaking Changes: Reorganization of file numbering -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

**Framework complet de gouvernance pour développement enterprise-grade**

---

## 📋 **ORDRE DE LECTURE RECOMMANDÉ**

### **🚀 DÉMARRAGE RAPIDE**
0. **[00_development_workflow.md](./00_development_workflow.md)** - **Workflow quotidien & guide pratique** ⭐

### **🏗️ FONDATIONS (01-04)**
1. **[01_repository_overview.md](./01_repository_overview.md)** - Vue d'ensemble du monorepo
2. **[02_architecture_framework.md](./02_architecture_framework.md)** - Règles architecturales & RFC process
3. **[03_design_system_guide.md](./03_design_system_guide.md)** - Styles, brands & composants
4. **[04_development_best_practices.md](./04_development_best_practices.md)** - Bonnes pratiques de code

### **🛡️ QUALITÉ & SÉCURITÉ (05-08)**
5. **[05_testing_standards.md](./05_testing_standards.md)** - Testing zero defect
6. **[06_security_standards.md](./06_security_standards.md)** - Sécurité zero compromise
7. **[07_performance_standards.md](./07_performance_standards.md)** - Performance zero regression
8. **[08_accessibility_standards.md](./08_accessibility_standards.md)** - WCAG 2.1 AA compliance

### **🚀 PRODUCTION (09-10)**
9. **[09_deployment_standards.md](./09_deployment_standards.md)** - Déploiement zero downtime
10. **[10_data_privacy_standards.md](./10_data_privacy_standards.md)** - RGPD compliance

---

## 🎯 **UTILISATION PAR WINDSURF**

### **Règles critiques à TOUJOURS respecter :**
- **Architecture** : Pas de logique métier dans apps, composants uniquement dans @avnir/ui
- **Styles** : Jamais de Tailwind dans composants, toujours classes CSS du design system
- **Sécurité** : Jamais de secrets en dur, validation côté serveur obligatoire
- **Performance** : Bundle <300KB, Core Web Vitals respectés
- **Tests** : Coverage ≥80%, tous tests passent avant commit

### **Workflow obligatoire :**
1. **VÉRIFIER** que la doc est à jour (`pnpm docs:validate`)
2. **Lire** le standard correspondant au domaine modifié
3. **Appliquer** les règles strictement
4. **Valider** avec les outils automatiques (ESLint, tests, audit)
5. **Mettre à jour** la doc si modification d'API/règles
6. **Documenter** les changements si nécessaire

---

## 📊 **MÉTRIQUES DE CONFORMITÉ**

| Standard | Métrique | Seuil | Status |
|----------|----------|-------|--------|
| Architecture | ESLint violations | 0 | ✅ |
| Sécurité | Audit violations | 0 | ✅ |
| Performance | Lighthouse ≥95 & INP p75 < 200ms | Respecté | ✅ |
| Testing | Coverage | ≥80% | ✅ |
| Accessibilité | WCAG violations | 0 | ✅ |
| Déploiement | Uptime | ≥99.9% | ✅ |

---

## 🚨 **ESCALATION**

### **Si conflit entre standards :**
1. **Sécurité** > **Accessibilité** > **Performance** > **Architecture**
2. **Créer RFC** pour résoudre le conflit
3. **Mettre à jour** la documentation

### **Si règle non claire :**
1. **Consulter** les exemples dans le standard
2. **Vérifier** les outils automatiques (ESLint, tests)
3. **Créer issue** pour clarification

---

**RÈGLE ULTIME : En cas de doute, privilégier la sécurité et la conformité aux standards.**
