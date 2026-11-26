import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center gap-5 px-5 font-body text-text sm:px-8 md:min-h-[72vh] md:gap-6 lg:min-h-screen">
      <h1 className="hero__header mt-12 max-w-205 text-center font-heading text-[2.8rem] leading-[1.05] sm:text-6xl md:mt-20 lg:text-[5rem]">
        Your <span className="font-extralight italic">inventory. Your space.</span>{" "}
        Your control.
      </h1>

      <p className="hero__text max-w-180 px-2 text-center text-[14px] text-text-muted sm:text-sm">
        STox helps you organize your products, track accurate stock quantities,
        and stay in complete control of warehouse flow all in one calm,
        structured space.
      </p>

      <div className="hero__btns my-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-8">
        <Link
          to="/signup"
          className="flex items-center justify-center gap-2 rounded-[999px] bg-text px-6 py-3 text-surface transition-opacity hover:opacity-90 sm:px-8"
        >
          Get Started with STox{" "}
          <i className="fi fi-rr-arrow-right relative top-1" />
        </Link>

        <a
          href="#features"
          className="flex items-center justify-center gap-2 rounded-[999px] border border-border-muted bg-surface px-7 py-3 transition-all duration-300 hover:border-border hover:bg-[#E3E2E2] hover:text-text"
        >
          Explore Features
        </a>
      </div>

      {/* Modular Storage Compartment Composition */}
      <div className="hero__img relative mt-6 w-full max-w-5xl pt-6 pb-2 sm:pt-8 animate-soft-bounce">
        {/* Top-Left Floating Item Callout */}
        <div className="relative z-20 mx-auto mb-3 flex w-fit -rotate-2 items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-2.5 shadow-hover sm:absolute sm:top-0 sm:left-8 sm:mb-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light font-mono text-xs font-bold text-numbers">
            #94
          </span>
          <div className="text-left">
            <p className="text-xs font-semibold text-text sm:text-sm">
              Artisan Ceramic Mug
            </p>
            <p className="flex items-center gap-1.5 text-[11px] text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>142 units in bay B-04</span>
            </p>
          </div>
        </div>

        {/* Top-Right Floating Low-Stock Alert Callout */}
        <div className="relative z-20 mx-auto mb-4 flex w-fit rotate-2 items-center gap-3 rounded-2xl border border-border-box bg-surface px-4 py-2.5 shadow-hover sm:absolute sm:top-1 sm:right-8 sm:mb-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-box bg-box-surface text-warning">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
          <div className="text-left">
            <p className="text-xs font-semibold text-text sm:text-sm">
              Low Stock Alert
            </p>
            <p className="text-[11px] font-medium text-primary-brown">
              Linen Canvas Apron: 3 left
            </p>
          </div>
        </div>

        {/* Main Vault Container */}
        <div className="overflow-hidden rounded-[26px] border border-border bg-surface-grey p-5 shadow-card sm:p-8">
          {/* Top Vault Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <span className="font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase">
                STOX://MODULAR-VAULT-VIEW
              </span>
            </div>

            <span className="hidden rounded-full border border-primary/20 bg-primary-light px-3 py-0.5 font-mono text-[10px] font-medium text-numbers sm:inline-block">
              VAULT SYNCED
            </span>
          </div>

          {/* 3 Compartment Cards */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Compartment 01: Standard Storage */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 text-left shadow-card">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-text-muted uppercase">
                    COMPARTMENT 01
                  </span>
                  <span className="rounded border border-primary/25 bg-primary-light px-2.5 py-0.5 font-mono text-[10px] font-semibold text-numbers uppercase">
                    OPTIMAL
                  </span>
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-grey text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-text">
                  Standard Storage
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Stored SKU catalog items organized by collection tags and weight
                  units.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="text-text-muted">Available Units</span>
                <span className="font-mono font-bold text-text tabular-nums">
                  524 pcs
                </span>
              </div>
            </div>

            {/* Compartment 02: Central Hub — Live Stock Velocity */}
            <div className="flex flex-col justify-between rounded-2xl border border-surface-dark bg-gradient-to-br from-surface-dark via-surface-dark to-[#0A291F] p-6 text-left text-surface shadow-hover">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-primary uppercase">
                    CENTRAL HUB
                  </span>
                  <span className="rounded border border-primary/35 bg-primary/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary uppercase">
                    MONITORED
                  </span>
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-surface">
                  Live Stock Velocity
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-light sm:text-sm">
                  Real-time incoming orders balanced against outgoing fulfillment
                  parcels.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                <span className="text-text-light">Dispatched Today</span>
                <span className="font-mono font-semibold text-primary tabular-nums">
                  +128 orders
                </span>
              </div>
            </div>

            {/* Compartment 03: Threshold Guard */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 text-left shadow-card">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-text-muted uppercase">
                    COMPARTMENT 03
                  </span>
                  <span className="rounded border border-border-box bg-box-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary-brown uppercase">
                    RE-ORDER
                  </span>
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-border-box bg-box-surface text-warning">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-text">
                  Threshold Guard
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                  Automatic calculation of lead times to prevent merchant
                  stockouts.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs">
                <span className="text-text-muted">Critical SKUs</span>
                <span className="font-mono font-bold text-primary-brown tabular-nums">
                  2 products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}