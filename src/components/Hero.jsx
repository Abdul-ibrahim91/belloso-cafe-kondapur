import {
  BUSINESS,
  HERO_IMAGE,
  WA_ORDER,
  WA_RESERVE,
} from '../data.js'
import { StarIcon, WhatsAppIcon, ArrowIcon, SparkIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative z-10 overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* ---------------- Copy ---------------- */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.06] px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-amber-200/85 backdrop-blur-md sm:text-xs">
              <SparkIcon className="h-3 w-3 text-ember" />
              Kondapur&apos;s Premier Late-Night Cafe • Open till 2 AM
            </span>

            <h1 className="mt-5 font-serif text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.02em] text-amber-50 sm:text-5xl lg:text-[3.6rem]">
              Specialty Coffee,{' '}
              <span className="gold-text italic">Global Comfort Dishes</span> &amp;
              Late-Night Vibes.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-amber-100/60 sm:text-lg">
              From Strawberry Ube lattes and Mango French Toast to Pesto Pasta and
              Korean Fried Chicken—crafted fresh in Whitefields till 2:00&nbsp;AM.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WA_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-400 to-emberDeep px-6 py-3.5 text-[15px] font-bold text-[#231405] shadow-glow transition hover:brightness-110 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Order Direct on WhatsApp
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WA_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-amber-500/25 bg-white/[0.04] px-6 py-3.5 text-[15px] font-semibold text-amber-100/90 backdrop-blur-md transition hover:border-amber-400/45 hover:bg-white/[0.07] active:scale-[0.98]"
              >
                Book a Table on WhatsApp
              </a>
            </div>

            {/* Trust row */}
            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-amber-500/15 bg-amber-500/10 text-center">
              {[
                { k: `${BUSINESS.rating} ★`, v: `${BUSINESS.reviewCount} Google Reviews` },
                { k: '2:00 AM', v: 'Closing, Every Night' },
                { k: '0%', v: 'Platform Commission' },
              ].map((s) => (
                <div key={s.v} className="bg-obsidian/90 px-2 py-4">
                  <dt className="font-serif text-lg font-semibold text-ember sm:text-xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-amber-100/40 sm:text-[11px]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---------------- Visual ---------------- */}
          <div className="relative animate-fade-up [animation-delay:140ms]">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-ember/10 blur-3xl" />
            <figure className="relative overflow-hidden rounded-[1.75rem] border border-amber-500/20 shadow-card sm:rounded-[2rem]">
              <img
                src={HERO_IMAGE}
                alt="Artisanal brunch spread with latte art on a dark wooden table at Belloso Cafe"
                width="1400"
                height="1050"
                fetchPriority="high"
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />

              {/* Frosted social-proof card */}
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-amber-500/25 bg-roast/55 p-4 backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-5">
                <div className="flex items-center gap-1 text-ember">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  <span className="ml-2 font-serif text-lg font-semibold text-amber-50">
                    {BUSINESS.rating}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] font-medium leading-snug text-amber-100/70 sm:text-sm">
                  Rated by{' '}
                  <span className="text-amber-50">{BUSINESS.reviewCount} Guests</span> in
                  HITEC City &amp; Kondapur
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
