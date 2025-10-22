# Release Guide

Ce guide explique comment utiliser Changesets pour gérer les versions et publier les packages du monorepo.

## Workflow de Release

### 1. Créer un Changeset

Après avoir fait des modifications aux packages, créez un changeset :

```bash
pnpm changeset
```

Cette commande vous guidera pour :
- Sélectionner les packages modifiés
- Choisir le type de changement (patch, minor, major)
- Écrire un résumé des changements

### 2. Commit le Changeset

```bash
git add .changeset/
git commit -m "feat: add new component"
git push
```

### 3. Version Bump (Automatique via PR)

Quand vous pushez sur `main`, GitHub Actions :
1. Détecte les changesets
2. Crée/met à jour une PR "Release" automatiquement
3. Cette PR contient tous les bumps de version et changelogs

### 4. Publier (Merge de la PR Release)

Quand vous mergez la PR "Release" :
1. Les versions sont bumpées
2. Les changelogs sont générés
3. Les packages sont publiés sur GitHub Packages (optionnel)

## Commandes Manuelles

### Version Bump Manuel

```bash
pnpm changeset:version
```

Cette commande :
- Applique tous les changesets en attente
- Bumpe les versions des packages
- Génère/met à jour les CHANGELOG.md
- Supprime les changesets appliqués

### Installation après Version Bump

```bash
pnpm -w install
```

Nécessaire pour synchroniser le lockfile après les changements de version.

### Build avant Publication

```bash
pnpm -w run build
```

S'assurer que tous les packages buildent correctement.

### Publication Manuelle

```bash
pnpm changeset:publish
```

Publie tous les packages avec des versions non publiées.

## Types de Changements

### Patch (0.0.X)
- Bug fixes
- Corrections de typos
- Améliorations de performance sans breaking changes

```bash
# Exemple de changeset patch
---
"@avnir/ui": patch
---

Fix button focus ring in Safari
```

### Minor (0.X.0)
- Nouvelles fonctionnalités
- Nouveaux composants
- Nouvelles props (non-breaking)

```bash
# Exemple de changeset minor
---
"@avnir/ui": minor
---

Add new Badge component with variants
```

### Major (X.0.0)
- Breaking changes
- Suppression de props/composants
- Changements d'API

```bash
# Exemple de changeset major
---
"@avnir/ui": major
---

BREAKING: Remove deprecated size prop from Button component
```

## Configuration des Packages

### Packages Publics

Pour publier un package, s'assurer que `package.json` contient :

```json
{
  "name": "@avnir/ui",
  "private": false,
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Packages Privés

Les apps restent privées :

```json
{
  "name": "muzisystem",
  "private": true
}
```

## GitHub Packages Setup

### 1. Créer un Token

1. GitHub Settings → Developer settings → Personal access tokens
2. Créer un token avec scope `write:packages`
3. Ajouter le token comme secret `NPM_TOKEN` dans le repo

### 2. Configuration .npmrc

Créer `.npmrc` dans le repo :

```
@avnir:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

### 3. Installation depuis GitHub Packages

```bash
npm install @avnir/ui@latest
```

## Troubleshooting

### Changeset en Attente

Si des changesets sont en attente :

```bash
# Voir les changesets
ls .changeset/

# Appliquer manuellement
pnpm changeset:version
```

### Erreur de Publication

Si la publication échoue :

1. Vérifier les permissions GitHub Packages
2. Vérifier le token NPM_TOKEN
3. S'assurer que les packages buildent correctement

### Rollback

Pour annuler une release :

1. Revert le commit de release
2. Supprimer les tags Git si nécessaire
3. Republier la version précédente si nécessaire

## Best Practices

1. **Un changeset par feature** : Créez un changeset pour chaque fonctionnalité
2. **Messages clairs** : Écrivez des messages de changeset descriptifs
3. **Test avant release** : Toujours tester les builds avant de merger la PR release
4. **Semantic versioning** : Respectez semver pour les breaking changes
5. **Changelog review** : Relisez les changelogs générés avant publication

## Exemple de Workflow Complet

```bash
# 1. Développement
git checkout -b feature/new-component
# ... développement ...

# 2. Créer changeset
pnpm changeset
# Sélectionner @avnir/ui, minor, "Add new Alert component"

# 3. Commit et push
git add .
git commit -m "feat: add Alert component"
git push

# 4. Merge PR
# GitHub Actions crée automatiquement une PR release

# 5. Review et merge PR release
# Les packages sont automatiquement publiés
```
