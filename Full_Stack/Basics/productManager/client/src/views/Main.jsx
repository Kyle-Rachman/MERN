import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <>
            <ProductForm product={product} setProduct={setProduct}/>
            <hr/>
            <ProductList product={product} setProduct={setProduct}/>
        </>
    );
};

export default Main;