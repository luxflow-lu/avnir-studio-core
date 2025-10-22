import React from "react";
import { Button } from "@avnir/ui";

export const Guidelines: React.FC = () => {
  const principles = [
    {
      title: "Cohérence",
      description: "Utiliser les mêmes patterns et composants à travers tous les satellites",
      icon: "🎯",
      examples: ["Même navigation", "Couleurs uniformes", "Espacements constants"]
    },
    {
      title: "Accessibilité",
      description: "Créer des interfaces inclusives conformes aux standards WCAG 2.1",
      icon: "♿",
      examples: ["Contraste suffisant", "Navigation clavier", "Lecteurs d'écran"]
    },
    {
      title: "Performance",
      description: "Optimiser pour la vitesse et l'efficacité sur tous les appareils",
      icon: "⚡",
      examples: ["Lazy loading", "Bundle splitting", "Images optimisées"]
    },
    {
      title: "Responsive",
      description: "Adapter l'interface à tous les écrans et contextes d'usage",
      icon: "📱",
      examples: ["Mobile first", "Breakpoints cohérents", "Touch-friendly"]
    }
  ];

  const colorGuidelines = [
    {
      rule: "Contraste minimum",
      description: "Ratio de 4.5:1 pour le texte normal, 3:1 pour le texte large",
      example: "text-foreground sur bg-background"
    },
    {
      rule: "Hiérarchie des couleurs",
      description: "Primary pour les actions principales, muted pour les informations secondaires",
      example: "Bouton CTA en primary, texte d'aide en muted"
    },
    {
      rule: "États interactifs",
      description: "Hover, focus et active states clairement définis",
      example: "hover:opacity-90 pour les boutons"
    },
    {
      rule: "Cohérence des marques",
      description: "Chaque satellite garde sa couleur primary mais partage le système",
      example: "MUZIDEV bleu, MUZIPICS rouge, etc."
    }
  ];

  const spacingRules = [
    {
      context: "Composants internes",
      spacing: "4px, 8px, 12px",
      usage: "Padding interne, gaps entre éléments proches"
    },
    {
      context: "Entre composants",
      spacing: "16px, 24px, 32px",
      usage: "Marges entre cartes, sections de formulaire"
    },
    {
      context: "Sections de page",
      spacing: "48px, 64px, 96px",
      usage: "Espacement entre sections principales"
    },
    {
      context: "Layout global",
      spacing: "128px, 160px",
      usage: "Marges de page, espacement hero"
    }
  ];

  const typographyScale = [
    { name: "Display", size: "4rem (64px)", usage: "Titres de landing page", weight: "900" },
    { name: "H1", size: "3rem (48px)", usage: "Titres principaux", weight: "800" },
    { name: "H2", size: "2.25rem (36px)", usage: "Titres de section", weight: "700" },
    { name: "H3", size: "1.5rem (24px)", usage: "Sous-titres", weight: "600" },
    { name: "Body Large", size: "1.125rem (18px)", usage: "Texte important", weight: "400" },
    { name: "Body", size: "1rem (16px)", usage: "Texte standard", weight: "400" },
    { name: "Small", size: "0.875rem (14px)", usage: "Métadonnées", weight: "400" },
    { name: "Caption", size: "0.75rem (12px)", usage: "Labels, badges", weight: "500" }
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
              <a href="#components" className="text-foreground hover:text-primary transition-colors">Composants</a>
              <a href="#tokens" className="text-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#guidelines" className="text-primary font-medium">Guidelines</a>
            </nav>
            
            <div className="cluster">
              <Button variant="outline">Documentation</Button>
              <Button variant="solid">Figma Kit</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === HERO === */}
      <section className="section">
        <div className="container">
          <div className="text-center stack">
            <h1 className="text-6xl font-bold text-foreground">
              Guidelines de Design
            </h1>
            <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Règles et bonnes pratiques pour maintenir la cohérence visuelle 
              et l'expérience utilisateur à travers tout l'écosystème AVNIR Studio.
            </p>
          </div>
        </div>
      </section>

      {/* === PRINCIPLES === */}
      <section className="section bg-surface">
        <div className="container">
          <div className="stack-lg">
            <h2 className="text-4xl font-bold text-foreground">Principes Fondamentaux</h2>
            
            <div className="grid-2">
            {principles.map((principle, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
                <div className="ml-16">
                  <h4 className="font-medium text-card-foreground mb-2">Exemples :</h4>
                  <ul className="space-y-1">
                    {principle.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === COLOR GUIDELINES === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">Règles de Couleur</h2>
          
          <div className="space-y-6">
            {colorGuidelines.map((guideline, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-background p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{guideline.rule}</h3>
                    <p className="text-muted-foreground">{guideline.description}</p>
                  </div>
                  <div className="md:w-1/3">
                    <div className="bg-muted p-3 rounded-lg">
                      <code className="text-sm">{guideline.example}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SPACING GUIDELINES === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Règles d'Espacement</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {spacingRules.map((rule, index) => (
                <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{rule.context}</h3>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-mono text-primary">{rule.spacing}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.usage}</p>
                </div>
              ))}
            </div>
            
            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Échelle d'espacement</h3>
              <div className="space-y-3">
                {[4, 8, 12, 16, 24, 32, 48, 64, 96].map((size, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="bg-primary rounded"
                      style={{ width: `${size}px`, height: '8px' }}
                    ></div>
                    <span className="font-mono text-sm">{size}px</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === TYPOGRAPHY === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">Échelle Typographique</h2>
          
          <div className="space-y-6">
            {typographyScale.map((type, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-background p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{type.size}</span>
                      <span>Weight: {type.weight}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div 
                      className="text-foreground"
                      style={{ 
                        fontSize: type.size.split(' ')[0], 
                        fontWeight: type.weight,
                        lineHeight: '1.2'
                      }}
                    >
                      Exemple de texte
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{type.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === COMPONENT GUIDELINES === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Guidelines par Composant</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Boutons</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Primary pour l'action principale</li>
                <li>• Outline pour les actions secondaires</li>
                <li>• Minimum 44px de hauteur (touch target)</li>
                <li>• États hover/focus/disabled obligatoires</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Formulaires</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Labels toujours visibles</li>
                <li>• Messages d'erreur explicites</li>
                <li>• Validation en temps réel</li>
                <li>• États focus clairement visibles</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Breadcrumb pour la hiérarchie</li>
                <li>• État actif clairement marqué</li>
                <li>• Navigation clavier complète</li>
                <li>• Responsive sur mobile</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Cartes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Padding cohérent (24px)</li>
                <li>• Border-radius standard (8px)</li>
                <li>• Shadow subtile</li>
                <li>• Hover state si interactive</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Modales</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Overlay semi-transparent</li>
                <li>• Fermeture par Escape</li>
                <li>• Focus trap à l'intérieur</li>
                <li>• Taille adaptée au contenu</li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Badges</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Couleurs selon le type</li>
                <li>• Texte court et explicite</li>
                <li>• Contraste suffisant</li>
                <li>• Taille cohérente</li>
              </ul>
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
              <a href="#components" className="text-muted-foreground hover:text-primary transition-colors">Composants</a>
              <a href="#tokens" className="text-muted-foreground hover:text-primary transition-colors">Design Tokens</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Figma</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
