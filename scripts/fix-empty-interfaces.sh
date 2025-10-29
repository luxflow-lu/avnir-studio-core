#!/bin/bash

# Script pour corriger automatiquement les interfaces vides
# Remplace "export interface XProps extends Y {}" par "export type XProps = Y;"

echo "🔧 Correction des interfaces vides..."

# Liste des fichiers à corriger
files=(
  "packages/ui/src/components/01-primitives/Card.tsx"
  "packages/ui/src/components/02-form/Input.tsx"
  "packages/ui/src/components/02-form/Select.tsx"
  "packages/ui/src/components/02-form/Textarea.tsx"
  "packages/ui/src/components/07-layout/DocLayout.tsx"
  "packages/ui/src/components/07-layout/Footer.tsx"
  "packages/ui/src/components/08-content/Prose.tsx"
  "packages/ui/src/components/12-system/BrandSelector.tsx"
  "packages/ui/src/components/12-system/BrandThemeSelector.tsx"
)

count=0
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Remplacer "export interface XProps extends Y {}" par "export type XProps = Y;"
    sed -i '' -E 's/export interface ([A-Za-z]+Props) extends ([^{]+) \{\}/export type \1 = \2;/g' "$file"
    echo "✅ $file"
    ((count++))
  else
    echo "⚠️  $file (not found)"
  fi
done

echo ""
echo "✨ $count fichiers corrigés !"
