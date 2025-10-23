import React from "react";
import { ContactBlock } from "./ContactBlock";

export default { title: "Marketing/ContactBlock", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

export const Default = () => (
  <Wrapper>
    <ContactBlock title="Contactez-nous" subtitle="Nous répondons sous 24h" />
  </Wrapper>
);

export const Minimal = () => (
  <Wrapper>
    <ContactBlock />
  </Wrapper>
);

export const CustomDetails = () => (
  <Wrapper>
    <ContactBlock
      details={
        <div className="space-y-2 text-[var(--text-muted)]">
          <p>support@avnir.io</p>
          <p>Discord communautaire</p>
        </div>
      }
    />
  </Wrapper>
);
