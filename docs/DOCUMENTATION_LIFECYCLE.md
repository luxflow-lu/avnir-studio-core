# Gestion du Cycle de Vie de la Documentation

<!-- METADATA -->
<!-- Version: 1.0.1 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: ALL -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

**Objectif :** Garantir que la documentation reste à jour et fiable en permanence.

---

## 🚫 INTERDICTIONS ABSOLUES - DOCUMENTATION

### Utilisation
- ❌ **JAMAIS** utiliser une doc sans vérifier sa version
- ❌ **JAMAIS** appliquer des règles sans valider leur actualité
- ❌ **JAMAIS** modifier du code sans mettre à jour la doc correspondante
- ❌ **JAMAIS** merger une PR sans validation doc
- ❌ **JAMAIS** déployer sans audit de conformité doc

### Maintenance
- ❌ **JAMAIS** laisser une doc marquée `<!-- Critical: true -->` obsolète >24h
- ❌ **JAMAIS** laisser une autre doc obsolète >30 jours
- ❌ **JAMAIS** de changement architectural sans RFC + doc
- ❌ **JAMAIS** de nouveaux standards sans exemples
- ❌ **JAMAIS** de suppression de règles sans migration
- ❌ **JAMAIS** de doc contradictoire entre fichiers

---

## ✅ SYSTÈME DE VERSIONING OBLIGATOIRE

### 1. Métadonnées de Version (OBLIGATOIRE)
```markdown
<!-- METADATA -->
<!-- Version: 2.1.0 -->
<!-- Last Updated: 2024-10-24 -->
<!-- Last Validated: 2024-10-24 -->
<!-- Next Review: 2024-11-24 -->
<!-- Dependencies: 02_architecture_framework.md, 04_development_best_practices.md -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
```

### 2. Statuts de Documentation
```typescript
type DocStatus = 
  | 'DRAFT'        // En cours de rédaction
  | 'REVIEW'       // En cours de validation
  | 'ACTIVE'       // Actif et à jour
  | 'DEPRECATED'   // Obsolète mais encore utilisé
  | 'ARCHIVED'     // Archivé, ne plus utiliser

type BreakingChange = {
  version: string;
  date: string;
  description: string;
  migrationPath: string;
};
```

### 3. Matrice de Dépendances
```yaml
# docs/dependencies.yml
dependencies:
  00_development_workflow.md:
    depends_on:
      - 02_architecture_framework.md
      - 04_development_best_practices.md
      - 05_testing_standards.md
    impacts:
      - All development files
    
  02_architecture_framework.md:
    depends_on:
      - 01_repository_overview.md
    impacts:
      - 00_development_workflow.md
      - 04_development_best_practices.md
      - All standard files
```

---

## 🔍 VALIDATION AUTOMATIQUE

