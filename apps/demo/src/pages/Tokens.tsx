import React from "react";
import { Button } from "@avnir/ui";

export const Tokens: React.FC = () => {
  const colorTokens = [
    { name: "Primary", var: "--primary", value: "92 185 242", hex: "#5CB9F2" },
    { name: "On Primary", var: "--on-primary", value: "14 17 22", hex: "#0E1116" },
    { name: "Background", var: "--bg", value: "11 11 13", hex: "#0B0B0D" },
    { name: "Surface", var: "--surface", value: "20 19 23", hex: "#141317" },
    { name: "Border", var: "--border", value: "38 39 43", hex: "#26272B" },
    { name: "On Background", var: "--on-bg", value: "197 204 214", hex: "#C5CCD6" },
    { name: "On Surface", var: "--on-surface", value: "244 244 244", hex: "#F4F4F4" }
  ];

  const brandTokens = [
    { name: "AVNIR", primary: "#EDEDED", description: "Gris clair élégant" },
    { name: "MUZIDEV", primary: "#5CB9F2", description: "Bleu formation" },
    { name: "MUZIPICS", primary: "#FF2D55", description: "Rouge passion" },
    { name: "MUZIMERCH", primary: "#FF9D00", description: "Orange commerce" },
    { name: "MUZIBASE", primary: "#2FAD66", description: "Vert données" },
    { name: "MUZIMANAGER", primary: "#9802EB", description: "Violet gestion" },
    { name: "PROMOZIC", primary: "#FFD700", description: "Jaune promotion" }
  ];

  const badgeTokens = [
    { name: "Artist", var: "--badge-artist", color: "#8A5CF6", type: "Créatif" },
    { name: "Studio", var: "--badge-studio", color: "#2FAD66", type: "Production" },
    { name: "Beatmaker", var: "--badge-beatmaker", color: "#4FA4FF", type: "Technique" },
    { name: "Draft", var: "--badge-draft", color: "#FFD54A", type: "Statut" },
    { name: "Producer", var: "--badge-producer", color: "#FF9D00", type: "Business" },
    { name: "Archived", var: "--badge-archived", color: "#7A7D87", type: "Système" }
  ];

  const spacingTokens = [
    { name: "XS", value: "0.25rem", pixels: "4px", usage: "Micro-espacements" },
    { name: "SM", value: "0.5rem", pixels: "8px", usage: "Petits espacements" },
    { name: "MD", value: "1rem", pixels: "16px", usage: "Espacements standards" },
    { name: "LG", value: "1.5rem", pixels: "24px", usage: "Grands espacements" },
    { name: "XL", value: "2rem", pixels: "32px", usage: "Très grands espacements" },
    { name: "2XL", value: "3rem", pixels: "48px", usage: "Espacements de section" }
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
              <a href="#components" className="text-foreground hover:text-primary transition-colors">Composants</a>
              <a href="#tokens" className="text-primary font-medium">Design Tokens</a>
              <a href="#guidelines" className="text-foreground hover:text-primary transition-colors">Guidelines</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button variant="outline">Documentation</Button>
              <Button variant="solid">CSS Variables</Button>
            </div>
          </div>
        </div>
      </header>

      {/* === HERO === */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-12">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-8">
              Design Tokens
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Variables CSS centralisées pour maintenir la cohérence visuelle 
              à travers tous les satellites AVNIR Studio. Couleurs, espacements, 
              typographie et plus encore.
            </p>
          </div>
        </div>
      </section>

      {/* === COLOR TOKENS === */}
      <section className="py-20">
        <div className="max-w-8xl mx-auto px-12">
          <h2 className="text-4xl font-bold text-foreground mb-12">Couleurs Système</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {colorTokens.map((token, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg border border-border"
                    style={{ backgroundColor: token.hex }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{token.name}</h3>
                    <code className="text-sm text-muted-foreground">{token.var}</code>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">RGB:</span>
                    <code className="text-sm font-mono">{token.value}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">HEX:</span>
                    <code className="text-sm font-mono">{token.hex}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BRAND TOKENS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">Couleurs de Marque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandTokens.map((brand, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-background p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg"
                    style={{ backgroundColor: brand.primary }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-foreground">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground">{brand.description}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Primary:</span>
                  <code className="text-sm font-mono">{brand.primary}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === BADGE TOKENS === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Badges Typés</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {badgeTokens.map((badge, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-medium"
                    style={{ backgroundColor: badge.color }}
                  >
                    {badge.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{badge.name}</h3>
                    <span className="text-sm text-muted-foreground">{badge.type}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Variable:</span>
                    <code className="text-sm font-mono">{badge.var}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Couleur:</span>
                    <code className="text-sm font-mono">{badge.color}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[var(--radius)] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Aperçu des badges</h3>
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-artist">Artist</span>
              <span className="badge badge-studio">Studio</span>
              <span className="badge badge-beatmaker">Beatmaker</span>
              <span className="badge badge-draft">Draft</span>
              <span className="badge badge-producer">Producer</span>
              <span className="badge badge-archived">Archived</span>
            </div>
          </div>
        </div>
      </section>

      {/* === SPACING TOKENS === */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-card-foreground mb-8">Espacements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spacingTokens.map((spacing, index) => (
              <div key={index} className="rounded-[var(--radius)] border border-border bg-background p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="bg-primary rounded"
                    style={{ width: spacing.value, height: spacing.value, minWidth: '16px', minHeight: '16px' }}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-foreground">{spacing.name}</h3>
                    <p className="text-sm text-muted-foreground">{spacing.usage}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">REM:</span>
                    <code className="text-sm font-mono">{spacing.value}</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Pixels:</span>
                    <code className="text-sm font-mono">{spacing.pixels}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === USAGE SECTION === */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Utilisation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">CSS Variables</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`/* Utilisation des tokens */
.my-component {
  background: rgb(var(--primary));
  color: rgb(var(--on-primary));
  border: 1px solid rgb(var(--border));
  padding: var(--spacing-md);
}

/* Badge typé */
.badge-custom {
  background: var(--badge-artist);
  color: white;
}`}</code>
              </pre>
            </div>

            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Tailwind Classes</h3>
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`<!-- Classes Tailwind générées -->
<div class="bg-primary text-primary-foreground">
  Primary background
</div>

<div class="bg-surface text-foreground border-border">
  Surface avec bordure
</div>

<span class="badge badge-artist">
  Badge typé
</span>`}</code>
              </pre>
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
              <a href="#guidelines" className="text-muted-foreground hover:text-primary transition-colors">Guidelines</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
};
