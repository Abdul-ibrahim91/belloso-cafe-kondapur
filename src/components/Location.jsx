import { AMBIANCE_IMAGE, BUSINESS, WA_RESERVE } from '../data.js'
import { ClockIcon, PinIcon, PhoneIcon, ArrowIcon, WhatsAppIcon } from './Icons.jsx'

export default function Location() {
  return (
    <section id="visit" className="relative z-10 scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-amber-500/20 bg-roast/60 backdrop-blur-md">
          <div className="grid lg:grid-cols-2">
            {/* Ambiance */}
            <div className="relative order-1 min-h-[220px] lg:order-2 lg:min-h-full">
              <img
                src={AMBIANCE_IMAGE}
                alt="Warm, dimly lit interior of Belloso Cafe with dark wood and ambient lighting"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roast via-roast/30 to-transparent lg:bg-gradient-to-r lg:from-roast lg:via-roast/20 lg:to-transparent" />
              <span className="absolute bottom-4 right-4 rounded-full border border-amber-400/25 bg-obsidian/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-200/80 backdrop-blur-md">
                Late-night seating
              </span>
            </div>

            {/* Details */}
            <div className="order-2 p-6 sm:p-9 lg:order-1 lg:p-11">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ember/80">
                Visit Us
              </span>
              <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
                Find us in Whitefields, Kondapur.
              </h2>

              <dl className="mt-7 space-y-5">
                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-ember">
                    <PinIcon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100/40">
                      Address
                    </dt>
                    <dd className="mt-1 text-[14.5px] leading-relaxed text-amber-50/85">
                      {BUSINESS.address}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-ember">
                    <ClockIcon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100/40">
                      Hours
                    </dt>
                    <dd className="mt-1 text-[14.5px] leading-relaxed text-amber-50/85">
                      {BUSINESS.hours}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-ember">
                    <PhoneIcon className="h-[18px] w-[18px]" />
                  </span>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100/40">
                      Phone &amp; WhatsApp
                    </dt>
                    <dd className="mt-1 text-[14.5px] leading-relaxed text-amber-50/85">
                      {BUSINESS.phoneIntl}
                    </dd>
                  </div>
                </div>
              </dl>

              {/* Service modes */}
              <ul className="mt-7 flex flex-wrap gap-2">
                {BUSINESS.serviceModes.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-amber-500/20 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-amber-100/65"
                  >
                    {m}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BUSINESS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-400 to-emberDeep px-5 py-3.5 text-[14.5px] font-bold text-[#231405] shadow-glow transition hover:brightness-110 active:scale-[0.98]"
                >
                  Open Directions in Google Maps
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={BUSINESS.tel}
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full border border-amber-500/25 bg-white/[0.04] px-5 py-3.5 text-[14.5px] font-semibold text-amber-100/90 backdrop-blur-md transition hover:border-amber-400/45 hover:bg-white/[0.07] active:scale-[0.98]"
                >
                  <PhoneIcon className="h-[18px] w-[18px]" />
                  Call Cafe: {BUSINESS.phoneDisplay}
                </a>
              </div>

              <a
                href={WA_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-5 py-3.5 text-[14.5px] font-semibold text-emerald-100/90 backdrop-blur-md transition hover:border-emerald-400/45 hover:bg-emerald-400/[0.12] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Reserve a Table on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
