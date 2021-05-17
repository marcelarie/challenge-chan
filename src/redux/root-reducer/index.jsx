import { combineReducers } from 'redux'

//----> REDUCERS
import themePicker from '../reducers/theme'
import user from '../reducers/user'
import auth from '../reducers/auth'

const rootReducer = combineReducers({
    auth,
    user,
    themePicker,
})

export default rootReducer
