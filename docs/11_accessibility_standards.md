# Standards d'Accessibilité AVNIR - WCAG 2.2 AA

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Applications grand public. Conformité **WCAG 2.2 AA** obligatoire.

---

## 🚫 INTERDICTIONS ABSOLUES - ACCESSIBILITÉ

### Design & UX
- ❌ **JAMAIS** de contraste < 4.5:1 (texte normal)
- ❌ **JAMAIS** de contraste < 3:1 (texte large)
- ❌ **JAMAIS** d'information par couleur uniquement
- ❌ **JAMAIS** d'animations sans contrôle utilisateur
- ❌ **JAMAIS** de focus invisible ou piégé

### Technique
- ❌ **JAMAIS** d'éléments sans labels accessibles
- ❌ **JAMAIS** d'images sans alt text approprié
- ❌ **JAMAIS** de formulaires sans validation accessible
- ❌ **JAMAIS** de navigation au clavier impossible
- ❌ **JAMAIS** de contenu dynamique sans annonce

---

## ✅ STANDARDS OBLIGATOIRES

### 1. Contraste & Couleurs (WCAG AA)
```css
/* Ratios de contraste obligatoires */
:root {
  /* Texte normal : minimum 4.5:1 */
  --text-on-bg: #0b0b0d;        /* 19.07:1 sur blanc */
  --text-on-primary: #ffffff;    /* Calculé par couleur */
  
  /* Texte large (18pt+) : minimum 3:1 */
  --text-large-muted: #6b7280;  /* 4.6:1 sur blanc */
  
  /* Éléments UI : minimum 3:1 */
  --border-focus: #3b82f6;      /* 8.59:1 sur blanc */
  --error: #dc2626;             /* 5.74:1 sur blanc */
  --success: #16a34a;           /* 3.04:1 sur blanc */
}

/* Validation automatique */
@media (prefers-contrast: high) {
  :root {
    --text: #000000;
    --bg: #ffffff;
    --border: #000000;
  }
}
```

### 2. Focus Management (OBLIGATOIRE)
```css
/* Focus visible obligatoire */
:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Focus trap pour modals */
.modal {
  isolation: isolate;
}

.modal:focus-within {
  /* Empêcher focus en dehors */
}

/* Skip links obligatoires */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--bg);
  color: var(--text);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--radius-sm);
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

### 3. ARIA & Sémantique (OBLIGATOIRE)
```typescript
// Composant Button accessible
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, disabled, 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        aria-busy={loading}
        {...props}
      >
        {loading && <span aria-hidden="true">⏳</span>}
        {children}
      </button>
    );
  }
);

