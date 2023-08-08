import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {removeFromDOM, products, setProducts} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => removeFromDOM(productId))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
        <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <p key = {index}><Link to={`/products/${product._id}`}>{product.title}</Link> |&nbsp;
                        <Link to={`/products/edit/${product._id}`}>Edit</Link> | <button onClick={(e) => deleteProduct(product._id)}>Delete</button> </p>
                    );
                })
            }
        </>
    );
};

export default ProductList;