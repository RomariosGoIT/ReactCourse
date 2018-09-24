import React from 'react'
import classes from './Cockpit.css' 
import Aux from '../../hoc/Auxius'

const cockpit = (props) => {

    const compiledClasses = [];
    
    let btnClass = classes.Button;

    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.person.length <= 2) {
      compiledClasses.push(classes.red);
    }

    if(props.person.length <= 1) {
      compiledClasses.push(classes.bold);
    }

    return(
        <Aux>
            <h1>{props.title}</h1>
            <p className={compiledClasses.join(' ')}>This is realy working!!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}> Toggle Person
            </button>
            <button onClick={props.login}>
                Log in
            </button>
        </Aux>
    );
}

export default cockpit;