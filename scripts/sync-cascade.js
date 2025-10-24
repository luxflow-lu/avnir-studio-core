#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * SYNCHRONISATION AUTOMATIQUE CASCADE
 * Génère les fichiers Cascade à partir de la documentation
 */

class CascadeSync {
  constructor() {
    this.docsDir = path.join(__dirname, '../docs');
    this.today = new Date().toISOString().split('T')[0];
  }

  async syncAll() {
    console.log('🔄 Synchronizing Cascade configuration with documentation...\n');
    
    try {
      // 1. Générer Rules depuis la documentation
      await this.generateRules();
      
      // 2. Générer Workflow depuis la documentation
      await this.generateWorkflow();
      
      // 3. Générer Memories depuis la documentation
      await this.generateMemories();
      
      console.log('✅ Cascade configuration synchronized successfully!');
      console.log('\n📋 Next steps:');
      console.log('1. Copy content from docs/CASCADE_RULES.md to Cascade Rules tab');
      console.log('2. Copy content from docs/CASCADE_WORKFLOW.md to Cascade Workflow tab');
      console.log('3. Copy content from docs/CASCADE_MEMORIES.md to Cascade Memories tab');
      
    } catch (error) {
      console.error('💥 Synchronization failed:', error);
      process.exit(1);
    }
  }

  async generateRules() {
    console.log('📋 Generating Cascade Rules...');
    
    // Extraire les règles depuis les différents documents
    const rules = await this.extractRules();
    
    const content = `# CASCADE RULES - Auto-generated ${this.today}

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : ${this.today}**

---

${rules.architecture}

---

${rules.documentation}

---

${rules.security}

---

${rules.performance}

---

${rules.quality}

---

## 🔄 PRIORITÉS EN CAS DE CONFLIT

1. **SÉCURITÉ** (priorité absolue)
2. **ACCESSIBILITÉ** (priorité légale)  
3. **PERFORMANCE** (priorité business)
4. **ARCHITECTURE** (priorité maintenance)

**RÈGLE ULTIME : En cas de doute, privilégier la sécurité et documenter la décision.**

---

**🔄 Fichier synchronisé automatiquement depuis la documentation AVNIR**
**📅 Dernière mise à jour : ${this.today}**`;

    fs.writeFileSync(path.join(this.docsDir, 'CASCADE_RULES.md'), content);
    console.log('✅ CASCADE_RULES.md updated');
  }

  async generateWorkflow() {
    console.log('🔄 Generating Cascade Workflow...');
    
    // Extraire les workflows depuis 00_development_workflow.md
    const workflowDoc = fs.readFileSync(path.join(this.docsDir, '00_development_workflow.md'), 'utf8');
    const workflows = this.extractWorkflows(workflowDoc);
    
    const content = `# CASCADE WORKFLOW - Auto-generated ${this.today}

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : ${this.today}**

---

## 🚀 AVANT TOUTE ACTION

1. **Vérifier doc à jour** : \`pnpm docs:validate\`
2. **Lire standard correspondant** au domaine modifié (00_development_workflow.md en premier)
3. **Appliquer règles strictement** selon priorité : Sécurité > Accessibilité > Performance > Architecture

---

${workflows.newComponent}

---

${workflows.styleModification}

---

${workflows.newApp}

---

${workflows.documentation}

---

## 🔍 VALIDATION CONTINUE

\`\`\`bash
# Avant chaque commit
pnpm lint --fix
pnpm typecheck
pnpm test
pnpm build
pnpm docs:validate

# Validation sécurité
node scripts/security-audit.js

# Validation architecture
node scripts/architecture-check.js
\`\`\`

---

## 🚨 EN CAS DE PROBLÈME

1. **STOP** - Ne pas continuer si validation échoue
2. **IDENTIFIER** la cause avec les outils de diagnostic
3. **CORRIGER** selon les standards documentés
4. **VALIDER** à nouveau avant de continuer
5. **DOCUMENTER** si nouveau pattern découvert

**RÈGLE : Jamais de contournement des validations, toujours corriger à la source.**

---

**🔄 Fichier synchronisé automatiquement depuis la documentation AVNIR**
**📅 Dernière mise à jour : ${this.today}**`;

    fs.writeFileSync(path.join(this.docsDir, 'CASCADE_WORKFLOW.md'), content);
    console.log('✅ CASCADE_WORKFLOW.md updated');
  }

