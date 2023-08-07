import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = (props) => {
    const {product, setProduct} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            {
                product.map((product, index) => {
                    return (
                        <ul key = {index}>
                            <li>{product.title}</li>
                            <li>{product.price}</li>
                            <li>{product.description}</li>
                        </ul>
                    );
                })
            }
        </>
    );
};

export default ProductList;