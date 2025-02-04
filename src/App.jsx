import { CartProvider } from "./assets/store/CartContext"
import Navbar from "./assets/components/Navbar"

function App() {

  return (
    <CartProvider>
      <div>
        <Navbar />
      </div>
    </CartProvider>
  )
}

export default App
