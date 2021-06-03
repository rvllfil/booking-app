import { ADD_RAWAT_INAP, EDIT_RAWAT_INAP, GET_RAWAT_INAP, RAWAT_INAP_LOADING } from './rawatInapTypes'
import axios from 'axios'
import {tokenConfig} from '../auth/authActions'
import {returnErrors} from '../error/errorActions'

export const getRawatInap = () => dispatch => {
  dispatch(setRawatInapLoading())
  axios
    .get('/api/rawat-inap')
    .then(res =>
      dispatch({
        type: GET_RAWAT_INAP,
        payload: res.data
      })
    )
}

export const getOneRawatInap = (id) => dispatch => {
  dispatch(setRawatInapLoading())
  axios
    .get(`/api/rawat-inap/${id}`)
    .then(res =>
      dispatch({
        type: GET_RAWAT_INAP,
        payload: res.data
      })
    )
}

export const addRawatInap = (rawatInap, history) => (dispatch, getState) => {
  axios
    .post('/api/rawat-inap', rawatInap, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_RAWAT_INAP,
        payload:res.data
      }),
      history.push('/home')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const editRawatInap = (id, rawatInap, history = null) => (dispatch, getState) => {
  axios
    .put(`/api/rawat-inap/${id}`, rawatInap, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: EDIT_RAWAT_INAP
      }),
      !history? '' : history.push('/admin')   
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const setRawatInapLoading = () => {
  return {
    type: RAWAT_INAP_LOADING
  }
}