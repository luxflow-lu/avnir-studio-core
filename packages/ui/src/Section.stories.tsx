import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  title: 'UI/Section',
  component: Section,
  args: { size: 'md', children: <div className="h3">Section content</div> }
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Small: Story = { args: { size: 'sm' } };
export const Medium: Story = {};
export const Large: Story = { args: { size: 'lg' } };
