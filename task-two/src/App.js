import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import OutputItem from './components/OutputItem';
import InputItem from './components/InputItem'
import Validation from './components/ValidationComponent'
import CharComponent from './components/CharComponent'


class App extends Component {

  state = {
    userInput: '',
    text: ''
  }

  textInputHandle = (evt) => {
    const change = evt.target.value;
    this.setState({
      userInput: change.length,
      text: change,
    })
  }

  deleteCharHandle = (index) => {
    const char = [...this.state.text]
    char.splice(index, 1);
    this.setState({
      userInput: char.length,
      text: char.join('')
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

    let charComp = (
      <div>
        {this.state.text.split('').map((char, index) =>{
          const id = 'id-' + Math.random().toString(36).substr(2, 16);
          return <CharComponent
          key={id}
          delete={()=>this.deleteCharHandle(index)} 
          text={char} />
        })}
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Task #2</h1>
        </header>
        <ol style={{textAlign: 'left'}}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div className="App-intro">
          <InputItem change={this.textInputHandle} text={this.state.text}/>
          <OutputItem text={this.state.userInput}/>
          {validation}
          {charComp}
        </div>        
      </div>
    );
  }
}

export default App;
