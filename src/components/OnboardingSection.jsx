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
        <section className="onboarding__steps">
            <div>
                <span>SIMPLE ONBOARDING</span>
                <h2 className="text-[2rem]">Get your inventory organised in three simple steps.</h2>
                <span>
                    A glimpse into the daily cockpit that keeps hundreds of boutique retailers organized.
                </span>
            </div>

            <div>
                {steps.map((step) => (
                    <div key={step.number}>
                        <span>{step.number}</span>

                        <div>
                            <h4>{step.title}</h4>
                            <span>{step.description}</span>
                        </div>

                        <span>{step.note}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
