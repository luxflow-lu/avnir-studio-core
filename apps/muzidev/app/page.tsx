import { Section } from '../../packages/ui/src';
import { TapperCard } from '../../features/audio-tools/src/ui/TapperCard';
export default function Page(){
  return (
    <Section size="lg">
      <h1 className="h1">MUZIDEV</h1>
      <p className="mt-3 text-muted">Formation & outils — démo Tap Tempo partagé.</p>
      <div className="mt-6"><TapperCard /></div>
    </Section>
  );
}
