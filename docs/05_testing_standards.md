# Standards de Testing AVNIR - ZERO DEFECT

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Multiples sites/apps critiques. Aucun bug en production toléré.

---

## 🚫 INTERDICTIONS ABSOLUES - TESTING

### Code & Déploiement
- ❌ **JAMAIS** de déploiement sans tests passés
- ❌ **JAMAIS** de code sans tests unitaires (coverage < 80%)
- ❌ **JAMAIS** de composants UI sans tests RTL
- ❌ **JAMAIS** de APIs sans tests d'intégration
- ❌ **JAMAIS** de features sans tests E2E

### Qualité
- ❌ **JAMAIS** de console.log en production
- ❌ **JAMAIS** de TODO/FIXME en production
- ❌ **JAMAIS** de code mort (unused imports/variables)
- ❌ **JAMAIS** de magic numbers sans constantes
- ❌ **JAMAIS** de fonctions > 50 lignes

---

## ✅ STANDARDS OBLIGATOIRES

### 1. Test Coverage (NON-NÉGOCIABLES)
```javascript
// Coverage minimums par type
const COVERAGE_MINIMUMS = {
  'packages/core': 90,      // Business logic critique
  'packages/ui': 85,        // Composants UI
  'packages/security': 95,  // Sécurité critique
  'apps/*': 70,            // Applications
  'utils': 80             // Utilitaires
};

// Métriques obligatoires
const COVERAGE_METRICS = {
  statements: 80,
  branches: 75,
  functions: 80,
  lines: 80
};
```

### 2. Types de Tests (OBLIGATOIRES)
```typescript
// 1. Unit Tests (Jest + RTL)
describe('Button Component', () => {
  it('should render with correct variant', () => {
    render(<Button variant="solid">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-solid');
  });
  
  it('should handle click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// 2. Integration Tests (API)
describe('Auth API', () => {
  it('should authenticate valid user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('accessToken');
  });
});

// 3. E2E Tests (Playwright)
test('user can complete signup flow', async ({ page }) => {
  await page.goto('/signup');
  await page.fill('[data-testid="email"]', 'user@example.com');
  await page.fill('[data-testid="password"]', 'SecurePass123!');
  await page.click('[data-testid="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
});
```

### 3. Test Structure (OBLIGATOIRE)
```
tests/
├── unit/                 # Tests unitaires
│   ├── components/       # Tests composants UI
│   ├── utils/           # Tests utilitaires
│   └── hooks/           # Tests React hooks
├── integration/         # Tests d'intégration
│   ├── api/            # Tests API
│   └── database/       # Tests DB
├── e2e/                # Tests end-to-end
│   ├── auth/           # Flows authentification
│   ├── payment/        # Flows paiement
│   └── admin/          # Flows admin
└── fixtures/           # Données de test
```

---

## 🔍 QUALITY GATES

### 1. Pre-commit Hooks
```bash
#!/bin/sh
# .husky/pre-commit

# 1. Linting (ZERO warnings)
pnpm lint --max-warnings 0 || exit 1

# 2. Type checking
pnpm typecheck || exit 1

# 3. Unit tests
pnpm test:unit || exit 1

# 4. Coverage check
pnpm test:coverage || exit 1

# 5. Build check
pnpm build || exit 1
```

### 2. CI/CD Pipeline
```yaml
# .github/workflows/test.yml
name: Test Pipeline

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      # Unit & Integration Tests
      - name: Run Tests
        run: |
          pnpm test:unit
          pnpm test:integration
          pnpm test:coverage
      
      # E2E Tests
      - name: E2E Tests
        run: pnpm test:e2e
      
      # Security Tests
      - name: Security Audit
        run: |
          pnpm audit
          node scripts/security-audit.js
      
      # Performance Tests
      - name: Performance Tests
        run: pnpm test:performance
```

---

## 🧪 TESTING STRATEGIES

