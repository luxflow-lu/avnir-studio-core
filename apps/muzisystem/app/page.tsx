import {
  HeroSection,
  FeatureGridSection,
  LogoCloudSection,
  ContentSplitSection,
  ContentSplitSectionReversed,
  TestimonialsSection,
  CtaSection,
  SimpleFaqSection,
} from "../src/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <HeroSection />
      <FeatureGridSection />
      <LogoCloudSection />
      <ContentSplitSection />
      <ContentSplitSectionReversed />
      <TestimonialsSection />
      <CtaSection />
      <SimpleFaqSection />
    </main>
  );
}
