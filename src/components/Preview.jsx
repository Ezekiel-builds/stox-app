import DashBoardPreview from '../assets/Dashboard-preview.png'

export default function Preview() {
    return (
        <div id="system-preview" className="flex flex-col items-center justify-center gap-10 bg-surface px-4 py-20 md:gap-16">
            <div className="flex flex-col items-center gap-3 text-center">
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

            <div className="w-full max-w-3xl">
                <img src={DashBoardPreview} alt="Dashboard preview" className="w-full" />
            </div>
        </div>
    )
}