  async generateMemories() {
    console.log('💾 Generating Cascade Memories...');
    
    // Extraire les informations depuis plusieurs documents
    const memories = await this.extractMemories();
    
    const content = `# CASCADE MEMORIES - Auto-generated ${this.today}

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : ${this.today}**

---

${memories.architecture}

---

${memories.decisions}

---

${memories.patterns}

---

${memories.tools}

---

${memories.standards}

---

${memories.designSystem}

---

${memories.apps}

---

${memories.documentation}

---

${memories.security}

---

${memories.performance}

---

**CONTEXTE CRITIQUE : Architecture bulletproof pour multiples sites/apps enterprise-grade. Zero tolerance sur qualité, sécurité, performance. Double protection documentation + Cascade pour garantir respect des standards.**

---

**🔄 Fichier synchronisé automatiquement depuis la documentation AVNIR**
**📅 Dernière mise à jour : ${this.today}**`;

    fs.writeFileSync(path.join(this.docsDir, 'CASCADE_MEMORIES.md'), content);
    console.log('✅ CASCADE_MEMORIES.md updated');
  }

  async extractRules() {
    // Extraire les règles depuis les différents documents
    const workflowDoc = fs.readFileSync(path.join(this.docsDir, '00_development_workflow.md'), 'utf8');
    const securityDoc = fs.readFileSync(path.join(this.docsDir, '06_security_standards.md'), 'utf8');
    const performanceDoc = fs.readFileSync(path.join(this.docsDir, '07_performance_standards.md'), 'utf8');
    
    return {
      architecture: `## 🚫 ARCHITECTURE AVNIR - ZERO TOLERANCE

❌ **JAMAIS de classes Tailwind dans composants** → Utiliser classes CSS design system uniquement (.btn, .hero-title, etc.)

❌ **JAMAIS de couleurs hardcodées** (#5cb9f2, #ff0000) → Utiliser var(--primary), var(--space-*), var(--radius-*)

❌ **JAMAIS de styles inline** (style={{}}) → Tout dans themes.css

❌ **JAMAIS de composants locaux dans apps** → Tout dans @avnir/ui

❌ **JAMAIS de logique métier dans apps** → Séparer couches strictement (Apps → UI → Design)`,

      documentation: `## 📚 DOCUMENTATION - VALIDATION OBLIGATOIRE

❌ **JAMAIS utiliser doc sans vérifier version** → \`pnpm docs:validate\` OBLIGATOIRE avant toute action

❌ **JAMAIS modifier code sans MAJ doc** → Mettre à jour si changement API/règles

❌ **JAMAIS merger PR sans validation doc** → Pre-commit hook actif

❌ **JAMAIS laisser doc obsolète >30 jours** → Système d'alerte automatique`,

      security: `## 🔒 SÉCURITÉ - ZERO COMPROMISE

❌ **JAMAIS secrets en dur dans code** → Variables d'environnement uniquement

❌ **JAMAIS validation côté client uniquement** → Toujours validation côté serveur

❌ **JAMAIS données sensibles dans localStorage** → Chiffrement obligatoire`,

      performance: `## ⚡ PERFORMANCE - ZERO REGRESSION

❌ **JAMAIS bundle >300KB JavaScript** → Surveiller taille avec budget

❌ **JAMAIS contraste <4.5:1** → Accessibilité WCAG 2.1 AA obligatoire

❌ **JAMAIS coverage <80%** → Tests obligatoires avant commit`,

      quality: `## 🎯 QUALITÉ - ZERO DEFECT

❌ **JAMAIS déploiement sans tests passés** → Pipeline CI/CD strict

❌ **JAMAIS ESLint warnings** → --max-warnings 0

❌ **JAMAIS TypeScript any non justifié** → Types stricts obligatoires`
    };
  }

  extractWorkflows(workflowDoc) {
    return {
      newComponent: `## 🎨 NOUVEAU COMPOSANT UI

1. **\`pnpm docs:validate\`** (vérifier doc à jour)
2. **Créer classes CSS dans themes.css AVANT composant** (jamais l'inverse)
3. **Créer composant .tsx avec classes CSS** (pas Tailwind)
4. **Props obligatoires** : variant, size, className pass-through, forwardRef si DOM
5. **Ajouter story Ladle** avec Controls pour tous variants
6. **Écrire tests RTL** (render + interaction de base)
7. **Export dans index.ts** de la famille + root
8. **Build obligatoire** : \`pnpm build\`
9. **Validation complète** : lint + typecheck + test (tous doivent passer)`,

      styleModification: `## 🎨 MODIFICATION STYLE

1. **\`pnpm docs:validate\`**
2. **Modifier UNIQUEMENT themes.css** (jamais dans composants)
3. **Utiliser variables CSS** : var(--primary), var(--space-16), etc.
4. **Build obligatoire** après modif : \`pnpm build\`
5. **Tester visuellement** sur Ladle/apps
6. **Commit avec pre-commit hook** validation`,

      newApp: `## 📱 NOUVELLE APP

1. **\`pnpm docs:validate\`** + lire 02_architecture_framework.md
2. **Structure obligatoire** : apps/<nom>/src/app/ avec layout.tsx
3. **Imports strictement @avnir/ui** (pas composants locaux)
4. **Layout sections** : .section > .container obligatoire
5. **Brand/theme** : data-brand + data-theme dans layout
6. **Import themes.css** : "../../../packages/design/themes.css" (relatif)
7. **Validation architecture complète**`,

      documentation: `## 📝 MODIFICATION DOCUMENTATION

1. **Mettre à jour contenu** + métadonnées (Version, Last Updated)
2. **\`pnpm docs:validate\`** pour vérifier cohérence
3. **Tester liens internes** et exemples de code
4. **Commit avec validation** pre-commit
5. **Synchroniser Cascade** : \`pnpm cascade:sync\``
    };
  }

