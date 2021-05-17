import { AuthTypes } from '../../types/auth'

const initialState = {
    loading: false,
    error: false,
    authenticated: false,
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthTypes.SIGN_UP_REQUEST:
            return { ...state, loading: true }
        case AuthTypes.SIGN_UP_SUCCESS:
            return { ...state, loading: false, error: false, authenticated: true }
        case AuthTypes.SIGN_UP_ERROR:
            return { ...state, loading: false, error: payload, authenticated: false }
        case AuthTypes.SIGN_OUT_REQUEST:
            return { ...state, loading: true }
        case AuthTypes.SIGN_OUT_SUCCESS:
            return { ...state, loading: false, error: false, authenticated: false }
        case AuthTypes.SIGN_OUT_ERROR:
            return { ...state, loading: false, error: payload, authenticated: false }
        default:
            return state
    }
}

export default authReducer
