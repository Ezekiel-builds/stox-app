export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
  };

  return (
    <section className="bg-surface-dark text-surface">
      {/* Top CTA Block */}
      <div className="flex flex-col gap-3 items-center p-30">
            <span className="text-xs text-text-muted">AN ATELIER OF PURE ORDER</span>

            <h2 className="text-[#FAF8F5] text-[2rem] text-center">
            Every object accounted for. <span className="italic">Every shelf</span> in calm.
            </h2>

            <p className="max-w-140 text-center text-base text-neutral-400">
            Built for independent boutiques, craft workshops, and discerning
            ateliers who seek tangible clarity over digital noise.
            </p>

            <div className="flex gap-8">
                <a href="#enter" className="bg-surface-grey text-surface-dark text-base py-2 px-4 rounded-full">
                    Enter your space <span>→</span>
                </a>
                <a href="#philosophy" className="border-b border-b-[#404040]">Explore the philosophy</a>
           </div>
      </div>

      <div className="w-210 mx-auto border-b border-footer" />

      {/* Footer Brand & Newsletter */}
      <footer>
        <div className="flex gap-80 px-8 mt-16 mb-16">
          {/* Left Column: Brand Info */}
          <div className="flex flex-col gap-4">
                <div>
                <span>S</span>
                <span className="text-[26px] font-heading font-light">
                    STox <em className="text-xl text-neutral-400">Atelier</em>
                </span>
                </div>

                <p className="max-w-full text-neutral-400">
                An inventory sanctuary created for independent makers, boutique
                curators, and craft workshops worldwide.
                </p>

                <p className="text-neutral-400 font-extralight">LAGOS — STOCK & OPS</p>
          </div>

          {/* Right Column: Newsletter */}
          <div className="flex flex-col gap-4 text-neutral-400">
            <h3 className="font-medium">THE MERCHANT JOURNAL</h3>

            <p className="text-base">
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
                className="min-w-96 text-sm border-b border-[#2E2E2A] px-6 py-2 focus:outline-none transition-colors duration-200 ease-out hover:border-surface"
              />
              <button type="submit" aria-label="Subscribe to newsletter" className="absolute right-14 bottom-3 text-neutral-400">
                →
              </button>
            </form>
          </div>
        </div>

        <div className="w-full mx-3 border-b border-footer mt-16"/>

        {/* Watermark & Quote Row */}
        <div className="flex justify-between items-center px-8 mt-16">
          <span aria-hidden="true" className="text-9xl text-[#1C1C1A] font-heading font-light">STox</span>
          <blockquote className="font-heading italic text-neutral-400">
            “The elegance of knowing precisely where everything rests.”
          </blockquote>
        </div>

         <div className="w-full mx-3 border-b border-footer mt-16"/>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex justify-between p-6">
          <p className="text-neutral-400">© 2026 STox Atelier OS. Handcrafted for physical spaces.</p>
          <nav aria-label="Footer navigation" className="flex gap-6 text-base text-neutral-400 font-light">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#archive">Archive</a>
          </nav>
        </div>
      </footer>
    </section>
  );
}
