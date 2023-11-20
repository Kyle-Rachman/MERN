import React, { useState } from "react";
import axios from "axios";
import styles from './JokeForm.module.css'

const JokeForm = () => {
    const [setup, setSetup] = useState("");
    const [punchline, setPunchline] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/jokes/new', {
            setup,
            punchline
        })
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.message)
                }
                else {
                    setErrors("")
                }
            })
            .catch(err => console.log(err));
        setSetup("");
        setPunchline("");
    }

    return (
        <div id={styles.container}>
            <h1>Make a joke!</h1>
            <form onSubmit = {handleSubmit} className={styles.jokeForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="setup">Setup:</label>
                    <input className={styles.formInput} type="text" id="setup" onChange={(e) => setSetup(e.target.value)} value={setup}/>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="setup">Punchline:</label>
                    <input className={styles.formInput} type="text" id="punchline" onChange={(e) => setPunchline(e.target.value)} value={punchline}/>
                </div>
                <button type="submit">Add Joke</button>
            </form>
            <div className="errors">
                <p>{errors}</p>
            </div>
        </div>
    )
}

export default JokeForm