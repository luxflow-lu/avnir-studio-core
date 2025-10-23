import type { Story } from "@ladle/react";
import {
  ContentSplitSection,
  ContentSplitSectionReversed,
} from "../../../../../apps/muzisystem/src/sections/ContentSplitSection";

export const Default: Story = () => <ContentSplitSection />;

export const Reversed: Story = () => <ContentSplitSectionReversed />;

Default.meta = {
  title: "MUZISYSTEM/Sections/ContentSplit",
  description: "Content split section with image and copy, includes reversed variant",
};

Reversed.meta = {
  title: "MUZISYSTEM/Sections/ContentSplit - Reversed",
  description: "Reversed layout variant of the content split section",
};
