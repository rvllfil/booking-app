import { GET_BEDAH, BEDAH_LOADING, ADD_BEDAH  } from './bedahTypes'
import axios from 'axios'

export const getBedah = () => dispatch => {
  dispatch(setBedahLoading)
  axios
    .get('/api/bedah')
    .then(res =>
      dispatch({
        type: GET_BEDAH,
        payload: res.data
      })
    )
}

export const addBedah = bedah => dispatch => {
  axios
    .post('/api/bedah', bedah)
    .then(res => 
      dispatch({
        type: ADD_BEDAH,
        payload:res.data
      })  
    )
}

export const setBedahLoading = () => {
  return {
    type: BEDAH_LOADING
  }
}