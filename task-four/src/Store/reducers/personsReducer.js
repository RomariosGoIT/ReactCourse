import * as actionTypes from '../action'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(),
                name: action.personsData.name,
                age: action.personsData.age
            }
            return { 
                ...state, 
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            const updatedPerson = state.persons.filter(person => person.id !== action.personId);
            return { 
                ...state,
                persons: updatedPerson
            }
        default:
            return state
    }
}

export default reducer;