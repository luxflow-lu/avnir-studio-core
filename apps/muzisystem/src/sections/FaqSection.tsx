import { Faq } from "@avnir/ui";

export function FaqSection() {
  const faqs = [
    {
      q: "What makes MUZISYSTEM different from other design systems?",
      a: "MUZISYSTEM is built with multi-brand theming at its core, comprehensive accessibility features, and a developer-first approach. Every component is TypeScript-native and comes with extensive documentation and testing.",
    },
    {
      q: "Is MUZISYSTEM compatible with my existing React project?",
      a: "Yes! MUZISYSTEM is designed to integrate seamlessly with any React application. It works with Next.js, Vite, Create React App, and other popular React frameworks. Simply install the packages and start using components.",
    },
    {
      q: "How do I customize the design tokens and themes?",
      a: "MUZISYSTEM uses CSS custom properties for all design tokens. You can override colors, spacing, typography, and other tokens by modifying the CSS variables. We also provide a comprehensive theming guide in our documentation.",
    },
    {
      q: "Are the components accessible by default?",
      a: "Absolutely! Every component is built with WCAG 2.1 AA compliance in mind. We include proper ARIA attributes, keyboard navigation, focus management, and screen reader support out of the box.",
    },
    {
      q: "Can I use MUZISYSTEM for commercial projects?",
      a: "Yes, MUZISYSTEM is open source and free to use for both personal and commercial projects. Check our license for full details on usage rights and attribution requirements.",
    },
    {
      q: "How do I get support or report issues?",
      a: "We provide comprehensive documentation, GitHub discussions for community support, and issue tracking on our GitHub repository. For enterprise support, contact our team directly.",
    },
  ];

  return (
    <Faq
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about MUZISYSTEM"
      items={faqs}
      className="py-12 md:py-16 lg:py-24"
    />
  );
}
