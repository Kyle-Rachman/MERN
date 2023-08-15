import React, { useState } from "react";
import styles from './AuthorForm.module.css';
import { Button, FormControl, Input, InputLabel} from "@mui/material";
import { Link } from "react-router-dom";

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, buttonText} = props;
    const [name, setName] = useState(initialName);
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="name">Author Name: </InputLabel>
                        <Input className={styles.fieldspace} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                </div>
                <div className={styles.buttons}>
                    <Button variant="outlined" component={Link} to={"/authors"}>Cancel</Button>
                    <Button variant="outlined" type="submit">{buttonText}</Button>
                </div>
            </form>
        </>
    );
};

export default AuthorForm;