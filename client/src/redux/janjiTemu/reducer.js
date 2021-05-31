import { GET_JANJI_TEMU, JANJI_TEMU_LOADING } from './types'

const initialState = {
  janjiTemu : [],
  loading: false
}


const janjiTemuReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_JANJI_TEMU: 
      return {
        ...state,
        janjiTemu: action.payload,
        loading: false
    }
    case JANJI_TEMU_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default janjiTemuReducer


