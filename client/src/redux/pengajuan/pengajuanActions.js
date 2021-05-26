import { GET_PENGAJUAN, PENGAJUAN_LOADING } from './pengajuanTypes'
import axios from 'axios'

export const getPengajuan = () => dispatch => {
  dispatch(setPengajuanLoading())
  axios
    .get('/api/pengajuan')
    .then(res =>
      dispatch({
        type: GET_PENGAJUAN,
        payload: res.data
      })
    )
}

export const setPengajuanLoading = () => {
  return {
    type: PENGAJUAN_LOADING
  }
}
