// ---------------------------------------------------------------------------
// Belloso Cafe — single source of truth for business + menu data
// ---------------------------------------------------------------------------

export const BUSINESS = {
  name: 'Belloso Cafe',
  locality: 'Whitefields • Kondapur',
  tagline:
    'Specialty Coffee, Global Comfort Food & Late-Night Hangout • Kondapur',
  rating: '4.7',
  reviewCount: '678+',
  address:
    'White Field Rd, Ashok Nagar, Venkat Enclave, Whitefields, HITEC City, Kondapur, Hyderabad, Telangana 500084',
  addressShort: 'Whitefields, HITEC City, Kondapur, Hyderabad 500084',
  hours: 'Open Daily • 11:00 AM – 2:00 AM',
  closingNote: 'Closes at 2:00 AM',
  serviceModes: [
    'Dine-In',
    'Takeaway',
    'Table Reservations',
    'Work-Friendly Wi-Fi',
  ],
  phoneDisplay: '098668 21199',
  phoneIntl: '+91 98668 21199',
  tel: 'tel:+919866821199',
  whatsapp: '919866821199',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Belloso+Cafe+Kondapur+Whitefields+Hyderabad',
}

/** Build a wa.me deep link with a pre-filled message. */
export const wa = (message) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

export const WA_ORDER = wa(
  "Hi Belloso Cafe Kondapur! I'd like to place a direct order."
)

export const WA_RESERVE = wa(
  "Hi Belloso Cafe Kondapur! I'd like to reserve a table."
)

const img = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`

export const HERO_IMAGE = img('1516213335993-159eca2981af', 1400)
export const AMBIANCE_IMAGE = img('1521017432531-fbd92d768814', 1200)

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'waffles', label: 'Waffles & French Toast' },
  { id: 'mains', label: 'Global Mains & Tacos' },
  { id: 'coffee', label: 'Specialty Coffee & Ube' },
]

export const MENU = [
  {
    id: 'strawberry-ube-latte',
    name: 'Strawberry Ube Latte',
    badge: 'Signature Drink',
    category: 'coffee',
    price: 279,
    description:
      'Velvety purple yam cream layered over chilled milk and sweet strawberry infusion.',
    image: img('1745725247846-12a3e3109bbf'),
  },
  {
    id: 'waffles-strawberry',
    name: 'Waffles & Strawberry',
    badge: 'Bestseller',
    category: 'waffles',
    price: 329,
    description:
      'Crisp golden Belgian waffle topped with fresh strawberries, whipped cream, and warm chocolate drizzle.',
    image: img('1558584724-0e4d32ca55a4'),
  },
  {
    id: 'mango-french-toast',
    name: 'Mango French Toast',
    badge: 'Fan Favorite',
    category: 'waffles',
    price: 349,
    description:
      'Thick-cut brioche French toast crowned with ripe Alphonso mango and vanilla mascarpone.',
    image: img('1571780688105-fd0b6e331b8b'),
  },
  {
    id: 'small-soft-tacos',
    name: 'Small Soft Tacos',
    badge: 'Must-Try',
    category: 'mains',
    price: 299,
    description:
      'Bite-sized gourmet soft tacos packed with flavorful fillings and house-made salsa.',
    image: img('1582234372722-50d7ccc30ebd'),
  },
  {
    id: 'korean-fried-chicken',
    name: 'Korean Fried Chicken',
    badge: 'Popular',
    category: 'mains',
    price: 399,
    description:
      'Crispy double-fried chicken glazed in sweet-spicy gochujang sauce with toasted sesame.',
    image: img('1645371958635-88dd6c8e1be7'),
  },
  {
    id: 'pesto-pasta',
    name: 'Pesto Pasta with Garlic Bread',
    category: 'mains',
    price: 379,
    description:
      'Al dente penne tossed in fresh basil-parmesan pesto, served with herb garlic bread.',
    image: img('1473093295043-cdd812d0e601'),
  },
  {
    id: 'grilled-chicken-mash',
    name: 'Grilled Chicken with Mashed Potatoes',
    category: 'mains',
    price: 449,
    description:
      'Herb-marinated grilled chicken breast served over creamy garlic mash and sautéed veggies.',
    image: img('1633436375153-d7045cb93e38'),
  },
  {
    id: 'nutella-french-toast',
    name: 'Nutella French Toast',
    category: 'waffles',
    price: 359,
    description:
      'Warm caramelized brioche loaded with rich Nutella and roasted hazelnuts.',
    image: img('1564564733489-4f90308b0f7f'),
  },
  {
    id: 'ceremonial-matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'coffee',
    price: 299,
    description:
      'Stone-ground ceremonial grade matcha whisked thick and poured over cold creamy milk.',
    image: img('1717603545758-88cc454db69b'),
  },
  {
    id: 'belgian-hot-chocolate',
    name: 'Belgian Hot Chocolate',
    category: 'coffee',
    price: 269,
    description:
      'Slow-melted dark Belgian couverture stirred into steamed milk — the late-night classic.',
    image: img('1637572815755-c4b80092dce1'),
  },
]

export const EXPERIENCE = [
  {
    title: 'Open Till 2:00 AM',
    body: 'Perfect for late-night coffee runs, midnight desserts, and unhurried conversations.',
    icon: 'moon',
  },
  {
    title: 'Signature Ube & Matcha Bar',
    body: 'Unique handcrafted Strawberry Ube, ceremonial Matcha, and rich hot chocolate.',
    icon: 'cup',
  },
  {
    title: 'Cozy & Work-Friendly',
    body: 'Warm ambient lighting, comfortable seating, and attentive table service.',
    icon: 'wifi',
  },
]

export const REVIEWS = [
  {
    name: 'Local Diner',
    meta: 'Google Review • Kondapur',
    stars: 5,
    quote:
      "Don't skip the small soft tacos! Making them bite-sized is such a great idea, and they tasted fantastic. Will definitely be coming back.",
  },
  {
    name: 'Cafe Enthusiast',
    meta: 'Google Review • HITEC City',
    stars: 5,
    quote:
      'I tried Strawberry Ube for the first time and it was really good! Pleasant, cozy ambiance and great late-night vibe.',
  },
  {
    name: 'Regular Guest',
    meta: 'Google Review • Whitefields',
    stars: 5,
    quote:
      'Very nice place and delicious food—flavorful pastas, Korean fried chicken, and really impressed by the attentive staff.',
  },
]
