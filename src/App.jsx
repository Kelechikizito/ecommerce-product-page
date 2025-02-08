import { CartProvider } from "./assets/store/CartContext"
import Navbar from "./assets/components/Navbar"
import Main from "./assets/components/Main"

function App() {

  return (
    <CartProvider>
      <div className="px-24 pb-24">
        <Navbar />
        <Main />
      </div>
    </CartProvider>
  )
}

export default App
