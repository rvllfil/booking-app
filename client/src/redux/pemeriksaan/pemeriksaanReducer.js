import { 
  ADD_PEMERIKSAAN_VISIT,
  EDIT_PEMERIKSAAN_VISIT, 
  GET_PEMERIKSAAN_VISIT, 
  PEMERIKSAAN_VISIT_LOADING,
  ADD_PEMERIKSAAN_KLINIK,
  GET_PEMERIKSAAN_KLINIK,
  PEMERIKSAAN_KLINIK_LOADING 
} from './pemeriksaanTypes'

const initPemeriksaan_visit = {
  pemeriksaan_visit : [],
  loading: false
}

const initPemeriksaan_klinik = {
  pemeriksaan_klinik : [],
  loading: false
}

export const pemeriksaanVisitReducer = (state = initPemeriksaan_visit, action) => {
  switch(action.type) {
    case GET_PEMERIKSAAN_VISIT: 
      return {
        ...state,
        pemeriksaan_visit: action.payload,
        loading: false
    }
    case ADD_PEMERIKSAAN_VISIT:
      return{
        ...state,
        pemeriksaan_visit: [action.payload, ...state.pemeriksaan_visit]
      }
    case PEMERIKSAAN_VISIT_LOADING:
      return {
        ...state,
        loading: true
      }
    case EDIT_PEMERIKSAAN_VISIT:
    default:
      return state
  }
}

export const pemeriksaanKlinikReducer = (state = initPemeriksaan_klinik, action) => {
  switch(action.type) {
    case GET_PEMERIKSAAN_KLINIK: 
      return {
        ...state,
        pemeriksaan_klinik: action.payload,
        loading: false
    }
    case ADD_PEMERIKSAAN_KLINIK:
      return{
        ...state,
        pemeriksaan_klinik: [action.payload, ...state.pemeriksaan_klinik]
      }
    case PEMERIKSAAN_KLINIK_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}

