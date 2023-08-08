import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to='/products'>Back</Link>
        </>
    );
};

export default ProductDetails;