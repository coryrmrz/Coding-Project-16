import React from 'react' //Import React to define component
import ProductItem from './ProductItem.jsx' //Import ProductItem component to display products

const ProductList = ({ products }) => { //Define Productlist component
    return ( //return html to show unique key for each product 
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => ( 
            <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList; //export ProductList component to be used in other parts of the app