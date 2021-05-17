import UserTypes from '../../types/user'

const initialState = {
    email: null,
    password: null,
    username: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.SET_USER:
            return { ...state, ...payload }

        default:
            return state
    }
}
