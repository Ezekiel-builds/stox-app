import { Link } from 'react-router-dom'
import StoxLogo from '../assets/Stox-logo.png'

export default function Header() {
    return (
        <header className="flex justify-evenly items-center p-3 bg-(--color-surface) mx-20 my-5 rounded-[999px] border-2 border-(--color-border-muted)">
            <div className="max-w-10">
                <Link to="/">
                    <img 
                    src={StoxLogo} 
                    alt="Stox Logo"
                    className="w-full object-contain"
                    />
                </Link>

            </div>

            <nav className="flex gap-4 text-(--color-neutral) font-(--font-body) text-[15px]">
              <a href="#features">Features</a> 
              <a href="#how-it-works">How It Works</a>
              <a href="#system-preview">System Preview</a>
              <a href="#FAQ">FAQ</a>
            </nav>

            <Link to="/signup" className="flex gap-2 bg-(--color-text) text-(--color-surface) text-5 py-2 px-6 rounded-[999px]">
                Get Started <i className="fi fi-rr-arrow-right relative top-1"></i>
            </Link>
        </header>
    )
}