import React from "react";
import { Link } from 'react-router-dom';
import DeleteButton from "./DeleteButton";
import { Button } from "@mui/material";

const centerStyle = {
    display: "flex",
    justifyContent: "center"
};

const ProductList = (props) => {
    const {removeFromDOM, products} = props;

    return (
        <>
            <h1>All Products:</h1>
            <div style={centerStyle}>
                <table>
                    <tbody>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key = {index}>
                                        <td><Button component={Link} to={`/products/${product._id}`}>&ensp; {product.title} &ensp;</Button></td>
                                        <td><Button variant="outlined" component={Link} to={`/products/edit/${product._id}`}>Edit</Button></td>
                                        <td><DeleteButton productId={product._id} successCallback={() => removeFromDOM(product._id)}/></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductList;