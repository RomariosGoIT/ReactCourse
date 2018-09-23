import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    const compiledClasses = [];
    
    let btnClass = ' ';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.person.length <= 2) {
      compiledClasses.push(classes.red);
    }

    if(props.person.length <= 1) {
      compiledClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={compiledClasses.join(' ')}>This is realy working!!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                Toggle Person
            </button>
        </div>
    );
}

export default cockpit;