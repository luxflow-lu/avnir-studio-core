# Footer Finsweet - Exemple d'utilisation

## ✅ Approche Finsweet respectée

- ✅ **Composition avec children** (pas de props complexes)
- ✅ **Compound components** (Footer.Logo, Footer.Link, etc.)
- ✅ **Classes CSS pures** (pas de logique dans les composants)
- ✅ **Flexibilité maximale** (tu composes comme tu veux)
- ✅ **Sémantique HTML** (footer, form, input, button, a)

## Exemple complet MUZITOOLS

```tsx
"use client";

import { Layout } from "@avnir/ui";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter:", email);
    setEmail("");
  };

  return (
    <Layout.Footer>
      <Layout.Footer.Top>
        {/* Newsletter à gauche */}
        <Layout.Footer.Newsletter>
          <Layout.Footer.Logo>
            MUZI<span style={{color: 'var(--primary)'}}>TOOLS</span>
          </Layout.Footer.Logo>
          
          <Layout.Footer.Text>
            Restez informé des nouvelles fonctionnalités et mises à jour.
          </Layout.Footer.Text>
          
          <Layout.Footer.Form onSubmit={handleSubmit}>
            <Layout.Footer.Input
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Layout.Footer.Button>S'abonner</Layout.Footer.Button>
          </Layout.Footer.Form>
          
          <Layout.Footer.Disclaimer>
            En vous abonnant, vous acceptez notre{" "}
            <a href="/privacy">Politique de confidentialité</a>.
          </Layout.Footer.Disclaimer>
        </Layout.Footer.Newsletter>

        {/* 3 colonnes de liens à droite */}
        <Layout.Footer.Links>
          <Layout.Footer.Column title="MUZITOOLS">
            <Layout.Footer.Link href="/">Accueil</Layout.Footer.Link>
            <Layout.Footer.Link href="/analyzer">Analyzer</Layout.Footer.Link>
            <Layout.Footer.Link href="/about">À propos</Layout.Footer.Link>
          </Layout.Footer.Column>

          <Layout.Footer.Column title="Fonctionnalités">
            <Layout.Footer.Link href="/analyzer">Détection BPM</Layout.Footer.Link>
            <Layout.Footer.Link href="/analyzer">Détection Tonalité</Layout.Footer.Link>
            <Layout.Footer.Link href="/analyzer">Code Camelot</Layout.Footer.Link>
          </Layout.Footer.Column>

          <Layout.Footer.Column title="Ressources">
            <Layout.Footer.Link href="/about">Guide d'utilisation</Layout.Footer.Link>
            <Layout.Footer.Link href="/#faq">FAQ</Layout.Footer.Link>
            <Layout.Footer.Link href="/about">Formats supportés</Layout.Footer.Link>
            <Layout.Footer.Link href="#">Confidentialité</Layout.Footer.Link>
            <Layout.Footer.Link href="#">Conditions</Layout.Footer.Link>
          </Layout.Footer.Column>
        </Layout.Footer.Links>
      </Layout.Footer.Top>

      <Layout.Footer.Separator />

      <Layout.Footer.Bottom>
        <Layout.Footer.Copyright>
          © 2025 MUZITOOLS - Fait avec ❤️ par AVNIR Studio
        </Layout.Footer.Copyright>
        
        <Layout.Footer.Social>
          <Layout.Footer.SocialLink href="https://instagram.com">
            Instagram
          </Layout.Footer.SocialLink>
          <Layout.Footer.SocialLink href="https://youtube.com">
            Youtube
          </Layout.Footer.SocialLink>
        </Layout.Footer.Social>
      </Layout.Footer.Bottom>
    </Layout.Footer>
  );
}
```

## Avantages Finsweet

### 1. Composition libre
Tu peux réorganiser comme tu veux :
```tsx
<Layout.Footer>
  <Layout.Footer.Top>
    {/* Inverse l'ordre si tu veux */}
    <Layout.Footer.Links>...</Layout.Footer.Links>
    <Layout.Footer.Newsletter>...</Layout.Footer.Newsletter>
  </Layout.Footer.Top>
</Layout.Footer>
```

### 2. Pas de state obligatoire
Si tu ne veux pas de newsletter, tu ne mets pas le form :
```tsx
<Layout.Footer>
  <Layout.Footer.Links>
    <Layout.Footer.Column title="Product">
      <Layout.Footer.Link href="/">Home</Layout.Footer.Link>
    </Layout.Footer.Column>
  </Layout.Footer.Links>
  
  <Layout.Footer.Separator />
  
  <Layout.Footer.Bottom>
    <Layout.Footer.Copyright>© 2025</Layout.Footer.Copyright>
  </Layout.Footer.Bottom>
</Layout.Footer>
```

### 3. Classes CSS personnalisables
Chaque composant accepte `className` :
```tsx
<Layout.Footer.Logo className="custom-logo">
  MUZITOOLS
</Layout.Footer.Logo>
```

### 4. Props HTML natives
Tous les props HTML sont passés :
```tsx
<Layout.Footer.Link 
  href="/about" 
  target="_blank"
  rel="noopener"
>
  About
</Layout.Footer.Link>
```

## Structure des composants

```
Footer (footer)
├── Footer.Top (div.footer-top)
│   ├── Footer.Newsletter (div.footer-newsletter)
│   │   ├── Footer.Logo (div.footer-logo)
│   │   ├── Footer.Text (p.footer-newsletter-text)
│   │   ├── Footer.Form (form.footer-newsletter-form)
│   │   │   ├── Footer.Input (input.footer-newsletter-input)
│   │   │   └── Footer.Button (button.footer-newsletter-button)
│   │   └── Footer.Disclaimer (div.footer-newsletter-disclaimer)
│   └── Footer.Links (div.footer-links)
│       └── Footer.Column (div.footer-column)
│           ├── h3.footer-column-title
│           └── div.footer-column-links
│               └── Footer.Link (a.footer-link)
├── Footer.Separator (div.footer-separator)
└── Footer.Bottom (div.footer-bottom)
    ├── Footer.Copyright (div.footer-copyright)
    └── Footer.Social (div.footer-social)
        └── Footer.SocialLink (a.footer-social-link)
```

## Règles AVNIR respectées ✅

1. ✅ **100% CSS pur** - Pas de Tailwind dans les composants
2. ✅ **Variables CSS** - Toutes les couleurs via var(--*)
3. ✅ **Pas de styles inline** - Tout dans footer.css
4. ✅ **forwardRef** - Tous les composants
5. ✅ **Props typées** - Interfaces TypeScript strictes
6. ✅ **Composition** - Approche Finsweet/Radix UI
