import React from 'react'

const cockpit = (props) => {
    const compiledClasses = [];

    if (props.person.length <= 2) {
      compiledClasses.push(classes.red);
    }

    if(props.person.length <= 1) {
      compiledClasses.push(classes.bold);
    }

    return(
        <div>
            <h1>Hi, i'm React App!</h1>
            <p className={compiledClasses.join(' ')}>This is realy working!!</p>
            <button 
                className={btnClass}
                onClick={this.togglePersonsHandle}>
                Toggle Person
            </button>
        </div>
    );
}

export default cockpit;