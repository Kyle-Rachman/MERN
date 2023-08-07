import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/new', {
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
                } else if (typeof res.data == "string") {
                    setErrors("This product already exists!")
                } else {
                    setErrors("");
                };
            })
            .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Create</button>
            </form>
            <div className="errors">
                <p>{errors}</p>
            </div>
        </>
    );
};

export default ProductForm;