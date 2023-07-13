import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
    const [type, setType] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`);
        setType("");
        setId("");
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="type">Search For:</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <option hidden selected value></option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
                <option value="films">Films</option>
            </select>
            <label htmlFor="size">ID:</label>
            <input type="number" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Searchbar;