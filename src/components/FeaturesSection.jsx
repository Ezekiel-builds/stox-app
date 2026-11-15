const features = [
    {
        id: '01',
        title: 'Product organization',
        description: 'Keep product information organized in one place',
    },
    {
        id: '02',
        title: 'Inventory Management',
        description: 'Add products and manage their available quantities.',
        preview: (
            <div>
                <p>Batch #204 Quantity</p>
                <div>
                    <i className="fi fi-rr-plus-small"></i>
                    <span>84</span>
                    <i className="fi fi-rr-minus-small"></i>
                </div>
            </div>
        ),
    },
    {
        id: '03',
        title: 'Stock Availability',
        description: 'See which products are available and which are out of stock.',
        preview: (
            <div>
                <div>
                    <span>Espresso Cups</span>
                    <span>
                        <i className="fi fi-rr-wifi-1"></i> In Stock(42)
                    </span>
                </div>

                <div>
                    <span>Matte Saucer</span>
                    <span>
                        <i className="fi fi-rr-wifi-1"></i> Sold Out
                    </span>
                </div>
            </div>
        ),
    },
    {
        id: '04',
        title: 'Low-Stock Alerts',
        description: 'Know when products are running low.',
        preview: (
            <div>
                <span></span>
                <span>Threshold reached: {'<'} 5 items remaining</span>
            </div>
        ),
    },
]

function FeatureCard({ feature }) {
    return (
        <div className="feature__card">
            <div className="card__header">
                <span>{feature.id}</span>
                <p>{feature.title}</p>
            </div>

            <span>{feature.description}</span>
            {feature.preview && <div>{feature.preview}</div>}
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <section className="features">
            <div className="features__header">
                <span>CORE PLATFORM FEATURES</span>
                <h2 className="text-[2rem]">Everything your inventory needs.</h2>
                <span className="text-(--color-text-muted)">One organised space to manage every product you sell.</span>
            </div>

            <div className="features__cards">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    )
}
