import { Section } from '@avnir/ui';
import { GeneratorCard } from '@features/visual-generator';

export default function Page(){
  return (
    <>
      <Section size="lg">
        <h1 className="h1">AVNIR-Studio — Hub</h1>
        <p className="mt-3 text-muted max-w-prose">Outils & satellites interconnectés. Style guide unifié, theming par brand.</p>
      </Section>
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-0">
        <GeneratorCard />
      </Section>
    </>
  );
}
