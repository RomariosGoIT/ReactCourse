import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClasses'
import Aux from '../hoc/Auxius'

export const AuthContext = React.createContext(false);
class App extends Component {

  state = {
    person: [
      {id:'asdf1',name: 'Roma', age: 34},
      {id:'dfgs3',name: 'Dima', age: 35},
      {id:'vbcnb1',name: 'Jeka', age: 32},
      {id:'jmhjm3',name: 'Kosty', age: 44}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
      
      })
  }

  loginHandle = () => {
    this.setState({authenticated: true})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] Inside getDerivedStateFromProps', 
    nextProps, prevState)
    return prevState;
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
        <Aux>
          <Cockpit
            title={this.props.title} 
            showPersons={this.state.showPersons} 
            person={this.state.person} 
            clicked={this.togglePersonsHandle}
            login={this.loginHandle} />
            <AuthContext.Provider value={this.state.authenticated}> 
              {persons}
            </AuthContext.Provider>        
        </Aux>
    );
  }
}

export default withClass(App, classes.App);


