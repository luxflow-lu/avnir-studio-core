import React from "react";
import { Button } from "@avnir/ui";

export const Primitives: React.FC = () => {
  const components = [
    {
      name: "Card",
      description: "Conteneur avec bordure et ombre pour regrouper du contenu",
      usage: "Affichage d'informations groupées, produits, profils",
      props: ["children", "className", "variant"],
      example: `<Card className="p-6">
  <h3>Titre de la carte</h3>
  <p>Contenu de la carte</p>
</Card>`
    },
    {
      name: "Container",
      description: "Conteneur avec largeur maximale et centrage automatique",
      usage: "Layout principal des pages, sections centrées",
      props: ["children", "maxWidth", "className"],
      example: `<Container maxWidth="lg">
  <h1>Contenu centré</h1>
</Container>`
    },
    {
      name: "Divider",
      description: "Ligne de séparation horizontale ou verticale",
      usage: "Séparation visuelle entre sections",
      props: ["orientation", "className"],
      example: `<Divider />
<Divider orientation="vertical" />`
    },
    {
      name: "Section",
      description: "Section sémantique avec espacement standardisé",
      usage: "Structuration des pages en sections",
      props: ["children", "spacing", "className"],
      example: `<Section spacing="lg">
  <h2>Titre de section</h2>
  <p>Contenu de la section</p>
</Section>`
    },
    {
      name: "Spacer",
      description: "Espacement flexible entre éléments",
      usage: "Ajustement des espacements dans les layouts",
      props: ["size", "axis"],
      example: `<div>
  <p>Premier élément</p>
  <Spacer size="md" />
  <p>Deuxième élément</p>
</div>`
    },
    {
      name: "Stack",
      description: "Layout en pile avec espacement automatique",
      usage: "Organisation verticale ou horizontale d'éléments",
      props: ["direction", "spacing", "align", "justify"],
      example: `<Stack direction="column" spacing="md">
  <Button>Premier</Button>
  <Button>Deuxième</Button>
  <Button>Troisième</Button>
</Stack>`
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="py-6 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="#home" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold text-foreground">MUZISYSTEM</span>
              </a>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#components" className="text-primary font-medium">Composants</a>
              <a href="#tokens" className="text-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-foreground hover:text-primary transition-colors">Guidelines</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button variant="outline">Storybook</Button>
              <Button variant="solid">Code Source</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === BREADCRUMB === */}
      <section className="py-4 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="flex items-center gap-2 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">MUZISYSTEM</a>
            <span className="text-muted-foreground">→</span>
            <a href="#components" className="text-muted-foreground hover:text-primary transition-colors">Composants</a>
            <span className="text-muted-foreground">→</span>
            <span className="text-foreground font-medium">Primitives</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants Primitives
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Éléments de base et fondamentaux pour construire des interfaces. 
                Ces composants fournissent la structure et les utilitaires essentiels 
                pour tous les autres composants du système.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">Composants:</span>
              <span className="font-semibold text-foreground">{components.length}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
              <span className="text-sm text-muted-foreground">Catégorie:</span>
              <span className="font-semibold text-foreground">Layout & Structure</span>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPONENTS LIST === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-8">
            {components.map((component, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Documentation */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h2 className="text-2xl font-bold text-card-foreground">{component.name}</h2>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium">
                          Primitive
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {component.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">Utilisation</h3>
                        <p className="text-sm text-muted-foreground">{component.usage}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-2">Props principales</h3>
                        <div className="flex flex-wrap gap-2">
                          {component.props.map((prop, idx) => (
                            <code key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                              {prop}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-6">
                      <Button variant="solid" className="text-sm">
                        Voir dans Storybook
                      </Button>
                      <Button variant="outline" className="text-sm">
                        Code source
                      </Button>
                    </div>
                  </div>
                  
                  {/* Code Example */}
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-3">Exemple d'utilisation</h3>
                    <div className="rounded-lg bg-muted p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{component.example}</code>
                      </pre>
                    </div>
                    
                    {/* Live Preview */}
                    <div className="mt-4 p-4 border border-border rounded-lg bg-background">
                      <div className="text-xs text-muted-foreground mb-2">Aperçu:</div>
                      {component.name === 'Card' && (
                        <div className="rounded-[var(--radius)] border border-border bg-card p-4 shadow-sm">
                          <h3 className="font-semibold text-card-foreground mb-2">Titre de la carte</h3>
                          <p className="text-muted-foreground text-sm">Contenu de la carte</p>
                        </div>
                      )}
                      {component.name === 'Divider' && (
                        <div className="space-y-4">
                          <p className="text-sm">Contenu au-dessus</p>
                          <hr className="border-border" />
                          <p className="text-sm">Contenu en-dessous</p>
                        </div>
                      )}
                      {component.name === 'Stack' && (
                        <div className="space-y-3">
                          <Button variant="solid" className="w-full">Premier</Button>
                          <Button variant="outline" className="w-full">Deuxième</Button>
                          <Button variant="outline" className="w-full">Troisième</Button>
                        </div>
                      )}
                      {!['Card', 'Divider', 'Stack'].includes(component.name) && (
                        <div className="text-sm text-muted-foreground italic">
                          Aperçu disponible dans Storybook
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === RELATED COMPONENTS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Composants associés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#form" className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📝</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Form</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Éléments de formulaires qui utilisent les primitives comme base
              </p>
            </a>
            
            <a href="#layout" className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏗️</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Layout</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Composants de mise en page avancés basés sur les primitives
              </p>
            </a>
            
            <a href="#data" className="group p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📊</span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Data</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Composants d'affichage de données utilisant les primitives
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 MUZISYSTEM by AVNIR Studio</p>
            <div className="flex items-center gap-4">
              <a href="#components" className="text-muted-foreground hover:text-primary transition-colors">← Retour aux composants</a>
              <a href="#tokens" className="text-muted-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
