# MUZIDEV - Formation & Outils

Application de formation musicale avec outils interactifs comme le Tap Tempo.

## 🚀 Développement

```bash
# Installation
pnpm -w install

# Développement
pnpm -w --filter ./apps/muzidev run dev

# Build
pnpm -w --filter ./apps/muzidev run build
```

## 🌐 Déploiement Vercel

### Configuration

```json
{
  "buildCommand": "pnpm -w --filter ./apps/muzidev run build",
  "installCommand": "pnpm -w install --frozen-lockfile",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le moment.

### Setup Vercel

1. Connecter le repo à Vercel
2. Sélectionner `apps/muzidev` comme root directory
3. Déploiement automatique sur push vers `main`

## 🎵 Fonctionnalités

- Tap Tempo interactif avec détection BPM
- Outils de formation musicale
- Theming MUZIDEV brand (vert)
- Interface responsive avec support clavier
