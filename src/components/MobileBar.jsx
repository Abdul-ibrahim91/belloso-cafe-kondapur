import { BUSINESS, WA_ORDER } from '../data.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export default function MobileBar() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-amber-500/20 bg-obsidian/85 px-3 py-2.5 backdrop-blur-xl md:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={BUSINESS.tel}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/25 bg-white/[0.04] py-3 text-[14px] font-semibold text-amber-100/90 active:scale-[0.98]"
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
          Call Cafe
        </a>
        <a
          href={WA_ORDER}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.6] items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-400 to-emberDeep py-3 text-[14px] font-bold text-[#231405] shadow-glow active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Order / Reserve
        </a>
      </div>
    </div>
  )
}
