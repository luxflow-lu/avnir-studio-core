# Composants UI

## Statut des composants

### ✅ Primitives
- **Container** - `Primitives/Container`
- **Section** - `Primitives/Section` 
- **Stack** (HStack/VStack) - `Primitives/Stack`
- **Card** - `Primitives/Card`
- **Divider** - `Primitives/Divider`
- **Spacer** - `Primitives/Spacer`

### ✅ Form
- **Button** - `Form/Button`
- **Input** - `Form/Input`
- **Textarea** - `Form/Textarea`
- **Select** - `Form/Select`
- **Checkbox** - `Form/Checkbox`

### ✅ Data
- **Badge** - `Data/Badge`
- **Spinner** - `Data/Spinner`
- **EmptyState** - `Data/EmptyState`

### ✅ Overlay
- **Modal** - `Overlay/Modal`

### ✅ Navigation
- **Tabs** - `Nav/Tabs`

### ✅ Layout
- **Navbar** - `Layout/Navbar`
- **Footer** - `Layout/Footer`

### ✅ SaaS
- **PricingTable** - `SaaS/PricingTable`

### ✅ E-commerce
- **Price** - `E-commerce/Price`

### ✅ AVNIR
- **ProjectCard** - `AVNIR/ProjectCard`

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
