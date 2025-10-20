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
              <Button variant="outline">Documentation</Button>
              <Button variant="solid">Storybook</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === HERO === */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-8">
              Bibliothèque de Composants
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Plus de 150 composants React organisés en 11 catégories, 
              conçus pour créer des interfaces cohérentes dans l'écosystème AVNIR Studio.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border">
              <span className="text-base text-muted-foreground">Total:</span>
              <span className="font-bold text-foreground text-lg">150+ composants</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border">
              <span className="text-base text-muted-foreground">Catégories:</span>
              <span className="font-bold text-foreground text-lg">11 sections</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border">
              <span className="text-base text-muted-foreground">Framework:</span>
              <span className="font-bold text-foreground text-lg">React + TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* === CATEGORIES GRID === */}
      <section className="py-20">
        <div className="max-w-8xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <a key={index} href={`#${category.name.toLowerCase()}`} className="group rounded-[var(--radius)] border border-border bg-card text-card-foreground p-6 shadow-sm hover:shadow-lg transition-all hover:border-primary cursor-pointer block">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">{category.name}</h3>
                      <span className="text-sm text-muted-foreground">{category.count} composants</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {category.components.slice(0, 4).map((component, idx) => (
                      <span key={idx} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {component}
                      </span>
                    ))}
                    {category.components.length > 4 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        +{category.components.length - 4} autres
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Voir les composants
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === QUICK ACCESS === */}
      <section className="py-24 bg-card">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">
              Accès rapide
            </h2>
            <p className="text-lg text-muted-foreground">
              Liens directs vers les composants les plus utilisés
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Button", "Input", "Card", "Modal", "Table", "Avatar", "Badge", "Select", "Navbar", "Hero", "Chart", "Menu"].map((component, index) => (
              <a key={index} href={`#${component.toLowerCase()}`} className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-all text-center group hover:shadow-lg">
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {component}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 MUZISYSTEM by AVNIR Studio</p>
            <div className="flex items-center gap-4">
              <a href="#tokens" className="text-muted-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
