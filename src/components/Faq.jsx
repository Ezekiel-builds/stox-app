import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is STox?",
    answer: `STox is a dedicated digital inventory management platform designed specifically for merchants, retail shops, and independent brands. It replaces scattered notebooks, fragile spreadsheets, and bloated ERP tools with a singular, beautiful storage vault.`,
  },
  {
    id: 2,
    question: "What is STox designed for?",
    answer: `STox is made for small business owners, boutique artisans, online vendors, and brick-and-mortar retailers who have outgrown pen-and-paper tracking but do not want complex, expensive enterprise software.`,
  },
  {
    id: 3,
    question: "Can I manage multiple products and variants?",
    answer: `Yes. STox natively supports nested variants—such as sizes, colorways, materials, and batch IDs—under each primary product compartment, ensuring your records stay clean and unfragmented.`,
  },
  {
    id: 4,
    question: "Can I update product quantities on mobile?",
    answer: `Absolutely. STox is completely responsive. You can perform quick counts, barcode scans, and stock adjustments right from your phone or tablet on the sales floor.`,
  },
  {
    id: 5,
    question: "How does STox help me monitor stock availability?",
    answer: `You define minimum safety quantities for each product. When an item crosses below that safety mark, STox highlights it on your dashboard and sends an instant notification, giving you ample time to re-order before running out.`,
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  return (
    <div id="FAQ" className="px-4 md:px-16">
      <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
        <span className="font-heading text-xs text-primary-dark md:text-sm">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="font-heading text-[1.6rem] md:text-[2rem]">
          Everything you need to know.
        </h2>
        <span className="text-base text-text-muted">
          Clear answers for small business owners seeking calm inventory
          management.
        </span>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-4 md:gap-5">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl border bg-surface px-5 transition-colors duration-300 ${
                isOpen ? "border-primary/40 shadow-card" : "border-border-muted"
              }`}
            >
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-3 py-5 text-left"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
              >
                <h4 className="text-lg leading-snug font-medium text-text">
                  {faq.question}
                </h4>
                <i
                  aria-hidden="true"
                  className={`fi fi-rr-plus-small flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
                    isOpen
                      ? "rotate-45 bg-text text-surface"
                      : "bg-background text-text"
                  }`}
                />
              </button>

              {/* Smooth Height + Fade Wrapper */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`pb-5 leading-relaxed text-text-muted transition-transform duration-300 ease-out ${
                      isOpen ? "translate-y-0" : "-translate-y-1.5"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}