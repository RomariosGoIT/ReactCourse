import React, {Component} from 'react';
import classes from  './Person.css'
import withClasses from '../../../hoc/withClasses'
import Aux from '../../../hoc/Aux'
class Person extends Component {

    render(){

        const {name, age} = this.props;
        return(
            <Aux>
                <p onClick={this.props.click}>I'm a {name} and i am {age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </Aux>
        ) 

    }

}

export default withClasses(Person, classes.Person);