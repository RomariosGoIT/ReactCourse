import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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
      )
    }

    return (
      <div className="App">
        <h1>Hi, i'm React App!</h1>
        <p>This is realy working!!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandle}>Toggle Person
        </button>
        {persons}        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!'))
  }
}

export default App;


