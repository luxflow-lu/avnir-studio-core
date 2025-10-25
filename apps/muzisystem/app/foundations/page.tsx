import { Card, Layout } from "@avnir/ui";

export default function FoundationsPage() {
  return (
    <>
      <Layout.PageHeader
        title="Foundations"
        subtitle="Les fondations du design system : typographie, espacement, couleurs et tokens"
      />

      <section className="section">
        <div className="container">
          
          <Layout.SectionHeader 
            title="Typography"
            subtitle="Échelle typographique avec variables CSS"
            align="left"
          />
          <div className="grid-2">
            <Card><h1>Heading 1</h1></Card>
            <Card><h2>Heading 2</h2></Card>
            <Card><h3>Heading 3</h3></Card>
            <Card><p>Body text regular</p></Card>
          </div>

          <Layout.SectionHeader 
            title="Spacing"
            subtitle="Système d'espacement cohérent"
            align="left"
          />
          <Card>
            <p>Utilise les variables --space-* définies dans themes.css</p>
          </Card>

        </div>
      </section>
    </>
  );
}
