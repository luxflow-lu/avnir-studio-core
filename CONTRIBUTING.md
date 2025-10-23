# Contributing to AVNIR Studio Core

Thank you for your interest in contributing to AVNIR Studio Core! This guide will help you get started.

## 🚀 Local Development

### Prerequisites

- Node.js 20.x
- pnpm 9.x

### Setup

```bash
# Clone the repository
git clone https://github.com/luxflow-lu/avnir-studio-core.git
cd avnir-studio-core

# Install dependencies
pnpm install

# Start development servers
pnpm dev:all  # Starts both Ladle and MUZISYSTEM
# OR individually:
pnpm dev:ladle      # Component playground
pnpm dev:muzisystem # Marketing showcase
```

### Development Workflow

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Testing
pnpm test

# Building
pnpm build

# Formatting
pnpm format
```

## 📝 Branch Naming & Commits

### Branch Naming

- `feat/component-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/update-readme` - Documentation updates
- `refactor/cleanup-utils` - Code refactoring

### Conventional Commits

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistent commit messages:

```bash
feat(ui): add new Button variant
fix(icons): resolve ChevronDown alignment issue
docs(readme): update installation instructions
style(ui): format code with prettier
refactor(hooks): simplify useDisclosure logic
test(ui): add Button accessibility tests
```

## 🎨 Design System Guidelines

### No Hard-coded Colors

- ❌ `className="bg-blue-500"`
- ✅ `className="bg-primary"`
- ✅ `style={{ backgroundColor: "var(--primary)" }}`

### Use Design Tokens

All colors, spacing, and typography should use tokens from `@avnir/design`:

```tsx
// Good
<div className="p-4 bg-surface text-titles" />

// Bad
<div className="p-16px bg-#1a1a1a text-#ffffff" />
```

### Accessibility First

- Include proper ARIA attributes
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG 2.1 AA)

### Performance

- Reserve space for images to prevent CLS
- Use `min-h-*` classes for sections
- Optimize bundle size with tree-shaking

## 🧪 Testing

### Writing Tests

- Use React Testing Library for component tests
- Focus on user behavior, not implementation details
- Test accessibility features

```tsx
// Good
expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();

// Avoid
expect(wrapper.find(".submit-button")).toHaveLength(1);
```

### Test Categories

- **Unit tests**: Individual components and hooks
- **Integration tests**: Component interactions
- **Accessibility tests**: Screen reader compatibility

## 📦 Package Structure

```
packages/
├── ui/           # Main component library
├── icons/        # SVG React components
├── brandkit/     # Brand logos and assets
├── design/       # Design tokens and themes
└── tokens/       # Raw design tokens

apps/
├── ladle/        # Component playground
├── muzisystem/   # Marketing showcase
└── docs/         # Documentation site
```

## 🔄 Release Process

We use [Changesets](https://github.com/changesets/changesets) for versioning:

```bash
# 1. Create a changeset
pnpm changeset

# 2. Choose packages and change type:
#    - patch: Bug fixes
#    - minor: New features
#    - major: Breaking changes

# 3. Commit the changeset file
git add .changeset/
git commit -m "feat: add new component"

# 4. Release (maintainers only)
pnpm version-packages
pnpm release
```

## 📋 Pull Request Checklist

Before submitting a PR, ensure:

- [ ] **Code Quality**
  - [ ] `pnpm typecheck` passes
  - [ ] `pnpm lint` passes
  - [ ] `pnpm test` passes
  - [ ] Code follows existing patterns

- [ ] **Design System**
  - [ ] No hard-coded colors (use design tokens)
  - [ ] Components are accessible (ARIA, keyboard nav)
  - [ ] No layout shift (CLS prevention)
  - [ ] Responsive design implemented

- [ ] **Documentation**
  - [ ] Ladle stories added/updated for new components
  - [ ] README updated if needed
  - [ ] Changeset created for user-facing changes

- [ ] **Testing**
  - [ ] Tests added for new functionality
  - [ ] Accessibility tests included
  - [ ] Edge cases covered

- [ ] **Assets**
  - [ ] Screenshots provided for UI changes
  - [ ] Ladle story links included
  - [ ] Performance impact considered

## 🎯 Component Guidelines

### Creating New Components

1. **Location**: Place in appropriate category under `packages/ui/src/components/`
2. **Props**: Use TypeScript interfaces with clear naming
3. **Styling**: Use Tailwind classes with design tokens
4. **Accessibility**: Include ARIA attributes and keyboard support
5. **Testing**: Write comprehensive tests
6. **Stories**: Create Ladle stories with controls

### Example Component Structure

```tsx
import * as React from "react";
import { cx } from "../../utils/cx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cx(
          "btn", // Base styles from design tokens
          `btn-${variant}`,
          `btn-${size}`,
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
```

## 🤝 Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an Issue with reproduction steps
- **Features**: Propose in GitHub Issues first
- **Chat**: Join our Discord community

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.