### 1. Script de Validation (OBLIGATOIRE)
```javascript
// scripts/validate-docs.js
const fs = require('fs');
const path = require('path');

class DocValidator {
  async validateAllDocs() {
    const docsDir = path.join(__dirname, '../docs');
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
    
    const results = [];
    
    for (const file of files) {
      const result = await this.validateDoc(path.join(docsDir, file));
      results.push({ file, ...result });
    }
    
    return this.generateReport(results);
  }
  
  async validateDoc(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const metadata = this.extractMetadata(content);
    
    return {
      hasMetadata: !!metadata,
      isUpToDate: this.checkIfUpToDate(metadata),
      hasValidDependencies: await this.checkDependencies(metadata),
      hasExamples: this.checkExamples(content),
      hasConflicts: await this.checkConflicts(content),
      lastModified: fs.statSync(filePath).mtime
    };
  }
  
  extractMetadata(content) {
    const metadataRegex = /<!-- METADATA -->([\s\S]*?)<!-- \/METADATA -->/;
    const match = content.match(metadataRegex);
    
    if (!match) return null;
    
    const metadata = {};
    const lines = match[1].split('\n');
    
    for (const line of lines) {
      const [key, value] = line.replace('<!-- ', '').replace(' -->', '').split(': ');
      if (key && value) {
        metadata[key.trim()] = value.trim();
      }
    }
    
    return metadata;
  }
  
  checkIfUpToDate(metadata) {
    if (!metadata?.['Last Updated']) return false;
    
    const lastUpdated = new Date(metadata['Last Updated']);
    const daysSinceUpdate = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
    
    return daysSinceUpdate <= 30; // Max 30 jours
  }
  
  async checkDependencies(metadata) {
    if (!metadata?.Dependencies) return true;
    
    const deps = metadata.Dependencies.split(', ');
    
    for (const dep of deps) {
      const depPath = path.join(__dirname, '../docs', dep);
      if (!fs.existsSync(depPath)) {
        return false;
      }
      
      // Vérifier que la dépendance est aussi à jour
      const depContent = fs.readFileSync(depPath, 'utf8');
      const depMetadata = this.extractMetadata(depContent);
      if (!this.checkIfUpToDate(depMetadata)) {
        return false;
      }
    }
    
    return true;
  }
  
  checkExamples(content) {
    // Vérifier présence d'exemples de code
    const codeBlocks = content.match(/```[\s\S]*?```/g);
    return codeBlocks && codeBlocks.length > 0;
  }
  
  async checkConflicts(content) {
    // Détecter les règles contradictoires
    const rules = this.extractRules(content);
    return this.findConflictingRules(rules);
  }
  
  generateReport(results) {
    const issues = results.filter(r => 
      !r.hasMetadata || 
      !r.isUpToDate || 
      !r.hasValidDependencies || 
      r.hasConflicts
    );
    
    return {
      totalFiles: results.length,
      validFiles: results.length - issues.length,
      issues: issues.map(issue => ({
        file: issue.file,
        problems: [
          !issue.hasMetadata && 'Missing metadata',
          !issue.isUpToDate && 'Outdated (>30 days)',
          !issue.hasValidDependencies && 'Invalid dependencies',
          issue.hasConflicts && 'Conflicting rules'
        ].filter(Boolean)
      }))
    };
  }
}

// Usage
const validator = new DocValidator();
validator.validateAllDocs().then(report => {
  console.log('📋 Documentation Validation Report');
  console.log(`✅ Valid files: ${report.validFiles}/${report.totalFiles}`);
  
  if (report.issues.length > 0) {
    console.log('❌ Issues found:');
    report.issues.forEach(issue => {
      console.log(`  ${issue.file}: ${issue.problems.join(', ')}`);
    });
    process.exit(1);
  } else {
    console.log('🎉 All documentation is up to date!');
  }
});
```

### 2. Pre-commit Hook Documentation
```bash
#!/bin/sh
# .husky/pre-commit-docs

echo "📋 Validating documentation..."

# 1. Vérifier que la doc est à jour
node scripts/validate-docs.js || exit 1

# 2. Vérifier les liens internes
node scripts/check-internal-links.js || exit 1

# 3. Vérifier la cohérence des exemples
node scripts/validate-code-examples.js || exit 1

echo "✅ Documentation validation passed"
```

---

## 🔄 WORKFLOW DE MISE À JOUR

### 1. Détection Automatique des Changements
```javascript
// scripts/detect-doc-changes.js
class DocChangeDetector {
  async detectRequiredUpdates() {
    const changes = await this.getRecentChanges();
    const impactedDocs = [];
    
    for (const change of changes) {
      if (this.isArchitecturalChange(change)) {
        impactedDocs.push('02_architecture_framework.md');
        impactedDocs.push('00_development_workflow.md');
      }
      
      if (this.isSecurityChange(change)) {
        impactedDocs.push('06_security_standards.md');
      }
      
      if (this.isUIChange(change)) {
        impactedDocs.push('03_design_system_guide.md');
        impactedDocs.push('04_development_best_practices.md');
      }
    }
    
    return [...new Set(impactedDocs)];
  }
  
  isArchitecturalChange(change) {
    return change.files.some(file => 
      file.includes('packages/') || 
      file.includes('apps/') ||
      file.includes('.eslintrc') ||
      file.includes('package.json')
    );
  }
  
  isSecurityChange(change) {
    return change.files.some(file => 
      file.includes('security/') ||
      file.includes('auth') ||
      change.message.toLowerCase().includes('security')
    );
  }
  
  isUIChange(change) {
    return change.files.some(file => 
      file.includes('ui/') ||
      file.includes('design/') ||
      file.includes('themes.css')
    );
  }
}
```

