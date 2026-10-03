import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import Foods from './components/foods.jsx'
import Cart from './components/cart.jsx'
import About from './components/about.jsx'
import './App.css'

function App(){
   const [cart,setCart]=useState([])
   const [showCart,setShowCart]=useState(false)
 return(
  <>
    <Navbar
      cart={cart}
      setShowCart={setShowCart}
    />

    <Home />

    <Foods
      cart={cart}
      setCart={setCart}
      setShowCart={setShowCart}
      showCart={showCart}
    />
    <About />

  
    {showCart && (
      <Cart
        cart={cart}
        setCart={setCart}
        setShowCart={setShowCart}
      />
    )}
  </>
)
}
export default App



