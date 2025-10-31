import { Content } from "@avnir/ui";
import { getMentionsLegales } from "@avnir/content";

export default function MentionsPage() {
  const mentions = getMentionsLegales("MUZIDEV");
  
  return (
    <Content.LegalPage
      title="Mentions Légales"
      lastUpdated={mentions.lastUpdated}
      sections={mentions.sections}
    />
  );
}
