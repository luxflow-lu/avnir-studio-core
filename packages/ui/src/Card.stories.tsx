import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = { title: 'UI/Card', component: Card, args: { className: 'p-6' } };
export default meta;
type Story = StoryObj<typeof Card>;

export const Base: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 className="h3">Titre carte</h3>
      <p className="mt-2 text-muted">Texte de démonstration sur surface.</p>
      <div className="mt-4 h-24 rounded-lg bg-white/5 border border-white/10" />
    </Card>
  )
};
