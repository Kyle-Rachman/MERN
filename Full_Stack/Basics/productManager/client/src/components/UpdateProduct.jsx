import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                if (res.data.errors) {
                    let errorString = ""
                    for (var key in res.data.errors) {
                        errorString += " " + JSON.stringify(res.data.errors[key].message).replace(/['"]+/g, '')
                    }
                    setErrors(errorString)
                } else {
                    navigate("/products");
                };
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="price">Price (in $):</label>
                    <input type="number" id="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Update</button>
            </form>
            <div className="errors">
                <p>{errors}</p>
            </div>
            <Link to='/products'>Back</Link>
        </>
    );
};
export default UpdateProduct;