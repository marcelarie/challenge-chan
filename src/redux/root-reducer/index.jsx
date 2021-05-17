import { combineReducers } from 'redux'

//----> REDUCERS
import themePicker from '../reducers/theme'
import user from '../reducers/user'

const rootReducer = combineReducers({
    themePicker,
    user,
})

export default rootReducer
