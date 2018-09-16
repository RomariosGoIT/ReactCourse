import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm React App!</h1>
        <p>This is realy working!!</p>
        <Person/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, i\'m React App!'))
  }
}

export default App;
