import burgerImage from '../assets/classic burger.jpeg'
import pizzaImage from '../assets/pizza.jpeg'
import chickenImage from '../assets/chicken.jpeg'
import pastaImage from '../assets/pasta.jpeg'
import sushiImage from '../assets/sushi.jpeg'
import tacosImage from '../assets/tacos.jpeg'
import friesImage from '../assets/fries.jpeg'
import cakeImage from '../assets/cake.jpeg'
const foods = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and our special sauce.",
    price: 8.99,
    category: "Burgers",
    rating: 4.8,
    image: burgerImage 
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, basil, and olive oil.",
    price: 11.99,
    category: "Pizza",
    rating: 4.7,
    image: pizzaImage
},
  {
    id: 3,
    name: "Crispy Fried Chicken",
    description: "Golden crispy chicken seasoned with our signature blend of spices.",
    price: 9.49,
    category: "Chicken",
    rating: 4.6,
    image:  chickenImage
  },
  {
    id: 4,
    name: "Chicken Alfredo Pasta",
    description: "Creamy Alfredo pasta with grilled chicken, parmesan, and fresh herbs.",
    price: 12.49,
    category: "Pasta",
    rating: 4.9,
    image: pastaImage
  },
  {
    id: 5,
    name: "California Sushi Roll",
    description: "Fresh sushi roll with crab, avocado, cucumber, and sesame.",
    price: 10.99,
    category: "Sushi",
    rating: 4.7,
    image: sushiImage
  },
  {
    id: 6,
    name: "Chicken Tacos",
    description: "Soft tortillas filled with seasoned chicken, lettuce, salsa, and cheese.",
    price: 8.49,
    category: "Mexican",
    rating: 4.5,
    image: tacosImage
  },
  {
    id: 7,
    name: "Loaded French Fries",
    description: "Crispy golden fries topped with cheese, herbs, and our special sauce.",
    price: 5.99,
    category: "Sides",
    rating: 4.6,
    image: friesImage
  },
  {
    id: 8,
    name: "Chocolate Cake",
    description: "Rich chocolate cake layered with smooth chocolate cream and chocolate glaze.",
    price: 6.49,
    category: "Desserts",
    rating: 4.9,
    image: cakeImage
  }
];

export default foods;