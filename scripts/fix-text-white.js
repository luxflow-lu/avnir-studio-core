#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = [
  'packages/ui/src/components/ecommerce/CheckoutSteps.tsx',
  'packages/ui/src/components/ecommerce/VariantsSwatches.tsx',
  'packages/ui/src/composed/Footer.tsx',
  'packages/ui/src/composed/Navbar.tsx',
  'packages/ui/src/domains/saas/PlanCard.tsx',
  'packages/ui/src/components/data-display/Table.tsx',
  'packages/ui/src/components/layout/Sidebar.tsx',
  'packages/ui/src/components/navigation/CommandK.tsx',
  'packages/ui/src/components/navigation/Pagination.tsx',
  'packages/ui/src/components/navigation/Tabs.tsx',
  'packages/ui/src/components/overlay/Tooltip.tsx',
  'packages/ui/src/components/system/ThemeToggle.tsx',
  'packages/ui/src/composed/FeatureGrid.tsx',
  'packages/ui/src/composed/Hero.tsx',
  'packages/ui/src/composed/SplitCTA.tsx',
  'packages/ui/src/composed/StackedList.tsx',
  'packages/ui/src/domains/saas/PricingTabs.tsx',
];

let totalFixed = 0;

files.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Replace text-white with text-on-primary
  content = content.replace(/text-white/g, 'text-on-primary');
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    const count = (originalContent.match(/text-white/g) || []).length;
    console.log(`✅ ${file} (${count} replacements)`);
    totalFixed += count;
  }
});

console.log(`\n✨ Total: ${totalFixed} occurrences fixed in ${files.length} files`);
