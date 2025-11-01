"use client";
import React from "react";
import { Button, Card, CardContent, CardTitle, CardDescription, Layout, Marketing, Features } from "@avnir/ui";
import type { AnalysisResult } from "@features/audio-tools";

export default function KeyBpmFinderPage() {
  const [error, setError] = React.useState<string | null>(null);

  const handleAnalysisComplete = (results: AnalysisResult) => {
    console.log("Analyse terminée:", results);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    alert(errorMessage);
  };

  return (
    <main>
      <Layout.PageHeader
        title="Key & BPM Finder"
        subtitle="Détecte instantanément le BPM, la tonalité et le code Camelot de tes tracks. Analyse 100% locale, résultats en <3s, précision de 99%. Parfait pour DJs, producteurs et beatmakers."
      />

      {/* Stats Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Key & BPM Finder en chiffres"
            align="center"
          />
          <Marketing.Stats
            items={[
              { label: "Précision BPM", value: "99%" },
              { label: "Temps d'analyse", value: "<3s" },
              { label: "Formats supportés", value: "3" },
              { label: "Taille max fichier", value: "50MB" }
            ]}
          />
        </div>
      </section>

      {/* Tool Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Analyse ton fichier audio"
            subtitle="Importe ton fichier MP3, WAV ou M4A pour obtenir instantanément le BPM, la tonalité et le code Camelot. Taille max : 50MB."
            align="center"
          />
          <Features.KeyBpmFinderTool
            onAnalysisComplete={handleAnalysisComplete}
            onError={handleError}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Comment ça marche ?"
            subtitle="Analyse tes fichiers audio en 3 étapes simples"
            align="center"
          />
          <Marketing.Steps
            direction="horizontal"
            items={[
              {
                title: "Importe ton fichier",
                description: "Glisse-dépose ton fichier audio (MP3, WAV, M4A) ou clique pour sélectionner. Taille max: 50MB."
              },
              {
                title: "Analyse automatique",
                description: "Notre algorithme analyse le BPM, détecte la tonalité et calcule le code Camelot en moins de 3 secondes. Traitement 100% local dans ton navigateur."
              },
              {
                title: "Utilise les résultats",
                description: "Copie les informations d'un clic pour tes playlists, DJ sets ou sessions de production. Analyse un autre fichier instantanément."
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
            subtitle="Que tu sois DJ, producteur ou beatmaker, le Key & BPM Finder s'intègre parfaitement dans ton processus créatif"
            align="center"
          />
          <div className="grid-3">
            <Card>
              <CardContent>
                <div className="card-icon">🎧</div>
                <CardTitle>DJs</CardTitle>
                <CardDescription>
                  Prépare tes sets en analysant tes tracks. Utilise le code Camelot pour des transitions harmoniques parfaites. Compatible Rekordbox, Serato, Traktor.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🎹</div>
                <CardTitle>Producteurs</CardTitle>
                <CardDescription>
                  Analyse tes samples et loops avant de les intégrer dans tes projets. Détecte le BPM et la tonalité pour un workflow de production fluide.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🥁</div>
                <CardTitle>Beatmakers</CardTitle>
                <CardDescription>
                  Vérifie le BPM de tes beats, analyse la tonalité de tes mélodies. Organise ta bibliothèque de samples par BPM et key.
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
            subtitle="Tout ce que tu dois savoir sur le Key & BPM Finder"
            align="center"
          />
          <Marketing.Faq
            items={[
              {
                q: "Quels formats audio sont supportés ?",
                a: "Le Key & BPM Finder supporte les formats MP3, WAV et M4A. La taille maximale par fichier est de 50MB."
              },
              {
                q: "Mes fichiers sont-ils envoyés sur un serveur ?",
                a: "Non, absolument pas. L'analyse est effectuée 100% localement dans ton navigateur. Tes fichiers ne quittent jamais ton appareil."
              },
              {
                q: "Quelle est la précision de l'analyse ?",
                a: "Notre algorithme offre une précision de 99% pour la détection du BPM et de la tonalité sur la plupart des genres musicaux."
              },
              {
                q: "Qu'est-ce que le code Camelot ?",
                a: "Le code Camelot (1A-12B) est un système de notation qui facilite le mixage harmonique. Les tracks avec des codes adjacents se mixent harmonieusement."
              },
              {
                q: "Comment copier les résultats ?",
                a: "Après l'analyse, clique sur le bouton 'Copier les résultats' pour copier toutes les informations dans ton presse-papier."
              },
              {
                q: "Puis-je analyser plusieurs fichiers ?",
                a: "Actuellement, l'outil analyse un fichier à la fois. Une fonctionnalité d'analyse par lots est prévue dans une future mise à jour."
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
            subtitle="Le Key & BPM Finder n'est que le début. D'autres outils arrivent bientôt pour compléter ta boîte à outils audio."
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
