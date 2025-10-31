# Standardisations AVNIR

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-31 -->
<!-- Last Validated: 2025-10-31 -->
<!-- Next Review: 2025-11-30 -->
<!-- Dependencies: 01_repository_overview.md -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->

## Vue d'ensemble

Ce document liste toutes les standardisations mises en place dans l'écosystème AVNIR pour garantir la cohérence, la qualité et la maintenabilité à travers tous les sites et applications.

**Total : 15 standardisations**

---

## 1. Footer Standardisé

**Package :** `@avnir/content`  
**Composant :** `Layout.Footer`

- Footer unifié pour tous les sites
- 4 sections configurables
- Bottom content avec copyright et badges
- Responsive design

---

## 2. Pages Légales

**Package :** `@avnir/content`  
**Pages :** Privacy, Cookies, CGU, Mentions Légales

- Contenu standardisé et conforme RGPD
- Structure sémantique HTML
- Mise à jour centralisée
- Routes : `/legal/privacy`, `/legal/cookies`, `/legal/terms`, `/legal/mentions`

---

## 3. SEO Metadata

**Package :** `@avnir/content`  
**Fonction :** `generateMetadata()`

- Configuration SEO par site
- OpenGraph + Twitter Cards
- Metadata par page avec overrides
- Sitemap.xml automatique
- Robots.txt configuré

---

## 4. Formulaire de Contact

**Package :** `@avnir/content` + `@avnir/ui`  
**Composant :** `Form.ContactForm`

- Formulaire unifié avec validation
- Configuration par brand (recipient, subject)
- API route `/api/contact`
- Intégration nodemailer
- Gestion des erreurs et états de chargement

---

## 5. Pages d'Erreur

**Composants :** `System.NotFound404`, `System.ServerError500`

- 404 : Page non trouvée
- 500 : Erreur serveur
- Design cohérent
- Actions de retour/retry
- Routes : `/not-found`, `/error`

---

## 6. Breadcrumbs

**Composant :** `Navigation.Breadcrumbs`

- Navigation fil d'Ariane
- Génération automatique depuis URL
- Schema.org markup
- Responsive

---

## 7. Sitemap & Robots

**Fichiers :** `sitemap.ts`, `robots.ts`

- Génération automatique sitemap.xml
- Configuration robots.txt
- SEO optimisé
- Mise à jour dynamique

---

## 8. Analytics (Google Analytics 4)

**Package :** `@avnir/analytics`

- Google Analytics 4 integration
- 20+ événements standardisés
- `<AnalyticsProvider>` + `useAnalytics()`
- Tracking automatique des page views
- Debug mode en développement

**Événements :**
- PAGE_VIEW, SIGNUP, LOGIN, LOGOUT
- BUTTON_CLICK, LINK_CLICK, FORM_SUBMIT
- VIDEO_PLAY, VIDEO_COMPLETE, DOWNLOAD
- ADD_TO_CART, PURCHASE
- ERROR, NEWSLETTER_SIGNUP

---

## 9. Error Tracking (Sentry)

**Package :** `@avnir/monitoring`

- Sentry error tracking
- Performance monitoring
- Session replay sur erreurs
- `<ErrorBoundary>` React
- User context + breadcrumbs
- Filtrage automatique des erreurs

---

## 10. Notifications (Toast)

**Package :** `@avnir/notifications`

- Toast notifications (react-hot-toast)
- Types : success, error, info, warning, loading
- Promise-based notifications
- `<ToastProvider>` + fonctions helper
- Styled avec design system AVNIR

---

## 11. Email Templates

**Package :** `@avnir/emails`

- React Email templates
- BaseEmail wrapper avec footer
- WelcomeEmail
- ContactFormEmail
- Responsive, multi-client support
- Brand-specific styling

---

## 12. Feature Flags

**Package :** `@avnir/features`

- Feature flags JSON-based
- Environment-based flags
- Percentage rollouts (A/B testing)
- `useFeature()` hook
- `<FeatureGate>` component
- Pas de dépendances externes

---

## 13. Cookie Consent (RGPD)

**Package :** `@avnir/consent`

- RGPD/GDPR compliant
- Granular consent (4 catégories)
  - Necessary (obligatoire)
  - Analytics
  - Marketing
  - Preferences
- `<CookieBanner>` component
- `useConsent()` hook
- localStorage persistence
- Intégration avec Analytics

---

## 14. Loading States

**Composants :** `LoadingCard`, `Skeleton`, `Spinner`

- LoadingCard avec shimmer animation
- Skeleton loaders
- Spinners configurables
- Styled avec design system

---

## 15. Empty States

**Composants :** `EmptyState` + variantes

- EmptyState base component
- Variantes prédéfinies :
  - NoSearchResults
  - NoData
  - NoFiles
  - NoContent
- Icon support
- Action button support

---

## Utilisation

### Installation

Tous les packages sont disponibles dans le monorepo :

```bash
# Déjà installés dans le workspace
pnpm install
```

### Import

```typescript
// Analytics
import { AnalyticsProvider, useAnalytics } from "@avnir/analytics";

// Monitoring
import { ErrorBoundary, captureException } from "@avnir/monitoring";

// Notifications
import { ToastProvider, success, error } from "@avnir/notifications";

// Emails
import { WelcomeEmail, ContactFormEmail } from "@avnir/emails";

// Features
import { useFeature, FeatureGate } from "@avnir/features";

// Consent
import { CookieBanner, useConsent } from "@avnir/consent";

// Content
import { seoConfig, legalContent, contactConfig } from "@avnir/content";
```

### Exemple d'intégration complète

```tsx
// app/layout.tsx
import { AnalyticsProvider } from "@avnir/analytics";
import { ErrorBoundary } from "@avnir/monitoring";
import { ToastProvider } from "@avnir/notifications";
import { CookieBanner } from "@avnir/consent";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ErrorBoundary>
          <AnalyticsProvider brand="muzidev">
            {children}
            <ToastProvider />
            <CookieBanner
              onAccept={(preferences) => {
                // Initialize analytics if accepted
                if (preferences.analytics) {
                  // Already initialized by AnalyticsProvider
                }
              }}
            />
          </AnalyticsProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
```

---

## Avantages

### Cohérence
- Même UX sur tous les sites
- Design system unifié
- Comportements standardisés

### Maintenabilité
- Code centralisé
- Mise à jour unique → effet partout
- Moins de duplication

### Qualité
- Tests centralisés
- Type-safety avec TypeScript
- Documentation complète

### Compliance
- RGPD/GDPR ready
- SEO optimisé
- Accessibilité WCAG 2.1 AA

### Performance
- Tree-shaking
- Code splitting
- Optimisations centralisées

---

## Roadmap

### Prochaines standardisations (non prioritaires)

- Search System (Algolia)
- Social Sharing
- Newsletter Subscription (Mailchimp/ConvertKit)
- Auth System (après validation architecture multi-sites)
- Payment System (après validation architecture multi-sites)

---

## Maintenance

- **Mise à jour :** Modifier le package concerné
- **Tests :** Obligatoires avant merge
- **Documentation :** README par package
- **Versioning :** Changesets pour breaking changes

---

**Note :** Ces standardisations suivent les standards AVNIR avec priorité : **Sécurité > Accessibilité > Performance > Architecture**
