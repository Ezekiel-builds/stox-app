import DashBoardPreview from '../assets/Dashboard-preview.png'

export default function Preview() {
    return (
        <div id="system-preview" className="flex flex-col justify-center items-center bg-surface px-4">
            <div className="text-center mt-16 md:mt-30">
                <span className="text-primary-dark font-(--font-heading) text-sm">
                    SYSTEM PREVIEW
                </span>

                <h2 className="text-[2rem] text-text">
                    Designed for absolute clarity.
                </h2>

                <span className="text-base text-text-muted">
                    A glimpse into the daily cockpit that keeps hundreds of boutique retailers organized.
                </span>
            </div>

            <div className="w-full max-w-3xl mt-10 md:mt-16">
                <img src={DashBoardPreview} alt="Dashboard preview" className="w-full" />
            </div>
        </div>
    )
}