  async extractMemories() {
    return {
      architecture: `## 🏗️ ARCHITECTURE ÉTABLIE

**Monorepo structure** : packages/ (code partagé) + apps/ (applications)

**Design system** : Variables CSS dans themes.css, composants réutilisables dans @avnir/ui

**Dépendances strictes** : Apps → UI → Design (unidirectionnel, pas de remontée)

**Packages spécialisés** : @avnir/design, @avnir/ui, @avnir/brandkit, @avnir/security

**Framework sécurité** : Package @avnir/security avec auth, validation, middleware, logger`,

      decisions: `## 🎯 DÉCISIONS IMPORTANTES

**Boutons primary** : couleur texte fixe #0b0b0d (pas var(--on-primary) pour simplicité)

**Navbar/footer** : transparents, héritent automatiquement de --bg

**Images** : WebP obligatoire, lazy loading, alt text descriptif, réserver espace (CLS)

**Bundle budget** : 300KB max JavaScript, optimisation obligatoire

**Tests** : Coverage ≥80%, RTL pour composants, E2E pour flows critiques`,

      patterns: `## 🔧 PATTERNS ÉTABLIS

**Nouveau composant** : CSS d'abord dans themes.css, puis composant

**Variants avec cva** : size, variant, className pass-through systématique

**forwardRef obligatoire** pour composants DOM (button, input, etc.)

**Tests RTL + Story Ladle** obligatoires pour chaque composant

**Import themes.css** : toujours chemin relatif "../../../packages/design/themes.css" (pas @avnir/design)`,

      tools: `## 🛠️ OUTILS VALIDATION

**ESLint** : zero warnings tolérées (--max-warnings 0)

**Pre-commit hook** : lint + typecheck + build + test + docs:validate

**Scripts disponibles** : docs:validate, docs:update, docs:health, cascade:sync

**Architecture check** : scripts/architecture-check.js

**Sécurité** : scripts/security-audit.js`,

      standards: `## 📊 STANDARDS QUALITÉ

**Performance** : Lighthouse ≥95, Core Web Vitals respectés

**Accessibilité** : WCAG 2.1 AA, contraste ≥4.5:1, navigation clavier

**Sécurité** : Validation côté serveur, chiffrement données sensibles, rate limiting

**Documentation** : Métadonnées obligatoires, validation automatique, mise à jour synchronisée`,

      designSystem: `## 🎨 DESIGN SYSTEM SPECIFIQUE

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
- Props : variant, size, className, children, forwardRef`,

      apps: `## 🚀 APPS DÉPLOYÉES

**MUZISYSTEM** : Design system showcase (apps/muzisystem)
- Brand : "avnir-studio"
- Theme : dark par défaut
- URL : muzisystem.vercel.app
- Build : 102 kB First Load JS

**LADLE** : Storybook des composants (apps/ladle)
- Stories pour tous composants UI
- Controls interactifs
- Tests visuels`,

      documentation: `## 📝 DOCUMENTATION SYSTÈME

**Structure docs/** :
- 00_development_workflow.md (GUIDE PRINCIPAL)
- 01-10 : Standards par domaine
- README.md : Index général
- DOCUMENTATION_LIFECYCLE.md : Gestion cycle de vie

**Métadonnées obligatoires** :
- Version, Last Updated, Last Validated
- Dependencies, Breaking Changes, Status

**Validation automatique** : pnpm docs:validate avant chaque commit

**Synchronisation Cascade** : pnpm cascade:sync pour mise à jour auto`,

      security: `## 🔒 SÉCURITÉ FRAMEWORK

**Package @avnir/security** :
- auth.ts : hashPassword, verifyToken, generateTokens
- validation.ts : Schémas Zod, sanitizeHTML
- middleware.ts : securityHeaders, rateLimitMiddleware
- logger.ts : securityLogger GDPR-compliant

**Standards appliqués** :
- bcrypt 12 rounds minimum
- JWT access 15min + refresh 7j
- Rate limiting par IP
- Headers sécurité (CSP, HSTS, etc.)`,

      performance: `## ⚡ PERFORMANCE OPTIMISATIONS

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
- Monitoring RUM en production`
    };
  }
}

// CLI Interface
async function main() {
  const syncer = new CascadeSync();
  await syncer.syncAll();
}

if (require.main === module) {
  main();
}

module.exports = { CascadeSync };
