import React from "react";
import { Button } from "@avnir/ui";

export const Ecommerce: React.FC = () => {
  const components = [
    {
      name: "Price",
      description: "Affichage de prix avec support des devises et promotions",
      usage: "Produits, tarification, comparaisons de prix",
      props: ["amount", "currency", "originalPrice", "discount", "size"],
      example: `<Price 
  amount={29.99}
  currency="EUR"
  originalPrice={39.99}
  discount={25}
  size="lg"
/>`
    },
    {
      name: "MiniCart",
      description: "Panier miniature avec aperçu des articles",
      usage: "Header e-commerce, checkout rapide",
      props: ["items", "total", "onRemove", "onCheckout", "loading"],
      example: `<MiniCart 
  items={cartItems}
  total={89.97}
  onRemove={handleRemove}
  onCheckout={handleCheckout}
/>`
    },
    {
      name: "MediaGallery",
      description: "Galerie d'images produit avec zoom et navigation",
      usage: "Pages produit, portfolios, showcases",
      props: ["images", "thumbnails", "zoom", "autoplay"],
      example: `<MediaGallery 
  images={[
    { src: "/product1.jpg", alt: "Vue 1" },
    { src: "/product2.jpg", alt: "Vue 2" }
  ]}
  zoom
  thumbnails
/>`
    },
    {
      name: "VariantsSwatches",
      description: "Sélecteur de variantes produit (couleur, taille, etc.)",
      usage: "Configuration produit, personnalisation",
      props: ["variants", "selected", "onChange", "type"],
      example: `<VariantsSwatches 
  variants={[
    { id: "red", label: "Rouge", color: "#ff0000" },
    { id: "blue", label: "Bleu", color: "#0000ff" }
  ]}
  type="color"
  onChange={handleVariantChange}
/>`
    },
    {
      name: "FacetedSearch",
      description: "Recherche à facettes avec filtres multiples",
      usage: "Catalogues produits, recherche avancée",
      props: ["facets", "filters", "onFilterChange", "results"],
      example: `<FacetedSearch 
  facets={[
    { key: "category", label: "Catégorie", options: [...] },
    { key: "price", label: "Prix", type: "range" }
  ]}
  onFilterChange={handleFilters}
/>`
    },
    {
      name: "CheckoutSteps",
      description: "Étapes du processus de commande",
      usage: "Tunnel de commande, progression checkout",
      props: ["steps", "currentStep", "onStepChange", "completed"],
      example: `<CheckoutSteps 
  steps={[
    { id: "cart", label: "Panier" },
    { id: "shipping", label: "Livraison" },
    { id: "payment", label: "Paiement" }
  ]}
  currentStep="shipping"
/>`
    },
    {
      name: "MegaMenu",
      description: "Menu de navigation étendu pour e-commerce",
      usage: "Navigation principale, catégories produits",
      props: ["categories", "featured", "layout", "onNavigate"],
      example: `<MegaMenu 
  categories={[
    {
      name: "Vêtements",
      subcategories: ["Homme", "Femme", "Enfant"],
      featured: [...]
    }
  ]}
  layout="grid"
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
            <span className="text-foreground font-medium">E-commerce</span>
          </nav>
        </div>
      </section>

      {/* === HERO === */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🛒</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Composants E-commerce
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Composants spécialisés pour les boutiques en ligne et applications e-commerce. 
                Ces éléments couvrent tout le parcours d'achat, de la navigation produit 
                au checkout, en passant par la gestion du panier et les filtres de recherche.
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
              <span className="font-semibold text-foreground">Commerce & Vente</span>
            </div>
          </div>
        </div>
      </section>

      {/* === LIVE DEMO === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">E-commerce Demo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Card Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Fiche Produit</h3>
              
              <div className="space-y-6">
                {/* Product Image */}
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                
                {/* Product Info */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Smartphone Pro Max</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl font-bold text-primary">899€</div>
                    <div className="text-lg text-muted-foreground line-through">999€</div>
                    <div className="px-2 py-1 bg-red-500/10 text-red-400 text-sm rounded">-10%</div>
                  </div>
                  
                  {/* Variants */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Couleur:</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full border-2 border-primary cursor-pointer"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-transparent cursor-pointer"></div>
                      <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-transparent cursor-pointer"></div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="solid" className="flex-1">Ajouter au panier</Button>
                    <Button variant="outline">♡</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mini Cart Demo */}
            <div className="rounded-[var(--radius)] border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Panier (2 articles)</h3>
              
              <div className="space-y-4">
                {/* Cart Item 1 */}
                <div className="flex items-center gap-4 p-3 bg-card rounded-lg">
                  <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-card-foreground">Smartphone Pro</div>
                    <div className="text-sm text-muted-foreground">Noir, 128GB</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-card-foreground">899€</div>
                    <div className="text-sm text-muted-foreground">Qty: 1</div>
                  </div>
                </div>
                
                {/* Cart Item 2 */}
                <div className="flex items-center gap-4 p-3 bg-card rounded-lg">
                  <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                    <span className="text-lg">🎧</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-card-foreground">Casque Audio</div>
                    <div className="text-sm text-muted-foreground">Blanc</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-card-foreground">199€</div>
                    <div className="text-sm text-muted-foreground">Qty: 1</div>
                  </div>
                </div>
                
                {/* Total */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium text-foreground">Total:</span>
                    <span className="text-xl font-bold text-primary">1,098€</span>
                  </div>
                  <Button variant="solid" className="w-full">Finaliser la commande</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkout Steps Demo */}
          <div className="mt-8 rounded-[var(--radius)] border border-border bg-background p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Étapes de commande</h3>
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  ✓
                </div>
                <span className="font-medium text-foreground">Panier</span>
              </div>
              <div className="flex-1 h-px bg-primary mx-4"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="font-medium text-primary">Livraison</span>
              </div>
              <div className="flex-1 h-px bg-border mx-4"></div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="text-muted-foreground">Paiement</span>
              </div>
            </div>
            
            <div className="text-center text-muted-foreground">
              Étape 2 sur 3 - Informations de livraison
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
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded font-medium">
                          E-commerce
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
                      {component.name === 'Price' && (
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-primary">29,99€</span>
                          <span className="text-lg text-muted-foreground line-through">39,99€</span>
                          <span className="px-2 py-1 bg-red-500/10 text-red-400 text-sm rounded">-25%</span>
                        </div>
                      )}
                      {component.name === 'VariantsSwatches' && (
                        <div>
                          <div className="text-sm font-medium text-foreground mb-2">Couleur:</div>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-primary cursor-pointer"></div>
                            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-transparent cursor-pointer"></div>
                            <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-transparent cursor-pointer"></div>
                          </div>
                        </div>
                      )}
                      {!['Price', 'VariantsSwatches'].includes(component.name) && (
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

      {/* === E-COMMERCE BEST PRACTICES === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Bonnes Pratiques E-commerce</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Conversion</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Processus de checkout simplifié</li>
                  <li>• Informations produit complètes</li>
                  <li>• Avis clients et évaluations</li>
                  <li>• Politique de retour claire</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">UX Mobile</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Navigation tactile optimisée</li>
                  <li>• Recherche et filtres efficaces</li>
                  <li>• Images haute qualité</li>
                  <li>• Paiement mobile simplifié</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Chargement rapide des pages</li>
                  <li>• Optimisation des images</li>
                  <li>• Cache intelligent</li>
                  <li>• CDN pour les médias</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">Sécurité</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• HTTPS obligatoire</li>
                  <li>• Paiements sécurisés</li>
                  <li>• Protection des données</li>
                  <li>• Authentification forte</li>
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
              <a href="#marketing" className="text-muted-foreground hover:text-primary transition-colors">Marketing</a>
              <a href="#saas" className="text-muted-foreground hover:text-primary transition-colors">SaaS</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
