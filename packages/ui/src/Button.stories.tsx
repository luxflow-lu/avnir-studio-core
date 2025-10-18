import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: { children: 'Bouton', variant: 'primary', size: 'md' }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Subtle: Story = { args: { variant: 'subtle' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Large: Story = { args: { size: 'lg' } };
export const Small: Story = { args: { size: 'sm' } };
export const FullWidth: Story = { args: { className: 'w-full' } };
