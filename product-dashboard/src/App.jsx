//Task 2: Create the App component

import React, {useState} from "react"; //import React and useState
import ProductList from "./ProductList"; //import ProductList component
import './App.css' //import App.css for styling
import AddProductForm from "./AddProductForm"; //import AddProductForm component

const App = () => { //Define App as a functional component
  const initialProducts = [ //array of objects with with product inforation
    {id: 1, name: "Blush", price: 12, description: "Pink blush palette with 6 colors"}, //Blush array
    {id: 2, name: "Lipstick", price: 10, description: "One ruby red lipstick tube"}, //Lipstick array
    {id: 3, name: "Foundation", price: 8, description: "One ivory neutral foundation tube"}, //Foundation array
  ];
  const [products, setProducts] = useState(initialProducts); //products holds list, setProducts updates list
  const addProduct = (newProduct) => { //function adds new product to the list
    setProducts([...products, {...newProduct, id: products.length + 1}]); //new product gets ID based on legth of products array +1
  }
  return ( //return JSX structure
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products}/>
      <AddProductForm addProduct={addProduct}/>
    </div>
  );
};

export default App; //export App component to be used in other parts of the app