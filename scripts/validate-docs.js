#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * VALIDATION DE DOCUMENTATION - SYSTÈME CRITIQUE
 * Garantit que la documentation reste fiable et à jour
 */

class DocValidator {
  constructor() {
    this.docsDir = path.join(__dirname, '../docs');
    this.errors = [];
    this.warnings = [];
  }

  async validateAllDocs() {
    console.log('📋 Starting documentation validation...\n');
    
    const files = fs.readdirSync(this.docsDir)
      .filter(f => f.endsWith('.md'))
      .sort();
    
    const results = [];
    
    for (const file of files) {
      console.log(`🔍 Validating ${file}...`);
      const result = await this.validateDoc(path.join(this.docsDir, file));
      results.push({ file, ...result });
    }
    
    return this.generateReport(results);
  }
  
  async validateDoc(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    // 1. Vérifier les métadonnées
    const metadata = this.extractMetadata(content);
    const hasMetadata = !!metadata;
    
    if (!hasMetadata) {
      this.errors.push(`${fileName}: Missing metadata header`);
    }
    
    // 2. Vérifier si à jour
    const isUpToDate = this.checkIfUpToDate(metadata, fileName);
    
    // 3. Vérifier les dépendances
    const hasValidDependencies = await this.checkDependencies(metadata, fileName);
    
    // 4. Vérifier les exemples de code
    const hasValidExamples = this.checkCodeExamples(content, fileName);
    
    // 5. Vérifier les liens internes
    const hasValidLinks = this.checkInternalLinks(content, fileName);
    
    // 6. Vérifier les conflits
    const hasConflicts = this.checkConflicts(content, fileName);
    
    // 7. Vérifier la structure
    const hasValidStructure = this.checkStructure(content, fileName);
    
    return {
      hasMetadata,
      isUpToDate,
      hasValidDependencies,
      hasValidExamples,
      hasValidLinks,
      hasConflicts,
      hasValidStructure,
      metadata,
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
      const cleanLine = line.replace(/<!--\s*/, '').replace(/\s*-->/, '').trim();
      if (cleanLine && cleanLine.includes(':')) {
        const [key, ...valueParts] = cleanLine.split(':');
        const value = valueParts.join(':').trim();
        if (key && value) {
          metadata[key.trim()] = value;
        }
      }
    }
    
    return metadata;
  }
  
  checkIfUpToDate(metadata, fileName) {
    if (!metadata?.['Last Updated']) {
      this.errors.push(`${fileName}: Missing 'Last Updated' in metadata`);
      return false;
    }
    
    const lastUpdated = new Date(metadata['Last Updated']);
    const daysSinceUpdate = (Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysSinceUpdate > 90) {
      this.errors.push(`${fileName}: Critically outdated (${Math.floor(daysSinceUpdate)} days)`);
      return false;
    } else if (daysSinceUpdate > 30) {
      this.warnings.push(`${fileName}: Outdated (${Math.floor(daysSinceUpdate)} days)`);
      return false;
    }
    
    return true;
  }
  
  async checkDependencies(metadata, fileName) {
    if (!metadata?.Dependencies || metadata.Dependencies === 'None') {
      return true;
    }
    
    const deps = metadata.Dependencies === 'ALL' 
      ? fs.readdirSync(this.docsDir).filter(f => f.endsWith('.md') && f !== fileName)
      : metadata.Dependencies.split(', ').map(d => d.trim());
    
    let allValid = true;
    
    for (const dep of deps) {
      if (dep === 'ALL') continue;
      
      const depPath = path.join(this.docsDir, dep);
      if (!fs.existsSync(depPath)) {
        this.errors.push(`${fileName}: Dependency not found: ${dep}`);
        allValid = false;
        continue;
      }
      
      // Vérifier que la dépendance est aussi à jour
      const depContent = fs.readFileSync(depPath, 'utf8');
      const depMetadata = this.extractMetadata(depContent);
      if (!this.checkIfUpToDate(depMetadata, dep)) {
        this.warnings.push(`${fileName}: Dependency outdated: ${dep}`);
      }
    }
    
    return allValid;
  }
  
