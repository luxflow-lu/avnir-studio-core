"use client";
import React from "react";
import { Badge, Button, Card, CardContent, CardTitle, CardDescription, CardFooter, CardImage, Layout, Marketing, Saas } from "@avnir/ui";

export default function Page() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <main>
      {/* Hero Section */}
      <section id="accueil">
      <Marketing.Hero
        title="La formation en ligne des artistes et producteurs"
        subtitle="La formation la plus complète d'internet pour les artistes et producteurs indépendants. Apprends à maîtriser chaque étape de ta carrière musicale, de la création à la réussite."
        layout="left"
        backgroundImage="/images/hero-muzidev-bg.jpg"
        actions={
          <>
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/#tarifs'}>Commencer gratuitement</Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/#formation'}>Découvrir la formation</Button>
          </>
        }
      />
      </section>

      {/* Program Highlight avec ContentSplit - Formation Section */}
      <section id="formation" className="section--xl">
        <div className="container">
          <Marketing.ContentSplit
            title="La formation la plus complète d'internet"
            subtitle="Découvrez la première formation en ligne conçue pour vous accompagner dans toutes les étapes de votre carrière musicale. Que vous soyez rappeur, beatmaker, chanteur ou producteur, cette formation vous accompagne de la création à la vente de vos projets musicaux."
            features={[
              "📚 +100 chapitres de contenu",
              "♾️ Mises à jour infinies",
              "🎯 Cas pratiques concrets"
            ]}
            actions={
              <Button variant="solid" size="lg" onClick={() => window.location.href = '/#tarifs'}>Voir les tarifs</Button>
            }
            image={
              <img src="/images/formation-preview.jpg" alt="Formation MUZIDEV" />
            }
            reverse
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Stats
            columns={3}
            items={[
              { value: "+100", label: "Chapitres", sublabel: "Contenus complets" },
              { value: "Infinies", label: "Mises à jour", sublabel: "Toujours à jour" },
              { value: "+10 ans", label: "Expérience terrain", sublabel: "Cas concrets" }
            ]}
          />
        </div>
      </section>

      {/* Les 4 piliers de la formation */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Les 4 piliers essentiels pour bâtir une carrière solide"
            subtitle="Une formation complète qui couvre tous les aspects de la carrière d'artiste indépendant"
            align="center"
          />
          <div className="grid-2">
            <Card>
              <CardImage src="/images/production.jpg" alt="Production musicale" />
              <CardContent>
                <CardTitle>Production</CardTitle>
                <CardDescription>
                  Maîtrise les outils de création musicale, de la composition au mastering. Apprends à produire des morceaux professionnels avec les techniques des pros.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="md" onClick={() => window.location.href = '/formation#production'}>
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardImage src="/images/developpement.jpg" alt="Développement artistique" />
              <CardContent>
                <CardTitle>Développement</CardTitle>
                <CardDescription>
                  Construis ton identité artistique et développe ta présence en ligne. Stratégies pour créer une communauté engagée autour de ta musique.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="md" onClick={() => window.location.href = '/formation#developpement'}>
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardImage src="/images/marketing.jpg" alt="Marketing musical" />
              <CardContent>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Apprends à promouvoir ta musique efficacement. Réseaux sociaux, campagnes publicitaires, relations presse et stratégies de lancement.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="md" onClick={() => window.location.href = '/formation#marketing'}>
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardImage src="/images/business.jpg" alt="Business musical" />
              <CardContent>
                <CardTitle>Business</CardTitle>
                <CardDescription>
                  Comprends les aspects juridiques et financiers de la musique. Contrats, droits d'auteur, monétisation et gestion de carrière.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="md" onClick={() => window.location.href = '/formation#business'}>
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Et si c'était toi ? */}
      <section className="section--xl">
        <div className="container">
          <Marketing.ContentSplit
            title="Et si c'était toi ?"
            subtitle="Tu fais de la musique depuis un moment, mais tu sens qu'il te manque une vraie méthode ? MUZIDEV t'aide à structurer ta carrière, à professionnaliser ton image et à avancer plus vite. Pas de théorie inutile, que du concret, étape par étape."
            actions={
              <Button variant="solid" size="lg" onClick={() => window.location.href = '/signup'}>Démarrer la formation</Button>
            }
            image={
              <img src="/images/artist-studio.jpg" alt="Artiste en studio" />
            }
          />
        </div>
      </section>

      {/* Topics Cloud */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Des dizaines de thèmes, pour maîtriser chaque facette du métier"
            subtitle="Chaque module aborde un aspect concret… Découvre tout ce que tu vas apprendre :"
            align="center"
          />
          <div className="tag-cloud">
            {[
              "Réseaux Sociaux", "Médias", "Diffusions", "Dossier de presse", 
              "Distribution", "Live / Booking", "Merchandising", "Endorsement", 
              "Crowdfunding", "Prestations", "Théorie musicale", "Composition",
              "Mixage", "Mastering", "Branding", "Spotify for Artists",
              "TikTok Marketing", "YouTube", "Collaborations", "Sync Licensing",
              "Contrats", "Droits d'auteur", "SACEM", "Publishing"
            ].map((topic, i) => (
              <Badge key={i} variant="secondary" size="lg">{topic}</Badge>
            ))}
          </div>
          <div className="section-actions">
            <Button variant="solid" size="lg" onClick={() => window.location.href = '/#tarifs'}>Commencer maintenant</Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Des formules pensées pour tous les artistes"
            subtitle="Choisis ton rythme. Que tu débutes ou que tu sois déjà lancé, MUZIDEV s'adapte à toi. Tu peux commencer gratuitement et évoluer à ton rythme, sans engagement ni contrainte"
            align="center"
          />
          <Saas.PlanPicker
            columns={2}
            billing={billing}
            onBillingChange={setBilling}
            onSelectPlan={(planId) => window.location.href = '/signup'}
            plans={[
              {
                id: "starter",
                name: "Starter",
                price: {
                  monthly: 0,
                  yearly: 0
                },
                features: [
                  "Leçons gratuites uniquement",
                  "Accès limité aux outils et ressources",
                  "Notifications sur les mises à jour"
                ],
                cta: "Créer un compte"
              },
              {
                id: "pro",
                name: "Pro",
                price: {
                  monthly: 39,
                  yearly: 374
                },
                popular: true,
                features: [
                  "Accès complet à la formation",
                  "Accès complet aux outils et ressources",
                  "Notifications sur les mises à jour",
                  "Accès aux futures mises à jour sans frais supplémentaires",
                  "Accès prioritaire aux événements, masterclass et bonus exclusifs"
                ],
                cta: "Démarrer la formation"
              }
            ]}
          />
          <div className="section-actions">
            <p className="text-muted">Moins de 1,30 € / jour pour investir dans ta carrière</p>
            <Button variant="solid" size="md" onClick={() => window.location.href = '/signup'}>C'est parti !</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section--xl">
        <div className="container">
          <Marketing.Testimonials
            title="Ce qu'en disent nos étudiants"
            variant="carousel"
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
      <section id="faq" className="section--xl">
        <div className="container">
          <Marketing.Faq
            title="Questions fréquentes"
            items={[
              {
                q: "La formation est adaptée aux débutants ?",
                a: "Oui, absolument ! La formation part des bases et progresse étape par étape. Que tu sois débutant ou que tu aies déjà de l'expérience, tu trouveras des modules adaptés à ton niveau."
              },
              {
                q: "Combien de temps ai-je accès à la formation ?",
                a: "Avec le plan Pro, tu as un accès illimité à l'ensemble de la formation tant que ton abonnement est actif. Si tu annules, tu conserves l'accès au plan gratuit. En reprenant un plan Pro, tu retrouves immédiatement l'accès complet à tous les contenus."
              },
              {
                q: "Puis-je annuler mon abonnement à tout moment ?",
                a: "Oui, tu peux annuler ton abonnement à tout moment en un clic depuis ton compte. Aucun engagement, aucune question posée. Tu conserveras l'accès aux leçons gratuites même après l'annulation."
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
          <div className="section-actions">
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>D'autres questions ? Contacte-nous</Button>
          </div>
        </div>
      </section>

      {/* AVNIR Studio CTA */}
      <Marketing.AvnirStudioCta />
    </main>
  );
}
