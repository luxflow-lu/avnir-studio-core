import React from "react";
import { Button } from "@avnir/ui";

export const Usage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="py-6 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-on-primary font-bold text-sm">📖</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Usage dans une app</h1>
                <p className="text-sm text-foreground/70">Comment intégrer le design system AVNIR</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* === CONTENT === */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        
        {/* Installation */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Installation</h2>
            <p className="text-foreground/80 mb-6">
              Pour utiliser le design system AVNIR dans votre application, suivez ces 3 étapes simples :
            </p>
            
            <div className="space-y-4">
              <div className="bg-surface/50 rounded-lg p-4 border border-border">
                <h3 className="font-medium mb-2">1. Installer les dépendances</h3>
                <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                  <code>{`pnpm add @avnir/tokens @avnir/ui`}</code>
                </pre>
              </div>

              <div className="bg-surface/50 rounded-lg p-4 border border-border">
                <h3 className="font-medium mb-2">2. Importer les styles dans votre main.tsx</h3>
                <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                  <code>{`import "@avnir/tokens/themes.css";
import "@avnir/ui/styles.css";
import "./app.css"; // optionnel`}</code>
                </pre>
              </div>

              <div className="bg-surface/50 rounded-lg p-4 border border-border">
                <h3 className="font-medium mb-2">3. Configurer le HTML avec les attributs data</h3>
                <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                  <code>{`<html data-brand="muzidev" data-theme="dark">
  <!-- votre app -->
</html>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration des brands */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Brands disponibles</h2>
            <p className="text-foreground/80 mb-6">
              Changez l'attribut <code className="bg-surface px-2 py-1 rounded text-sm">data-brand</code> pour adapter les couleurs :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "avnir", color: "#EDEDED", desc: "Gris élégant" },
                { name: "muzidev", color: "#5CB9F2", desc: "Bleu formation" },
                { name: "muzipics", color: "#FF2D55", desc: "Rouge passion" },
                { name: "muzimerch", color: "#FF9D00", desc: "Orange commerce" },
                { name: "muzibase", color: "#2FAD66", desc: "Vert données" },
                { name: "muzimanager", color: "#9802EB", desc: "Violet gestion" }
              ].map((brand) => (
                <div key={brand.name} className="bg-surface/50 rounded-lg p-4 border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: brand.color }}
                    />
                    <code className="text-sm font-mono">{brand.name}</code>
                  </div>
                  <p className="text-sm text-foreground/70">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thèmes */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Thèmes</h2>
            <p className="text-foreground/80 mb-6">
              Basculez entre les thèmes avec l'attribut <code className="bg-surface px-2 py-1 rounded text-sm">data-theme</code> :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface/50 rounded-lg p-4 border border-border">
                <h3 className="font-medium mb-2">Thème sombre (par défaut)</h3>
                <code className="text-sm font-mono bg-bg px-2 py-1 rounded">data-theme="dark"</code>
                <p className="text-sm text-foreground/70 mt-2">Fond sombre, idéal pour les interfaces créatives</p>
              </div>
              
              <div className="bg-surface/50 rounded-lg p-4 border border-border">
                <h3 className="font-medium mb-2">Thème clair</h3>
                <code className="text-sm font-mono bg-bg px-2 py-1 rounded">data-theme="light"</code>
                <p className="text-sm text-foreground/70 mt-2">Fond clair, parfait pour la lecture et les données</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exemple complet */}
        <section className="mb-12">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Exemple complet</h2>
            <p className="text-foreground/80 mb-6">
              Voici un exemple complet d'intégration dans une app React :
            </p>
            
            <pre className="bg-bg rounded-lg p-4 text-sm font-mono overflow-x-auto border border-border">
              <code>{`// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@avnir/tokens/themes.css";
import "@avnir/ui/styles.css";
import "./app.css";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// index.html
<!doctype html>
<html lang="fr" data-theme="dark" data-brand="muzidev">
  <head>
    <meta charset="UTF-8" />
    <title>Mon App AVNIR</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// App.tsx
import { Button } from "@avnir/ui";

export const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="card max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Hello AVNIR!</h1>
        <p className="text-foreground/80 mb-6">
          Votre app utilise maintenant le design system AVNIR.
        </p>
        <Button variant="primary">
          Commencer
        </Button>
      </div>
    </div>
  );
};`}</code>
            </pre>
          </div>
        </section>

        {/* Classes utilitaires */}
        <section>
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Classes CSS disponibles</h2>
            <p className="text-foreground/80 mb-6">
              Le design system fournit des classes CSS prêtes à l'emploi :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Composants</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-surface px-2 py-1 rounded">.card</code> - Cartes avec ombres</li>
                  <li><code className="bg-surface px-2 py-1 rounded">.btn</code> - Boutons de base</li>
                  <li><code className="bg-surface px-2 py-1 rounded">.btn-primary</code> - Bouton principal</li>
                  <li><code className="bg-surface px-2 py-1 rounded">.badge</code> - Badge générique</li>
                  <li><code className="bg-surface px-2 py-1 rounded">.badge-artist</code> - Badge artiste</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Couleurs Tailwind</h3>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-surface px-2 py-1 rounded">bg-background</code> - Fond principal</li>
                  <li><code className="bg-surface px-2 py-1 rounded">bg-surface</code> - Fond de carte</li>
                  <li><code className="bg-surface px-2 py-1 rounded">bg-primary</code> - Couleur primaire</li>
                  <li><code className="bg-surface px-2 py-1 rounded">text-foreground</code> - Texte principal</li>
                  <li><code className="bg-surface px-2 py-1 rounded">border-border</code> - Bordures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
