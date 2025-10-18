import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'UI/Navbar',
  component: Navbar
};
export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    left: <span className="inline-flex h-8 w-8 rounded-lg bg-primary/20" />,
    right: <>
      <a className="hover:text-primary" href="#">Produits</a>
      <a className="hover:text-primary" href="#">Contact</a>
    </>
  }
};
