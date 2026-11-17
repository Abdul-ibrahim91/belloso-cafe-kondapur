import { BUSINESS, WA_ORDER } from '../data.js'
import { CoffeeIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-amber-500/10 pb-28 pt-12 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-transparent">
                <CoffeeIcon className="h-5 w-5 text-ember" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-xl font-semibold text-amber-50">
                  {BUSINESS.name}
                </span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-amber-200/45">
                  {BUSINESS.locality}
                </span>
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-amber-100/45">
              {BUSINESS.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-[14px] font-medium text-amber-100/55">
            <a href="#menu" className="transition hover:text-amber-100">
              Signature Menu
            </a>
            <a href="#reviews" className="transition hover:text-amber-100">
              Guest Reviews
            </a>
            <a href="#visit" className="transition hover:text-amber-100">
              Location &amp; Hours
            </a>
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-amber-100"
            >
              Order on WhatsApp
            </a>
          </nav>

          <div className="text-[13.5px] leading-relaxed text-amber-100/45">
            <p className="font-semibold text-amber-100/75">{BUSINESS.hours}</p>
            <p className="mt-2 max-w-[16rem]">{BUSINESS.addressShort}</p>
            <a
              href={BUSINESS.tel}
              className="mt-2 inline-block font-semibold text-ember transition hover:text-amber-300"
            >
              {BUSINESS.phoneIntl}
            </a>
          </div>
        </div>

        <div className="mt-10 h-px hairline" />

        <p className="mt-6 text-center text-[12px] text-amber-100/30">
          © {new Date().getFullYear()} {BUSINESS.name}, Whitefields · HITEC City ·
          Kondapur, Hyderabad. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
