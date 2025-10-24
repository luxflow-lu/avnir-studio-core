# Framework Architectural AVNIR - Règles & Standards

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Objectif :** Architecture scalable, maintenable et sécurisée pour multiples sites/apps.

---

## 🚫 INTERDICTIONS ABSOLUES

### 1. Modifications sans RFC
- **JAMAIS** de changement architectural sans RFC
- **JAMAIS** de nouvelle dépendance sans validation
- **JAMAIS** de breaking change sans migration path

### 2. Violations de couches
- Apps **NE PEUVENT PAS** contenir de logique métier
- UI **NE PEUT PAS** importer de packages supérieurs
- Design **NE PEUT PAS** dépendre de logique applicative

### 3. Modifications ad-hoc
- **JAMAIS** de "quick fix" qui casse l'architecture
- **JAMAIS** de duplication de code entre packages
- **JAMAIS** de styles inline ou composants locaux

### 4. Validation Architecture
```bash
# Script de validation automatique
pnpm architecture:check

# Dependency-cruiser pour enforcement strict
pnpm architecture:graph  # Génère graphique des dépendances

# Vérifications automatiques :
# - Imports circulaires
# - Violations de couches (apps → packages uniquement)
# - Deep imports interdits (forcer APIs publiques)
# - Apps ne peuvent pas importer d'autres apps
# - Security/encryption ne dépendent pas d'UI
# - Design/tokens sont des packages leaf (sans dépendances)
```

---

## ✅ PROCESSUS OBLIGATOIRES

### Avant toute modification majeure :

#### 1. **Évaluation d'impact**
```bash
# Questions obligatoires :
- Quel package est impacté ?
- Y a-t-il des breaking changes ?
- Faut-il migrer du code existant ?
- Impact sur les performances ?
- Impact sur la DX (Developer Experience) ?
```

#### 2. **RFC (Request for Comments)**
```markdown
# Créer un fichier /docs/rfcs/YYYY-MM-DD-nom-changement.md
## Problème
## Solution proposée  
## Alternatives considérées
## Impact sur l'existant
## Plan de migration
## Validation requise
```

#### 3. **Validation en cascade**
```bash
1. Design system (themes.css, tokens)
2. Composants UI (packages/ui)
3. Applications (apps/*)
4. Documentation (docs/)
5. Tests et build
```

---

## 🏗️ ARCHITECTURE EN COUCHES

### Règle fondamentale : **Dépendances unidirectionnelles**

```
APPS ──→ PACKAGES/UI ──→ PACKAGES/DESIGN
  │                          │
  └──→ PACKAGES/CORE ────────┘
  │
  └──→ PACKAGES/API
```

### Packages autorisés par couche :

#### **APPS** (Next.js, interfaces)
- ✅ Peut importer : @avnir/ui, @avnir/core, @avnir/api
- ❌ Ne peut pas : Contenir de composants, logique métier, styles

#### **PACKAGES/UI** (composants)
- ✅ Peut importer : @avnir/design, @avnir/core (types uniquement)
- ❌ Ne peut pas : Logique métier, appels API, state management global

#### **PACKAGES/DESIGN** (tokens, CSS)
- ✅ Peut importer : Rien (couche la plus basse)
- ❌ Ne peut pas : Dépendre d'autres packages

#### **PACKAGES/CORE** (business logic - futur)
- ✅ Peut importer : @avnir/api, utilitaires
- ❌ Ne peut pas : UI, styles, composants React

---

## 📋 CHECKLIST AVANT MODIFICATION

### Modifications CSS/Design
- [ ] Impact sur tous les composants évalué
- [ ] Pas de breaking changes visuels
- [ ] Variables CSS utilisées (pas de hardcode)
- [ ] Build réussi sur tous les packages
- [ ] Tests visuels validés

### Nouveaux composants
- [ ] Composant dans le bon package (UI)
- [ ] Styles dans themes.css uniquement
- [ ] Props typées et documentées
- [ ] Story Ladle créée
- [ ] Export ajouté aux index

### Modifications d'architecture
- [ ] RFC créée et validée
- [ ] Impact sur toutes les couches évalué
- [ ] Plan de migration documenté
- [ ] Rétrocompatibilité garantie ou migration fournie
- [ ] Documentation mise à jour

---

## 🚀 ÉVOLUTION FUTURE

### Quand ajouter de nouvelles couches :

#### **PACKAGES/API** (client API)
```typescript
// Structure future
packages/api/
├── src/
│   ├── client.ts      // Client HTTP
│   ├── types.ts       // Types API
│   ├── hooks.ts       // React hooks
│   └── cache.ts       // Cache layer
```

#### **PACKAGES/CORE** (business logic)
```typescript
// Structure future  
packages/core/
├── src/
│   ├── entities/      // Business entities
│   ├── services/      // Business services
│   ├── utils/         // Utilities
│   └── types.ts       // Core types
```

#### **PACKAGES/STATE** (state management)
```typescript
// Structure future
packages/state/
├── src/
│   ├── stores/        // Zustand/Redux stores
│   ├── providers/     // React providers
│   └── hooks.ts       // State hooks
```

---

## ⚠️ SIGNAUX D'ALARME

### Quand s'arrêter et réfléchir :

- 🚨 **Import circulaire** détecté
- 🚨 **Duplication de code** entre packages
- 🚨 **Logique métier** dans les composants UI
- 🚨 **Styles inline** ou composants locaux
- 🚨 **Breaking change** non documenté
- 🚨 **Performance** dégradée après modification

---

## 🎯 OBJECTIFS

1. **Scalabilité** : Architecture qui supporte la croissance
2. **Maintenabilité** : Code facile à modifier sans casser
3. **Prévisibilité** : Savoir où mettre chaque nouveau code
4. **Performance** : Optimisations possibles à chaque couche
5. **DX** : Developer Experience fluide et cohérente

---

**RÈGLE D'OR : Quand on hésite, on s'arrête et on réfléchit à l'architecture globale !**
