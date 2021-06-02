import { ADD_GROOMING, GET_GROOMING, GROOMING_LOADING, EDIT_GROOMING } from './groomingTypes'

const initialState = {
  grooming : [],
  loading: false
}


const groomingReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_GROOMING: 
      return {
        ...state,
        grooming: action.payload,
        loading: false
    }

    case EDIT_GROOMING:
      return state
    case ADD_GROOMING:
      return{
        ...state,
        grooming: [action.payload, ...state.grooming]
      }
    case GROOMING_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default groomingReducer


