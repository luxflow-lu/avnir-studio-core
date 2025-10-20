import React from "react";
import { Button } from "@avnir/ui";

export const Saas: React.FC = () => {
  const components = [
    {
      name: "DashboardKPI",
      description: "Indicateurs clés de performance avec métriques et graphiques",
      usage: "Dashboards, analytics, monitoring, rapports",
      props: ["metrics", "period", "comparison", "loading"],
      example: `<DashboardKPI 
  metrics={[
    { label: "Utilisateurs actifs", value: "1,234", change: "+12%" },
    { label: "Revenus", value: "€45,678", change: "+8%" }
  ]}
  period="30 jours"
  comparison="vs mois précédent"
/>`
    },
    {
      name: "PricingTable",
      description: "Tableau de tarification avec plans et fonctionnalités",
      usage: "Pages pricing, abonnements, comparaisons",
      props: ["plans", "featured", "onSelect", "currency"],
      example: `<PricingTable 
  plans={[
    {
      name: "Starter",
      price: 29,
      features: ["10 projets", "Support email"],
      popular: false
    },
    {
      name: "Pro", 
      price: 99,
      features: ["Projets illimités", "Support prioritaire"],
      popular: true
    }
  ]}
  currency="EUR"
  onSelect={handlePlanSelect}
/>`
    },
    {
      name: "InviteMembers",
      description: "Interface d'invitation de membres avec rôles",
      usage: "Gestion d'équipe, collaboration, permissions",
      props: ["onInvite", "roles", "pending", "maxMembers"],
      example: `<InviteMembers 
  onInvite={handleInvite}
  roles={["viewer", "editor", "admin"]}
  pending={pendingInvites}
  maxMembers={10}
/>`
    },
    {
      name: "RolesMatrix",
      description: "Matrice de permissions par rôle et fonctionnalité",
      usage: "Administration, gestion des droits, sécurité",
      props: ["roles", "permissions", "onChange", "readonly"],
      example: `<RolesMatrix 
  roles={["viewer", "editor", "admin"]}
  permissions={[
    { key: "read", label: "Lecture" },
    { key: "write", label: "Écriture" },
    { key: "delete", label: "Suppression" }
  ]}
  onChange={handlePermissionChange}
/>`
    },
    {
      name: "ApiKeys",
      description: "Gestion des clés API avec génération et révocation",
      usage: "Intégrations, développeurs, sécurité API",
      props: ["keys", "onGenerate", "onRevoke", "scopes"],
      example: `<ApiKeys 
  keys={existingKeys}
  onGenerate={handleGenerateKey}
  onRevoke={handleRevokeKey}
  scopes={["read", "write", "admin"]}
/>`
    },
    {
      name: "SavedViews",
      description: "Vues sauvegardées avec filtres et configurations",
      usage: "Dashboards, listes, personnalisation",
      props: ["views", "current", "onSave", "onLoad", "onDelete"],
      example: `<SavedViews 
  views={savedViews}
  current={currentView}
  onSave={handleSaveView}
  onLoad={handleLoadView}
  onDelete={handleDeleteView}
/>`
    },
    {
      name: "ImportExport",
      description: "Interface d'import/export de données",
      usage: "Migration, sauvegarde, intégration",
      props: ["formats", "onImport", "onExport", "progress"],
      example: `<ImportExport 
  formats={["CSV", "JSON", "Excel"]}
  onImport={handleImport}
  onExport={handleExport}
  progress={uploadProgress}
/>`
    },
    {
      name: "PlanPicker",
      description: "Sélecteur de plan avec upgrade/downgrade",
      usage: "Facturation, abonnements, changements de plan",
      props: ["currentPlan", "plans", "onUpgrade", "billing"],
      example: `<PlanPicker 
  currentPlan="pro"
  plans={availablePlans}
  onUpgrade={handlePlanUpgrade}
  billing="monthly"
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
            <span className="text-foreground font-medium">SaaS</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">💼</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants SaaS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants spécialisés pour applications SaaS et B2B. Ces éléments 
                couvrent la gestion d'équipe, facturation, analytics, permissions 
                et toutes les fonctionnalités essentielles des plateformes SaaS modernes.
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
              <span className="font-semibold text-foreground">Business & Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">SaaS Dashboard Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* KPI Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">1,234</div>
                <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
                <div className="text-xs text-green-400 mt-1">+12% vs mois dernier</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">€45,678</div>
                <div className="text-sm text-muted-foreground">Revenus MRR</div>
                <div className="text-xs text-green-400 mt-1">+8% vs mois dernier</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">94.2%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
                <div className="text-xs text-green-400 mt-1">+0.3% vs mois dernier</div>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl font-bold text-foreground">156</div>
                <div className="text-sm text-muted-foreground">Nouveaux clients</div>
                <div className="text-xs text-red-400 mt-1">-5% vs mois dernier</div>
              </div>
            </div>
            
            {/* Team Management */}
            <div className="lg:col-span-2 p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Gestion d'équipe</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-card rounded border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      JD
                    </div>
                    <div>
                      <div className="font-medium text-foreground">John Doe</div>
                      <div className="text-sm text-muted-foreground">john@company.com</div>
                    </div>
                  </div>
                  <span className="badge badge-artist text-xs">Admin</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-card rounded border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm font-medium">
                      JS
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Jane Smith</div>
                      <div className="text-sm text-muted-foreground">jane@company.com</div>
                    </div>
                  </div>
                  <span className="badge badge-studio text-xs">Éditeur</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full text-sm">
                + Inviter un membre
              </Button>
            </div>
            
            {/* Pricing Plans */}
            <div className="p-6 bg-background rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Plan actuel</h3>
              
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-primary">Pro</div>
                <div className="text-sm text-muted-foreground">99€/mois</div>
              </div>
              
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Projets illimités</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>10 membres d'équipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Support prioritaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>API avancée</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="solid" className="w-full text-sm">
                  Upgrade vers Enterprise
                </Button>
                <Button variant="outline" className="w-full text-sm">
                  Gérer la facturation
                </Button>
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
                        <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded font-medium">
                          SaaS
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

      {/* === FOOTER === */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 MUZISYSTEM by AVNIR Studio</p>
            <div className="flex items-center gap-4">
              <a href="#components" className="text-muted-foreground hover:text-primary transition-colors">← Retour aux composants</a>
              <a href="#overlay" className="text-muted-foreground hover:text-primary transition-colors">Overlay</a>
              <a href="#system" className="text-muted-foreground hover:text-primary transition-colors">System</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
