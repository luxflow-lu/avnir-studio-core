"use client";
import React from "react";
import { Button, Card, Layout, Marketing } from "@avnir/ui";

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
              <div className="card-content">
                <div className="card-icon">🎵</div>
                <h3 className="card-title">Key & BPM Finder</h3>
                <p className="card-description">Analyse instantanée du BPM, de la tonalité et du code Camelot de tes tracks.</p>
                <Button variant="solid" size="sm" onClick={() => window.location.href = '/tools/key-bpm-finder'}>
                  Utiliser l'outil
                </Button>
              </div>
            </Card>
            <Card>
              <div className="card-content">
                <div className="card-icon">🎤</div>
                <h3 className="card-title">Stems Separator</h3>
                <p className="card-description">Sépare les voix, batteries, basse et instruments de n'importe quelle track.</p>
                <span className="badge badge--outline">Bientôt</span>
              </div>
            </Card>
            <Card>
              <div className="card-content">
                <div className="card-icon">🔇</div>
                <h3 className="card-title">Vocal Remover</h3>
                <p className="card-description">Extrait ou supprime les voix d'une chanson pour créer des instrumentales.</p>
                <span className="badge badge--outline">Bientôt</span>
              </div>
            </Card>
            <Card>
              <div className="card-content">
                <div className="card-icon">📊</div>
                <h3 className="card-title">Audio Normalizer</h3>
                <p className="card-description">Normalise le volume de tes tracks pour un niveau sonore cohérent.</p>
                <span className="badge badge--outline">Bientôt</span>
              </div>
            </Card>
            <Card>
              <div className="card-content">
                <div className="card-icon">🔄</div>
                <h3 className="card-title">Format Converter</h3>
                <p className="card-description">Convertis tes fichiers audio entre différents formats (MP3, WAV, FLAC, etc.).</p>
                <span className="badge badge--outline">Bientôt</span>
              </div>
            </Card>
            <Card>
              <div className="card-content">
                <div className="card-icon">✂️</div>
                <h3 className="card-title">Audio Trimmer</h3>
                <p className="card-description">Découpe et édite tes fichiers audio avec précision.</p>
                <span className="badge badge--outline">Bientôt</span>
              </div>
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

      {/* How It Works */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Steps
            title="Comment ça marche ?"
            subtitle="Analyse tes productions en 3 étapes simples"
            items={[
              {
                title: "1. Importe ton fichier",
                description: "Glisse-dépose ton fichier audio (MP3, WAV, M4A) ou clique pour sélectionner. Taille max: 50MB."
              },
              {
                title: "2. Analyse automatique",
                description: "Notre algorithme analyse le BPM, la tonalité et calcule le code Camelot en quelques secondes."
              },
              {
                title: "3. Utilise les résultats",
                description: "Copie les informations pour tes playlists, DJ sets ou sessions de production musicale."
              }
            ]}
          />
        </div>
      </section>


      {/* Stats Section */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Stats
            title="MUZITOOLS en chiffres"
            items={[
              { label: "Précision BPM", value: "99%" },
              { label: "Temps d'analyse", value: "<3s" },
              { label: "Formats supportés", value: "3" },
              { label: "Taille max fichier", value: "50MB" }
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
                q: "Quels formats audio sont supportés ?",
                a: "MUZITOOLS supporte les formats MP3, WAV et M4A. La taille maximale par fichier est de 50MB."
              },
              {
                q: "Mes fichiers sont-ils envoyés sur un serveur ?",
                a: "Non, absolument pas. L'analyse est effectuée 100% localement dans ton navigateur. Tes fichiers ne quittent jamais ton appareil."
              },
              {
                q: "Est-ce vraiment gratuit ?",
                a: "Oui, MUZITOOLS est 100% gratuit sans limitation. Aucun compte requis, aucun abonnement, aucune publicité."
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
                q: "Puis-je utiliser MUZITOOLS hors ligne ?",
                a: "Actuellement non, mais une version PWA avec support hors ligne est prévue dans une future mise à jour."
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
