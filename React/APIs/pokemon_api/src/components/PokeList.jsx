import React, { useEffect, useState } from "react";

const PokeList = (props) => {

    const [names, setNames] = useState([])
    const capitalizeFirstLetter = (string) => {return string.charAt(0).toUpperCase() + string.slice(1)};

    useEffect( () => {
        const getPokemonNames = async () => {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000");
            let data = await response.json();
            return setNames(data.results.map( (pokemon) => <li>{capitalizeFirstLetter(pokemon['name'])}</li>));
        };
        getPokemonNames()
        .catch(console.error);
    }, []);
    return (
        <div>
            <ul>{names}</ul>
        </div>
    );
};

export default PokeList;