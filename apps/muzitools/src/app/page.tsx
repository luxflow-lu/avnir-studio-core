"use client";
import React from "react";
import { Button, Card, CardContent, CardTitle, CardDescription, CardFooter, Layout, Marketing } from "@avnir/ui";

export default function Page() {

  return (
    <main>
      {/* Hero Section */}
      <section id="accueil">
        <Marketing.Hero
          title="Ta boîte à outils audio gratuite"
          subtitle="Analyse, traite et optimise tes fichiers audio directement dans ton navigateur. 100% gratuit, 100% local, zéro tracking. Les outils essentiels pour producteurs, DJs et artistes."
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

      {/* Content Split - Value Proposition */}
      <section className="section--xl">
        <div className="container">
          <Marketing.ContentSplit
            title="Des outils puissants, sans compromis sur ta vie privée"
            subtitle="Fini les uploads sur des serveurs inconnus. MUZITOOLS traite tes fichiers 100% localement dans ton navigateur. Tes créations restent chez toi, point final. Analyse BPM et tonalité, sépare les stems, normalise le volume... tout ça sans jamais quitter ton navigateur."
            features={[
              "🔒 Traitement 100% local",
              "⚡ Résultats instantanés",
              "🎯 Précision professionnelle"
            ]}
            actions={
              <Button variant="solid" size="md" onClick={() => window.location.href = '/tools/key-bpm-finder'}>
                Commencer maintenant
              </Button>
            }
            image={
              <div className="gallery-placeholder">
                Tool Interface Preview
              </div>
            }
            reverse
          />
        </div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ta boîte à outils complète"
            subtitle="De l'analyse à l'optimisation, tous les outils dont tu as besoin pour ta production musicale. Gratuits, rapides, et respectueux de ta vie privée."
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
            title="Pourquoi les artistes choisissent MUZITOOLS"
            subtitle="Pas de bullshit, pas de tracking, pas d'abonnement. Juste des outils qui font le job, point."
            align="center"
          />
          <Marketing.FeatureGrid columns={3}>
            <Marketing.FeatureGridItem
              icon="🆓"
              title="100% Gratuit, pour toujours"
              description="Tous les outils, toutes les fonctionnalités, sans limite. Pas de piège, pas de paywall caché. On croit que les outils essentiels doivent être accessibles à tous."
            />
            <Marketing.FeatureGridItem
              icon="🔒"
              title="Vie privée respectée"
              description="Tes fichiers restent sur ton appareil. Zéro upload, zéro serveur, zéro tracking. Le traitement se fait 100% localement dans ton navigateur. Tes créations t'appartiennent."
            />
            <Marketing.FeatureGridItem
              icon="⚡"
              title="Rapidité professionnelle"
              description="Analyse BPM en <3s, détection de tonalité instantanée, précision de 99%. Pas de file d'attente, pas de loading. Tu cliques, ça marche."
            />
            <Marketing.FeatureGridItem
              icon="💻"
              title="Aucune installation"
              description="Tout fonctionne directement dans ton navigateur. Pas d'app à télécharger, pas de plugin à installer. Compatible Windows, Mac, Linux."
            />
            <Marketing.FeatureGridItem
              icon="🎯"
              title="Précision studio"
              description="Algorithmes calibrés pour tous les genres musicaux. De la trap au techno, du jazz au metal. Résultats fiables pour tes sessions de production et DJ sets."
            />
            <Marketing.FeatureGridItem
              icon="🔄"
              title="Mises à jour continues"
              description="Nouveaux outils ajoutés régulièrement. Stems separator, vocal remover, audio normalizer... La roadmap est chargée."
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

      {/* Testimonials */}
      <section className="section--xl">
        <div className="container">
          <Layout.SectionHeader
            title="Ce que disent les artistes"
            subtitle="Retours de producteurs, DJs et beatmakers qui utilisent MUZITOOLS au quotidien"
            align="center"
          />
          <Marketing.Testimonials
            variant="carousel"
            items={[
              {
                quote: "Enfin un outil BPM qui respecte ma vie privée. Plus besoin d'uploader mes tracks sur des sites chelous. Ça marche direct dans le navigateur, c'est rapide et précis.",
                author: "DJ Nexus",
                role: "DJ & Producteur",
                avatarSrc: "/avatars/dj-nexus.jpg"
              },
              {
                quote: "J'utilise le Key Finder avant chaque session de mixage. La détection du code Camelot est ultra précise, ça me fait gagner un temps fou pour préparer mes sets.",
                author: "Sarah K.",
                role: "DJ Techno",
                avatarSrc: "/avatars/sarah-k.jpg"
              },
              {
                quote: "100% gratuit, aucune inscription, ça marche instantanément. C'est exactement ce dont j'avais besoin pour mon workflow de production. Merci MUZITOOLS !",
                author: "Beatmaker Pro",
                role: "Producteur Hip-Hop",
                avatarSrc: "/avatars/beatmaker-pro.jpg"
              }
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
                q: "Est-ce vraiment 100% gratuit ?",
                a: "Oui, absolument. Tous les outils MUZITOOLS sont gratuits, sans limite d'utilisation, sans compte requis, sans abonnement caché. On croit que les outils essentiels pour créateurs doivent être accessibles à tous, point."
              },
              {
                q: "Comment ça marche si mes fichiers ne sont pas uploadés ?",
                a: "MUZITOOLS utilise la puissance de ton navigateur pour traiter tes fichiers localement. Quand tu importes un fichier audio, il est analysé directement sur ton appareil grâce à des algorithmes JavaScript. Aucune donnée ne quitte ton ordinateur."
              },
              {
                q: "Quels outils sont disponibles actuellement ?",
                a: "Le Key & BPM Finder est actuellement disponible et 100% fonctionnel. D'autres outils arrivent bientôt : Stems Separator (séparation voix/instruments), Vocal Remover, Audio Normalizer, Format Converter et Audio Trimmer. La roadmap est chargée !"
              },
              {
                q: "Dois-je créer un compte pour utiliser les outils ?",
                a: "Non, aucun compte n'est nécessaire. Tous les outils sont accessibles directement, sans inscription, sans email, sans rien. Tu arrives, tu utilises, c'est tout."
              },
              {
                q: "Puis-je utiliser MUZITOOLS pour mes projets commerciaux ?",
                a: "Oui, absolument. MUZITOOLS est un outil d'analyse et de traitement, pas un service de création de contenu. Tu peux utiliser les résultats pour n'importe quel projet, commercial ou non."
              },
              {
                q: "Ça fonctionne sur mobile ?",
                a: "Oui, MUZITOOLS fonctionne sur tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) sur desktop et mobile. L'interface est responsive et optimisée pour tous les écrans."
              },
              {
                q: "Comment puis-je soutenir le projet ?",
                a: "MUZITOOLS fait partie de l'écosystème AVNIR Studio. Si tu veux nous soutenir, check nos autres services : MUZIDEV (formation en ligne pour artistes) et MUZIPICS (générateur de visuels IA). Partager MUZITOOLS avec d'autres artistes nous aide aussi énormément !"
              },
              {
                q: "Puis-je suggérer un nouvel outil ?",
                a: "Bien sûr ! On est toujours à l'écoute des besoins de la communauté. Contacte-nous via la page contact avec tes suggestions d'outils. Si c'est pertinent et techniquement faisable, on l'ajoutera à la roadmap."
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
