import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import Button from "@mui/material/Button";

const centerDetailsStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
};

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
        <div style={centerDetailsStyle}>
            <table style={{margin: "0px auto", fontSize: "x-large"}}>
                <th>{product.title}</th>
                <tr>Price: ${product.price}</tr>
                <tr>Description: {product.description}</tr>
            </table>
            <DeleteButton productId={product._id} successCallback={() => navigate("/products")}/>
            <br/>
            <Button variant="outlined" component={Link} to='/products'>Back</Button>
        </div>
    );
};

export default ProductDetails;