import { Section } from '@avnir/ui';
import { GeneratorCard } from '@features/visual-generator';
export default function Page(){
  return (
    <Section className="py-20 md:py-24">
      <h1 className="h1">MUZIPICS</h1>
      <p className="mt-3 text-muted">Générateur de visuels — même UI, couleur primaire brand.</p>
      <div className="mt-6"><GeneratorCard /></div>
    </Section>
  );
}
