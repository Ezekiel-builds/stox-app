export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
  };

  return (
    <section className="overflow-hidden bg-surface-dark text-surface">
      {/* Top CTA Block */}
      <div className="flex flex-col items-center gap-4 px-5 py-16 sm:gap-5 sm:px-8 sm:py-20 lg:py-30">
            <span className="text-xs text-text-muted">AN ATELIER OF PURE ORDER</span>

            <h2 className="max-w-3xl text-center text-2xl leading-tight text-[#FAF8F5] sm:text-3xl md:text-4xl">
            Every object accounted for. <span className="italic">Every shelf</span> in calm.
            </h2>

            <p className="max-w-140 text-center text-sm text-neutral-400 sm:text-base">
            Built for independent boutiques, craft workshops, and discerning
            ateliers who seek tangible clarity over digital noise.
            </p>

            <div className="flex w-full flex-col items-center gap-4 pt-2 sm:w-auto sm:flex-row sm:gap-8">
                <a href="#enter" className="rounded-full bg-surface-grey px-4 py-2 text-center text-base text-surface-dark">
                    Enter your space <span>→</span>
                </a>
                <a href="#philosophy" className="border-b border-b-[#404040] text-center p-2">Explore the philosophy</a>
           </div>
      </div>

      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-210 border-b border-footer" />

      {/* Footer Brand & Newsletter */}
      <footer>
        <div className="mx-auto mt-12 mb-12 grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:mt-16 md:mb-16 md:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Column: Brand Info */}
          <div className="flex min-w-0 flex-col gap-4">
                <div>
                <span>S</span>
                <span className="text-[26px] font-heading font-light">
                    STox <em className="text-xl text-neutral-400">Atelier</em>
                </span>
                </div>

                <p className="max-w-md text-sm text-neutral-400 sm:text-base">
                An inventory sanctuary created for independent makers, boutique
                curators, and craft workshops worldwide.
                </p>

                <p className="text-neutral-400 font-extralight">LAGOS — STOCK & OPS</p>
          </div>

          {/* Right Column: Newsletter */}
          <div className="flex min-w-0 flex-col gap-4 text-neutral-400">
            <h3 className="font-medium">THE MERCHANT JOURNAL</h3>

            <p className="text-sm sm:text-base">
              Occasional reflections on physical craft, inventory calm, and
              boutique retail balance. Written with restraint.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <label htmlFor="merchant-email" className="sr-only">
                Your email address
              </label>
              <input
                id="merchant-email"
                type="email"
                placeholder="Your email address"
                required
                className="w-full min-w-0 border-b border-[#2E2E2A] py-3 pr-12 text-sm transition-colors duration-200 ease-out focus:outline-none hover:border-surface"
              />
              <button type="submit" aria-label="Subscribe to newsletter" className="absolute right-2 bottom-3 text-neutral-400">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-12 w-[calc(100%-2.5rem)] max-w-7xl border-b border-footer md:mt-16"/>

        {/* Watermark & Quote Row */}
        <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start gap-4 px-5 sm:px-8 md:mt-16 md:flex-row md:items-center md:justify-between">
          <span aria-hidden="true" className="text-7xl text-[#1C1C1A] font-heading font-light sm:text-8xl md:text-9xl">STox</span>
          <blockquote className="max-w-md font-heading text-lg italic text-neutral-400 sm:text-xl md:text-right">
            “The elegance of knowing precisely where everything rests.”
          </blockquote>
        </div>

         <div className="mx-auto mt-12 w-[calc(100%-2.5rem)] max-w-7xl border-b border-footer md:mt-16"/>

        {/* Bottom Copyright & Legal Links */}
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between md:text-base">
          <p className="text-neutral-400">© 2026 STox Atelier OS. Handcrafted for physical spaces.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-400 font-light">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#archive">Archive</a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
