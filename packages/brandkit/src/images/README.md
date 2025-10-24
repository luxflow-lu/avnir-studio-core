# Images Brandkit

Ce dossier contient les images utilisées par les différentes marques du système AVNIR.

## Structure recommandée :

```
images/
├── muzidev/
│   ├── hero-bg.jpg
│   └── ...
├── muzipics/
│   ├── hero-bg.jpg
│   └── ...
├── muziweb/
│   ├── hero-bg.jpg
│   └── ...
└── shared/
    ├── placeholder.jpg
    └── ...
```

## Utilisation :

```tsx
import { Hero } from "@avnir/ui";

<Hero
  layout="left"
  backgroundImage="/path/to/image.jpg"
  title="Votre titre"
  subtitle="Votre sous-titre"
  actions={<button>CTA</button>}
/>
```
