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

  switchNameHandle = () => {
    // console.log('Was clicked')
    this.setState({
      person: [
        {name: 'Romarios', age: 34},
        {name: 'Dima', age: 35},
        {name: 'Jeka', age: 33}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm React App!</h1>
        <p>This is realy working!!</p>
        <button onClick={this.switchNameHandle}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>My hobbies: Drumming</Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!'))
  }
}

export default App;
