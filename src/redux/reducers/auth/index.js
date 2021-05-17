import * as AuthTypes from '../../types/auth'

const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthTypes.SIGN_UP_REQUEST:
            return { ...state, ...payload }

        default:
            return state
    }
}
