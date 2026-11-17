import { useEffect, useState } from 'react'
import { BUSINESS, WA_ORDER } from '../data.js'
import { CoffeeIcon } from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-amber-500/15 bg-obsidian/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#top" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-transparent sm:h-10 sm:w-10">
            <CoffeeIcon className="h-[18px] w-[18px] text-ember sm:h-5 sm:w-5" />
            <span className="absolute inset-0 rounded-xl shadow-glow" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-serif text-[17px] font-semibold tracking-tight text-amber-50 sm:text-xl">
              {BUSINESS.name}
            </span>
            <span className="mt-1 block truncate text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200/45 sm:text-[11px]">
              {BUSINESS.locality}
            </span>
          </span>
        </a>

        {/* Right cluster */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <span className="hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-emerald-200/90 backdrop-blur-md sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open till 2&nbsp;AM
          </span>

          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-b from-amber-400 to-emberDeep px-4 py-2 text-[13px] font-bold text-[#231405] shadow-glow transition hover:brightness-110 active:scale-[0.97] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Order <span className="hidden xs:inline">/ Reserve</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
