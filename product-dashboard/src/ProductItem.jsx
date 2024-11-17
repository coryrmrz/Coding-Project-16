//Task 4: Create ProductItem Component
import React from 'react' //Import react to define component

const ProductItem = ({ product }) => { //Define ProductItem component
    return ( //return name, price and description of product
        <li>
            <h3>{product.name}</h3>
            <p>The price of the product is ${product.price}</p>
            <p>The description of the product is {product.description}</p>
        </li>
    );
};

export default ProductItem; //export ProductItem component to be used in other parts of the app