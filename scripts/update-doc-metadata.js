#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * MISE À JOUR AUTOMATIQUE DES MÉTADONNÉES
 * Met à jour les dates et versions de la documentation
 */

class DocMetadataUpdater {
  constructor() {
    this.docsDir = path.join(__dirname, '../docs');
    this.today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    this.nextMonth = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  }

  async updateAllMetadata() {
    console.log('📋 Updating documentation metadata...\n');
    
    const files = fs.readdirSync(this.docsDir)
      .filter(f => f.endsWith('.md'))
      .sort();
    
    let updatedCount = 0;
    
    for (const file of files) {
      const updated = await this.updateDocMetadata(path.join(this.docsDir, file));
      if (updated) {
        console.log(`✅ Updated ${file}`);
        updatedCount++;
      } else {
        console.log(`ℹ️  Skipped ${file} (no metadata)`);
      }
    }
    
    console.log(`\n📊 Updated ${updatedCount}/${files.length} files`);
    return updatedCount;
  }

  async updateDocMetadata(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    // Vérifier si le fichier a des métadonnées
    const metadataRegex = /<!-- METADATA -->([\s\S]*?)<!-- \/METADATA -->/;
    const match = content.match(metadataRegex);
    
    if (!match) {
      return false; // Pas de métadonnées à mettre à jour
    }
    
    // Extraire les métadonnées actuelles
    const currentMetadata = this.parseMetadata(match[1]);
    
    // Mettre à jour les champs nécessaires
    const updatedMetadata = {
      ...currentMetadata,
      'Last Validated': this.today,
      'Next Review': this.nextMonth
    };
    
    // Si le contenu a changé (hors métadonnées), mettre à jour "Last Updated"
    const stats = fs.statSync(filePath);
    const lastModified = stats.mtime.toISOString().split('T')[0];
    
    if (currentMetadata['Last Updated'] !== lastModified) {
      updatedMetadata['Last Updated'] = this.today;
      
      // Incrémenter la version patch si c'est une mise à jour de contenu
      const currentVersion = currentMetadata['Version'] || '1.0.0';
      updatedMetadata['Version'] = this.incrementVersion(currentVersion, 'patch');
    }
    
    // Générer le nouveau bloc de métadonnées
    const newMetadataBlock = this.generateMetadataBlock(updatedMetadata);
    
    // Remplacer dans le contenu
    const newContent = content.replace(metadataRegex, newMetadataBlock);
    
    // Écrire le fichier mis à jour
    fs.writeFileSync(filePath, newContent, 'utf8');
    
    return true;
  }

  parseMetadata(metadataString) {
    const metadata = {};
    const lines = metadataString.split('\n');
    
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

  generateMetadataBlock(metadata) {
    const lines = [
      '<!-- METADATA -->',
      `<!-- Version: ${metadata['Version'] || '1.0.0'} -->`,
      `<!-- Last Updated: ${metadata['Last Updated'] || this.today} -->`,
      `<!-- Last Validated: ${metadata['Last Validated'] || this.today} -->`,
      `<!-- Next Review: ${metadata['Next Review'] || this.nextMonth} -->`,
      `<!-- Dependencies: ${metadata['Dependencies'] || 'None'} -->`,
      `<!-- Breaking Changes: ${metadata['Breaking Changes'] || 'None'} -->`,
      `<!-- Status: ${metadata['Status'] || 'ACTIVE'} -->`,
      '<!-- /METADATA -->'
    ];
    
    return lines.join('\n');
  }

  incrementVersion(version, type = 'patch') {
    const parts = version.split('.').map(Number);
    
    switch (type) {
      case 'major':
        parts[0]++;
        parts[1] = 0;
        parts[2] = 0;
        break;
      case 'minor':
        parts[1]++;
        parts[2] = 0;
        break;
      case 'patch':
      default:
        parts[2]++;
        break;
    }
    
    return parts.join('.');
  }

  async addMetadataToFile(filePath, metadata = {}) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    // Vérifier si le fichier a déjà des métadonnées
    if (content.includes('<!-- METADATA -->')) {
      console.log(`⚠️  ${fileName} already has metadata`);
      return false;
    }
    
    // Trouver la première ligne de titre
    const lines = content.split('\n');
    const titleIndex = lines.findIndex(line => line.startsWith('#'));
    
    if (titleIndex === -1) {
      console.log(`❌ No title found in ${fileName}`);
      return false;
    }
    
    // Préparer les métadonnées par défaut
    const defaultMetadata = {
      'Version': '1.0.0',
      'Last Updated': this.today,
      'Last Validated': this.today,
      'Next Review': this.nextMonth,
      'Dependencies': 'None',
      'Breaking Changes': 'None',
      'Status': 'ACTIVE',
      ...metadata
    };
    
    // Générer le bloc de métadonnées
    const metadataBlock = this.generateMetadataBlock(defaultMetadata);
    
    // Insérer après le titre
    lines.splice(titleIndex + 1, 0, '', metadataBlock, '');
    
    // Écrire le fichier mis à jour
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    
    console.log(`✅ Added metadata to ${fileName}`);
    return true;
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const updater = new DocMetadataUpdater();
  
  try {
    switch (command) {
      case 'update':
        await updater.updateAllMetadata();
        break;
        
      case 'add':
        const filePath = args[1];
        if (!filePath) {
          console.error('❌ Please provide a file path');
          process.exit(1);
        }
        
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
          console.error(`❌ File not found: ${fullPath}`);
          process.exit(1);
        }
        
        await updater.addMetadataToFile(fullPath);
        break;
        
      case 'add-all':
        const docsDir = updater.docsDir;
        const files = fs.readdirSync(docsDir)
          .filter(f => f.endsWith('.md'))
          .map(f => path.join(docsDir, f));
        
        for (const file of files) {
          await updater.addMetadataToFile(file);
        }
        break;
        
      default:
        console.log('📋 Documentation Metadata Updater');
        console.log('');
        console.log('Usage:');
        console.log('  node scripts/update-doc-metadata.js update     # Update all metadata');
        console.log('  node scripts/update-doc-metadata.js add <file> # Add metadata to file');
        console.log('  node scripts/update-doc-metadata.js add-all    # Add metadata to all files');
        break;
    }
  } catch (error) {
    console.error('💥 Script failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { DocMetadataUpdater };
