export default function PhilosophySection() {
    return (
        <section className="philosophy flex flex-col items-center justify-center gap-5 bg-surface p-8 md:gap-6 md:p-20">
            <span className="eyebrow__text text-primary-dark font-(--font-heading) text-sm">
                THE STOX DESIGN PHILOSOPHY
            </span>

            <h2 className="philosophy__text text-2xl md:text-[2rem] text-center">
                “Most inventory software is built like cold accounting spreadsheets. We built STox like an exquisitely crafted merchant workshop.”
            </h2>
        </section>
    )
}
