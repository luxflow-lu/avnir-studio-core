# Thème — AVNIR Design System

- **Commun**
  - Fonds: `--bg-dark`, `--bg-light`, alias `--bg` (par défaut dark)
  - Surface: `--surface`
  - Texte secondaire: `--text-muted`
  - Rayons: `--radius-{xs,sm,md,lg,xl,full}`
  - Ombres: `--shadow-{sm,md,lg}`
- **Variable selon la marque**
  - `--brand`, `--brand-on`
- **Changer la marque**
  - Définir sur `<html>`: `data-brand="avnir|muzidev|muzipics|muziweb|muzimerch|muzibase|muzimanager|promozic"`
- **Snippets Tailwind**
  - Bouton primaire:
    ```html
    <button class="bg-[var(--brand)] text-[var(--brand-on)] rounded-[var(--radius-sm)] shadow-sm">
      OK
    </button>
    ```
  - Bouton secondaire:
    ```html
    <button
      class="border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-[var(--brand-on)] rounded-[var(--radius-sm)]"
    >
      OK
    </button>
    ```
  - Carte:
    ```html
    <div class="bg-surface rounded-[var(--radius-md)] shadow-md"></div>
    ```
