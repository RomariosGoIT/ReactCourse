import React from 'react'
import Person from '../Persons/Person/Person'


const persons = (props) => props.persons.map((persons, index) => {
    return <Person
    click={()=>props.clicked(index)}
    change={(event) => props.change(event, persons.id)} 
    name={persons.name}
    age={persons.age}
    key={persons.id}/>
  });


  export default persons;