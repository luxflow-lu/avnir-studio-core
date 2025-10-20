import React from "react";
import { Button, Hero, FeatureGrid, Footer } from "@avnir/ui";

export const Home: React.FC = () => {
  const designSystemFeatures = [
    {
      icon: <span className="text-2xl">🎨</span>,
      title: "Design Tokens",
      description: "Palette de couleurs, typographie et espacements cohérents pour tous les satellites AVNIR Studio."
    },
    {
      icon: <span className="text-2xl">🧩</span>,
      title: "Composants React",
      description: "Bibliothèque complète de composants TypeScript prêts à l'emploi, testés et documentés."
    },
    {
      icon: <span className="text-2xl">📐</span>,
      title: "Charte Graphique",
      description: "Guidelines officielles pour maintenir la cohérence visuelle à travers tout l'écosystème."
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      title: "Performance",
      description: "Optimisé pour la vitesse avec tree-shaking, lazy loading et bundle size minimal."
    }
  ];

  const satellites = [
    { name: "MUZIDEV", description: "Formation développeurs", color: "bg-blue-500" },
    { name: "MUZIPICS", description: "Galerie photos", color: "bg-pink-500" },
    { name: "MUZIMERCH", description: "E-commerce", color: "bg-orange-500" },
    { name: "MUZIBASE", description: "Base de données", color: "bg-green-500" },
    { name: "MUZIMANAGER", description: "Gestion projets", color: "bg-purple-500" },
    { name: "PROMOZIC", description: "Promotion musicale", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="section-tight border-b border-border bg-surface">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="cluster">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">MUZISYSTEM</span>
            </div>
            
            <nav className="hidden md:flex cluster">
              <a href="#components" className="text-foreground hover:text-primary transition-colors">Composants</a>
              <a href="#tokens" className="text-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#usage" className="text-foreground hover:text-primary transition-colors">Usage</a>
              <a href="#layout-showcase" className="text-foreground hover:text-primary transition-colors">Layout</a>
              <a href="#guidelines" className="text-foreground hover:text-primary transition-colors">Guidelines</a>
            </nav>
            
            <div className="cluster">
              <Button variant="outline">Documentation</Button>
              <Button variant="solid">Commencer</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === HERO SECTION === */}
      <Hero
        eyebrow="AVNIR Studio Design System"
        title="MUZISYSTEM"
        subtitle="Le design system officiel d'AVNIR Studio. Une banque de composants React, design tokens et guidelines pour créer des interfaces cohérentes à travers tous nos satellites."
        actions={
          <>
            <Button variant="solid" className="px-8 py-4 text-lg">
              Explorer les composants
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              Voir la documentation
            </Button>
          </>
        }
        maxWidth="2xl"
      />

      {/* === NAVIGATION GRID === */}
      <section className="section bg-surface">
        <div className="container">
          <div className="stack-lg">
            <div className="text-center stack">
              <h2 className="text-5xl font-bold text-foreground">
                Un système de design complet
              </h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                MUZISYSTEM fournit tout ce dont vous avez besoin pour créer des interfaces 
                professionnelles et cohérentes dans l'écosystème AVNIR Studio.
              </p>
            </div>
            
            <div className="grid-3">
              <a href="#components" className="card group hover:shadow-xl transition-all hover:border-primary hover:scale-105">
                <div className="text-center stack">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-4xl">🧩</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Composants</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Bibliothèque complète de composants React organisés par catégories, 
                    prêts à être utilisés dans vos projets.
                  </p>
                  <div className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Explorer les composants
                    <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </a>

              <a href="#tokens" className="card group hover:shadow-xl transition-all hover:border-primary hover:scale-105">
                <div className="text-center stack">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Design Tokens</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Palette de couleurs, typographie et espacements cohérents 
                    pour tous les satellites AVNIR Studio.
                  </p>
                  <div className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Voir les tokens
                    <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </a>

              <a href="#guidelines" className="card group hover:shadow-xl transition-all hover:border-primary hover:scale-105">
                <div className="text-center stack">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <span className="text-4xl">📐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Guidelines</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Règles et bonnes pratiques pour maintenir la cohérence 
                    visuelle à travers tout l'écosystème.
                  </p>
                  <div className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Lire les guidelines
                    <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === DEMO SECTION === */}
      <section id="components" className="section">
        <div className="container">
          <div className="stack-lg">
            <div className="text-center stack">
              <h2 className="text-5xl font-bold text-foreground">
                Composants en action
              </h2>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                Découvrez notre bibliothèque de composants React avec design tokens intégrés, 
                prêts à être utilisés dans vos projets AVNIR Studio.
              </p>
            </div>
            
            <div className="card text-left">
              <div className="stack-lg">
                <h3 className="text-3xl font-bold text-foreground">Palette & Composants</h3>
                
                <div className="stack-sm">
                  <h4 className="text-xl font-semibold text-foreground">Badges typés</h4>
                  <div className="cluster">
                    <span className="badge badge-artist">Artist</span>
                    <span className="badge badge-studio">Studio</span>
                    <span className="badge badge-beatmaker">Beatmaker</span>
                    <span className="badge badge-draft">Draft</span>
                    <span className="badge badge-producer">Producer</span>
                    <span className="badge badge-archived">Archived</span>
                  </div>
                </div>
                
                <div className="stack-sm">
                  <h4 className="text-xl font-semibold text-foreground">Boutons & Actions</h4>
                  <div className="cluster">
                    <Button className="btn-lg btn-primary">Action principale</Button>
                    <Button className="btn-lg btn-surface">Action secondaire</Button>
                  </div>
                </div>

                <div className="stack-sm">
                  <h4 className="text-xl font-semibold text-foreground">Design Tokens</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center stack-sm">
                      <div className="w-16 h-16 rounded-xl bg-primary mx-auto"></div>
                      <span className="text-base font-medium text-foreground/70">Primary</span>
                    </div>
                    <div className="text-center stack-sm">
                      <div className="w-16 h-16 rounded-xl bg-surface border-2 border-border mx-auto"></div>
                      <span className="text-base font-medium text-foreground/70">Surface</span>
                    </div>
                    <div className="text-center stack-sm">
                      <div className="w-16 h-16 rounded-xl bg-border mx-auto"></div>
                      <span className="text-base font-medium text-foreground/70">Border</span>
                    </div>
                    <div className="text-center stack-sm">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 mx-auto"></div>
                      <span className="text-base font-medium text-foreground/70">Accent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <Footer
        sections={[
          {
            title: "Design System",
            links: [
              { label: "Composants", href: "#components" },
              { label: "Design Tokens", href: "#tokens" },
              { label: "Guidelines", href: "#guidelines" }
            ]
          },
          {
            title: "Ressources", 
            links: [
              { label: "Documentation", href: "#" },
              { label: "Storybook", href: "#" },
              { label: "GitHub", href: "#" }
            ]
          },
          {
            title: "Satellites AVNIR",
            links: [
              { label: "MUZIDEV", href: "#" },
              { label: "MUZIPICS", href: "#" },
              { label: "MUZIMERCH", href: "#" },
              { label: "MUZIBASE", href: "#" }
            ]
          },
          {
            title: "Support",
            links: [
              { label: "Contact", href: "#" },
              { label: "Issues", href: "#" },
              { label: "Changelog", href: "#" }
            ]
          }
        ]}
        bottomContent={
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 MUZISYSTEM by AVNIR Studio. Design system officiel.</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Powered by AVNIR Studio</span>
            </div>
          </div>
        }
      />
      
    </div>
  );
};
