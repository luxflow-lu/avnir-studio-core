import { Section } from '../../packages/ui/src';
import { GeneratorCard } from '../../features/visual-generator/src/ui/GeneratorCard';
export default function Page(){
  return (
    <Section size="lg">
      <h1 className="h1">MUZIPICS</h1>
      <p className="mt-3 text-muted">Générateur de visuels — même UI, couleur primaire brand.</p>
      <div className="mt-6"><GeneratorCard /></div>
    </Section>
  );
}
