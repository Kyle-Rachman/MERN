import React, { useState } from "react";

const ProductForm = (props) => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="price">Price (in $): </label>
                    <input type="number" id="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="form-element">
                    <label htmlFor="description">Description: </label>
                    <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ProductForm;