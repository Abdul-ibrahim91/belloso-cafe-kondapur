import { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Menu from './components/Menu.jsx'
import Reviews from './components/Reviews.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import OrderBar from './components/OrderBar.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  /** cart: { [id]: { id, name, price, image, qty } } */
  const [cart, setCart] = useState({})
  const [drawerOpen, setDrawerOpen] = useState(false)

  const add = useCallback((item) => {
    setCart((prev) => {
      const line = prev[item.id]
      return {
        ...prev,
        [item.id]: line
          ? { ...line, qty: line.qty + 1 }
          : {
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
              qty: 1,
            },
      }
    })
  }, [])

  const remove = useCallback((id) => {
    setCart((prev) => {
      const line = prev[id]
      if (!line) return prev
      if (line.qty <= 1) {
        const { [id]: _removed, ...rest } = prev
        return rest
      }
      return { ...prev, [id]: { ...line, qty: line.qty - 1 } }
    })
  }, [])

  const clear = useCallback(() => setCart({}), [])

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Menu cart={cart} add={add} remove={remove} />
        <Reviews />
        <Location />
      </main>
      <Footer />

      <OrderBar
        cart={cart}
        add={add}
        remove={remove}
        clear={clear}
        open={drawerOpen}
        setOpen={setDrawerOpen}
      />
      <MobileBar />
    </div>
  )
}
