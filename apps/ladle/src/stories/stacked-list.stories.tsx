import { StackedList } from "@avnir/ui";

export default { title: "Composed/StackedList" };

const items = [
  { title: "Accessibilité AA", text: "Contraste brand vs brand-on assuré." },
  { title: "Tokens CSS", text: "--bg, --surface, --brand, --brand-on, etc." },
  { title: "Tailwind preset", text: "Consommation unifiée dans toutes les apps." },
  { title: "UI primitives", text: "Boutons, cartes, inputs, navbars..." },
  { title: "Docs & Playground", text: "Nextra + Ladle" }
];

export const Basic = () => (
  <div className="p-6 bg-[var(--bg)] text-white">
    <StackedList items={items} />
  </div>
);
