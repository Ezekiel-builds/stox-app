import { Link } from 'react-router-dom'
import Header from './Header'
import HeroImg from '../assets/Hero-img.png'

export default function Main() {
    return (
        <main>
            <Header/>

            <div className="hero flex flex-col justify-center items-center gap-6 my-30">
{/*                 <span className="w-50 h-50"></span> */}
                <h1 className="hero__header max-w-[820px] text-[5rem] text-center">
                    Your <span className="italic font-light">inventory. Your space.</span> Your control.
                </h1>

                <p className="hero__text max-w-[720px] text-center text-(--color-text-muted) text-base">
                    STox helps you organize your products, track accurate stock quantities,
                    and stay in complete control of warehouse flow all in one calm,
                    structured space.
                </p>

                <div className="hero__btns flex gap-8 my-4">
                    <Link 
                    to="/signup"
                    className="flex gap-2 bg-(--color-text) text-(--color-surface) py-3 px-8 rounded-[999px]"
                    >
                        Get Started with STox <i className="fi fi-rr-arrow-right relative top-1"></i>
                    </Link>

                    <a 
                    href="#features"
                    className="flex gap-2 bg-(--color-surface) rounded-[999px] border-1 border-(--color-border-muted) py-3 px-7 hover:bg-[#E3E2E2] transition-all duration-300 hover:border-(--color-border) hover:text-(--color-text)"
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
            </div>
        </main>
    )
}