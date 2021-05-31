import { ADD_RAWAT_INAP, EDIT_RAWAT_INAP, GET_RAWAT_INAP, RAWAT_INAP_LOADING } from './rawatInapTypes'

const initialState = {
  rawatInap : [],
  loading: false
}


const rawatInapReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_RAWAT_INAP: 
      return {
        ...state,
        rawatInap: action.payload,
        loading: false
    }
    case ADD_RAWAT_INAP:
      return{
        ...state,
        rawatInap: [action.payload, ...state.rawatInap]
      }
    case RAWAT_INAP_LOADING:
      return {
        ...state,
        loading: true
      }
    case EDIT_RAWAT_INAP:
    default:
      return state
  }
}

export default rawatInapReducer


