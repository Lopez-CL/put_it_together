import React, { useState } from 'react';
const PersonProfile = props => {
    const { fName, lName, age, hairColor } = props;
    const [currentAge,setAge] = useState(age);
    return (
        <div>
            <h1>{lName}, {fName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={(event) => setAge(currentAge + 1)}>{fName} {lName} had a birthday! </button>
        </div>
    );
}
export default PersonProfile;