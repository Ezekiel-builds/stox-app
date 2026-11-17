const features = [
    {
        id: '01',
        title: 'Product organization',
        description: 'Keep product information organized in one place.',
        cardStyle: "md:col-span-2"
    },
    {
        id: '02',
        title: 'Inventory Management',
        description: 'Add products and manage their available quantities.',
        preview: (
            <div className="flex justify-between items-center bg-(--color-background) p-4 rounded-[16px]">
                <p className="text-base text-(--color-text)">Batch #204 Quantity</p>
                <div>
                    <i className="fi fi-rr-plus-small bg-(--color-surface) p-2 rounded-[8px] font-bold"></i>
                    <span className="text-2xl font-bold m-2">84</span>
                    <i className="fi fi-rr-minus-small bg-(--color-primary) p-2 rounded-[8px] font-bold"></i>
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
                <div className="flex justify-between bg-(--color-background) p-3 rounded-[12px]">
                    <span className="text-(--color-text) text-[1.2rem]">Espresso Cups</span>
                    <span className="text-(--color-text-label) text-[1.2rem]">
                        <i className="fi fi-rr-wifi-1"></i>In Stock(42)
                    </span>
                </div>

                <div className="flex justify-between bg-(--color-background) mt-4 p-3 rounded-[12px]">
                    <span className="text-(--color-text) text-[1.2rem]">Matte Saucer</span>
                    <span className="text-[1.2rem] text-[#F43F5E]">
                        <i className="w-5 h-5 fi fi-rr-wifi-1 text-(--color)"></i>Sold Out
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
        <div className={`feature__card flex flex-col gap-4 bg-(--color-surface) px-5 py-3 ${feature.cardStyle} border-1 border-(--color-background-main) rounded-[24px] shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-transform duration-200 cursor-pointer hover:-translate-y-1`}>
            <div className="card__header flex items-center gap-2">
                <span className="w-12 h-12 text-(--color-numbers) text-[20px] bg-(--color-numbers-background) p-4 rounded-[16px] flex items-center justify-center">{feature.id}</span>
                <h4 className="text-2xl font-bold">{feature.title}</h4>
            </div>

            <span className="text-[1.2rem] text-(--color-text-muted)">{feature.description}</span>
            {feature.preview && <div>{feature.preview}</div>}
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <section className="features flex flex-col ">
            <div className="features__header text-left mt-[120px] px-5">
                <span className="text-sm text-(--color-primary-dark) p-5)">CORE PLATFORM FEATURES</span>
                <h2 className="text-[2.5rem] text-(--color-text)">Everything your inventory needs.</h2>
                <span className="text-(--color-text-muted) text-base">One organised space to manage every product you sell.</span>
            </div>

            <div className="features__cards grid grid-cols-3 gap-4 px-4 mt-16">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    )
}
