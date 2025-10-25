# Footer Component - Exemple d'utilisation

## ✅ Règles AVNIR respectées

- ✅ **100% CSS pur** dans le composant (pas de Tailwind)
- ✅ **Variables CSS uniquement** (var(--primary), var(--space-*), etc.)
- ✅ **Pas de couleurs hardcodées** (sauf #0b0b0d pour texte sur primary)
- ✅ **Pas de styles inline**
- ✅ **Classes sémantiques** du design system
- ✅ **forwardRef** pour composant DOM
- ✅ **Props typées** avec TypeScript

## Structure du Footer (selon capture)

```
┌─────────────────────────────────────────────────────────────┐
│ MUZIPICS Logo                    Explore    Services  Company│
│ Newsletter text                  Accueil    MUZIDEV    AVNIR │
│ [Email input] [Subscribe]        Formation  MUZIPICS   Jacques│
│ Privacy Policy disclaimer        Tarifs     MUZIMERCH  Legal  │
│                                  FAQ        MUZIWEB    Privacy│
│                                  Contact    MUZIBASE   Cookies│
│                                             MUZIMANAGER       │
├─────────────────────────────────────────────────────────────┤
│ © 2025 AVNIR-Studio              Instagram    Youtube        │
└─────────────────────────────────────────────────────────────┘
```

## Exemple d'utilisation

```tsx
import { Layout } from "@avnir/ui";

<Layout.Footer
  logo={<span>MUZI<span style={{color: 'var(--primary)'}}>PICS</span></span>}
  newsletterTitle="Join our newsletter to stay up to date on features and releases."
  newsletterPlaceholder="Enter your email"
  newsletterButtonText="Subscribe"
  newsletterDisclaimer={
    <>
      By subscribing you agree to with our{" "}
      <a href="/privacy">Privacy Policy</a> and provide consent to receive
      updates from our company.
    </>
  }
  onNewsletterSubmit={(email) => {
    console.log("Newsletter signup:", email);
    // TODO: Implement newsletter API
  }}
  columns={[
    {
      title: "Explore",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Formation", href: "/formation" },
        { label: "Tarifs", href: "/tarifs" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "MUZIDEV", href: "https://muzidev.com" },
        { label: "MUZIPICS", href: "https://muzipics.com" },
        { label: "MUZIMERCH", href: "https://muzimerch.com" },
        { label: "MUZIWEB", href: "https://muziweb.com" },
        { label: "MUZIBASE", href: "https://muzibase.com" },
        { label: "MUZIMANAGER", href: "https://muzimanager.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "AVNIR-Studio", href: "https://avnir.studio" },
        { label: "Jacques", href: "/about/jacques" },
        { label: "Mentions légales", href: "/legal" },
        { label: "Confidentialité", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ]}
  copyright="© 2025 AVNIR-Studio. All rights reserved."
  socialLinks={[
    {
      name: "Instagram",
      href: "https://instagram.com/avnir",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@avnir",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ]}
/>
```

## Props disponibles

| Prop | Type | Description |
|------|------|-------------|
| `logo` | `React.ReactNode` | Logo à afficher (ex: MUZIPICS) |
| `newsletterTitle` | `string` | Texte au-dessus du formulaire |
| `newsletterPlaceholder` | `string` | Placeholder de l'input email |
| `newsletterButtonText` | `string` | Texte du bouton Subscribe |
| `newsletterDisclaimer` | `React.ReactNode` | Texte de disclaimer avec Privacy Policy |
| `onNewsletterSubmit` | `(email: string) => void` | Callback lors de la soumission |
| `columns` | `FooterColumn[]` | Colonnes de liens (Explore, Services, Company) |
| `copyright` | `string` | Texte de copyright |
| `socialLinks` | `FooterSocialLink[]` | Liens réseaux sociaux avec icônes |

## Classes CSS disponibles

Toutes les classes sont dans `/packages/design/src/components/layout/footer.css` :

- `.footer` - Container principal
- `.footer-container` - Container avec max-width
- `.footer-top` - Section du haut (newsletter + liens)
- `.footer-newsletter` - Section newsletter
- `.footer-logo` - Logo
- `.footer-newsletter-form` - Formulaire
- `.footer-newsletter-input` - Input email
- `.footer-newsletter-button` - Bouton Subscribe
- `.footer-newsletter-disclaimer` - Texte disclaimer
- `.footer-links` - Grid des colonnes
- `.footer-column` - Une colonne de liens
- `.footer-column-title` - Titre de colonne
- `.footer-link` - Lien individuel
- `.footer-separator` - Ligne de séparation
- `.footer-bottom` - Section du bas
- `.footer-copyright` - Texte copyright
- `.footer-social` - Container réseaux sociaux
- `.footer-social-link` - Lien réseau social

## Responsive

- **Desktop** : Newsletter (1/3) + Links (2/3)
- **Tablet** : Newsletter + Links empilés
- **Mobile** : Tout empilé, colonnes en 1 colonne

## Variables CSS utilisées

```css
/* Spacing */
var(--space-8)
var(--space-12)
var(--space-16)
var(--space-24)
var(--space-32)
var(--space-48)
var(--space-64)

/* Colors */
var(--bg)
var(--text)
var(--titles)
var(--muted)
var(--primary)
var(--surface)
var(--border)

/* Typography */
var(--text-xs)
var(--text-sm)
var(--text-base)
var(--text-3xl)
var(--font-medium)
var(--font-semibold)
var(--font-bold)
var(--leading-relaxed)

/* Border radius */
var(--radius-md)
```

## ✅ Validation

- [x] CSS pur (pas de Tailwind dans le composant)
- [x] Variables CSS uniquement
- [x] Pas de couleurs hardcodées
- [x] Pas de styles inline
- [x] forwardRef
- [x] Props typées TypeScript
- [x] Responsive mobile-first
- [x] Accessibilité (labels, focus states)
- [x] Build réussi ✅
