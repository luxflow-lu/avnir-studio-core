import { Content } from "@avnir/ui";
import { getMentionsLegales } from "@avnir/content";

export default function MentionsPage() {
  const mentions = getMentionsLegales("MUZIDEV");
  
  return (
    <section className="section">
      <div className="container">
        <Content.LegalPage
          title="Mentions Légales"
          lastUpdated={mentions.lastUpdated}
          sections={mentions.sections}
        />
      </div>
    </section>
  );
}
