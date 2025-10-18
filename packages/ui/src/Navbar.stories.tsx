import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = { title: 'UI/Navbar', component: Navbar };
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    logo: <span className="inline-flex h-8 w-8 rounded-lg bg-primary/20" />,
    links: [{label:'Produits',href:'#'},{label:'Contact',href:'#'}],
    cta: <a className="inline-flex h-10 items-center rounded-lg bg-primary px-4 text-[color:var(--bg)] font-medium">Commencer</a>
  }
};
