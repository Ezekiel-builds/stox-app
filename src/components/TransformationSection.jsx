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
        <section className="transformation">
            <div>
                <div>
                    <span>BEFORE STOX</span>
                    <h4>Scattered records & nervous guesswork</h4>

                    <div>
                        {beforeItems.map((item, index) => (
                            <div key={index}>
                                <span><i className="fi fi-rr-x"></i></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <span>AFTER STOX</span>
                    <h4>One cohesive, peaceful inventory space</h4>

                    <div>
                        {afterItems.map((item, index) => (
                            <div key={index}>
                                <span><i className="fi fi-rr-check"></i></span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
