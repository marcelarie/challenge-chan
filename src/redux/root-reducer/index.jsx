import { combineReducers } from 'redux'

//----> REDUCERS
import themePicker from '../reducers/theme'
import user from '../reducers/user'
import auth from '../reducers/auth'
import meme from '../reducers/meme'
import search from '../reducers/search'

const rootReducer = combineReducers({
    auth,
    user,
    meme,
    search,
    themePicker,
})

export default rootReducer
