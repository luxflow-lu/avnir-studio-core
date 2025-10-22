import * as React from "react";

export const Guidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header data-force-dark className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="h2 text-titles">Guidelines</h1>
              <p className="text-muted">Règles et bonnes pratiques du Design System</p>
            </div>
            <nav className="flex gap-4">
              <a href="#usage" className="text-sm text-muted hover:text-foreground transition-colors">Usage</a>
              <a href="#patterns" className="text-sm text-muted hover:text-foreground transition-colors">Patterns</a>
              <a href="#accessibility" className="text-sm text-muted hover:text-foreground transition-colors">A11y</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-16">
        {/* Usage data-brand */}
        <section id="usage">
          <h2 className="h3 text-titles mb-6">Usage data-brand</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Configuration des marques</h3>
              <p className="text-muted mb-4">
                Chaque application doit définir sa marque via l'attribut <code className="text-accent">data-brand</code> sur l'élément HTML.
              </p>
              <div className="bg-background p-4 rounded-md">
                <code className="text-sm font-mono text-accent">
                  {'<html data-brand="muzidev" data-theme="dark">'}
                </code>
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Marques disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "avnir", color: "#EDEDED", desc: "AVNIR Studio principal" },
                  { name: "muzidev", color: "#5CB9F2", desc: "Formation et développement" },
                  { name: "muzipics", color: "#FF2D55", desc: "Galerie et médias" },
                  { name: "muziweb", color: "#9802EB", desc: "Sites web" },
                  { name: "muzimerch", color: "#FF9D00", desc: "E-commerce" },
                  { name: "muzibase", color: "#2FAD66", desc: "Base de données" },
                  { name: "muzimanager", color: "#FFD700", desc: "Gestion" },
                ].map((brand) => (
                  <div key={brand.name} className="flex items-center gap-3 p-3 bg-background rounded-md">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: brand.color }}
                    />
                    <div>
                      <code className="text-sm font-mono text-accent">{brand.name}</code>
                      <p className="text-xs text-muted">{brand.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Patterns theming */}
        <section id="patterns">
          <h2 className="h3 text-titles mb-6">Patterns de theming</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Semi-light mode</h3>
              <p className="text-muted mb-4">
                En mode light, les headers et footers restent en mode dark pour maintenir la cohérence visuelle.
              </p>
              <div className="bg-background p-4 rounded-md">
                <code className="text-sm font-mono text-accent">
                  {'<header data-force-dark>...</header>'}
                  <br />
                  {'<footer data-force-dark>...</footer>'}
                </code>
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Variables CSS dynamiques</h3>
              <p className="text-muted mb-4">
                Les couleurs s'adaptent automatiquement selon le thème et la marque active.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-md">
                  <div className="text-sm font-mono text-accent mb-2">Couleurs de base</div>
                  <div className="space-y-1 text-xs font-mono text-muted">
                    <div>var(--bg) - Arrière-plan</div>
                    <div>var(--surface) - Surfaces</div>
                    <div>var(--text) - Texte principal</div>
                    <div>var(--titles) - Titres</div>
                    <div>var(--muted) - Texte secondaire</div>
                  </div>
                </div>
                <div className="bg-background p-4 rounded-md">
                  <div className="text-sm font-mono text-accent mb-2">Couleurs d'action</div>
                  <div className="space-y-1 text-xs font-mono text-muted">
                    <div>var(--primary) - Couleur de marque</div>
                    <div>var(--accent) - Liens et focus</div>
                    <div>var(--on-primary) - Texte sur primary</div>
                    <div>var(--on-surface) - Texte sur surface</div>
                    <div>var(--on-accent) - Texte sur accent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibilité */}
        <section id="accessibility">
          <h2 className="h3 text-titles mb-6">Bonnes pratiques d'accessibilité</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Focus visible</h3>
              <p className="text-muted mb-4">
                Tous les éléments interactifs doivent avoir un focus visible conforme aux standards WCAG.
              </p>
              <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 bg-primary text-on-primary rounded-md">Button</button>
                <input className="px-3 py-2 bg-background border border-border rounded-md" placeholder="Input" />
                <a href="#" className="px-4 py-2 text-accent underline">Link</a>
              </div>
              <div className="bg-background p-4 rounded-md">
                <code className="text-sm font-mono text-accent">
                  *:focus-visible {'{'}
                  <br />
                  &nbsp;&nbsp;outline: 2px solid var(--accent);
                  <br />
                  &nbsp;&nbsp;outline-offset: 2px;
                  <br />
                  {'}'}
                </code>
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Rôles ARIA</h3>
              <p className="text-muted mb-4">
                Les composants complexes doivent inclure les rôles ARIA appropriés.
              </p>
              <div className="space-y-3">
                <div className="bg-background p-3 rounded-md">
                  <code className="text-xs font-mono text-accent">
                    {'<nav role="navigation" aria-label="Navigation principale">'}
                  </code>
                </div>
                <div className="bg-background p-3 rounded-md">
                  <code className="text-xs font-mono text-accent">
                    {'<button aria-expanded="false" aria-controls="menu">'}
                  </code>
                </div>
                <div className="bg-background p-3 rounded-md">
                  <code className="text-xs font-mono text-accent">
                    {'<div role="alert" aria-live="polite">'}
                  </code>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Contraste des couleurs</h3>
              <p className="text-muted mb-4">
                Tous les textes doivent respecter un contraste minimum AA (4.5:1) ou AAA (7:1).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-500/20 rounded-md">
                  <div className="text-green-400 font-bold mb-1">AAA</div>
                  <div className="text-sm text-muted">≥ 7:1</div>
                  <div className="text-xs text-muted">Excellent</div>
                </div>
                <div className="text-center p-4 bg-yellow-500/20 rounded-md">
                  <div className="text-yellow-400 font-bold mb-1">AA</div>
                  <div className="text-sm text-muted">≥ 4.5:1</div>
                  <div className="text-xs text-muted">Minimum requis</div>
                </div>
                <div className="text-center p-4 bg-red-500/20 rounded-md">
                  <div className="text-red-400 font-bold mb-1">FAIL</div>
                  <div className="text-sm text-muted">&lt; 4.5:1</div>
                  <div className="text-xs text-muted">Non conforme</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conventions */}
        <section>
          <h2 className="h3 text-titles mb-6">Conventions de props et naming</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Props des composants</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-titles mb-2">Variants</h4>
                  <p className="text-sm text-muted mb-2">Utilisez des noms descriptifs pour les variants :</p>
                  <code className="text-xs font-mono text-accent">variant="primary" | "secondary" | "outline" | "ghost"</code>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-titles mb-2">Sizes</h4>
                  <p className="text-sm text-muted mb-2">Échelle de tailles cohérente :</p>
                  <code className="text-xs font-mono text-accent">size="xs" | "sm" | "md" | "lg" | "xl"</code>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-titles mb-2">États</h4>
                  <p className="text-sm text-muted mb-2">Props booléennes pour les états :</p>
                  <code className="text-xs font-mono text-accent">loading, disabled, active, selected</code>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border">
              <h3 className="font-medium text-titles mb-4">Classes CSS</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-titles mb-2">Préfixes</h4>
                  <p className="text-sm text-muted mb-2">Utilisez des préfixes cohérents :</p>
                  <div className="space-y-1">
                    <code className="text-xs font-mono text-accent block">ui-* pour les composants UI</code>
                    <code className="text-xs font-mono text-accent block">layout-* pour les composants de layout</code>
                    <code className="text-xs font-mono text-accent block">data-* pour les composants de données</code>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-titles mb-2">Modificateurs</h4>
                  <p className="text-sm text-muted mb-2">Utilisez des modificateurs BEM :</p>
                  <div className="space-y-1">
                    <code className="text-xs font-mono text-accent block">ui-button--primary</code>
                    <code className="text-xs font-mono text-accent block">ui-button--large</code>
                    <code className="text-xs font-mono text-accent block">ui-button--loading</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer data-force-dark className="border-t border-border bg-surface">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted">
            <p>Guidelines du Design System - Règles et bonnes pratiques</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
