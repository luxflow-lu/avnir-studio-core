#!/bin/bash
# Script pour générer le CSS combiné pour Ladle
mkdir -p public
cat ../../packages/tokens/dist/themes.css ../../packages/ui/dist/styles.css > public/combined.css
echo "✅ CSS combiné généré dans public/combined.css"
