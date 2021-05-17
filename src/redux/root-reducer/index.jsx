import { combineReducers } from 'redux'

//----> REDUCERS
import themePicker from '../reducers/theme'
import user from '../reducers/user'
import auth from '../reducers/auth'
import meme from '../reducers/meme'

const rootReducer = combineReducers({
    auth,
    user,
    meme,
    themePicker,
})

export default rootReducer
