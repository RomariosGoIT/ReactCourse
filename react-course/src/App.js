import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: 'Roma', age: 34},
      {name: 'Dima', age: 35},
      {name: 'Jeka', age: 32}
    ]
  }

  switchNameHandle = (newName) => {
    // console.log('Was clicked')
    this.setState({
      person: [
        {name: newName, age: 34},
        {name: 'Dima', age: 35},
        {name: 'Jeka', age: 33}
      ]
    })
  }
  
  changeNameHandler = (event) => {
    this.setState({
      person: [
        {name: 'Romarios', age: 34},
        {name: event.target.value, age: 35},
        {name: 'Jeka', age: 33}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, i'm React App!</h1>
        <p>This is realy working!!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandle('Romarios!!')}>Switch Name</button>
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}        
        click={this.switchNameHandle.bind(this, 'Roman!')}
        >My hobbies: Drumming</Person>
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}        
        change = {this.changeNameHandler}
        />
        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!'))
  }
}

export default App;
