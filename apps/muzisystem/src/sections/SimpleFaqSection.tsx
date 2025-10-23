export function SimpleFaqSection() {
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
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-titles">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg text-muted">Everything you need to know about MUZISYSTEM</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-lg border border-border bg-surface p-6">
                <summary className="flex cursor-pointer items-center justify-between font-medium text-titles">
                  {faq.q}
                  <svg
                    className="h-5 w-5 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-muted leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
