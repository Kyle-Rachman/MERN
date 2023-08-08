import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProductDetails = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => navigate("/products"))
            .catch(err => console.log(err));
    };
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
            <br/>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
        </>
    );
};

export default ProductDetails;