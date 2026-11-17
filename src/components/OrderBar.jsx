import { useEffect } from 'react'
import { BUSINESS, wa } from '../data.js'
import { BagIcon, CloseIcon, PlusIcon, MinusIcon, WhatsAppIcon } from './Icons.jsx'

const inr = (n) => `₹${n.toLocaleString('en-IN')}`

function buildMessage(lines, total) {
  const body = lines
    .map((l) => `• ${l.qty} × ${l.name} — ${inr(l.qty * l.price)}`)
    .join('\n')
  return [
    "Hi Belloso Cafe Kondapur! I'd like to place a direct order:",
    '',
    body,
    '',
    `Order Total: ${inr(total)}`,
    '',
    'Name: ',
    'Dine-In / Takeaway: ',
    'Preferred time: ',
  ].join('\n')
}

export default function OrderBar({ cart, add, remove, clear, open, setOpen }) {
  const lines = Object.values(cart)
  const count = lines.reduce((n, l) => n + l.qty, 0)
  const total = lines.reduce((n, l) => n + l.qty * l.price, 0)

  // Lock scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, setOpen])

  useEffect(() => {
    if (count === 0) setOpen(false)
  }, [count, setOpen])

  if (count === 0) return null

  const href = wa(buildMessage(lines, total))

  return (
    <>
      {/* ---------- Floating summary bar ---------- */}
      <div className="safe-bottom fixed inset-x-0 bottom-[72px] z-40 px-3 md:bottom-5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto flex w-full max-w-xl animate-slide-up items-center justify-between gap-3 rounded-2xl border border-amber-400/40 bg-roast/90 py-3 pl-4 pr-3 shadow-card backdrop-blur-xl transition hover:border-amber-400/60 active:scale-[0.99]"
        >
          <span className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-ember">
              <BagIcon className="h-[18px] w-[18px]" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-gradient-to-b from-amber-400 to-emberDeep px-1 text-[11px] font-bold text-[#231405]">
                {count}
              </span>
            </span>
            <span className="text-left leading-tight">
              <span className="block text-[13.5px] font-bold text-amber-50">
                View Order ({count} {count > 1 ? 'items' : 'item'})
              </span>
              <span className="block text-[11.5px] font-medium text-amber-100/50">
                {inr(total)} • Send to WhatsApp
              </span>
            </span>
          </span>
          <span className="rounded-xl bg-gradient-to-b from-amber-400 to-emberDeep px-4 py-2.5 text-[13px] font-bold text-[#231405]">
            Review
          </span>
        </button>
      </div>

      {/* ---------- Drawer ---------- */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Your WhatsApp order"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="safe-bottom relative flex max-h-[85dvh] w-full max-w-lg animate-slide-up flex-col overflow-hidden rounded-t-3xl border border-amber-500/25 bg-roast/95 backdrop-blur-xl sm:rounded-3xl">
            <header className="flex items-start justify-between gap-4 border-b border-amber-500/15 p-5">
              <div>
                <h2 className="font-serif text-xl font-semibold text-amber-50">
                  Your Order
                </h2>
                <p className="mt-1 text-[12.5px] text-amber-100/50">
                  Sent directly to {BUSINESS.phoneIntl} — zero platform commission.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close order summary"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-amber-500/20 text-amber-100/60 transition hover:border-amber-400/40 hover:text-amber-100"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </header>

            <ul className="flex-1 divide-y divide-amber-500/10 overflow-y-auto px-5">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center gap-3 py-4">
                  <img
                    src={l.image}
                    alt=""
                    loading="lazy"
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-serif text-[15px] font-semibold text-amber-50">
                      {l.name}
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-amber-100/50">
                      {inr(l.price)} each
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-amber-400/35 bg-amber-500/10 p-1">
                    <button
                      type="button"
                      onClick={() => remove(l.id)}
                      aria-label={`Remove one ${l.name}`}
                      className="grid h-7 w-7 place-items-center rounded-full text-ember transition hover:bg-amber-500/20 active:scale-90"
                    >
                      <MinusIcon className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm font-bold tabular-nums text-amber-100">
                      {l.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(l)}
                      aria-label={`Add one more ${l.name}`}
                      className="grid h-7 w-7 place-items-center rounded-full text-ember transition hover:bg-amber-500/20 active:scale-90"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-amber-500/15 p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-amber-100/45">
                  Total
                </span>
                <span className="font-serif text-2xl font-semibold text-ember">
                  {inr(total)}
                </span>
              </div>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-amber-400 to-emberDeep py-3.5 text-[15px] font-bold text-[#231405] shadow-glow transition hover:brightness-110 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Send Order on WhatsApp
              </a>

              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full py-1.5 text-[12.5px] font-medium text-amber-100/40 transition hover:text-amber-100/70"
              >
                Clear order
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
