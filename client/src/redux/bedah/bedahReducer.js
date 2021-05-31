import { ADD_BEDAH, GET_BEDAH, BEDAH_LOADING, EDIT_BEDAH } from './bedahTypes'

const initialState = {
  bedah : [],
  loading: false
}


const bedahReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BEDAH: 
      return {
        ...state,
        bedah: action.payload,
        loading: false
    }

    case EDIT_BEDAH:
      return state
    case ADD_BEDAH:
      return{
        ...state,
        bedah: [action.payload, ...state.bedah]
      }
    case BEDAH_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default bedahReducer


