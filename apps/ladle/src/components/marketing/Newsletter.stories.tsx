import React from "react";
import { Newsletter } from "./Newsletter";

export default { title: "Marketing/Newsletter", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

export const Default = () => (
  <Wrapper>
    <Newsletter title="Restez informé(e)" subtitle="Recevez nos nouveautés chaque mois." />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <Newsletter />
  </Wrapper>
);

export const WithHandler = () => (
  <Wrapper>
    <Newsletter onSubmit={(email) => console.log("newsletter:", email)} />
  </Wrapper>
);
