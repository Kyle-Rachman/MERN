import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductDetails = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
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
            <DeleteButton productId={product._id} successCallback={() => navigate("/products")}/>
            <br/>
            <Link to='/products'>Back</Link>
        </>
    );
};

export default ProductDetails;