import React from "react";
import { Button } from "@avnir/ui";

export const Avnir: React.FC = () => {
  const components = [
    {
      name: "ProjectCard",
      description: "Carte de projet AVNIR avec aperçu, métadonnées et actions",
      usage: "Galeries de projets, dashboards, portfolios",
      props: ["project", "onEdit", "onDelete", "onShare", "variant"],
      example: `<ProjectCard 
  project={{
    id: "proj_123",
    title: "Mon Projet",
    thumbnail: "/thumb.jpg",
    status: "completed",
    createdAt: "2025-01-20"
  }}
  onEdit={handleEdit}
  onShare={handleShare}
/>`
    },
    {
      name: "AssetTile",
      description: "Tuile d'asset avec prévisualisation et informations détaillées",
      usage: "Bibliothèques d'assets, sélection de ressources",
      props: ["asset", "selected", "onSelect", "size", "showMetadata"],
      example: `<AssetTile 
  asset={{
    id: "asset_456",
    name: "Texture Bois",
    type: "texture",
    preview: "/preview.jpg",
    size: "2048x2048"
  }}
  selected={false}
  onSelect={handleSelect}
  size="lg"
/>`
    },
    {
      name: "RenderStatus",
      description: "Indicateur de statut de rendu avec progression et détails",
      usage: "Suivi des rendus, files d'attente, monitoring",
      props: ["status", "progress", "eta", "onCancel", "details"],
      example: `<RenderStatus 
  status="rendering"
  progress={75}
  eta="2 min restantes"
  onCancel={handleCancel}
  details={{
    resolution: "4K",
    samples: 1024
  }}
/>`
    },
    {
      name: "ModelSelector",
      description: "Sélecteur de modèles 3D avec aperçu et filtres",
      usage: "Choix de modèles, configuration de scène",
      props: ["models", "selected", "onSelect", "filters", "preview"],
      example: `<ModelSelector 
  models={modelsList}
  selected="model_789"
  onSelect={handleModelSelect}
  filters={["category", "style", "complexity"]}
  preview={true}
/>`
    },
    {
      name: "PermissionBadge",
      description: "Badge de permissions avec niveaux d'accès AVNIR",
      usage: "Gestion des droits, partage de projets",
      props: ["permission", "user", "editable", "onChange"],
      example: `<PermissionBadge 
  permission="editor"
  user={{
    name: "John Doe",
    avatar: "/avatar.jpg"
  }}
  editable={true}
  onChange={handlePermissionChange}
/>`
    },
    {
      name: "CreditBalance",
      description: "Affichage du solde de crédits avec historique et recharge",
      usage: "Facturation, consommation, gestion des crédits",
      props: ["balance", "currency", "onRecharge", "history", "alerts"],
      example: `<CreditBalance 
  balance={150}
  currency="credits"
  onRecharge={handleRecharge}
  history={creditHistory}
  alerts={{
    lowBalance: 50,
    showWarning: true
  }}
/>`
    },
    {
      name: "PromptEditor",
      description: "Éditeur de prompts avec suggestions et validation",
      usage: "Création de prompts, génération d'assets",
      props: ["value", "onChange", "suggestions", "validation", "templates"],
      example: `<PromptEditor 
  value={promptText}
  onChange={handlePromptChange}
  suggestions={aiSuggestions}
  validation={{
    maxLength: 500,
    requiredKeywords: ["style", "lighting"]
  }}
  templates={promptTemplates}
/>`
    },
    {
      name: "ProjectHeader",
      description: "En-tête de projet avec titre, actions et métadonnées",
      usage: "Pages de projet, édition, collaboration",
      props: ["project", "actions", "breadcrumb", "collaborators"],
      example: `<ProjectHeader 
  project={currentProject}
  actions={[
    { label: "Sauvegarder", onClick: handleSave },
    { label: "Partager", onClick: handleShare }
  ]}
  breadcrumb={projectBreadcrumb}
  collaborators={projectCollaborators}
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
            <span className="text-foreground font-medium">AVNIR</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🎵</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants AVNIR
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants spécifiques à l'écosystème AVNIR Studio. Ces éléments sont 
                conçus pour les workflows de création 3D, gestion de projets, 
                collaboration et tous les aspects métier de la plateforme AVNIR.
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
              <span className="font-semibold text-foreground">Métier & Workflow</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">AVNIR Studio Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Dashboard */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Dashboard Projets</h3>
              
              <div className="space-y-4">
                {/* Project Card */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground mb-1">Villa Moderne</h4>
                      <p className="text-sm text-muted-foreground mb-2">Rendu architectural • 4K</p>
                      <div className="flex items-center gap-2">
                        <span className="badge badge-studio">Terminé</span>
                        <span className="text-xs text-muted-foreground">il y a 2h</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" className="text-xs p-2">👁️</Button>
                      <Button variant="ghost" className="text-xs p-2">📤</Button>
                    </div>
                  </div>
                </div>
                
                {/* Render Status */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-card-foreground">Rendu en cours</h4>
                    <span className="badge badge-draft">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Intérieur Salon • 1024 samples</span>
                    <span>~3 min restantes</span>
                  </div>
                </div>
                
                {/* Credit Balance */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-card-foreground">Crédits</h4>
                      <p className="text-2xl font-bold text-primary">150</p>
                    </div>
                    <Button variant="solid" className="text-sm">Recharger</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Asset Library */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Bibliothèque d'Assets</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Asset Tiles */}
                <div className="aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-border p-3 cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-3/4 bg-muted rounded flex items-center justify-center mb-2">
                    <span className="text-2xl">🪵</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-foreground">Texture Bois</div>
                    <div className="text-muted-foreground">2048x2048</div>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg border border-border p-3 cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-3/4 bg-muted rounded flex items-center justify-center mb-2">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-foreground">Plante Verte</div>
                    <div className="text-muted-foreground">Modèle 3D</div>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg border border-border p-3 cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-3/4 bg-muted rounded flex items-center justify-center mb-2">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-foreground">Éclairage LED</div>
                    <div className="text-muted-foreground">HDRI</div>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-border p-3 cursor-pointer hover:border-primary transition-colors">
                  <div className="w-full h-3/4 bg-muted rounded flex items-center justify-center mb-2">
                    <span className="text-2xl">🏺</span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-foreground">Vase Déco</div>
                    <div className="text-muted-foreground">Mesh</div>
                  </div>
                </div>
              </div>
              
              {/* Permissions */}
              <div className="mt-6 p-3 bg-card rounded-lg border border-border">
                <h4 className="text-sm font-medium text-card-foreground mb-2">Collaborateurs</h4>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-medium">
                      JD
                    </div>
                    <span className="badge badge-artist text-xs">Propriétaire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground font-medium">
                      AB
                    </div>
                    <span className="badge badge-studio text-xs">Éditeur</span>
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
                        <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded font-medium">
                          AVNIR
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

      {/* === AVNIR ECOSYSTEM === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Écosystème AVNIR</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">AVNIR Studio</h3>
              <p className="text-sm text-muted-foreground">
                Plateforme principale de création et rendu 3D avec IA
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">MUZIDEV</h3>
              <p className="text-sm text-muted-foreground">
                Formation et documentation pour développeurs
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-lg border border-border">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">MUZIPICS</h3>
              <p className="text-sm text-muted-foreground">
                Galerie et partage de créations visuelles
              </p>
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
              <a href="#data" className="text-muted-foreground hover:text-primary transition-colors">Data</a>
              <a href="#system" className="text-muted-foreground hover:text-primary transition-colors">System</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
