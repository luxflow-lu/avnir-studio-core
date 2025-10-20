import React from "react";
import { Button } from "@avnir/ui";

export const Usage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* === HEADER === */}
      <header className="section-tight border-b border-border bg-surface">
        <div className="container">
          <div className="cluster">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-on-primary font-bold text-sm">📖</span>
            </div>
            <div className="stack-sm">
              <h1 className="text-2xl font-bold text-foreground">Usage dans une app</h1>
              <p className="text-sm text-foreground/70">Comment intégrer le design system AVNIR</p>
            </div>
          </div>
        </div>
      </header>

      {/* === CONTENT === */}
      <main className="container section">
        <div className="stack-lg">
          
          {/* Installation */}
          <div className="card">
            <div className="stack">
              <h2 className="text-xl font-semibold">Installation</h2>
              <p className="text-foreground/80">
                Pour utiliser le design system AVNIR dans votre application, suivez ces 3 étapes simples :
              </p>
              
              <div className="stack">
                <div className="card">
                  <div className="stack-sm">
                    <h3 className="font-medium">1. Installer les dépendances</h3>
                    <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                      <code>{`pnpm add @avnir/tokens @avnir/ui`}</code>
                    </pre>
                  </div>
                </div>

                <div className="card">
                  <div className="stack-sm">
                    <h3 className="font-medium">2. Importer les styles dans votre main.tsx</h3>
                    <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                      <code>{`import "@avnir/tokens/themes.css";
import "@avnir/ui/styles.css";
import "./app.css"; // optionnel`}</code>
                    </pre>
                  </div>
                </div>

                <div className="card">
                  <div className="stack-sm">
                    <h3 className="font-medium">3. Configurer le HTML avec les attributs data</h3>
                    <pre className="bg-bg rounded p-3 text-sm font-mono overflow-x-auto">
                      <code>{`<html data-brand="muzidev" data-theme="dark">
  <!-- votre app -->
</html>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration des brands */}
          <div className="card">
            <div className="stack">
              <h2 className="text-xl font-semibold">Brands disponibles</h2>
              <p className="text-foreground/80">
                Changez l'attribut <code className="bg-surface px-2 py-1 rounded text-sm">data-brand</code> pour adapter les couleurs :
              </p>
              
              <div className="grid-3">
                {[
                  { name: "avnir", color: "#EDEDED", desc: "Gris élégant" },
                  { name: "muzidev", color: "#5CB9F2", desc: "Bleu formation" },
                  { name: "muzipics", color: "#FF2D55", desc: "Rouge passion" },
                  { name: "muzimerch", color: "#FF9D00", desc: "Orange commerce" },
                  { name: "muzibase", color: "#2FAD66", desc: "Vert données" },
                  { name: "muzimanager", color: "#9802EB", desc: "Violet gestion" }
                ].map((brand) => (
                  <div key={brand.name} className="card">
                    <div className="stack-sm">
                      <div className="cluster">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: brand.color }}
                        />
                        <code className="text-sm font-mono">{brand.name}</code>
                      </div>
                      <p className="text-sm text-foreground/70">{brand.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thèmes */}
          <div className="card">
            <div className="stack">
              <h2 className="text-xl font-semibold">Thèmes</h2>
              <p className="text-foreground/80">
                Basculez entre les thèmes avec l'attribut <code className="bg-surface px-2 py-1 rounded text-sm">data-theme</code> :
              </p>
              
              <div className="grid-2">
                <div className="card">
                  <div className="stack-sm">
                    <h3 className="font-medium">Thème sombre (par défaut)</h3>
                    <code className="text-sm font-mono bg-bg px-2 py-1 rounded">data-theme="dark"</code>
                    <p className="text-sm text-foreground/70">Fond sombre, idéal pour les interfaces créatives</p>
                  </div>
                </div>
                
                <div className="card">
                  <div className="stack-sm">
                    <h3 className="font-medium">Thème clair</h3>
                    <code className="text-sm font-mono bg-bg px-2 py-1 rounded">data-theme="light"</code>
                    <p className="text-sm text-foreground/70">Fond clair, parfait pour la lecture et les données</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple complet */}
          <div className="card">
            <div className="stack">
              <h2 className="text-xl font-semibold">Exemple complet</h2>
              <p className="text-foreground/80">
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
    <div className="min-h-screen bg-background text-foreground section">
      <div className="container">
        <div className="card max-w-md mx-auto">
          <div className="stack">
            <h1 className="text-2xl font-bold">Hello AVNIR!</h1>
            <p className="text-foreground/80">
              Votre app utilise maintenant le design system AVNIR.
            </p>
            <Button className="btn btn-primary">
              Commencer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};`}</code>
              </pre>
            </div>
          </div>

          {/* Classes utilitaires */}
          <div className="card">
            <div className="stack">
              <h2 className="text-xl font-semibold">Classes CSS disponibles</h2>
              <p className="text-foreground/80">
                Le design system fournit des classes CSS prêtes à l'emploi :
              </p>
              
              <div className="grid-2">
                <div className="stack-sm">
                  <h3 className="font-medium">Composants</h3>
                  <ul className="stack-sm text-sm">
                    <li><code className="bg-surface px-2 py-1 rounded">.card</code> - Cartes avec ombres</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.btn</code> - Boutons de base</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.btn-primary</code> - Bouton principal</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.badge</code> - Badge générique</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.badge-artist</code> - Badge artiste</li>
                  </ul>
                </div>
                
                <div className="stack-sm">
                  <h3 className="font-medium">Layout & Rhythm</h3>
                  <ul className="stack-sm text-sm">
                    <li><code className="bg-surface px-2 py-1 rounded">.container</code> - Conteneur centré</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.section</code> - Section avec padding</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.stack</code> - Espacement vertical</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.cluster</code> - Espacement horizontal</li>
                    <li><code className="bg-surface px-2 py-1 rounded">.grid-2/.grid-3</code> - Grilles responsives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};
