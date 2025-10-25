# Architecture Finsweet + @avnir/ui

## 🎯 Philosophie

### @avnir/ui (Composants)
- ✅ **Tokens CSS uniquement** (var(--primary), var(--space-16), etc.)
- ✅ **0% Tailwind** dans les composants
- ✅ **0% classes structurelles** (.section, .container)
- ✅ **Hooks CSS** pour customisation (--card-padding, --button-height)
- ✅ **Composition pure** avec children

### Apps (Pages)
- ✅ **Structure Finsweet** (.section, .container, .grid-*)
- ✅ **Tokens pour spacing** (--space-section-md, --padding-global)
- ✅ **Tailwind utilitaires** (si besoin, via preset)
- ✅ **Composition** des composants UI

---

## Exemple : Footer avec structure Finsweet

### Dans l'app (muzitools/page.tsx)

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
    <>
      {/* Main content */}
      <main>...</main>

      {/* Footer avec structure Finsweet */}
      <Layout.Footer>
        {/* Container Finsweet géré par l'app */}
        <div className="container">
          <Layout.Footer.Top>
            {/* Newsletter */}
            <Layout.Footer.Newsletter>
              <Layout.Footer.Logo>
                MUZI<span style={{color: 'var(--primary)'}}>TOOLS</span>
              </Layout.Footer.Logo>
              
              <Layout.Footer.Text>
                Restez informé des nouvelles fonctionnalités.
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

            {/* Links */}
            <Layout.Footer.Links>
              <Layout.Footer.Column title="MUZITOOLS">
                <Layout.Footer.Link href="/">Accueil</Layout.Footer.Link>
                <Layout.Footer.Link href="/analyzer">Analyzer</Layout.Footer.Link>
              </Layout.Footer.Column>

              <Layout.Footer.Column title="Fonctionnalités">
                <Layout.Footer.Link href="/analyzer">Détection BPM</Layout.Footer.Link>
                <Layout.Footer.Link href="/analyzer">Tonalité</Layout.Footer.Link>
              </Layout.Footer.Column>

              <Layout.Footer.Column title="Ressources">
                <Layout.Footer.Link href="/about">Guide</Layout.Footer.Link>
                <Layout.Footer.Link href="/#faq">FAQ</Layout.Footer.Link>
              </Layout.Footer.Column>
            </Layout.Footer.Links>
          </Layout.Footer.Top>

          <Layout.Footer.Separator />

          <Layout.Footer.Bottom>
            <Layout.Footer.Copyright>
              © 2025 MUZITOOLS
            </Layout.Footer.Copyright>
            
            <Layout.Footer.Social>
              <Layout.Footer.SocialLink href="https://instagram.com">
                Instagram
              </Layout.Footer.SocialLink>
            </Layout.Footer.Social>
          </Layout.Footer.Bottom>
        </div>
      </Layout.Footer>
    </>
  );
}
```

### Classes Finsweet dans l'app (global.css)

```css
/* Structure Finsweet - Gérée par l'app */

.container {
  max-width: var(--container-max-width, 1280px);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--padding-global, var(--space-24));
  padding-right: var(--padding-global, var(--space-24));
}

.section {
  padding-top: var(--padding-section-md, var(--space-64));
  padding-bottom: var(--padding-section-md, var(--space-64));
}

.section--sm {
  padding-top: var(--padding-section-sm, var(--space-32));
  padding-bottom: var(--padding-section-sm, var(--space-32));
}

.section--lg {
  padding-top: var(--padding-section-lg, var(--space-96));
  padding-bottom: var(--padding-section-lg, var(--space-96));
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-gap, var(--space-32));
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--grid-gap, var(--space-32));
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

---

## Tokens dans themes.css

```css
:root {
  /* Container */
  --container-max-width: 1280px;
  
  /* Padding global (Finsweet) */
  --padding-global: 1.5rem; /* 24px */
  
  /* Padding sections (Finsweet) */
  --padding-section-sm: 2rem;   /* 32px */
  --padding-section-md: 4rem;   /* 64px */
  --padding-section-lg: 6rem;   /* 96px */
  --padding-section-xl: 8rem;   /* 128px */
  
  /* Grid gaps */
  --grid-gap: 2rem; /* 32px */
  --grid-gap-sm: 1rem; /* 16px */
  --grid-gap-lg: 3rem; /* 48px */
  
  /* Spacing scale (pour composants) */
  --space-4: 0.25rem;
  --space-8: 0.5rem;
  --space-12: 0.75rem;
  --space-16: 1rem;
  --space-24: 1.5rem;
  --space-32: 2rem;
  --space-48: 3rem;
  --space-64: 4rem;
  --space-80: 5rem;
  --space-96: 6rem;
  --space-128: 8rem;
}
```

---

## Avantages de cette approche

### 1. Découplage total
```tsx
// @avnir/ui ne sait RIEN de .container ou .section
<Layout.Footer>
  {/* L'app décide de la structure */}
  <div className="container">
    <Layout.Footer.Top>...</Layout.Footer.Top>
  </div>
</Layout.Footer>
```

### 2. Flexibilité maximale
```tsx
// Variante sans container
<Layout.Footer>
  <Layout.Footer.Top>...</Layout.Footer.Top>
</Layout.Footer>

// Variante avec container custom
<Layout.Footer>
  <div className="container-fluid">
    <Layout.Footer.Top>...</Layout.Footer.Top>
  </div>
</Layout.Footer>
```

### 3. Tokens partout
```css
/* Dans @avnir/ui/footer.css */
.footer-top {
  gap: var(--space-80); /* Token du design system */
}

/* Dans app/global.css */
.container {
  padding-left: var(--padding-global); /* Token Finsweet */
}
```

### 4. Hooks CSS pour customisation
```tsx
// Dans l'app, tu peux override
<Layout.Footer style={{'--footer-padding': '2rem'}}>
  ...
</Layout.Footer>
```

```css
/* Dans footer.css */
.footer {
  padding: var(--footer-padding, var(--space-64)) 0;
}
```

---

## Checklist d'implémentation

### ✅ @avnir/ui
- [x] Composants utilisent uniquement var(--*)
- [x] Pas de classes .container, .section
- [x] Composition avec children
- [x] Hooks CSS pour customisation
- [x] 0% Tailwind dans les composants

### ✅ Apps
- [ ] Créer classes Finsweet (.container, .section, .grid-*)
- [ ] Définir tokens Finsweet (--padding-global, --padding-section-*)
- [ ] Wrapper composants UI avec structure Finsweet
- [ ] Utiliser Tailwind preset pour utilitaires (optionnel)

---

## Résultat

**@avnir/ui** : Bibliothèque de composants pure, réutilisable, découplée
**Apps** : Structure Finsweet flexible, tokens partout, composition libre

C'est exactement la philosophie Finsweet + design system moderne ! 🎯
