# Résolution de Conflits entre Standards

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Objectif :** Clarifier les priorités quand plusieurs standards entrent en conflit.

---

## 🎯 HIÉRARCHIE DE PRIORITÉS

### 1. 🔒 **SÉCURITÉ** (Priorité Absolue)
- **Toujours prioritaire** sur performance, UX, délais
- **Exemples :**
  - Validation côté serveur > Performance client
  - Chiffrement données > Bundle size
  - Rate limiting > UX fluide

### 2. ♿ **ACCESSIBILITÉ** (Priorité Légale)
- **Obligatoire** pour conformité WCAG 2.1 AA
- **Exemples :**
  - Contraste 4.5:1 > Design esthétique
  - Navigation clavier > Animations fancy
  - Screen reader > Performance

### 3. ⚡ **PERFORMANCE** (Priorité Business)
- **Core Web Vitals** non négociables
- **Exemples :**
  - Bundle <300KB > Features supplémentaires
  - CLS <0.1 > Animations complexes
  - FCP <1.5s > Images haute résolution

### 4. 🏗️ **ARCHITECTURE** (Priorité Maintenance)
- **Scalabilité** long terme
- **Exemples :**
  - Composants réutilisables > Solutions rapides
  - Séparation des couches > Développement rapide
  - Standards > Exceptions

---

## ⚖️ RÉSOLUTION DE CONFLITS COURANTS

### Performance vs Sécurité
```typescript
// ❌ MAUVAIS - Performance au détriment de la sécurité
const fastButUnsafe = (data) => {
  return data; // Pas de validation
};

// ✅ BON - Sécurité avec performance optimisée
const secureAndFast = (data) => {
  const validated = validateInput(data); // Sécurité d'abord
  return useMemo(() => processData(validated), [validated]); // Puis optimisation
};
```

### Accessibilité vs Performance
```tsx
// ❌ MAUVAIS - Performance au détriment de l'accessibilité
<img src="large-image.jpg" /> // Pas d'alt, pas d'optimisation

// ✅ BON - Accessibilité avec performance
<img 
  src="optimized-image.webp" 
  alt="Description précise pour lecteurs d'écran"
  loading="lazy"
  width={800} 
  height={600} 
/>
```

### Architecture vs Délais
```tsx
// ❌ MAUVAIS - Quick fix qui casse l'architecture
function QuickComponent() {
  const [data, setData] = useState();
  // Logique métier dans le composant UI
  const processPayment = () => { /* business logic */ };
  
  return <div style={{color: '#ff0000'}}>Quick fix</div>;
}

// ✅ BON - Architecture respectée même sous pression
function ProperComponent() {
  const { processPayment } = usePaymentService(); // Logique externalisée
  
  return <div className="error-text">Proper solution</div>; // Classes CSS
}
```

---

## 🚨 SITUATIONS D'EXCEPTION

### Exception Sécurité (JAMAIS)
- **Aucune exception** tolérée pour la sécurité
- **Toujours** valider côté serveur
- **Toujours** chiffrer les données sensibles

### Exception Performance (Rare)
- **Seulement** si impact sécurité/accessibilité
- **Documenter** la justification
- **Plan de migration** vers solution optimale

### Exception Accessibilité (Très Rare)
- **Seulement** si impossibilité technique
- **Alternative équivalente** obligatoire
- **Validation** avec utilisateurs handicapés

### Exception Architecture (Temporaire)
- **Seulement** en cas d'urgence critique
- **RFC** de régularisation obligatoire
- **Refactoring** planifié immédiatement

---

## 📋 PROCESS DE RÉSOLUTION

### 1. Identification du Conflit
```markdown
## Conflit Identifié
- **Standard A** : [Règle en conflit]
- **Standard B** : [Règle en conflit]
- **Context** : [Situation spécifique]
```

### 2. Évaluation des Priorités
```markdown
## Analyse de Priorité
1. **Sécurité** : Impact ? [Oui/Non]
2. **Accessibilité** : Impact ? [Oui/Non]  
3. **Performance** : Impact ? [Critique/Moyen/Faible]
4. **Architecture** : Impact ? [Long terme/Court terme]
```

### 3. Décision Documentée
```markdown
## Décision
- **Priorité choisie** : [Standard prioritaire]
- **Justification** : [Raison détaillée]
- **Compromis** : [Solutions alternatives]
- **Plan de migration** : [Si temporaire]
```

### 4. Mise à Jour Documentation
- **RFC** si changement architectural
- **Mise à jour** des standards concernés
- **Communication** à l'équipe

---

## 🎯 EXEMPLES CONCRETS

### Cas 1: Bundle Size vs Sécurité
**Conflit :** Librairie de validation augmente le bundle de 50KB
**Résolution :** Sécurité prioritaire, optimiser ailleurs
**Action :** Garder la validation, optimiser images/fonts

### Cas 2: Animation vs Accessibilité
**Conflit :** Animation cool mais problématique pour vestibulaires
**Résolution :** Accessibilité prioritaire
**Action :** `prefers-reduced-motion` + version alternative

### Cas 3: Performance vs Architecture
**Conflit :** Inline styles plus rapides que classes CSS
**Résolution :** Architecture prioritaire (maintenabilité)
**Action :** Optimiser CSS, pas contourner l'architecture

### Cas 4: Délai vs Tests
**Conflit :** Pas le temps d'écrire les tests
**Résolution :** Qualité prioritaire
**Action :** Tests minimaux obligatoires, compléter après

---

## 🔧 OUTILS D'AIDE À LA DÉCISION

### Matrice de Décision
| Critère | Poids | Score A | Score B | Total A | Total B |
|---------|-------|---------|---------|---------|---------|
| Sécurité | 5 | 8 | 6 | 40 | 30 |
| Accessibilité | 4 | 7 | 9 | 28 | 36 |
| Performance | 3 | 9 | 5 | 27 | 15 |
| Architecture | 2 | 6 | 8 | 12 | 16 |
| **TOTAL** | | | | **107** | **97** |

### Questions de Validation
1. **Impact utilisateur** : Qui est affecté et comment ?
2. **Réversibilité** : Peut-on revenir en arrière facilement ?
3. **Précédent** : Cela crée-t-il un précédent dangereux ?
4. **Alternatives** : Y a-t-il d'autres solutions ?

---

## 📞 ESCALATION

### Niveau 1 : Équipe Dev
- **Conflits techniques** simples
- **Standards bien documentés**
- **Précédents existants**

### Niveau 2 : Lead Technique
- **Conflits architecturaux**
- **Nouveaux cas d'usage**
- **Impact sur plusieurs équipes**

### Niveau 3 : RFC Process
- **Changements de standards**
- **Conflits non résolus**
- **Impact organisationnel**

---

**RÈGLE ULTIME : En cas de doute, privilégier la sécurité et documenter la décision.**
