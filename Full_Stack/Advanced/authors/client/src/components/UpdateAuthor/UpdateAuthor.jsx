import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AuthorForm from "../AuthorForm/AuthorForm";
import styles from './UpdateAuthor.module.css';
import { Button } from "@mui/material";

const UpdateAuthor = (props) => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [validAuthor, setValidAuthor] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => {
                setLoaded(true);
                setValidAuthor(false);
            });
    })

    const updateAuthor = authorParam => {
        axios.patch('http://localhost:8000/api/authors/' + id, authorParam)
            .then(res => navigate("/authors"))
            .catch(err => {
                let errorArr = []
                    for (var key in err.response.data.errors) {
                        errorArr.push(err.response.data.errors[key].message);
                    }
                    setErrors(errorArr);
                    setLoaded(false);
            });
    };

    return (
        <>
            <div className={styles.header}>
                <h1>Favorite Authors</h1>
                <Link to={'/authors'}>Home</Link>
            </div>
            <h3 style={{textAlign: "left", color: "blueviolet"}}>Edit this author:</h3>
            <br />
            <div className={styles.content}>
                {
                    loaded && validAuthor && <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} buttonText={"Submit"} />
                }
                {
                    loaded && !validAuthor && <div>
                        <p>It looks like this author doesn't exist! Would you like to add a new author?</p>
                        <Button variant="outlined" component={Link} to={"/authors/new"} style={{marginTop: "10px"}}>Add a New Author</Button>
                    </div>
                }
                <div className={styles.errors}>
                    {errors.map((err, index) => (
                            <p key={index}>{err}</p>
                        ))}
                </div>
            </div>
        </>
    );
};
export default UpdateAuthor;