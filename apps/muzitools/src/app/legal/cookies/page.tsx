import { Content } from "@avnir/ui";
import { muzitoolsCookies } from "@avnir/content";

export default function CookiesPage() {
  return (
    <section className="section--xl">
      <div className="container">
        <Content.LegalPage
          title="Politique de Cookies"
          lastUpdated={muzitoolsCookies.lastUpdated}
          sections={muzitoolsCookies.sections}
        />
      </div>
    </section>
  );
}
