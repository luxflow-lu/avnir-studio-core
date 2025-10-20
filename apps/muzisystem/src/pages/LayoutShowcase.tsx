import React from "react";
import { Button } from "@avnir/ui";

export const LayoutShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="py-6 border-b border-border bg-surface">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-on-primary font-bold text-sm">🎨</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Layout Showcase</h1>
                <p className="text-sm text-foreground/70">Test des helpers layout & rhythm</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* === SECTION TIGHT === */}
      <section className="section-tight bg-surface">
        <div className="container">
          <div className="stack">
            <h2 className="text-3xl font-bold">Section Tight</h2>
            <p className="text-lg text-foreground/80">
              Cette section utilise <code className="bg-bg px-2 py-1 rounded text-sm">.section-tight</code> 
              avec padding-block de <strong>var(--space-8)</strong> (32px).
            </p>
            
            <div className="cluster">
              <span className="badge badge-artist">Artist</span>
              <span className="badge badge-studio">Studio</span>
              <span className="badge badge-beatmaker">Beatmaker</span>
              <span className="badge badge-draft">Draft</span>
              <span className="badge badge-producer">Producer</span>
              <span className="badge badge-archived">Archived</span>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION NORMALE === */}
      <section className="section">
        <div className="container">
          <div className="stack-lg">
            <div className="stack">
              <h2 className="text-3xl font-bold">Section Standard</h2>
              <p className="text-lg text-foreground/80">
                Section avec padding-block de <strong>var(--space-12)</strong> (48px). 
                Le contenu utilise <code className="bg-surface px-2 py-1 rounded text-sm">.stack-lg</code> 
                pour espacer les éléments de 24px.
              </p>
            </div>

            {/* Grid de cards */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Grid 2 colonnes</h3>
              <div className="grid-2">
                <div className="card">
                  <div className="stack-sm">
                    <h4 className="text-lg font-semibold">Card 1</h4>
                    <p className="text-foreground/80">
                      Cette card utilise la classe <code>.card</code> avec :
                    </p>
                    <ul className="text-sm text-foreground/70">
                      <li>• Padding: <strong>var(--space-6)</strong> (24px)</li>
                      <li>• Border-radius: <strong>var(--radius-2xl)</strong> (20px)</li>
                      <li>• Box-shadow: <strong>var(--shadow-card)</strong></li>
                    </ul>
                  </div>
                </div>
                
                <div className="card">
                  <div className="stack-sm">
                    <h4 className="text-lg font-semibold">Card 2</h4>
                    <p className="text-foreground/80">
                      Le contenu interne utilise <code>.stack-sm</code> pour un espacement de 12px entre éléments.
                    </p>
                    <div className="cluster">
                      <Button className="btn-sm btn-primary">Small</Button>
                      <Button className="btn btn-primary">Medium</Button>
                      <Button className="btn-lg btn-primary">Large</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 3 colonnes */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Grid 3 colonnes (responsive)</h3>
              <div className="grid-3">
                <div className="card">
                  <div className="stack-sm">
                    <h4 className="font-semibold">Containers</h4>
                    <p className="text-sm text-foreground/70">
                      <code>.container</code> : max-width 1120px, padding-inline 24px
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="stack-sm">
                    <h4 className="font-semibold">Stacks</h4>
                    <p className="text-sm text-foreground/70">
                      <code>.stack-sm</code> : 12px<br/>
                      <code>.stack</code> : 16px<br/>
                      <code>.stack-lg</code> : 24px
                    </p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="stack-sm">
                    <h4 className="font-semibold">Sections</h4>
                    <p className="text-sm text-foreground/70">
                      <code>.section-tight</code> : 32px<br/>
                      <code>.section</code> : 48px<br/>
                      <code>.section-loose</code> : 64px
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION LOOSE === */}
      <section className="section-loose bg-surface">
        <div className="container">
          <div className="stack">
            <h2 className="text-3xl font-bold">Section Loose</h2>
            <p className="text-lg text-foreground/80">
              Section avec padding-block de <strong>var(--space-16)</strong> (64px) pour plus d'air.
            </p>
            
            <div className="stack">
              <h3 className="text-xl font-semibold">Échelle de boutons</h3>
              <div className="cluster">
                <Button className="btn-sm btn-surface">Small Button</Button>
                <Button className="btn btn-surface">Medium Button</Button>
                <Button className="btn-lg btn-surface">Large Button</Button>
              </div>
              
              <div className="cluster">
                <Button className="btn-sm btn-primary">Small Primary</Button>
                <Button className="btn btn-primary">Medium Primary</Button>
                <Button className="btn-lg btn-primary">Large Primary</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION TOKENS === */}
      <section className="section">
        <div className="container">
          <div className="stack-lg">
            <div className="stack">
              <h2 className="text-3xl font-bold">Tokens d'espacement</h2>
              <p className="text-lg text-foreground/80">
                Échelle d'espacement basée sur 4px (0.25rem) :
              </p>
            </div>

            <div className="grid-2">
              <div className="card">
                <div className="stack-sm">
                  <h4 className="font-semibold">Spacing Scale</h4>
                  <div className="stack-sm text-sm font-mono">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '4px'}}></div>
                      <span>--space-1: .25rem (4px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '8px'}}></div>
                      <span>--space-2: .5rem (8px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '12px'}}></div>
                      <span>--space-3: .75rem (12px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '16px'}}></div>
                      <span>--space-4: 1rem (16px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '20px'}}></div>
                      <span>--space-5: 1.25rem (20px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded" style={{width: '24px'}}></div>
                      <span>--space-6: 1.5rem (24px)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="stack-sm">
                  <h4 className="font-semibold">Border Radius</h4>
                  <div className="stack-sm text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary" style={{borderRadius: '8px'}}></div>
                      <span className="font-mono">--radius-md: .5rem (8px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary" style={{borderRadius: '12px'}}></div>
                      <span className="font-mono">--radius-lg: .75rem (12px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary" style={{borderRadius: '16px'}}></div>
                      <span className="font-mono">--radius-xl: 1rem (16px)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary" style={{borderRadius: '20px'}}></div>
                      <span className="font-mono">--radius-2xl: 1.25rem (20px)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
