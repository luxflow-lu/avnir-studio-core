import React from "react";
import { Button } from "@avnir/ui";

export const Navigation: React.FC = () => {
  const components = [
    {
      name: "Breadcrumbs",
      description: "Fil d'Ariane pour indiquer la position dans la hiérarchie",
      usage: "Navigation hiérarchique, orientation utilisateur",
      props: ["items", "separator", "maxItems", "onNavigate"],
      example: `<Breadcrumbs 
  items={[
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/products" },
    { label: "Détail", href: "/products/123" }
  ]}
  separator="/"
  maxItems={3}
/>`
    },
    {
      name: "Tabs",
      description: "Onglets pour organiser le contenu en sections",
      usage: "Organisation de contenu, interfaces multi-vues",
      props: ["tabs", "activeTab", "onChange", "variant", "orientation"],
      example: `<Tabs 
  tabs={[
    { id: "overview", label: "Aperçu", content: <Overview /> },
    { id: "details", label: "Détails", content: <Details /> },
    { id: "reviews", label: "Avis", content: <Reviews /> }
  ]}
  activeTab="overview"
  onChange={handleTabChange}
/>`
    },
    {
      name: "Pagination",
      description: "Navigation entre pages de résultats",
      usage: "Listes longues, tableaux, galeries",
      props: ["currentPage", "totalPages", "onPageChange", "showInfo", "size"],
      example: `<Pagination 
  currentPage={3}
  totalPages={10}
  onPageChange={handlePageChange}
  showInfo={true}
  size="md"
/>`
    },
    {
      name: "CommandK",
      description: "Interface de commande rapide avec recherche",
      usage: "Raccourcis clavier, recherche globale, actions rapides",
      props: ["commands", "onSelect", "placeholder", "shortcuts"],
      example: `<CommandK 
  commands={[
    { id: "new-project", label: "Nouveau projet", shortcut: "⌘N" },
    { id: "search", label: "Rechercher", shortcut: "⌘K" }
  ]}
  onSelect={handleCommand}
  placeholder="Tapez une commande..."
/>`
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
            <span className="text-foreground font-medium">Navigation</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🧭</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants Navigation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants pour la navigation et l'orientation des utilisateurs. 
                Ces éléments permettent de créer des expériences de navigation 
                intuitives avec breadcrumbs, onglets, pagination et commandes rapides.
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
              <span className="font-semibold text-foreground">Navigation & Orientation</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Navigation Demo</h2>
          
          <div className="space-y-8">
            {/* Breadcrumbs Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Breadcrumbs</h3>
              <div className="flex items-center gap-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Accueil</a>
                <span className="text-muted-foreground">→</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Produits</a>
                <span className="text-muted-foreground">→</span>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Électronique</a>
                <span className="text-muted-foreground">→</span>
                <span className="text-foreground font-medium">Smartphone Pro</span>
              </div>
            </div>
            
            {/* Tabs Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tabs</h3>
              <div className="border-b border-border mb-4">
                <div className="flex gap-6">
                  <button className="pb-3 px-1 border-b-2 border-primary text-primary font-medium">
                    Aperçu
                  </button>
                  <button className="pb-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                    Spécifications
                  </button>
                  <button className="pb-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                    Avis (24)
                  </button>
                  <button className="pb-3 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </button>
                </div>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h4 className="font-medium text-card-foreground mb-2">Contenu de l'onglet Aperçu</h4>
                <p className="text-sm text-muted-foreground">
                  Ceci est le contenu de l'onglet actif. Le contenu change selon l'onglet sélectionné.
                </p>
              </div>
            </div>
            
            {/* Pagination Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Pagination</h3>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Affichage de 21-30 sur 95 résultats
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="text-sm px-3 py-1">Précédent</Button>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded text-sm text-muted-foreground hover:bg-muted transition-colors">1</button>
                    <button className="w-8 h-8 rounded text-sm text-muted-foreground hover:bg-muted transition-colors">2</button>
                    <button className="w-8 h-8 rounded text-sm bg-primary text-primary-foreground">3</button>
                    <button className="w-8 h-8 rounded text-sm text-muted-foreground hover:bg-muted transition-colors">4</button>
                    <button className="w-8 h-8 rounded text-sm text-muted-foreground hover:bg-muted transition-colors">5</button>
                    <span className="text-muted-foreground px-2">...</span>
                    <button className="w-8 h-8 rounded text-sm text-muted-foreground hover:bg-muted transition-colors">10</button>
                  </div>
                  <Button variant="outline" className="text-sm px-3 py-1">Suivant</Button>
                </div>
              </div>
            </div>
            
            {/* Command K Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Command Palette</h3>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Tapez une commande... (⌘K)"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <div className="absolute right-3 top-3 text-xs text-muted-foreground">
                    ⌘K
                  </div>
                </div>
                <div className="mt-2 bg-card border border-border rounded-lg shadow-lg">
                  <div className="p-2 space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded">
                      <span className="text-sm">📄</span>
                      <span className="flex-1 text-sm">Nouveau projet</span>
                      <span className="text-xs">⌘N</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded cursor-pointer">
                      <span className="text-sm">🔍</span>
                      <span className="flex-1 text-sm">Rechercher</span>
                      <span className="text-xs">⌘F</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 hover:bg-muted rounded cursor-pointer">
                      <span className="text-sm">⚙️</span>
                      <span className="flex-1 text-sm">Paramètres</span>
                      <span className="text-xs">⌘,</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPONENTS LIST === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tous les composants</h2>
          
          <div className="space-y-8">
            {components.map((component, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Documentation */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-card-foreground">{component.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-xs rounded font-medium">
                          Navigation
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {component.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Utilisation</h4>
                        <p className="text-sm text-muted-foreground">{component.usage}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-2">Props principales</h4>
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
                    <h4 className="font-semibold text-card-foreground mb-3">Exemple d'utilisation</h4>
                    <div className="rounded-lg bg-muted p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{component.example}</code>
                      </pre>
                    </div>
                    
                    {/* Live Preview */}
                    <div className="mt-4 p-4 border border-border rounded-lg bg-background">
                      <div className="text-xs text-muted-foreground mb-2">Aperçu:</div>
                      <div className="text-sm text-muted-foreground italic">
                        Aperçu disponible dans la démo ci-dessus
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NAVIGATION PATTERNS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Patterns de Navigation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Hiérarchique</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Breadcrumbs pour la position</li>
                  <li>• Navigation parent/enfant claire</li>
                  <li>• Retour en arrière facile</li>
                  <li>• Contexte toujours visible</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Séquentielle</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pagination pour les listes</li>
                  <li>• Étapes de processus</li>
                  <li>• Navigation précédent/suivant</li>
                  <li>• Indicateurs de progression</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Contextuelle</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Onglets pour organiser le contenu</li>
                  <li>• Menus contextuels</li>
                  <li>• Actions rapides</li>
                  <li>• Raccourcis clavier</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Recherche</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Command palette globale</li>
                  <li>• Recherche avec suggestions</li>
                  <li>• Filtres et facettes</li>
                  <li>• Navigation par mots-clés</li>
                </ul>
              </div>
            </div>
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
              <a href="#layout" className="text-muted-foreground hover:text-primary transition-colors">Layout</a>
              <a href="#overlay" className="text-muted-foreground hover:text-primary transition-colors">Overlay</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
