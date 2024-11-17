//Task 6: Create AddProductForm component
import React, { useState } from "react"; //Import react to define component

const AddProductForm = ({ addProduct }) => { //State hooks to manage form input values
  const [name, setName] = useState(""); //To store product name
  const [price, setPrice] = useState(""); //To store product price
  const [description, setDescription] = useState(""); //To store product description

  const handleChange = (e) => { //Handle changes in input fields and update states
    const { name, value } = e.target;
    if (name === "product name") {
      setName(value); //Update name state
    } else if (name === "product price") {
      setPrice(value); //Update price state
    } else if (name === "product description") {
      setDescription(value); //Update description state
    }
  };

  const handleSubmit = (e) => { //Handle submit form
    e.preventDefault(); //Prevent page reload on form submit
    const newProduct = { name, price: parseFloat(price), description }; //Create new product object
    addProduct(newProduct); //Pass new product to parent component
    setName(""); //Clear name input field
    setPrice(""); //Clear price input field
    setDescription(""); //Clear description input field
  };

  return ( //Return html with name, price, and description
    <div>
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="product name"
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="product price"
              value={price}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="product description"
              value={description}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Add Product</button>  {/* Submit button */}
      </form>
    </div>
  );
};

export default AddProductForm; //export AddProductForm component to be used in other parts of the app

