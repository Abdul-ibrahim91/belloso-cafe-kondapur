# Belloso Cafe — Kondapur

Single-page marketing site for **Belloso Cafe**, Whitefields / HITEC City, Kondapur,
Hyderabad. React + Vite + Tailwind CSS, mobile-first, "Obsidian Espresso" dark theme.

## Running it

```bash
npm install
npm run dev:static   # watch + serve at http://localhost:5173
```

> **Why `dev:static` and not `dev`?**
> This folder's name contains `#` (`belloso cafe #4`). Vite's dev server builds
> internal module ids as URLs, where `#` starts a fragment, so `npm run dev`
> fails with `Failed to load url /src/main.jsx`. `npm run dev:static` runs
> `vite build --watch` next to `vite preview`, which works in place — edits are
> rebuilt automatically, you just refresh the browser instead of getting HMR.
>
> Rename the folder to drop the `#` (e.g. `belloso-cafe-4`) and plain
> `npm run dev` with full HMR works again.

Other scripts:

```bash
npm run build     # production bundle into dist/
npm run preview   # serve dist/
```

## Structure

| File | What's in it |
| --- | --- |
| `src/data.js` | All business data: address, hours, phone, WhatsApp links, menu, reviews, image URLs |
| `src/components/Navbar.jsx` | Sticky glass navbar, live "Open till 2 AM" badge |
| `src/components/Hero.jsx` | Cinematic hero, dual WhatsApp CTAs, frosted rating card |
| `src/components/Experience.jsx` | "The Belloso Experience" three-card strip |
| `src/components/Menu.jsx` | Category tabs + dish cards with add-to-order |
| `src/components/OrderBar.jsx` | Floating order bar + drawer; formats and sends the WhatsApp order |
| `src/components/Reviews.jsx` | Google review quotes |
| `src/components/Location.jsx` | Address, hours, directions, call, reservation |
| `src/components/MobileBar.jsx` | Sticky mobile Call / Order bar |

### Editing the menu

Everything the page renders comes from `src/data.js`. Add a dish by appending to
`MENU` with a `category` matching one of the ids in `CATEGORIES`; prices are
plain numbers in rupees.

### WhatsApp ordering

No backend, no platform commission. Adding items builds a cart in React state;
"Send Order on WhatsApp" opens `wa.me/919866821199` with the order pre-written:

```
Hi Belloso Cafe Kondapur! I'd like to place a direct order:

• 2 × Waffles & Strawberry — ₹658
• 1 × Strawberry Ube Latte — ₹279

Order Total: ₹937

Name:
Dine-In / Takeaway:
Preferred time:
```

## Images

Dish and ambiance photography is served from Unsplash CDN URLs in `src/data.js`.
Swap each `img(...)` call for the cafe's own photos before going live — the
current shots are stand-ins chosen to match each dish and the dark-wood mood.
