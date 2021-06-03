import { GET_RESERVASI, RESERVASI_LOADING } from './types'
import axios from 'axios'

export const getReservasi = () => dispatch => {
  dispatch(setReservasiLoading())
  axios
    .get(`/api/services`)
    .then(res =>
      dispatch({
        type: GET_RESERVASI,
        payload: res.data
      })
    )
}

export const setReservasiLoading = () => {
  return {
    type: RESERVASI_LOADING
  }
}
