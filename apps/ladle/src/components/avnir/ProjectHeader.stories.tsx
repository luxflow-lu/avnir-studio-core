import React from "react";
import { ProjectHeader } from "./ProjectHeader";

export default { title: "AVNIR/ProjectHeader" };

export const Artiste = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectHeader
      title="Mon Album Hip-Hop"
      type="artiste"
      description="Projet d'album avec 12 tracks, collaboration avec plusieurs beatmakers de la scène française. Thématiques urbaines et sociales."
      status="active"
      lastModified={new Date()}
      collaborators={3}
      onEdit={() => console.log("Edit")}
      onShare={() => console.log("Share")}
      onArchive={() => console.log("Archive")}
    />
  </div>
);

export const Beatmaker = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectHeader
      title="Beats Collection Vol.2"
      type="beatmaker"
      description="Collection de beats trap et drill pour artistes émergents"
      status="draft"
      lastModified={new Date(Date.now() - 86400000)}
      collaborators={1}
      onEdit={() => console.log("Edit")}
      onShare={() => console.log("Share")}
    />
  </div>
);

export const Studio = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectHeader
      title="Studio Session Mars 2024"
      type="studio"
      description="Sessions d'enregistrement pour différents artistes du label"
      status="active"
      lastModified={new Date(Date.now() - 172800000)}
      collaborators={8}
      onEdit={() => console.log("Edit")}
      onShare={() => console.log("Share")}
      onArchive={() => console.log("Archive")}
    />
  </div>
);

export const Producteur = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectHeader
      title="Label Compilation 2024"
      type="producteur"
      description="Compilation des meilleurs tracks du label pour l'année 2024"
      status="archived"
      lastModified={new Date(Date.now() - 604800000)}
      collaborators={15}
      onEdit={() => console.log("Edit")}
      onShare={() => console.log("Share")}
    />
  </div>
);

export const Minimal = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectHeader
      title="Nouveau Projet"
      type="artiste"
    />
  </div>
);
