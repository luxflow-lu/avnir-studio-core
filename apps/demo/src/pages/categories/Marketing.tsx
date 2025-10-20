import React from "react";
import { Button } from "@avnir/ui";

export const Marketing: React.FC = () => {
  const components = [
    {
      name: "Hero",
      description: "Section d'accueil avec titre, sous-titre et call-to-action",
      usage: "Pages d'accueil, landing pages, présentation produit",
      props: ["title", "subtitle", "actions", "image", "layout"],
      example: `<Hero 
  title="Créez des interfaces exceptionnelles"
  subtitle="Le design system pour vos projets"
  actions={<Button>Commencer</Button>}
  layout="center"
/>`
    },
    {
      name: "Features",
      description: "Grille de fonctionnalités avec icônes et descriptions",
      usage: "Présentation des avantages, caractéristiques produit",
      props: ["items", "columns", "title", "subtitle"],
      example: `<Features 
  title="Fonctionnalités"
  items={[
    { icon: "🎨", title: "Design", description: "..." },
    { icon: "⚡", title: "Performance", description: "..." }
  ]}
  columns={3}
/>`
    },
    {
      name: "Testimonials",
      description: "Témoignages clients avec photos et citations",
      usage: "Preuves sociales, avis clients, recommandations",
      props: ["testimonials", "layout", "autoplay"],
      example: `<Testimonials 
  testimonials={[
    { 
      quote: "Excellent produit !",
      author: "John Doe",
      role: "CEO",
      avatar: "/avatar.jpg"
    }
  ]}
/>`
    },
    {
      name: "CtaSection",
      description: "Section d'appel à l'action avec fond coloré",
      usage: "Conversion, inscription, téléchargement",
      props: ["title", "description", "actions", "variant"],
      example: `<CtaSection 
  title="Prêt à commencer ?"
  description="Rejoignez des milliers d'utilisateurs"
  actions={<Button>S'inscrire gratuitement</Button>}
  variant="primary"
/>`
    },
    {
      name: "Stats",
      description: "Statistiques avec chiffres clés et labels",
      usage: "Métriques, performances, résultats",
      props: ["stats", "layout", "animated"],
      example: `<Stats 
  stats={[
    { value: "10k+", label: "Utilisateurs" },
    { value: "99%", label: "Satisfaction" },
    { value: "24/7", label: "Support" }
  ]}
  animated
/>`
    },
    {
      name: "FAQ",
      description: "Questions fréquentes avec accordéon",
      usage: "Support client, documentation, clarifications",
      props: ["questions", "searchable", "categories"],
      example: `<FAQ 
  questions={[
    {
      question: "Comment ça marche ?",
      answer: "C'est très simple..."
    }
  ]}
  searchable
/>`
    },
    {
      name: "Newsletter",
      description: "Formulaire d'inscription newsletter",
      usage: "Capture d'emails, marketing, communication",
      props: ["title", "description", "placeholder", "onSubmit"],
      example: `<Newsletter 
  title="Restez informé"
  description="Recevez nos dernières actualités"
  placeholder="votre@email.com"
  onSubmit={handleSubmit}
/>`
    },
    {
      name: "LogoCloud",
      description: "Grille de logos partenaires ou clients",
      usage: "Crédibilité, partenariats, références",
      props: ["logos", "title", "grayscale"],
      example: `<LogoCloud 
  title="Ils nous font confiance"
  logos={[
    { name: "Company A", src: "/logo-a.png" },
    { name: "Company B", src: "/logo-b.png" }
  ]}
  grayscale
/>`
    },
    {
      name: "Steps",
      description: "Processus étape par étape avec numérotation",
      usage: "Onboarding, tutoriels, processus",
      props: ["steps", "orientation", "connector"],
      example: `<Steps 
  steps={[
    { title: "Inscription", description: "Créez votre compte" },
    { title: "Configuration", description: "Paramétrez vos préférences" },
    { title: "Utilisation", description: "Commencez à utiliser" }
  ]}
  orientation="horizontal"
/>`
    },
    {
      name: "ContactBlock",
      description: "Bloc de contact avec informations et formulaire",
      usage: "Pages contact, support, coordonnées",
      props: ["title", "contacts", "form", "map"],
      example: `<ContactBlock 
  title="Contactez-nous"
  contacts={[
    { type: "email", value: "hello@company.com" },
    { type: "phone", value: "+33 1 23 45 67 89" }
  ]}
  form={<ContactForm />}
/>`
    },
    {
      name: "PricingStrip",
      description: "Bande de tarification simple",
      usage: "Pricing simple, promotions, offres",
      props: ["price", "period", "description", "action"],
      example: `<PricingStrip 
  price="29€"
  period="par mois"
  description="Accès complet à toutes les fonctionnalités"
  action={<Button>Commencer</Button>}
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
            <span className="text-foreground font-medium">Marketing</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex items-start gap-8 mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">📢</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Composants Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants spécialement conçus pour les pages marketing et landing pages. 
                Ces éléments permettent de créer des expériences engageantes pour convertir 
                les visiteurs en clients avec des sections optimisées pour la conversion.
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
              <span className="font-semibold text-foreground">Marketing & Conversion</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-20 bg-card">
        <div className="max-w-8xl mx-auto px-12">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Landing Page Demo</h2>
          
          <div className="rounded-[var(--radius)] border border-border bg-background overflow-hidden">
            {/* Mini Hero */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Créez des landing pages <span className="text-primary">exceptionnelles</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Avec nos composants marketing, construisez des pages qui convertissent 
                et engagent vos visiteurs dès la première seconde.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="solid">Commencer gratuitement</Button>
                <Button variant="outline">Voir la démo</Button>
              </div>
            </div>
            
            {/* Mini Stats */}
            <div className="p-8 border-b border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction client</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support disponible</div>
                </div>
              </div>
            </div>
            
            {/* Mini Features */}
            <div className="p-8 border-b border-border">
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Fonctionnalités principales</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-1">Design System</h5>
                    <p className="text-sm text-muted-foreground">Composants cohérents et réutilisables</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-1">Performance</h5>
                    <p className="text-sm text-muted-foreground">Optimisé pour la vitesse et l'efficacité</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mini CTA */}
            <div className="p-8 bg-primary/5 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">Prêt à commencer ?</h4>
              <p className="text-muted-foreground mb-4">Rejoignez des milliers d'utilisateurs satisfaits</p>
              <Button variant="solid">S'inscrire maintenant</Button>
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
                        <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded font-medium">
                          Marketing
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
                      {component.name === 'Hero' && (
                        <div className="text-center p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                          <h4 className="text-xl font-bold text-foreground mb-2">Titre Hero</h4>
                          <p className="text-muted-foreground mb-4">Sous-titre descriptif</p>
                          <Button variant="solid">Call to Action</Button>
                        </div>
                      )}
                      {component.name === 'Stats' && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">10k+</div>
                            <div className="text-xs text-muted-foreground">Utilisateurs</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">99%</div>
                            <div className="text-xs text-muted-foreground">Satisfaction</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">24/7</div>
                            <div className="text-xs text-muted-foreground">Support</div>
                          </div>
                        </div>
                      )}
                      {component.name === 'Newsletter' && (
                        <div className="text-center p-4 bg-card rounded-lg">
                          <h5 className="font-medium text-card-foreground mb-2">Restez informé</h5>
                          <div className="flex gap-2 max-w-sm mx-auto">
                            <input 
                              placeholder="votre@email.com"
                              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm"
                            />
                            <Button variant="solid" className="text-sm">S'abonner</Button>
                          </div>
                        </div>
                      )}
                      {!['Hero', 'Stats', 'Newsletter'].includes(component.name) && (
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

      {/* === MARKETING TIPS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Conseils Marketing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Conversion</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CTA clairs et visibles</li>
                  <li>• Preuves sociales (témoignages, stats)</li>
                  <li>• Réduction des frictions</li>
                  <li>• Tests A/B réguliers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Temps de chargement &lt; 3s</li>
                  <li>• Images optimisées</li>
                  <li>• Lazy loading des sections</li>
                  <li>• Mobile-first design</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">UX</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hiérarchie visuelle claire</li>
                  <li>• Navigation intuitive</li>
                  <li>• Contenu scannable</li>
                  <li>• Formulaires simplifiés</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">SEO</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Balises sémantiques</li>
                  <li>• Meta descriptions optimisées</li>
                  <li>• Structure de données</li>
                  <li>• Accessibilité complète</li>
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
              <a href="#form" className="text-muted-foreground hover:text-primary transition-colors">Form</a>
              <a href="#ecommerce" className="text-muted-foreground hover:text-primary transition-colors">E-commerce</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
