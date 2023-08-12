import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";
import Button from "@mui/material/Button";

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    })

    const updateProduct = productParam => {
        axios.patch('http://localhost:8000/api/products/' + id, productParam)
            .then(res => navigate("/products"))
            .catch(err => {
                let errorArr = []
                    for (var key in err.response.data.errors) {
                        errorArr.push(err.response.data.errors[key].message);
                    }
                    setErrors(errorArr);
                    setLoaded(false);
            });
    };

    return (
        <>
            <h1>Update Product</h1>
            {
                loaded && <ProductForm
                    onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}
                />
            }
            <div className="errors">
                {errors.map((err, index) => (
                        <p key={index}>{err}</p>
                    ))}
            </div>
            <DeleteButton productId={product._id} successCallback={() => navigate("/products")}/>
            <br/>
            <Button component={Link} to='/products'>Back</Button>
        </>
    );
};
export default UpdateProduct;