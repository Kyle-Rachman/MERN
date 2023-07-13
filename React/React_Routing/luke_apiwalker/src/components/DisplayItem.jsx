import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const DisplayItem = (props) => {
    const [data, setData] = useState(`https://swapi.dev/api/`);
    const [homeworld, setHomeworld] = useState("");
    const {type, id} = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        const fetchData = async () => {
            let response = await axios.get(`https://swapi.dev/api/${type}/${id}/`);
            if ((type.toLowerCase() == 'people') || (type.toLowerCase() == 'species')) {
                let homeworldResponse = await axios.get(response.data.homeworld);
                let homeworldId = homeworldResponse.data.url.split('/planets/')[1]
                let homeworldData = await {
                    "name" : homeworldResponse.data.name,
                    "id" : homeworldId
                };
                setHomeworld(homeworldData)
            };
        return setData(response.data);
        };
        fetchData().catch(() => navigate("/error"))
    }, [type,id]);

    if (type.toLowerCase() == 'people') {
        return (
            <>
                <h2>{data.name}</h2>
                <ul style={{listStyleType:'none', paddingLeft: 0}}>
                    <li><strong>Height:</strong> {data.height} cm</li>
                    <li><strong>Mass:</strong> {data.mass} kg</li>
                    <li><strong>Hair Color:</strong> {data.hair_color}</li>
                    <li><strong>Eye Color:</strong> {data.eye_color}</li>
                    <li><strong>Skin Color:</strong> {data.skin_color}</li>
                    <li><strong>Homeworld:</strong> <Link to={`/planets/${homeworld.id}`}>{homeworld.name}</Link></li>
                </ul>
            </>
        );
    } else if (type.toLowerCase() == 'films') {
        return (
            <>
                <h2>{data.title}</h2>
                <ul style={{listStyleType:'none', paddingLeft: 0}}>
                    <li><strong>Episode:</strong> {data.episode_id}</li>
                    <li><strong>Director:</strong> {data.director}</li>
                    <li><strong>Producer(s):</strong> {data.producer}</li>
                </ul>
            </>
        );
    } else if (type.toLowerCase() == 'species') {
        return (
            <>
                <h2>{data.name}</h2>
                <ul style={{listStyleType:'none', paddingLeft: 0}}>
                    <li><strong>Classification:</strong> {data.classification}</li>
                    <li><strong>Designation:</strong> {data.designation}</li>
                    <li><strong>Average Lifespan:</strong> {data.average_lifespan} years</li>
                    <li><strong>Homeworld:</strong> <Link to={`/planets/${homeworld.id}`}>{homeworld.name}</Link></li>
                </ul>
            </>
        );
    } else if (type.toLowerCase() == 'planets') {
        return (
            <>
                <h2>{data.name}</h2>
                <ul style={{listStyleType:'none', paddingLeft: 0}}>
                    <li><strong>Climate:</strong> {data.climate}</li>
                    <li><strong>Terrain:</strong> {data.terrain}</li>
                    <li><strong>Surface Water:</strong> {String(!!data.surface_water)}</li>
                    <li><strong>Population:</strong> {data.population}</li>
                </ul>
            </>
        );
    } else {
        navigate("/error")
    };
};

export default DisplayItem