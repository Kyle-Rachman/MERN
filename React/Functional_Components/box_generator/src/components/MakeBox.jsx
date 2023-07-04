import React, { useState } from 'react';
import styles from './MakeBox.module.css';

const MakeBox = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddBox(color, size);
        setColor("");
        setSize("");
    };

    return (
        <form onSubmit={ handleSubmit } className={styles.inlineForm}>
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <label htmlFor="size">Size:</label>
            <input type="number" id="size" value={size} onChange={(e) => setSize(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
};

export default MakeBox;