import { PricingTabs } from "@avnir/ui";

export default { title: "Domains/SaaS/PricingTabs" };

export const Basic = () => (
  <div className="p-6 bg-[var(--bg)] text-white">
    <PricingTabs
      tabs={[{key:"m", label:"Mensuel"},{key:"a", label:"Annuel"}]}
    >
      <div className="text-[var(--text-muted)]">Contenu des plans ici…</div>
    </PricingTabs>
  </div>
);
