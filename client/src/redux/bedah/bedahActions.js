import { GET_BEDAH, BEDAH_LOADING, ADD_BEDAH, EDIT_BEDAH  } from './bedahTypes'
import axios from 'axios'
import {tokenConfig} from '../auth/authActions'
import {returnErrors} from '../error/errorActions'

export const getBedah = () => dispatch => {
  dispatch(setBedahLoading())
  axios
    .get('/api/bedah')
    .then(res =>
      dispatch({
        type: GET_BEDAH,
        payload: res.data
      })
    )
}

export const getOneBedah = (id) => dispatch => {
  dispatch(setBedahLoading())
  axios
    .get(`/api/bedah/${id}`)
    .then(res =>
      dispatch({
        type: GET_BEDAH,
        payload: res.data
      })
    )
}

export const addBedah = (bedah, history) => (dispatch, getState) => {
  axios
    .post('/api/bedah', bedah, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_BEDAH,
        payload:res.data
      }),
      history.push('/home')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const editBedah = (id, bedah, history = null) => (dispatch, getState) => {
  axios
    .put(`/api/bedah/${id}`, bedah, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_BEDAH
      })  
    )
    .then(!history ? '' :history.push('/admin'))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}


export const setBedahLoading = () => {
  return {
    type: BEDAH_LOADING
  }
}