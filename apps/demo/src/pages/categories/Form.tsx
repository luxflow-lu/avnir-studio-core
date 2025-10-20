import React from "react";
import { Button } from "@avnir/ui";

export const Form: React.FC = () => {
  const components = [
    {
      name: "Button",
      description: "Bouton interactif avec différents styles et états",
      usage: "Actions principales, soumission de formulaires, navigation",
      props: ["variant", "size", "disabled", "loading", "onClick"],
      example: `<Button variant="solid">Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Ghost</Button>`
    },
    {
      name: "Input",
      description: "Champ de saisie de texte avec validation et états",
      usage: "Saisie de données utilisateur, formulaires",
      props: ["type", "placeholder", "value", "onChange", "error"],
      example: `<Input 
  placeholder="Entrez votre email"
  type="email"
  error="Email invalide"
/>`
    },
    {
      name: "Textarea",
      description: "Zone de texte multiligne pour saisie longue",
      usage: "Commentaires, descriptions, messages",
      props: ["rows", "placeholder", "value", "onChange", "resize"],
      example: `<Textarea 
  placeholder="Votre message..."
  rows={4}
  resize="vertical"
/>`
    },
    {
      name: "Select",
      description: "Menu déroulant pour sélection d'options",
      usage: "Choix parmi plusieurs options, filtres",
      props: ["options", "value", "onChange", "placeholder", "multiple"],
      example: `<Select 
  placeholder="Choisir une option"
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" }
  ]}
/>`
    },
    {
      name: "Checkbox",
      description: "Case à cocher pour sélections multiples",
      usage: "Acceptation de conditions, sélections multiples",
      props: ["checked", "onChange", "label", "disabled", "indeterminate"],
      example: `<Checkbox 
  label="J'accepte les conditions"
  checked={true}
  onChange={handleChange}
/>`
    },
    {
      name: "Radio",
      description: "Bouton radio pour sélection exclusive",
      usage: "Choix unique parmi plusieurs options",
      props: ["name", "value", "checked", "onChange", "label"],
      example: `<Radio 
  name="size"
  value="medium"
  label="Taille M"
  checked={selected === "medium"}
/>`
    },
    {
      name: "Switch",
      description: "Interrupteur pour activation/désactivation",
      usage: "Paramètres on/off, préférences utilisateur",
      props: ["checked", "onChange", "label", "disabled", "size"],
      example: `<Switch 
  label="Notifications"
  checked={notifications}
  onChange={setNotifications}
/>`
    },
    {
      name: "Field",
      description: "Conteneur pour champs avec label et validation",
      usage: "Structure de formulaire avec labels et erreurs",
      props: ["label", "error", "required", "hint", "children"],
      example: `<Field 
  label="Email"
  error="Champ requis"
  required
>
  <Input type="email" />
</Field>`
    },
    {
      name: "FileUpload",
      description: "Zone de téléchargement de fichiers par glisser-déposer",
      usage: "Upload d'images, documents, médias",
      props: ["accept", "multiple", "maxSize", "onUpload", "preview"],
      example: `<FileUpload 
  accept="image/*"
  multiple
  maxSize={5000000}
  onUpload={handleUpload}
/>`
    },
    {
      name: "IconButton",
      description: "Bouton avec icône sans texte",
      usage: "Actions rapides, barres d'outils, navigation",
      props: ["icon", "variant", "size", "onClick", "tooltip"],
      example: `<IconButton 
  icon={<SearchIcon />}
  tooltip="Rechercher"
  variant="ghost"
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
            <span className="text-foreground font-medium">Form</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex items-start gap-8 mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Composants Form
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                Éléments de formulaires et saisie utilisateur. Ces composants permettent 
                de créer des formulaires interactifs, accessibles et cohérents avec 
                validation intégrée et gestion des états.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border">
              <span className="text-base text-muted-foreground">Composants:</span>
              <span className="font-bold text-foreground text-lg">{components.length}</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border">
              <span className="text-base text-muted-foreground">Catégorie:</span>
              <span className="font-bold text-foreground text-lg">Interaction & Saisie</span>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Formulaire d'exemple</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={3}
                    placeholder="Votre message..."
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="terms" className="rounded border-border" />
                  <label htmlFor="terms" className="text-sm text-foreground">
                    J'accepte les conditions d'utilisation
                  </label>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button variant="solid">Envoyer</Button>
                  <Button variant="outline">Annuler</Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">États des composants</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Boutons</h4>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="solid">Primary</Button>
                    <Button variant="outline">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">États d'input</h4>
                  <div className="space-y-3">
                    <input 
                      placeholder="État normal"
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    />
                    <input 
                      placeholder="État focus"
                      className="w-full px-3 py-2 border-2 border-primary rounded-lg bg-background text-foreground"
                    />
                    <input 
                      placeholder="État erreur"
                      className="w-full px-3 py-2 border border-red-500 rounded-lg bg-background text-foreground"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Sélections</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" checked readOnly />
                      <span className="text-sm">Checkbox cochée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="radio" checked readOnly />
                      <span className="text-sm">Radio sélectionné</span>
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
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded font-medium">
                          Form
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
                      {component.name === 'Button' && (
                        <div className="flex gap-3">
                          <Button variant="solid">Primary</Button>
                          <Button variant="outline">Secondary</Button>
                          <Button variant="ghost">Ghost</Button>
                        </div>
                      )}
                      {component.name === 'Input' && (
                        <input 
                          placeholder="Entrez votre email"
                          type="email"
                          className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
                        />
                      )}
                      {component.name === 'Checkbox' && (
                        <div className="flex items-center gap-3">
                          <input type="checkbox" id="demo-check" />
                          <label htmlFor="demo-check" className="text-sm">J'accepte les conditions</label>
                        </div>
                      )}
                      {!['Button', 'Input', 'Checkbox'].includes(component.name) && (
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

      {/* === GUIDELINES === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Guidelines Form</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Accessibilité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Labels toujours associés aux champs</li>
                  <li>• Navigation clavier complète</li>
                  <li>• Messages d'erreur explicites</li>
                  <li>• Contraste suffisant pour tous les états</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Validation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Validation en temps réel</li>
                  <li>• Messages d'erreur contextuels</li>
                  <li>• États visuels clairs (erreur, succès)</li>
                  <li>• Prévention des erreurs</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">UX</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Placeholders informatifs</li>
                  <li>• Progression claire dans les formulaires longs</li>
                  <li>• Sauvegarde automatique si possible</li>
                  <li>• Confirmation pour les actions destructives</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Debounce pour la validation</li>
                  <li>• Lazy loading des options</li>
                  <li>• Optimisation des re-renders</li>
                  <li>• Gestion des états de chargement</li>
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
              <a href="#primitives" className="text-muted-foreground hover:text-primary transition-colors">Primitives</a>
              <a href="#data" className="text-muted-foreground hover:text-primary transition-colors">Data</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
