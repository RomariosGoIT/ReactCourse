import React from 'react';
import classes from  './Person.css'

const Person = (props) => {
    const {name, age} = props;
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {name} and i am {age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    ) 
}

export default Person;