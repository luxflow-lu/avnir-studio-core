"use client";
import React from "react";
import { Button, Card, Layout, Marketing, Saas } from "@avnir/ui";

export default function Page() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <>
      {/* Hero Section */}
      <Marketing.Hero
        title="Génère tes visuels d'album 2.0"
        subtitle="Crée instantanément des covers d'albums, singles et visuels musicaux professionnels grâce à l'intelligence artificielle."
        layout="left"
        backgroundImage="/images/muzipics-hero.webp"
        actions={
          <>
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/signup'}>
              Créer un compte gratuit
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/generator'}>
              Découvrir le générateur
            </Button>
          </>
        }
      />

      {/* Content Split - Présentation */}
      <section className="section--xl">
        <div className="container">
          <Marketing.ContentSplit
            title="Crée des visuels pro en quelques secondes"
            subtitle="Tu veux une cover qui claque, sans passer des jours en graphisme ? MUZIPICS combine des modèles IA entraînés pour les univers musicaux afin de produire des visuels cohérents, stylés et prêts à publier."
            features={[
              "🎨 Styles calibrés musique",
              "📐 Formats optimisés",
              "⚡ Flux rapide"
            ]}
            actions={
              <Button variant="solid" size="md" onClick={() => window.location.href = '/features'}>
                Découvrir le programme
              </Button>
            }
            image={
              <div className="gallery-placeholder">
                Generator Mockup
              </div>
            }
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Les fonctionnalités qui font la différence"
            subtitle="Pensé pour les artistes, MUZIPICS réunit l'IA et un workflow ultra-simple : préréglages de styles calibrés pour les univers musicaux, guidage de prompt pour viser juste, variantes + upscaler HD pour affiner, et des exports prêts pour Spotify, Apple Music, YouTube et bien d'autres..."
            align="center"
          />
          <Marketing.FeatureGrid columns={3}>
            <Marketing.FeatureGridItem
              icon="🎨"
              title="Préréglages de styles"
              description="Des presets entraînés pour des ambiances artistiques cohérentes (cinématique, vintage, brutalist, néon, minimal, réaliste)."
            />
            <Marketing.FeatureGridItem
              icon="🧠"
              title="Guidage intelligent"
              description="Aide à structurer ton prompt (mood, couleur, cadre, texture, typographie optionnelle)."
            />
            <Marketing.FeatureGridItem
              icon="📱"
              title="Exports prêts plateformes"
              description="Exports carrés 3000×3000 (Spotify/Apple), miniatures YouTube, stories/feeds, + fond perdu pour print."
            />
          </Marketing.FeatureGrid>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Des formules pensées pour tous les artistes"
            subtitle="Commence gratuitement. Passe en Pro si tu veux plus de crédits, d'exports HD et les droits commerciaux complets."
            align="center"
          />
          <Saas.PlanPicker
            columns={3}
            billing={billing}
            onBillingChange={setBilling}
            onSelectPlan={(planId) => window.location.href = '/signup'}
            plans={[
              {
                id: "free",
                name: "Free",
                price: {
                  monthly: 0,
                  yearly: 0
                },
                features: [
                  "10 crédits / mois",
                  "Résolution standard 1024px",
                  "Tous les préréglages de styles",
                  "Exports PNG/JPG",
                  "Usage personnel uniquement"
                ],
                cta: "Créer un compte"
              },
              {
                id: "pro",
                name: "Pro",
                price: {
                  monthly: 19,
                  yearly: 182
                },
                popular: true,
                features: [
                  "200 crédits / mois",
                  "Upscale HD 3000×3000",
                  "Tous les préréglages + variantes",
                  "Exports optimisés plateformes",
                  "Droits commerciaux complets",
                  "Support prioritaire"
                ],
                cta: "Commencer à créer"
              },
              {
                id: "studio",
                name: "Studio",
                price: {
                  monthly: 49,
                  yearly: 470
                },
                features: [
                  "Crédits illimités",
                  "Upscale HD + Ultra HD 4K",
                  "Accès anticipé nouvelles features",
                  "API access",
                  "Exports batch",
                  "Support dédié",
                  "Licence commerciale étendue"
                ],
                cta: "Démarrer la formation"
              }
            ]}
          />
        </div>
      </section>

      {/* Gallery/Examples Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Exemples de covers générées avec MUZIPICS"
            subtitle="Tous ces visuels ont été réalisés depuis les préréglages internes. Clique pour voir les prompts."
            align="center"
          />
          <div className="grid-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <div className="gallery-placeholder">
                  Cover {i}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Par les artistes, pour les artistes."
            subtitle="Ils ont testés l'écosystème AVNIR-Studio, découvres ce qu'ils en pensent."
            align="center"
          />
          <Marketing.Testimonials
            variant="carousel"
            items={[
              {
                quote: "MUZIPICS m'a permis de créer des visuels pro pour tous mes singles sans exploser mon budget. Les presets sont vraiment calibrés pour la musique.",
                author: "Naya",
                role: "Chanteuse"
              },
              {
                quote: "En tant que producteur, j'ai besoin de visuels rapidement. MUZIPICS me fait gagner un temps fou et le rendu est toujours au niveau.",
                author: "Nico",
                role: "Producteur"
              }
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Faq
            title="Questions fréquentes"
            subtitle="Voici les réponses aux questions les plus courantes. Et si tu veux en savoir plus, contacte-nous directement, l'équipe répond à tous les messages."
            items={[
              {
                q: "Comment fonctionnent les crédits ?",
                a: "Un crédit = 1 génération standard. Les upscales et certaines variantes consomment 1 crédit additionnel."
              },
              {
                q: "Puis-je utiliser les visuels commercialement ?",
                a: "En plan Pro/Annuel, oui. Tu peux utiliser les visuels pour tes sorties, merchandising et réseaux (hors logos de marques, personnalités, etc.)."
              },
              {
                q: "Puis-je uploader une image de référence ?",
                a: "Oui, pour guider le style/cadrage. Utilise la case \"Référence\" dans le générateur."
              },
              {
                q: "Quelles résolutions sont disponibles ?",
                a: "Standard 1024 pour itérer vite. Upscale HD 3000×3000 pour les plateformes. Exports prêts (PNG/JPG), fond perdu pour print."
              },
              {
                q: "Comment vous contacter ?",
                a: "Contacte-nous pour en savoir d'avantage via notre page Contact."
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
    </>
  );
}
