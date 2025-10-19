import { FeatureGrid } from "@avnir/ui";

export default { title: "Composed/FeatureGrid" };

const items = [
  { title: "Design tokens", text: "Variables CSS unifiées cross-site." },
  { title: "UI primitives", text: "Composants simples, cohérents et typés." },
  { title: "Docs", text: "Nextra pour documenter et partager." },
  { title: "Playground", text: "Ladle pour visualiser et tester." }
];

export const Basic = () => (
  <FeatureGrid items={items} />
);
