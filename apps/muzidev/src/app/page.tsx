"use client";
import React from "react";
import { Layout, Marketing, Saas, Form } from "@avnir/ui";
import { BrandLogo } from "@avnir/brandkit";

export default function Page() {
  return (
    <>
      {/* Navigation */}
      <Layout.Navbar
        logo={<BrandLogo variant="full" size="md" />}
        links={[
          { label: "Accueil", href: "/" },
          { label: "Formation", href: "/formation" },
          { label: "Tarifs", href: "/pricing" },
          { label: "FAQ", href: "/faq" },
          { label: "Se connecter", href: "/login" },
        ]}
        actions={
          <a href="/signup" className="btn btn-primary btn--md">
            S'inscrire
          </a>
        }
      />

      <main>
        {/* Hero Section */}
        <Marketing.Hero
          title="La formation en ligne des artistes et producteurs"
          subtitle="La formation la plus complète d'internet pour les artistes et producteurs indépendants. Apprends à maîtriser chaque étape de ta carrière musicale, de la création à la réussite."
          actions={
            <div className="hero-actions">
              <a href="/signup" className="btn btn-primary btn--lg">
                Créer un compte gratuit
              </a>
              <a href="/formation" className="btn btn-secondary btn--lg">
                Découvrir la formation
              </a>
            </div>
          }
        />

        {/* Program Highlight */}
        <section className="content-section">
          <div className="container">
            <div className="content-grid">
              <div className="content-text">
                <h2 className="content-title">
                  La formation la plus complète d'internet
                </h2>
                <p className="content-description">
                  Des modules concrets, mis à jour régulièrement, issus de l'expérience terrain. 
                  Avance pas-à-pas et transforme ta passion en carrière musicale professionnelle.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="badge badge--primary">
                    +100 chapitres
                  </span>
                  <span className="badge badge--primary">
                    Mises à jour régulières
                  </span>
                  <span className="badge badge--primary">
                    Contenus issus de l'expérience réelle
                  </span>
                </div>
                <a href="/formation" className="btn btn-primary btn--md">
                  Découvrir le programme
                </a>
              </div>
              <div className="content-image">
                <img src="/images/program-illustration.png" alt="Programme MUZIDEV" width="500" height="350" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="section">
          <div className="container">
            <Marketing.FeatureGrid
            title="Les 4 piliers de la formation"
            subtitle="Maîtrise tous les aspects de ta carrière musicale"
            features={[
              {
                title: "Production",
                description: "MAO, DAW, mixage, mastering, workflow de production professionnelle"
              },
              {
                title: "Développement",
                description: "Industrie musicale, labels, droits d'auteur, distribution et diffusion"
              },
              {
                title: "Marketing",
                description: "Réseaux sociaux, branding artistique, publicité et promotion"
              },
              {
                title: "D2C / B2B",
                description: "Vente directe, merchandising, booking, licensing et partenariats"
              }
            ]}
            columns={4}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container">
            <Marketing.CtaSection
            title="Et si c'était toi ?"
            subtitle="Rejoins des centaines d'artistes qui ont transformé leur passion en carrière professionnelle. Passe à l'action et structure ta carrière musicale avec MUZIDEV."
            actions={
              <a href="/signup" className="btn btn-primary btn--lg">
                Démarrer la formation
              </a>
            }
            image={<img src="/images/cta-artist.png" alt="Artiste professionnel" width="400" height="300" />}
            />
          </div>
        </section>

        {/* Topics Cloud */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Des dizaines de thèmes, pour maîtriser chaque facette du métier
              </h2>
              <p className="section-subtitle">
                Chaque module aborde un aspect concret… Découvre tout ce que tu vas apprendre :
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {[
                "Réseaux Sociaux", "Médias", "Diffusions", "Dossier de presse", "Distribution",
                "Live / Booking", "Merchandising", "Endorsement", "Crowdfunding", "Prestations",
                "Théorie musicale", "Composition"
              ].map((topic, i) => (
                <span key={i} className="badge badge--secondary">
                  {topic}
                </span>
              ))}
            </div>
            <div className="text-center">
              <a href="/formation" className="btn btn-secondary btn--md">
                Voir le programme complet
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Tarifs</h2>
              <p className="section-subtitle">Choisis le plan qui te correspond</p>
            </div>
          <Saas.PricingTable
            plans={[
              {
                id: "starter",
                name: "Starter",
                price: "Gratuit",
                period: "",
                features: [
                  "Leçons gratuites uniquement",
                  "Accès limité aux outils et ressources",
                  "Notifications sur les mises à jour"
                ],
                cta: { label: "Créer un compte", href: "/signup" }
              },
              {
                id: "pro",
                name: "Pro",
                price: "39€",
                period: "par mois",
                popular: true,
                features: [
                  "Accès complet à la formation",
                  "Accès complet aux outils et ressources",
                  "Notifications sur les mises à jour",
                  "Accès aux futures mises à jour sans frais supplémentaires",
                  "Accès prioritaire aux événements, masterclass et bonus exclusifs"
                ],
                cta: { label: "Démarrer la formation", href: "/signup" }
              }
            ]}
          />
            <div className="text-center mt-8">
              <p className="text-muted text-sm mb-4">
                Moins de 1,30 € / jour pour investir dans ta carrière
              </p>
              <a href="/signup" className="btn btn-primary btn--md">
                C'est parti !
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <Marketing.Testimonials
              title="Ce qu'en disent nos étudiants"
              items={[
                {
                  quote: "MUZIDEV m'a aidé à structurer ma carrière et à comprendre tous les aspects du métier. Les modules sont concrets et directement applicables.",
                  author: "Léo R.",
                  role: "Beatmaker indépendant"
                },
                {
                  quote: "Une vraie révélation ! J'ai enfin compris comment monétiser ma musique et développer mon audience. La formation est complète et bien structurée.",
                  author: "Sara M.",
                  role: "Chanteuse et autrice-compositrice"
                }
              ]}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <Marketing.Faq
            title="Questions fréquentes"
            items={[
              {
                q: "La formation est adaptée aux débutants ?",
                a: "Oui, absolument ! La formation part des bases et progresse étape par étape. Que tu sois débutant ou que tu aies déjà de l'expérience, tu trouveras des modules adaptés à ton niveau."
              },
              {
                q: "Que vais-je savoir faire à la fin de la formation ?",
                a: "Tu maîtriseras l'ensemble de la chaîne : composer, produire, enregistrer, mixer, publier ta musique et développer ta carrière d'artiste indépendant."
              },
              {
                q: "Combien de temps dure la formation ?",
                a: "Tu avances à ton rythme ! Les modules sont courts et actionnables. Certains étudiants terminent en quelques mois, d'autres prennent plus de temps selon leur disponibilité."
              },
              {
                q: "J'ai besoin de matériel spécifique ou de logiciels payants ?",
                a: "Non, ce n'est pas obligatoire pour commencer. Nous proposons des alternatives gratuites pour chaque outil et expliquons comment débuter avec un budget minimal."
              }
            ]}
            />
            <div className="text-center mt-8">
              <a href="/contact" className="btn btn-secondary btn--md">
                D'autres questions ? Contacte-nous
              </a>
            </div>
          </div>
        </section>

        {/* AVNIR Studio CTA */}
        <section className="section">
          <div className="container">
            <Layout.SectionHeader
              title="L'application des artistes 2.0"
              subtitle="Découvre AVNIR-Studio, notre écosystème d'outils et services pour accélérer ta croissance artistique et professionnelle."
              align="center"
            />
            <Marketing.LogoCloud
            logos={[
              { src: "/logos/jacques.svg", alt: "Jacques" },
              { src: "/logos/avnir-studio.svg", alt: "AVNIR-Studio" },
              { src: "/logos/muzidev.svg", alt: "MUZIDEV" }
            ]}
            />
            <div className="text-center mt-8">
              <a href="https://avnir.studio" className="btn btn-primary btn--md">
                Découvrir AVNIR-Studio
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section">
          <div className="container">
            <Marketing.Newsletter
              title="Rejoins la newsletter pour suivre les nouveautés"
              subtitle="Reçois en avant-première les nouveaux modules, les événements exclusifs et les conseils d'experts. En t'inscrivant, tu acceptes notre politique de confidentialité."
              onSubmit={(email) => {
                // TODO: Implement newsletter signup
                void email; // Placeholder until API is implemented
              }}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Layout.Footer>
        <Layout.Footer.Bottom>
          <p>&copy; 2024 MUZIDEV. Tous droits réservés.</p>
        </Layout.Footer.Bottom>
      </Layout.Footer>
    </>
  );
}
