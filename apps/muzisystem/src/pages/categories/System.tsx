import React from "react";
import { Button } from "@avnir/ui";

export const System: React.FC = () => {
  const components = [
    {
      name: "ErrorBoundary",
      description: "Composant de gestion d'erreurs React avec fallback UI",
      usage: "Gestion d'erreurs, stabilité application, debugging",
      props: ["fallback", "onError", "resetKeys", "children"],
      example: `<ErrorBoundary 
  fallback={<ErrorFallback />}
  onError={handleError}
  resetKeys={[user.id]}
>
  <MyComponent />
</ErrorBoundary>`
    },
    {
      name: "LoadingBoundary",
      description: "Wrapper pour gestion des états de chargement",
      usage: "Suspense, lazy loading, états de chargement",
      props: ["loading", "fallback", "delay", "children"],
      example: `<LoadingBoundary 
  loading={isLoading}
  fallback={<Spinner />}
  delay={200}
>
  <DataComponent />
</LoadingBoundary>`
    },
    {
      name: "ThemeToggle",
      description: "Commutateur de thème clair/sombre",
      usage: "Préférences utilisateur, accessibilité, personnalisation",
      props: ["theme", "onThemeChange", "size", "variant"],
      example: `<ThemeToggle 
  theme={currentTheme}
  onThemeChange={handleThemeChange}
  size="md"
  variant="button"
/>`
    },
    {
      name: "NotFound404",
      description: "Page d'erreur 404 avec navigation et suggestions",
      usage: "Erreurs de navigation, pages inexistantes",
      props: ["title", "description", "suggestions", "onNavigate"],
      example: `<NotFound404 
  title="Page introuvable"
  description="La page que vous cherchez n'existe pas"
  suggestions={[
    { label: "Accueil", href: "/" },
    { label: "Projets", href: "/projects" }
  ]}
  onNavigate={handleNavigate}
/>`
    },
    {
      name: "ServerError500",
      description: "Page d'erreur serveur avec retry et support",
      usage: "Erreurs serveur, maintenance, problèmes techniques",
      props: ["error", "onRetry", "supportContact", "details"],
      example: `<ServerError500 
  error={serverError}
  onRetry={handleRetry}
  supportContact="support@company.com"
  details={errorDetails}
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
            <span className="text-foreground font-medium">System</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">⚙️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants System
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants système et utilitaires pour la robustesse et la stabilité 
                des applications. Ces éléments gèrent les erreurs, états de chargement, 
                thèmes et autres aspects techniques essentiels.
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
              <span className="font-semibold text-foreground">Infrastructure & Utilitaires</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">System Components Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Error States */}
            <div className="space-y-6">
              <div className="rounded-[var(--radius)] border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">États d'erreur</h3>
                
                {/* 404 Error */}
                <div className="p-6 bg-card rounded-lg border border-border mb-4">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h4 className="text-xl font-bold text-card-foreground mb-2">404 - Page introuvable</h4>
                    <p className="text-muted-foreground mb-4">
                      La page que vous cherchez n'existe pas ou a été déplacée.
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="solid" className="text-sm">Retour à l'accueil</Button>
                      <Button variant="outline" className="text-sm">Signaler le problème</Button>
                    </div>
                  </div>
                </div>
                
                {/* 500 Error */}
                <div className="p-6 bg-card rounded-lg border border-red-500/20">
                  <div className="text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h4 className="text-xl font-bold text-red-400 mb-2">500 - Erreur serveur</h4>
                    <p className="text-muted-foreground mb-4">
                      Une erreur inattendue s'est produite. Nos équipes ont été notifiées.
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="solid" className="text-sm">Réessayer</Button>
                      <Button variant="outline" className="text-sm">Contacter le support</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Loading & Theme */}
            <div className="space-y-6">
              <div className="rounded-[var(--radius)] border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">États de chargement</h3>
                
                {/* Loading States */}
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm text-muted-foreground">Chargement en cours...</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded animate-pulse"></div>
                      <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
                      <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-[var(--radius)] border border-border bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contrôles système</h3>
                
                {/* Theme Toggle */}
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-card-foreground">Thème</div>
                      <div className="text-sm text-muted-foreground">Basculer entre clair et sombre</div>
                    </div>
                    <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                      <button className="px-3 py-1 bg-background text-foreground rounded text-sm">
                        ☀️ Clair
                      </button>
                      <button className="px-3 py-1 text-muted-foreground rounded text-sm hover:text-foreground">
                        🌙 Sombre
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Error Boundary Demo */}
                <div className="p-4 bg-card rounded-lg border border-border mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-card-foreground">Error Boundary</div>
                      <div className="text-sm text-muted-foreground">Gestion des erreurs React</div>
                    </div>
                    <Button variant="outline" className="text-sm">
                      Simuler erreur
                    </Button>
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
                        <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded font-medium">
                          System
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

      {/* === SYSTEM ARCHITECTURE === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Architecture Système</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Gestion d'erreurs</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Error Boundaries React</li>
                  <li>• Fallback UI gracieux</li>
                  <li>• Logging et monitoring</li>
                  <li>• Recovery automatique</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Lazy loading intelligent</li>
                  <li>• Suspense boundaries</li>
                  <li>• Memoization optimisée</li>
                  <li>• Bundle splitting</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Accessibilité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Support thèmes système</li>
                  <li>• Préférences utilisateur</li>
                  <li>• Contraste adaptatif</li>
                  <li>• Réduction des animations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Monitoring</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Métriques de performance</li>
                  <li>• Tracking des erreurs</li>
                  <li>• Analytics d'usage</li>
                  <li>• Health checks</li>
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
              <a href="#saas" className="text-muted-foreground hover:text-primary transition-colors">SaaS</a>
              <a href="#primitives" className="text-muted-foreground hover:text-primary transition-colors">Primitives</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
