import * as React from "react";
import { Button } from "../../primitives/Button";
import { Card } from "../../primitives/Card";

export function PlanCard({ name, price, period = "/mois", features, cta, highlight }:{
  name:string; price:string; period?:string; features:string[]; cta:{label:string; href:string}; highlight?:boolean;
}) {
  return (
    <Card className={highlight ? "ring-1 ring-[var(--brand)]" : ""}>
      <div className="flex items-baseline justify-between">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        {highlight && <span className="text-[var(--brand)] text-sm">Recommandé</span>}
      </div>
      <div className="mt-3">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-[var(--text-muted)]">{period}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f,i)=><li key={i} className="text-[var(--text-muted)]">• {f}</li>)}
      </ul>
      <a href={cta.href} className="inline-flex mt-6">
        <Button>{cta.label}</Button>
      </a>
    </Card>
  );
}
