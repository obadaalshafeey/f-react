import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import loginReducer from './loginReducer'
export default combineReducers({
  users: userReducer,
  login:loginReducer
})