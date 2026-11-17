import { BUSINESS, REVIEWS } from '../data.js'
import { StarIcon } from './Icons.jsx'

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative z-10 scroll-mt-20 border-y border-amber-500/10 bg-roast/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ember/80">
              Social Proof
            </span>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
              What Our Guests Say
            </h2>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/[0.07] px-3.5 py-2 text-[12px] font-semibold text-amber-200/85 backdrop-blur-md">
            <StarIcon className="h-3.5 w-3.5 text-ember" />
            Verified Google Reviews ({BUSINESS.rating} ★)
          </span>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="group relative flex flex-col rounded-2xl border border-amber-500/20 bg-[#17120E] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] sm:p-7"
            >
              <div className="flex gap-1 text-ember">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 font-serif text-[16.5px] italic leading-relaxed text-amber-50/85 sm:text-[17px]">
                “{r.quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-amber-500/10 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-amber-500/25 bg-amber-500/10 font-serif text-base font-semibold text-ember">
                  {r.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[14px] font-semibold text-amber-50">
                    {r.name}
                  </span>
                  <span className="block truncate text-[11.5px] font-medium uppercase tracking-[0.1em] text-amber-100/40">
                    {r.meta}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
