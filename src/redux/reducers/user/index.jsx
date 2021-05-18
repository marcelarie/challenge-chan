import { UserTypes } from '../../types/user'

const initialState = {
    _id: null,
    email: '',
    username: null,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.SET_USER:
            return { ...state, email: payload.email }
        default:
            return state
    }
}

export default userReducer
