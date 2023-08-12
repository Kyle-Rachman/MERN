import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel} from "@mui/material";

const whiteTextStyle = {
    color: 'white'
};
const whiteFormStyle = {
    borderBottom: '1px solid white',
    margin: '0px 20px'
};

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
                <div>
                    <FormControl style={whiteFormStyle}>
                        <InputLabel htmlFor="title" style={whiteTextStyle}>Title: </InputLabel>
                        <Input type="text" id="title" value={title} style={whiteTextStyle} onChange={(e) => setTitle(e.target.value)}/>
                    </FormControl>
                    <FormControl style={whiteFormStyle}>
                        <InputLabel htmlFor="price" style={whiteTextStyle}>Price (in $): </InputLabel>
                        <Input type="number" id="price" step="0.01" value={price} style={whiteTextStyle} onChange={(e) => setPrice(e.target.value)}/>
                    </FormControl>
                    <FormControl style={whiteFormStyle}>
                        <InputLabel htmlFor="description" style={whiteTextStyle}>Description: </InputLabel>
                        <Input type="text" id="description" value={description} style={whiteTextStyle} onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </div>
                <Button variant="outlined" style={{margin: '10px 0px'}} type="submit">Submit</Button>
            </form>
        </>
    );
};

export default ProductForm;