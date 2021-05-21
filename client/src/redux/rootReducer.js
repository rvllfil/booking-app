import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import errorReducer  from './error/errorReducer'
import bedahReducer from './bedah/bedahReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  bedah: bedahReducer
})

export default rootReducer
