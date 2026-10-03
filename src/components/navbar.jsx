import { useState } from 'react'
function Navbar({ cart,setShowCart }) {
 
 const navItems = [
  { name: "Home", link: "#home" },
  { name: "Menu", link: "#menu" },
  { name: "About", link: "#about" }
]

  return (
    <nav className="navbar">

      <h1 className="logo">🍔 Foodie</h1>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>

      <button className="cart-btn" onClick={()=>{setShowCart(true)}}>
        🛒 Cart {cart.length}
      </button>

    </nav>
  )
}

export default Navbar