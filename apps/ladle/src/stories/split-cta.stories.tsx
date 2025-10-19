import { SplitCTA } from "@avnir/ui";

export default { title: "Composed/SplitCTA" };

export const Basic = () => (
  <SplitCTA
    media={<div className="aspect-video bg-white/10" />}
    title="Passez à la vitesse supérieure"
    text="Un kit cohérent pour construire des interfaces rapides, accessibles et brandables."
    cta={{label: "Commencer", href: "#"}}
  />
);
