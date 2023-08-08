import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
        <h1>All Products:</h1>
            {
                product.map((product, index) => {
                    return (
                        <p key = {index}><Link to={`/products/${product._id}`}>{product.title}</Link>
                        <Link to={`/products/edit/${product._id}`}>    Edit</Link></p>
                    );
                })
            }
        </>
    );
};

export default ProductList;