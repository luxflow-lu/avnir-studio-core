import { Content } from "@avnir/ui";
import { muzitoolsMentions } from "@avnir/content";

export default function MentionsPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Mentions Légales"
          lastUpdated={muzitoolsMentions.lastUpdated}
          sections={muzitoolsMentions.sections}
        />
      </div>
    </section>
  );
}
