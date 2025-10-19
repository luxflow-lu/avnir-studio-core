import { PlanCard } from "@avnir/ui";

export default { title: "Domains/SaaS/PlanCard" };

export const TwoCards = () => (
  <div className="grid sm:grid-cols-2 gap-6 p-6 bg-[var(--bg)]">
    <PlanCard
      name="Starter"
      price="9€"
      features={["1 projet", "Email support", "Docs"]}
      cta={{label:"Choisir", href:"#"}}
    />
    <PlanCard
      name="Pro"
      price="29€"
      features={["Projets illimités", "Support prioritaire", "Playground"]}
      cta={{label:"Choisir", href:"#"}}
      highlight
    />
  </div>
);
