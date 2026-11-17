const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const CoffeeIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M4 8h12v5a6 6 0 0 1-12 0z" />
    <path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" />
    <path d="M3 21h14" />
    <path d="M8 2.5c-.8 1 -.8 1.8 0 2.8M12 2.5c-.8 1 -.8 1.8 0 2.8" />
  </svg>
)

export const MoonIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
  </svg>
)

export const WifiIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M2.5 9a15 15 0 0 1 19 0" />
    <path d="M5.5 12.5a10.5 10.5 0 0 1 13 0" />
    <path d="M8.5 16a6 6 0 0 1 7 0" />
    <circle cx="12" cy="19.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24zm-2.6 4.1c-.17 0-.45.06-.69.31-.23.26-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.8 2.75 4.37 3.76 2.13.84 2.57.67 3.03.63.46-.04 1.49-.61 1.7-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.17-.49-.3-.26-.13-1.5-.74-1.74-.83-.23-.08-.4-.12-.57.13-.17.26-.65.83-.8 1-.15.17-.29.19-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.56-.43l-.47-.01z" />
  </svg>
)

export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M6.2 3.5h2.3l1.4 3.6-1.8 1.2a11.5 11.5 0 0 0 5.6 5.6l1.2-1.8 3.6 1.4v2.3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2z" />
  </svg>
)

export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 7.2V12l3.1 1.9" />
  </svg>
)

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
    <path d="m12 2.6 2.9 5.88 6.5.95-4.7 4.58 1.11 6.47L12 17.43l-5.81 3.05 1.11-6.47-4.7-4.58 6.5-.95L12 2.6z" />
  </svg>
)

export const PlusIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="2" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="2" {...p}>
    <path d="M5 12h14" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} strokeWidth="2" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

export const BagIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
    <path d="M5.5 8h13l-1 11.5a1.8 1.8 0 0 1-1.8 1.6H8.3a1.8 1.8 0 0 1-1.8-1.6z" />
    <path d="M9 8V6.4a3 3 0 0 1 6 0V8" />
  </svg>
)

export const SparkIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
    <path d="M12 2.5 13.7 9l6.5 1.7-6.5 1.7L12 19l-1.7-6.6L3.8 10.7 10.3 9 12 2.5z" />
  </svg>
)

export const ICON_MAP = { moon: MoonIcon, cup: CoffeeIcon, wifi: WifiIcon }
