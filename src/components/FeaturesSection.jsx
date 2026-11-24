const features = [
    {
        id: '01',
        title: 'Product organization',
        description: 'Keep product information organized in one place.',
        cardStyle: "md:col-span-2",
        preview: (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center p-2 bg-background border border-background-main rounded-2xl">
                <div className="bg-surface px-3 sm:px-4 py-2 border border-background-main rounded-2xl">
                    <span className="feature__eyebrow">
                        SKU FORMAT
                    </span>
                    
                    <p className="tex-[0.7rem] font-medium">
                        STX-VNTG-01
                    </p>
                </div>

                <div className="bg-surface px-3 sm:px-4 py-2 border border-background-main rounded-2xl">
                    <span className="feature__eyebrow">
                        CATEGORY
                    </span>
                    
                    <p className="tex-[0.7rem] font-medium">
                        Tableware
                    </p>
                </div>

                <div className="bg-surface px-3 sm:px-4 py-2 border border-background-main rounded-2xl">
                    <span className="feature__eyebrow">
                        AVAILABLE
                    </span>
                    
                    <p className="tex-[0.7rem] font-medium">
                        28 Units
                    </p>
                </div>
            </div>
        )
    },
    {
        id: '02',
        title: 'Inventory Management',
        description: 'Add products and manage their available quantities.',
        preview: (
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center bg-background p-4 rounded-2xl">
                <p className="text-sm sm:text-base text-text">Batch #204 Quantity</p>
                <div className="flex items-center justify-end">
                    <i className="fi fi-rr-plus-small bg-surface p-2 rounded-2 font-bold border border-border-muted"></i>
                    <span className="text-base font-bold m-2">84</span>
                    <i className="fi fi-rr-minus-small bg-(--color-primary) p-2 rounded-2 font-bold"></i>
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
                <div className="flex flex-col sm:flex-row gap-1 sm:justify-between sm:items-center bg-background p-3 rounded-2xl">
                    <span className="text-text text-sm sm:text-base">Espresso Cups</span>
                    <span className="text-(--color-text-label) text-sm">
                        <i className="fi fi-rr-wifi-1"></i>In Stock(42)
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-1 sm:justify-between sm:items-center bg-background mt-3 p-3 rounded-2xl">
                    <span className="text-text text-sm sm:text-base">Matte Saucer</span>
                    <span className="text-sm text-[#F43F5E]">
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
            <div className="bg-box-surface p-5 border border-border-box rounded-2xl">
                {/* <span className="ball w-[50px] h-[50px] rounded-[50%] bg-(--color-warning)"></span> */}
                <span className="text-primary-brown text-base">
                    Threshold reached: {'<'} 5 items remaining
                </span>
            </div>
        ),
    },
]

function FeatureCard({ feature }) {
    return (
        <div className={`feature__card flex flex-col gap-4 bg-surface px-4 md:px-5 py-5 md:py-3 ${feature.cardStyle} border  border-background-main rounded-3xl shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition duration-200 cursor-pointer hover:-translate-y-1 hover:border hover:border-green-400`}>
            <div className="card__header flex items-center gap-2">
                <span className="w-12 h-12 text-numbers text-[20px] bg-numbers-background p-4 rounded-2xl flex items-center justify-center">{feature.id}</span>
                <h4 className="text-xl md:text-2xl font-bold">{feature.title}</h4>
            </div>

            <span className="text-base text-(--color-text-muted)">{feature.description}</span>
            {feature.preview && <div>{feature.preview}</div>}
        </div>
    )
}

export default function FeaturesSection() {
    return (
        <section id="features" className="features flex justify-center flex-col mt-16 md:mt-30">
            <div className="features__header text-center md:text-left px-5">
                <span className="text-sm text-primary-dark p-5">CORE PLATFORM FEATURES</span>
                <h2 className="text-3xl md:text-[2.5rem] text-text leading-tight">Everything your inventory needs.</h2>
                <span className="text-(--color-text-muted) text-base">One organised space to manage every product you sell.</span>
            </div>

            <div className="features__cards grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-6 mt-12">
                {features.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    )
}
