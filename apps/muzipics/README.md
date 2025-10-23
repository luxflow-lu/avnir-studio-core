# MUZIPICS - Générateur de Visuels

Application dédiée à la génération de visuels avec la même UI mais couleur primaire brand.

## 🚀 Développement

```bash
# Installation
pnpm -w install

# Développement
pnpm -w --filter ./apps/muzipics run dev

# Build
pnpm -w --filter ./apps/muzipics run build
```

## 🌐 Déploiement Vercel

### Configuration

```json
{
  "buildCommand": "pnpm -w --filter ./apps/muzipics run build",
  "installCommand": "pnpm -w install --frozen-lockfile",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

### Setup Vercel

1. Connecter le repo à Vercel
2. Sélectionner `apps/muzipics` comme root directory
3. Déploiement automatique sur push vers `main`

## 🎨 Fonctionnalités

- Générateur de visuels intégré
- Theming MUZIPICS brand (orange)
- Interface identique à avnir-studio avec couleurs adaptées
- Export et partage de visuels
