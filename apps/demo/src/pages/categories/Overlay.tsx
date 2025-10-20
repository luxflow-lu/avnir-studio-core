import React from "react";
import { Button } from "@avnir/ui";

export const Overlay: React.FC = () => {
  const components = [
    {
      name: "Modal",
      description: "Fenêtre modale pour contenu important ou actions critiques",
      usage: "Confirmations, formulaires, détails, alertes",
      props: ["open", "onClose", "title", "size", "closable"],
      example: `<Modal 
  open={isOpen}
  onClose={handleClose}
  title="Confirmer l'action"
  size="md"
>
  <p>Êtes-vous sûr de vouloir continuer ?</p>
  <div className="flex gap-3 mt-6">
    <Button onClick={handleConfirm}>Confirmer</Button>
    <Button variant="outline" onClick={handleClose}>Annuler</Button>
  </div>
</Modal>`
    },
    {
      name: "Drawer",
      description: "Panneau latéral coulissant pour navigation ou contenu",
      usage: "Menus mobiles, panneaux de configuration, détails",
      props: ["open", "onClose", "position", "size", "overlay"],
      example: `<Drawer 
  open={isDrawerOpen}
  onClose={handleDrawerClose}
  position="right"
  size="md"
>
  <div className="p-6">
    <h3>Panneau latéral</h3>
    <p>Contenu du drawer...</p>
  </div>
</Drawer>`
    },
    {
      name: "Popover",
      description: "Contenu contextuel affiché au survol ou clic",
      usage: "Menus contextuels, informations supplémentaires",
      props: ["trigger", "content", "placement", "arrow", "offset"],
      example: `<Popover 
  trigger={<Button>Options</Button>}
  content={
    <div className="p-3">
      <button>Éditer</button>
      <button>Supprimer</button>
    </div>
  }
  placement="bottom-start"
  arrow
/>`
    },
    {
      name: "Tooltip",
      description: "Info-bulle pour expliquer ou donner des détails",
      usage: "Aide contextuelle, explications, raccourcis",
      props: ["content", "placement", "delay", "arrow"],
      example: `<Tooltip 
  content="Sauvegarder le projet (⌘S)"
  placement="top"
  delay={500}
>
  <Button>💾</Button>
</Tooltip>`
    },
    {
      name: "Toast",
      description: "Notification temporaire pour feedback utilisateur",
      usage: "Confirmations, erreurs, informations, succès",
      props: ["message", "type", "duration", "position", "action"],
      example: `<Toast 
  message="Projet sauvegardé avec succès"
  type="success"
  duration={3000}
  position="top-right"
  action={<Button size="sm">Annuler</Button>}
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
            <span className="text-foreground font-medium">Overlay</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🎭</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants Overlay
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants d'interface flottante et contextuelle. Ces éléments 
                s'affichent au-dessus du contenu principal pour présenter des 
                informations, actions ou interactions sans quitter le contexte actuel.
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
              <span className="font-semibold text-foreground">Interface Flottante</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Overlay Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interactive Demos */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Démos Interactives</h3>
              
              <div className="space-y-4">
                {/* Modal Demo */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-card-foreground mb-2">Modal</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fenêtre modale pour contenu important
                  </p>
                  <Button variant="solid" className="text-sm">
                    Ouvrir Modal
                  </Button>
                </div>
                
                {/* Drawer Demo */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-card-foreground mb-2">Drawer</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Panneau latéral coulissant
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="text-sm">
                      Drawer Gauche
                    </Button>
                    <Button variant="outline" className="text-sm">
                      Drawer Droite
                    </Button>
                  </div>
                </div>
                
                {/* Popover Demo */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-medium text-card-foreground mb-2">Popover</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Menu contextuel au clic
                  </p>
                  <div className="relative inline-block">
                    <Button variant="outline" className="text-sm">
                      Menu Options
                    </Button>
                    {/* Simulated Popover */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10 opacity-50">
                      <div className="p-2">
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded">Éditer</button>
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded">Dupliquer</button>
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded text-red-400">Supprimer</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Toast Examples */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Notifications Toast</h3>
              
              <div className="space-y-4">
                {/* Success Toast */}
                <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-green-400">Succès</div>
                    <div className="text-sm text-muted-foreground">Projet sauvegardé avec succès</div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">×</button>
                </div>
                
                {/* Warning Toast */}
                <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-yellow-400">Attention</div>
                    <div className="text-sm text-muted-foreground">Modifications non sauvegardées</div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">×</button>
                </div>
                
                {/* Error Toast */}
                <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">×</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-red-400">Erreur</div>
                    <div className="text-sm text-muted-foreground">Impossible de sauvegarder</div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">×</button>
                </div>
                
                {/* Info Toast */}
                <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">i</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-blue-400">Information</div>
                    <div className="text-sm text-muted-foreground">Nouvelle version disponible</div>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">×</button>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-3">Tester les notifications</h4>
                <div className="flex flex-wrap gap-2">
                  <Button variant="solid" className="text-xs bg-green-600 hover:bg-green-700">Succès</Button>
                  <Button variant="solid" className="text-xs bg-yellow-600 hover:bg-yellow-700">Warning</Button>
                  <Button variant="solid" className="text-xs bg-red-600 hover:bg-red-700">Erreur</Button>
                  <Button variant="solid" className="text-xs bg-blue-600 hover:bg-blue-700">Info</Button>
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
                        <span className="px-2 py-1 bg-violet-500/10 text-violet-400 text-xs rounded font-medium">
                          Overlay
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

      {/* === OVERLAY BEST PRACTICES === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Bonnes Pratiques Overlay</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Accessibilité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Focus trap dans les modales</li>
                  <li>• Fermeture par Escape</li>
                  <li>• ARIA labels appropriés</li>
                  <li>• Gestion du focus de retour</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">UX</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Animations fluides</li>
                  <li>• Positionnement intelligent</li>
                  <li>• Contenu concis et clair</li>
                  <li>• Actions évidentes</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lazy loading du contenu</li>
                  <li>• Portal pour le rendu</li>
                  <li>• Cleanup des event listeners</li>
                  <li>• Optimisation des animations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Mobile</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Adaptation aux petits écrans</li>
                  <li>• Gestes tactiles</li>
                  <li>• Zones de touch suffisantes</li>
                  <li>• Drawer au lieu de modal</li>
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
              <a href="#navigation" className="text-muted-foreground hover:text-primary transition-colors">Navigation</a>
              <a href="#saas" className="text-muted-foreground hover:text-primary transition-colors">SaaS</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
