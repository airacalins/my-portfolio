const Home = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center border-b border-paper-line dark:border-night-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-ink-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-soft) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 w-full">
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-paper-line dark:border-night-line text-ink-soft dark:text-mist-soft">
            Software Engineer
          </span>
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-paper-line dark:border-night-line text-ink-soft dark:text-mist-soft">
            Pasig City, PH
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink dark:text-mist max-w-3xl">
          Aira Calingasan
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-soft dark:text-mist-soft leading-relaxed">
          I build interfaces for the web and mobile. React on the front end,
          React Native beyond it.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/my-portfolio/AiraCalingasan-Resume.pdf"
            download="AiraCalingasan-CV.pdf"
            className="inline-flex items-center rounded-md bg-emerald px-5 py-2.5 text-sm font-medium text-mist hover:bg-emerald-bright transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-paper-line dark:border-night-line px-5 py-2.5 text-sm font-medium text-ink dark:text-mist hover:border-emerald dark:hover:border-emerald-bright transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
