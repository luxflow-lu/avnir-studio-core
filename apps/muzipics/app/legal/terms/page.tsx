import { commonTermsSections, companyInfo } from "@avnir/content";

export const metadata = {
  title: "Conditions générales d'utilisation - MUZIPICS",
  description: "Conditions générales d'utilisation de MUZIPICS",
};

export default function TermsPage() {
  return (
    <div className="section--xl">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Conditions générales d'utilisation</h1>
        <p className="text-muted" style={{ marginTop: 'var(--gap-sm)', marginBottom: 'var(--gap-xl)' }}>
          Dernière mise à jour : 31 janvier 2025
        </p>
        
        {commonTermsSections.map((section) => (
          <div key={section.id} style={{ marginBottom: 'var(--gap-xl)' }}>
            <h2 className="h3" style={{ marginBottom: 'var(--gap-md)' }}>{section.title}</h2>
            <div className="text-body" style={{ lineHeight: 'var(--leading-relaxed)' }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
