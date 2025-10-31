import { Content } from "@avnir/ui";
import { cookiesPolicy } from "@avnir/content";

export default function CookiesPage() {
  return (
    <Content.LegalPage
      title="Politique de Cookies"
      lastUpdated={cookiesPolicy.lastUpdated}
      sections={cookiesPolicy.sections}
    />
  );
}
