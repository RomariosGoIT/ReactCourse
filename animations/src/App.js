import React, { Component } from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsShow: false,
    showBox: false
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
        <button 
          className="Button"
          onClick={()=> this.setState(prevState=>({showBox: !prevState.showBox}))}>Toggle</button>
          <br />
        <Transition 
          in={this.state.showBox} 
          timeout={1000}
          // mountOnEnter
          unmountOnExit >
            {state =>(
              <div style={{
                width: 100,
                height: 100,
                backgroundColor: 'red',
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }} />
            )}
        </Transition>
        <Transition
          mountOnEnter 
          unmountOnExit
          in={this.state.modalIsShow} 
          timeout={500} >
          {state=>(
            <Modal show={state} closed={this.closeModalHandler}/>
          )}
        </Transition>
        {this.state.modalIsShow ? (<Backdrop show />) : null}
        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
