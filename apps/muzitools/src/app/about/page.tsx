import { Layout } from "@avnir/ui";

export default function AboutPage() {
  return (
    <>
      <Layout.Navbar
        logo={<span className="navbar-logo">MUZITOOLS</span>}
        links={[
          { label: "Accueil", href: "/" },
          { label: "À propos", href: "/about", active: true }
        ]}
      />
      
      <main className="section section--lg">
        <div className="container">
          <div className="section-header section-header--center">
            <h1 className="hero-title">À propos de MUZITOOLS</h1>
            <p className="hero-subtitle">
              Version expérimentale v0 du Song Key & BPM Finder
            </p>
          </div>

          <div className="content-prose">
            <h2>Qu'est-ce que MUZITOOLS ?</h2>
            <p>
              MUZITOOLS est un outil expérimental d'analyse audio qui permet de découvrir 
              les informations clés de vos fichiers musicaux : BPM, tonalité et code Camelot.
            </p>

            <h2>Fonctionnalités v0</h2>
            <ul>
              <li><strong>Analyse BPM</strong> : Détection du tempo en battements par minute</li>
              <li><strong>Détection de tonalité</strong> : Identification de la clé musicale (ex: C#m)</li>
              <li><strong>Code Camelot</strong> : Système de notation pour le mixage DJ (ex: 12A)</li>
              <li><strong>Durée du fichier</strong> : Affichage de la durée totale</li>
            </ul>

            <h2>Formats supportés</h2>
            <ul>
              <li>MP3 (.mp3)</li>
              <li>WAV (.wav)</li>
              <li>M4A (.m4a)</li>
            </ul>

            <h2>Limites de la version v0</h2>
            <div className="alert alert--warning">
              <p><strong>⚠️ Version expérimentale</strong></p>
              <p>
                Cette version génère des résultats simulés à des fins de démonstration. 
                L'analyse audio réelle sera implémentée dans les versions futures.
              </p>
            </div>

            <h2>Sécurité & Confidentialité</h2>
            <ul>
              <li>Traitement 100% côté client (aucun fichier envoyé sur serveur)</li>
              <li>Validation stricte des types de fichiers</li>
              <li>Limite de taille : 50MB maximum</li>
              <li>Aucune donnée personnelle collectée</li>
            </ul>

            <h2>Roadmap</h2>
            <ul>
              <li>v0.1 : Interface de base avec résultats simulés ✅</li>
              <li>v0.2 : Intégration d'une librairie d'analyse audio réelle</li>
              <li>v0.3 : Amélioration de la précision des résultats</li>
              <li>v1.0 : Version production avec fonctionnalités avancées</li>
            </ul>
          </div>
        </div>
      </main>

      <Layout.Footer />
    </>
  );
}
