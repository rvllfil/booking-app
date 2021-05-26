import { GET_PENGAJUAN, PENGAJUAN_LOADING } from './pengajuanTypes'

const initialState = {
  pengajuan : [],
  loading: false
}


const pengajuanReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PENGAJUAN: 
      return {
        ...state,
        pengajuan: action.payload,
        loading: false
    }
    case PENGAJUAN_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default pengajuanReducer


