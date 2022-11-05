import React, { useState } from 'react';

const PersonCard = (props) => {
    const { name, age, hair_color } = props;
    const [ addAge, setAddAge] = useState(age)
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {addAge}</p>
            <p>Hair Color: {hair_color}</p>
            <button onClick={ (event) => setAddAge(addAge + 1)}>Birthday Button For {name}</button>
        </div>
    )
}

export default PersonCard;