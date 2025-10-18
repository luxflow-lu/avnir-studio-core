import * as React from 'react';
import { Card, Button } from '@avnir/ui';

export function GeneratorCard(){
  return (
    <Card className="p-6">
      <h3 className="h3">Générateur visuel</h3>
      <p className="mt-2 text-muted">Point d'entrée UI — brancher un adapter modèle plus tard.</p>
      <div className="mt-4 flex gap-3">
        <Button>Générer</Button>
        <Button variant="ghost">Options</Button>
      </div>
    </Card>
  );
}
