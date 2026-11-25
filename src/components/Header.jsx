import { Link } from 'react-router-dom'
import StoxLogo from '../assets/Stox-logo.png'

export default function Header() {
    return (
        <header className="flex justify-between md:justify-evenly items-center p-3 bg-surface mx-4 md:mx-20 my-5 rounded-[999px] border-2 border-border-muted">
            <div className="w-8 md:w-10 shrink-0">
                <Link to="/" className="flex items-center gap-2">
                    <img 
                    src={StoxLogo} 
                    alt="Stox Logo"
                    className="object-contain bg-text rounded-lg"
                    />

                    <div className="text-2xl font-bold">
                        ST<span className="text-[#10B981]">oX</span>
                    </div>
                </Link>

            </div>

            <nav className="hidden lg:flex gap-4 text-neutral font-body text-[15px]">
              <a href="#features">Features</a> 
              <a href="#how-it-works">How It Works</a>
              <a href="#system-preview">System Preview</a>
              <a href="#FAQ">FAQ</a>
            </nav>

            <Link to="/signup" className="flex gap-2 items-center bg-text text-surface text-sm md:text-base py-2 px-3 md:px-6 rounded-[999px] whitespace-nowrap">
                <span className="sm:inline">Get Started</span>
                <i className="fi fi-rr-arrow-right"></i>
            </Link>
        </header>
    )
}
