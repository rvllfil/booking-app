import { 
  ADD_PEMERIKSAAN_VISIT, 
  GET_PEMERIKSAAN_VISIT, 
  PEMERIKSAAN_VISIT_LOADING,
  ADD_PEMERIKSAAN_KLINIK,
  GET_PEMERIKSAAN_KLINIK,
  PEMERIKSAAN_KLINIK_LOADING 
} from './pemeriksaanTypes'
import axios from 'axios'
import {tokenConfig} from '../auth/authActions'
import {returnErrors} from '../error/errorActions'

export const getPemeriksaanVisit = () => dispatch => {
  dispatch(setPemeriksaanVisitLoading())
  axios
    .get('/api/pemeriksaan-visit')
    .then(res =>
      dispatch({
        type: GET_PEMERIKSAAN_VISIT,
        payload: res.data
      })
    )
}

export const addPemeriksaanVisit = (pemeriksaanVisit, history) => (dispatch, getState) => {
  axios
    .post('/api/pemeriksaan-visit', pemeriksaanVisit, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_PEMERIKSAAN_VISIT,
        payload:res.data
      }),
      history.push('/home')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const setPemeriksaanVisitLoading = () => {
  return {
    type: PEMERIKSAAN_VISIT_LOADING
  }
}