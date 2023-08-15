import React, { useState } from 'react';
import AuthorForm from '../AuthorForm/AuthorForm';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NewAuthor.module.css';

const NewAuthor = (props) => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/authors/new', authorParam)
            .then(res => {
                setErrors([]);
                navigate('/authors')
            })
            .catch(err => {
                if (typeof err.response.data == "string") {
                    setErrors(["This author already exists!"]);
                } else{
                    let errorArr = []
                    for (var key in err.response.data.errors) {
                        errorArr.push(err.response.data.errors[key].message);
                    }
                    setErrors(errorArr);
                };
            });
    }
    return (
        <>
            <div className={styles.header}>
                <h1>Favorite Authors</h1>
                <Link to={'/authors'}>Home</Link>
            </div>
            <h3 style={{textAlign: "left", color: "blueviolet"}}>Add a new author:</h3>
            <br />
            <div className={styles.content}>
                <AuthorForm onSubmitProp={createAuthor} initialName="" buttonText={"Submit"}/>
                <div className={styles.errors}>
                    {errors.map((err, index) => (
                            <p key={index}>{err}</p>
                        ))}
                </div>
            </div>
        </>
    );
};

export default NewAuthor;