  checkCodeExamples(content, fileName) {
    const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
    
    if (codeBlocks.length === 0) {
      this.warnings.push(`${fileName}: No code examples found`);
      return true; // Pas obligatoire pour tous les docs
    }
    
    // Vérifier que les exemples TypeScript/JavaScript sont syntaxiquement corrects
    let allValid = true;
    
    codeBlocks.forEach((block, index) => {
      const langMatch = block.match(/```(\w+)/);
      const lang = langMatch ? langMatch[1] : '';
      
      if (['typescript', 'ts', 'javascript', 'js', 'tsx', 'jsx'].includes(lang)) {
        const code = block.replace(/```\w*\n/, '').replace(/\n```$/, '');
        
        // Vérifications basiques
        if (code.includes('❌') && code.includes('✅')) {
          // C'est un exemple de comparaison, OK
        } else if (code.includes('any') && !code.includes('// Justifié')) {
          this.warnings.push(`${fileName}: Code example ${index + 1} uses 'any' without justification`);
        }
        
        // Vérifier les imports relatifs interdits
        if (code.includes('../../../')) {
          this.errors.push(`${fileName}: Code example ${index + 1} uses forbidden relative imports`);
          allValid = false;
        }
      }
    });
    
    return allValid;
  }
  
  checkInternalLinks(content, fileName) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let allValid = true;
    
    while ((match = linkRegex.exec(content)) !== null) {
      const linkPath = match[2];
      
      // Vérifier les liens internes (relatifs)
      if (linkPath.startsWith('./') || linkPath.startsWith('../')) {
        const fullPath = path.resolve(this.docsDir, linkPath);
        if (!fs.existsSync(fullPath)) {
          this.errors.push(`${fileName}: Broken internal link: ${linkPath}`);
          allValid = false;
        }
      }
    }
    
    return allValid;
  }
  
  checkConflicts(content, fileName) {
    // Détecter les règles potentiellement contradictoires
    const rules = this.extractRules(content);
    
    // Vérifications spécifiques
    if (content.includes('JAMAIS') && content.includes('TOUJOURS')) {
      const jamaisRules = content.match(/❌.*JAMAIS.*$/gm) || [];
      const toujoursRules = content.match(/✅.*TOUJOURS.*$/gm) || [];
      
      // Analyser les conflits potentiels
      for (const jamais of jamaisRules) {
        for (const toujours of toujoursRules) {
          if (this.rulesConflict(jamais, toujours)) {
            this.warnings.push(`${fileName}: Potential rule conflict detected`);
            return true;
          }
        }
      }
    }
    
    return false;
  }
  
  extractRules(content) {
    const rules = [];
    const ruleRegex = /[❌✅].*?(JAMAIS|TOUJOURS|OBLIGATOIRE|INTERDIT).*$/gm;
    let match;
    
    while ((match = ruleRegex.exec(content)) !== null) {
      rules.push(match[0]);
    }
    
    return rules;
  }
  
  rulesConflict(rule1, rule2) {
    // Logique simple de détection de conflits
    const keywords1 = rule1.toLowerCase().split(' ');
    const keywords2 = rule2.toLowerCase().split(' ');
    
    // Chercher des mots-clés opposés
    const opposites = [
      ['jamais', 'toujours'],
      ['interdit', 'obligatoire'],
      ['aucun', 'tous']
    ];
    
    for (const [neg, pos] of opposites) {
      if (keywords1.includes(neg) && keywords2.includes(pos)) {
        // Vérifier si c'est le même concept
        const commonWords = keywords1.filter(w => keywords2.includes(w));
        if (commonWords.length > 2) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  checkStructure(content, fileName) {
    let allValid = true;
    
    // Vérifier la présence de sections obligatoires
    const requiredSections = {
      'README.md': ['ORDRE DE LECTURE', 'UTILISATION PAR WINDSURF'],
      '00_development_workflow.md': ['INTERDICTIONS ABSOLUES', 'WORKFLOW QUOTIDIEN'],
      '02_architecture_framework.md': ['INTERDICTIONS ABSOLUES', 'RFC'],
      '04_development_best_practices.md': ['INTERDICTIONS ABSOLUES', 'STANDARDS OBLIGATOIRES'],
      '05_testing_standards.md': ['INTERDICTIONS ABSOLUES', 'COVERAGE'],
      '06_security_standards.md': ['INTERDICTIONS ABSOLUES', 'ZERO COMPROMISE'],
      '07_performance_standards.md': ['INTERDICTIONS ABSOLUES', 'CORE WEB VITALS'],
      '08_accessibility_standards.md': ['INTERDICTIONS ABSOLUES', 'WCAG'],
      '09_deployment_standards.md': ['INTERDICTIONS ABSOLUES', 'ZERO DOWNTIME'],
      '10_data_privacy_standards.md': ['INTERDICTIONS ABSOLUES', 'RGPD']
    };
    
    const sections = requiredSections[fileName] || [];
    
    for (const section of sections) {
      if (!content.includes(section)) {
        this.errors.push(`${fileName}: Missing required section: ${section}`);
        allValid = false;
      }
    }
    
    // Vérifier la structure des titres
    const headers = content.match(/^#+\s+.+$/gm) || [];
    if (headers.length === 0) {
      this.errors.push(`${fileName}: No headers found`);
      allValid = false;
    }
    
    return allValid;
  }
  
  generateReport(results) {
    const validFiles = results.filter(r => 
      r.hasMetadata && 
      r.isUpToDate && 
      r.hasValidDependencies && 
      r.hasValidExamples && 
      r.hasValidLinks && 
      !r.hasConflicts &&
      r.hasValidStructure
    );
    
    const issues = results.filter(r => 
      !r.hasMetadata || 
      !r.isUpToDate || 
      !r.hasValidDependencies || 
      !r.hasValidExamples ||
      !r.hasValidLinks ||
      r.hasConflicts ||
      !r.hasValidStructure
    );
    
    return {
      totalFiles: results.length,
      validFiles: validFiles.length,
      issues: issues.map(issue => ({
        file: issue.file,
        problems: [
          !issue.hasMetadata && 'Missing metadata',
          !issue.isUpToDate && 'Outdated',
          !issue.hasValidDependencies && 'Invalid dependencies',
          !issue.hasValidExamples && 'Invalid code examples',
          !issue.hasValidLinks && 'Broken links',
          issue.hasConflicts && 'Conflicting rules',
          !issue.hasValidStructure && 'Invalid structure'
        ].filter(Boolean)
      })),
      errors: this.errors,
      warnings: this.warnings
    };
  }
}

// Exécution
async function main() {
  const validator = new DocValidator();
  
  try {
    const report = await validator.validateAllDocs();
    
    console.log('\n📋 Documentation Validation Report');
    console.log('=====================================');
    console.log(`📊 Total files: ${report.totalFiles}`);
    console.log(`✅ Valid files: ${report.validFiles}`);
    console.log(`❌ Files with issues: ${report.issues.length}`);
    console.log(`⚠️  Warnings: ${report.warnings.length}`);
    console.log(`🚨 Errors: ${report.errors.length}`);
    
    if (report.errors.length > 0) {
      console.log('\n🚨 ERRORS (Must fix):');
      report.errors.forEach(error => console.log(`  ❌ ${error}`));
    }
    
    if (report.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS (Should fix):');
      report.warnings.forEach(warning => console.log(`  ⚠️  ${warning}`));
    }
    
    if (report.issues.length > 0) {
      console.log('\n📋 DETAILED ISSUES:');
      report.issues.forEach(issue => {
        console.log(`\n📄 ${issue.file}:`);
        issue.problems.forEach(problem => {
          console.log(`  • ${problem}`);
        });
      });
    }
    
    if (report.errors.length === 0 && report.warnings.length === 0) {
      console.log('\n🎉 All documentation is valid and up to date!');
      process.exit(0);
    } else if (report.errors.length > 0) {
      console.log('\n💥 Documentation validation FAILED - fix errors before proceeding');
      process.exit(1);
    } else {
      console.log('\n⚠️  Documentation validation passed with warnings');
      process.exit(0);
    }
    
  } catch (error) {
    console.error('💥 Validation script failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { DocValidator };
