import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeList = (props) => {

    const [names, setNames] = useState([])
    const capitalizeFirstLetter = (string) => {return string.charAt(0).toUpperCase() + string.slice(1)};

    useEffect( () => {
        const getPokemonNames = async () => {
            let response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000");
            return setNames(response.data.results.map( (pokemon) => <li key={pokemon['url']}>{capitalizeFirstLetter(pokemon['name'])}</li>));
        };
        getPokemonNames().catch((err) => console.error(err));
    }, []);
    return (
        <div>
            <ul>{names}</ul>
        </div>
    );
};

export default PokeList;