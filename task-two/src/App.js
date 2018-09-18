import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OutputItem from './components/OutputItem';
import InputItem from './components/InputItem'
import Validation from './components/ValidationComponent'

class App extends Component {

  state = {
    userInput: '',
    text: '',
    textLength: true
  }

  textInputHandle = (evt) => {
    const change = evt.target.value;
    this.setState({
      userInput: change.length,
      text: change,
    })
  }

  render() {

    let validation = null;

    if (this.state.userInput >= 5) {
      validation = <Validation text="Text long enaugh!"/>
    } else if (this.state.userInput === 0) {
      validation = null;
    } else {
      validation = <Validation text="Text to short!"/>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Task #2</h1>
        </header>
        <p className="App-intro">
          <InputItem change={this.textInputHandle}/>
          <OutputItem text={this.state.userInput}/>
          {validation}
        </p>
        
      </div>
    );
  }
}

export default App;
