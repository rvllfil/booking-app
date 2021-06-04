import axios from 'axios'
import { returnErrors, clearErrors } from '../error/errorActions'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './authTypes'

// Check Token and Load User
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

// Register User
export const register = ({nama, no_hp, alamat, email, password}, history) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  // Request body
  const body = JSON.stringify({
    nama,
    no_hp,
    alamat,
    email,
    password
  })
  axios.post('api/users', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
      })
      dispatch(clearErrors())
      history.push('/login')
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

// Login User
export const login = ({email, password}, history) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }
  // Request body
  const body = JSON.stringify({
    email,
    password
  })
  axios.post('api/auth', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
      dispatch(clearErrors())
      dispatch(loadUser())
      if(res.data.user.role === 'member') {
        history.push('/home')
      } else if ((res.data.user.role === 'admin'))
        history.push('/admin')
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = (history) => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  })
  history.push('/login')
}

// Setup config/headers and token
export const tokenConfig = getState => {
   // GET token from localStorage
   const token = getState().auth.token

   // Headers
   const config = {
     headers: {
       "Content-Type": "application/json"
     }
   }
 
   // If token, add to headers
   if(token) {
     config.headers['x-auth-token'] = token
   }

   return config
}