### 2. Notification Automatique
```typescript
// Système d'alerte pour doc obsolète
interface DocAlert {
  file: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  reason: string;
  suggestedAction: string;
  deadline: Date;
}

class DocAlertSystem {
  generateAlerts(): DocAlert[] {
    const alerts: DocAlert[] = [];
    
    // Vérifier l'âge des documents
    const outdatedDocs = this.findOutdatedDocs();
    for (const doc of outdatedDocs) {
      alerts.push({
        file: doc.name,
        severity: this.calculateSeverity(doc.daysSinceUpdate),
        reason: `Not updated for ${doc.daysSinceUpdate} days`,
        suggestedAction: 'Review and update content',
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 jours
      });
    }
    
    return alerts;
  }
  
  calculateSeverity(days: number): DocAlert['severity'] {
    if (days > 90) return 'critical';
    if (days > 60) return 'high';
    if (days > 30) return 'medium';
    return 'low';
  }
}
```

---

## 📋 CHECKLIST DE MISE À JOUR

### Avant d'utiliser la documentation :
- [ ] Vérifier la version et date de dernière mise à jour
- [ ] Valider que les dépendances sont à jour
- [ ] Confirmer que le statut est 'ACTIVE'
- [ ] Vérifier s'il y a des breaking changes récents

### Avant de modifier du code :
- [ ] Identifier les docs impactées par le changement
- [ ] Marquer les docs à mettre à jour
- [ ] Planifier la mise à jour dans la même PR

### Après modification du code :
- [ ] Mettre à jour les docs correspondantes
- [ ] Incrémenter les versions si breaking change
- [ ] Valider avec le script de validation
- [ ] Tester les exemples de code

### Revue mensuelle obligatoire :
- [ ] Audit complet de toute la documentation
- [ ] Mise à jour des dates de validation
- [ ] Vérification des liens et références
- [ ] Nettoyage des docs obsolètes

---

## 🎯 MÉTRIQUES DE QUALITÉ DOC

### Indicateurs à surveiller :
```typescript
interface DocMetrics {
  upToDatePercentage: number;    // % docs à jour (<30 jours)
  coveragePercentage: number;    // % features documentées
  exampleValidityRate: number;   // % exemples qui fonctionnent
  linkValidityRate: number;      // % liens internes valides
  userSatisfactionScore: number; // Feedback utilisateurs
}

// Objectifs
const DOC_TARGETS = {
  upToDatePercentage: 95,
  coveragePercentage: 90,
  exampleValidityRate: 100,
  linkValidityRate: 100,
  userSatisfactionScore: 4.5
};
```

---

## 🚨 PROCÉDURE D'URGENCE

### Si documentation critique obsolète :
1. **STOP** - Ne pas utiliser la doc obsolète
2. **IDENTIFIER** la version correcte ou source fiable
3. **VALIDER** avec l'équipe technique
4. **METTRE À JOUR** immédiatement
5. **NOTIFIER** l'équipe du changement

### Si conflit entre doc et code :
1. **PRIORITÉ** au code en production
2. **CRÉER ISSUE** urgente pour alignement
3. **DOCUMENTER** le conflit temporairement
4. **RÉSOUDRE** dans les 24h maximum

---

## 🔧 OUTILS DE MAINTENANCE

### 1. Dashboard de Santé Doc
```bash
# Commande quotidienne
npm run docs:health

# Sortie attendue
📋 Documentation Health Dashboard
├── 📊 Overall Score: 94/100
├── ✅ Up-to-date: 10/11 files
├── ⚠️  Outdated: 1 file (06_security_standards.md)
├── 🔗 Links: 45/45 valid
└── 📝 Examples: 23/23 working
```

### 2. Auto-update Bot
```yaml
# .github/workflows/doc-maintenance.yml
name: Documentation Maintenance

on:
  schedule:
    - cron: '0 9 * * MON' # Chaque lundi matin
  
jobs:
  check-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate Documentation
        run: npm run docs:validate
      - name: Create Issues for Outdated Docs
        run: npm run docs:create-update-issues
```

---

**RÈGLE ULTIME DOCUMENTATION : "Une doc obsolète est dangereuse - mieux vaut pas de doc qu'une mauvaise doc"**
