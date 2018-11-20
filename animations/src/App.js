import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsShow: false
  }

  openModalHandler = () => {
    this.setState({modalIsShow: true})
  }

  closeModalHandler = () => {
    this.setState({modalIsShow: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsShow} closed={this.closeModalHandler}/>
        <Backdrop show={this.state.modalIsShow} />
        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
