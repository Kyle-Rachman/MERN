import React from "react";
import {Link} from 'react-router-dom';
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const {removeFromDOM, products} = props;

    return (
        <>
        <h1>All Products:</h1>
            {
                products.map((product, index) => {
                    return (
                        <p key = {index}><Link to={`/products/${product._id}`}>{product.title}</Link> |&nbsp;
                        <Link to={`/products/edit/${product._id}`}>Edit</Link> | <DeleteButton productId={product._id} successCallback={() => removeFromDOM(product._id)}/> </p>
                    );
                })
            }
        </>
    );
};

export default ProductList;