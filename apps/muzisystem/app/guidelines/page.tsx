import { Section, Button, Card } from "@avnir/ui";

export default function GuidelinesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Guidelines</h1>
          <p className="section-subtitle">
            Bonnes pratiques, accessibilité, naming conventions et patterns de theming.
          </p>
        </div>

        {/* Do/Don't Section */}
        <div className="mb-16">
          <h2 className="content-title">Do / Don't</h2>
          <div className="grid-2">
            {/* Do Examples */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-success">✅ Do</h3>

              <div className="card">
                <h4 className="font-medium mb-3">Utiliser les tokens de couleur</h4>
                <div className="space-y-2">
                  <Button variant="solid">
                    Primary Action
                  </Button>
                  <code className="block text-sm p-2 rounded">
                    className="btn btn-primary"
                  </code>
                </div>
              </div>

              <div className="card">
                <h4 className="font-medium mb-3">Respecter la hiérarchie</h4>
                <div className="space-y-2">
                  <h3 className="h3">Titre principal</h3>
                  <p className="text-base">Texte de contenu</p>
                  <p className="text-sm text-muted">Texte secondaire</p>
                </div>
              </div>

              <div className="card">
                <h4 className="font-medium mb-3">Focus visible</h4>
                <Button>
                  Accessible Button
                </Button>
              </div>
            </div>

            {/* Don't Examples */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-error">❌ Don't</h3>

              <div className="card">
                <h4 className="font-medium mb-3">Hardcoder les couleurs</h4>
                <div className="space-y-2">
                  <Button className="bg-red-500 text-white">
                    Bad Button
                  </Button>
                  <code className="block text-sm p-2 rounded">
                    style=&#123;&#123; backgroundColor: '#ff0000' &#125;&#125;
                  </code>
                </div>
              </div>

              <div className="card">
                <h4 className="font-medium mb-3">Ignorer la hiérarchie</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-bold">Mauvais titre</p>
                  <h1 className="text-sm">Mauvaise hiérarchie</h1>
                </div>
              </div>

              <div className="card">
                <h4 className="font-medium mb-3">Oublier l'accessibilité</h4>
                <button className="btn" disabled>
                  Contraste insuffisant
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Section */}
        <div className="mb-16">
          <h2 className="content-title">Accessibilité (A11y)</h2>

          <div className="grid-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Focus Management</h3>
              <div className="card">
                <p className="text-sm text-muted mb-3">
                  Tous les éléments interactifs doivent avoir un focus visible
                </p>
                <div className="space-y-2">
                  <Button>Focusable Button</Button>
                  <input
                    placeholder="Focusable Input"
                    className="input"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ARIA Labels</h3>
              <div className="card">
                <p className="text-sm text-muted mb-3">Utiliser les attributs ARIA appropriés</p>
                <Button aria-label="Fermer la modal" className="p-2">
                  ✕
                </Button>
                <code className="block text-xs mt-2 p-2 rounded">
                  aria-label="Fermer la modal"
                </code>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Keyboard Navigation</h3>
              <div className="card">
                <p className="text-sm text-muted mb-3">
                  Support complet du clavier (Tab, Enter, Espace, Échap)
                </p>
                <div className="flex gap-2">
                  <Button>Tab 1</Button>
                  <Button>Tab 2</Button>
                  <Button>Tab 3</Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Color Contrast</h3>
              <div className="card">
                <p className="text-sm text-muted mb-3">
                  Ratio minimum AA : 4.5:1 pour le texte normal
                </p>
                <div className="space-y-2">
                  <div className="p-2 bg-primary text-bg rounded">Bon contraste ✓</div>
                  <div className="p-2 bg-muted text-muted rounded">Mauvais contraste ✗</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Naming & Props Section */}
        <div className="mb-16">
          <h2 className="content-title">Naming & Props</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Component Naming</h3>
              <div className="grid-2">
                <div>
                  <h4 className="font-medium text-success mb-2">✅ Good</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>Button</code> - Clair et concis
                    </li>
                    <li>
                      <code>NavigationMenu</code> - Descriptif
                    </li>
                    <li>
                      <code>UserAvatar</code> - Spécifique
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-error mb-2">❌ Bad</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>Btn</code> - Trop abrégé
                    </li>
                    <li>
                      <code>Menu</code> - Trop générique
                    </li>
                    <li>
                      <code>Thing</code> - Pas descriptif
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Props Conventions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Boolean Props</h4>
                  <code className="text-sm p-2 rounded block">
                    &lt;Button disabled loading /&gt; // Pas de =&#123;true&#125;
                  </code>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Variant Props</h4>
                  <code className="text-sm p-2 rounded block">
                    &lt;Button variant="solid" size="lg" /&gt;
                  </code>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Event Handlers</h4>
                  <code className="text-sm p-2 rounded block">
                    &lt;Button onClick=&#123;handleClick&#125; onFocus=&#123;handleFocus&#125; /&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theming Patterns Section */}
        <div className="mb-16">
          <h2 className="content-title">Theming Patterns</h2>

          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">CSS Variables</h3>
              <p className="text-muted mb-4">
                Utiliser les CSS variables pour une cohérence cross-brand et theme.
              </p>
              <div className="grid-2">
                <div>
                  <h4 className="font-medium text-success mb-2">✅ Correct</h4>
                  <code className="text-sm p-2 rounded block">
                    className="bg-primary text-bg"
                  </code>
                </div>
                <div>
                  <h4 className="font-medium text-error mb-2">❌ Incorrect</h4>
                  <code className="text-sm p-2 rounded block">
                    className="bg-blue-500 text-white"
                  </code>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Brand Switching</h3>
              <p className="text-muted mb-4">
                Les composants s'adaptent automatiquement au changement de brand via data-brand.
              </p>
              <div className="space-y-2">
                <code className="text-sm p-2 rounded block">
                  &lt;html data-brand="muzidev" data-theme="dark"&gt;
                </code>
                <p className="text-xs text-muted">
                  Changez la brand dans la navigation pour voir l'effet en temps réel.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Dark Mode</h3>
              <p className="text-muted mb-4">
                Support automatique du mode sombre via data-theme="dark".
              </p>
              <div className="flex gap-4">
                <div className="p-3 bg-surface text-text rounded border">Light Mode</div>
                <div className="p-3 bg-primary text-bg rounded">Dark Mode</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="mb-16">
          <h2 className="content-title">Quick Reference</h2>
          <Card>
            <div className="grid-3">
              <div>
                <h3 className="font-semibold mb-3">Spacing Scale</h3>
                <div className="text-sm space-y-1">
                  <div>xs: 4px</div>
                  <div>sm: 8px</div>
                  <div>md: 16px</div>
                  <div>lg: 24px</div>
                  <div>xl: 32px</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Typography</h3>
                <div className="text-sm space-y-1">
                  <div>h1: 2.25rem</div>
                  <div>h2: 1.875rem</div>
                  <div>h3: 1.5rem</div>
                  <div>body: 1rem</div>
                  <div>small: 0.875rem</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Breakpoints</h3>
                <div className="text-sm space-y-1">
                  <div>sm: 640px</div>
                  <div>md: 768px</div>
                  <div>lg: 1024px</div>
                  <div>xl: 1280px</div>
                  <div>2xl: 1536px</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
