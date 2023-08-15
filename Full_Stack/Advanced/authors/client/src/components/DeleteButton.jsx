import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const MarginButtonStyle = {
    margin: "10px 10px",
    color: "white",
    borderColor: "red",
    backgroundColor: "red"
};

const DeleteButton = (props) => {
    const {authorId, authorName, successCallback} = props;
    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => successCallback())
            .catch(err => console.log(err));
    };
    return (
        <Button onClick={deleteAuthor} style={MarginButtonStyle} variant="outlined">Delete {authorName}</Button>
    );
};

export default DeleteButton;