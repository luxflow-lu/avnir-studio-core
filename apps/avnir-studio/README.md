# AVNIR-Studio - Hub Principal

Application principale du hub AVNIR-Studio avec générateur de visuels et outils interconnectés.

## 🚀 Développement

```bash
# Installation
pnpm -w install

# Développement
pnpm -w --filter ./apps/avnir-studio run dev

# Build
pnpm -w --filter ./apps/avnir-studio run build
```

## 🌐 Déploiement Vercel

### Configuration

```json
{
  "buildCommand": "pnpm -w --filter ./apps/avnir-studio run build",
  "installCommand": "pnpm -w install --frozen-lockfile",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

### Setup Vercel

1. Connecter le repo à Vercel
2. Sélectionner `apps/avnir-studio` comme root directory
3. Déploiement automatique sur push vers `main`

## 🎨 Fonctionnalités

- Hub principal avec navigation vers les autres apps
- Générateur de visuels intégré
- Theming AVNIR brand par défaut
- Interface responsive et accessible
