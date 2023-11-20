import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './DisplayRandomJoke.module.css'

const DisplayRandomJoke = () => {
    const [ randSetup, setRandSetup ] = useState("Loading...");
    const [ randPunchline, setRandPunchline ] = useState("Loading...");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hi")
        axios.get("http://localhost:8000/api/jokes/random")
                .then(res=>{
                    setRandSetup(res.data.randomJoke.setup);
                    setRandPunchline(res.data.randomJoke.punchline)
                })
                .catch(err=>console.log(err))
    };

    useEffect(()=>{
        axios.get("http://localhost:8000/api/jokes/random")
            .then(res=>{
                setRandSetup(res.data.randomJoke.setup);
                setRandPunchline(res.data.randomJoke.punchline)
            })
            .catch(err=>console.log(err))
    }, []);

    return (
        <div id={styles.container}>
            <h1 style={{marginBottom: "-10px"}}>Here's a random joke!</h1>
            <div className={styles.content}>
                <h2 style={{marginBottom: "-10px"}}>Setup: {randSetup}</h2>
                <h2>Punchline: {randPunchline}</h2>
            </div>
            <form onSubmit={ handleSubmit } className={styles.randomForm}>
                <button type="submit">Refresh Random Joke</button>
            </form>
        </div>
    );
};
export default DisplayRandomJoke;