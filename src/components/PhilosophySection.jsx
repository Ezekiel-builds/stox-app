export default function PhilosophySection() {
    return (
        <section className="philosophy flex gap-4 flex-col justify-center items-center bg-(--color-surface) p-10">
            <span className="eyebrow__text text-(--color-primary-dark) font-(--font-heading) text-sm">
                THE STOX DESIGN PHILOSOPHY
            </span>

            <h2 className="philosophy__text text-[2rem] text-center ">
                “Most inventory software is built like cold accounting spreadsheets. We built STox like an exquisitely crafted merchant workshop.”
            </h2>
        </section>
    )
}
