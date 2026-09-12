const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="font-mono text-xs text-emerald dark:text-emerald-bright mb-3">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink dark:text-mist max-w-xl">
          Let's talk about what you're building.
        </h2>
        <p className="mt-4 text-ink-soft dark:text-mist-soft max-w-md">
          Feel free to reach out — I'm happy to hear about new projects or
          just talk shop.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="mailto:airacalins@gmail.com"
            className="inline-flex items-center rounded-md bg-emerald px-5 py-2.5 text-sm font-medium text-mist hover:bg-emerald-bright transition-colors w-fit"
          >
            Say hello
          </a>
          <div className="flex flex-col text-sm text-ink-soft dark:text-mist-soft">
            <span className="font-mono">airacalins@gmail.com</span>
            <span className="font-mono">(+63) 927-696-0322</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
