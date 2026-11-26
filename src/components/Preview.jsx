const STATS_CARDS = [
  {
    id: "total",
    label: "TOTAL PRODUCTS",
    value: "428",
    badge: "+12 this month",
    footerLeft: "12 collections indexed",
    footerRight: "Organized",
    variant: "neutral",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-text-muted"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "healthy",
    label: "IN-STOCK HEALTHY",
    value: "416",
    badge: "97.2% ready",
    footerLeft: "Fulfillment ready",
    footerRight: "Optimal",
    variant: "success",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-success"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "low-stock",
    label: "LOW-STOCK WATCHLIST",
    value: "12",
    badge: "Threshold alert",
    footerLeft: "Automatic re-order notice",
    footerRight: "Monitored",
    variant: "warning",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-warning"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const STOCK_ITEMS = [
  {
    id: "lamp",
    name: "Nordic Brass Desk Lamp",
    meta: "Brushed Brass • Atelier Bay A",
    sku: "LP  -  BRS  -  09",
    units: 28,
    status: "In Stock",
    low: false,
  },
  {
    id: "throw",
    name: "Organic Raw Cotton Throw",
    meta: "Oatmeal • Reserve Rack 2",
    sku: "TXT  -  COT  -  21",
    units: 4,
    status: "Low Stock",
    low: true,
  },
  {
    id: "box",
    name: "Handmade Cedar Storage Box",
    meta: "Hand-rubbed Oil • Bay C-12",
    sku: "STX  -  BOX  -  01",
    units: 85,
    status: "In Stock",
    low: false,
  },
];

export default function Preview() {
  return (
    <section
      id="system-preview"
      className="flex flex-col items-center justify-center gap-10 bg-surface px-4 py-20 font-body text-text md:gap-14"
    >
      {/* Section Header */}
      <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="font-heading text-xs font-medium tracking-[0.18em] text-primary-dark uppercase md:text-sm">
          SYSTEM PREVIEW
        </span>

        <h2 className="font-heading text-[1.75rem] leading-tight tracking-tight text-text md:text-[2.25rem]">
          Designed for absolute clarity.
        </h2>

        <p className="text-sm text-text-muted md:text-base">
          A glimpse into the daily cockpit that keeps hundreds of boutique
          retailers organized.
        </p>
      </div>

      {/* Cockpit Frame */}
      <div className="w-full max-w-5xl overflow-hidden rounded-[26px] border border-border bg-background shadow-card">
        {/* Top Window Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface-grey px-6 py-4 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-danger/80" />
              <span className="h-3 w-3 rounded-full bg-warning/80" />
              <span className="h-3 w-3 rounded-full bg-primary/80" />
            </div>

            <span className="text-xs font-semibold tracking-tight text-text">
              STox — Merchant Hub Cockpit
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-light px-3.5 py-1 text-[11px] font-medium text-numbers">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>North Brooklyn Atelier • Active</span>
          </div>
        </div>

        {/* Main Body */}
        <div className="px-5 py-7 sm:px-9 sm:py-9">
          {/* Cockpit Subheader */}
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-primary-dark uppercase">
                DAILY ATELIER BALANCE
              </p>
              <h3 className="mt-1.5 font-heading text-2xl tracking-tight text-text sm:text-[32px]">
                Workshop Stock At A Glance
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>Physical &amp; digital ledger in sync</span>
            </div>
          </div>

          {/* 3 Independent Stat Cards */}
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
            {STATS_CARDS.map((card) => {
              const isWarning = card.variant === "warning";
              const isSuccess = card.variant === "success";

              return (
                <div
                  key={card.id}
                  className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${
                    isWarning
                      ? "border-border-box bg-box-surface"
                      : "border-border bg-surface shadow-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.15em] uppercase ${
                        isWarning ? "text-primary-brown" : "text-text-muted"
                      }`}
                    >
                      {card.label}
                    </span>

                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                        isWarning
                          ? "border-border-box bg-box-surface"
                          : isSuccess
                            ? "border-primary/20 bg-numbers-background"
                            : "border-border bg-surface-grey"
                      }`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span
                      className={`font-heading text-4xl font-bold tracking-tight tabular-nums ${
                        isWarning
                          ? "text-primary-brown"
                          : isSuccess
                            ? "text-numbers"
                            : "text-text"
                      }`}
                    >
                      {card.value}
                    </span>

                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                        isWarning
                          ? "border-border-box bg-box-surface text-primary-brown"
                          : "border-primary/20 bg-secondary-label text-numbers"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div
                    className={`my-4 h-[1px] w-full ${
                      isWarning ? "bg-border-box" : "bg-surface-muted"
                    }`}
                  />

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-muted">{card.footerLeft}</span>
                    <span
                      className={`font-medium ${
                        isWarning ? "text-primary-brown" : "text-numbers"
                      }`}
                    >
                      {card.footerRight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Independent Featured Stock Registry Card */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:shadow-hover">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-grey px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-[11px] font-bold tracking-[0.14em] text-text uppercase">
                  FEATURED STOCK REGISTRY
                </span>
              </div>

              <span className="text-[11px] text-text-muted">
                Live Inventory Sync Active
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                <div className="grid grid-cols-12 border-b border-border bg-surface-muted px-6 py-3 text-[10px] font-semibold tracking-[0.14em] text-text-muted uppercase">
                  <div className="col-span-5">PRODUCT NAME</div>
                  <div className="col-span-3">SKU CODE</div>
                  <div className="col-span-2">AVAILABLE</div>
                  <div className="col-span-2 text-right">STATUS</div>
                </div>

                <div className="divide-y divide-border">
                  {STOCK_ITEMS.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 items-center px-6 py-4 transition-colors hover:bg-surface-grey"
                    >
                      <div className="col-span-5 pr-4">
                        <p className="text-sm font-medium text-text">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-text-light">
                          {item.meta}
                        </p>
                      </div>

                      <div className="col-span-3 text-xs tracking-wider text-text-muted">
                        {item.sku}
                      </div>

                      <div className="col-span-2 text-xs">
                        <span
                          className={`font-bold tabular-nums ${
                            item.low ? "text-primary-brown" : "text-text"
                          }`}
                        >
                          {item.units}
                        </span>{" "}
                        <span className="text-text-muted">units</span>
                      </div>

                      <div className="col-span-2 flex justify-end">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${
                            item.low
                              ? "border-border-box bg-box-surface text-primary-brown"
                              : "border-primary/20 bg-secondary-label text-numbers"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.low ? "bg-warning" : "bg-primary"
                            }`}
                          />
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}