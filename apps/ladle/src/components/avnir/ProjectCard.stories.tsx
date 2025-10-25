import React from "react";

import { ProjectCard } from "./ProjectCard";

export default { title: "AVNIR/ProjectCard" };

export const Types = () => (
  <div className="bg-[var(--bg)] text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <ProjectCard
      title="Mon Album Hip-Hop"
      description="Projet d'album avec 12 tracks, collaboration avec plusieurs beatmakers"
      type="artiste"
      status="active"
      lastModified={new Date()}
    />
    <ProjectCard
      title="Beats Collection Vol.2"
      description="Collection de beats trap et drill pour artistes"
      type="beatmaker"
      status="draft"
      lastModified={new Date(Date.now() - 86400000)}
    />
    <ProjectCard
      title="Studio Session Mars"
      description="Sessions d'enregistrement pour différents artistes du label"
      type="studio"
      status="active"
      lastModified={new Date(Date.now() - 172800000)}
    />
    <ProjectCard
      title="Label Compilation"
      description="Compilation des meilleurs tracks du label pour 2024"
      type="producteur"
      status="archived"
      lastModified={new Date(Date.now() - 604800000)}
    />
  </div>
);

export const WithActions = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <ProjectCard
      title="Nouveau Projet"
      description="Description du projet avec actions d'édition et suppression"
      type="artiste"
      onEdit={() => alert("Éditer")}
      onDelete={() => alert("Supprimer")}
    />
  </div>
);
