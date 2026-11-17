import { EXPERIENCE } from '../data.js'
import { ICON_MAP } from './Icons.jsx'

export default function Experience() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
            The Belloso Experience
          </h2>
          <div className="hidden h-px flex-1 hairline sm:block" />
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {EXPERIENCE.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-[#17120E] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ember/10 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-amber-500/25 bg-amber-500/10 text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-amber-50">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-amber-100/55">
                  {item.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