### 1. Component Testing (RTL)
```typescript
// Test obligatoire pour chaque composant
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  // Rendering tests
  it('renders correctly', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  // Props tests
  it('applies variant classes', () => {
    render(<Button variant="outline">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-outline');
  });
  
  // Interaction tests
  it('handles interactions', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
  
  // Accessibility tests
  it('is accessible', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### 2. API Testing
```typescript
// Test obligatoire pour chaque endpoint
describe('POST /api/users', () => {
  it('creates user with valid data', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'SecurePass123!',
      name: 'Test User'
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData);
    
    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe(userData.email);
    expect(response.body.user.password).toBeUndefined(); // Pas exposé
  });
  
  it('rejects invalid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ email: 'invalid' });
    
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});
```

### 3. Security Testing
```typescript
// Tests sécurité obligatoires
describe('Security Tests', () => {
  it('prevents SQL injection', async () => {
    const maliciousInput = "'; DROP TABLE users; --";
    const response = await request(app)
      .post('/api/search')
      .send({ query: maliciousInput });
    
    expect(response.status).toBe(400);
  });
  
  it('requires authentication', async () => {
    const response = await request(app)
      .get('/api/protected');
    
    expect(response.status).toBe(401);
  });
  
  it('validates CSRF tokens', async () => {
    const response = await request(app)
      .post('/api/action')
      .send({ data: 'test' }); // Sans CSRF token
    
    expect(response.status).toBe(403);
  });
});
```

---

## 📊 MONITORING & REPORTING

### 1. Test Metrics Dashboard
```typescript
// Métriques à tracker
interface TestMetrics {
  coverage: {
    statements: number;
    branches: number;
    functions: number;
    lines: number;
  };
  testResults: {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
  };
  performance: {
    testDuration: number;
    slowestTests: string[];
  };
}
```

### 2. Quality Reports
```bash
# Reports automatiques
pnpm test:coverage --reporter=lcov --reporter=json-summary
pnpm test:e2e --reporter=html
pnpm audit --audit-level=moderate --json
```

---

## 🎯 TEST AUTOMATION

### 1. Visual Regression Testing
```typescript
// Chromatic pour Storybook
import { test, expect } from '@playwright/test';

test('visual regression - button variants', async ({ page }) => {
  await page.goto('/storybook/?path=/story/button--all-variants');
  await expect(page).toHaveScreenshot('button-variants.png');
});
```

### 2. Performance Testing
```typescript
// Lighthouse CI
test('performance budget', async ({ page }) => {
  await page.goto('/');
  
  const metrics = await page.evaluate(() => {
    return JSON.parse(JSON.stringify(performance.getEntriesByType('navigation')[0]));
  });
  
  expect(metrics.loadEventEnd - metrics.fetchStart).toBeLessThan(3000);
});
```

---

## 📋 CHECKLIST QUALITÉ

### Avant chaque feature :
- [ ] Tests unitaires écrits (coverage ≥ 80%)
- [ ] Tests d'intégration pour APIs
- [ ] Tests E2E pour user flows
- [ ] Tests de sécurité validés
- [ ] Tests de performance passés

### Avant chaque release :
- [ ] Tous les tests passent
- [ ] Coverage global ≥ 80%
- [ ] Aucun test flaky
- [ ] Performance dans les budgets
- [ ] Sécurité auditée

---

## 🎯 OBJECTIFS QUALITÉ

### Court terme (1 mois) :
- ✅ Coverage ≥ 80% sur tous les packages
- ✅ Tests E2E sur flows critiques
- ✅ CI/CD avec quality gates
- ✅ Visual regression testing

### Moyen terme (3 mois) :
- ✅ Mutation testing
- ✅ Property-based testing
- ✅ Automated accessibility testing
- ✅ Performance regression testing

### Long terme (6 mois) :
- ✅ AI-powered test generation
- ✅ Chaos engineering
- ✅ Production monitoring
- ✅ Automated bug detection

---

**RÈGLE ULTIME TESTING : "If it's not tested, it's broken"**
