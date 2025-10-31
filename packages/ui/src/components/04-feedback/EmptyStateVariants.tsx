/**
 * EmptyState Variants
 * Pre-configured empty states for common scenarios
 */

import * as React from "react";
import { EmptyState, EmptyStateProps } from "./EmptyState";

const SearchIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const InboxIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>
);

const FolderIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export function NoSearchResults(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<SearchIcon />}
      title="Aucun résultat trouvé"
      description="Essayez de modifier vos critères de recherche"
      {...props}
    />
  );
}

export function NoData(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<InboxIcon />}
      title="Aucune donnée disponible"
      description="Les données apparaîtront ici une fois disponibles"
      {...props}
    />
  );
}

export function NoFiles(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<FolderIcon />}
      title="Aucun fichier"
      description="Commencez par ajouter des fichiers"
      {...props}
    />
  );
}

export function NoContent(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<DocumentIcon />}
      title="Aucun contenu"
      description="Le contenu apparaîtra ici une fois créé"
      {...props}
    />
  );
}
