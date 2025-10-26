#!/bin/bash

# Script pour mettre à jour tous les imports relatifs avec les nouveaux noms de dossiers

cd "$(dirname "$0")/../packages/ui/src/components"

# Fonction pour remplacer les imports
fix_imports() {
  find . -name "*.tsx" -o -name "*.ts" | while read file; do
    sed -i '' \
      -e 's|"../primitives/|"../01-primitives/|g' \
      -e 's|"../form/|"../02-form/|g' \
      -e 's|"../data-display/|"../03-data-display/|g' \
      -e 's|"../feedback/|"../04-feedback/|g' \
      -e 's|"../navigation/|"../05-navigation/|g' \
      -e 's|"../overlay/|"../06-overlay/|g' \
      -e 's|"../layout/|"../07-layout/|g' \
      -e 's|"../content/|"../08-content/|g' \
      -e 's|"../marketing/|"../09-marketing/|g' \
      -e 's|"../ecommerce/|"../10-ecommerce/|g' \
      -e 's|"../saas/|"../11-saas/|g' \
      -e 's|"../system/|"../12-system/|g' \
      -e 's|"../avnir/|"../13-avnir/|g' \
      "$file"
  done
}

echo "🔧 Mise à jour des imports relatifs..."
fix_imports
echo "✅ Imports mis à jour !"
