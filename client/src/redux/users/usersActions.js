import { GET_USERS, USERS_LOADING } from './usersTypes'
import axios from 'axios'

export const getUsers = () => dispatch => {
  dispatch(setUsersLoading())
  axios
    .get('/api/users')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
}

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  }
}
