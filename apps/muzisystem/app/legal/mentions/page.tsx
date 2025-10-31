import { Content } from "@avnir/ui";
import { getMentionsLegales } from "@avnir/content";

export default function MentionsPage() {
  const mentions = getMentionsLegales("MUZISYSTEM");
  
  return (
    <section className="section--xl">
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
