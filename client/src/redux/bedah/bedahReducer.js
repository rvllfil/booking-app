import { ADD_BEDAH, GET_BEDAH } from './bedahTypes'
import { v1 as uuid } from 'uuid'

const initialState = {
  bedah : [{
    id: uuid(),
    jenis_hewan: 'kucing',
    keluhan: 'batuk',
    hari: 'senin',
    waktu: '05:00-07:00',
    status: 'diajukan'
  }]
}


const bedahReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_BEDAH: 
      return {
        ...state,
    }
    case ADD_BEDAH:
      return{
        ...state,
        bedah: [action.payload, ...state.bedah]
      }
    default:
      return state
  }
}

export default bedahReducer


