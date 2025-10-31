import { privacyPolicy, companyInfo } from "@avnir/content";

export const metadata = {
  title: "Politique de confidentialité - MUZIPICS",
  description: "Politique de confidentialité et protection des données de MUZIPICS",
};

export default function PrivacyPage() {
  const policy = privacyPolicy;
  
  return (
    <div className="section--xl">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Politique de confidentialité</h1>
        <p className="text-muted" style={{ marginTop: 'var(--gap-sm)', marginBottom: 'var(--gap-xl)' }}>
          Dernière mise à jour : {policy.lastUpdated}
        </p>
        
        {policy.sections.map((section) => (
          <div key={section.id} style={{ marginBottom: 'var(--gap-xl)' }}>
            <h2 className="h3" style={{ marginBottom: 'var(--gap-md)' }}>{section.title}</h2>
            <div className="text-body" style={{ lineHeight: 'var(--leading-relaxed)' }}>
              {section.content}
            </div>
          </div>
        ))}
        
        <div style={{ marginTop: 'var(--gap-2xl)', padding: 'var(--gap-lg)', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
          <h3 className="h4" style={{ marginBottom: 'var(--gap-md)' }}>Contact</h3>
          <p className="text-body">
            {companyInfo.name}<br />
            {companyInfo.address}<br />
            Email : {companyInfo.email}
          </p>
        </div>
      </div>
    </div>
  );
}
