import { GET_JANJI_TEMU, JANJI_TEMU_LOADING } from './types'
import axios from 'axios'

export const getJanjiTemu = (user_id) => dispatch => {
  dispatch(setJanjiLoading())
  axios
    .get(`/api/services?user_id=${user_id}`)
    .then(res =>
      dispatch({
        type: GET_JANJI_TEMU,
        payload: res.data
      })
    )
}

export const setJanjiLoading = () => {
  return {
    type: JANJI_TEMU_LOADING
  }
}
