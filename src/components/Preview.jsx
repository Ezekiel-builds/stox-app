import DashBoardPreview from '../assets/Dashboard-preview.png'

export default function Preview() {
    return (
        <div className="">
            <div className="">
                <span className="">
                    SYSTEM PREVIEW
                </span>

                <h2 className="">
                    Designed for absolute clarity.
                </h2>

                <span className="">
                    A glimpse into the daily cockpit that keeps hundreds of boutique retailers organized.
                </span>
            </div>

            <div className="">
                <img src={DashBoardPreview} alt="Dashboard preview" />
            </div>
        </div>
    )
}