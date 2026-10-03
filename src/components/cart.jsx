import { useState } from 'react'
import CheckOut from './checkout.jsx'
function Cart({setCart,cart ,setShowCart}) {
    const subtotal = cart.reduce((total, item) => {
  return total + item.price * item.quantity
}, 0)
const deliveryFee= subtotal !==0 ? 2.99 : 0
   const tax = subtotal * 0.1
   const total = subtotal + deliveryFee + tax
   const [showCheckout, setShowCheckout] = useState(false)
   const [showCartWarning, setShowCartWarning] = useState(false)
    function increaseQuantity(id){
        setCart( cart.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity + 1
      }
    }

    return item
  })
)
}
function decreaseQuantity(id){
    const quantityNumber=cart.find((items)=>items.id===id)
    if (quantityNumber&& quantityNumber.quantity===1){
        setCart(cart.filter((noitem)=>noitem.id!==id))
    }
    else{
        setCart( cart.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: item.quantity - 1
      }
    }

    return item
  })
)
    }
    
} 
function checkOut(){
     if(cart.length===0){
      setShowCartWarning(true)

    setTimeout(() => {
      setShowCartWarning(false)
    }, 2500)
      return 
     }
     else{
      setShowCheckout(true)
      
     }
}
function clearCart() {
  setCart([])
}
return (
  showCheckout ? (
       <CheckOut total={total}
       setCart={setCart} 
       setShowCheckout={setShowCheckout}
       setShowCart={setShowCart}/>):
 
    
    (
     <div className="food-cart">
    <div className="cart-header">
  <div>
    <h1>Your Cart</h1>
    <p>{cart.length} item{cart.length !== 1 ? "s" : ""} in your order</p>
  </div>

  <div className="cart-header-actions">
    {cart.length > 0 && (
      <button
        className="clear-cart-btn"
        onClick={clearCart}
      >
        Clear Cart
      </button>
    )}

    <button
      className="cart-close"
      onClick={() => setShowCart(false)}
    >
      ×
    </button>
  </div>
</div>

  <div className="cart-content">
    <div className="cart-items">
      {cart.map((food) => (
        <div className="cart-card" key={food.id}>

          <div className="cart-food-image">
            <img src={food.image} alt={food.name} />
          </div>

          <div className="cart-card-content">
            <h2>{food.name}</h2>
            <p className="cart-category">{food.category}</p>
            <p className="cart-unit-price">
              ${food.price.toFixed(2)} each
            </p>
          </div>

          <div className="quantity-control">
            <button onClick={() => decreaseQuantity(food.id)}>
              −
            </button>

            <span>{food.quantity}</span>

            <button onClick={() => increaseQuantity(food.id)}>
              +
            </button>
          </div>

          <div className="cart-item-total">
            <p>${(food.price * food.quantity).toFixed(2)}</p>
          </div>

        </div>
      ))}
    </div>

    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Delivery Fee</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>

      <div className="summary-row">
        <span>Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-total">
        <span>Total</span>
        <strong>${total.toFixed(2)}</strong>
      </div>

      <button className="checkout-btn" onClick={() => checkOut()}>
        Proceed to Checkout
      </button>
    </div>
  </div>
  {showCartWarning && (
  <div className="cart-warning">
    <div className="warning-icon">!</div>

    <div className="toast-content">
      <h3>Your cart is empty</h3>
      <p>Add an item before proceeding to checkout.</p>
    </div>
  </div>
)}
</div> 
  )
    
    
  )
}

export default Cart