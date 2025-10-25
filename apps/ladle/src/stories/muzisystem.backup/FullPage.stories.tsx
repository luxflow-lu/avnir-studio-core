import type { Story } from "@ladle/react";

import {
  HeroSection,
  FeatureGridSection,
  LogoCloudSection,
  ContentSplitSection,
  ContentSplitSectionReversed,
  TestimonialsSection,
  CtaSection,
  FaqSection,
} from "../../../../../apps/muzisystem/src/sections";

export const FullMarketingPage: Story = () => (
  <div className="min-h-screen bg-bg text-text">
    <HeroSection />
    <FeatureGridSection />
    <LogoCloudSection />
    <ContentSplitSection />
    <ContentSplitSectionReversed />
    <TestimonialsSection />
    <CtaSection />
    <FaqSection />
  </div>
);

FullMarketingPage.meta = {
  title: "MUZISYSTEM/Pages/Full Marketing Page",
  description: "Complete marketing page showcasing all sections together",
};
