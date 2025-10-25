import { Button, Card, Layout } from "@avnir/ui";

const componentShowcase = [
  {
    name: "Button",
    description: "Boutons avec différents variants et états",
    examples: [
      { label: "Solid", component: <Button variant="solid">Solid Button</Button> },
      { label: "Outline", component: <Button variant="outline">Outline Button</Button> },
      { label: "Ghost", component: <Button variant="ghost">Ghost Button</Button> },
    ],
  },
  {
    name: "Card",
    description: "Conteneurs pour grouper du contenu",
    examples: [
      {
        label: "Basic Card",
        component: (
          <Card>
            <h3>Card Title</h3>
            <p>Card content goes here with some description text.</p>
          </Card>
        ),
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <>
      <Layout.PageHeader
        title="Components"
        subtitle="Galerie des composants @avnir/ui avec leurs variants et états"
      />

      <section className="section">
        <div className="container">
          
          {componentShowcase.map((comp) => (
            <div key={comp.name}>
              <Layout.SectionHeader 
                title={comp.name}
                subtitle={comp.description}
                align="left"
              />
              <div className="grid-2">
                {comp.examples.map((example, index) => (
                  <Card key={index}>
                    <h4>{example.label}</h4>
                    {example.component}
                  </Card>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
