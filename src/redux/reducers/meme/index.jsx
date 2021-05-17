import { MemeTypes } from '../../types/meme'

const initialState = {
    meme: null,
    error: null,
    loading: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case MemeTypes.POST_MEME_REQUEST:
            return { ...state, loading: true }
        case MemeTypes.POST_MEME_SUCCESS:
            return { ...state, meme: payload, loading: false, error: false }
        case MemeTypes.POST_MEME_ERROR:
            console.log(payload)
            return { ...state, error: true, loading: false }
        default:
            return state
    }
}
