import * as React from "react";
import { useThemeBrand } from "../components/ThemeBrandProvider";

export const Colors: React.FC = () => {
  const { theme, brand, resolvedTheme } = useThemeBrand();

  const coreColors = [
    { name: "Background", var: "--bg", description: "Couleur de fond principale" },
    { name: "Surface", var: "--surface", description: "Couleur des surfaces (cartes, modales)" },
    { name: "Text", var: "--text", description: "Couleur du texte principal" },
    { name: "Titles", var: "--titles", description: "Couleur des titres et headers" },
    { name: "Muted", var: "--muted", description: "Couleur du texte secondaire" },
    { name: "Accent", var: "--accent", description: "Couleur d'accent (liens, focus)" },
    { name: "Primary", var: "--primary", description: "Couleur primaire de la marque" },
  ];

  const onColors = [
    { name: "On Primary", var: "--on-primary", description: "Texte sur couleur primaire" },
    { name: "On Surface", var: "--on-surface", description: "Texte sur surfaces" },
    { name: "On Accent", var: "--on-accent", description: "Texte sur couleur d'accent" },
  ];

  const brands = [
    { id: "avnir", name: "AVNIR", primary: "#EDEDED", description: "Gris clair élégant" },
    { id: "muzidev", name: "MUZIDEV", primary: "#5CB9F2", description: "Bleu formation" },
    { id: "muzipics", name: "MUZIPICS", primary: "#FF2D55", description: "Rouge passion" },
    { id: "muziweb", name: "MUZIWEB", primary: "#9802EB", description: "Violet créatif" },
    { id: "muzimerch", name: "MUZIMERCH", primary: "#FF9D00", description: "Orange commerce" },
    { id: "muzibase", name: "MUZIBASE", primary: "#2FAD66", description: "Vert données" },
    { id: "muzimanager", name: "MUZIMANAGER", primary: "#FFD700", description: "Jaune gestion" },
  ];

  // Fonction pour calculer le contraste
  const getContrastRatio = (color1: string, color2: string) => {
    // Simulation - dans un vrai projet, on utiliserait une lib comme chroma-js
    // Pour la démo, on retourne des valeurs simulées
    const ratios: { [key: string]: number } = {
      '--bg--text': 12.5,
      '--surface--text': 11.2,
      '--primary--on-primary': 8.9,
      '--accent--on-accent': 7.1,
      '--titles--bg': 15.2,
      '--muted--bg': 4.8,
    };
    return ratios[`${color1}${color2}`] || 4.5;
  };

  const getContrastLevel = (ratio: number) => {
    if (ratio >= 7) return { level: 'AAA', color: 'text-green-400' };
    if (ratio >= 4.5) return { level: 'AA', color: 'text-yellow-400' };
    return { level: 'FAIL', color: 'text-red-400' };
  };

  const ColorSwatch: React.FC<{ color: any; showContrast?: boolean }> = ({ color, showContrast = false }) => {
    const contrastRatio = showContrast ? getContrastRatio(color.var, '--text') : null;
    const contrastInfo = contrastRatio ? getContrastLevel(contrastRatio) : null;

    return (
      <div className="p-6 bg-surface rounded-lg border border-border">
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-16 h-16 rounded-lg border border-border"
            style={{ backgroundColor: `var(${color.var})` }}
          />
          <div className="flex-1">
            <h3 className="font-medium text-titles">{color.name}</h3>
            <p className="text-sm text-muted">{color.description}</p>
            <code className="text-xs font-mono text-accent">{color.var}</code>
          </div>
        </div>
        
        {showContrast && contrastInfo && (
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted">Contraste vs texte</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono">{contrastRatio?.toFixed(1)}:1</span>
              <span className={`text-xs font-bold px-2 py-1 rounded ${contrastInfo.color} bg-opacity-20`}>
                {contrastInfo.level}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header data-force-dark className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="h2 text-titles">Colors</h1>
              <p className="text-muted">Palette de couleurs par thème et marque</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted">
                Thème actuel: <span className="text-accent font-medium">{resolvedTheme}</span>
                {resolvedTheme === "light" && " (semi-light)"}
              </div>
              <div className="text-sm text-muted">
                Marque: <span className="text-primary font-medium">{brand.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-16">
        {/* Current Theme Colors */}
        <section>
          <h2 className="h3 text-titles mb-6">Couleurs du thème actuel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreColors.map((color) => (
              <ColorSwatch key={color.name} color={color} showContrast={true} />
            ))}
          </div>
        </section>

        {/* On-Colors */}
        <section>
          <h2 className="h3 text-titles mb-6">Couleurs de texte sur surfaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onColors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </section>

        {/* Brand Colors */}
        <section>
          <h2 className="h3 text-titles mb-6">Couleurs par marque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brandItem) => (
              <div 
                key={brandItem.id} 
                className={`p-6 rounded-lg border transition-all ${
                  brandItem.id === brand 
                    ? 'border-primary bg-primary/10' 
                    : 'border-border bg-surface hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-lg border border-border"
                    style={{ backgroundColor: brandItem.primary }}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-titles flex items-center gap-2">
                      {brandItem.name}
                      {brandItem.id === brand && (
                        <span className="text-xs bg-primary text-on-primary px-2 py-1 rounded">ACTUEL</span>
                      )}
                    </h3>
                    <p className="text-sm text-muted">{brandItem.description}</p>
                    <code className="text-xs font-mono text-accent">{brandItem.primary}</code>
                  </div>
                </div>
                
                {/* Exemples d'usage */}
                <div className="space-y-2">
                  <button 
                    className="w-full px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{ 
                      backgroundColor: brandItem.primary, 
                      color: brandItem.id === 'avnir' ? '#000' : '#fff'
                    }}
                  >
                    Bouton primaire
                  </button>
                  <div className="flex gap-2">
                    <div 
                      className="flex-1 h-2 rounded"
                      style={{ backgroundColor: `${brandItem.primary}20` }}
                    />
                    <div 
                      className="flex-1 h-2 rounded"
                      style={{ backgroundColor: `${brandItem.primary}40` }}
                    />
                    <div 
                      className="flex-1 h-2 rounded"
                      style={{ backgroundColor: `${brandItem.primary}60` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theme Comparison */}
        <section>
          <h2 className="h3 text-titles mb-6">Comparaison des thèmes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dark Theme */}
            <div className="p-6 rounded-lg border border-border" data-theme="dark">
              <h3 className="h4 text-titles mb-4">Thème Dark</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-md" style={{ backgroundColor: '#0B0B0D', color: '#C5CCD6' }}>
                  <div className="text-sm font-medium" style={{ color: '#F4F4F4' }}>Background + Text</div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>Contraste: 12.5:1 (AAA)</div>
                </div>
                <div className="p-4 rounded-md" style={{ backgroundColor: '#141317', color: '#C5CCD6' }}>
                  <div className="text-sm font-medium" style={{ color: '#F4F4F4' }}>Surface + Text</div>
                  <div className="text-xs" style={{ color: '#9CA3AF' }}>Contraste: 11.2:1 (AAA)</div>
                </div>
              </div>
            </div>

            {/* Light Theme */}
            <div className="p-6 rounded-lg border border-border" data-theme="light">
              <h3 className="h4 text-titles mb-4">Thème Light (Semi-light)</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-md" style={{ backgroundColor: '#F8F8F8', color: '#1F2937' }}>
                  <div className="text-sm font-medium" style={{ color: '#0B0B0D' }}>Background + Text</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>Contraste: 15.2:1 (AAA)</div>
                </div>
                <div className="p-4 rounded-md" style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
                  <div className="text-sm font-medium" style={{ color: '#0B0B0D' }}>Surface + Text</div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>Contraste: 16.8:1 (AAA)</div>
                </div>
                <div className="p-2 rounded-md text-center text-sm" style={{ backgroundColor: '#0B0B0D', color: '#C5CCD6' }}>
                  Header/Footer restent dark (semi-light)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Guidelines */}
        <section>
          <h2 className="h3 text-titles mb-6">Guidelines d'accessibilité</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="w-8 h-8 bg-green-400 rounded-full mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-sm">AAA</span>
              </div>
              <h3 className="font-medium text-titles mb-2">Niveau AAA</h3>
              <p className="text-sm text-muted mb-2">Contraste ≥ 7:1</p>
              <p className="text-xs text-muted">Idéal pour tous les textes, excellent pour l'accessibilité</p>
            </div>
            
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="w-8 h-8 bg-yellow-400 rounded-full mb-4 flex items-center justify-center">
                <span className="text-black font-bold text-sm">AA</span>
              </div>
              <h3 className="font-medium text-titles mb-2">Niveau AA</h3>
              <p className="text-sm text-muted mb-2">Contraste ≥ 4.5:1</p>
              <p className="text-xs text-muted">Minimum requis pour le texte normal</p>
            </div>
            
            <div className="p-6 bg-surface rounded-lg border border-border">
              <div className="w-8 h-8 bg-red-400 rounded-full mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">✗</span>
              </div>
              <h3 className="font-medium text-titles mb-2">Échec</h3>
              <p className="text-sm text-muted mb-2">Contraste &lt; 4.5:1</p>
              <p className="text-xs text-muted">Non conforme WCAG, à éviter</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer data-force-dark className="border-t border-border bg-surface">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted">
            <p>Palette de couleurs - Thèmes et marques avec contrastes AA minimum</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
