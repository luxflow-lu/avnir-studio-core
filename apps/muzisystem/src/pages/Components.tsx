import React from "react";
import { Button } from "@avnir/ui";

export const Components: React.FC = () => {
  const categories = [
    {
      name: "Primitives",
      description: "Composants de base et éléments fondamentaux",
      icon: "⚡",
      count: 13,
      components: ["Button", "Card", "Avatar", "Badge", "Separator", "Skeleton", "Spinner"]
    },
    {
      name: "Form",
      description: "Éléments de formulaires et saisie utilisateur",
      icon: "📝",
      count: 21,
      components: ["Input", "Textarea", "Select", "Checkbox", "Radio", "Switch", "FileUpload", "DatePicker"]
    },
    {
      name: "Data",
      description: "Affichage et manipulation de données",
      icon: "📊",
      count: 15,
      components: ["Table", "DataGrid", "Chart", "Progress", "Stats", "EmptyState", "Pagination"]
    },
    {
      name: "Layout",
      description: "Structure et organisation des pages",
      icon: "🏗️",
      count: 7,
      components: ["Container", "Grid", "Stack", "Divider", "Spacer", "Header", "Footer"]
    },
    {
      name: "Navigation",
      description: "Éléments de navigation et menu",
      icon: "🧭",
      count: 9,
      components: ["Navbar", "Sidebar", "Breadcrumb", "Tabs", "Menu", "Stepper", "Pagination"]
    },
    {
      name: "Overlay",
      description: "Modales, popups et éléments flottants",
      icon: "🎭",
      count: 11,
      components: ["Modal", "Dialog", "Popover", "Tooltip", "Drawer", "Sheet", "AlertDialog"]
    },
    {
      name: "Marketing",
      description: "Composants pour pages marketing",
      icon: "📢",
      count: 25,
      components: ["Hero", "Features", "Testimonials", "CTA", "Pricing", "FAQ", "Newsletter", "Stats"]
    },
    {
      name: "E-commerce",
      description: "Composants pour boutiques en ligne",
      icon: "🛒",
      count: 15,
      components: ["ProductCard", "Cart", "Checkout", "Price", "Rating", "Wishlist", "Search"]
    },
    {
      name: "SaaS",
      description: "Composants pour applications SaaS",
      icon: "💼",
      count: 17,
      components: ["Dashboard", "Metrics", "Timeline", "Activity", "Notifications", "Settings"]
    },
    {
      name: "AVNIR",
      description: "Composants spécifiques à l'écosystème AVNIR",
      icon: "🎵",
      count: 17,
      components: ["ProjectCard", "AssetTile", "ModelSelector", "RenderStatus", "PermissionBadge"]
    },
    {
      name: "System",
      description: "Composants système et utilitaires",
      icon: "⚙️",
      count: 11,
      components: ["ErrorBoundary", "Loading", "Theme", "Provider", "Portal", "Observer"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="section-tight border-b border-border bg-surface">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="cluster">
              <a href="#home" className="cluster">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold text-foreground">MUZISYSTEM</span>
              </a>
            </div>
            
            <nav className="hidden md:flex cluster">
              <a href="#components" className="text-primary font-medium">Composants</a>
              <a href="#tokens" className="text-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-foreground hover:text-primary transition-colors">Guidelines</a>
            </nav>
            
            <div className="cluster">
              <Button variant="outline">Documentation</Button>
              <Button variant="solid">Storybook</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === HERO === */}
      <section className="section">
        <div className="container">
          <div className="stack-lg">
            <div className="text-center stack">
              <h1 className="text-6xl font-bold text-foreground">
                Bibliothèque de Composants
              </h1>
              <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                Plus de 150 composants React organisés en 11 catégories, 
                conçus pour créer des interfaces cohérentes dans l'écosystème AVNIR Studio.
              </p>
            </div>
            
            <div className="flex items-center justify-center cluster">
              <div className="card">
                <div className="cluster">
                  <span className="text-base text-foreground/70">Total:</span>
                  <span className="font-bold text-foreground text-lg">150+ composants</span>
                </div>
              </div>
              <div className="card">
                <div className="cluster">
                  <span className="text-base text-foreground/70">Catégories:</span>
                  <span className="font-bold text-foreground text-lg">11 sections</span>
                </div>
              </div>
              <div className="card">
                <div className="cluster">
                  <span className="text-base text-foreground/70">Framework:</span>
                  <span className="font-bold text-foreground text-lg">React + TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CATEGORIES GRID === */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid-3">
            {categories.map((category, index) => (
              <a key={index} href={`#${category.name.toLowerCase()}`} className="card group hover:shadow-lg transition-all hover:border-primary cursor-pointer block">
                <div className="stack">
                  <div className="cluster">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <div className="stack-sm">
                      <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                      <span className="text-sm text-foreground/70">{category.count} composants</span>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70">
                    {category.description}
                  </p>
                  
                  <div className="cluster">
                    {category.components.slice(0, 4).map((component, idx) => (
                      <span key={idx} className="badge">
                        {component}
                      </span>
                    ))}
                    {category.components.length > 4 && (
                      <span className="badge">
                        +{category.components.length - 4} autres
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Voir les composants
                    <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === QUICK ACCESS === */}
      <section className="section">
        <div className="container">
          <div className="stack-lg">
            <div className="text-center stack">
              <h2 className="text-4xl font-bold text-foreground">
                Accès rapide
              </h2>
              <p className="text-lg text-foreground/80">
                Liens directs vers les composants les plus utilisés
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {["Button", "Input", "Card", "Modal", "Table", "Avatar", "Badge", "Select", "Navbar", "Hero", "Chart", "Menu"].map((component, index) => (
                <a key={index} href={`#${component.toLowerCase()}`} className="card text-center group hover:shadow-lg hover:border-primary transition-all">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {component}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="section-tight border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70">© 2025 MUZISYSTEM by AVNIR Studio</p>
            <div className="cluster">
              <a href="#tokens" className="text-foreground/70 hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-foreground/70 hover:text-primary transition-colors">Guidelines</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
