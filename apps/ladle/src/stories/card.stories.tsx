import { Card } from "@avnir/ui";

export default { title: "Primitives/Card" };

export const Basic = () => (
  <div className="p-6 bg-[var(--bg)] text-white">
    <Card>Contenu de carte</Card>
  </div>
);
