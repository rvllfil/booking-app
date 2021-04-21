import { combineReducers } from 'redux'
import bedahReducer from './bedah/bedahReducer'

const rootReducer = combineReducers({
  bedah: bedahReducer
})

export default rootReducer
