# MUZITOOLS - Song Key & BPM Finder

Version expérimentale v0 d'un outil d'analyse audio pour découvrir le BPM, la tonalité et le code Camelot de vos fichiers musicaux.

## 🚀 Lancement rapide

```bash
# Depuis la racine du monorepo
pnpm dev:muzitools

# Ou depuis ce dossier
pnpm dev
```

L'application sera disponible sur [http://localhost:3005](http://localhost:3005)

## 🎵 Fonctionnalités

### Version actuelle (v0)
- **Interface drag & drop** : Glissez vos fichiers audio ou utilisez le bouton de sélection
- **Formats supportés** : MP3, WAV, M4A (max 50MB)
- **Résultats affichés** :
  - BPM (battements par minute)
  - Tonalité musicale (ex: C#m)
  - Code Camelot (ex: 12A)
  - Durée du fichier
- **Actions** : Réinitialiser l'analyse, copier les résultats

### ⚠️ Limites v0 (expérimental)
- **Résultats simulés** : Cette version génère des données aléatoires pour démonstration
- **Pas d'analyse réelle** : L'intégration d'une librairie d'analyse audio viendra dans v0.2+
- **Interface basique** : Design fonctionnel mais sera amélioré

## 🔒 Sécurité & Confidentialité

### Validation stricte
- Types de fichiers autorisés : `audio/mpeg`, `audio/wav`, `audio/mp4`, `audio/x-m4a`
- Taille maximale : 50MB par fichier
- Validation côté client avant traitement

### Confidentialité
- **100% côté client** : Aucun fichier envoyé sur serveur
- **Aucune collecte de données** : Pas de tracking, analytics ou cookies
- **Traitement local** : Tous les calculs se font dans votre navigateur

## 🏗️ Architecture

### Structure technique
```
apps/muzitools/
├── src/app/
│   ├── layout.tsx          # Layout principal avec brand avnir-studio
│   ├── page.tsx            # Page d'accueil avec drag & drop
│   └── about/page.tsx      # Page à propos
├── package.json            # Dépendances (port 3005)
├── tailwind.config.ts      # Configuration Tailwind
└── README.md              # Ce fichier
```

### Dépendances
- **Next.js 15** : Framework React
- **@avnir/ui** : Composants du design system
- **@avnir/design** : Tokens et styles CSS
- **@features/audio-tools** : Package audio (futur)

### Brand & Design
- **Brand** : `avnir-studio` (couleur primaire #ededed)
- **Thème** : Dark mode par défaut
- **Styles** : Classes CSS du design system AVNIR (pas de Tailwind dans composants)

## 🛠️ Développement

### Scripts disponibles
```bash
pnpm dev        # Serveur de développement (port 3005)
pnpm build      # Build de production
pnpm start      # Serveur de production
pnpm lint       # Linting ESLint
pnpm typecheck  # Vérification TypeScript
```

### Règles de développement
- **Sécurité > Accessibilité > Performance > Architecture** (priorités)
- **Pas de Tailwind dans composants** : Utiliser classes CSS design system
- **Variables CSS obligatoires** : `var(--primary)`, `var(--space-*)`, etc.
- **Composants dans @avnir/ui** : Pas de composants locaux

### Ajout de fonctionnalités
1. **Styles** : Modifier `packages/design/themes.css`
2. **Composants** : Créer dans `packages/ui/src/components/`
3. **Build** : Exécuter `pnpm build` après modif CSS
4. **Tests** : Vérifier sécurité, accessibilité, performance

## 🗺️ Roadmap

### v0.1 (Actuel) ✅
- Interface de base avec drag & drop
- Résultats simulés pour démonstration
- Validation sécurité et types de fichiers
- Pages Accueil et À propos

### v0.2 (Prochaine)
- Intégration librairie d'analyse audio réelle
- Détection BPM basique avec Web Audio API
- Amélioration de l'UX pendant l'analyse

### v0.3
- Détection de tonalité musicale
- Calcul du code Camelot
- Historique des analyses

### v1.0 (Production)
- Analyse audio précise et rapide
- Export des résultats (JSON, CSV)
- Analyse par lots (plusieurs fichiers)
- Mode avancé pour producteurs/DJs

## 🐛 Problèmes connus

### Limitations techniques v0
- Résultats simulés (pas d'analyse réelle)
- Pas de persistance des données
- Interface basique

### Navigateurs supportés
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Pas de support IE

## 📞 Support

Pour signaler un bug ou proposer une amélioration :
1. Vérifier les problèmes connus ci-dessus
2. Créer une issue dans le repo principal
3. Inclure : navigateur, fichier testé, comportement attendu vs réel

---

**MUZITOOLS v0** - Outil expérimental d'analyse audio  
Développé avec le design system AVNIR Studio
