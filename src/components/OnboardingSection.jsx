const steps = [
    {
        number: '01',
        title: 'Add your products',
        description: 'Add and organise the products you sell.',
        note: 'Takes under 5 minutes',
    },
    {
        number: '02',
        title: 'Manage your inventory',
        description: 'Update and manage product quantities.',
        note: 'Instant quantity sync',
    },
    {
        number: '03',
        title: 'Monitor your stock',
        description: 'Check availability and identify products running low.',
        note: 'Stay ahead of stockouts',
    },
]

export default function OnboardingSection() {
    return (
        <section id="how-it-works" className="onboarding__steps px-4">
            <div className="flex flex-col items-center gap-3 text-center" data-aos="fade-up">
                <span className="text-xs md:text-sm text-primary-dark font-(--font-heading)">SIMPLE ONBOARDING</span>
                <h2 className="text-[1.5rem] md:text-[2.5rem]">Get your inventory organised in three simple steps.</h2>
                <span className="text-base text-text-muted">
                    A glimpse into the daily cockpit that keeps hundreds of boutique retailers organized.
                </span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-16">
                {steps.map((step, index) => (
                    <div key={step.number} data-aos="fade-up" data-aos-delay={index * 120} className="group h-full flex flex-col gap-4 md:gap-6 bg-surface p-7 rounded-3xl border border-border-muted cursor-pointer transition duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-hover">
                        <span className="text-3xl text-background-main font-heading transition-all duration-300 group-hover:scale-109 group-hover:text-primary">{step.number}</span>

                        <div>
                            <h4 className="text-2xl font-bold">{step.title}</h4>
                            <span className="text-text-muted">{step.description}</span>
                        </div>

                        <span className="py-2 border-t border-background-main text-[0.8rem] text-numbers font-bold">{step.note}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
