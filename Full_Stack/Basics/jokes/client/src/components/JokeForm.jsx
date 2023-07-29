import React, { useState } from "react";
import axios from "axios";

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
        <>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="setup">Setup:</label>
                <input type="text" id="setup" onChange={(e) => setSetup(e.target.value)} value={setup}/>
                <label htmlFor="setup">Punchline:</label>
                <input type="text" id="punchline" onChange={(e) => setPunchline(e.target.value)} value={punchline}/>
                <button type="submit">Add Joke</button>
            </form>
            <div className="errors">
                <p>{errors}</p>
            </div>
        </>
    )
}

export default JokeForm