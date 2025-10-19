# Composants UI

## Statut des composants

### ✅ Primitives (6/6)
- **Container** - `Primitives/Container`
- **Section** - `Primitives/Section` 
- **Stack** (HStack/VStack) - `Primitives/Stack`
- **Card** - `Primitives/Card`
- **Divider** - `Primitives/Divider`
- **Spacer** - `Primitives/Spacer`

### ✅ Form (10/10)
- **Button** - `Form/Button`
- **IconButton** - `Form/IconButton`
- **Input** - `Form/Input`
- **Textarea** - `Form/Textarea`
- **Select** - `Form/Select`
- **Checkbox** - `Form/Checkbox`
- **Radio** - `Form/Radio`
- **Switch** - `Form/Switch`
- **Field** - `Form/Field`
- **FileUpload** - `Form/FileUpload`

### ✅ Data (7/7)
- **Avatar** - `Data/Avatar`
- **Badge** - `Data/Badge`
- **EmptyState** - `Data/EmptyState`
- **Progress** - `Data/Progress`
- **Skeleton** - `Data/Skeleton`
- **Spinner** - `Data/Spinner`
- **Table** - `Data/Table`

### ✅ Overlay (5/5)
- **Drawer** - `Overlay/Drawer`
- **Modal** - `Overlay/Modal`
- **Popover** - `Overlay/Popover`
- **Toast** - `Overlay/Toast`
- **Tooltip** - `Overlay/Tooltip`

### ✅ Navigation (4/4)
- **Breadcrumbs** - `Nav/Breadcrumbs`
- **CommandK** - `Nav/CommandK`
- **Pagination** - `Nav/Pagination`
- **Tabs** - `Nav/Tabs`

### ✅ Layout (3/3)
- **Footer** - `Layout/Footer`
- **Navbar** - `Layout/Navbar`
- **Sidebar** - `Layout/Sidebar`

### ✅ System (5/5)
- **ErrorBoundary** - `System/ErrorBoundary`
- **LoadingBoundary** - `System/LoadingBoundary`
- **NotFound404** - `System/NotFound404`
- **ServerError500** - `System/ServerError500`
- **ThemeToggle** - `System/ThemeToggle`

### ✅ SaaS (8/8)
- **ApiKeys** - `SaaS/ApiKeys`
- **DashboardKPI** - `SaaS/DashboardKPI`
- **ImportExport** - `SaaS/ImportExport`
- **InviteMembers** - `SaaS/InviteMembers`
- **PlanPicker** - `SaaS/PlanPicker`
- **PricingTable** - `SaaS/PricingTable`
- **RolesMatrix** - `SaaS/RolesMatrix`
- **SavedViews** - `SaaS/SavedViews`

### ⚠️ E-commerce (3/7)
- **MegaMenu** - `E-commerce/MegaMenu`
- **MiniCart** - `E-commerce/MiniCart`
- **Price** - `E-commerce/Price`
- ⏳ **FacetedSearch** - Filtres + chips
- ⏳ **PDP/MediaGallery** - Galerie produit
- ⏳ **VariantsSwatches** - Sélecteur variantes
- ⏳ **CheckoutSteps** - Étapes commande

### ⚠️ AVNIR (2/8)
- **ProjectCard** - `AVNIR/ProjectCard`
- **ProjectHeader** - `AVNIR/ProjectHeader`
- ⏳ **PermissionBadge** - Badge permissions
- ⏳ **AssetTile** - Tuile asset
- ⏳ **PromptEditor** - Éditeur prompts
- ⏳ **ModelSelector** - Sélecteur modèles
- ⏳ **CreditBalance** - Solde crédits
- ⏳ **RenderStatus** - Statut rendu

## Usage

```typescript
import { Button, Card, Modal } from "@/components";

// Ou imports spécifiques
import { Button } from "@/components/form/Button";
import { Card } from "@/components/primitives/Card";
```

## Tokens disponibles

- **Couleurs**: `var(--brand)`, `var(--brand-on)`, `var(--bg)`, `var(--surface)`, `var(--text-muted)`
- **Rayons**: `var(--radius-xs)` à `var(--radius-full)`
- **Ombres**: `var(--shadow-sm)`, `var(--shadow-md)`, `var(--shadow-lg)`

## Conventions

- Tous les composants utilisent `forwardRef` et `displayName`
- Classes CSS via `cx()` (clsx)
- Focus visible et accessibilité (aria-*, sr-only)
- Pas de couleurs HEX thémables
- Props standards: `variant`, `size`, `disabled`, `loading`