// Form Field accessible
interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({ 
  label, 
  required, 
  error, 
  hint, 
  children 
}) => {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  
  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span aria-label="required">*</span>}
      </label>
      
      {hint && (
        <div id={hintId} className="field-hint">
          {hint}
        </div>
      )}
      
      {React.cloneElement(children as React.ReactElement, {
        id,
        'aria-describedby': [errorId, hintId].filter(Boolean).join(' '),
        'aria-invalid': !!error,
        required
      })}
      
      {error && (
        <div id={errorId} className="field-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
};
```

---

## 🎯 PATTERNS ACCESSIBLES

### 1. Navigation (OBLIGATOIRE)
```typescript
// Navigation principale accessible
export const Navbar: React.FC = () => {
  return (
    <nav role="navigation" aria-label="Navigation principale">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/logo.svg" alt="AVNIR Studio - Accueil" />
        </a>
        
        <ul role="list" className="navbar-nav">
          <li>
            <a href="/components" aria-current={pathname === '/components' ? 'page' : undefined}>
              Composants
            </a>
          </li>
          <li>
            <a href="/guidelines" aria-current={pathname === '/guidelines' ? 'page' : undefined}>
              Guidelines
            </a>
          </li>
        </ul>
        
        <button
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu de navigation"
        >
          <span aria-hidden="true">☰</span>
        </button>
      </div>
      
      <div id="mobile-menu" className={`navbar-mobile ${isOpen ? 'open' : ''}`}>
        {/* Menu mobile */}
      </div>
    </nav>
  );
};

// Breadcrumb accessible
export const Breadcrumb: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={item.href}>
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <>
                <a href={item.href}>{item.label}</a>
                <span aria-hidden="true">/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

### 2. Formulaires (OBLIGATOIRE)
```typescript
// Validation accessible
export const LoginForm: React.FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      <fieldset>
        <legend>Connexion à votre compte</legend>
        
        <Field
          label="Adresse email"
          required
          error={errors.email}
          hint="Utilisez l'email de votre compte"
        >
          <input
            type="email"
            autoComplete="email"
            className="input"
          />
        </Field>
        
        <Field
          label="Mot de passe"
          required
          error={errors.password}
        >
          <input
            type="password"
            autoComplete="current-password"
            className="input"
          />
        </Field>
        
        <Button type="submit" loading={isLoading}>
          {isLoading ? 'Connexion...' : 'Se connecter'}
        </Button>
      </fieldset>
      
      {/* Messages d'erreur globaux */}
      {Object.keys(errors).length > 0 && (
        <div role="alert" className="form-errors">
          <h3>Erreurs de validation :</h3>
          <ul>
            {Object.entries(errors).map(([field, error]) => (
              <li key={field}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};
```

### 3. Modals & Overlays (OBLIGATOIRE)
```typescript
// Modal accessible avec focus trap
export const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Focus trap
  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements?.[0] as HTMLElement;
      const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
      
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              e.preventDefault();
            }
          }
        }
        
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleTabKey);
      firstElement?.focus();
      
      return () => {
        document.removeEventListener('keydown', handleTabKey);
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Fermer la modal"
            className="modal-close"
          >
            ×
          </button>
        </header>
        
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};
```

---

## 🧪 TESTING ACCESSIBILITÉ

### 1. Tests Automatisés (OBLIGATOIRES)
```typescript
// Tests axe-core obligatoires
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Button variant="solid">Click me</Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should be keyboard navigable', () => {
    render(<Button onClick={mockFn}>Click me</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    
    expect(button).toHaveFocus();
    
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(mockFn).toHaveBeenCalled();
  });
  
  it('should have proper ARIA attributes', () => {
    render(
      <Button loading aria-label="Save document">
        Save
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('aria-label', 'Save document');
  });
});
```

### 2. Tests Manuels (CHECKLIST)
```typescript
// Checklist tests manuels obligatoires
const A11Y_CHECKLIST = {
  keyboard: [
    'Tab navigation fonctionne',
    'Enter/Space activent les boutons',
    'Escape ferme les modals',
    'Flèches naviguent dans les listes'
  ],
  
  screenReader: [
    'Contenu lu dans le bon ordre',
    'Labels descriptifs',
    'États annoncés (loading, error)',
    'Changements dynamiques annoncés'
  ],
  
  visual: [
    'Contraste suffisant',
    'Focus visible',
    'Texte redimensionnable 200%',
    'Pas de perte d\'information'
  ],
  
  motor: [
    'Cibles tactiles ≥ 44px',
    'Pas de timeouts stricts',
    'Alternatives aux gestes complexes'
  ]
};
```

---

## 📊 MONITORING ACCESSIBILITÉ

### 1. Métriques (OBLIGATOIRES)
```typescript
// Métriques accessibilité à tracker
interface A11yMetrics {
  contrastRatio: number;
  keyboardNavigationScore: number;
  ariaComplianceScore: number;
  screenReaderCompatibility: number;
  wcagViolations: {
    level: 'A' | 'AA' | 'AAA';
    count: number;
    severity: 'critical' | 'serious' | 'moderate' | 'minor';
  }[];
}

// Audit automatique
const auditA11y = async (url: string): Promise<A11yMetrics> => {
  const results = await axePuppeteer(url);
  
  return {
    contrastRatio: calculateContrastRatio(results),
    keyboardNavigationScore: testKeyboardNav(results),
    ariaComplianceScore: testAriaCompliance(results),
    screenReaderCompatibility: testScreenReader(results),
    wcagViolations: results.violations.map(v => ({
      level: v.tags.includes('wcag2aa') ? 'AA' : 'A',
      count: v.nodes.length,
      severity: v.impact as any
    }))
  };
};
```

---

## 🎯 OBJECTIFS ACCESSIBILITÉ

### Court terme (1 mois) :
- ✅ WCAG 2.1 AA compliance sur tous composants
- ✅ Tests axe-core automatisés
- ✅ Focus management correct
- ✅ Contraste validé automatiquement

### Moyen terme (3 mois) :
- ✅ Tests avec vrais utilisateurs handicapés
- ✅ Support lecteurs d'écran avancé
- ✅ Certification AccessiWeb
- ✅ Formation équipe accessibilité

### Long terme (6 mois) :
- ✅ WCAG 2.1 AAA sur composants critiques
- ✅ AI-powered accessibility testing
- ✅ Accessibilité cognitive avancée
- ✅ Standards internationaux (EN 301 549)

---

**RÈGLE ULTIME ACCESSIBILITÉ : "Accessible by design, not by retrofit"**
