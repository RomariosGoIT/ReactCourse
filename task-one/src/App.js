import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

class App extends Component {

  state = {
    username: 'Roma',
  }

  changeUserName = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onChange={this.changeUserName} name={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
