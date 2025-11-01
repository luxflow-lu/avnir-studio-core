"use client";
import React from "react";
import { Button, Card, CardContent, CardTitle, CardDescription, Layout, Marketing, Features } from "@avnir/ui";
import type { AutoCutResult } from "@features/audio-tools";

export default function AutoCutPage() {
  const [error, setError] = React.useState<string | null>(null);

  const handleTrimComplete = (result: AutoCutResult) => {
    console.log("Trim terminé:", result);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    alert(errorMessage);
  };

  return (
    <main>
      <Layout.PageHeader
        title="AutoCut"
        subtitle="Trim tes fichiers audio avec précision. Éditeur waveform interactif, lecture en temps réel, raccourcis clavier, traitement 100% local, export WAV haute qualité."
      />

      {/* Stats Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="AutoCut en chiffres"
            align="center"
          />
          <Marketing.Stats
            items={[
              { label: "Précision", value: "0.01s" },
              { label: "Formats supportés", value: "Tous" },
              { label: "Raccourcis clavier", value: "6" },
              { label: "Taille max fichier", value: "100MB" }
            ]}
          />
        </div>
      </section>

      {/* Tool Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Trim ton fichier audio"
            subtitle="Importe ton fichier audio et ajuste précisément les points de début et fin avec l'éditeur waveform interactif."
            align="center"
          />
          <Features.AutoCutTool
            onTrimComplete={handleTrimComplete}
            onError={handleError}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Comment ça marche ?"
            subtitle="Trim tes fichiers audio en 3 étapes simples"
            align="center"
          />
          <Marketing.Steps
            direction="horizontal"
            items={[
              {
                title: "Importe ton fichier",
                description: "Glisse-dépose ton fichier audio (MP3, WAV, M4A, FLAC...) ou clique pour sélectionner. Tous les formats sont supportés."
              },
              {
                title: "Ajuste avec précision",
                description: "Visualise la waveform complète, déplace les curseurs de début et fin, zoom pour plus de précision, écoute le résultat en temps réel."
              },
              {
                title: "Télécharge le résultat",
                description: "Récupère ton fichier trimé en WAV 16-bit au même sample rate que l'original. Qualité studio garantie."
              }
            ]}
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Parfait pour tous les workflows"
            subtitle="Que tu sois producteur, ingé son ou musicien, AutoCut s'intègre parfaitement dans ton processus créatif"
            align="center"
          />
          <div className="grid-3">
            <Card>
              <CardContent>
                <div className="card-icon">🎹</div>
                <CardTitle>Producteurs</CardTitle>
                <CardDescription>
                  Nettoie tes enregistrements avant le mixage. Supprime les silences des stems et samples pour un workflow de production fluide.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🎙️</div>
                <CardTitle>Ingénieurs son</CardTitle>
                <CardDescription>
                  Prépare tes sessions d'enregistrement en supprimant automatiquement les silences. Gain de temps massif sur les projets multi-pistes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🎵</div>
                <CardTitle>Musiciens</CardTitle>
                <CardDescription>
                  Nettoie tes prises avant de les partager. Supprime les silences des démos et maquettes pour un rendu professionnel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Questions fréquentes"
            subtitle="Tout ce que tu dois savoir sur AutoCut"
            align="center"
          />
          <Marketing.Faq
            items={[
              {
                q: "Quels formats audio sont supportés ?",
                a: "AutoCut supporte tous les formats audio : MP3, WAV, M4A, FLAC, OGG, AAC, etc. Tous les formats supportés par ton navigateur fonctionnent."
              },
              {
                q: "Mes fichiers sont-ils envoyés sur un serveur ?",
                a: "Non, absolument pas. Le traitement est effectué 100% localement dans ton navigateur. Tes fichiers ne quittent jamais ton appareil."
              },
              {
                q: "Comment utiliser les raccourcis clavier ?",
                a: "Appuie sur Espace pour jouer/pause, Ctrl+← → pour ajuster le curseur de début, ↑ ↓ pour le curseur de fin. Maintiens Shift pour des ajustements de 1 seconde au lieu de 0.1s."
              },
              {
                q: "Quelle est la qualité du fichier exporté ?",
                a: "Le fichier est exporté en WAV 16-bit non compressé au même sample rate que l'original (généralement 44.1kHz ou 48kHz). Qualité studio garantie."
              },
              {
                q: "Puis-je zoomer sur la waveform ?",
                a: "Oui ! Utilise les boutons + et - pour zoomer jusqu'à 5x et voir les détails précis de ton audio. Parfait pour ajuster au sample près."
              },
              {
                q: "Puis-je traiter plusieurs fichiers ?",
                a: "Actuellement, l'outil traite un fichier à la fois. Une fonctionnalité de traitement par lots est prévue dans une future mise à jour."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="section--xl">
        <div className="container">
          <Marketing.CtaSection
            title="Découvre les autres outils MUZITOOLS"
            subtitle="AutoCut n'est que le début. D'autres outils arrivent bientôt pour compléter ta boîte à outils audio."
            actions={
              <>
                <Button variant="solid" size="lg" onClick={() => window.location.href = '/#tools'}>
                  Voir tous les outils
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
                  Retour à l'accueil
                </Button>
              </>
            }
          />
        </div>
      </section>
    </main>
  );
}
