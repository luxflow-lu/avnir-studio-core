import { Section, Button, Card } from "@avnir/ui";

// Auto-gallery des composants avec leurs variants
const componentShowcase = [
  {
    name: "Button",
    description: "Boutons avec différents variants et états",
    examples: [
      { label: "Solid", component: <Button variant="solid">Solid Button</Button> },
      { label: "Outline", component: <Button variant="outline">Outline Button</Button> },
      { label: "Ghost", component: <Button variant="ghost">Ghost Button</Button> },
      { label: "Disabled", component: <Button disabled>Disabled Button</Button> },
    ],
  },
  {
    name: "Card",
    description: "Conteneurs pour grouper du contenu",
    examples: [
      {
        label: "Basic Card",
        component: (
          <Card className="p-4 max-w-sm">
            <h3 className="font-semibold mb-2">Card Title</h3>
            <p className="text-muted text-sm">Card content goes here with some description text.</p>
          </Card>
        ),
      },
      {
        label: "Card with Border",
        component: (
          <Card className="p-4 max-w-sm border border-border">
            <h3 className="font-semibold mb-2">Bordered Card</h3>
            <p className="text-muted text-sm">This card has a visible border.</p>
          </Card>
        ),
      },
    ],
  },
  {
    name: "Section",
    description: "Conteneur de section avec espacement",
    examples: [
      {
        label: "Default Section",
        component: (
          <Section className="bg-surface rounded-lg max-w-sm">
            <h3 className="font-semibold mb-2">Section Title</h3>
            <p className="text-muted text-sm">Section content with proper spacing.</p>
          </Section>
        ),
      },
    ],
  },
];

function ComponentSection({ name, description, examples }: (typeof componentShowcase)[0]) {
  return (
    <div className="mb-12">
      <h3 className="content-title">{name}</h3>
      <p className="content-description">{description}</p>

      <div className="grid gap-6">
        {examples.map((example, index) => (
          <div key={index} className="card">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <h4 className="font-medium mb-2">{example.label}</h4>
                <div className="flex items-center gap-4">{example.component}</div>
              </div>
              <div className="lg:w-1/3">
                <code className="text-xs p-2 rounded block overflow-x-auto">
                  {`<${name} ${example.label.toLowerCase().includes("disabled") ? "disabled " : ""}${
                    example.label.toLowerCase().includes("outline")
                      ? 'variant="outline" '
                      : example.label.toLowerCase().includes("ghost")
                        ? 'variant="ghost" '
                        : example.label.toLowerCase().includes("solid")
                          ? 'variant="solid" '
                          : ""
                  }/>`}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Components</h1>
          <p className="section-subtitle">
            Galerie automatique des composants @avnir/ui avec leurs variants, états et exemples
            responsive.
          </p>
        </div>

        {/* Responsive Demo */}
        <div className="card mb-16">
          <h2 className="content-title">Responsive Demo</h2>
          <p className="content-description">
            Les composants s'adaptent automatiquement aux différentes tailles d'écran.
          </p>
          <div className="grid-3">
            <Button variant="solid" className="w-full">
              Mobile First
            </Button>
            <Button variant="outline" className="w-full">
              Tablet Ready
            </Button>
            <Button variant="ghost" className="w-full">
              Desktop Optimized
            </Button>
          </div>
        </div>

        {/* Component Showcase */}
        {componentShowcase.map((component) => (
          <ComponentSection key={component.name} {...component} />
        ))}

        {/* Usage Guidelines */}
        <div className="mt-16">
          <h2 className="content-title">Component Guidelines</h2>
          <div className="grid-2">
            <div className="card">
              <h3 className="text-lg font-semibold text-success mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-sm">
                <li>• Utiliser les variants appropriés</li>
                <li>• Tester sur mobile, tablet, desktop</li>
                <li>• Respecter les états disabled/loading</li>
                <li>• Utiliser les props TypeScript</li>
                <li>• Suivre les patterns d'accessibilité</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-warning mb-3">⚠️ Common Pitfalls</h3>
              <ul className="space-y-2 text-sm">
                <li>• Oublier les états de focus</li>
                <li>• Ignorer les breakpoints responsive</li>
                <li>• Surcharger les styles par défaut</li>
                <li>• Ne pas tester l'accessibilité</li>
                <li>• Mélanger les variants inconsistants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
