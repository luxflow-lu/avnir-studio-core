#!/bin/bash

# Script de conversion batch de tous les composants restants
# Usage: bash scripts/batch-convert-all.sh

echo "🚀 Conversion automatique de tous les composants Tailwind"
echo "=========================================================="
echo ""

# Composants Phase 3 (14 composants moyens)
PHASE3=(
  "packages/ui/src/components/navigation/CommandK.tsx"
  "packages/ui/src/components/saas/DashboardKPI.tsx"
  "packages/ui/src/components/system/ServerError500.tsx"
  "packages/ui/src/components/system/ErrorBoundary.tsx"
  "packages/ui/src/components/ecommerce/MediaGallery.tsx"
  "packages/ui/src/components/data-display/Table.tsx"
  "packages/ui/src/components/ecommerce/VariantsSwatches.tsx"
  "packages/ui/src/components/overlay/Toast.tsx"
  "packages/ui/src/components/form/Switch.tsx"
  "packages/ui/src/components/saas/InviteMembers.tsx"
  "packages/ui/src/components/system/NotFound404.tsx"
  "packages/ui/src/components/layout/Sidebar.tsx"
  "packages/ui/src/components/overlay/Drawer.tsx"
)

# Composants Phase 4 (composants simples <11 classes)
PHASE4=(
  "packages/ui/src/components/data-display/Progress.tsx"
  "packages/ui/src/components/form/IconButton.tsx"
  "packages/ui/src/components/navigation/Breadcrumbs.tsx"
  "packages/ui/src/components/ecommerce/Price.tsx"
  "packages/ui/src/components/layout/Footer.tsx"
  "packages/ui/src/components/layout/Navbar.tsx"
  "packages/ui/src/components/marketing/CtaSection.tsx"
  "packages/ui/src/components/marketing/LogoCloud.tsx"
  "packages/ui/src/components/marketing/Testimonials.tsx"
  "packages/ui/src/components/navigation/Pagination.tsx"
  "packages/ui/src/components/system/BrandThemeSelector.tsx"
  "packages/ui/src/components/ecommerce/CheckoutSteps.tsx"
  "packages/ui/src/components/form/Checkbox.tsx"
  "packages/ui/src/components/form/Radio.tsx"
  "packages/ui/src/components/marketing/ContactBlock.tsx"
  "packages/ui/src/components/navigation/Tabs.tsx"
  "packages/ui/src/components/system/LoadingBoundary.tsx"
  "packages/ui/src/components/data-display/EmptyState.tsx"
  "packages/ui/src/components/overlay/Modal.tsx"
  "packages/ui/src/components/marketing/PricingStrip.tsx"
  "packages/ui/src/components/form/Field.tsx"
)

total=0
converted=0
failed=0

convert_file() {
  local file=$1
  local phase=$2
  
  echo ""
  echo "[$phase] Conversion: $(basename $file)"
  echo "----------------------------------------"
  
  if node scripts/auto-convert-tailwind.js "$file" 2>&1 | grep -q "✅ Fichier converti"; then
    ((converted++))
    echo "✅ Converti avec succès"
  else
    ((failed++))
    echo "⚠️  Échec ou déjà conforme"
  fi
  
  ((total++))
}

echo "📦 Phase 3: Composants moyens (${#PHASE3[@]} fichiers)"
echo "======================================================"

for file in "${PHASE3[@]}"; do
  convert_file "$file" "Phase 3"
done

echo ""
echo "📦 Phase 4: Composants simples (${#PHASE4[@]} fichiers)"
echo "======================================================"

for file in "${PHASE4[@]}"; do
  convert_file "$file" "Phase 4"
done

echo ""
echo "=========================================================="
echo "🎉 Conversion batch terminée!"
echo "=========================================================="
echo ""
echo "📊 Résultats:"
echo "  Total traités: $total"
echo "  Convertis: $converted"
echo "  Échecs/Conformes: $failed"
echo ""
echo "📋 Prochaines étapes:"
echo "  1. Vérifier les fichiers convertis"
echo "  2. Supprimer les backups: find packages/ui -name '*.backup' -delete"
echo "  3. Build: pnpm build"
echo "  4. Tests: pnpm test"
echo ""
