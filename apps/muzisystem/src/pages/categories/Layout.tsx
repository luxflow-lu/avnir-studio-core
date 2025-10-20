import React from "react";
import { Button } from "@avnir/ui";

export const Layout: React.FC = () => {
  const components = [
    {
      name: "Navbar",
      description: "Barre de navigation principale avec logo, menu et actions",
      usage: "Header de site, navigation principale, branding",
      props: ["logo", "links", "actions", "variant", "sticky"],
      example: `<Navbar 
  logo={<Logo />}
  links={[
    { label: "Accueil", href: "/" },
    { label: "Produits", href: "/products" }
  ]}
  actions={<Button>Se connecter</Button>}
  sticky
/>`
    },
    {
      name: "Sidebar",
      description: "Barre latérale de navigation avec menu hiérarchique",
      usage: "Navigation secondaire, dashboards, applications",
      props: ["items", "collapsed", "onToggle", "position"],
      example: `<Sidebar 
  items={[
    { 
      label: "Dashboard", 
      icon: <DashboardIcon />,
      href: "/dashboard"
    },
    {
      label: "Utilisateurs",
      icon: <UsersIcon />,
      children: [...]
    }
  ]}
  collapsed={false}
/>`
    },
    {
      name: "Footer",
      description: "Pied de page avec liens, informations et réseaux sociaux",
      usage: "Bas de page, liens utiles, informations légales",
      props: ["sections", "social", "copyright", "variant"],
      example: `<Footer 
  sections={[
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "/features" },
        { label: "Tarifs", href: "/pricing" }
      ]
    }
  ]}
  social={socialLinks}
  copyright="© 2025 Company"
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
            <span className="text-foreground font-medium">Layout</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🏗️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants Layout
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants de structure et organisation des pages. Ces éléments définissent 
                l'architecture globale de vos interfaces avec navigation, sidebars et footers 
                pour créer des expériences cohérentes et intuitives.
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
              <span className="font-semibold text-foreground">Structure & Navigation</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Layout Demo</h2>
          
          <div className="rounded-[var(--radius)] border border-border bg-background overflow-hidden">
            {/* Demo Navbar */}
            <div className="border-b border-border bg-surface p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">L</span>
                    </div>
                    <span className="font-semibold text-foreground">Logo</span>
                  </div>
                  <nav className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-foreground hover:text-primary transition-colors">Accueil</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors">Produits</a>
                    <a href="#" className="text-foreground hover:text-primary transition-colors">À propos</a>
                  </nav>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" className="text-sm">Se connecter</Button>
                  <Button variant="solid" className="text-sm">S'inscrire</Button>
                </div>
              </div>
            </div>
            
            {/* Demo Layout with Sidebar */}
            <div className="flex min-h-[400px]">
              {/* Demo Sidebar */}
              <div className="w-64 bg-card border-r border-border p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="text-lg">📊</span>
                    <span className="font-medium">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer">
                    <span className="text-lg">👥</span>
                    <span>Utilisateurs</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer">
                    <span className="text-lg">📈</span>
                    <span>Analytics</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg cursor-pointer">
                    <span className="text-lg">⚙️</span>
                    <span>Paramètres</span>
                  </div>
                </div>
              </div>
              
              {/* Demo Content */}
              <div className="flex-1 p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Contenu Principal</h3>
                <p className="text-muted-foreground mb-6">
                  Cette zone représente le contenu principal de votre application, 
                  organisé avec une sidebar de navigation à gauche.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-card-foreground mb-2">Carte 1</h4>
                    <p className="text-sm text-muted-foreground">Contenu de la première carte</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-card-foreground mb-2">Carte 2</h4>
                    <p className="text-sm text-muted-foreground">Contenu de la deuxième carte</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Demo Footer */}
            <div className="border-t border-border bg-surface p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Produit</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Tarifs</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Support</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Entreprise</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3">Légal</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-primary transition-colors">Confidentialité</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors">CGU</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
                © 2025 Company Name. Tous droits réservés.
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
                        <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-xs rounded font-medium">
                          Layout
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
                        Aperçu disponible dans la démo ci-dessus et Storybook
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === LAYOUT PATTERNS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Patterns de Layout</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Layout Application</h3>
              <div className="text-sm text-muted-foreground mb-4">
                Navbar + Sidebar + Contenu principal
              </div>
              <div className="w-full h-24 bg-muted rounded border-2 border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                Dashboard Layout
              </div>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Layout Marketing</h3>
              <div className="text-sm text-muted-foreground mb-4">
                Navbar + Hero + Sections + Footer
              </div>
              <div className="w-full h-24 bg-muted rounded border-2 border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                Landing Page Layout
              </div>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-3">Layout E-commerce</h3>
              <div className="text-sm text-muted-foreground mb-4">
                Navbar + Filtres + Grille produits
              </div>
              <div className="w-full h-24 bg-muted rounded border-2 border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                Shop Layout
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
              <a href="#primitives" className="text-muted-foreground hover:text-primary transition-colors">Primitives</a>
              <a href="#nav" className="text-muted-foreground hover:text-primary transition-colors">Navigation</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
