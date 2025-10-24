# CASCADE WORKFLOW - Auto-generated 2025-10-24

**⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT - Ne pas modifier manuellement**
**🔄 Dernière sync : 2025-10-24**

---

## 🚀 AVANT TOUTE ACTION

1. **Vérifier doc à jour** : `pnpm docs:validate`
2. **Lire standard correspondant** au domaine modifié (00_development_workflow.md en premier)
3. **Appliquer règles strictement** selon priorité : Sécurité > Accessibilité > Performance > Architecture

---

## 🎨 NOUVEAU COMPOSANT UI

1. **`pnpm docs:validate`** (vérifier doc à jour)
2. **Créer classes CSS dans themes.css AVANT composant** (jamais l'inverse)
3. **Créer composant .tsx avec classes CSS** (pas Tailwind)
4. **Props obligatoires** : variant, size, className pass-through, forwardRef si DOM
5. **Ajouter story Ladle** avec Controls pour tous variants
6. **Écrire tests RTL** (render + interaction de base)
7. **Export dans index.ts** de la famille + root
8. **Build obligatoire** : `pnpm build`
9. **Validation complète** : lint + typecheck + test (tous doivent passer)

---

## 🎨 MODIFICATION STYLE

1. **`pnpm docs:validate`**
2. **Modifier UNIQUEMENT themes.css** (jamais dans composants)
3. **Utiliser variables CSS** : var(--primary), var(--space-16), etc.
4. **Build obligatoire** après modif : `pnpm build`
5. **Tester visuellement** sur Ladle/apps
6. **Commit avec pre-commit hook** validation

---

## 📱 NOUVELLE APP

1. **`pnpm docs:validate`** + lire 02_architecture_framework.md
2. **Structure obligatoire** : apps/<nom>/src/app/ avec layout.tsx
3. **Imports strictement @avnir/ui** (pas composants locaux)
4. **Layout sections** : .section > .container obligatoire
5. **Brand/theme** : data-brand + data-theme dans layout
6. **Import themes.css** : "../../../packages/design/themes.css" (relatif)
7. **Validation architecture complète**

---

## 📝 MODIFICATION DOCUMENTATION

1. **Mettre à jour contenu** + métadonnées (Version, Last Updated)
2. **`pnpm docs:validate`** pour vérifier cohérence
3. **Tester liens internes** et exemples de code
4. **Commit avec validation** pre-commit
5. **Synchroniser Cascade** : `pnpm cascade:sync`

---

## 🔍 VALIDATION CONTINUE

```bash
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
```

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
**📅 Dernière mise à jour : 2025-10-24**