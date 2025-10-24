# CASCADE RULES - Auto-generated 2025-10-24

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : 2025-10-24**

---

## 🚫 ARCHITECTURE AVNIR - ZERO TOLERANCE

❌ **JAMAIS de classes Tailwind dans composants** → Utiliser classes CSS design system uniquement (.btn, .hero-title, etc.)

❌ **JAMAIS de couleurs hardcodées** (#5cb9f2, #ff0000) → Utiliser var(--primary), var(--space-*), var(--radius-*)

❌ **JAMAIS de styles inline** (style={{}}) → Tout dans themes.css

❌ **JAMAIS de composants locaux dans apps** → Tout dans @avnir/ui

❌ **JAMAIS de logique métier dans apps** → Séparer couches strictement (Apps → UI → Design)

---

## 📚 DOCUMENTATION - VALIDATION OBLIGATOIRE

❌ **JAMAIS utiliser doc sans vérifier version** → `pnpm docs:validate` OBLIGATOIRE avant toute action

❌ **JAMAIS modifier code sans MAJ doc** → Mettre à jour si changement API/règles

❌ **JAMAIS merger PR sans validation doc** → Pre-commit hook actif

❌ **JAMAIS laisser doc obsolète >30 jours** → Système d'alerte automatique

---

## 🔒 SÉCURITÉ - ZERO COMPROMISE

❌ **JAMAIS secrets en dur dans code** → Variables d'environnement uniquement

❌ **JAMAIS validation côté client uniquement** → Toujours validation côté serveur

❌ **JAMAIS données sensibles dans localStorage** → Chiffrement obligatoire

---

## ⚡ PERFORMANCE - ZERO REGRESSION

❌ **JAMAIS bundle >300KB JavaScript** → Surveiller taille avec budget

❌ **JAMAIS contraste <4.5:1** → Accessibilité WCAG 2.1 AA obligatoire

❌ **JAMAIS coverage <80%** → Tests obligatoires avant commit

---

## 🎯 QUALITÉ - ZERO DEFECT

❌ **JAMAIS déploiement sans tests passés** → Pipeline CI/CD strict

❌ **JAMAIS ESLint warnings** → --max-warnings 0

❌ **JAMAIS TypeScript any non justifié** → Types stricts obligatoires

---

## 🔄 PRIORITÉS EN CAS DE CONFLIT

1. **SÉCURITÉ** (priorité absolue)
2. **ACCESSIBILITÉ** (priorité légale)  
3. **PERFORMANCE** (priorité business)
4. **ARCHITECTURE** (priorité maintenance)

**RÈGLE ULTIME : En cas de doute, privilégier la sécurité et documenter la décision.**

---

**🔄 Fichier synchronisé automatiquement depuis la documentation AVNIR**
**📅 Dernière mise à jour : 2025-10-24**