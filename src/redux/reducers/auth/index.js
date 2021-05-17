import { AuthTypes } from '../../types/auth'

const initialState = {
    loading: false,
    error: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthTypes.SIGN_UP_REQUEST:
            return { ...state, loading: true }
        case AuthTypes.SIGN_UP_SUCCESS:
            return { ...state, loading: false, error: false }
        case AuthTypes.SIGN_UP_ERROR:
            return { ...state, loading: false, error: payload }
        default:
            return state
    }
}
