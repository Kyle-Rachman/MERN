import '../App.css'
import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, personAge, hairColor} = props;
    const [age, setAge] = useState(personAge)
    const handleClick = () => { setAge(age + 1) }
    return (
        <div className='PersonCard'>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={ handleClick }>Birthday button for { firstName } { lastName }</button>
        </div>
    )
}

export default PersonCard