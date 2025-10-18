# AVNIR-Studio Core

Monorepo pour le hub **AVNIR-Studio** et ses satellites (MUZIDEV, MUZIPICS, …).
- **brandkit/** : design system, assets, chartes.
- **packages/** : `@avnir/design` (tokens, thèmes, preset Tailwind), `@avnir/ui` (primitives UI).
- **features/** : modules réutilisables entre sites (ex. générateur visuel).
- **apps/** : un dossier par site/app (Next.js). Webflow peut consommer les mêmes variables via `themes.css`.

## Démarrer
```bash
corepack enable
pnpm i
pnpm dev

Convention
Themings via <html data-brand="..."> ; seule --primary change.
Couleurs de base (communes) :
bg #0B0B0D, surface #141317, titles #F4F4F4, body text #C5CCD6.
