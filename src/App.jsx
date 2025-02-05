import { CartProvider } from "./assets/store/CartContext"
import Navbar from "./assets/components/Navbar"
import Main from "./assets/components/Main"

function App() {

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Main />
      </div>
    </CartProvider>
  )
}

export default App
