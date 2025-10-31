const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../apps/muzidev/public/images');

async function optimizeImages() {
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);
    
    if (!stat.isFile()) continue;
    
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.webp' || ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      console.log(`Optimizing ${file}...`);
      
      const originalSize = stat.size;
      const tempPath = filePath + '.tmp';
      
      try {
        await sharp(filePath)
          .resize(1920, null, { // Max width 1920px, hauteur proportionnelle
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 80 }) // Convertir en WebP avec qualité 80
          .toFile(tempPath);
        
        const newSize = fs.statSync(tempPath).size;
        const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        // Remplacer l'original seulement si c'est plus petit
        if (newSize < originalSize) {
          fs.unlinkSync(filePath);
          fs.renameSync(tempPath, filePath.replace(ext, '.webp'));
          console.log(`  ✓ ${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${reduction}%)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`  ⊘ ${file}: Already optimized`);
        }
      } catch (error) {
        console.error(`  ✗ Error optimizing ${file}:`, error.message);
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
      }
    }
  }
  
  console.log('\n✓ Image optimization complete!');
}

optimizeImages().catch(console.error);
