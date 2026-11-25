import { Link } from "react-router-dom";
import { useState } from "react";
import StoxLogo from "../assets/Stox-logo.png";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <section className="flex min-h-screen w-full bg-[#F7F6F2] text-[#151515]">
      {/* LEFT COLUMN: Top Nav + Onboarding Form */}
      <div className="flex w-full flex-col justify-between px-6 py-8 sm:px-12 lg:w-[55%] lg:px-16 lg:py-11">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={StoxLogo}
              alt="Stox Logo"
              className="h-8 w-8 rounded-lg bg-[#151515] object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              ST<span className="text-[#10B981]">oX</span>
            </span>
          </Link>

          <div className="flex items-center gap-5 text-xs">
            <span className="font-mono tracking-widest text-[#777777]">
              01 / 02
            </span>
            <Link
              to="/login"
              className="font-medium text-[#151515] underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Center Form Container */}
        <div className="mx-auto my-12 w-full max-w-[400px]">
          <div className="mb-8">
            <h1
              className="text-4xl leading-[1.12] tracking-tight text-[#151515] sm:text-[42px]"
              style={{
                fontFamily: "'Instrument Serif', 'Fraunces', Georgia, serif",
              }}
            >
              Open your inventory space.
            </h1>
            <p className="mt-2.5 text-sm text-[#777777]">
              One calm place for everything you sell.
            </p>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#E2E0D8] bg-white px-5 py-3 text-sm font-medium text-[#151515] transition-colors hover:border-[#151515]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Editorial Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-[1px] flex-1 bg-[#E5E3DA]" />
            <span className="text-[11px] tracking-wider text-[#888888] uppercase">
              or register with email
            </span>
            <div className="h-[1px] flex-1 bg-[#E5E3DA]" />
          </div>

          {/* Email & Password Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] font-semibold tracking-[0.16em] text-[#555555] uppercase"
              >
                Work or Store Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="ella@ateliercraft.co"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-[#E2E0D8] bg-white px-4 py-3 text-sm text-[#151515] placeholder-[#A3A3A3] transition-colors focus:border-[#151515] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-[10px] font-semibold tracking-[0.16em] text-[#555555] uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="•••••••••"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-[#E2E0D8] bg-white px-4 py-3 text-sm text-[#151515] placeholder-[#A3A3A3] transition-colors focus:border-[#151515] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#151515] px-6 py-3.5 text-sm font-medium text-[#F7F6F2] transition-colors hover:bg-[#262626]"
            >
              <span>Continue</span>
              <i className="fi fi-rr-arrow-right text-xs" />
            </button>
          </form>
        </div>

        {/* Bottom Subtle Footer */}
        <p className="text-[11px] text-[#888888]">
          © {new Date().getFullYear()} STox. All rights reserved.
        </p>
      </div>

      {/* RIGHT COLUMN: Architectural Box Illustration (Hidden on Mobile/Tablet, Shown on Desktop) */}
      <aside className="hidden min-h-screen flex-col justify-between border-l border-[#E6E3DA] bg-[#F4F2EC] px-10 py-11 text-[#151515] select-none lg:flex lg:w-[45%] xl:px-14">
        {/* Top Meta Header */}
        <header className="flex items-center justify-between text-[11px] tracking-[0.18em] text-[#777777]">
          <span className="font-mono uppercase">
            ARCHIVE TIER <span className="mx-1 text-[#A3A3A3]">•</span> SEC. 04
          </span>

          <div className="flex items-center gap-2 tracking-normal text-[#666666]">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <span className="text-xs font-medium">Stockroom Equilibrium</span>
          </div>
        </header>

        {/* Center Architectural Box Stack Illustration */}
        <div className="my-10 flex items-center justify-center">
          <div className="relative flex w-full max-w-[360px] flex-col items-center rounded-[28px] bg-gradient-to-b from-[#FAF9F6]/90 to-[#ECEAE2]/50 px-6 py-10">
            <div className="pointer-events-none absolute inset-y-8 left-11 border-l border-dashed border-[#DFDDD4]" />
            <div className="pointer-events-none absolute inset-y-8 right-11 border-r border-dashed border-[#DFDDD4]" />
            <div className="pointer-events-none absolute top-[57%] right-7 left-7 border-t border-[#E5E3DA]" />

            <div className="pointer-events-none absolute top-24 left-8 flex flex-col items-center">
              <div className="flex flex-col gap-3">
                <span className="h-[1.5px] w-2 bg-[#A8A69E]" />
                <span className="h-[1.5px] w-1.5 bg-[#BDBBB3]" />
                <span className="h-[1.5px] w-2.5 bg-[#8E8C84]" />
                <span className="h-[1.5px] w-1.5 bg-[#BDBBB3]" />
                <span className="h-[1.5px] w-2 bg-[#A8A69E]" />
              </div>
              <span className="mt-7 -rotate-90 text-[8px] tracking-[0.22em] text-[#9A9890] uppercase">
                EQUILIBRIUM
              </span>
            </div>

            {/* 1. Top Dark Box */}
            <div className="relative z-10 ml-12 w-52.5 overflow-hidden rounded-xl bg-[#141414] shadow-sm">
              <div className="h-5 border-b border-white/10" />
              <div className="flex h-18.5 items-center justify-center">
                <div className="relative flex items-baseline">
                  <svg
                    viewBox="0 0 44 52"
                    className="h-11 w-9 text-background"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.4"
                    strokeLinecap="round"
                  >
                    <path d="M32 13C30 8.5 25.5 6.5 20.5 6.5C14 6.5 9.5 10.2 9.5 15.5C9.5 21.5 15 23.5 21.5 25.5C28 27.5 33.5 30 33.5 36.5C33.5 42.5 28 46 20.5 46C14.5 46 9.8 43.2 8 38.5" />
                  </svg>
                  <span className="absolute -top-0.5 -right-2 h-2 w-2 rounded-full bg-[#10B981]" />
                  <span className="ml-1.5 text-[7px] font-medium tracking-[0.16em] text-[#8E8E8E] uppercase">
                    READY
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Middle Soft-Sage Box */}
            <div className="relative z-20 mt-2.5 mr-7 w-44.5 overflow-hidden rounded-xl border-[1.5px] border-[#151515] bg-[#DCEBE2]">
              <div className="h-4 border-b border-text/20" />
              <div className="flex h-13.5 items-center justify-between px-4">
                <span className="rounded bg-white px-2.5 py-1 text-[8px] font-semibold tracking-[0.12em] text-[#151515] uppercase shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  BATCH #804
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              </div>
            </div>

            {/* 3. Bottom Crisp White Box */}
            <div className="relative z-10 mt-2.5 w-65.5 overflow-hidden rounded-xl border-[1.5px] border-[#151515] bg-white">
              <div className="h-6 border-b border-[#E8E6DF]" />
              <div className="px-5 pt-4 pb-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-[#F4F3EE] px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-[#222222] uppercase">
                    TIER 01 / CERAMICS
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-0.5 w-full rounded-full bg-[#F1F0EB]" />
                  <div className="h-0.5 w-2/3 rounded-full bg-[#F1F0EB]" />
                </div>
              </div>
            </div>

            {/* 4. Shelf Platform & Legs */}
            <div className="mt-1.5 flex w-70.5 flex-col items-center">
              <div className="h-1.25 w-full rounded-xs bg-[#181818]" />
              <div className="flex w-full justify-between px-6">
                <div className="h-4 w-2 bg-[#8A8A88]" />
                <div className="h-4 w-2 bg-[#8A8A88]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Quote */}
        <footer className="border-t border-[#E6E3DA] pt-6">
          <blockquote
            className="text-[26px] leading-[1.2] italic tracking-tight text-[#151515] xl:text-[30px]"
            style={{
              fontFamily: "'Instrument Serif', 'Fraunces', Georgia, serif",
            }}
          >
            “Every object accounted for. Every shelf in calm.”
          </blockquote>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#777777]">
            A dedicated inventory sanctuary for independent boutiques, craft
            makers, and studios worldwide.
          </p>
        </footer>
      </aside>
    </section>
  );
}