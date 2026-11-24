import { Link } from 'react-router-dom'
import HeroImg from '../assets/Hero-img.png'

export default function HeroSection() {
    return (
        <section className=" w-screen hero flex flex-col justify-center items-center gap-5 md:gap-6 px-5 sm:px-8">
            <h1 className="hero__header max-w-[820px] text-[2.8rem] sm:text-6xl md:text-[5rem] text-center leading-[1.05]">
                Your <span className="italic font-extralight">inventory. Your space.</span> Your control.
            </h1>

            <p className="hero__text max-w-[720px] text-center text-text-muted text-base px-2">
                STox helps you organize your products, track accurate stock quantities,
                and stay in complete control of warehouse flow all in one calm,
                structured space.
            </p>

            <div className="hero__btns flex flex-col sm:flex-row gap-3 sm:gap-8 my-4 w-full sm:w-auto">
                <Link
                    to="/signup"
                    className="flex justify-center gap-2 items-center bg-text text-surface py-3 px-6 sm:px-8 rounded-[999px]"
                >
                    Get Started with STox <i className="fi fi-rr-arrow-right relative top-1"></i>
                </Link>

                <a
                    href="#features"
                    className="flex justify-center gap-2 items-center bg-surface rounded-[999px] border border-border-muted py-3 px-7 hover:bg-[#E3E2E2] transition-all duration-300 hover:border-border hover:text-text"
                >
                    Explore Features
                </a>
            </div>

            <div className="hero__img max-w-[820px]">
                <img
                    src={HeroImg}
                    alt="3D Modular Storage Visual Box Component"
                    className="w-full object-contain"
                />
            </div>
        </section>
    )
}
