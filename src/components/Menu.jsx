import { useMemo, useState } from 'react'
import { CATEGORIES, MENU } from '../data.js'
import { PlusIcon, MinusIcon } from './Icons.jsx'

function QtyStepper({ qty, onAdd, onRemove, name }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/10 p-1">
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove one ${name}`}
        className="grid h-7 w-7 place-items-center rounded-full text-ember transition hover:bg-amber-500/20 active:scale-90"
      >
        <MinusIcon className="h-3.5 w-3.5" />
      </button>
      <span
        aria-live="polite"
        className="min-w-[1.5rem] text-center text-sm font-bold tabular-nums text-amber-100"
      >
        {qty}
      </span>
      <button
        type="button"
        onClick={onAdd}
        aria-label={`Add one more ${name}`}
        className="grid h-7 w-7 place-items-center rounded-full text-ember transition hover:bg-amber-500/20 active:scale-90"
      >
        <PlusIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}

export default function Menu({ cart, add, remove }) {
  const [active, setActive] = useState('all')

  const items = useMemo(
    () => (active === 'all' ? MENU : MENU.filter((m) => m.category === active)),
    [active]
  )

  return (
    <section id="menu" className="relative z-10 scroll-mt-20 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ember/80">
            Signature Menu
          </span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
            Build your order, send it straight to our counter.
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-amber-100/55 sm:text-base">
            Tap <span className="text-amber-200/90">+ Add to WhatsApp Order</span> on
            anything you like. We&apos;ll receive it on WhatsApp — no apps, no platform
            commission.
          </p>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {CATEGORIES.map((c) => {
            const on = c.id === active
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(c.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold transition sm:text-sm ${
                  on
                    ? 'border-amber-400/60 bg-gradient-to-b from-amber-400 to-emberDeep text-[#231405] shadow-glow'
                    : 'border-amber-500/20 bg-white/[0.03] text-amber-100/65 backdrop-blur-md hover:border-amber-400/40 hover:text-amber-100'
                }`}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-7 grid gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => {
            const qty = cart[item.id]?.qty ?? 0
            return (
              <article
                key={item.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-500/20 bg-[#17120E] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width="900"
                    height="563"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roast via-roast/15 to-transparent" />
                  {item.badge && (
                    <span className="absolute left-3 top-3 rounded-full border border-amber-400/30 bg-obsidian/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ember backdrop-blur-md">
                      {item.badge}
                    </span>
                  )}
                  {qty > 0 && (
                    <span className="absolute right-3 top-3 grid h-7 min-w-7 place-items-center rounded-full bg-gradient-to-b from-amber-400 to-emberDeep px-2 text-xs font-bold text-[#231405] shadow-glow">
                      {qty}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg font-semibold leading-snug text-amber-50">
                      {item.name}
                    </h3>
                    <span className="shrink-0 font-serif text-lg font-semibold text-ember">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-amber-100/50">
                    {item.description}
                  </p>

                  <div className="mt-5">
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => add(item)}
                        className="w-full rounded-full border border-amber-400/35 bg-amber-500/10 py-2.5 text-[13.5px] font-bold text-amber-100 transition hover:border-amber-400/60 hover:bg-amber-500/20 active:scale-[0.98]"
                      >
                        + Add to WhatsApp Order
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[13px] font-medium text-amber-100/55">
                          In your order
                        </span>
                        <QtyStepper
                          qty={qty}
                          name={item.name}
                          onAdd={() => add(item)}
                          onRemove={() => remove(item.id)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
