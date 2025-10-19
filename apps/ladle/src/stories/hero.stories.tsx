import { Button, Hero } from "@avnir/ui";

export default { title: "Composed/Hero" };

export const Default = () => (
  <Hero
    title={"Construisez plus vite, déployez avec confiance"}
    subtitle={"Une plateforme unifiée pour concevoir, développer et documenter vos interfaces, avec un design system cohérent cross-site."}
    actions={(
      <>
        <Button>Commencer</Button>
        <Button variant="outline">Voir la démo</Button>
      </>
    )}
    media={<div className="aspect-video bg-white/5" />}
  />
);
