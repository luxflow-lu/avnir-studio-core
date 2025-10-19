import { Navbar } from "@avnir/ui";

export default { title: "Composed/Navbar" };

const links = [
  {label:"Fonctionnalités", href:"#"},
  {label:"Tarifs", href:"#"},
  {label:"Ressources", href:"#"},
  {label:"Contact", href:"#"},
];

export const Default = () => (
  <div className="bg-[var(--bg)] min-h-[200px]">
    <Navbar links={links} />
  </div>
);

export const WithCta = () => (
  <div className="bg-[var(--bg)] min-h-[200px]">
    <Navbar links={links} cta={{label:"Commencer", href:"#"}} />
  </div>
);
