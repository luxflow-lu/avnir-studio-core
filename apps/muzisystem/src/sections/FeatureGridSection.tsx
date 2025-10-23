import { FeatureGrid } from "@avnir/ui";

export function FeatureGridSection() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Consistent Design",
      description:
        "Every component follows the same design principles and visual language for a cohesive user experience.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Accessibility First",
      description:
        "Built with WCAG 2.1 AA compliance in mind. Screen reader friendly and keyboard navigable.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimized",
      description:
        "Lightweight components with minimal bundle size impact and optimized rendering performance.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: "Flexible & Composable",
      description:
        "Mix and match components to create complex interfaces. Highly customizable with CSS variables.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5v10h2V3zM19 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM19 3h-2v10h2V3z" />
        </svg>
      ),
      title: "Multi-Brand Support",
      description:
        "Switch between different brand themes instantly. Perfect for white-label applications.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Developer Experience",
      description:
        "TypeScript support, comprehensive documentation, and Storybook integration for rapid development.",
    },
  ];

  return (
    <FeatureGrid
      title="Why Choose MUZISYSTEM?"
      subtitle="Everything you need to build modern, accessible, and beautiful user interfaces"
      items={features}
      columns={3}
      className="py-12 md:py-16 lg:py-24"
    />
  );
}
