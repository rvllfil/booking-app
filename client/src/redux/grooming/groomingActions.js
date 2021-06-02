import { ADD_GROOMING, GET_GROOMING, GROOMING_LOADING, EDIT_GROOMING } from './groomingTypes'
import axios from 'axios'
import {tokenConfig} from '../auth/authActions'
import {returnErrors} from '../error/errorActions'

export const getGrooming = () => dispatch => {
  dispatch(setGroomingLoading())
  axios
    .get('/api/grooming')
    .then(res =>
      dispatch({
        type: GET_GROOMING,
        payload: res.data
      })
    )
}

export const getOneGrooming = (id) => dispatch => {
  dispatch(setGroomingLoading())
  axios
    .get(`/api/grooming/${id}`)
    .then(res =>
      dispatch({
        type: GET_GROOMING,
        payload: res.data
      })
    )
}

export const addGrooming = (grooming, history) => (dispatch, getState) => {
  axios
    .post('/api/grooming', grooming, tokenConfig(getState))
    .then(res => 
      dispatch({
        type: ADD_GROOMING,
        payload:res.data
      }),
      history.push('/home')  
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const editGrooming = (id, grooming, history) => (dispatch, getState) => {
  axios
    .put(`/api/grooming/${id}`, grooming, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_GROOMING
      })  
    )
    .then(history.push('/admin'))
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}


export const setGroomingLoading = () => {
  return {
    type: GROOMING_LOADING
  }
}