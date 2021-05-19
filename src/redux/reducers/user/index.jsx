import { UserTypes } from '../../types/user'

const initialState = {
    _id: null,
    email: '',
    username: null,

    loading: false,
    error: false,

    otherUser: {},
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.GET_USER_BY_USERNAME_SUCCESS:
            return { ...state, otherUser: payload, error: false, loading: false }
        case UserTypes.SET_USER:
            return { ...state, ...payload }
        case UserTypes.GET_USER:
            return { ...state, ...payload }
        case UserTypes.GET_USER_REQUEST:
            return { ...state, loading: true }
        case UserTypes.GET_USER_ERROR:
            return { ...state, error: true }
        case UserTypes.GET_USER_SUCCESS:
            return { ...state, error: false, loading: false }
        default:
            return state
    }
}

export default userReducer
