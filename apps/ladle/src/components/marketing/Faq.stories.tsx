import React from "react";

import { Faq } from "./Faq";

export default { title: "Marketing/Faq", parameters: { layout: "padded" } };

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-6 bg-background text-foreground">{children}</div>
);

const items = [
  {
    q: "Comment démarrer ?",
    a: "Installez les paquets, lancez Ladle et commencez à composer vos pages.",
  },
  { q: "Est-ce accessible ?", a: "Oui, navigation clavier et attributs ARIA fournis." },
  {
    q: "Puis-je personnaliser ?",
    a: "Tout est basé sur les tokens. Vous pouvez ajuster les styles via Tailwind.",
  },
  {
    q: "Y a-t-il une roadmap ?",
    a: "Nous publions régulièrement des mises à jour et des composants additionnels.",
  },
  {
    q: "Support ?",
    a: "Contactez-nous pour une assistance prioritaire sur intégration et design.",
  },
];

export const Default = () => (
  <Wrapper>
    <Faq
      title="Questions fréquentes"
      subtitle="Tout savoir en quelques réponses"
      items={items}
      defaultOpen={[0]}
    />
  </Wrapper>
);

export const AllClosed = () => (
  <Wrapper>
    <Faq items={items} />
  </Wrapper>
);

export const TwoOpen = () => (
  <Wrapper>
    <Faq items={items} defaultOpen={[0, 2]} />
  </Wrapper>
);
