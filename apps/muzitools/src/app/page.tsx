"use client";
import React from "react";
import { Button, Card, CardContent, CardTitle, CardDescription, CardFooter, Layout, Marketing } from "@avnir/ui";

export default function Page() {

  return (
    <main>
      {/* Hero Section */}
      <section id="accueil">
        <Marketing.Hero
          title="Outils gratuits pour créateurs musicaux"
          subtitle="Analyse audio, traitement de fichiers et outils essentiels pour producteurs et DJs. 100% gratuit, 100% local, 0% tracking."
          layout="center"
          actions={
            <>
              <Button variant="solid" size="lg" onClick={() => window.location.href = '/tools/key-bpm-finder'}>
                Essayer Key & BPM Finder
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/#tools'}>
                Voir tous les outils
              </Button>
            </>
          }
        />
      </section>

      {/* Tools Grid */}
      <section id="tools" className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Nos outils"
            subtitle="Des outils puissants et gratuits pour ta production musicale"
            align="center"
          />
          <div className="grid-3">
            <Card>
              <CardContent>
                <div className="card-icon">🎵</div>
                <CardTitle>Key & BPM Finder</CardTitle>
                <CardDescription>
                  Analyse instantanée du BPM, de la tonalité et du code Camelot de tes tracks.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="solid" size="sm" onClick={() => window.location.href = '/tools/key-bpm-finder'}>
                  Utiliser l'outil
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🎤</div>
                <CardTitle>Stems Separator</CardTitle>
                <CardDescription>
                  Sépare les voix, batteries, basse et instruments de n'importe quelle track.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Bientôt disponible
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🔇</div>
                <CardTitle>Vocal Remover</CardTitle>
                <CardDescription>
                  Extrait ou supprime les voix d'une chanson pour créer des instrumentales.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Bientôt disponible
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">📊</div>
                <CardTitle>Audio Normalizer</CardTitle>
                <CardDescription>
                  Normalise le volume de tes tracks pour un niveau sonore cohérent.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Bientôt disponible
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">🔄</div>
                <CardTitle>Format Converter</CardTitle>
                <CardDescription>
                  Convertis tes fichiers audio entre différents formats (MP3, WAV, FLAC, etc.).
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Bientôt disponible
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <div className="card-icon">✂️</div>
                <CardTitle>Audio Trimmer</CardTitle>
                <CardDescription>
                  Découpe et édite tes fichiers audio avec précision.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" disabled>
                  Bientôt disponible
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Pourquoi MUZITOOLS ?"
            subtitle="Des outils pensés pour les créateurs, par des créateurs"
            align="center"
          />
          <Marketing.FeatureGrid columns={3}>
            <Marketing.FeatureGridItem
              icon="🆓"
              title="100% Gratuit"
              description="Tous les outils sont gratuits, sans limite d'utilisation. Aucun compte requis, aucun abonnement."
            />
            <Marketing.FeatureGridItem
              icon="🔒"
              title="100% Local"
              description="Tes fichiers ne quittent jamais ton appareil. Analyse locale dans ton navigateur, zéro serveur."
            />
            <Marketing.FeatureGridItem
              icon="⚡"
              title="Résultats instantanés"
              description="Analyse complète en moins de 3 secondes. Pas d'attente, pas de file d'attente."
            />
          </Marketing.FeatureGrid>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Stats
            title="MUZITOOLS en chiffres"
            items={[
              { label: "Outils disponibles", value: "1" },
              { label: "Outils à venir", value: "5+" },
              { label: "Utilisateurs", value: "100%" },
              { label: "Prix", value: "0€" }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section--xl">
        <div className="container">
          <Marketing.Faq
            title="Questions fréquentes"
            subtitle="Tout ce que tu dois savoir sur MUZITOOLS"
            items={[
              {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui, MUZITOOLS est 100% gratuit sans limitation. Aucun compte requis, aucun abonnement, aucune publicité."
              },
              {
                q: "Mes fichiers sont-ils envoyés sur un serveur ?",
                a: "Non, absolument pas. Tous les outils fonctionnent 100% localement dans ton navigateur. Tes fichiers ne quittent jamais ton appareil."
              },
              {
                q: "Quels outils sont disponibles actuellement ?",
                a: "Le Key & BPM Finder est actuellement disponible. D'autres outils comme le Stems Separator, Vocal Remover et Audio Normalizer arrivent bientôt."
              },
              {
                q: "Dois-je créer un compte ?",
                a: "Non, aucun compte n'est nécessaire. Tous les outils sont accessibles directement sans inscription."
              },
              {
                q: "Puis-je utiliser MUZITOOLS hors ligne ?",
                a: "Actuellement non, mais une version PWA avec support hors ligne est prévue dans une future mise à jour."
              },
              {
                q: "Comment puis-je soutenir le projet ?",
                a: "MUZITOOLS fait partie de l'écosystème AVNIR Studio. Tu peux nous soutenir en utilisant nos autres services comme MUZIDEV (formation) ou MUZIPICS (générateur de visuels)."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Final - AVNIR Studio */}
      <section className="section--xl">
        <div className="container">
          <Marketing.AvnirStudioCta />
        </div>
      </section>
    </main>
  );
}
