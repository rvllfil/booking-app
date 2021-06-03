import { 
  ADD_PEMERIKSAAN_VISIT, 
  GET_PEMERIKSAAN_VISIT, 
  PEMERIKSAAN_VISIT_LOADING,
  ADD_PEMERIKSAAN_KLINIK,
  GET_PEMERIKSAAN_KLINIK,
  PEMERIKSAAN_KLINIK_LOADING, 
  EDIT_PEMERIKSAAN_VISIT,
  EDIT_PEMERIKSAAN_KLINIK
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

export const getOnePemeriksaanVisit = (id) => dispatch => {
  dispatch(setPemeriksaanVisitLoading())
  axios
    .get(`/api/pemeriksaan-visit/${id}`)
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

export const editPemeriksaanVisit = (id, pemeriksaanVisit, history = null) => (dispatch, getState) => {
  axios
    .put(`/api/pemeriksaan-visit/${id}`, pemeriksaanVisit, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: EDIT_PEMERIKSAAN_VISIT,
      }),
      !history? '' : history.push('/admin')  
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


export const getPemeriksaanKlinik = () => dispatch => {
  dispatch(setPemeriksaanKlinikLoading())
  axios
    .get('/api/pemeriksaan-klinik')
    .then(res =>
      dispatch({
        type: GET_PEMERIKSAAN_KLINIK,
        payload: res.data
      })
    )
}

export const getOnePemeriksaanKlinik = (id) => dispatch => {
  dispatch(setPemeriksaanKlinikLoading())
  axios
    .get(`/api/pemeriksaan-klinik/${id}`)
    .then(res =>
      dispatch({
        type: GET_PEMERIKSAAN_KLINIK,
        payload: res.data
      })
    )
}

export const addPemeriksaanKlinik = (pemeriksaanKlinik, history) => (dispatch, getState) => {
  axios
    .post('/api/pemeriksaan-klinik', pemeriksaanKlinik, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_PEMERIKSAAN_KLINIK,
        payload:res.data
      }),
      history.push('/home')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const editPemeriksaanKlinik = (id, pemeriksaanKlinik, history = null) => (dispatch, getState) => {
  axios
    .put(`/api/pemeriksaan-klinik/${id}`, pemeriksaanKlinik, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: EDIT_PEMERIKSAAN_KLINIK,
      }),
      !history? '' : history.push('/admin')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const setPemeriksaanKlinikLoading = () => {
  return {
    type: PEMERIKSAAN_KLINIK_LOADING
  }
}