import { UserTypes } from '../../types/user'

const initialState = {
    _id: null,
    email: null,
    username: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UserTypes.SET_USER:
            console.log(payload)
            return { ...state, ...payload }
        default:
            return state
    }
}
