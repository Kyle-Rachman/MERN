import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
        <div>
            <h1>Here's a random joke!</h1>
            <h2>Setup: {randSetup}</h2>
            <h2>Punchline: {randPunchline}</h2>
            <form onSubmit={ handleSubmit }>
                <button type="submit">Refresh Random Joke</button>
            </form>
        </div>
    );
};
export default DisplayRandomJoke;