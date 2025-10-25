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

      <Marketing.Features
        title="Outils Professionnels"
        subtitle="Tout ce dont vous avez besoin pour analyser et perfectionner vos productions musicales"
        columns={3}
        items={[
          {
            icon: "🎵",
            title: "Détection BPM",
            description: "Analyse précise du tempo de vos tracks avec une précision de 99%. Compatible MP3, WAV, M4A."
          },
          {
            icon: "🎹",
            title: "Détection de Tonalité",
            description: "Identifiez la tonalité musicale (Do, Ré, Mi...) et le mode (majeur/mineur) pour des mixages harmoniques."
          },
          {
            icon: "🎨",
            title: "Code Camelot",
            description: "Obtenez le code Camelot (1A-12B) pour mixer facilement des tracks compatibles harmoniquement."
          },
          {
            icon: "⚡",
            title: "Analyse Instantanée",
            description: "Résultats en moins de 3 secondes. Traitement 100% local, vos fichiers ne quittent jamais votre appareil."
          },
          {
            icon: "🔒",
            title: "Confidentialité Totale",
            description: "Aucune donnée envoyée sur internet. Aucun tracking, aucun cookie, aucune collecte de données personnelles."
          },
          {
            icon: "💯",
            title: "100% Gratuit",
            description: "Aucun compte requis, aucune limite d'utilisation. Analysez autant de fichiers que vous voulez, gratuitement."
          }
        ]}
      />

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

      <Layout.Footer 
        logo={<span>MUZI<span style={{color: 'var(--primary)'}}>TOOLS</span></span>}
        newsletterTitle="Restez informé des nouvelles fonctionnalités et mises à jour."
        newsletterPlaceholder="Votre email"
        newsletterButtonText="S'abonner"
        newsletterDisclaimer={
          <>
            En vous abonnant, vous acceptez notre{" "}
            <a href="/privacy">Politique de confidentialité</a>.
          </>
        }
        onNewsletterSubmit={(email) => {
          // TODO: Implement newsletter API
          void email;
        }}
        columns={[
          {
            title: "MUZITOOLS",
            links: [
              { label: "Accueil", href: "/" },
              { label: "Analyzer", href: "/analyzer" },
              { label: "À propos", href: "/about" }
            ]
          },
          {
            title: "Fonctionnalités",
            links: [
              { label: "Détection BPM", href: "/analyzer" },
              { label: "Détection Tonalité", href: "/analyzer" },
              { label: "Code Camelot", href: "/analyzer" }
            ]
          },
          {
            title: "Ressources",
            links: [
              { label: "Guide d'utilisation", href: "/about" },
              { label: "FAQ", href: "/#faq" },
              { label: "Formats supportés", href: "/about" },
              { label: "Confidentialité", href: "#" },
              { label: "Conditions", href: "#" }
            ]
          }
        ]}
        copyright="© 2025 MUZITOOLS - Fait avec ❤️ par AVNIR Studio"
      />
    </>
  );
}
