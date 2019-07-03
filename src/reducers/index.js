import { combineReducers } from 'redux'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  state: messageReducer
})

export default rootReducer
