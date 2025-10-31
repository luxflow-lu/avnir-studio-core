# @avnir/content

Centralized content and configuration for the AVNIR ecosystem.

## 📦 What's inside?

- **Footer configuration**: Standardized footer links, social media, copyright
- **Legal content**: Privacy policy, terms, cookies (coming soon)
- **Page patterns**: Reusable page templates (coming soon)

## 🚀 Usage

### Footer Configuration

```typescript
import { getFooterConfig, socialLinks, getCopyright } from "@avnir/content";

// Get footer config for a specific brand
const config = getFooterConfig("muzidev", [
  { label: "Formation", href: "/formation" },
  { label: "Tarifs", href: "/pricing" },
]);

// Access social links (same for all brands)
console.log(socialLinks.instagram); // https://www.instagram.com/avnir_studio/
console.log(socialLinks.youtube);   // https://www.youtube.com/@avnirstudio/

// Get copyright text
const copyright = getCopyright("MUZIDEV"); // © 2025 MUZIDEV. Powered by AVNIR-Studio.
```

### StandardFooter Component

The `StandardFooter` component (from `@avnir/ui`) uses this configuration automatically.

**Usage in `providers.tsx`:**

```tsx
import { StandardFooter } from "@avnir/ui";

export function Providers({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <StandardFooter
        brand="muzidev"
        logo={<img src="/logo.svg" alt="MUZIDEV" />}
        exploreLinks={[
          { label: "Formation", href: "/formation" },
          { label: "Tarifs", href: "/pricing" },
        ]}
      />
    </>
  );
}
```

## 📋 Footer Structure

All footers follow this standardized structure:

```
Footer
├── Logo + Newsletter
├── Links Grid
│   ├── Explore (custom links per brand)
│   ├── Services (all AVNIR sites except current + AVNIR-Studio)
│   ├── Company (AVNIR-Studio, Jacques, MUZISYSTEM)
│   └── Legals (Mentions, Privacy, Cookies)
└── Footer Bottom
    ├── Copyright: "© {year} {brand}. Powered by AVNIR-Studio."
    └── Social (Instagram + YouTube)
```

## 🎯 Benefits

- **DRY**: One source of truth for footer links, social media, copyright
- **Consistency**: All apps follow the same structure
- **Maintenance**: Update once, apply everywhere
- **Type-safe**: TypeScript ensures correct usage

## 🔧 Configuration

### Social Links

Defined in `src/footer/config.ts`:

```typescript
export const socialLinks = {
  instagram: "https://www.instagram.com/avnir_studio/",
  youtube: "https://www.youtube.com/@avnirstudio/",
};
```

### AVNIR Sites

All sites in the ecosystem:

```typescript
export const avnirSites = {
  "avnir-studio": { name: "AVNIR-Studio", url: "https://avnir-studio.com" },
  "muzidev": { name: "MUZIDEV", url: "https://muzidev.com" },
  "muzipics": { name: "MUZIPICS", url: "https://muzipics.com" },
  // ...
};
```

### Copyright Template

Dynamic copyright with year and brand name:

```typescript
export function getCopyright(brandName: string): string {
  const year = new Date().getFullYear();
  return `© ${year} ${brandName}. Powered by AVNIR-Studio.`;
}
```

## 📝 Coming Soon

- Legal content (privacy policy, terms, cookies)
- Page patterns (MarketingPage, LandingPage, etc.)
- SEO metadata templates
- Email templates
