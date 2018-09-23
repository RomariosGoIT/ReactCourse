import React, {Component} from 'react'
import Person from '../Persons/Person/Person'


class Persons extends Component {

  render(){

    return this.props.persons.map((persons, index) => {
      return <Person
      click={()=>this.props.clicked(index)}
      change={(event) => this.props.change(event, persons.id)} 
      name={persons.name}
      age={persons.age}
      key={persons.id}/>
    });
    
  }

}

export default Persons;