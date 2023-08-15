import React, { useEffect, useState } from 'react';
import AuthorList from '../AuthorList/AuthorList';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = (props) => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => setAuthors(res.data))
            .catch((err) => console.log(err));
    }, [authors]);
    const removeFromDOM = authorId => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => setAuthors(authors.filter(author => author._id != authorId)))
            .catch(err => console.log(err));
    };
    return (
        <>
            <div className={styles.header}>
                <h1>Favorite Authors</h1>
                <Link to={'/authors/new'}>Add an Author</Link>
            </div>
            <h3 style={{textAlign: "left", color: "blueviolet"}}>We have quotes by:</h3>
            <br />
            <AuthorList authors={authors} removeFromDOM={removeFromDOM}/>
        </>
    );
};

export default Home;