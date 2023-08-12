import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const MarginButtonStyle = {
    margin: "10px 10px"
};

const DeleteButton = (props) => {
    const {productId, successCallback} = props;
    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => successCallback())
            .catch(err => console.log(err));
    };
    return (
        <Button onClick={deleteProduct} style={MarginButtonStyle} variant="outlined">Delete</Button>
    );
};

export default DeleteButton;