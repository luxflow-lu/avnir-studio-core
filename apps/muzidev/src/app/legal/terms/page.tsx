import { Content } from "@avnir/ui";
import { commonTermsSections, learningTermsSections } from "@avnir/content";

export default function TermsPage() {
  // Combine common terms + learning-specific terms
  const allSections = [...commonTermsSections, ...learningTermsSections];
  
  return (
    <Content.LegalPage
      title="Conditions Générales d'Utilisation"
      lastUpdated="2025-01-31"
      sections={allSections}
    />
  );
}
