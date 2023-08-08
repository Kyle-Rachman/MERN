import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Home = (props) => {
    const [products, setProducts] = useState([]);
    const removeFromDOM = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    return (
        <>
            <h2>Product Manager</h2>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDOM={removeFromDOM}/>
        </>
    );
};

export default Home;