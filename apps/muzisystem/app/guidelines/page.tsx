import { Card, Layout } from "@avnir/ui";

export default function GuidelinesPage() {
  return (
    <>
      <Layout.PageHeader
        title="Guidelines"
        subtitle="Règles et bonnes pratiques pour utiliser le design system"
      />

      <section className="section">
        <div className="container">
          
          <Layout.SectionHeader 
            title="Architecture"
            subtitle="Règles strictes d'architecture AVNIR"
            align="left"
          />
          <div className="grid-2">
            <Card>
              <h3>✅ À faire</h3>
              <ul>
                <li>Utiliser les classes CSS du design system</li>
                <li>Utiliser var(--token) pour les valeurs</li>
                <li>Composants dans @avnir/ui uniquement</li>
              </ul>
            </Card>
            <Card>
              <h3>❌ À éviter</h3>
              <ul>
                <li>Classes Tailwind dans composants</li>
                <li>Couleurs hardcodées</li>
                <li>Styles inline</li>
                <li>Composants locaux dans apps</li>
              </ul>
            </Card>
          </div>

          <Layout.SectionHeader 
            title="Accessibilité"
            subtitle="Standards WCAG 2.1 AA"
            align="left"
          />
          <Card>
            <p>Contraste minimum 4.5:1 pour le texte</p>
            <p>Navigation au clavier obligatoire</p>
            <p>ARIA labels pour les éléments interactifs</p>
          </Card>

        </div>
      </section>
    </>
  );
}
