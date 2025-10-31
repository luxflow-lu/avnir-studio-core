import { getMentionsLegales, companyInfo } from "@avnir/content";

export const metadata = {
  title: "Mentions légales - MUZIPICS",
  description: "Mentions légales de MUZIPICS",
};

export default function MentionsPage() {
  const mentions = getMentionsLegales("MUZIPICS");
  
  return (
    <div className="section--xl">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="h1">Mentions légales</h1>
        <p className="text-muted" style={{ marginTop: 'var(--gap-sm)', marginBottom: 'var(--gap-xl)' }}>
          Dernière mise à jour : {mentions.lastUpdated}
        </p>
        
        {mentions.sections.map((section: any) => (
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
