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
            <div className="flex flex-col items-center gap-3 text-center">
                <span className="text-primary-dark font-(--font-heading) text-sm">SIMPLE ONBOARDING</span>
                <h2 className="text-[2rem]">Get your inventory organised in three simple steps.</h2>
                <span className="text-base text-text-muted">
                    A glimpse into the daily cockpit that keeps hundreds of boutique retailers organized.
                </span>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:px-8 lg:px-16">
                {steps.map((step) => (
                    <div key={step.number} className="h-full flex flex-col gap-4 md:gap-6 bg-surface p-5 rounded-3xl border border-border-muted">
                        <span className="text-3xl text-background-main font-heading">{step.number}</span>

                        <div>
                            <h4 className="text-2xl font-bold">{step.title}</h4>
                            <span className="text-text-muted">{step.description}</span>
                        </div>

                        <span className="py-2 border-t border-background-main text-[0.8rem] text-[#065F46] font-bold">{step.note}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
