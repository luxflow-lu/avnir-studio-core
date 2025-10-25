import { Layout, Marketing } from "@avnir/ui";

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
      />
      
      <Marketing.Hero
        title="MUZITOOLS"
        subtitle="La suite d'outils professionnels pour la production musicale. Analysez, créez et perfectionnez vos productions avec nos outils spécialisés."
        layout="center"
        actions={
          <div className="hero-actions">
            <a href="/analyzer" className="btn btn-primary btn--lg">
              Commencer l'analyse
            </a>
            <a href="/about" className="btn btn-secondary btn--lg">
              En savoir plus
            </a>
          </div>
        }
      />

      <Marketing.Features
        title="Nos Outils"
        subtitle="Découvrez notre collection d'outils professionnels pour la production musicale"
        columns={3}
        items={[
          {
            icon: "🎵",
            title: "Key & BPM Analyzer",
            description: "Analysez instantanément le BPM, la tonalité et le code Camelot de vos tracks pour des mixages parfaits"
          },
          {
            icon: "🤖",
            title: "Audio Enhancer",
            description: "Améliorez la qualité audio de vos productions avec l'IA avancée (Bientôt disponible)"
          },
          {
            icon: "🎛️",
            title: "Stem Separator", 
            description: "Séparez les instruments d'une piste audio complète en quelques secondes (Bientôt disponible)"
          }
        ]}
      />

      <Marketing.Stats
        title="Faites confiance à MUZITOOLS"
        items={[
          { label: "Fichiers analysés", value: "10K+" },
          { label: "Producteurs actifs", value: "500+" },
          { label: "Précision", value: "99%" },
          { label: "Temps d'analyse", value: "<3s" }
        ]}
      />

      <Marketing.CtaSection
        title="Prêt à analyser vos productions ?"
        subtitle="Rejoignez des centaines de producteurs qui utilisent déjà MUZITOOLS pour perfectionner leurs mixages"
        actions={
          <div className="cta-actions">
            <a href="/analyzer" className="btn btn-primary btn--lg">
              Commencer maintenant
            </a>
            <a href="/demo" className="btn btn-secondary btn--lg">
              Voir la démo
            </a>
          </div>
        }
      />

      <Layout.Footer 
        sections={[
          {
            title: "MUZITOOLS",
            links: [
              { label: "Accueil", href: "/" },
              { label: "Outils", href: "/analyzer" },
              { label: "À propos", href: "/about" }
            ]
          },
          {
            title: "Outils",
            links: [
              { label: "Key & BPM Analyzer", href: "/analyzer" },
              { label: "Audio Enhancer", href: "#" },
              { label: "Stem Separator", href: "#" }
            ]
          },
          {
            title: "Support",
            links: [
              { label: "Documentation", href: "#" },
              { label: "Contact", href: "#" },
              { label: "FAQ", href: "#" }
            ]
          },
          {
            title: "Légal",
            links: [
              { label: "Conditions d'utilisation", href: "#" },
              { label: "Politique de confidentialité", href: "#" }
            ]
          }
        ]}
      />
    </>
  );
}
