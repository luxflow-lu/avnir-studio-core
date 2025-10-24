# CASCADE MEMORIES - Auto-generated 2025-10-24

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : 2025-10-24**

---

## 🏗️ ARCHITECTURE ÉTABLIE

**Monorepo structure** : packages/ (code partagé) + apps/ (applications)

**Design system** : Variables CSS dans themes.css, composants réutilisables dans @avnir/ui

**Dépendances strictes** : Apps → UI → Design (unidirectionnel, pas de remontée)

**Packages spécialisés** : @avnir/design, @avnir/ui, @avnir/brandkit, @avnir/security

**Framework sécurité** : Package @avnir/security avec auth, validation, middleware, logger

---

## 🎯 DÉCISIONS IMPORTANTES

**Boutons primary** : couleur texte fixe #0b0b0d (pas var(--on-primary) pour simplicité)

**Navbar/footer** : transparents, héritent automatiquement de --bg

**Images** : WebP obligatoire, lazy loading, alt text descriptif, réserver espace (CLS)

**Bundle budget** : 300KB max JavaScript, optimisation obligatoire

**Tests** : Coverage ≥80%, RTL pour composants, E2E pour flows critiques

---

## 🔧 PATTERNS ÉTABLIS

**Nouveau composant** : CSS d'abord dans themes.css, puis composant

**Variants avec cva** : size, variant, className pass-through systématique

**forwardRef obligatoire** pour composants DOM (button, input, etc.)

**Tests RTL + Story Ladle** obligatoires pour chaque composant

**Import themes.css** : toujours chemin relatif "../../../packages/design/themes.css" (pas @avnir/design)

---

## 🛠️ OUTILS VALIDATION

**ESLint** : zero warnings tolérées (--max-warnings 0)

**Pre-commit hook** : lint + typecheck + build + test + docs:validate

**Scripts disponibles** : docs:validate, docs:update, docs:health, cascade:sync

**Architecture check** : scripts/architecture-check.js

**Sécurité** : scripts/security-audit.js

---

## 📊 STANDARDS QUALITÉ

**Performance** : Lighthouse ≥95, Core Web Vitals respectés

**Accessibilité** : WCAG 2.1 AA, contraste ≥4.5:1, navigation clavier

**Sécurité** : Validation côté serveur, chiffrement données sensibles, rate limiting

**Documentation** : Métadonnées obligatoires, validation automatique, mise à jour synchronisée

---

## 🎨 DESIGN SYSTEM SPECIFIQUE

**Variables CSS obligatoires** :
- Couleurs : var(--primary), var(--bg), var(--text)
- Espacements : var(--space-4), var(--space-16), var(--space-48)
- Rayons : var(--radius-sm), var(--radius-md), var(--radius-lg)

**Classes CSS établies** :
- Layout : .section, .container, .padding-global
- Composants : .btn, .hero-title, .navbar, .footer
- Utilitaires : .text-center, .flex, .grid

**Structure composants** :
- packages/ui/src/components/<famille>/<Nom>.tsx
- Export dans index.ts de famille + root
- Props : variant, size, className, children, forwardRef

---

## 🚀 APPS DÉPLOYÉES

**MUZISYSTEM** : Design system showcase (apps/muzisystem)
- Brand : "avnir-studio"
- Theme : dark par défaut
- URL : muzisystem.vercel.app
- Build : 102 kB First Load JS

**LADLE** : Storybook des composants (apps/ladle)
- Stories pour tous composants UI
- Controls interactifs
- Tests visuels

---

## 📝 DOCUMENTATION SYSTÈME

**Structure docs/** :
- 00_development_workflow.md (GUIDE PRINCIPAL)
- 01-10 : Standards par domaine
- README.md : Index général
- DOCUMENTATION_LIFECYCLE.md : Gestion cycle de vie

**Métadonnées obligatoires** :
- Version, Last Updated, Last Validated
- Dependencies, Breaking Changes, Status

**Validation automatique** : pnpm docs:validate avant chaque commit

**Synchronisation Cascade** : pnpm cascade:sync pour mise à jour auto

---

## 🔒 SÉCURITÉ FRAMEWORK

**Package @avnir/security** :
- auth.ts : hashPassword, verifyToken, generateTokens
- validation.ts : Schémas Zod, sanitizeHTML
- middleware.ts : securityHeaders, rateLimitMiddleware
- logger.ts : securityLogger GDPR-compliant

**Standards appliqués** :
- bcrypt 12 rounds minimum
- JWT access 15min + refresh 7j
- Rate limiting par IP
- Headers sécurité (CSP, HSTS, etc.)

---

## ⚡ PERFORMANCE OPTIMISATIONS

**Bundle management** :
- Tree-shaking activé ("sideEffects": false)
- Code splitting par route
- Lazy loading composants lourds

**Images** :
- WebP/AVIF obligatoire
- Lazy loading avec intersection observer
- Placeholder pour éviter CLS

**Core Web Vitals** :
- FCP ≤ 1.5s, LCP ≤ 2.5s, CLS ≤ 0.1
- Monitoring RUM en production

---

**CONTEXTE CRITIQUE : Architecture bulletproof pour multiples sites/apps enterprise-grade. Zero tolerance sur qualité, sécurité, performance. Double protection documentation + Cascade pour garantir respect des standards.**

---

**🔄 Fichier synchronisé automatiquement depuis la documentation AVNIR**
**📅 Dernière mise à jour : 2025-10-24**