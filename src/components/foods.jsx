
import foods from '../data/foods.js'

function Foods({ cart, setCart }){
   
function addToCart(food){
    const existingFood=cart.find((item)=>item.id===food.id)
    if(existingFood){
      setCart( cart.map((item) => {
    if (item.id === food.id) {
      return {
        ...item,
        quantity: item.quantity + 1
      }
    }
    return item
  })
)
    }
    else {
         setCart([...cart,{...food, quantity: 1}])
    }
     
    }
    console.log(cart)
    return(
        <div id="menu" className="food-section">
  <h1>Popular Dishes</h1>

  <div className="food-grid">
    {foods.map((food) => (
      <div className="food-card" key={food.id}>

        <img src={food.image} alt={food.name} />

        <div className="food-card-content">
          <h2>{food.name}</h2>

          <p className="category">{food.category}</p>

          <p className="description">{food.description}</p>

          <div className="food-card-bottom">
            <p className="rating">⭐ {food.rating}</p>
            <p className="price">${food.price}</p>
          </div>
          <button onClick={()=>{ addToCart(food)}}>Add to Cart</button>
        </div>

      </div>
    ))}
  </div>
</div>
    )
}
export default Foods