"use client";

import { Layout, Marketing, Button } from "@avnir/ui";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Layout.Navbar
        logo={<span className="navbar-logo">MUZITOOLS</span>}
        links={[
          { label: "Accueil", href: "/" },
          { label: "Outils", href: "/analyzer" },
          { label: "À propos", href: "/about" }
        ]}
        actions={
          <Link href="/analyzer">
            <Button variant="solid" size="sm">Essayer gratuitement</Button>
          </Link>
        }
      />
      
      <Marketing.Hero
        eyebrow="Outils professionnels pour producteurs"
        title="Analysez vos productions en quelques secondes"
        subtitle="MUZITOOLS vous aide à identifier le BPM, la tonalité et le code Camelot de vos tracks pour des mixages harmoniques parfaits. 100% gratuit, 100% local, 0% tracking."
        layout="center"
        actions={
          <div className="hero-actions">
            <Link href="/analyzer">
              <Button variant="solid" size="lg">Commencer l'analyse</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">En savoir plus</Button>
            </Link>
          </div>
        }
      />

      {/* TODO: Implement FeatureGrid with composition pattern */}

      {/* Section Comment ça marche */}
      <Marketing.Steps
        title="Comment ça marche ?"
        subtitle="Analysez vos productions en 3 étapes simples"
        items={[
          {
            title: "1. Importez votre fichier",
            description: "Glissez-déposez votre fichier audio (MP3, WAV, M4A) ou cliquez pour sélectionner. Taille max: 50MB."
          },
          {
            title: "2. Analyse automatique",
            description: "Notre algorithme analyse le BPM, la tonalité et calcule le code Camelot en quelques secondes."
          },
          {
            title: "3. Utilisez les résultats",
            description: "Copiez les informations pour vos playlists, DJ sets ou sessions de production musicale."
          }
        ]}
      />

      <Marketing.Stats
        title="MUZITOOLS en chiffres"
        items={[
          { label: "Précision BPM", value: "99%" },
          { label: "Temps d'analyse", value: "<3s" },
          { label: "Formats supportés", value: "3" },
          { label: "Taille max fichier", value: "50MB" }
        ]}
      />

      {/* Section FAQ */}
      <Marketing.Faq
        id="faq"
        title="Questions fréquentes"
        subtitle="Tout ce que vous devez savoir sur MUZITOOLS"
        items={[
          {
            q: "Quels formats audio sont supportés ?",
            a: "MUZITOOLS supporte les formats MP3, WAV et M4A. La taille maximale par fichier est de 50MB."
          },
          {
            q: "Mes fichiers sont-ils envoyés sur un serveur ?",
            a: "Non, absolument pas. L'analyse est effectuée 100% localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil."
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

      <Marketing.CtaSection
        title="Prêt à analyser vos productions ?"
        subtitle="Commencez dès maintenant, aucun compte requis"
        actions={
          <div className="cta-actions">
            <Link href="/analyzer">
              <Button variant="solid" size="lg">Commencer l'analyse</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">En savoir plus</Button>
            </Link>
          </div>
        }
      />

      <Layout.Footer>
        <Layout.Footer.Bottom>
          <p>© 2025 MUZITOOLS - Fait avec ❤️ par AVNIR Studio</p>
        </Layout.Footer.Bottom>
      </Layout.Footer>
    </>
  );
}
