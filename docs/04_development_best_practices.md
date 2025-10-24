# Bonnes Pratiques de Développement AVNIR

<!-- METADATA -->
<!-- Version: 1.0.1 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: 02_architecture_framework.md, 00_development_workflow.md -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

**Objectif :** Standards de code et pratiques de développement pour qualité maximale.

---

## 🚫 INTERDICTIONS ABSOLUES - CODE

### Structure & Organisation
- ❌ **JAMAIS** de code dupliqué entre packages
- ❌ **JAMAIS** de fonctions > 50 lignes
- ❌ **JAMAIS** de fichiers > 300 lignes
- ❌ **JAMAIS** de magic numbers sans constantes
- ❌ **JAMAIS** de TODO/FIXME en production

### TypeScript & Types
- ❌ **JAMAIS** d'`any` non justifié
- ❌ **JAMAIS** d'`as` casting sans validation
- ❌ **JAMAIS** d'interfaces vides
- ❌ **JAMAIS** de types implicites dans les APIs publiques
- ❌ **JAMAIS** d'imports circulaires

### React & Composants
- ❌ **JAMAIS** de logique métier dans les composants UI
- ❌ **JAMAIS** de state management complexe dans les composants
- ❌ **JAMAIS** de useEffect sans dépendances correctes
- ❌ **JAMAIS** de re-renders inutiles
- ❌ **JAMAIS** de composants sans forwardRef si nécessaire

---

## ✅ STANDARDS OBLIGATOIRES

### 1. Structure de Code
```typescript
// ✅ CORRECT - Fonction pure, typée, documentée
interface UserData {
  id: string;
  email: string;
  name: string;
}

/**
 * Valide les données utilisateur selon les règles métier
 * @param userData - Données à valider
 * @returns Données validées ou erreur
 */
export function validateUserData(userData: unknown): UserData {
  const schema = UserSchema.parse(userData);
  return schema;
}

// ❌ INCORRECT - Fonction trop longue, pas typée, pas documentée
export function processUser(data: any) {
  // 60+ lignes de code...
  // Logique complexe non documentée
  // Pas de validation
  // Magic numbers
  // etc.
}
```

### 2. Gestion d'Erreurs
```typescript
// ✅ CORRECT - Erreurs typées et gérées
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public code: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function processData(data: UserData): Result<ProcessedData, ValidationError> {
  try {
    const validated = validateInput(data);
    return { success: true, data: processValidated(validated) };
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error };
    }
    throw error; // Re-throw unexpected errors
  }
}

// ❌ INCORRECT - Erreurs non gérées
export function processData(data: any) {
  const result = someOperation(data); // Peut throw
  return result; // Pas de gestion d'erreur
}
```

### 3. Composants React
```typescript
// ✅ CORRECT - Composant bien structuré
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'solid', 
    size = 'md', 
    loading = false, 
    disabled = false,
    onClick,
    className,
    ...props 
  }, ref) => {
    const handleClick = useCallback(() => {
      if (!loading && !disabled && onClick) {
        onClick();
      }
    }, [loading, disabled, onClick]);

    const buttonClass = useMemo(() => 
      cn(
        'btn',
        `btn-${variant}`,
        `btn-${size}`,
        { 'btn-loading': loading },
        className
      ), 
      [variant, size, loading, className]
    );

    return (
      <button
        ref={ref}
        className={buttonClass}
        onClick={handleClick}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Spinner size="sm" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### 4. Hooks Personnalisés
```typescript
// ✅ CORRECT - Hook bien structuré
interface UseApiOptions<T> {
  url: string;
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useApi<T>(options: UseApiOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!options.enabled) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(options.url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
      options.onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      options.onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [options.url, options.enabled, options.onSuccess, options.onError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
```

---

## 🔧 OUTILS OBLIGATOIRES

### 1. ESLint Configuration
```javascript
// .eslintrc.js - Rules strictes
module.exports = {
  extends: [
    '@typescript-eslint/recommended',
    '@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    // TypeScript strict
    '@typescript-eslint/no-any': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    
    // Code quality
    'max-lines-per-function': ['error', { max: 50 }],
    'max-lines': ['error', { max: 300 }],
    'complexity': ['error', { max: 10 }],
    
    // React
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unused-prop-types': 'error',
    
    // Imports
    'import/no-cycle': 'error',
    'import/no-unused-modules': 'error'
  }
};
```

### 2. Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 3. TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  }
}
```

---

## 📋 CODE REVIEW CHECKLIST

### ✅ Structure & Lisibilité
- [ ] Fonctions < 50 lignes
- [ ] Fichiers < 300 lignes
- [ ] Noms explicites et cohérents
- [ ] Pas de code dupliqué
- [ ] Documentation des fonctions publiques

### ✅ TypeScript
- [ ] Pas d'`any` non justifié
- [ ] Types explicites pour APIs publiques
- [ ] Interfaces bien définies
- [ ] Pas d'imports circulaires

### ✅ React
- [ ] Composants purs quand possible
- [ ] Props bien typées
- [ ] useCallback/useMemo appropriés
- [ ] forwardRef si nécessaire
- [ ] Pas de logique métier dans UI

### ✅ Performance
- [ ] Pas de re-renders inutiles
- [ ] Lazy loading approprié
- [ ] Memoization correcte
- [ ] Bundle impact évalué

### ✅ Tests
- [ ] Tests unitaires présents
- [ ] Coverage ≥ 80%
- [ ] Tests d'intégration si nécessaire
- [ ] Cas d'erreur testés

---

## 🎯 PATTERNS RECOMMANDÉS

### 1. Error Boundaries
```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to monitoring service
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

### 2. Custom Hooks Pattern
```typescript
// Logique réutilisable dans des hooks
export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setStoredValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(value) : value;
      setValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key]);

  return [value, setStoredValue] as const;
}
```

### 3. Service Layer Pattern
```typescript
// Séparation claire des responsabilités
class UserService {
  private apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async getUser(id: string): Promise<User> {
    const response = await this.apiClient.get(`/users/${id}`);
    return UserSchema.parse(response.data);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User> {
    const validated = PartialUserSchema.parse(data);
    const response = await this.apiClient.put(`/users/${id}`, validated);
    return UserSchema.parse(response.data);
  }
}
```

---

## 🚀 OBJECTIFS QUALITÉ

### Court terme (1 semaine)
- ✅ ESLint 0 warnings sur nouveau code
- ✅ TypeScript strict activé
- ✅ Prettier configuré et utilisé
- ✅ Tests unitaires sur nouvelles fonctions

### Moyen terme (1 mois)
- ✅ Code review systématique
- ✅ Refactoring des fonctions > 50 lignes
- ✅ Documentation des APIs publiques
- ✅ Performance monitoring

### Long terme (3 mois)
- ✅ Architecture hexagonale
- ✅ Domain-driven design
- ✅ Automated refactoring tools
- ✅ Code quality metrics dashboard

---

**RÈGLE ULTIME : Code propre aujourd'hui = maintenance facile demain**
