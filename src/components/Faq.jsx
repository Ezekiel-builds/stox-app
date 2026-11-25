import { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: "What is STox",
        answer: `STox is a dedicated digital inventory management platform designed specifically for merchants, retail
        shops, and independent brands. It replaces scattered notebooks, fragile spreadsheets, and bloated
        ERP tools with a singular, beautiful storage vault.`
    },

    {
        id: 2,
        question: "What is STox designed for?",
        answer: `STox is made for small business owners, boutique artisans, online vendors, and brick-and-mortar retailers who have outgrown pen-and-paper tracking but do not want complex, expensive enterprise software.`
    },

    {
        id: 3,
        question: "Can I manage multiple products and variants?",
        answer: `Yes. STox natively supports nested variants—such as sizes, colorways, materials, and batch IDs—under each primary product compartment, ensuring your records stay clean and unfragmented.`
    },

    {
        id: 4,
        question: "Can I update product quantities on mobile?",
        answer: `Absolutely. STox is completely responsive. You can perform quick counts, barcode scans, and stock adjustments right from your phone or tablet on the sales floor.`
    },

    {
        id: 5,
        question: "How does STox help me monitor stock availability?",
        answer: `You define minimum safety quantities for each product. When an item crosses below that safety mark, STox highlights it on your dashboard and sends an instant notification, giving you ample time to re-order before running out.`
    }
]

export default function Faq() {
    const [isOpenIndex, setIsOpenIndex] = useState(null);

    return (
        <div id="FAQ" className="px-4 md:px-16">

            <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
                <span className="text-xs md:text-sm text-primary-dark font-(--font-heading)">FREQUENTLY ASKED QUESTIONS</span>
                <h2 className="text-[1.6rem] md:text-[2rem]text-[2rem]">Everything you need to know.</h2>
                <span className="text-base text-text-muted">
                    Clear answers for small business owners seeking calm inventory management.
                </span>
            </div>
    
          <div className="flex flex-col gap-4 md:gap-5">
          {faqs.map(faq => (
            <div key={faq.id} className="rounded-2xl border border-border-muted bg-surface px-4">
                <button
                    type="button"
                    className="w-full flex justify-between items-center gap-3 py-5 text-left"
                    onClick={() => setIsOpenIndex(isOpenIndex === faq.id ? null : faq.id)}
                    /* aria-expanded={isOpenIndex === faq.id} */
                >
                    <h4 className="text-lg leading-snug">{faq.question}</h4>
                    <i
                      /*   aria-hidden="true" */
                        className={`fi fi-rr-plus-small shrink-0 transition-transform ${isOpenIndex === faq.id ? 'rotate-45 bg-text text-surface' : 'bg-background text-text'} w-8 h-8 flex items-center justify-center rounded-full`}
                    ></i>
                </button>

                {isOpenIndex === faq.id && (
                    <p className="pb-5 text-text-muted">{faq.answer}</p>
                )}
            </div>
          ))}
          </div>
        </div>
    )
}