import * as actionTypes from '../action'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.ADD_PERSON) {
        const newPerson = {
            id: Math.random(),
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return { 
            ...state, 
            persons: state.persons.concat(newPerson)
        }
    }

    if (action.type === actionTypes.DELETE_PERSON) {
        const updatedPerson = state.persons.filter(person => person.id !== action.personId);
        return { 
            ...state,
            persons: updatedPerson
        }    
    }

    return state
}

export default reducer;