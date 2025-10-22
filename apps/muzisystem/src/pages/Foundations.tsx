import * as React from "react";

export const Foundations: React.FC = () => {
  const typographyScale = [
    { name: "H1", size: "var(--h1-size)", line: "var(--h1-line)", weight: "var(--h1-weight)", class: "h1" },
    { name: "H2", size: "var(--h2-size)", line: "var(--h2-line)", weight: "var(--h2-weight)", class: "h2" },
    { name: "H3", size: "var(--h3-size)", line: "var(--h3-line)", weight: "var(--h3-weight)", class: "h3" },
    { name: "H4", size: "var(--h4-size)", line: "var(--h4-line)", weight: "var(--h4-weight)", class: "h4" },
    { name: "Body", size: "var(--body-size)", line: "var(--body-line)", weight: "var(--body-weight)", class: "body" },
    { name: "Small", size: "var(--small-size)", line: "var(--small-line)", weight: "var(--small-weight)", class: "small" },
  ];

  const spacingScale = [
    { name: "space-2", value: "var(--space-2)", pixels: "2px", usage: "Micro-espacements" },
    { name: "space-4", value: "var(--space-4)", pixels: "4px", usage: "Très petits espacements" },
    { name: "space-8", value: "var(--space-8)", pixels: "8px", usage: "Petits espacements" },
    { name: "space-12", value: "var(--space-12)", pixels: "12px", usage: "Espacements de base" },
    { name: "space-16", value: "var(--space-16)", pixels: "16px", usage: "Espacements standards" },
    { name: "space-24", value: "var(--space-24)", pixels: "24px", usage: "Espacements moyens" },
    { name: "space-32", value: "var(--space-32)", pixels: "32px", usage: "Grands espacements" },
    { name: "space-48", value: "var(--space-48)", pixels: "48px", usage: "Très grands espacements" },
    { name: "space-64", value: "var(--space-64)", pixels: "64px", usage: "Espacements de section" },
  ];

  const radiiScale = [
    { name: "radius-xs", value: "var(--radius-xs)", pixels: "2px", usage: "Très petits arrondis" },
    { name: "radius-sm", value: "var(--radius-sm)", pixels: "4px", usage: "Petits arrondis" },
    { name: "radius-md", value: "var(--radius-md)", pixels: "6px", usage: "Arrondis moyens" },
    { name: "radius-lg", value: "var(--radius-lg)", pixels: "8px", usage: "Grands arrondis" },
    { name: "radius-xl", value: "var(--radius-xl)", pixels: "12px", usage: "Très grands arrondis" },
    { name: "radius-2xl", value: "var(--radius-2xl)", pixels: "16px", usage: "Arrondis extra-larges" },
    { name: "radius-full", value: "var(--radius-full)", pixels: "9999px", usage: "Arrondis complets (cercles)" },
  ];

  const shadowScale = [
    { name: "shadow-1", value: "var(--shadow-1)", usage: "Ombre très légère" },
    { name: "shadow-2", value: "var(--shadow-2)", usage: "Ombre légère" },
    { name: "shadow-3", value: "var(--shadow-3)", usage: "Ombre moyenne" },
    { name: "shadow-4", value: "var(--shadow-4)", usage: "Ombre forte" },
    { name: "shadow-5", value: "var(--shadow-5)", usage: "Ombre très forte" },
  ];

  const zIndexScale = [
    { name: "z-drawer", value: "var(--z-drawer)", usage: "Tiroirs et sidebars" },
    { name: "z-modal", value: "var(--z-modal)", usage: "Modales et overlays" },
    { name: "z-popover", value: "var(--z-popover)", usage: "Popovers et tooltips" },
    { name: "z-toast", value: "var(--z-toast)", usage: "Notifications toast" },
  ];

  const motionScale = [
    { name: "duration-100", value: "var(--duration-100)", usage: "Micro-interactions" },
    { name: "duration-150", value: "var(--duration-150)", usage: "Transitions rapides" },
    { name: "duration-200", value: "var(--duration-200)", usage: "Transitions standards" },
    { name: "duration-300", value: "var(--duration-300)", usage: "Transitions moyennes" },
    { name: "duration-500", value: "var(--duration-500)", usage: "Transitions lentes" },
  ];

  const easingScale = [
    { name: "easing-standard", value: "var(--easing-standard)", usage: "Transitions standards" },
    { name: "easing-decelerate", value: "var(--easing-decelerate)", usage: "Entrées d'éléments" },
    { name: "easing-accelerate", value: "var(--easing-accelerate)", usage: "Sorties d'éléments" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header data-force-dark className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="h2 text-titles">Foundations</h1>
              <p className="text-muted">Tokens de base du Design System</p>
            </div>
            <nav className="flex gap-4">
              <a href="#typography" className="text-sm text-muted hover:text-foreground transition-colors">Typography</a>
              <a href="#spacing" className="text-sm text-muted hover:text-foreground transition-colors">Spacing</a>
              <a href="#radii" className="text-sm text-muted hover:text-foreground transition-colors">Radii</a>
              <a href="#shadows" className="text-sm text-muted hover:text-foreground transition-colors">Shadows</a>
              <a href="#motion" className="text-sm text-muted hover:text-foreground transition-colors">Motion</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-16">
        {/* Typography */}
        <section id="typography">
          <h2 className="h3 text-titles mb-6">Typography Scale</h2>
          <div className="grid gap-6">
            {typographyScale.map((type) => (
              <div key={type.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                <div className="w-16 text-sm text-muted font-mono">{type.name}</div>
                <div className={`flex-1 ${type.class}`}>
                  The quick brown fox jumps over the lazy dog
                </div>
                <div className="text-xs text-muted font-mono space-y-1">
                  <div>Size: {type.size}</div>
                  <div>Line: {type.line}</div>
                  <div>Weight: {type.weight}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Font Families */}
        <section>
          <h2 className="h3 text-titles mb-6">Font Families</h2>
          <div className="grid gap-4">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="text-sm text-muted mb-2 font-mono">--font-sans</div>
              <div style={{ fontFamily: 'var(--font-sans)' }} className="text-lg">
                Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial
              </div>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="text-sm text-muted mb-2 font-mono">--font-mono</div>
              <div style={{ fontFamily: 'var(--font-mono)' }} className="text-lg">
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono'
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing">
          <h2 className="h3 text-titles mb-6">Spacing Scale</h2>
          <div className="grid gap-4">
            {spacingScale.map((space) => (
              <div key={space.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                <div className="w-20 text-sm text-muted font-mono">{space.name}</div>
                <div className="flex items-center gap-4">
                  <div 
                    className="bg-primary rounded"
                    style={{ width: space.value, height: '16px' }}
                  />
                  <span className="text-sm text-muted">{space.pixels}</span>
                </div>
                <div className="flex-1 text-sm text-muted">{space.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Radii */}
        <section id="radii">
          <h2 className="h3 text-titles mb-6">Border Radius Scale</h2>
          <div className="grid gap-4">
            {radiiScale.map((radius) => (
              <div key={radius.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                <div className="w-20 text-sm text-muted font-mono">{radius.name}</div>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 bg-primary"
                    style={{ borderRadius: radius.value }}
                  />
                  <span className="text-sm text-muted">{radius.pixels}</span>
                </div>
                <div className="flex-1 text-sm text-muted">{radius.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section id="shadows">
          <h2 className="h3 text-titles mb-6">Shadow Scale</h2>
          <div className="grid gap-4">
            {shadowScale.map((shadow) => (
              <div key={shadow.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                <div className="w-20 text-sm text-muted font-mono">{shadow.name}</div>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-16 h-16 bg-surface rounded-lg"
                    style={{ boxShadow: shadow.value }}
                  />
                </div>
                <div className="flex-1 text-sm text-muted">{shadow.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Z-Index */}
        <section>
          <h2 className="h3 text-titles mb-6">Z-Index Scale</h2>
          <div className="grid gap-4">
            {zIndexScale.map((z) => (
              <div key={z.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                <div className="w-20 text-sm text-muted font-mono">{z.name}</div>
                <div className="w-16 text-sm text-accent font-mono">{z.value}</div>
                <div className="flex-1 text-sm text-muted">{z.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Motion */}
        <section id="motion">
          <h2 className="h3 text-titles mb-6">Motion Tokens</h2>
          
          <div className="mb-8">
            <h3 className="h4 text-titles mb-4">Durations</h3>
            <div className="grid gap-4">
              {motionScale.map((motion) => (
                <div key={motion.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                  <div className="w-24 text-sm text-muted font-mono">{motion.name}</div>
                  <div className="w-16 text-sm text-accent font-mono">{motion.value}</div>
                  <div className="flex-1 text-sm text-muted">{motion.usage}</div>
                  <button 
                    className="px-4 py-2 bg-primary text-on-primary rounded-md text-sm transition-all hover:scale-105"
                    style={{ transitionDuration: motion.value }}
                  >
                    Test
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="h4 text-titles mb-4">Easing Functions</h3>
            <div className="grid gap-4">
              {easingScale.map((easing) => (
                <div key={easing.name} className="flex items-center gap-8 p-6 bg-surface rounded-lg border border-border">
                  <div className="w-32 text-sm text-muted font-mono">{easing.name}</div>
                  <div className="flex-1 text-sm text-muted">{easing.usage}</div>
                  <button 
                    className="px-4 py-2 bg-primary text-on-primary rounded-md text-sm transition-all duration-300 hover:scale-105"
                    style={{ transitionTimingFunction: easing.value }}
                  >
                    Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Ring */}
        <section>
          <h2 className="h3 text-titles mb-6">Focus Ring</h2>
          <div className="p-6 bg-surface rounded-lg border border-border">
            <p className="text-muted mb-4">
              Le focus ring global est appliqué automatiquement à tous les éléments focusables.
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-primary text-on-primary rounded-md">Button</button>
              <input className="px-3 py-2 bg-background border border-border rounded-md" placeholder="Input field" />
              <select className="px-3 py-2 bg-background border border-border rounded-md">
                <option>Select option</option>
              </select>
            </div>
            <div className="mt-4 p-4 bg-background rounded-md">
              <code className="text-sm font-mono text-accent">
                *:focus-visible {'{'}
                <br />
                &nbsp;&nbsp;outline: 2px solid var(--accent);
                <br />
                &nbsp;&nbsp;outline-offset: 2px;
                <br />
                &nbsp;&nbsp;border-radius: var(--radius-sm);
                <br />
                {'}'}
              </code>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer data-force-dark className="border-t border-border bg-surface">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted">
            <p>Design System Foundations - Tous les tokens de base</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
