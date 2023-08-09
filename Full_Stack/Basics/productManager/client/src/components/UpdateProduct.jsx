import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteButton from "./DeleteButton";

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[loaded])

    const updateProduct = productParam => {
        axios.patch('http://localhost:8000/api/products/' + id, productParam)
            .then(res => {
                if (res.data.errors) {
                    let errorString = ""
                    for (var key in res.data.errors) {
                        errorString += " " + JSON.stringify(res.data.errors[key].message).replace(/['"]+/g, '')
                    }
                    setErrors(errorString)
                    setLoaded(false)
                } else {
                    navigate("/products");
                };
            })
            .catch(err => console.log(err));
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
                <p>{errors}</p>
            </div>
            <DeleteButton productId={product._id} successCallback={() => navigate("/products")}/>
            <br/>
            <Link to='/products'>Back</Link>
        </>
    );
};
export default UpdateProduct;