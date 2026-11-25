import { useState } from 'react'
import { Link } from 'react-router-dom'
import StoxLogo from '../assets/Stox-logo.png'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={`mx-4 my-4 flex flex-wrap items-center justify-between gap-x-4 border-2 border-border-muted bg-surface p-3 md:mx-8 md:my-5 lg:mx-20 ${isMenuOpen ? 'rounded-2xl' : 'rounded-[999px]'}`}>
            <div className="flex min-w-0 items-center gap-2">
                <Link to="/" className="flex min-w-0 items-center gap-2">
                    <img 
                    src={StoxLogo} 
                    alt="Stox Logo"
                    className="h-9 w-9 shrink-0 rounded-lg bg-text object-contain"
                    />

                    <div className="text-xl font-bold md:text-2xl">
                        ST<span className="text-[#10B981]">oX</span>
                    </div>
                </Link>
            </div>

            <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text lg:hidden"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
            >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    {isMenuOpen
                        ? <path d="M6 6l12 12M18 6L6 18" />
                        : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
            </button>

            <nav
                id="primary-navigation"
                aria-label="Main navigation"
                className={`${isMenuOpen ? 'flex' : 'hidden'} order-3 mt-3 w-full flex-col gap-2 border-t border-border-muted pt-3 text-text lg:order-none lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:pt-0 lg:text-neutral`}
            >
                <a className="rounded-lg px-3 py-2 lg:px-0 lg:py-0" href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
                <a className="rounded-lg px-3 py-2 lg:px-0 lg:py-0" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                <a className="rounded-lg px-3 py-2 lg:px-0 lg:py-0" href="#system-preview" onClick={() => setIsMenuOpen(false)}>System Preview</a>
                <a className="rounded-lg px-3 py-2 lg:px-0 lg:py-0" href="#FAQ" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-text px-5 py-3 text-sm text-surface lg:hidden">
                    Get Started <i className="fi fi-rr-arrow-right"></i>
                </Link>
            </nav>

            <Link to="/signup" className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-text px-4 py-2 text-sm text-surface lg:flex lg:px-6 lg:text-base">
                <span className="sm:inline">Get Started</span>
                <i className="fi fi-rr-arrow-right"></i>
            </Link>
        </header>
    )
}
