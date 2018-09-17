import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name, age} = props;
    return(
        <div className="Person">
            <p onClick={props.click}>I'm a {name} and i am {age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    ) 
}

export default Person;