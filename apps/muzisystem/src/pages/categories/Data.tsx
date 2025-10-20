import React from "react";
import { Button } from "@avnir/ui";

export const Data: React.FC = () => {
  const components = [
    {
      name: "Avatar",
      description: "Image de profil utilisateur avec fallback et indicateurs de statut",
      usage: "Profils utilisateur, listes de membres, commentaires",
      props: ["src", "alt", "size", "fallback", "status"],
      example: `<Avatar 
  src="/user.jpg"
  alt="John Doe"
  size="lg"
  status="online"
/>`
    },
    {
      name: "Badge",
      description: "Étiquette colorée pour statuts, catégories ou compteurs",
      usage: "Statuts, notifications, catégories, labels",
      props: ["variant", "size", "children", "dot"],
      example: `<Badge variant="success">Actif</Badge>
<Badge variant="warning" dot>3</Badge>
<Badge variant="info">Nouveau</Badge>`
    },
    {
      name: "Table",
      description: "Tableau de données avec tri, pagination et sélection",
      usage: "Listes de données, dashboards, rapports",
      props: ["columns", "data", "sortable", "selectable", "pagination"],
      example: `<Table 
  columns={columns}
  data={users}
  sortable
  selectable
  pagination={{ pageSize: 10 }}
/>`
    },
    {
      name: "Progress",
      description: "Barre de progression pour indiquer l'avancement",
      usage: "Chargements, étapes de processus, scores",
      props: ["value", "max", "size", "variant", "label"],
      example: `<Progress 
  value={75}
  max={100}
  size="md"
  label="75% complété"
/>`
    },
    {
      name: "Skeleton",
      description: "Placeholder animé pendant le chargement de contenu",
      usage: "États de chargement, amélioration de l'UX",
      props: ["width", "height", "variant", "animate"],
      example: `<Skeleton width="100%" height="20px" />
<Skeleton variant="circle" width="40px" />
<Skeleton variant="text" lines={3} />`
    },
    {
      name: "Spinner",
      description: "Indicateur de chargement rotatif",
      usage: "Chargements courts, boutons en cours d'action",
      props: ["size", "color", "speed"],
      example: `<Spinner size="sm" />
<Button disabled>
  <Spinner size="xs" /> Chargement...
</Button>`
    },
    {
      name: "EmptyState",
      description: "État vide avec illustration et actions suggérées",
      usage: "Listes vides, erreurs 404, premiers usages",
      props: ["title", "description", "illustration", "actions"],
      example: `<EmptyState 
  title="Aucun résultat"
  description="Essayez d'autres termes"
  illustration={<SearchIcon />}
  actions={<Button>Réinitialiser</Button>}
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
            <span className="text-foreground font-medium">Data</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex items-start gap-8 mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">📈</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Composants Data
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                Composants pour l'affichage et la manipulation de données. Ces éléments 
                permettent de présenter l'information de manière claire et interactive, 
                avec des fonctionnalités avancées comme le tri, la pagination et la visualisation.
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
              <span className="font-semibold text-foreground">Affichage & Visualisation</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-20 bg-card">
        <div className="max-w-8xl mx-auto px-12">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Démonstration Interactive</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tableau de données</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-medium text-foreground">Nom</th>
                      <th className="text-left py-2 font-medium text-foreground">Statut</th>
                      <th className="text-left py-2 font-medium text-foreground">Rôle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-medium">
                          JD
                        </div>
                        John Doe
                      </td>
                      <td className="py-2">
                        <span className="badge badge-studio">Actif</span>
                      </td>
                      <td className="py-2 text-muted-foreground">Admin</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-xs font-medium">
                          JS
                        </div>
                        Jane Smith
                      </td>
                      <td className="py-2">
                        <span className="badge badge-artist">En ligne</span>
                      </td>
                      <td className="py-2 text-muted-foreground">Utilisateur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Indicateurs & États</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-artist">Artist</span>
                    <span className="badge badge-studio">Studio</span>
                    <span className="badge badge-draft">Draft</span>
                    <span className="badge badge-archived">Archived</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Progress</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progression</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Chargement</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Avatars</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
                      JD
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground text-sm">
                      AB
                    </div>
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs">
                      +3
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
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded font-medium">
                          Data
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
                      {component.name === 'Avatar' && (
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
                            JD
                          </div>
                          <div className="relative">
                            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-medium">
                              AB
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                          </div>
                        </div>
                      )}
                      {component.name === 'Badge' && (
                        <div className="flex gap-2">
                          <span className="badge badge-studio">Actif</span>
                          <span className="badge badge-draft">3</span>
                          <span className="badge badge-artist">Nouveau</span>
                        </div>
                      )}
                      {component.name === 'Progress' && (
                        <div className="space-y-2">
                          <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <div className="text-sm text-muted-foreground">75% complété</div>
                        </div>
                      )}
                      {!['Avatar', 'Badge', 'Progress'].includes(component.name) && (
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

      {/* === FOOTER === */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2025 MUZISYSTEM by AVNIR Studio</p>
            <div className="flex items-center gap-4">
              <a href="#components" className="text-muted-foreground hover:text-primary transition-colors">← Retour aux composants</a>
              <a href="#primitives" className="text-muted-foreground hover:text-primary transition-colors">Primitives</a>
              <a href="#form" className="text-muted-foreground hover:text-primary transition-colors">Form</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
