import { useState } from 'react'

function CheckOut({ total, setCart, setShowCheckout,setShowCart }) {
  const [address, setAddress] = useState("")
const [showAddressWarning, setShowAddressWarning] = useState(false)
  const [tip, setTip] = useState(10)
  const [showSuccess, setShowSuccess] = useState(false);
  const totalFee = total + (total * tip) / 100

  function confirmCheckout() {
     if (address.trim() === "") {
    setShowAddressWarning(true)

    setTimeout(() => {
      setShowAddressWarning(false)
    }, 2500)

    return
  }
   setShowSuccess(true)
    setCart([])
   
    setTimeout(() => {
    setShowSuccess(false);
    setShowCheckout(false);
    setShowCart(false)
  }, 2500);

  }
   

  return (
     
      <div className="checkout-page">

        <div className="checkout-card">

          {/* HEADER */}
          <div className="checkout-header">
            <h1>Final Checkout</h1>

            <button
              className="checkout-close"
              onClick={() => setShowCheckout(false)}
            >
              ×
            </button>
          </div>

          {/* BODY */}
          <div className="checkout-body">

            {/* DELIVERY */}
            <div className="checkout-section">
              <label>DELIVER TO</label>

              <div className="address-wrapper">
                <span className="address-icon">⌖</span>

                <input
                  className="address-input"
                  type="text"
                  placeholder="Enter your delivery address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                    setShowAddressWarning(false)
                  }}
                />
              </div>
            </div>

            {/* TIP */}
            <div className="checkout-section">
              <label>COURIER TIP</label>

              <div className="tip-options">

                <button
                  className={tip === 10 ? 'active' : ''}
                  onClick={() => setTip(10)}
                >
                  10%
                </button>

                <button
                  className={tip === 15 ? 'active' : ''}
                  onClick={() => setTip(15)}
                >
                  15%
                </button>

                <button
                  className={tip === 20 ? 'active' : ''}
                  onClick={() => setTip(20)}
                >
                  20%
                </button>

                <button
                  className={tip === 25 ? 'active' : ''}
                  onClick={() => setTip(25)}
                >
                  25%
                </button>

              </div>
            </div>

           

            {/* TOTAL */}
            <div className="checkout-total">

              <div className="final-total">
                <span>Total Due</span>

                <strong>
                  ${totalFee.toFixed(2)}
                </strong>
              </div>

              <button
                className="pay-btn"
                onClick={confirmCheckout}
              >
                CONFIRM & PAY NOW
              </button>

            </div>

          </div>
        </div>
        {showSuccess && (
  <div className="success-toast">
    <div className="toast-icon">✓</div>

    <div className="toast-content">
      <h3>Order placed successfully!</h3>
      <p>Your order is being prepared.</p>
    </div>
  </div>
        )}
        {showAddressWarning && (
  <div className="address-warning">
    <div className="warning-icon">!</div>

    <div className="toast-content">
      <h3>Delivery address required</h3>
      <p>Please enter your delivery address.</p>
    </div>
  </div>
)}

      </div>
      
    )
  
}

export default CheckOut