import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person'

class App extends Component {

  state = {
    person: [
      {id:'asdf1',name: 'Roma', age: 34},
      {id:'dfgs3',name: 'Dima', age: 35},
      {id:'vbcnb1',name: 'Jeka', age: 32},
      {id:'jmhjm3',name: 'Kosty', age: 44}
    ],
    showPersons: false
  }

  nameChangHandle = (event, id) => {
    const personsIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.person[personsIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.person]

    persons[personsIndex] = person;

    this.setState({person: persons})
  }
  
  deleteUserHandle = (indexUser) => {
    const persons = [...this.state.person];
    persons.splice(indexUser, 1)
    this.setState({person: persons});

  }

  togglePersonsHandle = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((persons, index) => {
            return <Person
            click={()=>this.deleteUserHandle(index)}
            change={(event) => this.nameChangHandle(event, persons.id)} 
            name={persons.name}
            age={persons.age}
            key={persons.id}/>
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    const compiledClasses = [];

    if (this.state.person.length <= 2) {
      compiledClasses.push(classes.red);
    }

    if(this.state.person.length <= 1) {
      compiledClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, i'm React App!</h1>
          <p className={compiledClasses.join(' ')}>This is realy working!!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandle}>
            Toggle Person
          </button>
          {persons}        
        </div>
    );
  }
}

export default App;


