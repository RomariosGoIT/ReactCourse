import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.person}
          clicked={this.deleteUserHandle}
          change={this.nameChangHandle} />    
    }
    
    return (
        <div className={classes.App}>
          <Cockpit 
          showPersons={this.state.showPersons} 
          person={this.state.person} 
          clicked={this.togglePersonsHandle} />
          {persons}        
        </div>
    );
  }
}

export default App;


