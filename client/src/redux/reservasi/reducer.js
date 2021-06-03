import { GET_RESERVASI, RESERVASI_LOADING } from './types'

const initialState = {
  reservasi : [],
  loading: false
}


const reservasiReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_RESERVASI: 
      return {
        ...state,
        reservasi: action.payload,
        loading: false
    }
    case RESERVASI_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default reservasiReducer


