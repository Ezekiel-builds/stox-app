const beforeItems = [
    'Products recorded across handwritten notebooks and faded post-it notes.',
    'Stock quantities difficult to track across multiple store locations or shelves.',
    'Uncertainty about product availability when a paying customer asks.',
    'Difficulty noticing low-stock products until shelves are completely bare.',
]

const afterItems = [
    'Every item catalogued in a single, high-clarity cloud compartment.',
    'Instant quantity adjustments with audit logs of who changed what.',
    'Definite stock availability visible to anyone on your staff in milliseconds.',
    'Automated low-stock threshold triggers that safeguard your margins.',
]

export default function TransformationSection() {
    return (
        <section className="transformation bg-surface">
            <div className="flex flex-col items-center gap-3 px-4 py-10 text-center md:px-12 md:py-16">
                <span className="text-xs md:text-sm text-primary-dark">
                    THE TRANSORMATION
                </span>

                <h2 className="text-[1.5rem] md:text-[2.5rem]">
                    From notebook chaos to mathematical calm.
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 px-4 pb-12 md:gap-8 md:px-10 md:pb-20 lg:grid-cols-2">
                
                    <div className="bg-surface-grey p-4 md:p-5 rounded-3xl overflow-hidden border border-border-muted">
                        <span className="text-sm bg-primary-label border border-[#FECDD3] text-[#BE123C] font-medium px-2 py-1 rounded-[999px]">BEFORE STOX</span>
                        <h4 className="text-[1.5rem] my-3">Scattered records & nervous guesswork</h4>

                        <div className="flex flex-col gap-6 md:gap-12">
                            {beforeItems.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span className="w-4 h-4 text-[#E11D48] text-center relative top-1 text-[8px] bg-[#FFE4E6] p-1 rounded-[50%]"><i className="fi fi-rr-x"></i></span>
                                    <p className="max-w-115">{item}</p>
                                </div>
                            ))}
                        </div>
                        <i className="hidden md:block relative bottom-107 left-116 z-0 text-[4rem] fi fi-rr-x text-label-muted"></i>
                    </div>

                    <div className="bg-surface-grey p-4 md:p-5 rounded-3xl overflow-hidden border border-border-muted">
                        <span className="text-sm bg-secondary-label border border-[#6EE7B7] text-numbers font-medium px-2 py-1 rounded-[999px]">AFTER STOX</span>
                        <h4 className="text-[1.5rem] my-3">One cohesive, peaceful inventory space</h4>

                        <div className="flex flex-col gap-6 md:gap-12"> 
                            {afterItems.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <span className="w-4 h-4 text-surface text-center relative top-1 text-[8px] bg-[#10B981] p-1 rounded-[50%]"><i className="fi fi-rr-check"></i></span>
                                    <p className="max-w-115">{item}</p>
                                </div>
                            ))}
                        </div>
                        <i className="hidden md:block relative bottom-107 left-116 z-0 text-[4rem] text-label-mute fi fi-rr-check"></i>
                    </div>
            </div>
        </section>
    )
}
